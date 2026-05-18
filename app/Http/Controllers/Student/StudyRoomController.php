<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;
use App\Models\StudyRoom;
use App\Models\StudyRoomMessage;
use App\Events\StudyRoomSync;
use App\Events\StudyRoomMessageEvent;
use App\Events\StudyRoomReactionEvent;
use Inertia\Inertia;

class StudyRoomController extends Controller
{
    public function show(Course $course)
    {
        if (!$course->allow_study_rooms) {
            return redirect()->back()->with('error', 'غرف المذاكرة غير مفعلة لهذا الكورس.');
        }
 
        $room = StudyRoom::firstOrCreate(
            ['course_id' => $course->id],
            [
                'video_url' => $course->lessons()->first()?->video_url,
                'leader_id' => auth()->id()
            ]
        );
 
        // If no leader is assigned or leader is no longer valid, take leadership
        if (!$room->leader_id) {
            $room->update(['leader_id' => auth()->id()]);
        }
 
        $room->load(['leader', 'course.lessons']);
        $messages = $room->messages()->with('user')->latest()->take(50)->get()->reverse()->values();

        // Fetch Timed Comments for the current room's video (if matched to a lesson)
        $currentLesson = $course->lessons()->where('video_url', $room->video_url)->first();
        $timedComments = [];
        if ($currentLesson) {
            $timedComments = \App\Models\TimedComment::where('lesson_id', $currentLesson->id)
                ->with('user')
                ->get();
        }

        return Inertia::render('StudyRoom/Index', [
            'room' => $room,
            'initialMessages' => $messages,
            'initialTimedComments' => $timedComments,
            'user' => auth()->user()
        ]);
    }

    public function addTimedComment(Request $request, StudyRoom $room)
    {
        $request->validate([
            'content' => 'required|string',
            'timestamp' => 'required|integer',
        ]);

        // Find the lesson associated with the current video_url
        $lesson = $room->course->lessons()->where('video_url', $room->video_url)->first();

        if (!$lesson) {
            return response()->json(['message' => 'Lesson not found for this video'], 422);
        }

        $comment = \App\Models\TimedComment::create([
            'user_id' => auth()->id(),
            'lesson_id' => $lesson->id,
            'content' => $request->content,
            'timestamp' => $request->timestamp,
        ]);

        $comment->load('user');

        // Broadcast to others so it appears for them too in real-time
        // We might need a new event for this: StudyRoomTimedCommentEvent
        // But for now, returning it is enough for the local user.
        
        return response()->json($comment);
    }

    public function sync(Request $request, StudyRoom $room)
    {
        // Only the current leader can sync state
        if ($room->leader_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        session_write_close();

        $room->update([
            'video_url' => $request->video_url,
            'is_playing' => $request->is_playing,
            'current_time' => $request->current_time,
            'volume' => $request->volume ?? $room->volume ?? 1.0,
            'stage_mode' => $request->stage_mode ?? $room->stage_mode,
            'last_sync_at' => now(),
        ]);

        broadcast(new StudyRoomSync(
            $room->id,
            $room->video_url,
            $room->is_playing,
            $room->current_time,
            $room->volume,
            auth()->user(),
            $room->stage_mode
        ))->toOthers();

        return response()->json(['status' => 'success']);
    }

    public function sendMessage(Request $request, StudyRoom $room)
    {
        $message = $room->messages()->create([
            'user_id' => auth()->id(),
            'content' => $request->content,
            'type' => $request->type ?? 'text',
        ]);

        $message->load('user');

        broadcast(new StudyRoomMessageEvent($message))->toOthers();

        return response()->json($message);
    }

    public function react(Request $request, StudyRoom $room)
    {
        broadcast(new StudyRoomReactionEvent(
            $room->id,
            auth()->id(),
            $request->emoji
        ))->toOthers();

        return response()->json(['status' => 'success']);
    }

    public function draw(Request $request, StudyRoom $room)
    {
        // Only the leader can draw
        if ($room->leader_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        broadcast(new \App\Events\StudyRoomDrawingEvent(
            $room->id,
            $request->action, // 'draw' or 'clear'
            $request->data
        ))->toOthers();

        return response()->json(['status' => 'success']);
    }

    public function raiseHand(StudyRoom $room)
    {
        $queue = $room->leadership_queue ?? [];
        if (!in_array(auth()->id(), $queue)) {
            $queue[] = auth()->id();
            $room->update(['leadership_queue' => $queue]);
            
            broadcast(new StudyRoomSync(
                $room->id,
                $room->video_url,
                $room->is_playing,
                $room->current_time,
                $room->volume ?? 1.0,
                $room->leader,
                $room->stage_mode
            ))->toOthers(); // Refreshes queue for everyone
        }
        return response()->json(['status' => 'success', 'queue' => $queue]);
    }

    public function cancelHand(StudyRoom $room)
    {
        $queue = $room->leadership_queue ?? [];
        $room->update(['leadership_queue' => array_values(array_filter($queue, fn($id) => $id != auth()->id()))]);
        
        broadcast(new StudyRoomSync($room->id, $room->video_url, $room->is_playing, $room->current_time, $room->volume ?? 1.0, $room->leader, $room->stage_mode))->toOthers();
        
        return response()->json(['status' => 'success']);
    }

    public function takeLeadership(Request $request, StudyRoom $room)
    {
        $targetUserId = $request->user_id ?? auth()->id();

        // Security check: Only the user themselves (if allowed by system logic) or current leader can take/transfer leadership
        if ($targetUserId !== auth()->id() && $room->leader_id !== auth()->id()) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $room->update([
            'leader_id' => $targetUserId,
            'leadership_queue' => array_values(array_filter($room->leadership_queue ?? [], fn($id) => $id != $targetUserId))
        ]);
        
        $leaderUser = \App\Models\User::find($targetUserId);

        broadcast(new StudyRoomSync(
            $room->id,
            $room->video_url,
            $room->is_playing,
            $room->current_time,
            $room->volume ?? 1.0,
            $leaderUser,
            $room->stage_mode
        ))->toOthers();

        return response()->json(['status' => 'success', 'leader' => $leaderUser]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lesson;
use App\Models\TimedComment;

class TimedCommentController extends Controller
{
    public function index(Lesson $lesson)
    {
        return $lesson->timedComments()->with('user')->orderBy('timestamp')->get();
    }

    public function store(Request $request, Lesson $lesson)
    {
        $validated = $request->validate([
            'content' => 'required|string|max:500',
            'timestamp' => 'required|integer'
        ]);

        $comment = $lesson->timedComments()->create([
            'user_id' => auth()->id(),
            'content' => $validated['content'],
            'timestamp' => $validated['timestamp']
        ]);

        return response()->json($comment->load('user'));
    }

    public function destroy(TimedComment $comment)
    {
        if ($comment->user_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        $comment->delete();
        return response()->json(['success' => true]);
    }
}

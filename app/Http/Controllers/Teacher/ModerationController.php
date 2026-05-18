<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\TimedComment;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModerationController extends Controller
{
    public function comments()
    {
        // Get comments for lessons belonging to courses owned by this teacher
        $comments = TimedComment::whereHas('lesson.course', function($query) {
            $query->where('teacher_id', auth()->id());
        })
        ->with(['user', 'lesson.course'])
        ->latest()
        ->get();

        return Inertia::render('Teacher/Moderation/Comments', [
            'comments' => $comments
        ]);
    }

    public function destroyComment(TimedComment $comment)
    {
        // Security check: ensure the comment belongs to a course owned by this teacher
        if ($comment->lesson->course->teacher_id !== auth()->id()) {
            abort(403);
        }

        $comment->delete();
        return redirect()->back()->with('success', 'تم حذف التعليق بنجاح');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function toggleComplete(Request $request, Lesson $lesson)
    {
        $user = auth()->user();

        // Check if already completed
        if ($user->completedLessons()->where('lesson_id', $lesson->id)->exists()) {
            $user->completedLessons()->detach($lesson->id);
            $isCompleted = false;
        } else {
            $user->completedLessons()->attach($lesson->id, [
                'course_id' => $lesson->course_id,
                'completed_at' => now()
            ]);
            $isCompleted = true;
            
            // Auto-enroll in the course if not already enrolled
            if (!$user->courses()->where('course_id', $lesson->course_id)->exists()) {
                $user->courses()->attach($lesson->course_id, ['enrolled_at' => now()]);
            }
            
            // Check if all lessons are completed to mark course as completed
            $course = $lesson->course;
            $totalLessons = $course->lessons()->count();
            $completedLessonsCount = $user->completedLessons()->whereIn('lesson_id', $course->lessons()->pluck('id'))->count();
            
            if ($totalLessons > 0 && $completedLessonsCount === $totalLessons) {
                $user->courses()->updateExistingPivot($course->id, ['completed_at' => now()]);
            } else {
                $user->courses()->updateExistingPivot($course->id, ['completed_at' => null]);
            }
        }

        return back();
    }
}

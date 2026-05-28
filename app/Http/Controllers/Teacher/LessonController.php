<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;
use App\Models\Lesson;
use Inertia\Inertia;
use Illuminate\Support\Str;

class LessonController extends Controller
{
    public function create(Course $course)
    {
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        return Inertia::render('Teacher/Lessons/Form', [
            'course' => $course,
            'lesson' => null
        ]);
    }

    public function store(Request $request, Course $course)
    {
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        // Validate everything at once
        $request->validate([
            'lessons' => 'required|array|min:1',
            'lessons.*.title' => 'required|string|max:255',
            'lessons.*.video_url' => 'nullable|string',
            'lessons.*.video_file' => 'nullable|file|mimetypes:video/mp4,video/webm,video/ogg|max:512000', // 500MB max
            'lessons.*.content' => 'nullable|string',
            'lessons.*.duration' => 'required|integer|min:0',
            'lessons.*.is_preview' => 'boolean',
            'lessons.*.resources' => 'nullable|array',
            'lessons.*.faqs' => 'nullable|array',
        ]);

        foreach ($request->input('lessons') as $index => $lessonData) {
            $lessonData['course_id'] = $course->id;
            $lessonData['slug'] = Str::slug($lessonData['title']) . '-' . rand(1000, 9999);
            $lessonData['position'] = $course->lessons()->count() + 1;

            // Handle video file upload
            if ($request->hasFile("lessons.{$index}.video_file")) {
                $file = $request->file("lessons.{$index}.video_file");
                $path = $file->store('videos', 'public');
                $lessonData['video_url'] = '/storage/' . $path;
            }

            $lesson = Lesson::create($lessonData);

            // Send notification to all enrolled students
            $students = $course->users()->where('role', 'student')->get();
            foreach ($students as $student) {
                $student->notify(new \App\Notifications\NewLessonNotification($lesson, $course));
            }
        }

        return redirect()->route('teacher.courses.edit', $course->id)->with('success', 'تم إضافة الدروس بنجاح');
    }

    public function destroy(Lesson $lesson)
    {
        $course = $lesson->course;
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        $lesson->delete();

        return redirect()->route('teacher.courses.edit', $course->id)->with('success', 'تم حذف الدرس بنجاح');
    }
}

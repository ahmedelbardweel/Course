<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;
use Inertia\Inertia;

use App\Models\Category;
use Illuminate\Support\Str;

class CourseController extends Controller
{
    public function index()
    {
        $courses = auth()->user()->taughtCourses()
            ->with('category')
            ->withCount(['users', 'lessons', 'quizzes', 'challenges'])
            ->latest()
            ->get();

        return Inertia::render('Teacher/Courses/Index', [
            'courses' => $courses
        ]);
    }

    public function create()
    {
        return Inertia::render('Teacher/Courses/Form', [
            'categories' => Category::all(),
            'course' => null
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'level' => 'required|in:beginner,intermediate,advanced',
            'thumbnail' => 'required|string',
            'is_published' => 'boolean',
            'allow_study_rooms' => 'boolean',
            'allow_timed_comments' => 'boolean'
        ]);

        $validated['slug'] = Str::slug($validated['title']) . '-' . rand(1000, 9999);
        $validated['teacher_id'] = auth()->id();

        $course = Course::create($validated);

        if ($course && $course->is_published) {
            $students = \App\Models\User::where('role', 'student')->get();
            foreach ($students as $student) {
                $student->notify(new \App\Notifications\NewCourseNotification($course));
            }
        }

        return redirect()->route('teacher.courses.index')->with('success', 'تم إنشاء الكورس بنجاح');
    }

    public function edit(Course $course)
    {
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        return Inertia::render('Teacher/Courses/Form', [
            'categories' => Category::all(),
            'course' => $course->load('lessons')
        ]);
    }

    public function update(Request $request, Course $course)
    {
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        $validated = $request->validate([
            'category_id' => 'required|exists:categories,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'level' => 'required|in:beginner,intermediate,advanced',
            'thumbnail' => 'nullable|string',
            'is_published' => 'boolean',
            'allow_study_rooms' => 'boolean',
            'allow_timed_comments' => 'boolean'
        ]);

        if ($course->title !== $validated['title']) {
            $validated['slug'] = Str::slug($validated['title']) . '-' . rand(1000, 9999);
        }

        $course->update($validated);

        return redirect()->route('teacher.courses.index')->with('success', 'تم تحديث الكورس بنجاح');
    }

    public function destroy(Course $course)
    {
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        $course->delete();

        return redirect()->route('teacher.courses.index')->with('success', 'تم حذف الكورس بنجاح');
    }
}

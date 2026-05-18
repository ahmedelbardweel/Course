<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index(Request $request)
    {
        $query = Course::with('category')->where('is_published', true);

        // Apply category filter
        if ($request->filled('category')) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('slug', $request->category);
            });
        }

        // Apply search filter
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        $courses = $query->latest()->get();

        if (auth()->check()) {
            $enrolledCourseIds = auth()->user()->courses()->pluck('courses.id')->toArray();
            $courses->each(function ($course) use ($enrolledCourseIds) {
                $course->is_enrolled = in_array($course->id, $enrolledCourseIds);
            });
        } else {
            $courses->each(function ($course) {
                $course->is_enrolled = false;
            });
        }

        $categories = Category::all();

        return Inertia::render('Courses/Index', [
            'courses' => $courses,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category'])
        ]);
    }
    public function show($slug, Request $request)
    {
        $course = Course::with([
            'category',
            'quizzes',
            'lessons' => function ($query) {
                $query->orderBy('position');
            },
            'challenges' => function ($query) {
                $query->where('is_active', true)->where('end_date', '>', now());
            }
        ])->where('slug', $slug)->firstOrFail();

        // Get the current lesson (default to first)
        $lessonId = $request->query('lesson');
        $currentLesson = null;
        
        if ($course->lessons->count() > 0) {
            $currentLesson = $lessonId
                ? $course->lessons->where('id', $lessonId)->first()
                : $course->lessons->first();
        }

        $isEnrolled = auth()->check() ? auth()->user()->courses()->where('course_id', $course->id)->exists() : false;
        $completedLessonsIds = auth()->check() 
            ? auth()->user()->completedLessons()
                ->where('lesson_user.course_id', $course->id)
                ->pluck('lessons.id')
                ->toArray() 
            : [];

        return Inertia::render('Courses/Show', [
            'course' => $course,
            'currentLesson' => $currentLesson,
            'isEnrolled' => $isEnrolled,
            'completedLessonsIds' => $completedLessonsIds,
        ]);
    }

    public function myLearning()
    {
        $user = auth()->user();

        $enrolledCourses = $user->courses()->with('category')->withCount('lessons')->get()->map(function ($course) use ($user) {
            $completedLessonsCount = $user->completedLessons()
                ->where('lesson_user.course_id', $course->id)
                ->count();

            $progress = $course->lessons_count > 0
                ? round(($completedLessonsCount / $course->lessons_count) * 100)
                : 0;

            $course->completed_lessons_count = $completedLessonsCount;
            $course->progress = $progress;

            return $course;
        });

        return Inertia::render('Courses/MyLearning', [
            'enrolledCourses' => $enrolledCourses
        ]);
    }
}

<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Challenge;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChallengeController extends Controller
{
    public function index()
    {
        $challenges = Challenge::where('teacher_id', auth()->id())
            ->with(['course', 'users'])
            ->withCount('users')
            ->latest()
            ->get();

        return Inertia::render('Teacher/Challenges/Index', [
            'challenges' => $challenges
        ]);
    }

    public function create()
    {
        $courses = auth()->user()->taughtCourses()->get(['id', 'title']);
        
        return Inertia::render('Teacher/Challenges/Form', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'points' => 'required|integer|min:0',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'is_active' => 'boolean'
        ]);

        $challenge = Challenge::create([
            'teacher_id' => auth()->id(),
            ...$validated
        ]);

        if ($challenge && $challenge->is_active) {
            $course = $challenge->course;
            if ($course) {
                $students = $course->users()->where('role', 'student')->get();
                foreach ($students as $student) {
                    $student->notify(new \App\Notifications\NewChallengeNotification($challenge));
                }
            }
        }

        return redirect()->route('teacher.challenges.index')->with('success', 'تم إنشاء التحدي بنجاح');
    }

    public function edit(Challenge $challenge)
    {
        if ($challenge->teacher_id !== auth()->id()) abort(403);
        
        $courses = auth()->user()->taughtCourses()->get(['id', 'title']);

        return Inertia::render('Teacher/Challenges/Form', [
            'challenge' => $challenge,
            'courses' => $courses
        ]);
    }

    public function update(Request $request, Challenge $challenge)
    {
        if ($challenge->teacher_id !== auth()->id()) abort(403);

        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'points' => 'required|integer|min:0',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'is_active' => 'boolean'
        ]);

        $challenge->update($validated);

        return redirect()->route('teacher.challenges.index')->with('success', 'تم تحديث التحدي بنجاح');
    }

    public function destroy(Challenge $challenge)
    {
        if ($challenge->teacher_id !== auth()->id()) abort(403);
        $challenge->delete();
        return redirect()->back()->with('success', 'تم حذف التحدي');
    }
}

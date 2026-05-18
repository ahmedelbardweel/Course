<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\Course;
use App\Models\Question;
use App\Models\Option;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    public function index()
    {
        $quizzes = Quiz::with('course')
            ->whereHas('course', function ($query) {
                $query->where('teacher_id', auth()->id());
            })
            ->latest()
            ->get();

        return Inertia::render('Teacher/Quizzes/Index', [
            'quizzes' => $quizzes
        ]);
    }

    public function create()
    {
        $courses = Course::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Quizzes/Form', [
            'courses' => $courses
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'passing_score' => 'required|integer|min:0|max:100',
            'duration' => 'nullable|integer|min:1',
            'attempts_limit' => 'required|integer|min:1',
            'start_time' => 'nullable|date',
            'end_time' => 'nullable|date|after_or_equal:start_time',
            'instructions' => 'nullable|string',
            'is_published' => 'boolean',
            'questions' => 'required|array|min:1',
            'questions.*.question_text' => 'required|string',
            'questions.*.points' => 'required|integer|min:1',
            'questions.*.options' => 'required|array|min:2',
            'questions.*.options.*.option_text' => 'required|string',
            'questions.*.options.*.is_correct' => 'required|boolean',
        ]);

        // Security check: course belongs to teacher
        $course = Course::where('id', $validated['course_id'])->where('teacher_id', auth()->id())->firstOrFail();

        DB::transaction(function () use ($validated) {
            $quiz = Quiz::create([
                'course_id' => $validated['course_id'],
                'title' => $validated['title'],
                'description' => $validated['description'],
                'passing_score' => $validated['passing_score'],
                'duration' => $validated['duration'],
                'attempts_limit' => $validated['attempts_limit'],
                'start_time' => $validated['start_time'],
                'end_time' => $validated['end_time'],
                'instructions' => $validated['instructions'],
                'is_published' => $validated['is_published'] ?? true,
            ]);

            foreach ($validated['questions'] as $qData) {
                $question = $quiz->questions()->create([
                    'question_text' => $qData['question_text'],
                    'points' => $qData['points'],
                    'type' => 'multiple_choice',
                ]);

                foreach ($qData['options'] as $oData) {
                    $question->options()->create([
                        'option_text' => $oData['option_text'],
                        'is_correct' => $oData['is_correct'],
                    ]);
                }
            }
        });

        return redirect()->route('teacher.quizzes.index')->with('success', 'تم إنشاء الاختبار بنجاح');
    }

    public function edit(Quiz $quiz)
    {
        $quiz->load('questions.options');
        $courses = Course::where('teacher_id', auth()->id())->get();

        return Inertia::render('Teacher/Quizzes/Form', [
            'quiz' => $quiz,
            'courses' => $courses
        ]);
    }

    public function update(Request $request, Quiz $quiz)
    {
        $validated = $request->validate([
            'course_id' => 'required|exists:courses,id',
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'passing_score' => 'required|integer|min:0|max:100',
            'duration' => 'nullable|integer|min:1',
            'attempts_limit' => 'required|integer|min:1',
            'start_time' => 'nullable|date',
            'end_time' => 'nullable|date|after_or_equal:start_time',
            'instructions' => 'nullable|string',
            'is_published' => 'boolean',
            'questions' => 'required|array|min:1',
            'questions.*.question_text' => 'required|string',
            'questions.*.points' => 'required|integer|min:1',
            'questions.*.options' => 'required|array|min:2',
            'questions.*.options.*.option_text' => 'required|string',
            'questions.*.options.*.is_correct' => 'required|boolean',
        ]);

        DB::transaction(function () use ($validated, $quiz) {
            $quiz->update([
                'course_id' => $validated['course_id'],
                'title' => $validated['title'],
                'description' => $validated['description'],
                'passing_score' => $validated['passing_score'],
                'duration' => $validated['duration'],
                'attempts_limit' => $validated['attempts_limit'],
                'start_time' => $validated['start_time'],
                'end_time' => $validated['end_time'],
                'instructions' => $validated['instructions'],
                'is_published' => $validated['is_published'] ?? $quiz->is_published,
            ]);

            // Sync questions: simpler to delete and recreate for this MVP
            $quiz->questions()->delete();

            foreach ($validated['questions'] as $qData) {
                $question = $quiz->questions()->create([
                    'question_text' => $qData['question_text'],
                    'points' => $qData['points'],
                    'type' => 'multiple_choice',
                ]);

                foreach ($qData['options'] as $oData) {
                    $question->options()->create([
                        'option_text' => $oData['option_text'],
                        'is_correct' => $oData['is_correct'],
                    ]);
                }
            }
        });

        return redirect()->route('teacher.quizzes.index')->with('success', 'تم تحديث الاختبار بنجاح');
    }

    public function destroy(Quiz $quiz)
    {
        $quiz->delete();
        return redirect()->route('teacher.quizzes.index')->with('success', 'تم حذف الاختبار بنجاح');
    }
}

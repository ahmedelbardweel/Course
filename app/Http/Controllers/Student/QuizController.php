<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\QuizAttempt;
use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    public function show(Course $course, Quiz $quiz)
    {
        // Ensure the quiz belongs to the course
        if ($quiz->course_id !== $course->id) {
            abort(404);
        }

        // Check if user is enrolled
        if (!auth()->user()->courses()->where('course_id', $course->id)->exists()) {
            abort(403, 'يجب الاشتراك في الكورس أولاً.');
        }

        // Load questions without showing which options are correct
        $quiz->load(['questions' => function($q) {
            $q->select('id', 'quiz_id', 'question_text', 'type', 'points');
        }, 'questions.options' => function($q) {
            $q->select('id', 'question_id', 'option_text'); // EXCLUDE is_correct
        }]);

        // Check previous attempts
        $previousAttempts = QuizAttempt::where('quiz_id', $quiz->id)
            ->where('user_id', auth()->id())
            ->latest()
            ->get();

        return Inertia::render('Courses/TakeQuiz', [
            'course' => $course,
            'quiz' => $quiz->only([
                'id', 'title', 'description', 'passing_score', 'duration', 
                'attempts_limit', 'start_time', 'end_time', 'instructions', 
                'questions'
            ]),
            'previousAttempts' => $previousAttempts
        ]);
    }

    public function submit(Request $request, Quiz $quiz)
    {
        $request->validate([
            'answers' => 'required|array',
            'answers.*.question_id' => 'required|exists:questions,id',
            'answers.*.option_id' => 'required|exists:options,id',
        ]);

        // Calculate score
        $score = 0;
        $totalPoints = 0;
        
        $quiz->load('questions.options');

        foreach ($quiz->questions as $question) {
            $totalPoints += $question->points;
            
            // Find user's answer for this question
            $userAnswer = collect($request->answers)->firstWhere('question_id', $question->id);
            
            if ($userAnswer) {
                $selectedOption = $question->options->firstWhere('id', $userAnswer['option_id']);
                if ($selectedOption && $selectedOption->is_correct) {
                    $score += $question->points;
                }
            }
        }

        $percentage = $totalPoints > 0 ? round(($score / $totalPoints) * 100) : 0;
        $passed = $percentage >= $quiz->passing_score;

        $attempt = QuizAttempt::create([
            'quiz_id' => $quiz->id,
            'user_id' => auth()->id(),
            'score' => $percentage,
            'status' => $passed ? 'passed' : 'failed'
        ]);

        return back()->with([
            'success' => 'تم استلام إجاباتك بنجاح!',
            'score' => $percentage,
            'passed' => $passed
        ]);
    }
}

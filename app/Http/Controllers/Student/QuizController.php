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
    /**
     * صفحة كل اختبارات الطالب عبر كورساته المسجّلة
     */
    public function index(Request $request)
    {
        $user = auth()->user();

        // جلب كل الاختبارات في الكورسات التي سجّل فيها الطالب
        $query = Quiz::with(['course:id,title,slug'])
            ->whereIn('course_id', $user->courses()->pluck('courses.id'))
            ->where('is_published', true)
            ->orderBy('created_at', 'desc');

        // فلترة بالكورس
        if ($request->course_id) {
            $query->where('course_id', $request->course_id);
        }

        // فلترة بتاريخ البداية
        if ($request->date_from) {
            $query->whereDate('created_at', '>=', $request->date_from);
        }
        if ($request->date_to) {
            $query->whereDate('created_at', '<=', $request->date_to);
        }

        $quizzes = $query->get()->map(function ($quiz) use ($user) {
            // أفضل محاولة للطالب في هذا الاختبار
            $bestAttempt = QuizAttempt::where('quiz_id', $quiz->id)
                ->where('user_id', $user->id)
                ->orderByDesc('score')
                ->first();

            $latestAttempt = QuizAttempt::where('quiz_id', $quiz->id)
                ->where('user_id', $user->id)
                ->latest()
                ->first();

            $attemptsCount = QuizAttempt::where('quiz_id', $quiz->id)
                ->where('user_id', $user->id)
                ->count();

            // تحديد حالة الاختبار
            $now = now();
            $isExpired = $quiz->end_time && $quiz->end_time < $now;
            $isNotStarted = $quiz->start_time && $quiz->start_time > $now;

            if ($attemptsCount === 0) {
                $status = $isExpired ? 'expired' : ($isNotStarted ? 'upcoming' : 'not_started');
            } else {
                $status = $bestAttempt->status === 'passed' ? 'passed' : 'failed';
            }

            return [
                'id'             => $quiz->id,
                'title'          => $quiz->title,
                'description'    => $quiz->description,
                'course'         => $quiz->course,
                'passing_score'  => $quiz->passing_score,
                'duration'       => $quiz->duration,
                'attempts_limit' => $quiz->attempts_limit,
                'start_time'     => $quiz->start_time,
                'end_time'       => $quiz->end_time,
                'status'         => $status,
                'best_score'     => $bestAttempt?->score,
                'attempts_count' => $attemptsCount,
                'last_attempt_at'=> $latestAttempt?->created_at,
            ];
        });

        // فلترة الحالة (تُطبَّق بعد البناء لأننا نحسبها في PHP)
        if ($request->status && $request->status !== 'all') {
            $quizzes = $quizzes->filter(fn($q) => $q['status'] === $request->status)->values();
        }

        // كل الكورسات المسجّل فيها الطالب (للـ dropdown)
        $enrolledCourses = $user->courses()->select('courses.id', 'courses.title')->get();

        return Inertia::render('Student/Quizzes/Index', [
            'quizzes'         => $quizzes,
            'enrolledCourses' => $enrolledCourses,
            'filters'         => $request->only(['status', 'course_id', 'date_from', 'date_to']),
        ]);
    }

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

<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'courses' => \App\Models\Course::with('category')->where('is_published', true)->latest()->take(6)->get(),
    ]);
});

Route::get('/dashboard', function () {
    $user = auth()->user();

    if ($user->role === 'teacher' || $user->role === 'admin') {
        return redirect()->route('teacher.dashboard');
    }

    $learningGoal = $user->preferences()->where('key', 'learning_goal')->first()?->value;
    
    // Personalization: Flexible search for Arabic keywords
    $query = \App\Models\Course::with('category')->where('is_published', true);

    if ($learningGoal) {
        $keywords = explode(' ', $learningGoal);
        $query->where(function($q) use ($keywords) {
            foreach ($keywords as $word) {
                $q->orWhere('title', 'like', "%$word%")
                  ->orWhere('description', 'like', "%$word%");
            }
        });
    }

    $courses = $query->latest()->take(4)->get();

    // Fallback: If no courses match the goal, show the latest courses generally
    if ($courses->isEmpty()) {
        $courses = \App\Models\Course::with('category')
            ->where('is_published', true)
            ->latest()
            ->take(4)
            ->get();
    }

    return Inertia::render('Dashboard', [
        'courses' => $courses,
        'learningGoal' => $learningGoal,
        'stats' => [
            'enrolled_courses' => $user->courses()->count(),
            'completed_lessons' => $user->completedLessons()->count(),
            'learning_hours' => number_format($user->completedLessons()->count() * 0.5, 1),
            'points' => 150 + ($user->completedLessons()->count() * 10),
        ]
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/ai-tutor', [\App\Http\Controllers\AIController::class, 'index'])->name('ai.index');
    Route::post('/ai-tutor/ask', [\App\Http\Controllers\AIController::class, 'ask'])->name('ai.ask');
    Route::post('/ai-tutor/summarize', [\App\Http\Controllers\AIController::class, 'summarize'])->name('ai.summarize');
    Route::post('/ai-tutor/quiz', [\App\Http\Controllers\AIController::class, 'generateQuiz'])->name('ai.quiz');
    Route::post('/ai-tutor/roadmap', [\App\Http\Controllers\AIController::class, 'generateRoadmap'])->name('ai.roadmap');
    Route::post('/ai-tutor/interview', [\App\Http\Controllers\AIController::class, 'simulateInterview'])->name('ai.interview');

    // Admin Routes
    Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
        Route::get('/scanner', [\App\Http\Controllers\AdminController::class, 'scanner'])->name('scanner');
        Route::post('/scanner/scan', [\App\Http\Controllers\AdminController::class, 'scanCourse'])->name('scanner.scan');
        
        // Teachers Management
        Route::get('/teachers', [\App\Http\Controllers\AdminController::class, 'teachers'])->name('teachers.index');
        Route::post('/teachers', [\App\Http\Controllers\AdminController::class, 'storeTeacher'])->name('teachers.store');
        Route::delete('/teachers/{user}', [\App\Http\Controllers\AdminController::class, 'destroyTeacher'])->name('teachers.destroy');
    });

    // Teacher Routes
    Route::middleware(['auth', 'role:teacher|admin'])->prefix('teacher')->name('teacher.')->group(function () {
        Route::get('/dashboard', [\App\Http\Controllers\Teacher\DashboardController::class, 'index'])->name('dashboard');
        Route::get('/courses', [\App\Http\Controllers\Teacher\CourseController::class, 'index'])->name('courses.index');
        Route::get('/students', [\App\Http\Controllers\Teacher\DashboardController::class, 'students'])->name('students.index');
        Route::post('/students/{user}/toggle-mentor', [\App\Http\Controllers\Teacher\DashboardController::class, 'toggleMentor'])->name('students.toggle-mentor');
        Route::get('/sales', [\App\Http\Controllers\Teacher\DashboardController::class, 'sales'])->name('sales.index');
        Route::delete('/students/{course}/{user}', [\App\Http\Controllers\Teacher\DashboardController::class, 'removeStudent'])->name('students.destroy');
        
        Route::get('/courses/create', [\App\Http\Controllers\Teacher\CourseController::class, 'create'])->name('courses.create');
        Route::post('/courses', [\App\Http\Controllers\Teacher\CourseController::class, 'store'])->name('courses.store');
        Route::get('/courses/{course}/edit', [\App\Http\Controllers\Teacher\CourseController::class, 'edit'])->name('courses.edit');
        Route::patch('/courses/{course}', [\App\Http\Controllers\Teacher\CourseController::class, 'update'])->name('courses.update');
        Route::delete('/courses/{course}', [\App\Http\Controllers\Teacher\CourseController::class, 'destroy'])->name('courses.destroy');
        
        Route::get('/courses/{course}/lessons/create', [\App\Http\Controllers\Teacher\LessonController::class, 'create'])->name('lessons.create');
        Route::post('/courses/{course}/lessons', [\App\Http\Controllers\Teacher\LessonController::class, 'store'])->name('lessons.store');
        Route::delete('/lessons/{lesson}', [\App\Http\Controllers\Teacher\LessonController::class, 'destroy'])->name('lessons.destroy');

        // Quiz Management
        Route::get('/quizzes', [\App\Http\Controllers\Teacher\QuizController::class, 'index'])->name('quizzes.index');
        Route::get('/quizzes/create', [\App\Http\Controllers\Teacher\QuizController::class, 'create'])->name('quizzes.create');
        Route::post('/quizzes', [\App\Http\Controllers\Teacher\QuizController::class, 'store'])->name('quizzes.store');
        Route::get('/quizzes/{quiz}/edit', [\App\Http\Controllers\Teacher\QuizController::class, 'edit'])->name('quizzes.edit');
        Route::patch('/quizzes/{quiz}', [\App\Http\Controllers\Teacher\QuizController::class, 'update'])->name('quizzes.update');
        Route::delete('/quizzes/{quiz}', [\App\Http\Controllers\Teacher\QuizController::class, 'destroy'])->name('quizzes.destroy');

        // Challenge Management
        Route::get('/challenges', [\App\Http\Controllers\Teacher\ChallengeController::class, 'index'])->name('challenges.index');
        Route::get('/challenges/create', [\App\Http\Controllers\Teacher\ChallengeController::class, 'create'])->name('challenges.create');
        Route::post('/challenges', [\App\Http\Controllers\Teacher\ChallengeController::class, 'store'])->name('challenges.store');
        Route::get('/challenges/{challenge}/edit', [\App\Http\Controllers\Teacher\ChallengeController::class, 'edit'])->name('challenges.edit');
        Route::patch('/challenges/{challenge}', [\App\Http\Controllers\Teacher\ChallengeController::class, 'update'])->name('challenges.update');
        Route::delete('/challenges/{challenge}', [\App\Http\Controllers\Teacher\ChallengeController::class, 'destroy'])->name('challenges.destroy');

        // Moderation & Social
        Route::get('/moderation/comments', [\App\Http\Controllers\Teacher\ModerationController::class, 'comments'])->name('moderation.comments');
        Route::delete('/moderation/comments/{comment}', [\App\Http\Controllers\Teacher\ModerationController::class, 'destroyComment'])->name('moderation.comments.destroy');
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/courses', [\App\Http\Controllers\CourseController::class, 'index'])->name('courses.index');
    Route::get('/my-learning', [\App\Http\Controllers\CourseController::class, 'myLearning'])->name('courses.my-learning');
    Route::get('/courses/{slug}', [\App\Http\Controllers\CourseController::class, 'show'])->name('courses.show');
    Route::get('/courses/{course:slug}/checkout', [\App\Http\Controllers\CheckoutController::class, 'show'])->name('courses.checkout');
    Route::post('/courses/{course:slug}/enroll', [\App\Http\Controllers\CheckoutController::class, 'enroll'])->name('courses.enroll');
    Route::post('/lessons/{lesson}/complete', [\App\Http\Controllers\LessonController::class, 'toggleComplete'])->name('lessons.complete');
    
    // Lesson Notes
    Route::get('/lessons/{lesson}/notes', [\App\Http\Controllers\LessonNoteController::class, 'index'])->name('notes.index');
    Route::post('/lessons/{lesson}/notes', [\App\Http\Controllers\LessonNoteController::class, 'store'])->name('notes.store');
    Route::delete('/notes/{note}', [\App\Http\Controllers\LessonNoteController::class, 'destroy'])->name('notes.destroy');
    Route::get('/lessons/{lesson}/notes/export', [\App\Http\Controllers\LessonNoteController::class, 'export'])->name('notes.export');

    // Timed Comments
    Route::get('/lessons/{lesson}/comments', [\App\Http\Controllers\TimedCommentController::class, 'index'])->name('comments.index');
    Route::post('/lessons/{lesson}/comments', [\App\Http\Controllers\TimedCommentController::class, 'store'])->name('comments.store');
    Route::delete('/comments/{comment}', [\App\Http\Controllers\TimedCommentController::class, 'destroy'])->name('comments.destroy');
    // Quizzes (Student View)
    Route::get('/courses/{course:slug}/quizzes/{quiz}', [\App\Http\Controllers\Student\QuizController::class, 'show'])->name('quizzes.show');
    Route::post('/quizzes/{quiz}/submit', [\App\Http\Controllers\Student\QuizController::class, 'submit'])->name('quizzes.submit');

    // Study Rooms
    Route::get('/courses/{course:slug}/study-room', [\App\Http\Controllers\Student\StudyRoomController::class, 'show'])->name('study-room.show');
    Route::post('/study-rooms/{room}/sync', [\App\Http\Controllers\Student\StudyRoomController::class, 'sync'])->name('study-room.sync');
    Route::post('/study-rooms/{room}/messages', [\App\Http\Controllers\Student\StudyRoomController::class, 'sendMessage'])->name('study-room.messages');
    Route::post('/study-rooms/{room}/react', [\App\Http\Controllers\Student\StudyRoomController::class, 'react'])->name('study-room.react');
    Route::post('/study-rooms/{room}/take-leadership', [\App\Http\Controllers\Student\StudyRoomController::class, 'takeLeadership'])->name('study-room.take-leadership');
    Route::post('/study-rooms/{room}/raise-hand', [\App\Http\Controllers\Student\StudyRoomController::class, 'raiseHand'])->name('study-room.raise-hand');
    Route::post('/study-rooms/{room}/cancel-hand', [\App\Http\Controllers\Student\StudyRoomController::class, 'cancelHand'])->name('study-room.cancel-hand');
    Route::post('/study-rooms/{room}/timed-comments', [\App\Http\Controllers\Student\StudyRoomController::class, 'addTimedComment'])->name('study-room.timed-comments.store');
    Route::post('/study-rooms/{room}/draw', [\App\Http\Controllers\Student\StudyRoomController::class, 'draw'])->name('study-room.draw');

    // Challenges (Student View)
    Route::post('/challenges/{challenge}/participate', [\App\Http\Controllers\Student\ChallengeController::class, 'participate'])->name('challenges.participate');
});
Route::post('/interactions', [\App\Http\Controllers\InteractionController::class, 'store'])->name('interactions.store');

require __DIR__.'/auth.php';

Route::get('/run-migrations', function () {
    \Illuminate\Support\Facades\Artisan::call('migrate');
    return \Illuminate\Support\Facades\Artisan::output();
});

Route::get('/make-admin', function () {
    \App\Models\User::where('email', 'brdweelahmed@gmail.com')->update(['role' => 'admin']);
    return 'تمت ترقية الحساب بنجاح إلى مدير!';
});

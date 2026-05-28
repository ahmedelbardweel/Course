<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Quiz;
use App\Notifications\QuizReminderNotification;
use Carbon\Carbon;

class SendQuizReminders extends Command
{
    protected $signature = 'quizzes:send-reminders';
    protected $description = 'Send notifications to students for quizzes ending within 24 hours';

    public function handle()
    {
        $now = Carbon::now();
        $tomorrow = Carbon::now()->addDay();

        $quizzes = Quiz::where('is_published', true)
            ->whereNotNull('end_time')
            ->whereBetween('end_time', [$now, $tomorrow])
            ->get();

        if ($quizzes->isEmpty()) {
            $this->info('No quizzes ending within 24 hours.');
            return 0;
        }

        foreach ($quizzes as $quiz) {
            $course = $quiz->course;
            if (!$course) continue;

            $students = $course->users()->where('role', 'student')->get();

            foreach ($students as $student) {
                // Check if they already attempted it
                $hasAttempted = $quiz->attempts()->where('user_id', $student->id)->exists();
                if ($hasAttempted) continue;

                // Check if already notified to avoid duplicates
                $alreadyNotified = $student->notifications()
                    ->where('type', QuizReminderNotification::class)
                    ->where('data', 'like', '%"quiz_id":' . $quiz->id . '%')
                    ->exists();

                if (!$alreadyNotified) {
                    $student->notify(new QuizReminderNotification($quiz, $course));
                    $this->info("Sent reminder to Student {$student->name} for Quiz: {$quiz->title}");
                }
            }
        }

        $this->info('Quiz reminders process completed successfully.');
        return 0;
    }
}

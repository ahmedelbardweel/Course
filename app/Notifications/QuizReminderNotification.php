<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class QuizReminderNotification extends Notification
{
    use Queueable;

    protected $quiz;
    protected $course;

    public function __construct($quiz, $course)
    {
        $this->quiz = $quiz;
        $this->course = $course;
    }

    public function via($notifiable)
    {
        return ['database', WebPushChannel::class];
    }

    public function toArray($notifiable)
    {
        return [
            'type' => 'reminder',
            'icon' => '⏰',
            'title' => 'تذكير: اقترب موعد انتهاء الاختبار',
            'message' => "تذكير: متبقي أقل من 24 ساعة لتقديم اختبار \"{$this->quiz->title}\" في كورس \"{$this->course->title}\"!",
            'url' => "/my-quizzes",
            'metadata' => [
                'quiz_id' => $this->quiz->id,
                'course_id' => $this->course->id,
                'due_date' => $this->quiz->due_date ?? null,
            ]
        ];
    }

    public function toWebPush($notifiable, $notification)
    {
        return (new WebPushMessage)
            ->title('⏰ تذكير: اقترب موعد انتهاء الاختبار')
            ->icon('/favicon.ico')
            ->body("تذكير: متبقي أقل من 24 ساعة لتقديم اختبار \"{$this->quiz->title}\" في كورس \"{$this->course->title}\"!")
            ->action('عرض الاختبارات', "/my-quizzes")
            ->data([
                'url' => "/my-quizzes",
            ]);
    }
}

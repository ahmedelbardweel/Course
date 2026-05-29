<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class NewQuizNotification extends Notification
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
            'type' => 'quiz',
            'icon' => '📝',
            'title' => 'اختبار جديد متاح',
            'message' => "تم إضافة اختبار جديد \"{$this->quiz->title}\" في كورس \"{$this->course->title}\"",
            'url' => "/my-quizzes",
            'metadata' => [
                'course_id' => $this->course->id,
                'quiz_id' => $this->quiz->id,
                'due_date' => $this->quiz->due_date ?? null,
            ]
        ];
    }

    public function toWebPush($notifiable, $notification)
    {
        return (new WebPushMessage)
            ->title('📝 اختبار جديد متاح')
            ->icon('/favicon.ico')
            ->body("تم إضافة اختبار جديد \"{$this->quiz->title}\" في كورس \"{$this->course->title}\"")
            ->action('عرض الاختبارات', "/my-quizzes")
            ->data([
                'url' => "/my-quizzes",
            ]);
    }
}

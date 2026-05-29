<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class NewCourseNotification extends Notification
{
    use Queueable;

    protected $course;

    public function __construct($course)
    {
        $this->course = $course;
    }

    public function via($notifiable)
    {
        return ['database', WebPushChannel::class];
    }

    public function toArray($notifiable)
    {
        return [
            'type' => 'course',
            'icon' => '🎓',
            'title' => 'كورس جديد متاح للتسجيل',
            'message' => "تم نشر كورس جديد متاح للتسجيل بعنوان \"{$this->course->title}\"",
            'url' => "/courses/{$this->course->id}",
            'metadata' => [
                'course_id' => $this->course->id,
            ]
        ];
    }

    public function toWebPush($notifiable, $notification)
    {
        return (new WebPushMessage)
            ->title('🎓 كورس جديد متاح للتسجيل')
            ->icon('/favicon.ico')
            ->body("تم نشر كورس جديد متاح للتسجيل بعنوان \"{$this->course->title}\"")
            ->action('عرض الكورس', "/courses/{$this->course->id}")
            ->data([
                'url' => "/courses/{$this->course->id}",
            ]);
    }
}

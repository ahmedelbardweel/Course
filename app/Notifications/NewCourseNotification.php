<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

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
        return ['database'];
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
}

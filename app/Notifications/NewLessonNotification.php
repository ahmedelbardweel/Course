<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewLessonNotification extends Notification
{
    use Queueable;

    protected $lesson;
    protected $course;

    public function __construct($lesson, $course)
    {
        $this->lesson = $lesson;
        $this->course = $course;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
            'type' => 'lesson',
            'icon' => '📚',
            'title' => 'درس جديد متاح الآن',
            'message' => "تمت إضافة درس جديد بعنوان \"{$this->lesson->title}\" في كورس \"{$this->course->title}\"",
            'url' => "/courses/{$this->course->id}?lesson={$this->lesson->id}",
            'metadata' => [
                'course_id' => $this->course->id,
                'lesson_id' => $this->lesson->id,
            ]
        ];
    }
}

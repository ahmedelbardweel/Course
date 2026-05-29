<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use NotificationChannels\WebPush\WebPushChannel;
use NotificationChannels\WebPush\WebPushMessage;

class StudentSubmissionNotification extends Notification
{
    use Queueable;

    protected $student;
    protected $submissionType; // 'quiz' or 'challenge'
    protected $itemTitle;
    protected $url;

    public function __construct($student, $submissionType, $itemTitle, $url)
    {
        $this->student = $student;
        $this->submissionType = $submissionType;
        $this->itemTitle = $itemTitle;
        $this->url = $url;
    }

    public function via($notifiable)
    {
        return ['database', WebPushChannel::class];
    }

    public function toArray($notifiable)
    {
        $typeWord = $this->submissionType === 'quiz' ? 'اختبار' : 'تحدي';
        return [
            'type' => 'submission',
            'icon' => '📥',
            'title' => 'تسليم جديد من طالب',
            'message' => "قام الطالب \"{$this->student->name}\" بتسليم حل {$typeWord} \"{$this->itemTitle}\"",
            'url' => $this->url,
            'metadata' => [
                'student_id' => $this->student->id,
                'submission_type' => $this->submissionType,
            ]
        ];
    }

    public function toWebPush($notifiable, $notification)
    {
        $typeWord = $this->submissionType === 'quiz' ? 'اختبار' : 'تحدي';
        return (new WebPushMessage)
            ->title('📥 تسليم جديد من طالب')
            ->icon('/favicon.ico')
            ->body("قام الطالب \"{$this->student->name}\" بتسليم حل {$typeWord} \"{$this->itemTitle}\"")
            ->action('عرض التسليم', $this->url)
            ->data([
                'url' => $this->url,
            ]);
    }
}

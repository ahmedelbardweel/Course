<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewChallengeNotification extends Notification
{
    use Queueable;

    protected $challenge;

    public function __construct($challenge)
    {
        $this->challenge = $challenge;
    }

    public function via($notifiable)
    {
        return ['database'];
    }

    public function toArray($notifiable)
    {
        return [
            'type' => 'challenge',
            'icon' => '🏆',
            'title' => 'تحدي جديد متاح',
            'message' => "تم طرح تحدي جديد \"{$this->challenge->title}\" بنقاط قيمتها {$this->challenge->points} نقطة!",
            'url' => "/my-challenges",
            'metadata' => [
                'challenge_id' => $this->challenge->id,
                'points' => $this->challenge->points,
            ]
        ];
    }
}

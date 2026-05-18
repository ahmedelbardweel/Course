<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class StudyRoomReactionEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $roomId;
    public $userId;
    public $emoji;

    public function __construct($roomId, $userId, $emoji)
    {
        $this->roomId = $roomId;
        $this->userId = $userId;
        $this->emoji = $emoji;
    }

    public function broadcastOn(): array
    {
        return [
            new PresenceChannel('study-room.' . $this->roomId),
        ];
    }

    public function broadcastAs()
    {
        return 'reaction';
    }
}

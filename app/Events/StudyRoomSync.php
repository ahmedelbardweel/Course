<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class StudyRoomSync implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $roomId;
    public $videoUrl;
    public $isPlaying;
    public $currentTime;
    public $volume;
    public $leader;
    public $stageMode;

    public function __construct($roomId, $videoUrl, $isPlaying, $currentTime, $volume = 1.0, $leader = null, $stageMode = 'youtube')
    {
        $this->roomId = $roomId;
        $this->videoUrl = $videoUrl;
        $this->isPlaying = $isPlaying;
        $this->currentTime = $currentTime;
        $this->volume = $volume;
        $this->leader = $leader;
        $this->stageMode = $stageMode;
    }

    public function broadcastOn(): array
    {
        return [
            new PresenceChannel('study-room.' . $this->roomId),
        ];
    }

    public function broadcastAs()
    {
        return 'sync';
    }
}

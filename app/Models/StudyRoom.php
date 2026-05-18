<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudyRoom extends Model
{
    protected $fillable = ['course_id', 'leader_id', 'video_url', 'is_playing', 'current_time', 'volume', 'last_sync_at', 'stage_mode', 'leadership_queue'];
    
    protected $casts = [
        'leadership_queue' => 'array',
        'is_playing' => 'boolean',
        'current_time' => 'double',
        'volume' => 'double',
        'last_sync_at' => 'datetime',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function leader()
    {
        return $this->belongsTo(User::class, 'leader_id');
    }

    public function messages()
    {
        return $this->hasMany(StudyRoomMessage::class);
    }
}

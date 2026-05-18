<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StudyRoomMessage extends Model
{
    protected $fillable = ['study_room_id', 'user_id', 'content', 'type'];

    public function studyRoom()
    {
        return $this->belongsTo(StudyRoom::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

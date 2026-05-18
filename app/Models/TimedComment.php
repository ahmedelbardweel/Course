<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimedComment extends Model
{
    protected $fillable = ['user_id', 'lesson_id', 'content', 'timestamp'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lesson()
    {
        return $this->belongsTo(Lesson::class);
    }
}

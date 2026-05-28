<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LessonSummary extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'lesson_id', 'summary_html'];

    public function lesson()
    {
        return $this->belongsTo(\App\Models\Lesson::class);
    }

    public function user()
    {
        return $this->belongsTo(\App\Models\User::class);
    }
}

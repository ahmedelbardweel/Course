<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = ['course_id', 'title', 'slug', 'video_url', 'content', 'position', 'duration', 'is_preview', 'is_free', 'resources', 'faqs'];

    protected $casts = [
        'resources'  => 'array',
        'faqs'       => 'array',
        'is_preview' => 'boolean',
        'is_free'    => 'boolean',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('completed_at')->withTimestamps();
    }
    public function notes()
    {
        return $this->hasMany(LessonNote::class);
    }

    public function timedComments()
    {
        return $this->hasMany(TimedComment::class);
    }
}

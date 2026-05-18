<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = ['category_id', 'teacher_id', 'title', 'slug', 'description', 'thumbnail', 'price', 'level', 'is_published', 'allow_study_rooms', 'allow_timed_comments'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class)->orderBy('position');
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withPivot('enrolled_at', 'completed_at')->withTimestamps();
    }

    public function quizzes()
    {
        return $this->hasMany(Quiz::class);
    }

    public function challenges()
    {
        return $this->hasMany(Challenge::class);
    }
}

<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class LessonFactory extends Factory
{
    public function definition(): array
    {
        $title = fake()->sentence(4);

        return [
            'course_id'  => Course::factory(),
            'title'      => $title,
            'slug'       => Str::slug($title) . '-' . fake()->unique()->numberBetween(1, 99999),
            'video_url'  => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'content'    => fake()->paragraphs(3, true),
            'position'   => 1,
            'duration'   => fake()->numberBetween(300, 3600),
            'is_preview' => false,
            'is_free'    => false,
            'resources'  => null,
            'faqs'       => null,
        ];
    }

    public function preview(): static
    {
        return $this->state(['is_preview' => true]);
    }

    public function free(): static
    {
        return $this->state(['is_free' => true]);
    }
}

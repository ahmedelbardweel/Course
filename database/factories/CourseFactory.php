<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CourseFactory extends Factory
{
    public function definition(): array
    {
        $title = fake()->sentence(3);

        return [
            'category_id'          => Category::factory(),
            'teacher_id'           => User::factory()->teacher(),
            'title'                => $title,
            'slug'                 => Str::slug($title) . '-' . fake()->unique()->numberBetween(1, 9999),
            'description'          => fake()->paragraph(),
            'thumbnail'            => null,
            'price'                => fake()->randomElement([0, 49, 99, 199]),
            'level'                => fake()->randomElement(['beginner', 'intermediate', 'advanced']),
            'is_published'         => true,
            'allow_study_rooms'    => true,
            'allow_timed_comments' => true,
        ];
    }

    public function unpublished(): static
    {
        return $this->state(['is_published' => false]);
    }

    public function free(): static
    {
        return $this->state(['price' => 0]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Teachers
        $teacher1 = User::factory()->create([
            'name' => 'د. أحمد سالم',
            'email' => 'ahmed@teacher.com',
            'password' => bcrypt('password'),
            'role' => 'teacher',
        ]);

        $teacher2 = User::factory()->create([
            'name' => 'م. سارة علي',
            'email' => 'sara@teacher.com',
            'password' => bcrypt('password'),
            'role' => 'teacher',
        ]);

        // 2. Create Students
        $students = [];
        for ($i = 1; $i <= 5; $i++) {
            $students[] = User::factory()->create([
                'name' => "طالب نموذج $i",
                'email' => "student$i@example.com",
                'password' => bcrypt('password'),
                'role' => 'student',
                'is_mentor' => $i === 1 // Make the first student a mentor
            ]);
        }

        // 3. Run Course Seeder (which now handles all associations)
        $this->call(CourseSeeder::class);
    }
}

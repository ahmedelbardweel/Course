<?php

namespace Tests\Unit;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\User;
use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Unit Tests - اختبار المنطق البرمجي الداخلي لكل نموذج (Model)
 * يتم اختبار كل وظيفة بشكل مستقل تماماً
 */
class CourseUnitTest extends TestCase
{
    use RefreshDatabase;

    // ─────────────────────────────────────────────
    // اختبارات نموذج المستخدم (User Model)
    // ─────────────────────────────────────────────

    public function test_user_has_correct_role_helper_methods()
    {
        $student = User::factory()->student()->create();
        $teacher = User::factory()->teacher()->create();
        $admin   = User::factory()->admin()->create();

        $this->assertTrue($student->isStudent());
        $this->assertFalse($student->isTeacher());
        $this->assertFalse($student->isAdmin());

        $this->assertTrue($teacher->isTeacher());
        $this->assertFalse($teacher->isStudent());

        $this->assertTrue($admin->isAdmin());
        $this->assertFalse($admin->isStudent());
    }

    public function test_user_can_have_enrolled_courses_relationship()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();

        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        $this->assertEquals(1, $student->courses()->count());
        $this->assertTrue($student->courses->contains($course->id));
    }

    public function test_user_can_have_completed_lessons_relationship()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();
        $lesson  = Lesson::factory()->create(['course_id' => $course->id]);

        $student->completedLessons()->attach($lesson->id, [
            'course_id'    => $course->id,
            'completed_at' => now(),
        ]);

        $this->assertEquals(1, $student->completedLessons()->count());
    }

    public function test_teacher_has_taught_courses_relationship()
    {
        $teacher = User::factory()->teacher()->create();
        Course::factory()->create(['teacher_id' => $teacher->id]);
        Course::factory()->create(['teacher_id' => $teacher->id]);

        $this->assertEquals(2, $teacher->taughtCourses()->count());
    }

    // ─────────────────────────────────────────────
    // اختبارات نموذج الكورس (Course Model)
    // ─────────────────────────────────────────────

    public function test_course_has_lessons_relationship()
    {
        $course = Course::factory()->create();
        Lesson::factory()->count(3)->create(['course_id' => $course->id]);

        $this->assertEquals(3, $course->lessons()->count());
    }

    public function test_course_has_category_relationship()
    {
        $category = Category::factory()->create();
        $course   = Course::factory()->create(['category_id' => $category->id]);

        $this->assertEquals($category->id, $course->category->id);
        $this->assertEquals($category->name, $course->category->name);
    }

    public function test_course_has_teacher_relationship()
    {
        $teacher = User::factory()->teacher()->create();
        $course  = Course::factory()->create(['teacher_id' => $teacher->id]);

        $this->assertEquals($teacher->id, $course->teacher->id);
    }

    public function test_course_can_have_multiple_enrolled_students()
    {
        $course   = Course::factory()->create();
        $students = User::factory()->student()->count(5)->create();

        foreach ($students as $student) {
            $student->courses()->attach($course->id, ['enrolled_at' => now()]);
        }

        $this->assertEquals(5, $course->users()->count());
    }

    // ─────────────────────────────────────────────
    // اختبارات نموذج الدرس (Lesson Model)
    // ─────────────────────────────────────────────

    public function test_lesson_belongs_to_course()
    {
        $course = Course::factory()->create();
        $lesson = Lesson::factory()->create(['course_id' => $course->id]);

        $this->assertEquals($course->id, $lesson->course->id);
        $this->assertEquals($course->title, $lesson->course->title);
    }

    public function test_lesson_casts_boolean_fields_correctly()
    {
        $lesson = Lesson::factory()->create([
            'is_preview' => 1,
            'is_free'    => 0,
        ]);

        $this->assertIsBool($lesson->is_preview);
        $this->assertIsBool($lesson->is_free);
        $this->assertTrue($lesson->is_preview);
        $this->assertFalse($lesson->is_free);
    }

    public function test_lesson_casts_resources_as_array()
    {
        $resources = [['title' => 'PDF', 'url' => 'https://example.com/file.pdf']];
        $lesson    = Lesson::factory()->create(['resources' => $resources]);

        $fresh = Lesson::find($lesson->id);
        $this->assertIsArray($fresh->resources);
        $this->assertEquals('PDF', $fresh->resources[0]['title']);
    }
}

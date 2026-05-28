<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\LessonNote;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Teacher Tests - اختبارات تكامل خاصة بالمعلم
 * تختبر صلاحيات المعلم في إنشاء وتعديل وحذف الكورسات والدروس
 */
class TeacherTest extends TestCase
{
    use RefreshDatabase;

    // ─────────────────────────────────────────────
    // الصلاحيات (Authorization)
    // ─────────────────────────────────────────────

    public function test_student_cannot_access_teacher_dashboard()
    {
        $student = User::factory()->student()->create();

        $response = $this->actingAs($student)->get('/teacher/dashboard');

        $response->assertStatus(403);
    }

    public function test_guest_cannot_access_teacher_dashboard()
    {
        $response = $this->get('/teacher/dashboard');

        $response->assertRedirect('/login');
    }

    public function test_teacher_can_access_teacher_dashboard()
    {
        $teacher = User::factory()->teacher()->create();

        $response = $this->actingAs($teacher)->get('/teacher/dashboard');

        $response->assertStatus(200);
    }

    public function test_admin_can_access_teacher_dashboard()
    {
        $admin = User::factory()->admin()->create();

        $response = $this->actingAs($admin)->get('/teacher/dashboard');

        $response->assertStatus(200);
    }

    // ─────────────────────────────────────────────
    // إنشاء الكورسات
    // ─────────────────────────────────────────────

    public function test_teacher_can_create_a_new_course()
    {
        $teacher  = User::factory()->teacher()->create();
        $category = Category::factory()->create();

        $response = $this->actingAs($teacher)->post('/teacher/courses', [
            'category_id'          => $category->id,
            'title'                => 'تعلم Laravel من الصفر',
            'description'          => 'كورس شامل لتعلم Laravel',
            'price'                => 99,
            'level'                => 'beginner',
            'thumbnail'            => 'https://example.com/thumb.jpg',
            'is_published'         => true,
            'allow_study_rooms'    => true,
            'allow_timed_comments' => true,
        ]);

        $response->assertRedirect('/teacher/courses');
        $this->assertDatabaseHas('courses', [
            'title'      => 'تعلم Laravel من الصفر',
            'teacher_id' => $teacher->id,
        ]);
    }

    public function test_course_creation_requires_title()
    {
        $teacher  = User::factory()->teacher()->create();
        $category = Category::factory()->create();

        $response = $this->actingAs($teacher)->post('/teacher/courses', [
            'category_id' => $category->id,
            'title'       => '',
            'description' => 'وصف الكورس',
            'price'       => 0,
            'level'       => 'beginner',
            'thumbnail'   => 'https://example.com/thumb.jpg',
        ]);

        $response->assertSessionHasErrors(['title']);
    }

    public function test_course_creation_requires_valid_level()
    {
        $teacher  = User::factory()->teacher()->create();
        $category = Category::factory()->create();

        $response = $this->actingAs($teacher)->post('/teacher/courses', [
            'category_id' => $category->id,
            'title'       => 'كورس تجريبي',
            'description' => 'وصف',
            'price'       => 0,
            'level'       => 'invalid_level',   // قيمة غير صحيحة
            'thumbnail'   => 'https://example.com/thumb.jpg',
        ]);

        $response->assertSessionHasErrors(['level']);
    }

    public function test_student_cannot_create_a_course()
    {
        $student  = User::factory()->student()->create();
        $category = Category::factory()->create();

        $response = $this->actingAs($student)->post('/teacher/courses', [
            'category_id' => $category->id,
            'title'       => 'كورس مزيف',
            'description' => 'وصف',
            'price'       => 0,
            'level'       => 'beginner',
            'thumbnail'   => 'https://example.com/thumb.jpg',
        ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing('courses', ['title' => 'كورس مزيف']);
    }

    // ─────────────────────────────────────────────
    // تعديل وحذف الكورسات
    // ─────────────────────────────────────────────

    public function test_teacher_can_update_their_own_course()
    {
        $teacher  = User::factory()->teacher()->create();
        $category = Category::factory()->create();
        $course   = Course::factory()->create([
            'teacher_id'  => $teacher->id,
            'category_id' => $category->id,
            'title'       => 'الاسم القديم',
        ]);

        $response = $this->actingAs($teacher)->patch("/teacher/courses/{$course->id}", [
            'category_id'          => $category->id,
            'title'                => 'الاسم الجديد المحدّث',
            'description'          => 'وصف جديد',
            'price'                => 149,
            'level'                => 'intermediate',
            'thumbnail'            => 'https://example.com/thumb.jpg',
            'is_published'         => true,
            'allow_study_rooms'    => false,
            'allow_timed_comments' => false,
        ]);

        $response->assertRedirect('/teacher/courses');
        $this->assertDatabaseHas('courses', ['title' => 'الاسم الجديد المحدّث']);
        $this->assertDatabaseMissing('courses', ['title' => 'الاسم القديم']);
    }

    public function test_teacher_cannot_update_another_teachers_course()
    {
        $teacher1 = User::factory()->teacher()->create();
        $teacher2 = User::factory()->teacher()->create();
        $category = Category::factory()->create();
        $course   = Course::factory()->create([
            'teacher_id'  => $teacher1->id,
            'category_id' => $category->id,
        ]);

        $response = $this->actingAs($teacher2)->patch("/teacher/courses/{$course->id}", [
            'category_id' => $category->id,
            'title'       => 'تعديل غير مسموح',
            'description' => 'وصف',
            'price'       => 0,
            'level'       => 'beginner',
            'thumbnail'   => 'https://example.com/thumb.jpg',
        ]);

        $response->assertStatus(403);
        $this->assertDatabaseMissing('courses', ['title' => 'تعديل غير مسموح']);
    }

    public function test_teacher_can_delete_their_own_course()
    {
        $teacher = User::factory()->teacher()->create();
        $course  = Course::factory()->create(['teacher_id' => $teacher->id]);

        $response = $this->actingAs($teacher)->delete("/teacher/courses/{$course->id}");

        $response->assertRedirect('/teacher/courses');
        $this->assertDatabaseMissing('courses', ['id' => $course->id]);
    }

    public function test_teacher_cannot_delete_another_teachers_course()
    {
        $teacher1 = User::factory()->teacher()->create();
        $teacher2 = User::factory()->teacher()->create();
        $course   = Course::factory()->create(['teacher_id' => $teacher1->id]);

        $response = $this->actingAs($teacher2)->delete("/teacher/courses/{$course->id}");

        $response->assertStatus(403);
        $this->assertDatabaseHas('courses', ['id' => $course->id]);
    }

    public function test_admin_can_delete_any_course()
    {
        $teacher = User::factory()->teacher()->create();
        $admin   = User::factory()->admin()->create();
        $course  = Course::factory()->create(['teacher_id' => $teacher->id]);

        $response = $this->actingAs($admin)->delete("/teacher/courses/{$course->id}");

        $response->assertRedirect('/teacher/courses');
        $this->assertDatabaseMissing('courses', ['id' => $course->id]);
    }

    // ─────────────────────────────────────────────
    // إدارة الطلاب من قِبل المعلم
    // ─────────────────────────────────────────────

    public function test_teacher_can_view_their_students_list()
    {
        $teacher = User::factory()->teacher()->create();

        $response = $this->actingAs($teacher)->get('/teacher/students');

        $response->assertStatus(200);
    }
}

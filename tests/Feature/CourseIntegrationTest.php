<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Course;
use App\Models\Lesson;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Integration Tests - اختبارات التكامل
 * تختبر كيف تعمل الأجزاء معاً: الروابط (Routes) + المتحكمات (Controllers) + قاعدة البيانات
 */
class CourseIntegrationTest extends TestCase
{
    use RefreshDatabase;

    // ─────────────────────────────────────────────
    // اختبارات الصفحة الرئيسية والتصفح
    // ─────────────────────────────────────────────

    public function test_guest_can_view_homepage()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_homepage_shows_only_published_courses()
    {
        Course::factory()->count(3)->create(['is_published' => true]);
        Course::factory()->count(2)->unpublished()->create();

        $response = $this->get('/');

        $response->assertStatus(200);
        // التأكد أن الكورسات غير المنشورة لا تظهر
        $response->assertInertia(fn ($page) =>
            $page->where('courses', fn ($courses) =>
                collect($courses)->every(fn ($c) => $c['is_published'] === true)
            )
        );
    }

    // ─────────────────────────────────────────────
    // اختبارات التسجيل وتسجيل الدخول
    // ─────────────────────────────────────────────

    public function test_new_user_can_register_successfully()
    {
        $response = $this->post('/register', [
            'name'                  => 'أحمد محمد',
            'email'                 => 'test@example.com',
            'password'              => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertRedirect('/dashboard');
        $this->assertDatabaseHas('users', ['email' => 'test@example.com']);
    }

    public function test_registered_user_is_auto_verified_and_can_access_dashboard()
    {
        $this->post('/register', [
            'name'                  => 'طالب جديد',
            'email'                 => 'student@example.com',
            'password'              => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $user = User::where('email', 'student@example.com')->first();

        // التحقق من أن الحساب مفعّل تلقائياً (email_verified_at ليس null)
        $this->assertNotNull($user->email_verified_at);
    }

    public function test_existing_user_can_login()
    {
        $user = User::factory()->student()->create([
            'email'    => 'login@example.com',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->post('/login', [
            'email'    => 'login@example.com',
            'password' => 'password123',
        ]);

        $response->assertRedirect();
        $this->assertAuthenticatedAs($user);
    }

    public function test_user_cannot_login_with_wrong_password()
    {
        User::factory()->create([
            'email'    => 'wrong@example.com',
            'password' => bcrypt('correctpassword'),
        ]);

        $response = $this->post('/login', [
            'email'    => 'wrong@example.com',
            'password' => 'wrongpassword',
        ]);

        $this->assertGuest();
    }

    public function test_registration_requires_valid_email_format()
    {
        $response = $this->post('/register', [
            'name'                  => 'مستخدم',
            'email'                 => 'not-an-email',
            'password'              => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_registration_requires_password_confirmation_match()
    {
        $response = $this->post('/register', [
            'name'                  => 'مستخدم',
            'email'                 => 'user@example.com',
            'password'              => 'password123',
            'password_confirmation' => 'different456',
        ]);

        $response->assertSessionHasErrors(['password']);
    }

    // ─────────────────────────────────────────────
    // اختبارات الكورسات
    // ─────────────────────────────────────────────

    public function test_authenticated_user_can_browse_courses_page()
    {
        $student = User::factory()->student()->create();
        Course::factory()->count(3)->create(['is_published' => true]);

        $response = $this->actingAs($student)->get('/courses');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Courses/Index'));
    }

    public function test_guest_is_redirected_from_courses_page()
    {
        $response = $this->get('/courses');

        $response->assertRedirect('/login');
    }

    public function test_courses_page_can_be_filtered_by_search()
    {
        Course::factory()->create(['title' => 'تعلم PHP للمبتدئين', 'is_published' => true]);
        Course::factory()->create(['title' => 'كورس Python', 'is_published' => true]);
        $student = User::factory()->student()->create();

        $response = $this->actingAs($student)->get('/courses?search=PHP');

        $response->assertStatus(200);
    }

    public function test_user_can_view_single_course_page()
    {
        $course = Course::factory()->create(['is_published' => true]);
        $student = User::factory()->student()->create();

        $response = $this->actingAs($student)->get("/courses/{$course->slug}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Courses/Show'));
    }

    // ─────────────────────────────────────────────
    // اختبارات الاشتراك في الكورسات (Enrollment)
    // ─────────────────────────────────────────────

    public function test_student_can_enroll_in_a_course()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create(['is_published' => true]);

        $response = $this->actingAs($student)
                         ->post("/courses/{$course->slug}/enroll");

        $response->assertRedirect("/courses/{$course->slug}");

        $this->assertDatabaseHas('course_user', [
            'user_id'   => $student->id,
            'course_id' => $course->id,
        ]);
    }

    public function test_student_cannot_enroll_in_same_course_twice()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create(['is_published' => true]);

        // اشتراك أول
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        // محاولة الاشتراك مرة ثانية - يجب إعادة التوجيه للكورس مباشرة
        $response = $this->actingAs($student)
                         ->post("/courses/{$course->slug}/enroll");

        $response->assertRedirect("/courses/{$course->slug}");

        // التأكد من وجود سجل واحد فقط
        $this->assertEquals(1, $student->courses()->where('course_id', $course->id)->count());
    }

    public function test_guest_cannot_enroll_in_course()
    {
        $course = Course::factory()->create(['is_published' => true]);

        $response = $this->post("/courses/{$course->slug}/enroll");

        $response->assertRedirect('/login');
    }

    // ─────────────────────────────────────────────
    // اختبارات إكمال الدروس
    // ─────────────────────────────────────────────

    public function test_student_can_mark_lesson_as_complete()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();
        $lesson  = Lesson::factory()->create(['course_id' => $course->id]);
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        $response = $this->actingAs($student)
                         ->post("/lessons/{$lesson->id}/complete");

        $response->assertRedirect();
        $this->assertDatabaseHas('lesson_user', [
            'user_id'   => $student->id,
            'lesson_id' => $lesson->id,
        ]);
    }

    public function test_student_can_toggle_lesson_complete_to_incomplete()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();
        $lesson  = Lesson::factory()->create(['course_id' => $course->id]);

        // تحديد الدرس كمكتمل أولاً
        $student->completedLessons()->attach($lesson->id, [
            'course_id'    => $course->id,
            'completed_at' => now(),
        ]);
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        // إلغاء الإكمال (Toggle)
        $this->actingAs($student)->post("/lessons/{$lesson->id}/complete");

        $this->assertDatabaseMissing('lesson_user', [
            'user_id'   => $student->id,
            'lesson_id' => $lesson->id,
        ]);
    }

    public function test_course_is_marked_complete_when_all_lessons_done()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();
        $lesson1 = Lesson::factory()->create(['course_id' => $course->id, 'position' => 1]);
        $lesson2 = Lesson::factory()->create(['course_id' => $course->id, 'position' => 2]);
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        // إكمال الدرس الأول
        $student->completedLessons()->attach($lesson1->id, [
            'course_id'    => $course->id,
            'completed_at' => now(),
        ]);

        // إكمال الدرس الثاني (يجب أن يُكمل الكورس)
        $this->actingAs($student)->post("/lessons/{$lesson2->id}/complete");

        $pivotRow = $student->courses()->where('course_id', $course->id)->first();
        $this->assertNotNull($pivotRow->pivot->completed_at);
    }

    // ─────────────────────────────────────────────
    // اختبارات صفحة "تعلمي"
    // ─────────────────────────────────────────────

    public function test_student_can_view_my_learning_page()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        $response = $this->actingAs($student)->get('/my-learning');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => $page->component('Courses/MyLearning'));
    }

    public function test_my_learning_shows_progress_percentage()
    {
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create();
        $lessons = Lesson::factory()->count(4)->create(['course_id' => $course->id]);
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        // إكمال درسين من أصل 4 = 50%
        $student->completedLessons()->attach($lessons[0]->id, [
            'course_id' => $course->id, 'completed_at' => now()
        ]);
        $student->completedLessons()->attach($lessons[1]->id, [
            'course_id' => $course->id, 'completed_at' => now()
        ]);

        $response = $this->actingAs($student)->get('/my-learning');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->where('enrolledCourses.0.progress', 50)
        );
    }

    // ─────────────────────────────────────────────
    // اختبارات لوحة التحكم
    // ─────────────────────────────────────────────

    public function test_student_dashboard_shows_personalized_data()
    {
        $student = User::factory()->student()->create();

        $response = $this->actingAs($student)->get('/dashboard');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('Dashboard')
                 ->has('courses')
                 ->has('stats')
        );
    }

    public function test_teacher_is_redirected_from_student_dashboard_to_teacher_dashboard()
    {
        $teacher = User::factory()->teacher()->create();

        $response = $this->actingAs($teacher)->get('/dashboard');

        $response->assertRedirect(route('teacher.dashboard'));
    }

    public function test_admin_is_redirected_from_student_dashboard_to_teacher_dashboard()
    {
        $admin = User::factory()->admin()->create();

        $response = $this->actingAs($admin)->get('/dashboard');

        $response->assertRedirect(route('teacher.dashboard'));
    }
}

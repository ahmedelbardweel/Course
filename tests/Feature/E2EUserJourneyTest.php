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
 * End-to-End (E2E) Tests - الاختبارات الشاملة
 * تحاكي رحلة المستخدم الكاملة من البداية للنهاية
 *
 * الرحلات المغطاة:
 * ① رحلة المتعلم الجديد: تسجيل ← تصفح ← اشتراك ← إكمال دروس
 * ② رحلة المعلم: إنشاء كورس ← إضافة درس ← نشر الكورس
 * ③ رحلة كتابة الملاحظات: دخول درس ← كتابة ملاحظة ← تصدير
 */
class E2EUserJourneyTest extends TestCase
{
    use RefreshDatabase;

    // ═══════════════════════════════════════════════════════════════
    // الرحلة الأولى: رحلة المتعلم الجديد الكاملة
    // (New Student Complete Journey)
    // ═══════════════════════════════════════════════════════════════

    public function test_complete_student_journey_register_browse_enroll_and_complete_course()
    {
        // ─── الخطوة 1: إعداد بيانات الكورس مسبقاً في قاعدة البيانات ───
        $category = Category::factory()->create(['name' => 'برمجة الويب']);
        $teacher  = User::factory()->teacher()->create();
        $course   = Course::factory()->create([
            'teacher_id'  => $teacher->id,
            'category_id' => $category->id,
            'title'       => 'تعلم PHP للمبتدئين',
            'is_published'=> true,
            'price'       => 0,
        ]);
        $lesson1 = Lesson::factory()->create(['course_id' => $course->id, 'position' => 1]);
        $lesson2 = Lesson::factory()->create(['course_id' => $course->id, 'position' => 2]);

        // ─── الخطوة 2: الطالب يفتح الصفحة الرئيسية ───
        $homepage = $this->get('/');
        $homepage->assertStatus(200);

        // ─── الخطوة 3: الطالب يسجّل حساباً جديداً ───
        $registerResponse = $this->post('/register', [
            'name'                  => 'سارة الأحمد',
            'email'                 => 'sara@example.com',
            'password'              => 'Password123!',
            'password_confirmation' => 'Password123!',
        ]);
        $registerResponse->assertRedirect('/dashboard');

        // استرجاع الطالب المسجّل
        $student = User::where('email', 'sara@example.com')->first();
        $this->assertNotNull($student);
        $this->assertNotNull($student->email_verified_at, 'الطالب يجب أن يكون موثّقاً تلقائياً');

        // ─── الخطوة 4: الطالب يتصفح صفحة الكورسات ───
        $coursesPage = $this->actingAs($student)->get('/courses');
        $coursesPage->assertStatus(200);
        $coursesPage->assertInertia(fn ($p) => $p->component('Courses/Index'));

        // ─── الخطوة 5: الطالب يفتح تفاصيل الكورس ───
        $courseDetailPage = $this->actingAs($student)->get("/courses/{$course->slug}");
        $courseDetailPage->assertStatus(200);
        $courseDetailPage->assertInertia(fn ($p) =>
            $p->component('Courses/Show')
              ->where('isEnrolled', false)
        );

        // ─── الخطوة 6: الطالب يسجّل في الكورس ───
        $enrollResponse = $this->actingAs($student)->post("/courses/{$course->slug}/enroll");
        $enrollResponse->assertRedirect("/courses/{$course->slug}");

        $this->assertDatabaseHas('course_user', [
            'user_id'   => $student->id,
            'course_id' => $course->id,
        ]);

        // ─── الخطوة 7: الطالب يفتح الكورس بعد الاشتراك ───
        $enrolledCoursePage = $this->actingAs($student)->get("/courses/{$course->slug}");
        $enrolledCoursePage->assertStatus(200);
        $enrolledCoursePage->assertInertia(fn ($p) =>
            $p->where('isEnrolled', true)
        );

        // ─── الخطوة 8: الطالب يكمل الدرس الأول ───
        $completeLesson1 = $this->actingAs($student)->post("/lessons/{$lesson1->id}/complete");
        $completeLesson1->assertRedirect();
        $this->assertDatabaseHas('lesson_user', [
            'user_id'   => $student->id,
            'lesson_id' => $lesson1->id,
        ]);

        // ─── الخطوة 9: الطالب يكمل الدرس الثاني (آخر درس) ───
        $completeLesson2 = $this->actingAs($student)->post("/lessons/{$lesson2->id}/complete");
        $completeLesson2->assertRedirect();

        // ─── الخطوة 10: التأكد من أن الكورس مكتمل ───
        $pivot = $student->courses()->where('course_id', $course->id)->first();
        $this->assertNotNull($pivot->pivot->completed_at, 'الكورس يجب أن يكون مكتملاً بعد إتمام جميع الدروس');

        // ─── الخطوة 11: الطالب يتحقق من صفحة "تعلمي" ───
        $myLearningPage = $this->actingAs($student)->get('/my-learning');
        $myLearningPage->assertStatus(200);
        $myLearningPage->assertInertia(fn ($p) =>
            $p->component('Courses/MyLearning')
              ->where('enrolledCourses.0.progress', 100)
        );
    }

    // ═══════════════════════════════════════════════════════════════
    // الرحلة الثانية: رحلة المعلم الكاملة
    // (Teacher Complete Journey)
    // ═══════════════════════════════════════════════════════════════

    public function test_complete_teacher_journey_create_course_and_have_students_enroll()
    {
        // ─── الخطوة 1: المعلم يسجّل دخوله ───
        $teacher  = User::factory()->teacher()->create([
            'email'    => 'teacher@example.com',
            'password' => bcrypt('password123'),
        ]);
        $category = Category::factory()->create();

        $loginResponse = $this->post('/login', [
            'email'    => 'teacher@example.com',
            'password' => 'password123',
        ]);
        $this->assertAuthenticatedAs($teacher);

        // ─── الخطوة 2: المعلم يُعاد توجيهه للوحة تحكم المعلم ───
        $dashboardResponse = $this->actingAs($teacher)->get('/dashboard');
        $dashboardResponse->assertRedirect(route('teacher.dashboard'));

        // ─── الخطوة 3: المعلم يفتح لوحة تحكمه ───
        $teacherDashboard = $this->actingAs($teacher)->get('/teacher/dashboard');
        $teacherDashboard->assertStatus(200);

        // ─── الخطوة 4: المعلم ينشئ كورساً جديداً ───
        $createResponse = $this->actingAs($teacher)->post('/teacher/courses', [
            'category_id'          => $category->id,
            'title'                => 'دورة React.js الشاملة',
            'description'          => 'تعلم React.js من الصفر حتى الاحتراف',
            'price'                => 199,
            'level'                => 'intermediate',
            'thumbnail'            => 'https://example.com/react-thumb.jpg',
            'is_published'         => true,
            'allow_study_rooms'    => true,
            'allow_timed_comments' => true,
        ]);
        $createResponse->assertRedirect('/teacher/courses');
        $this->assertDatabaseHas('courses', ['title' => 'دورة React.js الشاملة']);

        // ─── الخطوة 5: التحقق من أن الكورس ظهر في قائمة كورسات المعلم ───
        $coursesListPage = $this->actingAs($teacher)->get('/teacher/courses');
        $coursesListPage->assertStatus(200);

        $course = Course::where('title', 'دورة React.js الشاملة')->first();
        $this->assertNotNull($course);
        $this->assertEquals($teacher->id, $course->teacher_id);

        // ─── الخطوة 6: طالب يشترك في الكورس ───
        $student = User::factory()->student()->create();
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        // ─── الخطوة 7: المعلم يرى الطالب في قائمة طلابه ───
        $this->assertDatabaseHas('course_user', [
            'user_id'   => $student->id,
            'course_id' => $course->id,
        ]);

        $this->assertEquals(1, $course->users()->count());

        // ─── الخطوة 8: المعلم يحذف الكورس ───
        $deleteResponse = $this->actingAs($teacher)->delete("/teacher/courses/{$course->id}");
        $deleteResponse->assertRedirect('/teacher/courses');
        $this->assertDatabaseMissing('courses', ['id' => $course->id]);
    }

    // ═══════════════════════════════════════════════════════════════
    // الرحلة الثالثة: رحلة الملاحظات الكاملة
    // (Lesson Notes Journey)
    // ═══════════════════════════════════════════════════════════════

    public function test_complete_notes_journey_write_then_delete_note()
    {
        // ─── الإعداد ───
        $student = User::factory()->student()->create();
        $course  = Course::factory()->create(['is_published' => true]);
        $lesson  = Lesson::factory()->create(['course_id' => $course->id]);
        $student->courses()->attach($course->id, ['enrolled_at' => now()]);

        // ─── الخطوة 1: الطالب يكتب ملاحظة على درس ───
        $writeNoteResponse = $this->actingAs($student)->post("/lessons/{$lesson->id}/notes", [
            'content'   => 'هذه ملاحظة مهمة جداً حول مفهوم الـ Closures في PHP',
            'timestamp' => 120,
        ]);
        $writeNoteResponse->assertStatus(200);

        $this->assertDatabaseHas('lesson_notes', [
            'user_id'   => $student->id,
            'lesson_id' => $lesson->id,
            'content'   => 'هذه ملاحظة مهمة جداً حول مفهوم الـ Closures في PHP',
        ]);

        // ─── الخطوة 2: الطالب يستعرض ملاحظاته على الدرس ───
        $listNotesResponse = $this->actingAs($student)->get("/lessons/{$lesson->id}/notes");
        $listNotesResponse->assertStatus(200);
        $listNotesResponse->assertJsonCount(1);

        // ─── الخطوة 3: الطالب يحذف الملاحظة ───
        $note = LessonNote::where('user_id', $student->id)->first();
        $deleteResponse = $this->actingAs($student)->delete("/notes/{$note->id}");
        $deleteResponse->assertStatus(200);
        $deleteResponse->assertJson(['success' => true]);

        $this->assertDatabaseMissing('lesson_notes', ['id' => $note->id]);

        // ─── الخطوة 4: القائمة أصبحت فارغة ───
        $emptyListResponse = $this->actingAs($student)->get("/lessons/{$lesson->id}/notes");
        $emptyListResponse->assertJsonCount(0);
    }

    public function test_student_cannot_delete_another_students_note()
    {
        $student1 = User::factory()->student()->create();
        $student2 = User::factory()->student()->create();
        $course   = Course::factory()->create();
        $lesson   = Lesson::factory()->create(['course_id' => $course->id]);

        // ─── student1 يكتب ملاحظة ───
        $note = LessonNote::create([
            'user_id'   => $student1->id,
            'lesson_id' => $lesson->id,
            'content'   => 'ملاحظة خاصة بـ student1',
            'timestamp' => 60,
        ]);

        // ─── student2 يحاول حذف ملاحظة student1 ───
        $response = $this->actingAs($student2)->delete("/notes/{$note->id}");

        $response->assertStatus(403);
        $this->assertDatabaseHas('lesson_notes', ['id' => $note->id]);
    }

    // ═══════════════════════════════════════════════════════════════
    // الرحلة الرابعة: رحلة الأمان (Security Journey)
    // ═══════════════════════════════════════════════════════════════

    public function test_unauthorized_access_to_protected_routes_redirects_to_login()
    {
        $protectedRoutes = [
            '/dashboard',
            '/courses',
            '/my-learning',
            '/profile',
        ];

        foreach ($protectedRoutes as $route) {
            $response = $this->get($route);
            $response->assertRedirect('/login',
                "المسار {$route} يجب أن يُعيد التوجيه لصفحة الدخول"
            );
        }
    }

    public function test_student_cannot_access_admin_protected_routes()
    {
        $student = User::factory()->student()->create();

        $adminRoutes = [
            '/admin/scanner',
            '/teacher/courses',
            '/teacher/dashboard',
        ];

        foreach ($adminRoutes as $route) {
            $response = $this->actingAs($student)->get($route);
            $this->assertContains(
                $response->getStatusCode(),
                [403, 302],
                "المسار {$route} يجب ألا يكون متاحاً للطالب العادي"
            );
        }
    }

    public function test_user_profile_can_be_updated()
    {
        $user = User::factory()->student()->create([
            'name' => 'الاسم القديم',
        ]);

        $response = $this->actingAs($user)->patch('/profile', [
            'name'  => 'الاسم الجديد المحدّث',
            'email' => $user->email,
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('users', ['name' => 'الاسم الجديد المحدّث']);
    }

    public function test_user_can_logout_successfully()
    {
        $user = User::factory()->student()->create();
        $this->actingAs($user);

        $response = $this->post('/logout');

        $response->assertRedirect('/');
        $this->assertGuest();
    }

    public function test_cannot_register_with_duplicate_email()
    {
        User::factory()->create(['email' => 'taken@example.com']);

        $response = $this->post('/register', [
            'name'                  => 'مستخدم جديد',
            'email'                 => 'taken@example.com',
            'password'              => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertSessionHasErrors(['email']);
        $this->assertEquals(1, User::where('email', 'taken@example.com')->count());
    }
}

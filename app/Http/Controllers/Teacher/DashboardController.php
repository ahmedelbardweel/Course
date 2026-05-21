<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Course;
use App\Models\Lesson;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        
        $stats = [
            'total_courses' => $user->taughtCourses()->count(),
            'total_students' => DB::table('course_user')
                ->whereIn('course_id', $user->taughtCourses()->pluck('id'))
                ->distinct('user_id')
                ->count(),
            'total_lessons' => Lesson::whereIn('course_id', $user->taughtCourses()->pluck('id'))->count(),
            'total_revenue' => $user->taughtCourses()->sum('price') * 0.7, // Assuming 70% share
        ];

        $latest_courses = $user->taughtCourses()
            ->with('category')
            ->withCount('users')
            ->latest()
            ->take(5)
            ->get();

        $courses = $user->taughtCourses()
            ->with(['category', 'lessons' => function($query) {
                $query->orderBy('position');
            }])
            ->withCount(['users', 'lessons', 'quizzes'])
            ->latest()
            ->get();

        // Real Chart Data: Revenue for the last 7 days
        $chart_data = collect(range(6, 0))->map(function ($days_ago) use ($user) {
            $date = now()->subDays($days_ago);
            $revenue = DB::table('course_user')
                ->join('courses', 'course_user.course_id', '=', 'courses.id')
                ->where('courses.teacher_id', $user->id)
                ->whereDate('course_user.created_at', $date->toDateString())
                ->sum('courses.price');

            return [
                'label' => $date->format('D'), // Mon, Tue...
                'value' => (float)$revenue * 0.7
            ];
        });

        return Inertia::render('Teacher/Dashboard', [
            'stats' => $stats,
            'latest_courses' => $latest_courses,
            'chart_data' => $chart_data,
            'courses' => $courses
        ]);
    }

    public function students()
    {
        $user = auth()->user();
        
        $students = DB::table('users')
            ->join('course_user', 'users.id', '=', 'course_user.user_id')
            ->join('courses', 'course_user.course_id', '=', 'courses.id')
            ->where('courses.teacher_id', $user->id)
            ->select('users.id', 'users.name', 'users.email', 'users.is_mentor', 'courses.id as course_id', 'courses.title as course_title', 'course_user.created_at as enrolled_at')
            ->orderBy('course_user.created_at', 'desc')
            ->get();

        return Inertia::render('Teacher/Students/Index', [
            'students' => $students
        ]);
    }

    public function toggleMentor(User $user)
    {
        $user->update(['is_mentor' => !$user->is_mentor]);
        return redirect()->back()->with('success', 'تم تحديث حالة المرشد للطالب');
    }

    public function removeStudent(Course $course, User $user)
    {
        if ($course->teacher_id !== auth()->id() && auth()->user()->role !== 'admin') {
            abort(403);
        }

        $course->users()->detach($user->id);

        return redirect()->route('teacher.students.index')->with('success', 'تم إلغاء تسجيل الطالب من الكورس بنجاح');
    }

    public function sales()
    {
        $user = auth()->user();
        
        $sales = $user->taughtCourses()
            ->withCount('users')
            ->get()
            ->map(function ($course) {
                return [
                    'title' => $course->title,
                    'price' => $course->price,
                    'students' => $course->users_count,
                    'total_revenue' => $course->price * $course->users_count,
                    'teacher_share' => ($course->price * $course->users_count) * 0.7
                ];
            });

        return Inertia::render('Teacher/Sales/Index', [
            'sales' => $sales,
            'total_earnings' => $sales->sum('teacher_share')
        ]);
    }
}

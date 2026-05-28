<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Challenge;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChallengeController extends Controller
{
    /**
     * صفحة كل تحديات الطالب
     */
    public function index(Request $request)
    {
        $user = auth()->user();

        // الكورسات المسجّل فيها الطالب
        $enrolledCourseIds = $user->courses()->pluck('courses.id');

        $query = Challenge::with(['course:id,title,slug'])
            ->whereIn('course_id', $enrolledCourseIds)
            ->orderBy('created_at', 'desc');

        // فلترة بالحالة النشطة
        if ($request->active_only) {
            $query->where('is_active', true)->where('end_date', '>', now());
        }

        // فلترة بالكورس
        if ($request->course_id) {
            $query->where('course_id', $request->course_id);
        }

        $challenges = $query->get()->map(function ($challenge) use ($user) {
            $pivot = $challenge->users()->where('user_id', $user->id)->first()?->pivot;
            $isJoined = $pivot !== null;
            $isCompleted = $pivot && $pivot->completed_at !== null;
            $isExpired = $challenge->end_date < now();

            if ($isCompleted) {
                $status = 'completed';
            } elseif ($isJoined) {
                $status = $isExpired ? 'expired' : 'joined';
            } else {
                $status = $isExpired ? 'missed' : 'not_joined';
            }

            return [
                'id'          => $challenge->id,
                'title'       => $challenge->title,
                'description' => $challenge->description,
                'points'      => $challenge->points,
                'course'      => $challenge->course,
                'start_date'  => $challenge->start_date,
                'end_date'    => $challenge->end_date,
                'is_active'   => $challenge->is_active,
                'status'      => $status,
                'is_joined'   => $isJoined,
                'is_completed'=> $isCompleted,
                'joined_at'   => $pivot?->created_at,
            ];
        });

        // فلترة بالحالة
        if ($request->status && $request->status !== 'all') {
            $challenges = $challenges->filter(fn($c) => $c['status'] === $request->status)->values();
        }

        // كل الكورسات المسجّل فيها الطالب (للـ dropdown)
        $enrolledCourses = $user->courses()->select('courses.id', 'courses.title')->get();

        return Inertia::render('Student/Challenges/Index', [
            'challenges'      => $challenges,
            'enrolledCourses' => $enrolledCourses,
            'filters'         => $request->only(['status', 'course_id', 'active_only']),
        ]);
    }

    public function participate(Request $request, Challenge $challenge)
    {
        // Check if challenge is active and not expired
        if (!$challenge->is_active || $challenge->end_date < now()) {
            return back()->withErrors(['message' => 'هذا التحدي غير متاح حالياً أو منتهي.']);
        }

        // Check if user is already participating
        if ($challenge->users()->where('user_id', auth()->id())->exists()) {
            return back()->with(['success' => 'أنت مشارك بالفعل في هذا التحدي!']);
        }

        // Add user to challenge
        $challenge->users()->attach(auth()->id(), ['completed_at' => null]);

        return back()->with(['success' => 'تم الاشتراك في التحدي بنجاح!']);
    }
}

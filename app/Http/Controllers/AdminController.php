<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;

class AdminController extends Controller
{
    public function scanner()
    {
        $courses = Course::withCount('lessons')->get();
        
        return Inertia::render('Admin/ContentScanner', [
            'courses' => $courses
        ]);
    }

    public function scanCourse(Request $request)
    {
        $request->validate([
            'course_id' => 'required|exists:courses,id'
        ]);

        $course = Course::with('lessons')->findOrFail($request->course_id);
        
        $content = $course->lessons->map(function($l) {
            return "الدرس: {$l->title}\nالمحتوى: " . strip_tags($l->content);
        })->join("\n\n");

        $prompt = "أنت مراجع جودة تقني خبير. مهمتك فحص محتوى هذا الكورس البرمجي واكتشاف أي تقنيات قديمة أو أدوات عفى عليها الزمن (Deprecated) أو ممارسات برمجية سيئة لم تعد تستخدم.
محتوى الكورس:
{$content}

بناءً على المحتوى، استخرج أي تقنيات قديمة وضعها في تقرير بصيغة مصفوفة JSON حصراً، يحتوي كل عنصر على:
- issue: (المشكلة أو التقنية القديمة المكتشفة باختصار)
- lesson: (اسم الدرس الذي وجدت فيه المشكلة)
- suggestion: (البديل الحديث والمقترح للتحديث)
- severity: (يجب أن يكون إما high أو medium أو low)

النتيجة (مصفوفة JSON فقط بدون أي نصوص):";

        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
        ])->post("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" . config('services.gemini.key'), [
            'contents' => [['parts' => [['text' => $prompt]]]],
            'generationConfig' => ['temperature' => 0.2]
        ]);

        if ($response->successful()) {
            $text = $response->json('candidates.0.content.parts.0.text');
            $text = preg_replace('/```json|```/', '', $text);
            $report = json_decode(trim($text), true);
            
            if (!$report) {
                // Return empty if AI didn't format correctly or found nothing
                return response()->json(['report' => []]);
            }

            return response()->json(['report' => $report]);
        }

        return response()->json(['error' => 'حدث خطأ أثناء التواصل مع خوادم الفحص.'], 500);
    }

    public function teachers()
    {
        $teachers = \App\Models\User::where('role', 'teacher')
            ->withCount('taughtCourses')
            ->latest()
            ->get();
            
        return Inertia::render('Admin/Teachers/Index', [
            'teachers' => $teachers
        ]);
    }

    public function storeTeacher(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ], [
            'name.required' => 'الاسم مطلوب.',
            'email.required' => 'البريد الإلكتروني مطلوب.',
            'email.email' => 'يجب إدخال بريد إلكتروني صالح.',
            'email.unique' => 'هذا البريد الإلكتروني مسجل بالفعل.',
            'password.required' => 'كلمة المرور مطلوبة.',
            'password.min' => 'يجب أن لا تقل كلمة المرور عن 8 أحرف.',
        ]);

        \App\Models\User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => \Illuminate\Support\Facades\Hash::make($request->password),
            'role' => 'teacher',
        ]);

        return redirect()->back()->with('success', 'تم إضافة المعلم بنجاح.');
    }

    public function destroyTeacher(\App\Models\User $user)
    {
        if ($user->role !== 'teacher') {
            abort(403);
        }

        if ($user->taughtCourses()->count() > 0) {
            return redirect()->back()->with('error', 'لا يمكن حذف هذا المعلم لوجود كورسات مرتبطة به. يرجى نقل أو حذف الكورسات أولاً.');
        }

        $user->delete();

        return redirect()->back()->with('success', 'تم حذف المعلم بنجاح.');
    }
}

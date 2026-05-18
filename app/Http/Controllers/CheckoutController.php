<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function show(Course $course)
    {
        // Check if already enrolled
        if (auth()->user()->courses->contains($course->id)) {
            return redirect()->route('courses.show', $course->slug);
        }

        return Inertia::render('Courses/Checkout', [
            'course' => $course->load('category'),
        ]);
    }

    public function enroll(Course $course)
    {
        $user = auth()->user();

        // Check if already enrolled
        if ($user->courses->contains($course->id)) {
            return redirect()->route('courses.show', $course->slug);
        }

        // Logic for "Payment" (Mocking success)
        // In a real app, you'd integrate Stripe/PayPal here
        
        $user->courses()->attach($course->id, [
            'enrolled_at' => now()
        ]);

        return redirect()->route('courses.show', $course->slug)->with('success', 'تم الاشتراك في الكورس بنجاح! استمتع بالتعلم.');
    }
}

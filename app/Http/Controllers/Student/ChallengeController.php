<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Models\Challenge;
use Illuminate\Http\Request;

class ChallengeController extends Controller
{
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

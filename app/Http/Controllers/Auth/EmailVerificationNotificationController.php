<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(route('dashboard', absolute: false));
        }

        try {
            $request->user()->sendEmailVerificationNotification();
        } catch (\Throwable $e) {
            return back()->withErrors([
                'error' => 'تعذر إرسال البريد الإلكتروني. يرجى العلم أنه في وضع Resend التجريبي لا يمكنك الإرسال إلا للبريد المفعّل لديك وهو: brdweelahmed@gmail.com'
            ]);
        }

        return back()->with('status', 'verification-link-sent');
    }
}

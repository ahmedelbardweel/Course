<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->user();
        
        $query = $user->notifications();
        
        if ($request->filter === 'unread') {
            $query = $user->unreadNotifications();
        }
        
        $notifications = $query->get()->map(function($notification) {
            return [
                'id' => $notification->id,
                'type' => $notification->data['type'] ?? 'general',
                'icon' => $notification->data['icon'] ?? '🔔',
                'title' => $notification->data['title'] ?? 'إشعار جديد',
                'message' => $notification->data['message'] ?? '',
                'url' => $notification->data['url'] ?? '#',
                'metadata' => $notification->data['metadata'] ?? [],
                'read_at' => $notification->read_at,
                'created_at' => $notification->created_at->diffForHumans(),
            ];
        });

        return Inertia::render('Notifications/Index', [
            'notifications' => $notifications,
            'filter' => $request->filter ?? 'all',
            'unreadCount' => $user->unreadNotifications()->count(),
        ]);
    }

    public function markAsRead($id)
    {
        $notification = auth()->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return back()->with('success', 'تم تحديد الإشعار كمقروء');
    }

    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();

        return back()->with('success', 'تم تحديد جميع الإشعارات كمقروءة');
    }

    public function destroy($id)
    {
        $notification = auth()->user()->notifications()->findOrFail($id);
        $notification->delete();

        return back()->with('success', 'تم حذف الإشعار بنجاح');
    }

    public function storeSubscription(Request $request)
    {
        $request->validate([
            'endpoint' => 'required',
            'keys.p256dh' => 'required',
            'keys.auth' => 'required',
        ]);

        $endpoint = $request->endpoint;
        $key = $request->input('keys.p256dh');
        $token = $request->input('keys.auth');
        $contentEncoding = $request->input('content_encoding', 'aesgcm');

        $request->user()->updatePushSubscription($endpoint, $key, $token, $contentEncoding);

        return response()->json(['success' => true], 200);
    }

    public function deleteSubscription(Request $request)
    {
        $request->validate([
            'endpoint' => 'required',
        ]);

        $request->user()->deletePushSubscription($request->endpoint);

        return response()->json(['success' => true], 200);
    }
}

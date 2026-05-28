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
}

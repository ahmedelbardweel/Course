<script setup>
import { ref, onMounted, computed } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3';
import { 
    LogOut,
    Menu,
    X,
    User as UserIcon,
    Bell,
    Settings,
    ChevronLeft,
    Check,
    CheckCheck,
    Volume2,
    VolumeX,
    Lock
} from 'lucide-vue-next';
import StudentSidebar from '@/Components/Layout/StudentSidebar.vue';
import TeacherSidebar from '@/Components/Layout/TeacherSidebar.vue';

const isSidebarOpen = ref(false);
const isNotificationsOpen = ref(false);
const permissionGranted = ref('default');

const page = usePage();

const breadcrumbs = defineProps({
    breadcrumbs: {
        type: Array,
        default: () => [],
    }
});

// Notifications computed props from Inertia global shared state
const unreadCount = computed(() => page.props.auth?.unreadNotificationsCount ?? 0);
const latestNotifications = computed(() => page.props.auth?.latestNotifications ?? []);

const requestNotificationPermission = () => {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            permissionGranted.value = permission;
            if (permission === 'granted') {
                new Notification('تم تفعيل الإشعارات الفورية! 🎉', {
                    body: 'ستتلقى تنبيهات فورية بالدروس، الاختبارات والتحديات مباشرة على جهازك.',
                    icon: '/favicon.ico'
                });
            }
        });
    }
};

const markAsRead = (id) => {
    router.post(route('notifications.read', id), {}, { preserveScroll: true });
};

const markAllAsRead = () => {
    router.post(route('notifications.read-all'), {}, { preserveScroll: true });
};

const getIcon = (type) => {
    switch (type) {
        case 'lesson': return '📚';
        case 'quiz': return '📝';
        case 'challenge': return '🏆';
        case 'course': return '🎓';
        case 'reminder': return '⏰';
        case 'submission': return '📥';
        default: return '🔔';
    }
};

onMounted(() => {
    if ('Notification' in window) {
        permissionGranted.value = Notification.permission;
    }

    // Bind real-time notifications if Laravel Echo / Reverb is configured
    if (window.Echo && page.props.auth?.user) {
        window.Echo.private(`App.Models.User.${page.props.auth.user.id}`)
            .notification((notification) => {
                // Play notification sound
                try {
                    const audio = new Audio('/assets/sounds/notification.mp3');
                    audio.play();
                } catch (e) {}

                // Reload Inertia data to update notification count and lists
                router.reload({ 
                    only: ['auth'],
                    onSuccess: () => {
                        // Display browser notification if granted
                        if (Notification.permission === 'granted') {
                            new Notification(notification.title || 'إشعار جديد', {
                                body: notification.message || '',
                                icon: '/favicon.ico'
                            });
                        }
                    }
                });
            });
    }
});

// Close notification panel on click outside
const closeNotifications = () => {
    isNotificationsOpen.value = false;
};
</script>

<template>
    <div class="bg-background font-sans selection:bg-brand-orange selection:text-white flex w-full h-screen overflow-hidden relative">
        
        <!-- Mobile Backdrop Overlay -->
        <transition name="fade">
            <div 
                v-if="isSidebarOpen"
                @click="isSidebarOpen = false"
                class="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
            />
        </transition>

        <!-- Role-based Sidebar -->
        <TeacherSidebar 
            v-if="$page.props.auth?.user?.role === 'teacher' || $page.props.auth?.user?.role === 'admin'"
            :is-sidebar-open="isSidebarOpen"
            @close="isSidebarOpen = false"
            class="z-50"
        />
        <StudentSidebar 
            v-else
            :is-sidebar-open="isSidebarOpen"
            @close="isSidebarOpen = false"
            class="z-50"
        />

        <!-- Main Content -->
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
            <!-- Header: single row, menu icon + breadcrumbs + user actions all on same line -->
            <header class="shrink-0 bg-[var(--card)] border-b border-[var(--border)] sticky top-0 z-40 flex items-center justify-between px-3 lg:px-6 shadow-none"
                :style="{ paddingTop: 'max(0.5rem, env(safe-area-inset-top, 0px))', paddingBottom: '0.5rem', minHeight: 'calc(2.75rem + env(safe-area-inset-top, 0px))' }">
                <div class="flex items-center gap-2 min-w-0">
                    <!-- Menu button: vertically centered in same row as breadcrumbs -->
                    <button 
                        @click="isSidebarOpen = true" 
                        class="lg:hidden flex-shrink-0 p-1.5 rounded hover:bg-[var(--muted)] transition-colors"
                    >
                        <Menu class="h-4 w-4 text-[var(--foreground)]" />
                    </button>
                    <!-- Breadcrumbs -->
                    <div class="text-[12px] font-normal tracking-tight text-[var(--foreground)] flex items-center gap-1.5 min-w-0 overflow-hidden">
                        <template v-if="breadcrumbs && breadcrumbs.length">
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <template v-for="(item, index) in breadcrumbs" :key="index">
                                    <Link 
                                        v-if="item.url && index < breadcrumbs.length - 1" 
                                        :href="item.url" 
                                        class="text-[var(--primary)] hover:underline font-normal whitespace-nowrap"
                                    >
                                        {{ item.label }}
                                    </Link>
                                    <span v-else class="text-[var(--foreground)] font-normal truncate">
                                        {{ item.label }}
                                    </span>
                                    <ChevronLeft v-if="index < breadcrumbs.length - 1" class="h-3 w-3 text-[var(--muted-foreground)] opacity-50 flex-shrink-0" />
                                </template>
                            </div>
                        </template>
                        <template v-else>
                            <slot name="header" />
                        </template>
                    </div>
                </div>
                
                <div class="flex items-center gap-2 flex-shrink-0 relative">
                    <slot name="header-actions" />
                    
                    <!-- Notifications Dropdown Button -->
                    <div class="relative">
                        <button 
                            @click="isNotificationsOpen = !isNotificationsOpen"
                            class="p-1.5 rounded relative hover:bg-[var(--muted)] transition-colors focus:outline-none"
                            :class="{'bg-[var(--muted)]': isNotificationsOpen}"
                        >
                            <Bell class="h-4 w-4 text-[var(--foreground)] opacity-70" />
                            <span 
                                v-if="unreadCount > 0" 
                                class="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full text-[7px] text-white flex items-center justify-center font-bold"
                            >
                                {{ unreadCount }}
                            </span>
                        </button>

                        <!-- Notification Dropdown Panel -->
                        <div 
                            v-if="isNotificationsOpen" 
                            class="absolute left-0 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden py-1 animate-in fade-in slide-in-from-top-3 duration-200"
                        >
                            <div class="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 dark:border-slate-800">
                                <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200">الإشعارات الأخيرة</h3>
                                <button 
                                    v-if="unreadCount > 0"
                                    @click="markAllAsRead" 
                                    class="text-[10px] text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 font-semibold flex items-center gap-1"
                                >
                                    <CheckCheck class="h-3.5 w-3.5" />
                                    تحديد الكل كمقروء
                                </button>
                            </div>

                            <!-- Browser Permission Banner -->
                            <div 
                                v-if="permissionGranted !== 'granted'" 
                                class="bg-indigo-50 dark:bg-indigo-950/40 p-3 mx-2 my-2 rounded-lg border border-indigo-100 dark:border-indigo-900/60"
                            >
                                <p class="text-[9px] text-indigo-700 dark:text-indigo-300 leading-relaxed font-medium">
                                    تفعيل الإشعارات الفورية لتلقي التنبيهات حتى لو كان المتصفح مغلقاً!
                                </p>
                                <button 
                                    @click="requestNotificationPermission" 
                                    class="mt-2 text-[9px] font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded transition-colors"
                                >
                                    السماح بالإشعارات
                                </button>
                            </div>

                            <!-- List -->
                            <div class="max-h-64 overflow-y-auto">
                                <div v-if="latestNotifications.length > 0" class="divide-y divide-slate-50 dark:divide-slate-800">
                                    <div 
                                        v-for="notification in latestNotifications" 
                                        :key="notification.id"
                                        class="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex items-start gap-3 relative cursor-pointer"
                                        @click="markAsRead(notification.id); router.visit(notification.url); isNotificationsOpen = false;"
                                    >
                                        <div class="text-base p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50">
                                            {{ getIcon(notification.type) }}
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <h4 class="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">{{ notification.title }}</h4>
                                            <p class="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 leading-normal">{{ notification.message }}</p>
                                            <span class="text-[8px] text-slate-400 dark:text-slate-500 block mt-1">{{ notification.created_at }}</span>
                                        </div>
                                        <button 
                                            @click.stop="markAsRead(notification.id)" 
                                            class="text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-0.5"
                                            title="تحديد كمقروء"
                                        >
                                            <Check class="h-3 w-3" />
                                        </button>
                                    </div>
                                </div>
                                <div v-else class="py-8 text-center text-slate-400 dark:text-slate-500 flex flex-col items-center justify-center gap-1.5">
                                    <span class="text-xl">🎉</span>
                                    <p class="text-[10px]">لا توجد إشعارات غير مقروءة</p>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div class="border-t border-slate-100 dark:border-slate-800 pt-1 text-center bg-slate-50/50 dark:bg-slate-900">
                                <Link 
                                    :href="route('notifications.index')" 
                                    @click="isNotificationsOpen = false"
                                    class="block py-2 text-[10px] text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 font-semibold"
                                >
                                    عرض كل الإشعارات
                                </Link>
                            </div>
                        </div>
                    </div>

                    <!-- User Information -->
                    <div class="hidden sm:flex flex-col items-end">
                        <span class="text-[11px] font-normal text-[var(--foreground)] leading-none">{{ $page.props.auth?.user?.name }}</span>
                        <span class="text-[8px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5">
                            {{ $page.props.auth?.user?.role === 'teacher' ? 'معلم' : ($page.props.auth?.user?.role === 'admin' ? 'مدير' : 'طالب') }}
                        </span>
                    </div>
                    <div class="h-7 w-7 bg-[var(--foreground)] text-[var(--background)] rounded-md flex items-center justify-center font-normal text-xs select-none flex-shrink-0">
                        {{ $page.props.auth?.user?.name?.charAt(0) }}
                    </div>
                </div>
            </header>

            <!-- Content Area -->
            <main class="flex-1 overflow-y-auto p-4 lg:p-6 scrollbar-none animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
                <slot />
            </main>
        </div>
    </div>
</template>

<style>
html {
    direction: rtl;
}
/* Hide scrollbar everywhere */
* {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
*::-webkit-scrollbar {
    display: none;
}
/* Backdrop fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>


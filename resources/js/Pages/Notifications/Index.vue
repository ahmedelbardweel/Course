<script setup>
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { Card, CardHeader, CardTitle, CardContent } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { 
    Bell, 
    Trash2, 
    CheckCheck, 
    ChevronLeft, 
    BookOpen, 
    FileText, 
    Trophy, 
    GraduationCap, 
    Clock, 
    Inbox,
    Sparkles
} from 'lucide-vue-next';

const props = defineProps({
    notifications: Array,
    filter: String,
    unreadCount: Number,
});

const activeFilter = ref(props.filter);

const getIcon = (type) => {
    switch (type) {
        case 'lesson': return BookOpen;
        case 'quiz': return FileText;
        case 'challenge': return Trophy;
        case 'course': return GraduationCap;
        case 'reminder': return Clock;
        case 'submission': return Inbox;
        default: return Bell;
    }
};

const getIconClass = (type, readAt) => {
    if (readAt) return 'bg-muted text-muted-foreground';
    switch (type) {
        case 'lesson': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
        case 'quiz': return 'bg-blue-500/10 text-blue-500 border border-blue-500/20';
        case 'challenge': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
        case 'course': return 'bg-violet-500/10 text-violet-500 border border-violet-500/20';
        case 'reminder': return 'bg-rose-500/10 text-rose-500 border border-rose-500/20';
        case 'submission': return 'bg-cyan-500/10 text-cyan-500 border border-cyan-500/20';
        default: return 'bg-primary/10 text-primary border border-primary/20';
    }
};

const getTypeLabel = (type) => {
    switch (type) {
        case 'lesson': return 'درس جديد';
        case 'quiz': return 'اختبار';
        case 'challenge': return 'تحدي جديد';
        case 'course': return 'كورس جديد';
        case 'reminder': return 'تذكير';
        case 'submission': return 'تسليم طالب';
        default: return 'عام';
    }
};

const filterNotifications = (val) => {
    activeFilter.value = val;
    router.get(route('notifications.index'), { filter: val }, { preserveState: true });
};

const markAsRead = (id) => {
    router.post(route('notifications.read', id), {}, { preserveScroll: true });
};

const markAllAsRead = () => {
    router.post(route('notifications.read-all'), {}, { preserveScroll: true });
};

const deleteNotification = (id) => {
    router.delete(route('notifications.destroy', id), { preserveScroll: true });
};

const readAndNavigate = (notification) => {
    if (!notification.read_at) {
        router.post(route('notifications.read', notification.id), {}, {
            onSuccess: () => {
                router.visit(notification.url);
            }
        });
    } else {
        router.visit(notification.url);
    }
};
</script>

<template>
    <Head title="مركز الإشعارات" />

    <AuthenticatedLayout :breadcrumbs="[{ label: 'الرئيسية', url: '/dashboard' }, { label: 'الإشعارات' }]">
        <div class="max-w-4xl mx-auto space-y-6">
            <!-- Header Card with Premium Gradient -->
            <div class="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white border border-slate-800 shadow-xl">
                <div class="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <div class="flex items-center gap-2">
                            <h1 class="text-2xl font-bold tracking-tight">مركز الإشعارات</h1>
                            <span class="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                                <Sparkles class="h-3 w-3" />
                                ذكي وتفاعلي
                            </span>
                        </div>
                        <p class="mt-2 text-slate-300 text-sm max-w-xl leading-relaxed">
                            تابع كل المستجدات والتحديثات في كورساتك، الامتحانات المتبقية، والتحديات البرمجية بشكل فوري.
                        </p>
                    </div>

                    <div v-if="unreadCount > 0" class="flex items-center gap-2 self-start md:self-auto">
                        <Button @click="markAllAsRead" size="sm" class="bg-white/10 hover:bg-white/20 text-white border border-white/10 gap-2 h-9 text-xs rounded-lg transition-all duration-300">
                            <CheckCheck class="h-4 w-4" />
                            تحديد الكل كمقروء
                        </Button>
                    </div>
                </div>
                <!-- Decorative subtle lights -->
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
                <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl opacity-10"></div>
            </div>

            <!-- Filters -->
            <div class="flex items-center justify-between border-b border-[var(--border)] pb-3">
                <div class="flex gap-2">
                    <button 
                        @click="filterNotifications('all')" 
                        class="px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
                        :class="activeFilter === 'all' ? 'bg-[var(--foreground)] text-white' : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)]'"
                    >
                        الكل
                    </button>
                    <button 
                        @click="filterNotifications('unread')" 
                        class="px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center gap-1.5"
                        :class="activeFilter === 'unread' ? 'bg-[var(--foreground)] text-white' : 'text-[var(--muted-foreground)] hover:bg-[var(--muted)]'"
                    >
                        غير المقروءة
                        <span v-if="unreadCount > 0" class="bg-red-500 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                            {{ unreadCount }}
                        </span>
                    </button>
                </div>
                
                <span class="text-xs text-[var(--muted-foreground)]">
                    إجمالي الإشعارات: {{ notifications.length }}
                </span>
            </div>

            <!-- Notifications List -->
            <div v-if="notifications.length > 0" class="space-y-3">
                <div 
                    v-for="notification in notifications" 
                    :key="notification.id"
                    class="group relative overflow-hidden rounded-xl border p-4 transition-all duration-300 bg-[var(--card)] hover:shadow-md flex items-start gap-4"
                    :class="notification.read_at ? 'border-[var(--border)] opacity-75' : 'border-indigo-500/30 bg-gradient-to-l from-indigo-500/5 to-transparent'"
                >
                    <!-- Read Indicator Dot -->
                    <span 
                        v-if="!notification.read_at" 
                        class="absolute right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"
                    ></span>

                    <!-- Icon wrapper -->
                    <div class="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-105" :class="getIconClass(notification.type, notification.read_at)">
                        <component :is="getIcon(notification.type)" class="h-5 w-5" />
                    </div>

                    <!-- Content -->
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded" :class="notification.read_at ? 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400' : 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'">
                                {{ getTypeLabel(notification.type) }}
                            </span>
                            <span class="text-[10px] text-[var(--muted-foreground)] flex items-center gap-1">
                                <Clock class="h-3 w-3" />
                                {{ notification.created_at }}
                            </span>
                        </div>
                        
                        <h3 class="text-sm font-semibold text-[var(--foreground)] mt-1.5" :class="{'font-medium': notification.read_at}">
                            {{ notification.title }}
                        </h3>
                        <p class="text-xs text-[var(--muted-foreground)] mt-1 leading-relaxed">
                            {{ notification.message }}
                        </p>
                        
                        <!-- Navigation Button -->
                        <div class="mt-3">
                            <button 
                                @click="readAndNavigate(notification)"
                                class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200"
                            >
                                عرض التفاصيل
                                <ChevronLeft class="h-3.5 w-3.5 mt-0.5" />
                            </button>
                        </div>
                    </div>

                    <!-- Actions Panel -->
                    <div class="flex items-center gap-1 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pl-2">
                        <Button 
                            v-if="!notification.read_at"
                            @click="markAsRead(notification.id)" 
                            size="icon" 
                            variant="ghost" 
                            title="تحديد كمقروء"
                            class="h-8 w-8 text-slate-500 hover:text-indigo-600 hover:bg-indigo-500/10 rounded-lg"
                        >
                            <CheckCheck class="h-4 w-4" />
                        </Button>
                        <Button 
                            @click="deleteNotification(notification.id)" 
                            size="icon" 
                            variant="ghost" 
                            title="حذف الإشعار"
                            class="h-8 w-8 text-slate-500 hover:text-rose-600 hover:bg-rose-500/10 rounded-lg"
                        >
                            <Trash2 class="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-16 border border-dashed border-[var(--border)] rounded-2xl bg-[var(--card)]">
                <div class="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell class="h-8 w-8 text-[var(--muted-foreground)]" />
                </div>
                <h3 class="text-base font-semibold text-[var(--foreground)]">لا توجد إشعارات حالياً</h3>
                <p class="text-xs text-[var(--muted-foreground)] mt-1.5 max-w-xs mx-auto leading-relaxed">
                    {{ activeFilter === 'unread' ? 'رائع! لقد قرأت جميع الإشعارات المتاحة.' : 'كل شيء هادئ هنا. سنقوم بإعلامك فور حدوث أي نشاط جديد.' }}
                </p>
                <div v-if="activeFilter === 'unread'" class="mt-4">
                    <Button @click="filterNotifications('all')" size="sm" variant="outline" class="text-xs rounded-lg">
                        عرض جميع الإشعارات
                    </Button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.w-4\.5 {
    width: 1.125rem;
}
.h-4\.5 {
    height: 1.125rem;
}
</style>

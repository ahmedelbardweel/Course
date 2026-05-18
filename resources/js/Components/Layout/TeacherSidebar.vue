<script setup>
import { Link } from '@inertiajs/vue3';
import { 
    LayoutDashboard, 
    GraduationCap, 
    PlusCircle, 
    BarChart3, 
    Users, 
    Sparkles, 
    User as UserIcon, 
    LogOut,
    X,
    Settings,
    FileText,
    ClipboardList,
    Trophy,
    MessageSquare,
    Radio
} from 'lucide-vue-next';

defineProps({
    isSidebarOpen: Boolean
});

defineEmits(['close']);
</script>

<template>
    <aside 
        :class="[
            'fixed inset-y-0 right-0 z-50 w-64 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 transition-transform duration-300 lg:relative lg:translate-x-0 shrink-0',
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        ]"
    >
        <div class="flex h-11 items-center justify-between px-4 border-b border-zinc-100 dark:border-zinc-900">
            <Link href="/" class="text-base font-black tracking-tighter">كورس</Link>
            <button @click="$emit('close')" class="lg:hidden">
                <X class="h-4 w-4" />
            </button>
        </div>


        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-8">
            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">العامة</h4>
                <div class="space-y-1">
                    <Link :href="route('teacher.dashboard')" :class="[route().current('teacher.dashboard') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <LayoutDashboard class="h-4 w-4" />
                        لوحة التحكم
                    </Link>
                </div>
            </div>

            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">إدارة المحتوى</h4>
                <div class="space-y-1">
                    <Link :href="route('teacher.courses.index')" :class="[route().current('teacher.courses.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <FileText class="h-4 w-4" />
                        جميع الكورسات
                    </Link>
                    <Link :href="route('teacher.courses.create')" :class="[route().current('teacher.courses.create') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <PlusCircle class="h-4 w-4" />
                        كورس جديد
                    </Link>
                    <Link :href="route('teacher.quizzes.index')" :class="[route().current('teacher.quizzes.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <ClipboardList class="h-4 w-4" />
                        الاختبارات
                    </Link>
                    <Link :href="route('teacher.challenges.index')" :class="[route().current('teacher.challenges.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <Trophy class="h-4 w-4" />
                        التحديات الأسبوعية
                    </Link>
                </div>
            </div>

            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">التحليلات والطلاب</h4>
                <div class="space-y-1">
                    <Link :href="route('teacher.students.index')" :class="[route().current('teacher.students.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <Users class="h-4 w-4" />
                        الطلاب المسجلين
                    </Link>
                    <Link :href="route('teacher.sales.index')" :class="[route().current('teacher.sales.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <BarChart3 class="h-4 w-4" />
                        تقارير المبيعات
                    </Link>
                    <Link :href="route('teacher.moderation.comments')" :class="[route().current('teacher.moderation.comments') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <MessageSquare class="h-4 w-4" />
                        رقابة التعليقات
                    </Link>
                </div>
            </div>

            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">أدوات ذكية</h4>
                <div class="space-y-1">
                    <Link :href="route('ai.index')" :class="[route().current('ai.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <Sparkles class="h-4 w-4" />
                        المساعد الذكي
                    </Link>
                </div>
            </div>
        </div>

        <div class="mt-auto p-4 border-t border-zinc-200 dark:border-zinc-800">
            <Link :href="route('logout')" method="post" as="button" class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                <LogOut class="h-4 w-4" />
                تسجيل الخروج
            </Link>
        </div>
    </aside>
</template>

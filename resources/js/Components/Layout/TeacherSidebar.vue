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
            'fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-brand-hairline transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:inset-y-auto lg:translate-x-0 shrink-0 flex flex-col',
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        ]"
    >
        <div class="flex items-center justify-between px-4 border-b border-brand-hairline" :style="{ paddingTop: 'max(0.625rem, env(safe-area-inset-top, 0px))', paddingBottom: '0.625rem', minHeight: 'calc(2.75rem + env(safe-area-inset-top, 0px))' }">
            <Link href="/" class="flex items-center gap-2 font-bold tracking-tight">
                <div class="h-6 w-6 bg-brand-orange rounded flex items-center justify-center text-white text-[11px] font-medium">C</div>
                <span class="text-sm font-semibold tracking-tight text-brand-ink">كورس</span>
            </Link>
            <button @click="$emit('close')" class="lg:hidden text-brand-body p-1 rounded-md">
                <X class="h-4 w-4" />
            </button>
        </div>

        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-7">
            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">العامة</h4>
                <div class="space-y-1">
                    <Link :href="route('teacher.dashboard')" :class="[route().current('teacher.dashboard') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <LayoutDashboard class="h-4 w-4" />
                        لوحة التحكم
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">إدارة المحتوى</h4>
                <div class="space-y-1">
                    <Link :href="route('teacher.courses.index')" :class="[route().current('teacher.courses.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <FileText class="h-4 w-4" />
                        جميع الكورسات
                    </Link>
                    <Link :href="route('teacher.courses.create')" :class="[route().current('teacher.courses.create') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <PlusCircle class="h-4 w-4" />
                        كورس جديد
                    </Link>
                    <Link :href="route('teacher.quizzes.index')" :class="[route().current('teacher.quizzes.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <ClipboardList class="h-4 w-4" />
                        الاختبارات
                    </Link>
                    <Link :href="route('teacher.challenges.index')" :class="[route().current('teacher.challenges.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Trophy class="h-4 w-4" />
                        التحديات الأسبوعية
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">التحليلات والطلاب</h4>
                <div class="space-y-1">
                    <Link :href="route('teacher.students.index')" :class="[route().current('teacher.students.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Users class="h-4 w-4" />
                        الطلاب المسجلين
                    </Link>
                    <Link :href="route('teacher.sales.index')" :class="[route().current('teacher.sales.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <BarChart3 class="h-4 w-4" />
                        تقارير المبيعات
                    </Link>
                    <Link :href="route('teacher.moderation.comments')" :class="[route().current('teacher.moderation.comments') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <MessageSquare class="h-4 w-4" />
                        رقابة التعليقات
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">أدوات ذكية</h4>
                <div class="space-y-1">
                    <Link :href="route('ai.index')" :class="[route().current('ai.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Sparkles class="h-4 w-4" />
                        المساعد الذكي
                    </Link>
                </div>
            </div>

            <!-- إدارة النظام (فقط للأدمن) -->
            <div v-if="$page.props.auth?.user?.role === 'admin'" class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">إدارة النظام</h4>
                <div class="space-y-1">
                    <Link :href="route('admin.teachers.index')" :class="[route().current('admin.teachers.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Users class="h-4 w-4" />
                        إدارة المعلمين
                    </Link>
                    <Link :href="route('admin.scanner')" :class="[route().current('admin.scanner') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Sparkles class="h-4 w-4" />
                        فاحص المحتوى
                    </Link>
                </div>
            </div>
        </div>

        <div class="mt-auto p-4 border-t border-brand-hairline">
            <Link :href="route('logout')" method="post" as="button" class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-semibold text-brand-body">
                <LogOut class="h-4 w-4 text-brand-muted" />
                تسجيل الخروج
            </Link>
        </div>
    </aside>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { 
    LayoutDashboard, 
    BookOpen, 
    Compass, 
    Sparkles, 
    User as UserIcon, 
    LogOut,
    X,
    Settings,
    Library,
    ClipboardList,
    Trophy
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
        <div class="flex items-center px-4 border-b border-brand-hairline" :style="{ paddingTop: 'max(0.625rem, env(safe-area-inset-top, 0px))', paddingBottom: '0.625rem', minHeight: 'calc(2.75rem + env(safe-area-inset-top, 0px))' }">
            <Link href="/" class="flex items-center gap-2 font-bold tracking-tight">
                <div class="h-6 w-6 bg-brand-orange rounded flex items-center justify-center text-white text-[11px] font-medium">C</div>
                <span class="text-sm font-semibold tracking-tight text-brand-ink">كورس</span>
            </Link>
            <button @click="$emit('close')" class="lg:hidden mr-auto text-brand-body p-1 rounded-md">
                <X class="h-4 w-4" />
            </button>
        </div>

        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-7">
            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">الرئيسية</h4>
                <div class="space-y-1">
                    <Link :href="route('dashboard')" :class="[route().current('dashboard') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <LayoutDashboard class="h-4 w-4" />
                        لوحة التحكم
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">التعليم</h4>
                <div class="space-y-1">
                    <Link :href="route('courses.index')" :class="[route().current('courses.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Compass class="h-4 w-4" />
                        كل الكورسات
                    </Link>
                    <Link :href="route('courses.my-learning')" :class="[route().current('courses.my-learning') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <BookOpen class="h-4 w-4" />
                        دوراتي
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">الأنشطة والتقييمات</h4>
                <div class="space-y-1">
                    <Link :href="route('student.quizzes.index')" :class="[route().current('student.quizzes.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <ClipboardList class="h-4 w-4" />
                        كل الاختبارات
                    </Link>
                    <Link :href="route('student.challenges.index')" :class="[route().current('student.challenges.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Trophy class="h-4 w-4" />
                        التحديات
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-semibold uppercase tracking-wider text-brand-muted">الذكاء الاصطناعي</h4>
                <div class="space-y-1">
                    <Link :href="route('ai.index')" :class="[route().current('ai.index') ? 'bg-brand-surface-strong text-brand-ink font-semibold' : 'text-brand-body']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium">
                        <Sparkles class="h-4 w-4" />
                        المساعد الذكي
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

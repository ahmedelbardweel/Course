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
    Library
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
        <div class="flex h-16 items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
            <Link href="/" class="flex items-center gap-2 font-semibold tracking-tight">
                <span class="text-xl font-bold">كورس</span>
            </Link>
            <button @click="$emit('close')" class="lg:hidden mr-auto text-zinc-500">
                <X class="h-5 w-5" />
            </button>
        </div>

        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-8">
            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">الرئيسية</h4>
                <div class="space-y-1">
                    <Link :href="route('dashboard')" :class="[route().current('dashboard') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <LayoutDashboard class="h-4 w-4" />
                        لوحة التحكم
                    </Link>
                </div>
            </div>

            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">التعليم</h4>
                <div class="space-y-1">
                    <Link :href="route('courses.index')" :class="[route().current('courses.index') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <Compass class="h-4 w-4" />
                        كل الكورسات
                    </Link>
                    <Link :href="route('courses.my-learning')" :class="[route().current('courses.my-learning') ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-50']" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                        <BookOpen class="h-4 w-4" />
                        دوراتي
                    </Link>
                </div>
            </div>

            <div class="space-y-1">
                <h4 class="px-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">الذكاء الاصطناعي</h4>
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

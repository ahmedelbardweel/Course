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
            'fixed inset-y-0 right-0 z-50 w-64 bg-white/80 backdrop-blur-md border-l border-zinc-200/80 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:relative lg:translate-x-0 shrink-0 flex flex-col shadow-lg lg:shadow-none',
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        ]"
    >
        <div class="flex h-11 items-center px-4 border-b border-zinc-200/80">
            <Link href="/" class="flex items-center gap-2 font-bold tracking-tight">
                <div class="h-6 w-6 bg-zinc-950 rounded flex items-center justify-center text-white text-[11px] font-black">C</div>
                <span class="text-sm font-extrabold tracking-tight text-zinc-950">كورس</span>
            </Link>
            <button @click="$emit('close')" class="lg:hidden mr-auto text-zinc-500 hover:text-zinc-950 p-1 rounded-md hover:bg-zinc-100 transition-colors">
                <X class="h-4 w-4" />
            </button>
        </div>

        <div class="flex-1 overflow-y-auto py-6 px-4 space-y-7">
            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-black uppercase tracking-wider text-zinc-400">الرئيسية</h4>
                <div class="space-y-1">
                    <Link :href="route('dashboard')" :class="[route().current('dashboard') ? 'bg-zinc-950 text-white shadow-md font-bold' : 'text-zinc-500 hover:bg-zinc-100/60 hover:text-zinc-950']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 active:scale-95">
                        <LayoutDashboard class="h-4 w-4" />
                        لوحة التحكم
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-black uppercase tracking-wider text-zinc-400">التعليم</h4>
                <div class="space-y-1">
                    <Link :href="route('courses.index')" :class="[route().current('courses.index') ? 'bg-zinc-950 text-white shadow-md font-bold' : 'text-zinc-500 hover:bg-zinc-100/60 hover:text-zinc-950']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 active:scale-95">
                        <Compass class="h-4 w-4" />
                        كل الكورسات
                    </Link>
                    <Link :href="route('courses.my-learning')" :class="[route().current('courses.my-learning') ? 'bg-zinc-950 text-white shadow-md font-bold' : 'text-zinc-500 hover:bg-zinc-100/60 hover:text-zinc-950']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 active:scale-95">
                        <BookOpen class="h-4 w-4" />
                        دوراتي
                    </Link>
                </div>
            </div>

            <div class="space-y-2">
                <h4 class="px-2 text-[9px] font-black uppercase tracking-wider text-zinc-400">الذكاء الاصطناعي</h4>
                <div class="space-y-1">
                    <Link :href="route('ai.index')" :class="[route().current('ai.index') ? 'bg-zinc-950 text-white shadow-md font-bold' : 'text-zinc-500 hover:bg-zinc-100/60 hover:text-zinc-950']" class="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 active:scale-95">
                        <Sparkles class="h-4 w-4" />
                        المساعد الذكي
                    </Link>
                </div>
            </div>
        </div>

        <div class="mt-auto p-4 border-t border-zinc-200/80">
            <Link :href="route('logout')" method="post" as="button" class="w-full flex items-center gap-3 px-3 py-2 rounded-md text-xs font-bold text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 transition-all duration-200 active:scale-[0.98]">
                <LogOut class="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-1" />
                تسجيل الخروج
            </Link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { 
    LogOut,
    Menu,
    X,
    User as UserIcon,
    Bell,
    Settings
} from 'lucide-vue-next';
import StudentSidebar from '@/Components/Layout/StudentSidebar.vue';
import TeacherSidebar from '@/Components/Layout/TeacherSidebar.vue';

const isSidebarOpen = ref(false);
</script>

<template>
    <div class="bg-zinc-50/30 font-sans selection:bg-zinc-950 selection:text-white flex w-full h-screen overflow-hidden relative">
        <!-- Subtle Dot Grid Background matching Welcome.vue but softer -->
        <div class="absolute inset-0 bg-[radial-gradient(#e4e4e7_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60 pointer-events-none z-0"></div>
        
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
            <!-- Header (Glassmorphic) -->
            <header class="h-11 shrink-0 bg-white/70 backdrop-blur-md border-b border-zinc-200/80 sticky top-0 z-40 flex items-center justify-between px-4 lg:px-6">
                <div class="flex items-center gap-3">
                    <button @click="isSidebarOpen = true" class="lg:hidden p-1.5 hover:bg-zinc-100 rounded transition-colors active:scale-95 duration-200">
                        <Menu class="h-4 w-4" />
                    </button>
                    <h2 class="text-xs font-black tracking-tight text-zinc-800 uppercase flex items-center gap-2">
                        <slot name="header" />
                    </h2>
                </div>
                
                <div class="flex items-center gap-3">
                    <button class="p-1.5 hover:bg-zinc-100 rounded relative transition-colors duration-200">
                        <Bell class="h-4 w-4 text-zinc-600" />
                        <span class="absolute top-1 right-1 w-1.5 h-1.5 bg-zinc-950 rounded-full animate-pulse"></span>
                    </button>
                    <div class="hidden sm:flex flex-col items-end">
                        <span class="text-[11px] font-bold text-zinc-900 leading-none">{{ $page.props.auth?.user?.name }}</span>
                        <span class="text-[8px] text-zinc-400 font-extrabold uppercase tracking-widest mt-0.5">
                            {{ $page.props.auth?.user?.role === 'teacher' ? 'معلم' : ($page.props.auth?.user?.role === 'admin' ? 'مدير' : 'طالب') }}
                        </span>
                    </div>
                    <div class="h-7 w-7 bg-zinc-950 text-white rounded-md flex items-center justify-center font-black text-xs shadow-sm select-none transition-transform duration-200 hover:scale-105">
                        {{ $page.props.auth?.user?.name?.charAt(0) }}
                    </div>
                </div>
            </header>

            <!-- Content Area (Clean animate-in transition) -->
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
</style>

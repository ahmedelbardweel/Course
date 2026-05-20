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
    <div class="bg-white font-sans selection:bg-zinc-950 selection:text-white flex w-full h-screen overflow-hidden">
        
        <!-- Role-based Sidebar -->
        <TeacherSidebar 
            v-if="$page.props.auth?.user?.role === 'teacher' || $page.props.auth?.user?.role === 'admin'"
            :is-sidebar-open="isSidebarOpen"
            @close="isSidebarOpen = false"
        />
        <StudentSidebar 
            v-else
            :is-sidebar-open="isSidebarOpen"
            @close="isSidebarOpen = false"
        />

        <!-- Main Content -->
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
            <!-- Header -->
            <header class="h-11 shrink-0 bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-40 flex items-center justify-between px-4 lg:px-6">
                <div class="flex items-center gap-3">
                    <button @click="isSidebarOpen = true" class="lg:hidden p-1.5 hover:bg-zinc-100 rounded">
                        <Menu class="h-4 w-4" />
                    </button>
                    <h2 class="text-sm font-bold tracking-tight">
                        <slot name="header" />
                    </h2>
                </div>
                
                <div class="flex items-center gap-3">
                    <button class="p-1.5 hover:bg-zinc-100 rounded relative">
                        <Bell class="h-4 w-4" />
                        <span class="absolute top-1 right-1 w-1.5 h-1.5 bg-zinc-950 rounded-full"></span>
                    </button>
                    <div class="hidden sm:flex flex-col items-end">
                        <span class="text-xs font-bold leading-none">{{ $page.props.auth?.user?.name }}</span>
                        <span class="text-[9px] text-zinc-400 uppercase tracking-widest mt-0.5">
                            {{ $page.props.auth?.user?.role === 'teacher' ? 'معلم' : ($page.props.auth?.user?.role === 'admin' ? 'مدير' : 'طالب') }}
                        </span>
                    </div>
                    <div class="h-7 w-7 bg-zinc-950 rounded-md flex items-center justify-center text-white font-black text-xs shadow-sm">
                        {{ $page.props.auth?.user?.name?.charAt(0) }}
                    </div>
                </div>
            </header>

            <!-- Content Area -->
            <main class="flex-1 overflow-y-auto p-4 lg:p-6 scrollbar-none animate-in fade-in duration-500 ease-out">
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

<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { 
    LogOut,
    Menu,
    X,
    User as UserIcon,
    Bell,
    Settings,
    ChevronLeft
} from 'lucide-vue-next';
import StudentSidebar from '@/Components/Layout/StudentSidebar.vue';
import TeacherSidebar from '@/Components/Layout/TeacherSidebar.vue';

const isSidebarOpen = ref(false);

defineProps({
    breadcrumbs: {
        type: Array,
        default: () => [],
    }
});
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
                
                <div class="flex items-center gap-2 flex-shrink-0">
                    <slot name="header-actions" />
                    <button class="p-1.5 rounded relative hover:bg-[var(--muted)] transition-colors">
                        <Bell class="h-4 w-4 text-[var(--foreground)] opacity-70" />
                        <span class="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                    </button>
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

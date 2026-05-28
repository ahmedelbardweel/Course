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
            <!-- Header -->
            <header class="shrink-0 bg-[var(--card)] border-b border-[var(--border)] sticky top-0 z-40 flex items-center justify-between px-4 lg:px-6 shadow-none pt-[calc(0.25rem+env(safe-area-inset-top,0px))] pb-1 min-h-[calc(2.75rem+env(safe-area-inset-top,0px))]">
                <div class="flex items-center gap-3">
                    <button @click="isSidebarOpen = true" class="lg:hidden p-1.5 rounded pt-[env(safe-area-inset-top,0px)]">
                        <Menu class="h-4 w-4 text-[var(--foreground)]" />
                    </button>
                    <div class="text-[12px] font-normal tracking-tight text-[var(--foreground)] flex items-center gap-2">
                        <template v-if="breadcrumbs && breadcrumbs.length">
                            <div class="flex items-center gap-2">
                                <template v-for="(item, index) in breadcrumbs" :key="index">
                                    <Link 
                                        v-if="item.url && index < breadcrumbs.length - 1" 
                                        :href="item.url" 
                                        class="text-[var(--primary)] hover:underline font-normal"
                                    >
                                        {{ item.label }}
                                    </Link>
                                    <span v-else class="text-[var(--foreground)] font-normal">
                                        {{ item.label }}
                                    </span>
                                    <ChevronLeft v-if="index < breadcrumbs.length - 1" class="h-3.5 w-3.5 text-[var(--muted-foreground)] opacity-60" />
                                </template>
                            </div>
                        </template>
                        <template v-else>
                            <slot name="header" />
                        </template>
                    </div>
                </div>
                
                <div class="flex items-center gap-3">
                    <slot name="header-actions" />
                    <button class="p-1.5 rounded relative">
                        <Bell class="h-4 w-4 text-[var(--foreground)] opacity-70" />
                        <span class="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--primary)] rounded-full"></span>
                    </button>
                    <div class="hidden sm:flex flex-col items-end">
                        <span class="text-[11px] font-normal text-[var(--foreground)] leading-none">{{ $page.props.auth?.user?.name }}</span>
                        <span class="text-[8px] text-[var(--muted-foreground)] font-normal uppercase tracking-widest mt-0.5">
                            {{ $page.props.auth?.user?.role === 'teacher' ? 'معلم' : ($page.props.auth?.user?.role === 'admin' ? 'مدير' : 'طالب') }}
                        </span>
                    </div>
                    <div class="h-7 w-7 bg-[var(--foreground)] text-[var(--background)] rounded-md flex items-center justify-center font-normal text-xs select-none">
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
</style>

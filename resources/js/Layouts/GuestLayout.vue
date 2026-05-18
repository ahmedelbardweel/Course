<script setup>
import { Link } from '@inertiajs/vue3';
import { Zap } from 'lucide-vue-next';
</script>

<template>
    <div class="flex min-h-screen flex-col items-center justify-center bg-white selection:bg-zinc-900 selection:text-white px-4 relative overflow-hidden text-[12px]">
        
        <!-- Background Decorations -->
        <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-50 rounded-full blur-[120px] opacity-50"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-50 rounded-full blur-[120px] opacity-50"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
            <Zap class="h-[600px] w-[600px] text-zinc-900" />
        </div>

        <div class="relative z-10 w-full flex flex-col items-center">
            <!-- Premium Logo -->
            <div class="mb-10">
                <Link href="/" class="flex flex-col items-center gap-2 group">
                    <div class="h-12 w-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-zinc-900/20 group-hover:scale-110 transition-transform duration-500">
                        <span class="text-2xl font-black italic">C</span>
                    </div>
                    <span class="text-xl font-black tracking-tighter text-zinc-900 uppercase">كورس</span>
                </Link>
            </div>

            <!-- Content Card -->
            <div class="w-full sm:max-w-[440px] bg-white border border-zinc-100 p-8 lg:p-10 rounded-[2rem] shadow-2xl shadow-zinc-200/50">
                <slot />
            </div>
            
            <!-- Compact Footer -->
            <div class="mt-10 flex flex-col items-center gap-4">
                <div class="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    <Link href="#" class="hover:text-zinc-900 transition-colors">الشروط</Link>
                    <div class="h-1 w-1 bg-zinc-100 rounded-full"></div>
                    <Link href="#" class="hover:text-zinc-900 transition-colors">الخصوصية</Link>
                    <div class="h-1 w-1 bg-zinc-100 rounded-full"></div>
                    <Link href="#" class="hover:text-zinc-900 transition-colors">الدعم</Link>
                </div>
                <div class="text-[9px] text-zinc-300 uppercase tracking-[0.3em] font-black">
                    © 2024 كورس. المستقبل يبدأ هنا.
                </div>
            </div>
        </div>
    </div>
</template>

<style>
html {
    direction: rtl;
}
</style>

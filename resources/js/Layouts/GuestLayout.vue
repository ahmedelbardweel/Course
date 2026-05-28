<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="flex min-h-screen flex-col items-center justify-center bg-background selection:bg-brand-orange selection:text-white px-4 relative overflow-hidden text-[12px] animate-in fade-in duration-700 ease-out">
        
        <div class="relative z-10 w-full flex flex-col items-center">
            <!-- Premium Logo -->
            <div class="mb-8">
                <Link href="/" class="flex flex-col items-center gap-2">
                    <div class="h-10 w-10 bg-brand-orange rounded-md flex items-center justify-center text-white border border-brand-orange">
                        <span class="text-xl font-normal italic">C</span>
                    </div>
                    <span class="text-sm font-semibold tracking-tight text-brand-ink uppercase">كورس</span>
                </Link>
            </div>

            <!-- Content Card -->
            <div class="w-full sm:max-w-[400px] bg-white border border-brand-hairline p-6 sm:p-8 rounded-lg">
                <slot />
            </div>
            
            <!-- Compact Footer -->
            <div class="mt-8 flex flex-col items-center gap-3">
                <div class="flex items-center gap-3 text-[10px] uppercase tracking-widest text-brand-muted">
                    <Link href="#" class="text-brand-body">الشروط</Link>
                    <div class="h-1 w-1 bg-brand-hairline rounded-full"></div>
                    <Link href="#" class="text-brand-body">الخصوصية</Link>
                    <div class="h-1 w-1 bg-brand-hairline rounded-full"></div>
                    <Link href="#" class="text-brand-body">الدعم</Link>
                </div>
                <div class="text-[9px] text-brand-muted uppercase tracking-[0.2em] font-medium">
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

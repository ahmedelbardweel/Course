<script setup>
import { computed } from 'vue';

const props = defineProps({
    data: Array
});

const maxVal = computed(() => {
    const values = props.data.map(d => d.value);
    return Math.max(...values, 10); // Minimum 10 for scale
});

const getBarHeight = (value) => {
    return (value / maxVal.value) * 100;
};
</script>

<template>
    <div class="w-full h-full flex items-end justify-between gap-2 px-4 pt-8 pb-4">
        <div v-for="(item, index) in data" :key="index" class="flex-1 flex flex-col items-center group relative h-full justify-end">
            <!-- Tooltip -->
            <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-zinc-50 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                ${{ item.value.toFixed(2) }}
            </div>
            
            <!-- Bar -->
            <div 
                class="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-all duration-500 ease-out relative overflow-hidden"
                :style="{ height: getBarHeight(item.value) + '%' }"
            >
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-200/50 dark:from-zinc-700/50 to-transparent"></div>
            </div>

            <!-- Label -->
            <span class="mt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
                {{ item.label }}
            </span>
        </div>
    </div>
</template>

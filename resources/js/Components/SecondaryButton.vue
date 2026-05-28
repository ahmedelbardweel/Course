<script setup>
defineProps({
    type: {
        type: String,
        default: 'button',
    },
});
</script>

<template>
    <button
        :type="type"
        class="inline-flex items-center justify-center rounded-md border border-brand-hairline bg-white px-4 py-2 text-xs font-semibold text-brand-ink focus:outline-none focus:ring-1 focus:ring-brand-orange disabled:opacity-25"
    >
        <slot />
    </button>
</template>

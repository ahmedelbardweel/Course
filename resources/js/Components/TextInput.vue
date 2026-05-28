<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        class="rounded-md border border-brand-hairline bg-white text-brand-ink placeholder-brand-muted/60 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
        v-model="model"
        ref="input"
    />
</template>

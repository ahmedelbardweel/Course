<script setup>
import { SelectRoot } from 'radix-vue'

const props = defineProps(['modelValue', 'defaultValue', 'open', 'defaultOpen', 'dir', 'name', 'autocomplete', 'disabled', 'required'])
const emit = defineEmits(['update:modelValue', 'update:open'])
</script>

<template>
  <SelectRoot v-bind="props" @update:model-value="emit('update:modelValue', $event)" @update:open="emit('update:open', $event)">
    <slot />
  </SelectRoot>
</template>

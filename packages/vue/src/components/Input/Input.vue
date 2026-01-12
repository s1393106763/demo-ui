<script setup lang="ts">
import { spacing, colors, radii } from '@pabbii/tokens';

interface Props {
  label?: string;
  error?: string;
  modelValue?: string;
}

defineProps<Props>();
defineEmits(['update:modelValue']);
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: spacing.xs }">
    <label v-if="label" :style="{ fontSize: '14px', color: colors.secondary }">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :style="{
        padding: `${spacing.sm} ${spacing.md}`,
        borderRadius: radii.md,
        border: `1px solid ${error ? colors.danger : colors.info}`,
        outline: 'none',
        fontSize: '16px',
      }"
      v-bind="$attrs"
    />
    <span v-if="error" :style="{ fontSize: '12px', color: colors.danger }">{{ error }}</span>
  </div>
</template>

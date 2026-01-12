<script setup lang="ts">
import { computed } from 'vue';
import { colors } from '@demo-ui/tokens';

interface Props {
  variant?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});

const backgroundColor = computed(() => 
  props.variant === 'primary' ? colors.primary : colors.secondary
);
</script>

<template>
  <button
    :style="{
      backgroundColor,
      color: colors.white,
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    }"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

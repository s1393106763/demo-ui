<script setup lang="ts">
import { Button } from '@demo-ui/vue';

const handleClick = () => {
  window.alert('Vue Hello!');
};
</script>

<template>
  <div style="padding: 40px;">
    <h1>Demo UI Vue Playground</h1>
    <Button @click="handleClick">
      Vue Button
    </Button>
  </div>
</template>

<template>
  <div>
    <slot>{{ message }}</slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: { type: String },
  offset: { type: Number, default: 20 },
  zIndex: { type: Number, default: 0 },
  duration: { type: Number, default: 3000 },
  message: { type: [String] },
  onClose: { type: Function, default: () => {} },
})
</script>

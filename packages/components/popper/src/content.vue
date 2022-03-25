<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { createPopper } from '@popperjs/core'
import { onMounted } from 'vue'

const createPopperInstance = (referenceEl, poppeContentEl) => {
  return createPopper(referenceEl, poppeContentEl)
}

onMounted(() => {})
</script>

<script lang="ts">
export default {
  name: 'PoPopperContent',
}
</script>

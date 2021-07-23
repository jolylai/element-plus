<template>
  <div class="po-space">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, renderSlot } from 'vue'

export default defineComponent({
  name: 'PoSpace',
  setup(props, context) {
    console.log('context: ', context)
    const children = renderSlot(context.slots, 'default', { key: 0 }, () => [])
    console.log('children: ', children)
  },
})
</script>

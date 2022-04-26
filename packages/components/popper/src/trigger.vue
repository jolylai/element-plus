<template>
  <span ref="popperTriggerRef" v-bind="$attrs">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  inheritAttrs: true,
}
</script>

<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue'
import { POPPER_INJECTION_KEY } from './tokens'

const popperTriggerRef = ref<HTMLElement>()

const { triggerRef } = inject(POPPER_INJECTION_KEY)

onMounted(() => {
  triggerRef.value = popperTriggerRef.value
  console.log('popperTriggerRef.value: ', popperTriggerRef.value)
})
</script>

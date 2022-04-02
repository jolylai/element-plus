<template>
  <span ref="popperContentRef">
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { usePopperContentProps } from './content'
import { POPPER_INJECTION_KEY } from './tokens'

const props = defineProps(usePopperContentProps)

const popperContentRef = ref<HTMLElement>()

const { popperInstanceRef, contentRef, triggerRef } = inject(
  POPPER_INJECTION_KEY,
  undefined
)!

const createPopperInstance = (referenceEl, popperContentEl) => {
  return createPopper(referenceEl, popperContentEl, {
    placement: 'right'
  })
}

onMounted(() => {
  watch(
    triggerRef,
    referenceEl => {
      console.log('referenceEl: ', referenceEl)
      createPopperInstance(popperContentRef.value, referenceEl)
    },
    {
      immediate: true
    }
  )
})
</script>

<script lang="ts">
export default {
  name: 'PoPopper'
}
</script>

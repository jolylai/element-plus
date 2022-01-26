<template>
  <slot />
</template>

<script lang="ts" setup>
import { provide, ref } from 'vue'
import { PopperInjectionContext, POPPER_INJECTION_KEY } from './tokens'

const popperProvides = {
  triggerRef: ref<HTMLElement | null>(null),
  contentRef: ref(null),
  popperInstanceRef: ref(null),
} as PopperInjectionContext

provide(POPPER_INJECTION_KEY, popperProvides)
</script>

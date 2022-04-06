<template>
  <slot />
</template>

<script lang="ts" setup>
import { Instance } from '@popperjs/core'
import { provide, ref } from 'vue'
import { PopperInjectionContext, POPPER_INJECTION_KEY } from './tokens'

const triggerRef = ref<HTMLElement>()
const popperInstanceRef = ref<Instance>()
const contentRef = ref<HTMLElement>()
const referenceRef = ref<HTMLElement>()

const popperProvides = {
  triggerRef,
  popperInstanceRef,
  contentRef,
  referenceRef,
} as PopperInjectionContext

provide(POPPER_INJECTION_KEY, popperProvides)
</script>

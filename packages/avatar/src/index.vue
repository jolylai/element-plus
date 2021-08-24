<template>
  <span class="po-avatar" :class="cls" :style="avatarStyle">
    <img v-if="src" :src="src" />
    <slot />
  </span>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  src: { type: String },
  size: {
    type: [String, Number],
    validator: value => {
      if (typeof value === 'number') return true
      return ['small', 'default', 'large'].includes(value)
    },
  },
  shape: {
    type: String,
    validator: value => ['square', 'round'].includes(value),
  },
})

const cls = computed(() => {
  return {
    'po-avatar-small': props.size === 'small',
    'po-avatar-large': props.size === 'large',
    'po-avatar-round': props.shape === 'round',
  }
})

const avatarStyle = computed(() => {
  const size = props.size

  if (typeof size === 'number') {
    return { width: size + 'px', height: size + 'px' }
  }
})
</script>

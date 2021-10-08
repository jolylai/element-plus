<template>
  <span :class="avatarClass" :style="avatarStyle" ref="avatarRef">
    <img v-if="src" :src="src" :alt="alt" />
    <slot v-else />
  </span>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const avatarRef = ref()

const avatarTextRef = ref()

const props = defineProps({
  src: { type: String },
  size: {
    default: 'medium',
    type: [String, Number],
    validator: (value: number | string) => {
      if (typeof value === 'number') return true
      return ['small', 'medium', 'large'].includes(value)
    },
  },
  shape: {
    type: String,
    default: 'square',
    validator: (value: string) => ['square', 'circle'].includes(value),
  },
  alt: { type: String },
})

const avatarClass = computed(() => {
  const { size, shape } = props

  const classList = ['po-avatar']

  if (size && typeof size === 'string') {
    classList.push(`po-avatar-${size}`)
  }

  if (shape) {
    classList.push(`po-avatar-${shape}`)
  }

  return classList
})

const avatarStyle = computed(() => {
  const { size } = props

  if (typeof size === 'number') {
    return {
      width: size + 'px',
      height: size + 'px',
      lineHeight: size + 'px',
    }
  }

  return {}
})

// todo
const avatarTextStyle = computed(() => {
  if (!avatarTextRef.value) {
    return {}
  }

  const avatarWidth = avatarRef.value.offsetWidth
  const avatarTextWidth = avatarTextRef.value.offsetWidth

  const scale =
    avatarWidth > avatarTextWidth ? 1 : avatarWidth / avatarTextWidth

  return {
    transform: `scale(${scale})`,
  }
})
</script>

<template>
  <span :class="classes" :style="sizeStyle">
    <img
      v-if="src && !hasLoadError"
      :src="src"
      :alt="alt"
      :style="fitStyle"
      @error="onLoadImageError"
    />
    <slot v-else></slot>
  </span>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useLoadImage, useAvatar } from './avatar'

export type AvatarSize = 'small' | 'default' | 'large' | number
export type AvatarShape = 'circle' | 'square'
export type AvatarFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export type AvatarProps = {
  src?: string
  alt?: string
  size?: AvatarSize
  shape?: AvatarShape
  fit?: AvatarFit
}

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'circle',
  fit: 'cover',
})

watch(
  () => props.src,
  (src) => {
    loadImage(src)
  }
)

const { hasLoadError, loadImage, onLoadImageError } = useLoadImage()

const { classes, sizeStyle, fitStyle } = useAvatar(props)
</script>

<template>
  <span :class="[ns.b(), ns.m(size), ns.m(shape)]">
    <img
      v-if="src && !hasLoadError"
      :src="src"
      :alt="alt"
      @error="onLoadImageError"
    />
    <slot v-else></slot>
  </span>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useNamespace } from '@pomelo-plus/hooks'
import { useLoadImage } from './avatar'

export type AvatarSize = 'small' | 'default' | 'large'
export type AvatarShape = 'circle' | 'square'

export type AvatarProps = {
  src?: string
  alt?: string
  size?: AvatarSize
  shape?: AvatarShape
}

const props = withDefaults(defineProps<AvatarProps>(), {
  shape: 'circle',
})

const ns = useNamespace('avatar')

watch(
  () => props.src,
  (src) => {
    loadImage(src)
  }
)

const { isLoading, hasLoadError, imageSrc, loadImage, onLoadImageError } =
  useLoadImage()
</script>

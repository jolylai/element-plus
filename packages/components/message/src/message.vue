<template>
  <div :id="id" :class="classes" :style="styles">
    <slot>{{ message }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { useMessage } from './message'

export type MessageProps = {
  id?: string
  offset?: number
  zIndex?: number
  duration?: number
  message?: string
  onClose?: () => void
  onDestroy?: () => void
}

const props = withDefaults(defineProps<MessageProps>(), {
  offset: 20,
  zIndex: 0,
  duration: 3000,
})

defineOptions({
  name: 'PoMessage',
})

const { classes, styles } = useMessage(props)
</script>

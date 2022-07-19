<template>
  <div :id="id" :class="classes" :style="styles" ref="messageRef">
    <slot> </slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from './message'

export type MessageProps = {
  id?: string
  offset?: number
  zIndex?: number
  duration?: number
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

const messageRef = ref()

const { classes, styles, bottom } = useMessage(props, messageRef)

defineExpose({
  bottom,
})
</script>

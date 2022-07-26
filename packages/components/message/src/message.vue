<template>
  <div :id="id" :class="[ns.b()]" :style="styles" ref="messageRef">
    <i :class="[ns.e('icon')]">
      <component :is="iconComponent" />
    </i>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pomelo-plus/hooks'
import { TypeComponentsMap } from '@pomelo-plus/utils'
import { computed, ref } from 'vue'
import { useMessage } from './message'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

export type MessageProps = {
  id?: string
  offset?: number
  zIndex?: number
  duration?: number
  onClose?: () => void
  onDestroy?: () => void
  type?: MessageType
}

const props = withDefaults(defineProps<MessageProps>(), {
  offset: 20,
  zIndex: 0,
  duration: 3000,
  type: 'info',
})

defineOptions({
  name: 'PoMessage',
})

const ns = useNamespace('message')

const messageRef = ref()

const { styles, bottom } = useMessage(props, messageRef)

defineExpose({
  bottom,
})

const iconComponent = computed(() => {
  return TypeComponentsMap[props.type]
})
</script>

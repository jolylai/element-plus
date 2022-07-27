<template>
  <transition @before-leave="onClose" @after-leave="$emit('destroy')">
    <div
      v-show="visible"
      :id="id"
      :class="[ns.b()]"
      :style="customStyle"
      ref="messageRef"
    >
      <i :class="[ns.e('icon')]">
        <component :is="iconComponent" />
      </i>
      <span :class="[ns.e('content')]">
        <slot></slot>
      </span>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pomelo-plus/hooks'
import { TypeComponentsMap } from '@pomelo-plus/utils'
import { computed, onMounted, ref } from 'vue'
import { useMessage } from './message'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

export type MessageProps = {
  id?: string
  offset?: number
  zIndex?: number
  duration?: number
  onClose?: () => void
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

const { customStyle, bottom } = useMessage(props, messageRef)

defineExpose({
  bottom,
})

const iconComponent = computed(() => {
  return TypeComponentsMap[props.type]
})

const visible = ref(true)

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
})
</script>

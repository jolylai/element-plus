import { computed } from '@vue/reactivity'
import { MessageProps } from './message.vue'
import MessageConstructor from './message.vue'
import { Ref } from 'vue'
import { getLastOffset, instances } from './instance'
import useSize from '@pomelo-plus/hooks/use-size'

export interface MessageHandler {
  close: () => void
}

export type MessageInstance = InstanceType<typeof MessageConstructor>

export const useTimer = () => {}

export const useMessage = (
  props: MessageProps,
  messageRef: Ref<HTMLDivElement>
) => {
  // 前一个 message 的 bottom
  const lastOffset = computed(() => getLastOffset(props.id))
  const offset = computed(() => props.offset + lastOffset.value)
  const size = useSize(messageRef)

  const bottom = computed(() => {
    return offset.value + size.height.value
  })

  const customStyle = computed(() => {
    const { zIndex } = props

    return {
      top: `${offset.value}px`,
      zIndex: zIndex,
    }
  })

  return { customStyle, bottom }
}

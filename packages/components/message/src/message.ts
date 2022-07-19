import { useNamespace } from '@pomelo-plus/hooks'
import { computed } from '@vue/reactivity'
import { MessageProps } from './message.vue'
import MessageConstructor from './message.vue'
import { Ref } from 'vue'
import { useSize } from 'usevhooks'
import { getLastOffset } from './instance'

export interface MessageHandler {
  onClose: () => void
}

export type MessageInstance = InstanceType<typeof MessageConstructor>

export const useTimer = () => {}

export const useMessage = (
  props: MessageProps,
  messageRef: Ref<HTMLDivElement>
) => {
  const classes = computed(() => {
    const ns = useNamespace('message')
    return [ns.b()]
  })

  const styles = computed(() => {
    const { id, offset } = props

    const top = offset
    return {
      top: `${top}px`,
      zIndex: props.zIndex,
    }
  })

  const size = useSize(messageRef)
  console.log('size: ', size)

  const lastOffset = computed(() => getLastOffset(props.id))

  const offset = computed(() => props.offset + lastOffset.value)

  const bottom = computed(() => {
    const { id, offset } = props
    const size = useSize(messageRef)
    console.log('size: ', size)
  })

  return { classes, styles, bottom }
}

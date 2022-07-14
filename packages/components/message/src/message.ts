import { useNamespace } from '@pomelo-plus/hooks'
import { computed } from '@vue/reactivity'
import { MessageProps } from './message.vue'
import MessageConstructor from './message.vue'
import { getCurrentInstance, onMounted } from 'vue'

export interface MessageHandler {
  onClose: () => void
}

export type MessageInstance = InstanceType<typeof MessageConstructor>

export const useTimer = () => {}

export const useMessage = (props: MessageProps) => {
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

  const instance = getCurrentInstance()
  console.log('instance: ', instance)
  const bottom = computed(() => {
    const { id, offset } = props
  })

  return { classes, styles, bottom }
}

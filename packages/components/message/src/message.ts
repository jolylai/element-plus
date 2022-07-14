import { useNamespace } from '@pomelo-plus/hooks'
import { computed } from '@vue/reactivity'
import { MessageProps } from './message.vue'

export const useMessage = (props: MessageProps) => {
  const classes = computed(() => {
    const ns = useNamespace('message')
    return [ns.b()]
  })

  const styles = computed(() => {
    return {
      top: `${props.offset}px`,
      zIndex: props.zIndex,
    }
  })

  return { classes, styles }
}

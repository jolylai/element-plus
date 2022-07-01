import { useNamespace } from '@pomelo-plus/hooks'
import { buildProps } from '@pomelo-plus/utils'
import { computed, defineComponent, h, renderSlot } from 'vue'

const spaceItemProps = buildProps({
  prefixCls: {
    type: String,
  },
})

export default defineComponent({
  name: 'PoSpaceItem',
  props: spaceItemProps,
  setup(props, { slots }) {
    const ns = useNamespace('space')
    const classes = computed(() => `${props.prefixCls || ns.b()}__item`)

    return () => {
      return h('div', { class: classes }, renderSlot(slots, 'default'))
    }
  },
})

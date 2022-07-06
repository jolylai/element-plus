import { buildProps, isArray, isValidElementNode } from '@pomelo-plus/utils'
import { defineComponent, ExtractPropTypes, h, renderSlot, VNode } from 'vue'

import Item from './item'
import { useSpace } from './use-space'

export const spaceProps = buildProps({
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
  size: {
    type: [Number, String],
    values: ['small', 'middle', 'large'],
    default: 'small',
  },
} as const)

export type SpaceProps = ExtractPropTypes<typeof spaceProps>

export default defineComponent({
  name: 'PoSpace',
  props: spaceProps,
  setup(props, { slots }) {
    return () => {
      const { classes, containerStyle } = useSpace(props)

      const children = renderSlot(slots, 'default', { key: 0 }, () => [])

      const extractedChildren: VNode[] = []

      if (isArray(children.children)) {
        children.children.forEach((child) => {
          if (isValidElementNode(child)) {
            extractedChildren.push(
              h(
                Item,
                { prefixCls: '' },
                {
                  default: () => [child],
                }
              )
            )
          }
        })
      }

      return h(
        'div',
        { class: classes.value, style: containerStyle.value },
        extractedChildren
      )
    }
  },
})

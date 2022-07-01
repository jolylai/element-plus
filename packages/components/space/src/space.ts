import { buildProps, isArray, isFragment } from '@pomelo-plus/utils'
import { defineComponent, h, renderSlot, VNode } from 'vue'

import Item from './item'

export const spaceProps = buildProps({
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
})

export default defineComponent({
  name: 'PoSpace',
  props: spaceProps,
  setup(props, { slots }) {
    return () => {
      const children = renderSlot(slots, 'default', { key: 0 }, () => [])
      console.log('children: ', children)

      const extractedChildren: VNode[] = []

      if (isArray(children.children)) {
        children.children.forEach((child) => {
          extractedChildren.push(h(Item, null, child))
        })
      }

      return h('div', null, extractedChildren)
    }
  },
})

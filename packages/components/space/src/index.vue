<script lang="ts">
// import { PatchFlags } from '@pomelo-plus/utils'
import { createVNode, defineComponent, renderSlot } from 'vue'

import { defaultProps, useSpace } from './useSpace'

import Item from './item.vue'

export default defineComponent({
  name: 'PoSpace',
  props: defaultProps,
  setup(props) {
    return useSpace(props)
  },

  render() {
    const { $slots, classes, itemStyle } = this
    const children = renderSlot($slots, 'default', { key: 0 }, () => [])

    if (children.children.length === 0) return null

    if (Array.isArray(children.children)) {
      let extractedChildren = []

      children.children.forEach((child, loopKey) => {
        extractedChildren.push(
          createVNode(
            Item,
            {
              class: 'po-space-item',
              style: itemStyle,
              key: `LoopKey${loopKey}`
            },
            {
              default: () => [child]
            }
          )
        )
      })

      return createVNode(
        'div',
        {
          class: classes
        },
        extractedChildren
        // PatchFlags.STYLE | PatchFlags.CLASS
      )
    }

    return children.children
  }
})
</script>

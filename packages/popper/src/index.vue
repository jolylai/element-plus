<script lang="ts">
import { createVNode, defineComponent, Fragment, Teleport } from 'vue'
import { PatchFlags, renderBlock } from '@element-plus/utils/vnode'
import { renderPopper, renderTrigger } from './renderers'

export default defineComponent({
  render() {
    const { $slots, class: kls, style, popperId, appendToBody } = this

    // trigger
    const _t = $slots.trigger?.()
    const triggerProps = {
      ariaDescribedby: popperId,
      class: kls,
      style,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = renderTrigger(_t, triggerProps)

    const popper = renderPopper()
    return renderBlock(Fragment, null, [
      trigger,
      createVNode(
        Teleport as any,
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper],
        PatchFlags.PROPS,
        ['disabled'],
      ),
    ])
  },
})
</script>

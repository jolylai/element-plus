<script lang="ts">
import { PatchFlags } from '@/utils/vnode'
import {
  createTextVNode,
  defineComponent,
  Fragment,
  h,
  PropType,
  renderSlot,
  toDisplayString,
} from 'vue'
import { defaultProps, renderPopper } from '../../popper'
import { Effect, TriggerType } from '../../popper/src/use-popper/defaults'

export default defineComponent({
  name: 'PoPopover',
  props: {
    ...defaultProps,
    content: {
      type: String,
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'click',
    },
    title: {
      type: String,
    },
    transition: {
      type: String,
      default: 'fade-in-linear',
    },
    width: {
      type: [String, Number],
      default: 150,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    tabindex: [String, Number],
  },
  setup() {},

  render() {
    const { $slots } = this
    const content = renderSlot($slots, 'default', {}, () => {
      return [createTextVNode(toDisplayString(this.content), PatchFlags.TEXT)]
    })

    const {
      // onAfterEnter,
      // onAfterLeave,
      onPopperMouseEnter,
      onPopperMouseLeave,
      popperStyle,
      popperId,
      popperClass,
      showArrow,
      transition,
      visibility,
      tabindex,
    } = this

    const kls = [
      this.content ? 'el-popover--plain' : '',
      'po-popover',
      // popperClass,
    ].join(' ')

    let popover = renderPopper(
      {
        effect: Effect.LIGHT,
        name: transition,
        popperClass: kls,
        popperStyle: popperStyle,
        popperId,
        visibility,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        // onAfterEnter,
        // onAfterLeave,
        stopPopperMouseEvent: false,
      },
      [
        // title,
        content,
        // renderArrow(showArrow),
      ],
    )

    return h(Fragment, null, [popover])
  },
})
</script>

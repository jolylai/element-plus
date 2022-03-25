<script lang="ts">
import {
  h,
  defineComponent,
  Fragment,
  Teleport,
  onMounted,
  onBeforeUnmount,
  onActivated,
  onDeactivated,
  renderSlot,
  toDisplayString,
  withDirectives,
} from 'vue'
import { renderArrow, renderPopper, renderTrigger } from './renderers'
import usePopper from './use-popper'
import defaultProps from './use-popper/defaults'

export default defineComponent({
  name: 'PoPopper',
  props: defaultProps,
  emits: [
    'update:visible',
    'after-enter',
    'after-leave',
    'before-enter',
    'before-leave',
  ],
  setup(props, context) {
    if (!context.slots.trigger) throw new Error('Trigger must be provided!')

    const popperState = usePopper(props, context)

    const forceDestory = () => popperState.doDestroy(true)

    onMounted(popperState.initializePopper)
    onBeforeUnmount(forceDestory)

    onActivated(popperState.initializePopper)
    onDeactivated(forceDestory)

    return popperState
  },
  render() {
    const {
      $slots,
      appendToBody,
      class: kls,
      style,
      effect,
      hide,
      onPopperMouseEnter,
      onPopperMouseLeave,
      onAfterEnter,
      onAfterLeave,
      onBeforeEnter,
      onBeforeLeave,
      popperClass,
      popperId,
      popperStyle,
      pure,
      showArrow,
      transition,
      visibility,
      stopPopperMouseEvent,
    } = this

    const isManual = this.isManualMode()

    const arrow = renderArrow(showArrow)

    const popper = renderPopper(
      {
        effect,
        name: transition,
        popperClass,
        popperId,
        popperStyle,
        pure,
        stopPopperMouseEvent,
        onMouseenter: onPopperMouseEnter,
        onMouseleave: onPopperMouseLeave,
        onAfterEnter,
        onAfterLeave,
        onBeforeEnter,
        onBeforeLeave,
        visibility,
      },
      [
        renderSlot($slots, 'defautl', {}, () => {
          return [toDisplayString(this.content)]
        }),
      ],
    )

    // trigger
    const _t = $slots.trigger?.()
    const triggerProps = {
      ariaDescribedby: popperId,
      class: kls,
      style,
      ref: 'triggerRef',
      ...this.events,
    }

    const trigger = isManual
      ? renderTrigger(_t, triggerProps)
      : withDirectives(renderTrigger(_t, triggerProps), [[hide]])

    return h(Fragment, null, [
      trigger,
      h(
        Teleport as any,
        {
          to: 'body',
          disabled: !appendToBody,
        },
        [popper],
      ),
    ])
  },
})
</script>

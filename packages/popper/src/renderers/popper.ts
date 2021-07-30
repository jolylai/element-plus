import {  h, Transition, VNode, vShow, withCtx, withDirectives } from 'vue'

import { NOOP} from '@vue/shared'

import type { Ref} from 'vue'
import { Effect } from '../use-popper/defaults'

interface IRenderPopperProps {
  effect: Effect
  name: string
  stopPopperMouseEvent: boolean
  popperClass: string
  popperStyle?: Partial<CSSStyleDeclaration>
  popperId: string
  popperRef?: Ref<HTMLElement>
  pure?: boolean
  visibility: boolean
  onMouseenter: () => void
  onMouseleave: () => void
  onAfterEnter?: () => void
  onAfterLeave?: () => void
  onBeforeEnter?: () => void
  onBeforeLeave?: () => void
}

export default function renderPopper(
  props: IRenderPopperProps,
  children: VNode[],
) {
  const {
    effect,
    name,
    stopPopperMouseEvent,
    popperClass,
    popperStyle,
    popperRef,
    pure,
    popperId,
    visibility,
    onMouseenter,
    onMouseleave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  } = props

  const mouseUpAndDown = stopPopperMouseEvent ? stop: NOOP

  const kls = [
    popperClass,
    'el-popper',
    'is-' + effect,
    pure ? 'is-pure' : '',
  ]
  
  return h(Transition,{
    name,
    onMouseenter,
    onMouseleave,
    onAfterEnter,
    onAfterLeave,
    onBeforeEnter,
    onBeforeLeave,
  },
  {
    default: withCtx(() => [withDirectives(
      h(
        'div',
        {
          'aria-hidden': String(!visibility),
          class: kls,
          style: popperStyle ?? {},
          id: popperId,
          ref: popperRef ?? 'popperRef',
          role: 'tooltip',
          onMouseenter,
          onMouseleave,
          onClick: stop,
          onMousedown: mouseUpAndDown,
          onMouseup: mouseUpAndDown,
        },
        children,
      ),
      [[vShow, visibility]],
    )]),
  },)
}

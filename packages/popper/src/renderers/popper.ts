import { createVNode, Transition, VNode } from 'vue'

interface IRenderPopperProps {
  // effect: Effect
  name: string
  stopPopperMouseEvent: boolean
  popperClass: string
  popperStyle?: Partial<CSSStyleDeclaration>
}

export default function renderPopper(
  props: IRenderPopperProps,
  children: VNode[],
) {
  const { name } = props

  return createVNode(Transition, {
    name,
  })
}

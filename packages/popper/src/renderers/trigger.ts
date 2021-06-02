import { VNode, Ref, ComponentPublicInstance, cloneVNode } from "vue";
import { getFirstValidNode } from "@element-plus/utils/vnode";

type EventHandler = (e: Event) => any

interface IRenderTriggerProps  extends Record<string, unknown>{
  ref: string | Ref<ComponentPublicInstance | HTMLElement>,
  onClick?: EventHandler,
  onMouseover?: EventHandler,
  onMouseleave?: EventHandler,
  onFocus?: EventHandler
}

export default function renderTrigger(trigger: VNode, extraProps: IRenderTriggerProps){
  const firstElement = getFirstValidNode(trigger)
  if(!firstElement)  throw Error('trigger expects single rooted node')
  return cloneVNode(firstElement, extraProps, true)
}
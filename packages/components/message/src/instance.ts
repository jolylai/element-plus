import { Mutable } from '@pomelo-plus/utils'
import { VNode } from 'vue'
import { MessageHandler, MessageInstance } from './message'
import { MessageProps } from './message.vue'

export type MessageContext = {
  id: string
  vnode: VNode
  handler: MessageHandler
  vm: MessageInstance
  props: Mutable<MessageProps>
}

export const instances: MessageContext[] = []

export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  const current = instances[idx]
  let pre: MessageContext | undefined
  if (idx > 0) {
    pre = instances[idx - 1]
  }
  return { current, pre }
}

export const getLastOffset = (id: string) => {
  const { pre } = getInstance(id)
  if (!pre) return 0
  return pre.vm.bottom
}

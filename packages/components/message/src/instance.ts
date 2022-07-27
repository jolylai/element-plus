import { Mutable } from '@pomelo-plus/utils'
import { ComponentInternalInstance, shallowReactive, VNode } from 'vue'
import { MessageHandler } from './message'
import { MessageProps } from './message.vue'

export type MessageContext = {
  id: string
  vnode: VNode
  handler: MessageHandler
  vm: ComponentInternalInstance
  props: Mutable<MessageProps>
}

export const instances: MessageContext[] = shallowReactive([])

export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)

  const current = instances[idx]
  let prev: MessageContext | undefined
  if (idx > 0) {
    prev = instances[idx - 1]
  }
  return { current, prev }
}

export const closeInstance = (instance: MessageContext) => {
  const idx = instances.indexOf(instance)
  if (idx === -1) return

  instances.splice(idx, 1)
  instance.handler.close()
}

export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id)

  if (!prev) return 0
  return prev.vm.exposeProxy!.bottom
}

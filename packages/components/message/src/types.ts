import type { VNode } from "vue";

export type IMessageOptions = {
  id?: string
  offset?: number
  message: string | VNode
  type?: 'info'| 'warning' | 'success' | 'error'
  zIndex?: number
  onClose?: (vm:MessageVM) => void
}

export type IMessageParams = IMessageOptions | string


export type MessageQueue = VNode[]

export type MessageVM = VNode
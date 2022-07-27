import { h, render } from 'vue'
import { closeInstance, instances, MessageContext } from './instance'
import {
  Message,
  MessageArgsProps,
  MessageHandler,
  messageTypes,
} from './message'
import MessageConstructor from './message.vue'

export type MessageProps = string

let seed = 1

const createMessage = (args: MessageArgsProps) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  // 创建虚拟节点
  const vnode = h(
    MessageConstructor,
    {
      id,
      offset: 20,
      zIndex: 99,
      duration: 3000,
      onClose: () => {
        closeInstance(instance)
      },
      onDestroy: () => {
        render(null, container)
      },
    },
    {
      default: () => message,
    }
  )

  render(vnode, container)

  const handler: MessageHandler = {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      vm.exposeProxy!.visible = false
    },
  }

  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!

  const instance: MessageContext = {
    id,
    vnode,
    handler,
    vm,
    props: vm.props,
  }

  return instance
}

const message: any = {}

messageTypes.forEach((type) => {
  message[type] = (args: MessageArgsProps) => {
    return createMessage(args)
  }
})

export default message

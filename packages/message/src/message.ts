import { h, isVNode, render } from 'vue'

import MessageConstructor from './index.vue'

import {
  IMessageOptions,
  IMessageParams,
  MessageQueue,
  MessageVM,
} from './types'

const instances: MessageQueue = []

let seed = 1

function createMessage(userOpts: IMessageOptions) {
  if (typeof userOpts === 'string') {
    userOpts = { message: userOpts, offset: 16 }
  }

  const id = `message_${seed++}`

  for (let instance of instances) {
    userOpts.offset += instance.el.offsetHeight + 16
  }

  const options = Object.assign(userOpts, {
    id,
    onClose: () => {
      close(id, userOpts.onClose)
    },
  })

  const container = document.createElement('div')
  container.className = `container_${id}`

  const vm = h(
    MessageConstructor,
    options,
    isVNode(options.message) ? { default: () => options.message } : null,
  )

  instances.push(vm)

  render(vm, container)

  document.body.appendChild(container.firstElementChild)

  return { close: () => render(null, container) }
}

export function useMessage() {
  const message = {}
  const types = ['info', 'success', 'warning', 'error', 'loading']

  for (let type of types) {
    message[type] = createMessage
  }

  return message
}

export function close(id, userOnClose?: (vm: MessageVM) => void) {
  console.log('id: ', id)
  const idx = instances.findIndex(vm => {
    const { id: _id } = vm.component.props

    return id === _id
  })

  if (idx === -1) return

  const vm = instances[idx]

  if (!vm) return

  // userOnClose?.(vm)

  const removedHeight = vm.el.offsetHeight

  instances.splice(idx, 1)

  const len = instances.length

  if (len < 1) return

  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].el.style.top, 10) - removedHeight - 16

    instances[i].component.props.offset = pos
  }
}

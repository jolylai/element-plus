import { h, render, Teleport } from 'vue'
import MessageConstructor from './index.vue'

const instances = []

let seed = 1

export default function Message(opts) {
  if (typeof opts === 'string') {
    opts = { message: opts }
  }

  const id = `message_${seed++}`

  const container = document.createElement('div')
  container.className = `container_${id}`

  const vm = h(MessageConstructor, { id }, opts.message)

  instances.push(vm)

  render(vm, container)

  document.body.appendChild(container.firstElementChild)
  console.log('container: ', container)

  return { close: () => render(null, container) }
}

export function close(id) {
  const idx = instances.findIndex(vm => {
    const { id: _id } = vm.component.props

    return id === _id
  })

  if (idx === -1) return

  const vm = instances[idx]

  if (!vm) return

  const removedHeight = vm.el.offsetHeight

  instances.splice(idx, 1)

  const len = instances.length

  if (len < 1) return

  for (let i = idx; i < len; i++) {
    const pos = parseInt(instances[i].el.style.top, 10) - removedHeight - 16

    instances[i].vm.component.props.offset = pos
  }
}

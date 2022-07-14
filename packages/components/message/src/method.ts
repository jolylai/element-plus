import { h, render } from 'vue'
import MessageConstructor from './message.vue'

export type MessageProps = string

let seed = 1

const createMessage = (message: string) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')

  const vnode = h(
    MessageConstructor,
    {
      id,
      offset: 8,
      zIndex: 99,
      onClose: () => {},
      onDestroy: () => {},
    },
    {
      default: () => message,
    }
  )

  render(vnode, container)

  document.body.appendChild(container.firstElementChild!)
}

const Message = (props: MessageProps) => {
  console.log('message')
  createMessage(props)
}

export default Message

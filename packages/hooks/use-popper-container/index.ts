import { onBeforeMount } from 'vue'

const generateId = () => Math.floor(Math.random() * 10000)

export const POPPER_CONTAINER_ID = `po-popper-container-${generateId()}`

export const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`

export const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!document.querySelector(POPPER_CONTAINER_SELECTOR)) {
      const container = document.createElement('div')
      container.id = POPPER_CONTAINER_ID
      document.body.appendChild(container)
    }
  })
}

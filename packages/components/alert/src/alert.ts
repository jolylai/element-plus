import { ref } from 'vue'

export const useAlertClose = () => {
  const isClose = ref(false)

  const onClose = () => {
    isClose.value = true
  }

  return { isClose, onClose }
}

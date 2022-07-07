import { ref } from 'vue'
import { useNamespace } from '@pomelo-plus/hooks'
import { AvatarProps } from './avatar.vue'

export const useLoadImage = () => {
  const isLoading = ref(false)
  const hasLoadError = ref(false)
  const imageSrc = ref<string | undefined>()

  const loadImage = (src: string) => {
    isLoading.value = true
    hasLoadError.value = false

    imageSrc.value = src
  }

  const onLoadImageError = (event: Event) => {
    isLoading.value = false
    hasLoadError.value = true
  }

  return {
    isLoading,
    hasLoadError,
    imageSrc,
    loadImage,
    onLoadImageError,
  }
}

export const useAvatar = (props: AvatarProps) => {
  const ns = useNamespace('avatar')
}

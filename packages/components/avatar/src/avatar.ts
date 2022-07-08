import { CSSProperties, ref, computed } from 'vue'
import { useNamespace } from '@pomelo-plus/hooks'
import { AvatarProps } from './avatar.vue'
import { isNumber } from '@pomelo-plus/utils'

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

  const classes = computed(() => {
    const { size, shape } = props
    const classList = [ns.b(), ns.m(shape)]

    if (!isNumber(size)) {
      classList.push(ns.m(size))
    }

    return classList
  })

  const sizeStyle = computed(() => {
    const { size } = props
    if (isNumber(size)) {
      return ns.cssVarBlock({ size: `${size}px` }) as CSSProperties
    }
  })

  const fitStyle = computed<CSSProperties>(() => {
    const { fit } = props
    return { objectFit: fit }
  })

  return { classes, sizeStyle, fitStyle }
}

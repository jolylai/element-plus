import { useNamespace } from '@pomelo-plus/hooks'
import { computed, CSSProperties, StyleValue } from 'vue'
import { SpaceProps } from './space'

const sizeMap: Record<string, number> = {
  small: 8,
  middle: 12,
  large: 16,
}

export function useSpace(props: SpaceProps) {
  const ns = useNamespace('space')
  const classes = computed(() => [ns.b(), ns.e(props.direction)])

  const containerStyle = computed<StyleValue>(() => {
    const size = props.size
    const gapSize =
      typeof size === 'number' ? `${size}px` : `${sizeMap[size]}px`

    const gap: CSSProperties = {
      gap: gapSize,
    }

    return [gap]
  })

  return { classes, containerStyle }
}

import { computed, ExtractPropTypes, PropType, watch, ref } from 'vue'
import { isValidSize } from '../../../utils/validator'

const sizeMap: Record<string, number> = {
  small: 8,
  medium: 12,
  large: 16,
}

export const defaultProps = {
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },
  size: {
    type: String as PropType<ComponentSize>,
    default: 'small',
    validator: value => {
      return isValidSize(value)
    },
  },
}

export function useSpace(props: ExtractPropTypes<typeof defaultProps>) {
  const classes = computed(() => ['po-space', `po-space-${props.direction}`])

  const horizontalSize = ref(0)
  const verticalSize = ref(0)

  watch(
    () => [props.size, props.direction],
    ([size, direction]) => {
      if (direction === 'horizontal') {
        horizontalSize.value = sizeMap[size]
        verticalSize.value = 0
      } else {
        console.log('size: ', size)
        verticalSize.value = sizeMap[size]
        horizontalSize.value = 0
      }
    },
    { immediate: true },
  )

  const itemStyle = computed(() => {
    return {
      paddingBottom: verticalSize.value + 'px',
      marginRight: horizontalSize.value + 'px',
    }
  })

  return { classes, itemStyle }
}

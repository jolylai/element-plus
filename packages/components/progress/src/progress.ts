import { isFunction, isString } from '@vue/shared'
import { computed, CSSProperties } from 'vue'
import type { ProgressProps } from './progress.vue'

export type ProgressFuncType = (percentage: number) => string
export type ProgressStatus = 'normal' | 'success' | 'exception' | 'active'
export type ProgressType = 'line' | 'circle' | 'dashboard'

export const useSvgPath = (props: ProgressProps) => {
  const relativeStrokeWidth = computed(() =>
    ((props.strokeWidth / props.width) * 100).toFixed(1)
  )

  const radius = computed(() => {
    if (['circle', 'dashboard'].includes(props.type)) {
      return Number.parseInt(
        `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
        10
      )
    }
    return 0
  })

  const trackPath = computed(() => {
    const r = radius.value
    const isDashboard = props.type === 'dashboard'
    return `
      M 50 50
      m 0 ${isDashboard ? '' : '-'}${r}
      a ${r} ${r} 0 1 1 0 ${isDashboard ? '-' : ''}${r * 2}
      a ${r} ${r} 0 1 1 0 ${isDashboard ? '' : '-'}${r * 2}
      `
  })

  // 周长
  const perimeter = computed(() => 2 * Math.PI * radius.value)

  const rate = computed(() => (props.type === 'dashboard' ? 0.75 : 1))

  // 作用于仪表盘
  const strokeDashoffset = computed(() => {
    const offset = (-1 * perimeter.value * (1 - rate.value)) / 2
    return `${offset}px`
  })

  const trailPathStyle = computed<CSSProperties>(() => ({
    strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
    strokeDashoffset: strokeDashoffset.value,
  }))

  const circlePathStyle = computed<CSSProperties>(() => ({
    strokeDasharray: `${
      perimeter.value * rate.value * (props.percentage / 100)
    }px, ${perimeter.value}px`,
    strokeDashoffset: strokeDashoffset.value,
    transition:
      'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s',
  }))

  return { trackPath, relativeStrokeWidth, trailPathStyle, circlePathStyle }
}

export const useBar = (props: ProgressProps) => {
  const getColors = (colors: any[]) => {
    const span = 100 / colors.length

    const seriesColors = colors.map((seriesColor, index) => {
      if (isString(seriesColor)) {
        return {
          color: seriesColor,
          percentage: (index + 1) * span,
        }
      }

      return seriesColor
    })

    return seriesColors.sort((a, b) => a.percentage - b.percentage)
  }

  const getCurrentColor = (percentage: number) => {
    const { color } = props
    if (isString(color)) {
      return color
    } else if (isFunction(color)) {
      return color(percentage)
    } else {
      const colors = getColors(color)
      for (const color of colors) {
        if (percentage < color.percentage) return color.color
      }

      return colors[colors.length - 1]?.color
    }
  }

  const barInnerStyle = computed<CSSProperties>(() => {
    const { percentage } = props
    return {
      width: `${percentage}%`,
      backgroundColor: getCurrentColor(percentage),
    }
  })

  const barStyle = computed<CSSProperties>(() => {
    const { strokeWidth, textInside } = props
    const barHeight = textInside ? Math.max(16, strokeWidth) : strokeWidth
    return {
      height: `${barHeight}px`,
    }
  })

  return { barStyle, barInnerStyle }
}

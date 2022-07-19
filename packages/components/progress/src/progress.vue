<template>
  <div :class="[ns.b(), ns.m(type), ns.is(status)]">
    <!-- line -->
    <div v-if="type === 'line'" :class="[ns.b('bar')]" :style="barStyle">
      <div :class="[ns.be('bar', 'outer')]">
        <div
          :class="[
            ns.be('bar', 'inner'),
            indeterminate ? [ns.bem('bar', 'inner', 'indeterminate')] : '',
          ]"
          :style="barInnerStyle"
        >
          <div v-if="textInside" :class="[ns.be('bar', 'innerText')]">
            <slot>
              {{ format(percentage) }}
            </slot>
          </div>
        </div>
      </div>
    </div>

    <!-- circle -->
    <div
      v-else
      :class="[ns.b('circle')]"
      :style="{ height: `${width}px`, width: `${width}px` }"
    >
      <svg viewBox="0 0 100 100">
        <path
          :class="ns.be('circle', 'track')"
          :d="trackPath"
          :stroke="`var(${ns.cssVarName('color-')}, #e5e9f2)`"
          :stroke-width="relativeStrokeWidth"
          fill="none"
          :style="trailPathStyle"
        ></path>
        <path
          :class="ns.be('circle', 'path')"
          :d="trackPath"
          :stroke="stroke"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        ></path>
      </svg>
    </div>

    <!-- text -->
    <span v-if="!textInside && showText" :class="[ns.e('text')]">
      <slot>
        <span v-if="status == 'normal' || status == 'active'">
          {{ format(percentage) }}
        </span>
        <span v-else :class="[ns.e('icon')]">
          <component :is="statusIcon" />
        </span>
      </slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { CircleCheck, CircleClose, Check, Close } from '@element-plus/icons-vue'
import { useNamespace } from '@pomelo-plus/hooks'
import { ProgressStatus, ProgressType, useSvgPath, useBar } from './progress'

export interface ProgressProps {
  percentage: number
  status?: ProgressStatus
  format?: (percentage: number) => string
  type?: ProgressType
  indeterminate?: boolean
  duration?: number
  strokeLinecap?: 'butt' | 'round' | 'square'
  textInside?: boolean
  strokeWidth?: number
  width?: number
  showText?: boolean
  color?:
    | string
    | Array<string | { color: string; percentage: number }>
    | ((percentage: number) => string)
}

const props = withDefaults(defineProps<ProgressProps>(), {
  percentage: 0,
  format: (percentage: number) => `${percentage}%`,
  type: 'line',
  status: 'normal',
  width: 126,
  strokeWidth: 6,
  showText: true,
  textInside: false,
  color: '',
  strokeLinecap: 'round',
  indeterminate: false,
  duration: 3,
})

const ns = useNamespace('progress')

const statusIcon = computed(() => {
  if (props.type === 'line') {
    return props.status === 'success' ? CircleCheck : CircleClose
  } else {
    return props.status === 'success' ? Check : Close
  }
})

const { barStyle, barInnerStyle } = useBar(props)

const {
  stroke,
  trackPath,
  relativeStrokeWidth,
  trailPathStyle,
  circlePathStyle,
} = useSvgPath(props)
</script>

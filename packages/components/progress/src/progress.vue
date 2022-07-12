<template>
  <div :class="[ns.b(), ns.e(type), ns.is(status)]">
    <!-- line -->
    <div v-if="type === 'line'" :class="[ns.b('bar')]">
      <div :class="[ns.be('bar', 'outer')]">
        <div :class="[ns.be('bar', 'inner')]" :style="barStyle" />
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
          stroke="#20a0ff"
          fill="none"
          stroke-linecap="round"
          :stroke-width="relativeStrokeWidth"
          :style="circlePathStyle"
        ></path>
      </svg>
    </div>

    <!-- text -->
    <span :class="[ns.e('text')]">
      <slot>
        <span v-if="status == 'normal' || status == 'active'">
          {{ format(percent) }}
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
import type { CSSProperties } from 'vue'
import { CircleCheck, CircleClose, Check, Close } from '@element-plus/icons-vue'
import { useNamespace } from '@pomelo-plus/hooks'
import {
  ProgressStatus,
  ProgressFuncType,
  ProgressType,
  useSvgPath,
} from './progress'

export interface ProgressProps {
  percent: number
  status?: ProgressStatus
  format?: (percent: number) => string
  type?: ProgressType
  // indeterminate: boolean
  // duration: number
  // strokeLinecap: string
  // textInside: boolean
  strokeWidth?: number
  width?: number
  // showText: boolean
  color?:
    | string
    | Array<string | { color: string; percent: number }>
    | ProgressFuncType
}

const props = withDefaults(defineProps<ProgressProps>(), {
  percent: 0,
  format: (percent) => `${percent} %`,
  type: 'line',
  status: 'normal',
  width: 126,
  strokeWidth: 6,
})

const ns = useNamespace('progress')

const statusIcon = computed(() => {
  if (props.type === 'line') {
    return props.status === 'success' ? CircleCheck : CircleClose
  } else {
    return props.status === 'success' ? Check : Close
  }
})

const barStyle = computed<CSSProperties>(() => {
  const { percent } = props
  return {
    width: `${percent}%`,
  }
})

const { trackPath, relativeStrokeWidth, trailPathStyle, circlePathStyle } =
  useSvgPath(props)
</script>

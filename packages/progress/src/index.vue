<template>
  <div :class="['el-progress']">
    <div class="el-progress-bar">
      <div class="el-progress-bar-outer">
        <div class="el-progress-bar-inner" :style="barStyle"></div>
      </div>
    </div>
    <div class="el-progress-text">{{ percentage }}%</div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

type ProgressFuncType = (percentage: number) => string

interface IProgressProps {
  type: string
  percentage: number
  status: string
  indeterminate: boolean
  duration: number
  strokeWidth: number
  strokeLinecap: string
  textInside: boolean
  width: number
  showText: boolean
  color:
    | string
    | Array<string | { color: string; percentage: number }>
    | ProgressFuncType
  format: ProgressFuncType
}

export default defineComponent({
  name: 'PoProgress',
  props: {
    percentage: { type: Number, required: true },
    type: {
      type: String,
      default: 'line',
      validator: (val: string): boolean =>
        ['line', 'circle', 'dashboard'].indexOf(val) > -1,
    },
    duration: { type: Number, defautl: 2 },
  },
  setup(props: IProgressProps) {
    const barStyle = computed(() => {
      return {
        width: props.percentage + '%',
        animationDuration: props.duration,
      }
    })

    return {
      barStyle,
    }
  },
})
</script>

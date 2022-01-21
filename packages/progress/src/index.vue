<template>
  <div :class="['po-progress']">
    <div class="po-progress-bar">
      <div class="po-progress-bar-outer">
        <div
          class="po-progress-bar-inner"
          :style="{ width: percent + '%' }"
        ></div>
      </div>
    </div>
    <div class="po-progress-text">{{ percent }}%</div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

type ProgressFuncType = (percent: number) => string

interface IProgressProps {
  type: string
  percent: number
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
    | Array<string | { color: string; percent: number }>
    | ProgressFuncType
  format: ProgressFuncType
}

export default defineComponent({
  name: 'PoProgress',
  props: {
    percent: { type: Number, default: 0 },
    type: {
      type: String,
      default: 'line',
      validator: (val: string): boolean =>
        ['line', 'circle', 'dashboard'].indexOf(val) > -1,
    },
    duration: { type: Number, defautl: 2 },
  },
  setup(props) {
    console.log('props: ', props)
    return {}
  },
})
</script>

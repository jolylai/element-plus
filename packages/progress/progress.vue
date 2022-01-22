<template>
  <div :class="['po-progress', `po-progress-${type}`, `is-${status}`]">
    <!-- line -->
    <div v-if="type === 'line'" class="el-progress-line">
      <div class="po-progress-bar">
        <div class="po-progress-outer">
          <div
            class="po-progress-inner"
            :style="{ width: percent + '%' }"
          ></div>
        </div>
      </div>
      <span class="po-progress-text">
        <slot>
          <span v-if="!status">
            {{ format(percent) }}
          </span>
          <span v-else class="po-progress-icon">
            <component :is="statusIcon" />
          </span>
        </slot>
      </span>
    </div>
    <!-- circle -->
    <div v-else class="po-progress-circle">
      <svg viewBox="0 0 100 100">
        <path
          class="el-progress-circle__track"
          d="
          M 50 50
          m 0 -47
          a 47 47 0 1 1 0 94
          a 47 47 0 1 1 0 -94
          "
          stroke="#e5e9f2"
          stroke-width="4.8"
          fill="none"
          style="stroke-dasharray: 295.31px, 295.31px; stroke-dashoffset: 0px;"
        ></path>
        <path
          class="el-progress-circle__path"
          d="
          M 50 50
          m 0 -47
          a 47 47 0 1 1 0 94
          a 47 47 0 1 1 0 -94
          "
          stroke="#20a0ff"
          fill="none"
          stroke-linecap="round"
          stroke-width="4.8"
          style="stroke-dasharray: 73.8274px, 295.31px; stroke-dashoffset: 0px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;"
        ></path>
      </svg>

      <span class="po-progress-text">{{ format(percent) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PoProgress',
}
</script>

<script lang="ts" setup>
import {
  WarningFilled,
  CircleCheck,
  CircleClose,
  Check,
  Close,
} from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity'

type ProgressFuncType = (percent: number) => string

type ProgressStatus = 'normal' | 'success' | 'exception' | 'active'

type ProgressType = 'line' | 'circle' | 'dashboard'

interface ProgressProps {
  percent: number
  status?: ProgressStatus
  format?: ProgressFuncType
  type?: ProgressType
  // indeterminate: boolean
  // duration: number
  // strokeWidth: number
  // strokeLinecap: string
  // textInside: boolean
  // width: number
  // showText: boolean
  // color:
  //   | string
  //   | Array<string | { color: string; percent: number }>
  //   | ProgressFuncType
}

const props = withDefaults(defineProps<ProgressProps>(), {
  percent: 0,
  format: percent => `${percent} %`,
  type: 'line',
})

const statusIcon = computed(() => {
  if (props.type === 'line') {
    return props.status === 'success' ? CircleCheck : CircleClose
  } else {
    return props.status === 'success' ? Check : Close
  }
})
</script>

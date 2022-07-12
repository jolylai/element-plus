<template>
  <div :class="[ns.b(), ns.e(type)]">
    <!-- line -->
    <div v-if="type === 'line'" :class="[ns.b('bar')]">
      <div :class="[ns.be('bar', 'outer')]">
        <div
          :class="[ns.be('bar', 'inner')]"
          :style="{ width: percent + '%' }"
        />
      </div>
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
          style="stroke-dasharray: 295.31px, 295.31px; stroke-dashoffset: 0px"
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
          style="
            stroke-dasharray: 73.8274px, 295.31px;
            stroke-dashoffset: 0px;
            transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s;
          "
        ></path>
      </svg>

      <span class="po-progress-text">{{ format(percent) }}</span>
    </div>

    <span :class="[ns.e('text')]">
      <slot>
        <span v-if="!status">
          {{ format(percent) }}
        </span>
        <!-- <span v-else :class="[ns.e('icon')]">
            <component :is="statusIcon" />
          </span> -->
      </slot>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import {
//   WarningFilled,
//   CircleCheck,
//   CircleClose,
//   Check,
//   Close,
// } from '@element-plus/icons-vue'
import { useNamespace } from '@pomelo-plus/hooks'
import type { ProgressStatus, ProgressFuncType, ProgressType } from './progress'

export interface ProgressProps {
  percent: number
  status?: ProgressStatus
  format?: (percent: number) => string
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
  format: (percent) => `${percent} %`,
  type: 'line',
})

const ns = useNamespace('progress')

// const statusIcon = computed(() => {
//   if (props.type === 'line') {
//     return props.status === 'success' ? CircleCheck : CircleClose
//   } else {
//     return props.status === 'success' ? Check : Close
//   }
// })
</script>

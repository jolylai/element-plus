<template>
  <po-space direction="vertical">
    <po-progress type="line" :percentage="percentage" :show-text="false" />
    <po-progress type="line" :percentage="percentage" />
    <po-progress type="line" :percentage="percentage" :text-inside="true" />

    <po-progress
      type="line"
      status="success"
      :percentage="percentage"
      :show-text="false"
    />
    <po-progress type="line" status="success" :percentage="percentage" />
    <po-progress
      type="line"
      status="success"
      :percentage="percentage"
      :text-inside="true"
    />

    <po-progress
      type="line"
      status="exception"
      :percentage="percentage"
      :show-text="false"
    />
    <po-progress type="line" status="exception" :percentage="percentage" />
    <po-progress
      type="line"
      status="exception"
      :percentage="percentage"
      :text-inside="true"
    />

    <po-space>
      <po-button @click="minus"> 减 10% </po-button>
      <po-button @click="add"> 加 10% </po-button>
    </po-space>
  </po-space>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const percentageRef = ref(10)

    const add = () => {
      percentageRef.value += 10
      if (percentageRef.value > 100) {
        percentageRef.value = 0
      }
    }

    const minus = () => {
      percentageRef.value -= 10
      if (percentageRef.value < 0) {
        percentageRef.value = 100
      }
    }

    return {
      percentage: percentageRef,
      add,
      minus,
    }
  },
})
</script>

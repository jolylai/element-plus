<template>
  <div class="demo-progress">
    <po-progress :percent="percent" :color="customColor" />

    <po-progress :percent="percent" :color="customColorMethod" />

    <po-progress :percent="percent" :color="customColors" />
    <po-progress :percent="percent" :color="customColors" />
    <po-space>
      <po-button @click="decrease">-</po-button>
      <po-button @click="increase">+</po-button>
    </po-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const percent = ref(20)
const customColor = ref('#409eff')

const customColors = [
  { color: '#f56c6c', percent: 20 },
  { color: '#e6a23c', percent: 40 },
  { color: '#5cb87a', percent: 60 },
  { color: '#1989fa', percent: 80 },
  { color: '#6f7ad3', percent: 100 },
]

const customColorMethod = (percent: number) => {
  if (percent < 30) {
    return '#909399'
  }
  if (percent < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const increase = () => {
  percent.value += 10
  if (percent.value > 100) {
    percent.value = 100
  }
}
const decrease = () => {
  percent.value -= 10
  if (percent.value < 0) {
    percent.value = 0
  }
}
</script>
<style scoped>
.demo-progress .po-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>

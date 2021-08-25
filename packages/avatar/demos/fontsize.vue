<template>
  <po-avatar
    size="large"
    :style="{
      color: 'yellow',
      backgroundColor: 'red',
    }"
  >
    {{ name }}
  </po-avatar>
  <el-avatar
    :size="40"
    :style="{
      color: 'yellow',
      backgroundColor: 'red',
    }"
  >
    {{ name }}
  </el-avatar>

  <po-avatar
    size="large"
    shape="circle"
    :style="{
      color: 'yellow',
      backgroundColor: 'red',
    }"
  >
    {{ name }}
  </po-avatar>

  <input :value="name" @change="onChange" />
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Modestofadsfa')

const onChange = e => {
  console.log('e: ', e)
  name.value = e.target.value
}
</script>

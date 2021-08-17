<template>
  <po-space>
    <po-button @click="info">信息</po-button>
  </po-space>
</template>

<script lang="ts" setup>
// eslint-disable-next-line
import { Message } from 'pomelo-plus'

const info = () => {
  const { close } = Message('info')

  // setTimeout(() => {
  //   close()
  // }, 2000)
}
</script>

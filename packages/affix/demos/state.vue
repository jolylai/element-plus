<template>
  <po-affix :offset="200" @scroll="onScroll" @change="onChange">
    <po-button>距离顶部 200px</po-button>
  </po-affix>
</template>

<script setup>
import { useMessage } from 'pomelo-plus'

const message = useMessage()

const onScroll = ({ scrollTop, fixed }) => {
  console.log({ scrollTop, fixed })
}

const onChange = fixed => {
  console.log('fixed: ', fixed)
  const msg = fixed ? '固定' : '解除固定'
  message.success(msg)
}
</script>

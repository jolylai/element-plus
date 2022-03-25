<template>
  <po-space>
    <po-button @click="info">信息</po-button>
    <po-button @click="success">成功</po-button>
    <po-button @click="warning">警告</po-button>
    <po-button @click="error">错误</po-button>
    <po-button @click="loading">加载中</po-button>
  </po-space>
</template>

<script lang="ts" setup>
import { useMessage } from 'pomelo-plus'

const message = useMessage()

const info = () => {
  message.info('这是一个提示信息')
}
const success = () => {
  message.success('成功信息')
}
const warning = () => {
  message.warning('警告信息')
}
const error = () => {
  message.error('错误信息')
}
const loading = () => {
  message.loading('加载中')
}
</script>

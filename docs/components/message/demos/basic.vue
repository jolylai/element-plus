<template>
  <po-space>
    <po-button @click="info">信息</po-button>
    <po-button @click="err">错误</po-button>
    <po-button @click="warning">警告</po-button>
    <po-button @click="success">成功</po-button>
  </po-space>
</template>

<script lang="ts" setup>
import { PoMessage } from 'pomelo-plus'
import '@pomelo-plus/theme/src/message.scss'

const info = () => {
  PoMessage.info('this is a message.')
}

const err = () => {
  PoMessage.error('this is a message.')
}

const warning = () => {
  PoMessage.warning('this is a message.')
}

const success = () => {
  PoMessage.success('this is a message.')
}
</script>

<template>
  <po-space>
    <po-button @click="open">信息</po-button>
    <!-- <po-button @click="openVn">Vnode</po-button> -->
  </po-space>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { PoMessage } from 'pomelo-plus'

const open = () => {
  PoMessage('this is a message.')
}

// const openVn = () => {
//   PoMessage({
//     message: h('p', null, [
//       h('span', null, 'Message can be '),
//       h('i', { style: 'color: teal' }, 'VNode'),
//     ]),
//   })
// }
</script>

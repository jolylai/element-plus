<template>
  <po-avatar size="large" :style="avatarStyle">
    {{ name }}
  </po-avatar>

  <po-avatar size="large" shape="circle" :style="avatarStyle">
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

const avatarStyle = {
  color: 'yellow',
  backgroundColor: 'red',
}
</script>

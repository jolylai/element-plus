<template>
  <po-space>
    <po-avatar size="large" :style="avatarStyle">
      {{ name }}
    </po-avatar>

    <po-avatar size="large" shape="circle" :style="avatarStyle">
      {{ name }}
    </po-avatar>
  </po-space>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('Modestofadsfa')

const avatarStyle = {
  color: 'yellow',
  backgroundColor: 'red',
}
</script>

<template>
  <po-avatar size="large" src="https://empty" @error="errorHandler">
    <img
      src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
    />
  </po-avatar>
</template>

<script lang="ts" setup>
const errorHandler = (e) => {
  console.log('e: ', e)
}
</script>

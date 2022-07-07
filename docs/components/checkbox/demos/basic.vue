<template>
  <po-checkbox v-model="checked" label="Option 1" size="large" />
</template>

<script lang="ts" setup>
const checked = ref(false)
watch(checked, (checked) => {
  console.log('checked: watch', checked)
})
</script>

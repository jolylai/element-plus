<template>
  <po-space direction="vertical">
    <po-progress :percentage="50" :indeterminate="true" />
    <po-progress :percentage="100" :format="format" :indeterminate="true" />
    <po-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <po-progress :percentage="50" status="exception" :indeterminate="true" />
  </po-space>
</template>

<script lang="ts" setup>
const format = (percentage: number) =>
  percentage === 100 ? 'Full' : `${percentage}%`
</script>

<template>
  <div :class="[`po-col`, `po-col-${span}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PoCol',
}
</script>

<script lang="ts" setup>
interface ColProps {
  span: number
}

const props = withDefaults(defineProps<ColProps>(), {})
</script>

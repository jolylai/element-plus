<template>
  <div :class="[`po-col`, `po-col-${span}`]" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
export default {
  name: 'PoCol',
}
</script>

<script lang="ts" setup>
interface ColProps {
  span: number
  order?: number
}

const props = withDefaults(defineProps<ColProps>(), {})

const colStyle = computed(() => {
  const style: { order?: string | number } = {}

  if (typeof props.order) style.order = props.order

  return style
})
</script>

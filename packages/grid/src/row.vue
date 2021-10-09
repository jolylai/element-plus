<template>
  <div :class="['po-row', `po-row-${align}`, `po-row-${justify}`]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
export default {
  name: 'PoRow',
}
</script>

<script lang="ts" setup>
interface RowProps {
  gutter?: number | object | []
  align?: 'top' | 'middle' | 'bottom'
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
}

const props = withDefaults(defineProps<RowProps>(), {
  align: 'top',
  justify: 'start',
})

const rowStyle = computed(() => ({
  'justify-content': props.justify,
  'aligh-items': props.align,
}))
</script>

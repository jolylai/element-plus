<template>
  <div :class="classNames">
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="['po-divider-text', `po-divider-${props.position}`]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'

export default {
  name: 'PoDivider',
}
</script>

<script lang="ts" setup>
type DividerDirection = 'horizontal' | 'vertical'

type DividerPosition = 'left' | 'center' | 'right'

interface DividerProps {
  direction?: DividerDirection
  position?: DividerPosition
  dashed?: boolean
}

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  position: 'center',
  dashed: false,
})

const classNames = computed(() => {
  const cls = ['po-divider', `po-divider-${props.direction}`]

  if (props.dashed) {
    cls.push('po-divider-dashed')
  }

  return cls
})
</script>

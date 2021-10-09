<template>
  <div :class="classNames">
    <div v-if="$slots.default" :class="textClassNames">
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

const textClassNames = computed(() => {
  const cls = ['po-divider-text']

  cls.push(`po-divider-${props.position}`)

  return cls
})
</script>

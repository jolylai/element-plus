<template>
  <div :class="[ns.b(), ns.m(direction)]" :style="dividerStyle">
    <div
      v-if="$slots.default && direction === 'horizontal'"
      :class="[ns.e('text'), ns.is(position)]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pomelo-plus/hooks'
import { computed, CSSProperties } from 'vue'

export type DividerDirection = 'horizontal' | 'vertical'

export type DividerPosition = 'left' | 'center' | 'right'

export interface DividerProps {
  direction?: DividerDirection
  position?: DividerPosition
  borderStyle?: CSSStyleDeclaration['borderStyle']
}

defineOptions({
  name: 'PoDivider',
})

const props = withDefaults(defineProps<DividerProps>(), {
  direction: 'horizontal',
  position: 'center',
  dashed: false,
})

const ns = useNamespace('divider')

const dividerStyle = computed(() => {
  return ns.cssVar({
    'border-style': props.borderStyle,
  })
})
</script>

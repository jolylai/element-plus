<template>
  <button :class="[ns.b()]">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'PoButton',
}
</script>

<script lang="ts" setup>
import { withDefaults } from 'vue'
import { useNamespace } from '@pomelo-plus/hooks'

export type ButtonSize = 'small' | 'medium' | 'default' | 'large'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger'

export interface ButtonProps {
  size?: ButtonSize
  type?: ButtonType
}

const props = withDefaults(defineProps<ButtonProps>(), {
  // type: 'primary',
})

const buttonClass = computed(() => {
  const classList = ['po-button']

  if (props.type) {
    classList.push(`po-button-${props.type}`)
  }

  return classList
})

const ns = useNamespace('button')
</script>

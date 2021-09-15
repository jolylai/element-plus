<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'PoButton',
}
</script>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

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
</script>

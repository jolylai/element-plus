<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { PButtonSize} from './button.type'

export default defineComponent({
  name: 'PoButton',
  props: {
    size: { type: String as PropType<PButtonSize>, default: 'default'}
  },
  setup(props) {
    const classNames = [
      'po-button',
      `po-button-${props.size}`
    ]

    return {
      classNames
    }
  },
})
</script>

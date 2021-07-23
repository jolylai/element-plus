<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { PButtonSize, PButtonType} from './button.type'

export default defineComponent({
  name: 'PoButton',
  props: {
    size: { type: String as PropType<PButtonSize>, },
    type: { type: String as PropType<PButtonType>, }
  },
  setup(props) {
    const classNames = [
      'po-button',
      {
        [`po-button-${props.size}`]: !!props.size,
        [`po-button-${props.type}`]: !!props.type,
        },
    ]

    return {
      classNames
    }
  },
})
</script>

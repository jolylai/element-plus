<template>
  <button class="po-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PoButton',
  setup() {},
})
</script>

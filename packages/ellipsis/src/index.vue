<template>
  <span class="el-ellipsis el-ellipsis--line-clamp">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElEllipsis',
  props: { lineClamp: { type: Number } },
  setup() {
    
  },
})
</script>

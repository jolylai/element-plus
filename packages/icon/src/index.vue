<template>
  <i :class="`po-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PoIcon',
  props: {
    name: { type: String },
  },
})
</script>

<template>
  <!-- <el-progress :percentage="percentage" /> -->
  <Readme />
  <br />
  <Demo />
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core'

import Readme from '@/progress/README.md'
import Demo from './demo.vue'

export default defineComponent({
  components: {
    Readme,
    Demo,
  },
  setup() {
    const percentage = ref(50)

    return {
      percentage,
    }
  },
})
</script>

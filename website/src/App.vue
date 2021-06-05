<template>
  <el-progress :percentage="percentage" />
  <Readme />
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core'
import { ElProgress } from 'element-plus'

import Readme from '@/progress/README.md'

export default defineComponent({
  components: { ElProgress, Readme },
  setup() {
    const percentage = ref(50)

    return {
      percentage,
    }
  },
})
</script>

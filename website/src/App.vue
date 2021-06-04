<template>
  <el-progress :percentage="percentage" />
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core'
import { ElProgress } from 'element-plus'

export default defineComponent({
  components: { ElProgress },
  setup() {
    const percentage = ref(50)

    return {
      percentage,
    }
  },
})
</script>

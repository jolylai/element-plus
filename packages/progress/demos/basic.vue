<template>
  <po-progress :percent="30" />
  <po-progress :percent="50" status="active" />
  <po-progress :percent="70" status="exception" />
  <po-progress :percent="100" />
  <po-progress :percent="50" :show-info="false" />
</template>

<script lang="ts">
import { reactive, toRefs, watch } from 'vue'

export default {
  setup() {
    let state = reactive({
      fileList: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    })

    watch(
      () => state.fileList,
      fileList => {
        console.log('fileList: ', fileList)
      },
    )

    const onLogFileList = () => {
      console.log(state.fileList)
    }

    return {
      ...toRefs(state),
      onLogFileList,
    }
  },
}
</script>

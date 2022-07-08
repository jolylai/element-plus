<template>
  <po-upload
    action="https://jsonplaceholder.typicode.com/posts/"
    :file-list="fileList"
  >
    <po-button type="primary">点击上传</po-button>
  </po-upload>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'

export default {
  setup() {
    let state = reactive({
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
          status: 'fail',
        },
      ],
    })

    watch(
      () => state.fileList,
      (fileList) => {
        console.log('fileList: ', fileList)
      }
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

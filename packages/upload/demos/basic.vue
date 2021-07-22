<template>
  <po-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <po-button size="small" type="primary">点击上传</po-button>
    <template v-slot:tip>
      <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </po-upload>
</template>
<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
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
    const self = getCurrentInstance().ctx
    const handleRemove = (file, fileList) => {
      console.log(file, fileList)
    }
    const handlePreview = file => {
      console.log(file)
    }
    const handleExceed = (files, fileList) => {
      self.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`,
      )
    }
    const beforeRemove = (file, fileList) => {
      // return self.$confirm(`确定移除 ${ file.name }？`);
    }

    return {
      ...toRefs(state),
      handleRemove,
      handlePreview,
      handleExceed,
      beforeRemove,
    }
  },
}
</script>

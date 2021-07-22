<template>
  <upload>
    <slot />
  </upload>

  <upload-list :files="files" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Upload from './upload.vue'
import UploadList from './upload-list.vue'

const uploadProps = {}

export default defineComponent({
  name: 'PoUpload',
  props: uploadProps,
  components: { Upload, UploadList },
  setup() {
    const fileRef = ref()

    const files = ref([])

    const onClick = () => {
      fileRef.value.click()
    }

    const onFileChange = e => {
      files.value = e.target.files
    }

    return {
      fileRef,
      onClick,
      onFileChange,
      files,
    }
  },
})
</script>

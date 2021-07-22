<template>
  <div class="po-upload" @click="onClick">
    <input ref="fileRef" style="display: none" type="file" @change="onFileChange" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const uploadProps = {}

export default defineComponent({
  name: 'Upload',
  props: uploadProps,
  setup() {
    const fileRef = ref()

    const onClick = () => {
      fileRef.value.click()
    }

    const onFileChange = e => {
      const files = e.target.files
      console.log('files: ', files)
    }

    return {
      fileRef,
      onClick,
      onFileChange,
    }
  },
})
</script>

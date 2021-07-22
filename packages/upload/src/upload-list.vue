<template>
  <ul class="po-upload-list">
    <li class="po-upload-list-item" v-for="file in files">
      {{ file.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue'

export default defineComponent({
  name: 'UploadList',
  props: {
    files: { type: Array as PropType<File[]>, default: () => [] },
  },
  setup(props) {
    watch(
      () => props.files,
      () => {
        console.log(props.files)
      },
      { immediate: true },
    )
  },
})
</script>

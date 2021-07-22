<template>
  <ul class="po-upload__list">
    <li v-for="file in files">
      {{ file }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType, watch } from 'vue'

export default defineComponent({
  name: 'UploadList',
  props: {
    files: { type: Array as PropType<File[]> },
  },
  setup(props) {
    watch(
      () => props.files,
      () => {
        console.log(props.files)
      },
    )
  },
})
</script>

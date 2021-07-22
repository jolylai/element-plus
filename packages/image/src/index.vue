<template>
  <div class="po-image">
    <img class="po-image-inner" :src="src" :style="{ objectFit: fit }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const imageProps = {
  src: String,
  fit: String,
}

export default defineComponent({
  name: 'PoImage',
  props: imageProps,
  setup() {},
})
</script>

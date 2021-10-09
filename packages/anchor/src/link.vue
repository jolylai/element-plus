<template>
  <a :class="classNames" :href="href">{{ title }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PoAnchorLink',
  props: {
    href: { type: String },
    title: { type: String },
  },
  setup(props, { slots }) {
    return () => {
      return
    }
  },
})
</script>

<script lang="ts" setup>
// const props = defineProps({
//   href: { type: String },
//   title: { type: String },
// })

// const classNames = computed(() => {
//   const hash = location.hash
//   console.log('hash: ', hash)

//   const cls = [' po-anchor-link']

//   if (hash === props.href) cls.push(' po-anchor-link-active')

//   return cls
// })

//
</script>

<template>
  <a class="po-anchor-link po-anchor-link-active" :href="href">{{ title }}</a>
</template>

<script lang="ts">
export default {
  name: 'PoAnchorLink',
}
</script>

<script lang="ts" setup>
defineProps({
  href: { type: String },
  title: { type: String },
})
</script>

<template>
  <ul class="po-cascader-menu">
    <po-cascader-node v-for="node in nodes" :node="node"></po-cascader-node>
  </ul>
</template>

<script lang="ts">
export default {
  name: 'PoCascaderMenu',
}
</script>

<script lang="ts" setup>
import type { default as CascaderOption } from './node'
import PoCascaderNode from './node.vue'

interface CascaderMenuProps {
  nodes: CascaderOption[]
}

const props = defineProps<CascaderMenuProps>()
console.log('props: menu', props);
</script>

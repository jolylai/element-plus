<template>
  <li @click="onClick">{{ node.label }}</li>
</template>

<script lang="ts">
import { inject, PropType } from 'vue'

export default {
  name: 'PoCascaderNode',
}
</script>

<script lang="ts" setup>
import { default as CascaderNode } from './node'
import { CASCADER_PANEL_INJECTION_KEY } from './types';

const props = defineProps({
  node: { type: Object as PropType<CascaderNode> },
})
console.log('props: node', props)

const panel = inject(CASCADER_PANEL_INJECTION_KEY)

const onClick = () => {
  panel.expandNode(props.node)
}
</script>

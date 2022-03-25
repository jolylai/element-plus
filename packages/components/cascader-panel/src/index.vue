<template>
  <div>
    <po-cascader-menu v-for="(menu, index) in menus" :key="index" :nodes="menu"></po-cascader-menu>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PoCascader',
}
</script>

<script lang="ts" setup>
import { provide, reactive, ref } from 'vue'

import { DefaultProps } from './config'
import type { CascaderOption, default as CascaderNode } from './node'
import PoCascaderMenu from './menu.vue'
import Store from './store';
import { CASCADER_PANEL_INJECTION_KEY, ElCascaderPanelContext } from './types';

interface CascaderProps {
  options: CascaderOption[]
}

const props = withDefaults(defineProps<CascaderProps>(), {})

const menus = ref<CascaderNode[][]>([])

let store: Nullable<Store> = null

const initStore = () => {
  try {
    store = new Store(props.options, DefaultProps)
    console.log('store: ', store);
    menus.value = [store.getNodes()]
  } catch (error) {
    console.log('error: ', error);

  }
}

const expandNode: ElCascaderPanelContext['expandNode'] = (node, silent) => {
  console.log('node: ', node, silent);
  const { level } = node
  const newMenus = menus.value.slice(0, level)
  console.log('newMenus: ', newMenus);
  newMenus.push(node.children)
  menus.value = newMenus
  console.log('menus.value: ', menus.value);
}

provide(CASCADER_PANEL_INJECTION_KEY, reactive({
  expandNode
}))

initStore()
console.log(props)
</script>

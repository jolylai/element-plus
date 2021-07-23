<template>
  <n-layout-sider ref="sider" bordered>
    <n-menu :options="options" :render-label="renderMenuLabel" :value="menuValue" />
  </n-layout-sider>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { docsMenu, componentsMenu } from '../config'

import { renderMenuLabel, findMenuValue } from '../utils/menu'

export default defineComponent({
  setup() {
    const route = useRoute()

    const options = computed(() => {
      return route.path.includes('/docs/') ? docsMenu : componentsMenu
    })

    const menuValue = computed(() => {
      return findMenuValue(options.value, route.path)
    })

    return {
      menuValue,
      options,
      renderMenuLabel,
    }
  },
})
</script>

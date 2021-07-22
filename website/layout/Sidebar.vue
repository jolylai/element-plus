<template>
  <n-layout-sider ref="sider" bordered>
    <n-menu :options="options" :render-label="renderMenuLabel" :value="menuValue" />
  </n-layout-sider>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { sidebarOptions } from '../config/sidebar'
import { renderMenuLabel, findMenuValue } from '../utils/menu'

export default defineComponent({
  setup() {
    const route = useRoute()

    const menuValue = computed(() => {
      console.log('findMenuValue(sidebarOptions, route.path): ', findMenuValue(sidebarOptions, route.path))
      console.log('route.path: ', route.path)
      console.log('sidebarOptions: ', sidebarOptions)
      return findMenuValue(sidebarOptions, route.path)
    })

    return {
      menuValue,
      options: sidebarOptions,
      renderMenuLabel,
    }
  },
})
</script>

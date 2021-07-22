<template>
  <n-layout-sider ref="sider" bordered>
    <n-menu :options="options" :render-label="renderMenuLabel" />
  </n-layout-sider>
</template>

<script>
import { defineComponent } from 'vue'

import { sidebarOptions } from '../config/sidebar'
import { renderMenuLabel } from '../utils/menu'

export default defineComponent({
  setup() {
    return {
      options: sidebarOptions,
      renderMenuLabel,
    }
  },
})
</script>

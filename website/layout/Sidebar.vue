<template>
  <n-layout-sider ref="sider" bordered content-style="padding: 24px;">
    <n-menu :options="options" default-value="1" />
  </n-layout-sider>
</template>

<script>
import { defineComponent, h } from 'vue'
import { NEllipsis } from 'naive-ui'

export default defineComponent({
  setup() {
    return {
      options: [
        {
          type: 'group',
          label: '通用组件',
          key: 'people',
          children: [{ label: 'button', key: '1' }],
        },
      ],
    }
  },
})
</script>

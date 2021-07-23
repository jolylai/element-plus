<template>
  <n-layout-header bordered class="nav" :style="style">
    <n-text tag="div" class="ui-logo" :depth="1">
      <!-- <img src="../assets/images/naivelogo.svg" /> -->
      <span>Pomelo UI</span>
    </n-text>

    <div>
      <div class="nav-menu">
        <n-menu mode="horizontal" :value="menuValue" :options="menuOptions" :render-label="renderMenuLabel" />
      </div>
    </div>
  </n-layout-header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { renderMenuLabel } from '../utils/menu'

export default defineComponent({
  setup() {
    const route = useRoute()
    // menu
    const menuOptions = computed(() => {
      return [
        {
          key: 'home',
          label: '首页',
          path: '/home',
        },
        {
          key: 'doc',
          label: '文档',
          path: '/docs/theme',
        },
        {
          key: 'component',
          label: '组件',
          path: '/components/button',
        },
      ]
    })

    const menuValue = computed(() => {
      if (/\/docs\//.test(route.path)) return 'doc'
      if (/\/components\//.test(route.path)) return 'component'
      else if (route.name === 'home') return 'home'
      return null
    })

    return {
      menuOptions,
      menuValue,
      style: {
        '--side-padding': '32px',
        'grid-template-columns': 'calc(272px - var(--side-padding)) 1fr auto',
      },
      renderMenuLabel,
    }
  },
})
</script>

<style scoped>
.nav {
  display: grid;
  grid-template-rows: calc(var(--header-height) - 1px);
  align-items: center;
  padding: 8px 16px;
}

.ui-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.ui-logo > img {
  margin-right: 12px;
  height: 32px;
  width: 32px;
}

.nav-menu {
  padding-left: 36px;
}

.nav-picker {
  margin-right: 24px;
}

.nav-picker:last-child {
  margin-right: 0;
}

.nav-end {
  display: flex;
  align-items: center;
}
.nav-menu .n-menu-item {
  height: 63px !important;
}
</style>

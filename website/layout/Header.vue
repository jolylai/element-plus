<template>
  <n-layout-header bordered class="nav" :style="style">
    <n-text tag="div" class="ui-logo" :depth="1">
      <img src="../assets/images/naivelogo.svg" />
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

export default defineComponent({
  setup() {
    // menu
    const menuOptions = computed(() => {
      return [
        {
          key: 'home',
          label: 'home',
          // path: themeAndLocaleReg.exec(route.path)[0]
        },
        {
          key: 'doc',
          label: 'doc',
          // path: themeAndLocaleReg.exec(route.path)[0] + '/docs/introduction'
        },
        {
          key: 'component',
          label: 'component',
          // path: themeAndLocaleReg.exec(route.path)[0] + '/components/button'
        },
      ]
    })

    return {
      menuOptions,
      style: {
        '--side-padding': '32px',
        'grid-template-columns': 'calc(272px - var(--side-padding)) 1fr auto',
      },
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
</style>

<style>
.nav-menu .n-menu-item {
  height: calc(var(--header-height) - 1px) !important;
}
</style>

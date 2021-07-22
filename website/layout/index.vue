<template>
  <n-layout style="height: 100vh;">
    <Header />
    <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px;">
      <sidebar />
      <n-layout-content ref="content" content-style="padding: 24px;" :native-scrollbar="false">
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default defineComponent({
  components: { Sidebar, Header },
  setup() {},
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <el-scrollbar height="400px">
    <p class="item" v-for="item in 20">{{ item }}</p>
  </el-scrollbar>
</template>

<script setup>
// import Popper from '../../packages/popper/index'
import ElScrollbar from '../../packages/scrollbar/index'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

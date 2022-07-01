<template>
  <div>index</div>

  <ul>
    <li v-for="route in constantRoutes">
      <router-link :to="route.path">
        {{ route.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { constantRoutes } from '../routes'
console.log('router: ', constantRoutes)
</script>

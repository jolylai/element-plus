<template>
  <po-space>
    <po-badge :value="value">
      <a href="#" class="head-example" />
    </po-badge>

    <po-badge :value="value" show-zero>
      <a href="#" class="head-example" />
    </po-badge>

    <div>
      <po-button @click="inc">+</po-button>
      <po-button @click="desc">-</po-button>
    </div>
  </po-space>
</template>

<script lang="ts" setup>
const value = ref(101)

const inc = () => {
  value.value += 1
}

const desc = () => {
  value.value -= 1
}
</script>

<style scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
</style>

<template>
  <po-space>
    <po-badge :value="5">
      <a href="#" class="head-example" />
    </po-badge>

    <po-badge :value="0" show-zero>
      <a href="#" class="head-example" />
    </po-badge>
  </po-space>
</template>

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

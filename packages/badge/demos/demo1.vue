<template>
  <po-space>
    <po-badge count="5">
      <a href="#" class="head-example" />
    </po-badge>

    <po-badge count="0" show-zero>
      <a href="#" class="head-example" />
    </po-badge>

    <!-- <po-badge>
      <template #count>
        <clock-circle-outlined style="color: #f5222d" />
      </template>
      <a href="#" class="head-example"></a>
    </po-badge> -->
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

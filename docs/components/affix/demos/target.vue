<template>
  <div class="affix-target">
    <po-affix :offset="200" target=".affix-target">
      <po-button>距离顶部 200px</po-button>
    </po-affix>
  </div>
</template>

<style scoped>
.affix-target {
  height: 100px;
}
</style>

<template>
  <div class="demo-block">
    <div class="demo-preview">
      <slot name="source"></slot>
    </div>
    <div class="demo-description">
      <slot></slot>
    </div>
    <div class="demo-source">
      <slot name="highlight"></slot>
    </div>
  </div>
</template>

<style lang="css" scoped>
.demo-block {
  border: 1px solid #ebedf1;
  border-radius: 1px;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
}

.demo-preview,
/* .demo-description, */
.demo-source {
  padding: 16px;
}

.demo-description {
  color: #454d64;
  font-size: 15px;
  line-height: 1.60625;
}

p {
  margin: 0 !important;
}
</style>

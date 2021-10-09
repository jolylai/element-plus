<template>
  <po-row>
    <po-col :span="12">col-12</po-col>
    <po-col :span="12">col-12</po-col>
  </po-row>
  <po-row>
    <po-col :span="8">col-8</po-col>
    <po-col :span="8">col-8</po-col>
    <po-col :span="8">col-8</po-col>
  </po-row>
  <po-row>
    <po-col :span="6">col-6</po-col>
    <po-col :span="6">col-6</po-col>
    <po-col :span="6">col-6</po-col>
    <po-col :span="6">col-6</po-col>
  </po-row>
</template>

<style scoped>
.po-row .po-col {
  padding: 16px 0;
  text-align: center;
  color: #fff;
  margin: 8px 0;
}
.po-row .po-col:nth-child(2n) {
  background: #0092ff;
}
.po-row .po-col:nth-child(2n-1) {
  background: rgba(0, 146, 255, 0.75);
}
</style>

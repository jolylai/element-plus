<template>
  <po-row type="flex">
    <po-col :span="6" :order="4">1 col-order-4</po-col>
    <po-col :span="6" :order="3">2 col-order-3</po-col>
    <po-col :span="6" :order="2">3 col-order-2</po-col>
    <po-col :span="6" :order="1">4 col-order-1</po-col>
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

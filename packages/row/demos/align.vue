<template>
  <p>Align Top</p>
  <po-row type="flex" justify="center" align="top">
    <po-col :span="4">
      <p class="height-100">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-50">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-120">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-80">col-4</p>
    </po-col>
  </po-row>

  <p>Align Center</p>
  <po-row type="flex" justify="space-around" align="middle">
    <po-col :span="4">
      <p class="height-100">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-50">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-120">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-80">col-4</p>
    </po-col>
  </po-row>

  <p>Align Bottom</p>
  <po-row type="flex" justify="space-between" align="bottom">
    <po-col :span="4">
      <p class="height-100">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-50">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-120">col-4</p>
    </po-col>
    <po-col :span="4">
      <p class="height-80">col-4</p>
    </po-col>
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
  height: 120px;
}
.po-row .po-col:nth-child(2n-1) {
  height: 80px;
  background: rgba(0, 146, 255, 0.75);
}
</style>

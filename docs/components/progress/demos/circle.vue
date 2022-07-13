<template>
  <po-space>
    <po-progress type="circle" :percentage="75" />
    <po-progress type="circle" :percentage="100" />
    <po-progress type="circle" :percentage="70" status="success" />
    <po-progress type="circle" :percentage="70" status="exception" />
  </po-space>
</template>

<template>
  <po-progress :percentage="30" />
  <po-progress :percentage="50" status="active" />
  <po-progress :percentage="70" status="exception" />
  <po-progress :percentage="100" status="success" />
  <po-progress :percentage="50" :show-info="false" />
</template>

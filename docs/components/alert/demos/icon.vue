<template>
  <po-space direction="vertical">
    <po-alert :show-icon="true" type="success"> success alert </po-alert>
    <po-alert :show-icon="true" type="info"> info alert </po-alert>
    <po-alert :show-icon="true" type="warning"> warning alert </po-alert>
    <po-alert :show-icon="true" type="error"> error alert </po-alert>

    <po-alert :show-icon="true" title="Default 类型" type="success">
      Gee it's good to be back home
    </po-alert>
    <po-alert :show-icon="true" title="Default 类型" type="info">
      Gee it's good to be back home
    </po-alert>
    <po-alert :show-icon="true" title="Default 类型" type="warning">
      Gee it's good to be back home
    </po-alert>
    <po-alert :show-icon="true" title="Default 类型" type="error">
      Gee it's good to be back home
    </po-alert>
  </po-space>
</template>

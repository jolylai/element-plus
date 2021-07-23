# 上传 Upload

## 基础

<code src='./demos/basic.vue' />

## UploadFile

继承自 File，附带额外属性用于渲染。

| 参数    | 说明                                   | 类型   | 默认值 |
| ------- | -------------------------------------- | ------ | ------ |
| name    | 文件名                                 | string | -      |
| percent | 上传进度                               | number | -      |
| status  | 上传状态，不同状态展示颜色也会有所不同 |        | -      |
| uid     | 唯一标识符，不设置时会自动生成         | string | -      |
| url     | 下载地址                               | string | -      |

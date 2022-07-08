# 上传 Upload

文件选择上传和拖拽上传控件。

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 基础用法

<demo src='./demos/basic.vue' />

## UploadFile

```ts
export type UploadStatus = 'ready' | 'success' | 'uploading' | 'fail'

export interface UploadRawFile extends File {
  uid: number
}

export type UploadFile = {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}
```

继承自 File，附带额外属性用于渲染。

| 参数    | 说明                                   | 类型   | 默认值 |
| ------- | -------------------------------------- | ------ | ------ |
| name    | 文件名                                 | string | -      |
| percent | 上传进度                               | number | -      |
| status  | 上传状态，不同状态展示颜色也会有所不同 |        | -      |
| uid     | 唯一标识符，不设置时会自动生成         | string | -      |
| url     | 下载地址                               | string | -      |

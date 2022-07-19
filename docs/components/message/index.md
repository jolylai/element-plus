# 信息 Message

## 基础使用

<demo src="./demos/basic.vue" />

```vue
<template>
  <el-button :plain="true" @click="open">Show message</el-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const open = () => {
  ElMessage('this is a message.')
}
</script>
```

## 渲染

## 自动关闭

## 消息列队

# 固钉 Affix

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 基础使用

固钉默认固定在页面顶部。

<demo src='./demos/basic.vue' />

## 滚动容器

<demo src="./demos/scroll.vue" />

## 状态回调

<demo src="./demos/state.vue" />

## 指定容器

通过设置 target 属性，让固钉始终保持在容器内，超过范围则隐藏。

<demo src="./demos/target.vue" />

### Attributes

| 参数     | 说明                   | 类型   | 可选值       | 默认值 |
| -------- | ---------------------- | ------ | ------------ | ------ |
| offset   | 偏移距离               | number | —            | 0      |
| position | 固钉位置               | string | top / bottom | top    |
| target   | 指定容器（CSS 选择器） | string | —            | —      |
| z-index  | 固钉层级               | number | —            | 100    |

### Events

| 事件名称 | 说明                     | 回调参数           |
| -------- | ------------------------ | ------------------ |
| change   | 固钉状态改变时触发的事件 | (value: boolean)   |
| scroll   | 滚动时触发的事件         | 滚动距离和固钉状态 |

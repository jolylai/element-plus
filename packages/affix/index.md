# 固钉 Affix

## Tasking

- [ ] 事件

1. 获取滚动容器
2. 获取元素相对窗口的位置

## 基础使用

<code src='./demos/basic.vue' />

## 指定容器

通过设置 target 属性，让固钉始终保持在容器内，超过范围则隐藏。

边界条件

固钉条件

```js
const fixed = props.offset > rootRect.top && targetRect.bottom > 0
```

偏移

```js
const difference = targetRect.bottom - props.offset - state.height
```

<code src="./demos/target.vue" />

## 距离底部

<code src='./demos/bottom.vue' />

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

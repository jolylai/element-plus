# 文本省略 Ellipsis

## 单行文本省略

单行文本省略需要满足以下条件

```css
.ellipsis {
  /* 文本不换行 */
  white-space: nowrap;
  /* 溢出隐藏 */
  overflow: hidden;
  /* 指定最大宽度 */
  max-width: 260px;
  /* 文本溢出省略 */
  text-overflow: ellipsis;
  /* 元素为块级元素 */
  display: inline-block;
}
```

## 单行文本省略

基于 `-webkit-line-clamp` 的多行省略。

```css
.ellipsis-line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

## 演示

```demo
basic
line-clamp
```

## Props

| 名称           | 类型                      | 默认值      | 说明           | 版本  |
| -------------- | ------------------------- | ----------- | -------------- | ----- |
| expand-trigger | `'click'`                 | `undefined` |                | 2.1.0 |
| line-clamp     | `number \| string`        | `undefined` | 最大行数       | 2.1.0 |
| tooltip        | `boolean \| TooltipProps` | `true`      | Tooltip 的属性 | 2.1.0 |

## Slots

| 名称    | 参数 | 说明 |
| ------- | ---- | ---- |
| default | `()` |      |
| tooltip | `()` |      |

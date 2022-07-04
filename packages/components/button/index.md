# 按钮 Button

按钮用来触发一些操作。

## 基础

<demo src='./demos/basic.vue' />

按钮样式的变化： 默认显示 -> 鼠标移入 -> 鼠标点击 -> 按钮聚焦

```scss
button {
  &:hover,
  &:focus {
    color: $--color-primary;
    border-color: $--color-primary-light-7;
    background-color: $--color-primary-light-9;
  }

  &:active {
    color: mix(
      $--color-black,
      $--color-primary,
      $--button-active-shade-percent
    );
    border-color: mix(
      $--color-black,
      $--color-primary,
      $--button-active-shade-percent
    );
    outline: none;
  }
}
```

## 按钮类型

按钮的 type 分别为 default、primary、info、success、warning 和 error。

<demo src='./demos/type.vue' />

## 大小

有 tiny、small、medium 和 large 尺寸。

<demo src='./demos/size.vue' />

修改按钮的大小，其实就是修改按钮的 padding font-size 和 border-radius

```scss
@mixin button-size(
  $padding-vertical,
  $padding-horizontal,
  $font-size,
  $border-radius
) {
  padding: $padding-vertical $padding-horizontal;
  font-size: $font-size;
  border-radius: $border-radius;
}
```

### Button Props

| 名称           | 类型                                                                    | 默认值      | 说明                                                |
| -------------- | ----------------------------------------------------------------------- | ----------- | --------------------------------------------------- |
| attr-type      | `'button' \| 'submit' \| 'reset'`                                       | `'button'`  | 按钮的 DOM `type` 属性                              |
| block          | `boolean`                                                               | `false`     | 按钮是否显示为块级                                  |
| bordered       | `boolean`                                                               | `true`      | 按钮是否显示 border                                 |
| circle         | `boolean`                                                               | `false`     | 按钮是否为圆形                                      |
| color          | `string`                                                                | `undefined` | 只支持形如 `#FFF`, `#FFFFFF`, `rgb(0, 0, 0)` 的颜色 |
| dashed         | `boolean`                                                               | `false`     | 按钮 border 是否为虚线                              |
| disabled       | `boolean`                                                               | `false`     | 按钮是否禁用                                        |
| ghost          | `boolean`                                                               | `false`     | 按钮是否透明                                        |
| icon-placement | `'left' \| 'right'`                                                     | `'left'`    | 按钮中 icon 的位置                                  |
| keyboard       | `boolean`                                                               | `true`      | 是否支持键盘操作                                    |
| loading        | `boolean`                                                               | `false`     | 按钮是否显示加载状态                                |
| round          | `boolean`                                                               | `false`     | 按钮是否显示圆角                                    |
| size           | `'tiny' \| 'small' \| 'medium' \| 'large'`                              | `'medium'`  | 按钮的尺寸                                          |
| text           | `boolean`                                                               | `false`     | 是否显示为文本按钮                                  |
| type           | `'default' \| 'primary' \| 'success' \| 'info' \| 'warning' \| 'error'` | `'default'` | 按钮的类型                                          |
| tag            | `string`                                                                | `'button'`  | 按钮需要被渲染为什么标签                            |

### Button Group Props

| 名称     | 类型                                       | 默认值      | 说明                                                 |
| -------- | ------------------------------------------ | ----------- | ---------------------------------------------------- |
| size     | `'tiny' \| 'small' \| 'medium' \| 'large'` | `undefined` | 在组内的按钮的尺寸。如果设定，内部的按钮尺寸将不生效 |
| vertical | `boolean`                                  | `false`     | 组内按钮的排列方式                                   |

### Button Slots

| 名称    | 参数 | 说明                 |
| ------- | ---- | -------------------- |
| default | `()` | 按钮的内容           |
| icon    | `()` | 按钮中 icon 填充内容 |

### Button Group Slots

| 名称    | 参数 | 说明         |
| ------- | ---- | ------------ |
| default | `()` | 按钮组的内容 |

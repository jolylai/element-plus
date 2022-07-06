# 按钮 Button

按钮用来触发一些操作。

## 基础使用

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

不同类型的按钮其实也就是对 background-color border-color color 的修改

## 按钮大小

有 small、default 和 large 尺寸。

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

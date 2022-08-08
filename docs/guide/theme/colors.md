# 色彩

## 品牌色

```scss
$color-primary: () !default;
$color-primary: map.deep-merge(
  (
    '': #1890ff,
    'hover': #40a9ff,
    'active': #096dd9,
    'outline': rgba(24, 144, 255, 0.2),
  ),
  $color-primary
);
```

## 功能色

功能色代表了明确的信息以及状态，比如成功、出错、失败、提醒、链接等。功能色的选取需要遵守用户对色彩的基本认知。

```scss
$color-success: () !default;
$color-success: map.deep-merge(
  (
    '': #67c23a,
    'hover': #73d13d,
    'active': #389e0d,
    'outline': rgba(82, 196, 26, 0.2),
    'bg': #f6ffed,
    'border': #b7eb8f,
  ),
  $color-success
);
```

```scss
$color-info: () !default;
$color-info: map.deep-merge(
  (
    '': #1890ff,
    'bg': #e6f7ff,
    'border': #91d5ff,
  ),
  $color-info
);
```

```scss
$color-warning: () !default;
$color-warning: map.deep-merge(
  (
    '': #faad14,
    'hover': #ffc53d,
    'active': #d48806,
    'outline': rgba(250, 173, 20, 0.2),
    'bg': #fffbe6,
    'border': #ffe58f,
  ),
  $color-warning
);
```

```scss
$color-error: () !default;
$color-error: map.deep-merge(
  (
    '': #ff4d4f,
    'hover': #ff7875,
    'active': #d9363e,
    'outline': rgba(255, 77, 79, 0.2),
    'bg': #fff2f0,
    'border': #ffccc7,
  ),
  $color-error
);
```

## 中性色

中性色包含了黑、白、灰，被大量的应用在界面的文字部分，此外背景、边框、分割线等场景中也非常常见。合理地选择中性色能够令页面信息具备良好的主次关系，助力阅读体验。

![colors](https://gw.alipayobjects.com/zos/antfincdn/8yMmB1lcD%24/colors.jpg)

#### 文字

```scss
$text-color: () !default;
$text-color: map.merge(
  (
    '': #d9d9d9,
    'secondary': #e4e7ed,
    'lighter': #ebeef5,
    'inverse': #f2f6fc,
    'dark': #d4d7de,
    'dark-secondary': #cdd0d6,
  ),
  $text-color
);
```

#### 边框

```scss
// Border
$border-color: () !default;
$border-color: map.merge(
  (
    '': #d9d9d9,
    'light': #e4e7ed,
    'lighter': #ebeef5,
    'extra-light': #f2f6fc,
    'dark': #d4d7de,
    'darker': #cdd0d6,
  ),
  $border-color
);
```

# 全局化配置 Config Provider

## 国际化

| 参数   | 说明           | 类型                                 | 可选值 | 默认值  |
| ------ | -------------- | ------------------------------------ | ------ | ------- |
| locale | 翻译文本对象   | Object\<Language\>                   | -      | English |
| i18n   | 外部的翻译方法 | Function\<(...args: []) =\> string\> | -      | -       |

```js
export default {
  name: 'zh-cn',
  el: {
    colorpicker: {
      confirm: '确定',
      clear: '清空',
    },
  },
}
```

<demo src='./demos/locale.vue' />

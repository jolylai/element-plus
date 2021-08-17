# 信息 Message

## Tasking

- [ ] 动画
- [ ] Icon

## render

将虚拟节点渲染到 dom 上

```js
const vnode = h('div', { id: 'message' })

const container = document.createElement('div')
container.className = `container`

const vm = render(vnode, container)

document.body.appendChild(container.firstElementChild)
```

删除节点

```js
render(null, container)
```

## 基础使用

<code src="./demos/basic.vue" />

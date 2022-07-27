# 信息 Message

## 基础使用

<demo src="./demos/basic.vue" />

也可以对象的形式传递参数：

- message.open(config)
- message.success(config)
- message.error(config)
- message.info(config)
- message.warning(config)
- message.warn(config) // alias of warning
- message.loading(config)

组件提供了一些静态方法，使用方式和参数如下：

- message.success(content, [duration], onClose)
- message.error(content, [duration], onClose)
- message.info(content, [duration], onClose)
- message.warning(content, [duration], onClose)
- message.warn(content, [duration], onClose) // alias of warning
- message.loading(content, [duration], onClose)

## 渲染

```vue
<template>
  <div :id="id" :class="[ns.b()]">
    <i :class="[ns.e('icon')]">
      <component :is="iconComponent" />
    </i>
    <span :class="[ns.e('content')]">
      <slot></slot>
    </span>
  </div>
</template>
```

## 自动关闭

## 实例

```ts
export type MessageContext = {
  id: string
  vnode: VNode
  handler: MessageHandler
  vm: MessageInstance
  props: Mutable<MessageProps>
}
```

```ts
export declare interface VNode<
  HostNode = RendererNode,
  HostElement = RendererElement,
  ExtraProps = {
    [key: string]: any
  }
> {
  /* Excluded from this release type: __v_isVNode */
  /* Excluded from this release type: __v_skip */
  type: VNodeTypes
  props: (VNodeProps & ExtraProps) | null
  key: string | number | symbol | null
  ref: VNodeNormalizedRef | null
  /**
   * SFC only. This is assigned on vnode creation using currentScopeId
   * which is set alongside currentRenderingInstance.
   */
  scopeId: string | null
  /* Excluded from this release type: slotScopeIds */
  children: VNodeNormalizedChildren
  component: ComponentInternalInstance | null
  dirs: DirectiveBinding[] | null
  transition: TransitionHooks<HostElement> | null
  el: HostNode | null
  anchor: HostNode | null
  target: HostElement | null
  targetAnchor: HostNode | null
  /* Excluded from this release type: staticCount */
  suspense: SuspenseBoundary | null
  /* Excluded from this release type: ssContent */
  /* Excluded from this release type: ssFallback */
  shapeFlag: number
  patchFlag: number
  /* Excluded from this release type: dynamicProps */
  /* Excluded from this release type: dynamicChildren */
  appContext: AppContext | null
  /* Excluded from this release type: memo */
  /* Excluded from this release type: isCompatRoot */
  /* Excluded from this release type: ce */
}
```

## 消息列队

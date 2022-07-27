# 信息 Message

## 基础使用

<demo src="./demos/basic.vue" />

## 渲染

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

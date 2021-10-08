## cloneVNode

## Tasking

- [ ] 键盘可访问性
- [ ] useKeyCode
- [ ] Teleport

## 基础使用

```js
import { createPopper } from '@popperjs/core'
const popcorn = document.querySelector('#popcorn')
const tooltip = document.querySelector('#tooltip')
createPopper(popcorn, tooltip, {
  placement: 'right',
})
```

props

```ts
export type IPopperOptions = {
  arrowOffset: number
  autoClose: number
  boundariesPadding: number
  class: string
  cutoff: boolean
  disabled: boolean
  enterable: boolean
  hideAfter: number
  manualMode: boolean
  offset: number
  placement: Placement
  popperOptions: Partial<Options>
  showAfter: number
  showArrow: boolean
  strategy: PositioningStrategy
  trigger: Trigger
  visible: boolean
  stopPopperMouseEvent: boolean
  gpuAcceleration: boolean
  fallbackPlacements: Array<Placement>
}
```

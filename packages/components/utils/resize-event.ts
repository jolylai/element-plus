export type ResizableElement = CustomizedHTMLElement<{
  __resizeListeners__: Array<(...args: unknown[]) => unknown>
  __ro__: ResizeObserver
}>

const resizeHandler = (entries: ResizeObserverEntry[]) => {
  for (const entry of entries) {
    console.log('entry: ', entry)
    const listeners = (entry.target as ResizableElement).__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach(fn => {
        fn()
      })
    }
  }
}

export const addResizeListener = (el: ResizableElement, fn: (...args: unknown[]) => unknown) => {
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = []
    el.__ro__ = new ResizeObserver(resizeHandler)
    el.__ro__.observe(el)
  }
  el.__resizeListeners__.push(fn)
}

export const removeResizeListener = (el: ResizableElement, fn: (...args: unknown[]) => unknown) => {
  if (!el || !el.__resizeListeners__) return

  const fnIndex = el.__resizeListeners__.indexOf(fn)

  el.__resizeListeners__.splice(fnIndex, 1)
  if (!el.__resizeListeners__.length) {
    el.__ro__.disconnect()
  }
}

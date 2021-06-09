import { camelize } from './util'

export const on = (
  el: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false,
): void => {
  if (el && event && handler) {
    el.addEventListener(event, handler, useCapture)
  }
}

export const off = (
  el: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false,
): void => {
  if (el && event && handler) {
    el.removeEventListener(event, handler, useCapture)
  }
}

export const isScroll = (el: HTMLElement, isVertical?: boolean) => {
  const determinedDirection = isVertical === null || isVertical === undefined

  const overflow = determinedDirection
    ? getStyle(el, 'overflow')
    : isVertical
    ? getStyle(el, 'overflow-y')
    : getStyle(el, 'overflow-x')

  return overflow.match(/(scroll|auto)/)
}

export const getStyle = (el: HTMLElement, styleName: string): string => {
  if (!el || !styleName) return null
  styleName = camelize(styleName)

  try {
    const style = el.style[styleName]
    if (style) return style
    const computed = document.defaultView.getComputedStyle(el, '')
    return computed ? computed[styleName] : ''
  } catch (e) {
    return el.style[styleName]
  }
}

//  获取最近的滚动父元素
export const getScrollContainer = (el: HTMLElement, isVertical?: boolean): Window | HTMLElement => {
  let parent: HTMLElement = el

  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }

    if (isScroll(parent, isVertical)) {
      return parent
    }

    parent = parent.parentNode as HTMLElement
  }

  return parent
}

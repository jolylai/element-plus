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
export const getScrollContainer = (
  el: HTMLElement,
  isVertical?: boolean,
): Window | HTMLElement => {
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

export const hasClass = (el: HTMLElement, cls: string) => {
  if (!el || !cls) return false
  cls = cls.trim()
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return ` ${el.className} `.indexOf(` ${cls} `) > -1
  }
}

export const addClass = (el: HTMLElement, cls: string = ''): void => {
  if (!el) return
  let curClass = el.className

  const classes = cls.split(' ')
  for (let i = 0; i < classes.length; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += clsName
    }
  }

  if (!el.classList) {
    el.className = curClass
  }
}

const trim = function(s: string) {
  return (s || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export function removeClass(el: HTMLElement, cls: string): void {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

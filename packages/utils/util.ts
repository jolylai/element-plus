import { isArray, extend, isString, camelize, toRawType } from '@vue/shared'
import type { Ref } from 'vue'

export function isNumber(value: unknown): value is Number {
  return typeof value === 'number'
}

export function toObject<T>(arr: Array<T>): Record<string, T> {
  let res = {}

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }

  return res
}

export function addUnit(value: string | number) {
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return value + 'px'
  }

  return ''
}

export function $<T>(ref: Ref<T>) {
  return ref.value
}

export function isHTMLElement(val: unknown): boolean {
  return toRawType(val).startsWith('HTML')
}

export { isArray, isString, camelize }

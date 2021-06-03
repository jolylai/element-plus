import { isArray, extend, isString } from '@vue/shared'

export function isNumber(value: unknown) {
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

export { isArray, isString }

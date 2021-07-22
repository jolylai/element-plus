import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const renderMenuLabel = option => {
  if (!('path' in option)) {
    return option.label
  }
  return h(
    RouterLink,
    {
      to: option.path,
    },
    { default: () => option.label },
  )
}

export function createItems(prefix = '', items) {
  return items.map(rawItem => {
    const item = {
      ...rawItem,
      key: rawItem.label,
      label: rawItem.zh,
      extra: rawItem.enSuffix ? rawItem.en : undefined,
      path: rawItem.path ? prefix + rawItem.path : undefined,
    }
    if (rawItem.children) {
      item.children = createItems(prefix, rawItem.children)
    }
    return item
  })
}

export const appendCounts = item => {
  if (!item.children) {
    item.count = 1
    return item
  }
  if (item.children) {
    item.children.forEach(appendCounts)
    item.count = item.children.reduce((sum, item) => sum + item.count, 0)
    if (item.type === 'group') {
      item.label += ` (${item.count})`
    }
    return item
  }
}

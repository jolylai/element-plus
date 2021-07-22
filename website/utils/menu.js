import { h } from 'vue'
import { RouterLink } from 'vue-router'

export const renderMenuLabel = option => {
  if (!('path' in option) || option.label === '--Debug') {
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

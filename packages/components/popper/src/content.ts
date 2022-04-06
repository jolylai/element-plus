import { buildProps, definePropType } from '@pomelo-plus/utils'

export const usePopperContentProps = buildProps({
  referenceEl: {
    type: definePropType<HTMLElement>(Object)
  },
  content: {
    type: definePropType(String)
  }
})

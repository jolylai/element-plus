import { buildProps, definePropType } from '@/utils'

export const usePopperContentProps = buildProps({
  referenceEl: {
    type: definePropType<HTMLElement>(Object)
  },
  content: {
    type: definePropType(String)
  }
})

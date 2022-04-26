import { buildProps, definePropType } from '@pomelo-plus/utils'
import { POPPER_CONTAINER_SELECTOR } from '@pomelo-plus/hooks'

export type Trigger = 'hover' | 'click' | 'focus' | 'contextmenu'

export const useTooltipProps = buildProps({
  content: {
    type: definePropType(String),
  },
  appendTo: {
    type: definePropType<string | HTMLElement>([String, Object]),
    default: POPPER_CONTAINER_SELECTOR,
  },
})

export const useTooltipContentProps = buildProps({
  content: {
    type: String,
    default: '',
  },
})

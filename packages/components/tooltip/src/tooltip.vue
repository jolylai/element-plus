<template>
  <po-popper>
    <tooltip-content :append-to="appendTo">Tooltip</tooltip-content>

    <tooltip-trigger :trigger="trigger">
      <slot />
    </tooltip-trigger>
  </po-popper>
</template>

<script lang="ts">
export default {
  name: 'PoTooltip',
}
</script>
<script lang="ts" setup>
import { PoPopper } from '@pomelo-plus/components/popper'
import {
  POPPER_CONTAINER_SELECTOR,
  usePopperContainer,
} from '@pomelo-plus/hooks'
import TooltipTrigger from './trigger.vue'
import TooltipContent from './content.vue'

// import { useTooltipProps } from './tooltip'
import { PropType, provide, ref } from 'vue'
import { TOOLTIP_INJECTION_KEY } from './tokens'
import { Trigger } from './tooltip'

usePopperContainer()

const props = defineProps({
  content: { type: String, default: '' },
  appendTo: { type: String, default: POPPER_CONTAINER_SELECTOR },
  trigger: {
    type: String as PropType<Trigger>,
    default: 'focus',
  },
})
console.log('props: ', props)

const open = ref(false)

provide(TOOLTIP_INJECTION_KEY, {
  open,
  onOpen: () => {
    open.value = true
  },
  onClose: () => {
    open.value = false
  },
  toggle: () => {
    open.value = !open.value
  },
})
</script>

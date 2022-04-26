<template>
  <teleport :to="appendTo">
    <po-popper-content v-if="open">
      <slot></slot>
    </po-popper-content>
  </teleport>
</template>

<script lang="ts">
export default {
  name: 'TooltipContent',
}
</script>
<script lang="ts" setup>
import { PoPopperContent } from '@pomelo-plus/components/popper'
import { inject } from 'vue'
import { TOOLTIP_INJECTION_KEY } from './tokens'

const { open } = inject(TOOLTIP_INJECTION_KEY)

const props = defineProps({
  appendTo: { type: String },
})
</script>

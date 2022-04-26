<template>
  <po-popper-trigger @focus="onFocus" @click="onClick">
    <slot />
  </po-popper-trigger>
</template>

<script lang="ts" setup>
import { PoPopperTrigger } from '@pomelo-plus/components/popper'
import { inject, PropType, watch } from 'vue'
import { TOOLTIP_INJECTION_KEY } from './tokens'
import { Trigger } from './tooltip'

const { open, onOpen, onClose, toggle } = inject(TOOLTIP_INJECTION_KEY)

const props = defineProps({
  trigger: {
    type: String as PropType<Trigger>,
    default: 'focus',
  },
})
console.log('props: ', props)

watch(open, (open) => {
  console.log('open: ', open)
})

const onFocus = () => {
  console.log('onFocus: ')
  onOpen()
}

const onClick = (e) => {
  toggle(e)
}
</script>

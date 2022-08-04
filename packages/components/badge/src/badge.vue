<template>
  <span :class="[ns.b(), ns.is('not-wrapper', !$slots.default)]">
    <sup :class="[ns.e('content'), ns.em('content', type)]">{{ content }}</sup>
    <slot />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
// import type { CSSProperties } from 'vue'
import { useNamespace } from '@pomelo-plus/hooks'

import { BadgeType } from './badge'
import { isNumber } from '@pomelo-plus/utils'

export type BadgeProps = {
  value?: number | string
  type?: BadgeType
  max?: number
}

const props = withDefaults(defineProps<BadgeProps>(), {
  value: '',
  type: 'error',
  max: 99,
})

defineOptions({
  name: 'PoBadge',
})

const ns = useNamespace('badge')

const content = computed(() => {
  if (isNumber(props.value) && isNumber(props.max)) {
    return props.max < props.value ? `${props.max}+` : `${props.value}`
  }

  return `${props.value}`
})
</script>

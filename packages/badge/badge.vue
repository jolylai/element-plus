<template>
  <span class="po-badge" :class="cls">
    <span v-if="$slots.default" class="po-badge-count">{{ showCount }}</span>
    <sup :style="numberStyle" v-else>{{ showCount }}</sup>
    <slot />
  </span>
</template>

<script lang="ts">
export default {
  name: 'PoBadge',
}
</script>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';

import type { CSSProperties } from 'vue'

interface BadgeProps {
  count?: number | string | undefined
  numberStyle?:  null | undefined
  overflowCount?: number | undefined
}

const slots = useSlots()

const cls = computed(() => {
  return {
    'po-badge-without-wrap': !slots.default,
  }
})

const props = withDefaults(defineProps<BadgeProps>(), {
  overflowCount: 99
})

const showCount = computed(() => {
  console.log('props: ', props);
  if(props.count > props.overflowCount){
    return `${props.overflowCount}+`
  }

  return props.count
})
</script>

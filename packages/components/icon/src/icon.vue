<template>
  <i :class="[ns.b()]" :style="styles">
    <slot></slot>
  </i>
</template>

<script lang="ts" setup>
import { useNamespace } from '@pomelo-plus/hooks'
import { computed } from '@vue/reactivity'
import { CSSProperties } from 'vue'

export type IconProps = {
  size: number
}

const props = withDefaults(defineProps<IconProps>(), {})

const styles = computed<CSSProperties>(() => {
  if (!props.size) return {}
  return {
    width: props.size + 'px',
    height: props.size + 'px',
  }
})

const ns = useNamespace('icon')
</script>

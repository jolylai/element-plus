<template>
  <span class="po-affix" ref="root" :style="rootStyle">
    <span :style="affixStyle">
      <slot />
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: 'PoAffix',
}
</script>

<script setup lang="ts">
import {
  computed,
  defineProps,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
} from 'vue'
import { getScrollContainer, off, on } from '@/utils/dom'

interface AffixProps {
  position?: 'top' | 'bottom'
  offset?: number
  zIndex?: number
  target?: string
}

const props = withDefaults(defineProps<AffixProps>(), {
  offset: 0,
  position: 'top',
  zIndex: 100,
  target: '',
})

const emit = defineEmits<{
  (e: 'scroll', { scrollTop: number, fixed: boolean }): void
  (e: 'change', fixed: boolean): void
}>()

const state = reactive({
  fixed: false,
  width: 0,
  height: 0,
  clientHeight: 0,
  scrollTop: 0,
  transform: 0,
})

const root = ref<HTMLElement>()
const target = ref<HTMLElement>()
const scrollContainer = ref()

const rootStyle = computed(() => {
  return {
    height: state.fixed ? `${state.height}px` : '',
    width: state.fixed ? `${state.width}px` : '',
  }
})

const affixStyle = computed(() => {
  const { fixed } = state

  if (!fixed) return
  const offset = props.offset ? `${props.offset}px` : 0
  const transform = state.transform ? `translateY(${state.transform}px)` : ''

  return {
    position: 'fixed',
    height: `${state.height}px`,
    width: `${state.width}px`,
    top: props.position === 'top' ? offset : '',
    bottom: props.position === 'bottom' ? offset : '',
    transform: transform,
    zIndex: props.zIndex,
  }
})

const updateState = () => {
  const rootRect = root.value.getBoundingClientRect()
  const targetRect = target.value.getBoundingClientRect()
  state.height = rootRect.height
  state.width = rootRect.width
  state.scrollTop =
    scrollContainer.value === window
      ? document.documentElement.scrollTop
      : scrollContainer.value.scrollTop
  state.clientHeight = document.documentElement.clientHeight

  if (props.position === 'top') {
    if (props.target) {
      const difference = targetRect.bottom - props.offset - state.height
      state.fixed = props.offset > rootRect.top && targetRect.bottom > 0
      state.transform = difference < 0 ? difference : 0
    } else {
      state.fixed = props.offset > rootRect.top
    }
  } else {
    if (props.target) {
      const difference =
        state.clientHeight - targetRect.top - props.offset - state.height
      state.fixed =
        state.clientHeight - props.offset < rootRect.bottom &&
        state.clientHeight > targetRect.top
      state.transform = difference < 0 ? -difference : 0
    } else {
      state.fixed = state.clientHeight - props.offset < rootRect.bottom
    }
  }
}

const onScroll = () => {
  updateState()
  emit('scroll', { scrollTop: state.scrollTop, fixed: state.fixed })
}

watch(
  () => state.fixed,
  fixed => {
    emit('change', fixed)
  },
)

onMounted(() => {
  if (props.target) {
    target.value = document.querySelector(props.target)
    if (!target.value) {
      throw new Error(`target is not existed: ${props.target}`)
    }
  } else {
    target.value = document.documentElement
  }
  scrollContainer.value = getScrollContainer(root.value)

  on(scrollContainer.value, 'scroll', onScroll)
})

onUnmounted(() => {
  off(target.value, 'scroll', onScroll)
})
</script>

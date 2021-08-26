<template>
  <div ref="root" class="el-affix" :style="rootStyle">
    <div :class="{ 'el-affix--fixed': state.fixed }" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  PropType,
  onMounted,
  reactive,
  watch,
  computed,
  onUnmounted,
} from 'vue'
import { getScrollContainer, on, off } from '@/utils/dom'
import { addResizeListener, removeResizeListener } from '@/utils/resize-event'

type Position = 'top' | 'bottom'

export default defineComponent({
  name: 'PoAffix',
  props: {
    zIndex: {
      type: Number,
      default: 100,
    },
    target: {
      type: String,
      default: '',
    },
    offset: {
      type: Number,
      default: 0,
    },
    position: {
      type: String as PropType<Position>,
      default: 'top',
    },
  },
  emits: ['scroll', 'change'],
  setup(props, { emit }) {
    const root = ref(null)
    const target = ref(null)
    const scrollContainer = ref(null)

    const state = reactive({
      fixed: false,
      height: 0, // height of root
      width: 0, // width of root
      scrollTop: 0, // scrollTop of documentElement
      clientHeight: 0, // clientHeight of documentElement
      transform: 0,
    })

    const rootStyle = computed(() => {
      return {
        height: state.fixed ? `${state.height}px` : '',
        width: state.fixed ? `${state.width}px` : '',
      }
    })

    const affixStyle = computed(() => {
      if (!state.fixed) {
        return
      }
      const offset = props.offset ? `${props.offset}px` : 0
      const transform = state.transform
        ? `translateY(${state.transform}px)`
        : ''

      return {
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

      state.width = rootRect.width
      state.height = rootRect.height
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
    }

    watch(
      () => state.fixed,
      () => {
        emit('change', state.fixed)
      },
    )

    onMounted(() => {
      if (props.target) {
        target.value = document.querySelector(props.target)
        if (!target.vale) {
          throw new Error(`target is not existed: ${props.target}`)
        }
      } else {
        target.value = document.documentElement
      }

      scrollContainer.value = getScrollContainer(root.value)

      on(scrollContainer.value, 'scroll', onScroll)
      addResizeListener(root.value, updateState)
    })

    onUnmounted(() => {
      off(scrollContainer.value, 'scroll', updateState)
      removeResizeListener(root.value, updateState)
    })

    return {
      root,
      state,
      affixStyle,
      rootStyle,
    }
  },
})
</script>

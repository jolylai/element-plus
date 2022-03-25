<template>
  <div ref="scrollbar" class="el-scrollbar">
    <div
      ref="wrap"
      :class="[wrapClass, 'el-scrollbar-wrap']"
      :style="style"
      @scroll="handleScroll"
    >
      <component :is="tag" :class="['el-scrollbar-view']" :style="viewStyle">
        <slot></slot>
      </component>
    </div>
    <!-- <bar :move="moveX" :size="sizeWidth" /> -->
    <bar vertical :move="moveY" :size="sizeHeight" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  provide,
  ref,
} from 'vue'
import Bar from './bar.vue'
import { toObject, isArray, addUnit, isString } from '@element-plus/utils/util'

import type { CSSProperties, PropType } from 'vue'

export default defineComponent({
  name: 'ElScrollbar',
  components: { Bar },
  props: {
    height: {
      type: [String, Number],
      default: '',
    },
    maxHeight: {
      type: [String, Number],
      default: '',
    },
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array] as PropType<string | CSSProperties[]>,
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')

    const scrollbar = ref(null)
    const wrap = ref(null)
    const moveX = ref(0)
    const moveY = ref(0)

    provide('scrollbar', scrollbar)
    provide('scrollbar-wrap', wrap)

    const handleScroll = () => {
      if (wrap.value) {
        moveX.value = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth
        moveY.value = (wrap.value.scrollTop * 100) / wrap.value.clientHeight
      }
    }

    // update scrollbar thumb size
    const update = () => {
      if (!wrap.value) return

      const heightPercentage =
        (wrap.value.clientHeight * 100) / wrap.value.scrollHeight
      const widthPercentage =
        (wrap.value.clientWidth * 100) / wrap.value.scrollWidth

      sizeHeight.value = heightPercentage < 100 ? heightPercentage + '%' : ''
      sizeWidth.value = widthPercentage < 100 ? widthPercentage + '%' : ''
    }

    onMounted(() => {
      if (!props.native) {
        nextTick(update)
      }
    })

    const style = computed(() => {
      let style: any = props.wrapStyle

      if (isArray(style)) {
        style = toObject(style)
        style.height = addUnit(props.height)
        style.maxHeight = addUnit(props.maxHeight)
      } else if (isString(style)) {
        style += addUnit(props.height)
          ? `height: ${addUnit(props.height)};`
          : ''
        style += addUnit(props.maxHeight)
          ? `max-height: ${addUnit(props.maxHeight)};`
          : ''
      }

      return style
    })

    return {
      scrollbar,
      wrap,
      handleScroll,
      style,
      moveX,
      moveY,
      sizeWidth,
      sizeHeight,
    }
  },
})
</script>

<style>
.el-scrollbar {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.el-scrollbar-wrap {
  overflow: auto;
}

.el-scrollbar-view {
  overflow: auto;
}
</style>

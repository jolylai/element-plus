<template>
  <div ref="instance" :class="['el-scrollbar-bar', 'el-scrollbar-bar-vertical']" @mousedown="clickTrackHandler">
    <div ref="thumb" :class="['el-scrollbar-thumb']" :style="thumbStyle" @mousedown="clickThumbHandler"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue'
import type { Ref } from 'vue'
import { BAR_MAP, renderThumbStyle } from './util'

export default defineComponent({
  props: {
    vertical: Boolean,
    move: Number,
    size: String,
  },
  setup(props) {
    const instance = ref(null)
    const thumb = ref(null)

    const wrap = inject('scrollbar-wrap', {} as Ref<NonNullable<HTMLElement>>)

    const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])

    const clickThumbHandler = (e: MouseEvent) => {
      e.stopPropagation()
      if (e.ctrlKey || [1, 2].includes(e.button)) {
        return
      }
    }

    const clickTrackHandler = (e) => {
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client])
      const thubmHalf = thumb.value[bar.value.offset] / 2
      const thumbPositionPercentage = ((offset - thubmHalf) * 100) / instance.value[bar.value.offset]

      wrap.value[bar.value.scroll] = (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100
    }

    const thumbStyle = computed(() => {
      const style = renderThumbStyle({
        move: props.move,
        size: props.size,
        bar: bar.value,
      })

      return style
    })

    return {
      instance,
      thumb,
      thumbStyle,
      clickTrackHandler,
      clickThumbHandler,
    }
  },
})
</script>

<style>
.el-scrollbar-bar {
  position: absolute;
  cursor: pointer;
  /* right: 2px; */
  bottom: 2px;
  z-index: 1;
  border-radius: 4px;
}

.el-scrollbar-bar-vertical {
  width: 6px;
  top: 2px;
}

.el-scrollbar-thumb {
  height: 33%;
  position: absolute;
  display: block;
  width: 2px;
  background-color: rgba(144, 147, 153, 0.3);
  border-radius: inherit;
}
</style>

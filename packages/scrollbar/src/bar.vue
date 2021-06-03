<template>
  <div
    ref="instance"
    :class="['el-scrollbar-bar', 'el-scrollbar-bar-vertical']"
    @mousedown="clickTrackHandler"
  >
    <div :class="['el-scrollbar-thumb']" :style="thumbStyle"></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { BAR_MAP, renderThumbStyle } from './util'

export default defineComponent({
  props: {
    vertical: Boolean,
    move: Number,
    size: String,
  },
  setup(props) {
    const bar = computed(
      () => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'],
    )
    const clickTrackHandler = (e) => {
      console.log('e: ', e)
      const offset = Math.abs(
        e.target.getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client],
      )
      console.log('offset: ', offset)
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
      thumbStyle,
      clickTrackHandler,
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

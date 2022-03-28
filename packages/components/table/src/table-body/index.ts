import { defineComponent, h, VNode } from 'vue'
import defaultProps from './defaults'
import useRender from './render-helper'

export default defineComponent({
  props: defaultProps,
  setup(props) {
    const { wrappedRowRender } = useRender(props)

    return { wrappedRowRender }
  },
  render() {
    const { wrappedRowRender, store } = this
    const data = store.states.data.value || []

    return h(
      'tbody',
      {},
      data.reduce((acc: VNode[], row) => {
        return acc.concat(wrappedRowRender(row, acc.length))
      }, [])
    )
  }
})

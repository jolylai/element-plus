import { defineComponent, h, inject, VNode } from 'vue'
import useLayoutObserver from '../layout-observer'
import { TABLE_INJECTION_KEY } from '../tokens'
import defaultProps from './defaults'
import useRender from './render-helper'

export default defineComponent({
  props: defaultProps,
  setup(props) {
    const { wrappedRowRender } = useRender(props)

    const parent = inject(TABLE_INJECTION_KEY)
    useLayoutObserver(parent)

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

import { defineComponent } from 'vue'
import { useLocal, useLocalProps } from '../hooks'

export default defineComponent({
  name: 'PoConfigProvider',
  props: {
    ...useLocalProps,
  },
  setup(_, { slots }) {
    useLocal()

    return () => slots.default()
  },
})

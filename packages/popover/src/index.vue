<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElPopover',
  props: {
    content: { type: String },
  },
  setup() {},
  render() {
    const { $slots } = this
    const trigger = $slots.reference ? $slots.reference() : null
  },
})
</script>

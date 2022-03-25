<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useLocalInject } from '../../hooks'

export default defineComponent({
  setup() {
    const { t } = useLocalInject()

    console.log('t', t('po.button.ok'))
  },
})
</script>

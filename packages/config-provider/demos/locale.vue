<template>
  <div>
    <po-config-provider :locale="locale" :i18n="translator">
      <local-button>button</local-button>
    </po-config-provider>
    <po-button>
      切换语言
    </po-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import LocalButton from './local-button.vue'

export default defineComponent({
  components: { LocalButton },
  setup() {
    const locale = reactive({
      name: 'zh-cn',
      po: {
        button: { ok: '确定' },
      },
    })

    const translator = (path, option) => {
      console.log('option: ', option)
      console.log('path: ', path)
    }

    return { locale, translator }
  },
})
</script>

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import Inspect from 'vite-plugin-inspect'

import Demo from './.vitepress/plugins/demo'
import PomeloPlusResolver from './.vitepress/plugins/resolver'

// import Unocss from 'unocss/vite'
// import presetWind from '@unocss/preset-wind'

export default defineConfig({
  optimizeDeps: {
    include: ['@popperjs/core', 'vue', 'lodash'],
  },
  plugins: [
    // Inspect(),
    Demo(),
    DefineOptions(),
    AutoImport({
      imports: ['vue'],
    }),
    Components({
      dts: true,
      resolvers: [PomeloPlusResolver()],
    }),
    // Unocss({
    //   presets: [presetWind()],
    // }),
  ],
})

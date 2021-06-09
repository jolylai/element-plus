import type { App } from 'vue'

import Affix from './src/index.vue'

Affix.install = (app: App): void => {
  app.component(Affix.name, Affix)
}

export default Affix
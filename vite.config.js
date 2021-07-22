import Vue from '@vitejs/plugin-vue'
import Markdown from './markdown'

export default {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
}

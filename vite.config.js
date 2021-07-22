// const { babel } = require('@rollup/plugin-babel')
// const createDemoPlugin = require('./build/vite-plugin-demo')
// const styleImport = require('vite-plugin-style-import').default

// module.exports = {
//   root: __dirname,
//   plugins: [...createDemoPlugin()],
//   define: {
//     'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
//     'process.env.TUSIMPLE': !!process.env.TUSIMPLE,
//     __DEV__: process.env.NODE_ENV !== 'production',
//   },
//   build: {
//     outDir: 'dist-website',
//     rollupOptions: {
//       plugins: [
//         babel({
//           babelHelpers: 'bundled',
//         }),
//       ],
//     },
//   },
//   optimizeDeps: {
//     include: [
//       '@css-render/plugin-bem',
//       'async-validator',
//       'css-render',
//       'date-fns',
//       'evtd',
//       'highlight.js',
//       'lodash-es',
//       'seemly',
//       'treemate',
//       'vdirs',
//       'vooks',
//       'vue',
//       'vue-router',
//       'vueuc',
//     ],
//     exclude: ['__INDEX__'],
//   },
//   esbuild: {
//     jsxFactory: 'h',
//     jsxFragment: 'Fragment',
//   },
// }

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

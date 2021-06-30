const { babel } = require('@rollup/plugin-babel')
const createDemoPlugin = require('./build/vite-plugin-demo')
const styleImport = require('vite-plugin-style-import')

module.exports = {
  root: __dirname,
  plugins: [
    ...createDemoPlugin(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3)
            return `pomelo-ui/theme/${name}.scss`
          },
          // resolveComponent: name => {
          //   return `element-plus/lib/${name}`
          // },
        },
      ],
    }),
  ],
  define: {
    'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    'process.env.TUSIMPLE': !!process.env.TUSIMPLE,
    __DEV__: process.env.NODE_ENV !== 'production',
  },
  build: {
    outDir: 'dist-website',
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: 'bundled',
        }),
      ],
    },
  },
}

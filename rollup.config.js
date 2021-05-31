import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default {
  input: './packages/index.ts',
  output: [{ format: 'es', file: `dist/${pkg.name}.esm.js` }],
  plugins: [
    vuePlugin({
      css: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.vue'],
      babelHelpers: 'bundled',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
}

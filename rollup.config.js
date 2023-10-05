import pkg from './package.json';

import cjs from '@rollup/plugin-commonjs';
import vue from '@vitejs/plugin-vue';
import postcss from 'rollup-plugin-postcss';

function pgl() {
  return [
    cjs(),
    vue(),
    postcss({
      extract: false
    })
  ];
}

export default [
  {
    input: './src/index.vue',
    output: {
      name: 'VueBpmn',
      file: `dist/vue-bpmn.umd.js`,
      format: 'umd'
    },
    external: [
      'bpmn-js/dist/bpmn-navigated-viewer.production.min.js',
      'vue'
    ],
    plugins: pgl()
  },
  {
    input: './src/index.vue',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' }
    ],
    external: [
      'bpmn-js/dist/bpmn-navigated-viewer.production.min.js',
      'vue'
    ],
    plugins: pgl()
  }
];
import pkg from './package.json';

import cjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';

function pgl() {
  return [
    cjs(),
    vue()
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
    plugins: pgl()
  },
  {
    input: './src/index.vue',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: pgl()
  }
];
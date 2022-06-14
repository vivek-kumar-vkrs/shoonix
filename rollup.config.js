import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
// import analyze from 'rollup-plugin-analyzer';
import autoprefixer from 'autoprefixer';
// import eslint from '@rollup/plugin-eslint';

export default [
  {
    // preserveModules: true,
    input: 'src/index.ts',
    output: [
      {
        file: '../playground/src/component-lib/index.js',
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      // analyze(),
      // eslint({
      //   throwOnError: true,
      // }),
      babel({
        exclude: 'node_modules/**',
      }),
      typescript(),
      postcss({
        plugins: [autoprefixer()],
        extract: 'shoonix.css',
        modules: true,
        minimize: true,
        // sourceMap: true,
        // namedExports: false,
        use: ['sass'],
      }),
      terser(),
      del({
        targets: ['dist/*', '../playground/src/component-lib/*'],
        force: true,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];

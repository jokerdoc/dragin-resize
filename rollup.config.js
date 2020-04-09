import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export default {
  input: 'lib/dragin-resize.js',
  output: {
    file: './dist/dragin-resize.js',
    format: 'umd',
    name: 'joDraginResize'
  },
  external: ['jo-util', 'jo-dragin'],
  plugins: [
    resolve({
      jsnext: true
    }),
    commonjs(),
    scss({
      output: 'dist/dragin-resize.css'
    }),
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [['@babel/preset-env', { modules: false }]]
    })
  ]
};

import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default {
  input: 'src/CodeAutoTyping.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    postcss({
      extensions: ['.css'],
    }),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['react', 'react-dom'],
};

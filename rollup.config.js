import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
// import path from 'path';

export default [
    {
        input: 'src/index.ts',
        output: [
            { file: 'dist/index.cjs.js', format: 'cjs', sourcemap: true },
            { file: 'dist/index.esm.js', format: 'esm', sourcemap: true },
        ],
        plugins: [
            nodeResolve({ extensions: ["js", "jsx", "ts", "tsx"] }),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                plugins: ['babel-plugin-styled-components'],
            }),
            terser(),
            // alias({
            //     entries: [
            //         { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            //         { find: '@common', replacement: path.resolve(__dirname, 'src/common') }
            //     ]
            // }),
        ],
        external: ['styled-components', 'react', 'react-dom'],
    },
    {
        input: 'dist/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
    },
];

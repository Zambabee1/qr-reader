import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/CodeReader.ts',
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'CodeReader',
        sourcemap: true,
    },
    plugins: [
        typescript(),
        resolve(),
    ],
};
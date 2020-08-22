import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { base64 } from 'rollup-plugin-base64';

export default {
    input: 'src/CodeReader.ts',
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'CodeReader',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        typescript(),
        base64({ include: 'src/decoder.js' }),
    ],
};
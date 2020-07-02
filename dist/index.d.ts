interface CodeReaderOptions {
    canvas: HTMLCanvasElement;
}
interface CodeReaderConstructor {
    new (opts: CodeReaderOptions): CodeReader;
}
declare global {
    const CodeReader: CodeReaderConstructor;
}
export default class CodeReader {
    private initialized;
    private video;
    private preview;
    private scope;
    private previewCtx;
    private scopeCtx;
    private scopeRect;
    private codeReader;
    private resizeListener;
    constructor(opts: CodeReaderOptions);
    init(): Promise<void>;
    destroy(): void;
    private calculateSizes;
    private render;
    private decode;
    read(): Promise<string>;
}
export {};

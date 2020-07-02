import { BarcodeFormat } from "@zxing/library/esm/index";
interface CodeReaderOptions {
    canvas: HTMLCanvasElement;
    formats?: BarcodeFormat[];
}
interface CodeReaderConstructor {
    new (opts: CodeReaderOptions): CodeReader;
    formats: typeof BarcodeFormat;
}
declare global {
    const CodeReader: CodeReaderConstructor;
}
export default class CodeReader {
    static formats: typeof BarcodeFormat;
    private initialized;
    private formats;
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

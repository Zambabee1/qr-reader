import { BarcodeFormat } from "@zxing/library/esm/index";
interface CodeReaderOptions {
    canvas: HTMLCanvasElement;
    formats?: BarcodeFormat[];
    scope: RectScopeOptions | CornerScopeOptions | ShelfScopeOptions | LineScopeOptions | CustomScopeOptions | NoneScopeOptions;
}
interface CodeReaderConstructor {
    new (opts: CodeReaderOptions): CodeReader;
    formats: typeof BarcodeFormat;
}
interface BaseScopeOptions {
    lineWidth?: number;
    color?: string;
}
interface RectScopeOptions extends BaseScopeOptions {
    style: "rect";
}
interface CornerScopeOptions extends BaseScopeOptions {
    style: "corner";
    length?: number;
}
interface ShelfScopeOptions extends BaseScopeOptions {
    style: "shelf";
    length?: number;
}
interface LineScopeOptions extends BaseScopeOptions {
    style: "line";
}
interface CustomScopeOptions {
    style: "custom";
    drawFunction: (ctx: CanvasRenderingContext2D) => void;
}
interface NoneScopeOptions {
    style: "none";
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
    private scopeOptions;
    private codeReader;
    private resizeListener;
    private drawFunction;
    constructor(opts: CodeReaderOptions);
    init(): Promise<void>;
    destroy(): void;
    private calculateSizes;
    private render;
    private decode;
    read(): Promise<string>;
    private drawRect;
    private drawCorner;
    private drawShelf;
    private drawLine;
}
export {};

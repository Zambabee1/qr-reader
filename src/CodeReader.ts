import {
    BarcodeFormat,
    DecodeHintType,
    HybridBinarizer,
    BinaryBitmap,
    Result
} from "@zxing/library/esm/index";

import {
    BrowserMultiFormatReader,
    HTMLCanvasElementLuminanceSource,
} from "@zxing/browser/esm/index";

interface CodeReaderOptions {
    canvas: HTMLCanvasElement;
    formats?: BarcodeFormat[];
    scope: RectScopeOptions | 
        CornerScopeOptions | 
        ShelfScopeOptions | 
        LineScopeOptions | 
        CustomScopeOptions |
        NoneScopeOptions;
}

interface CodeReaderConstructor {
    new (opts: CodeReaderOptions): CodeReader;
    formats: typeof BarcodeFormat;
}

interface Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;
};

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

function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export default class CodeReader {
    static formats = BarcodeFormat;

    private initialized = false;
    private formats: BarcodeFormat[];
    private video: HTMLVideoElement;
    private stream: MediaStream;
    private preview: HTMLCanvasElement;
    private scope: HTMLCanvasElement;
    private previewCtx: CanvasRenderingContext2D;
    private scopeCtx: CanvasRenderingContext2D;
    private scopeRect: Rectangle;
    private scopeOptions: RectScopeOptions | 
        CornerScopeOptions | 
        ShelfScopeOptions | 
        LineScopeOptions | 
        CustomScopeOptions |
        NoneScopeOptions;
    private codeReader: BrowserMultiFormatReader;
    private resizeListener: () => void;
    private drawFunction: (ctx: CanvasRenderingContext2D) => void;

    constructor(opts: CodeReaderOptions) {
        this.formats = opts.formats || [
            BarcodeFormat.EAN_8,
            BarcodeFormat.EAN_13,
            BarcodeFormat.QR_CODE,
        ];
        this.video = document.createElement("video");
        this.preview = opts.canvas;
        this.scope = document.createElement("canvas");
        this.previewCtx = this.preview.getContext("2d");
        this.scopeCtx = this.scope.getContext("2d");
        this.scopeOptions = opts.scope;

        // For iOS Safari support
        // @ts-ignore
        this.video.playsInline = true;
        this.video.muted = true;
        this.video.style.transform = 'scale(0.0001, 0.0001)';
        this.video.style.position = 'fixed';
        this.video.style.bottom = '0';
        this.video.style.right = '0';
        document.body.appendChild(this.video);

        switch(opts.scope.style)
        {
            default:
            case "rect":
                this.drawFunction = this.drawRect;
                break;
            case "corner":
                this.previewCtx.strokeStyle = opts.scope.color;
                this.previewCtx.lineWidth = opts.scope.lineWidth;
                this.drawFunction = this.drawCorner;
                break;
            case "shelf":
                this.previewCtx.strokeStyle = opts.scope.color;
                this.previewCtx.lineWidth = opts.scope.lineWidth;
                this.drawFunction = this.drawShelf;
                break;
            case "line":
                this.previewCtx.strokeStyle = opts.scope.color;
                this.previewCtx.lineWidth = opts.scope.lineWidth;
                this.drawFunction = this.drawLine;
                break;
            case "custom":
                this.drawFunction = opts.scope.drawFunction;
                break;
            case "none":
                this.drawFunction = () => {};
                break;     
        }
    }
    
    async init () {
        const hints = new Map();
        hints.set(DecodeHintType.POSSIBLE_FORMATS, this.formats);
        this.codeReader = new BrowserMultiFormatReader(hints);

        this.stream = this.video.srcObject = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
        });

        await this.video.play();
        
        this.calculateSizes();
        requestAnimationFrame(() => this.render());
        
        this.resizeListener = () => this.calculateSizes(); 
        window.addEventListener('resize', this.resizeListener);

        this.initialized = true;
    }

    destroy() {
        window.removeEventListener('resize', this.resizeListener);
        this.initialized = false;
        this.video.pause();
        this.video.remove();
        this.scope.remove();
        if(this.stream) {
            this.stream.getTracks().forEach(function(track){
                track.stop();
            });
        }
    }

    private calculateSizes() {
        this.preview.width = this.video.videoWidth;
        this.preview.height = this.video.videoHeight;

        // Set scope rectangle based on the longest canvas side
        this.scopeRect = { x: 0, y: 0, w: 0, h: 0 };
        if (this.preview.width < this.preview.height) {
            this.scopeRect.h = Math.round(this.preview.height / 2);
            this.scopeRect.w = Math.round(Math.min(
                this.scopeRect.h / 3 * 4, // 4:3
                this.preview.width - 40 // Maximum width
            ));
        } else {
            this.scopeRect.w = Math.round(this.preview.width / 2);
            this.scopeRect.h = Math.round(this.scopeRect.w / 4 * 3); // 3:4
        }

        this.scope.width = this.scopeRect.w;
        this.scope.height = this.scopeRect.h;

        this.scopeRect.x = Math.round(this.preview.width / 2 - this.scopeRect.w / 2);
        this.scopeRect.y = Math.round(this.preview.height / 2 - this.scopeRect.h / 2);
    }

    private render() {
        const {x, y, w, h} = this.scopeRect;
        this.scopeCtx.drawImage(this.video, x, y, w, h, 0, 0, w, h);
        this.previewCtx.drawImage(this.video, 0, 0);

        this.drawFunction(this.previewCtx);

        if(this.initialized) {
            requestAnimationFrame(() => this.render());
        }
    }

    private async decode(): Promise<Result> {
        const luminanceSource = new HTMLCanvasElementLuminanceSource(this.scope);
        const hybridBinarizer = new HybridBinarizer(luminanceSource);
        const binaryBitmap = new BinaryBitmap(hybridBinarizer);
        try {
            const result = this.codeReader.decodeBitmap(binaryBitmap);
            return result;
        } catch (error) {
            if (error.name == 'NotFoundException') {
                await wait(1000);
                if(this.initialized) {
                    return this.decode();
                }
            } else {
                throw error;
            }
        }
    }

    async read() {
        if (!this.initialized) {
            await this.init();
        }

        const result = await this.decode();
        return result?.getText();
    }

    private drawRect() {
        if(this.scopeOptions.style != "rect") {
            return;
        }
        const {x, y, w, h} = this.scopeRect;
        this.previewCtx.beginPath();
        this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
        this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
        this.previewCtx.rect(x, y, w, h);
        this.previewCtx.stroke();
    }

    private drawCorner() {
        if(this.scopeOptions.style != "corner") {
            return;
        }
        const {x, y, w, h} = this.scopeRect;
        const length = this.scopeOptions.length || 30;
        const topLeft = {
            x: x,
            y: y,
        }
        const topRight = {
            x: x+w,
            y: y,
        }
        const bottomLeft = {
            x: x,
            y: y+h,
        }
        const bottomRight = {
            x: x+w,
            y: y+h,
        }
        this.previewCtx.beginPath();
        this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
        this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
        this.previewCtx.moveTo(topLeft.x, topLeft.y);
        this.previewCtx.lineTo(topLeft.x+length, topLeft.y);
        this.previewCtx.moveTo(topLeft.x, topLeft.y);
        this.previewCtx.lineTo(topLeft.x, topLeft.y+length);
        this.previewCtx.moveTo(topRight.x, topRight.y);
        this.previewCtx.lineTo(topRight.x-length, topRight.y);
        this.previewCtx.moveTo(topRight.x, topRight.y);
        this.previewCtx.lineTo(topRight.x, topRight.y+length);
        this.previewCtx.moveTo(bottomLeft.x, bottomLeft.y);
        this.previewCtx.lineTo(bottomLeft.x+length, bottomLeft.y);
        this.previewCtx.moveTo(bottomLeft.x, bottomLeft.y);
        this.previewCtx.lineTo(bottomLeft.x, bottomLeft.y-length);
        this.previewCtx.moveTo(bottomRight.x, bottomRight.y);
        this.previewCtx.lineTo(bottomRight.x-length, bottomRight.y);
        this.previewCtx.moveTo(bottomRight.x, bottomRight.y);
        this.previewCtx.lineTo(bottomRight.x, bottomRight.y-length);
        this.previewCtx.stroke();
    }

    private drawShelf() {
        if(this.scopeOptions.style != "shelf") {
            return;
        }
        const {x, y, w, h} = this.scopeRect;
        const length = this.scopeOptions.length || 30;
        const bottomLeft = {
            x: x,
            y: y+h,
        }
        const bottomRight = {
            x: x+w,
            y: y+h,
        }
        this.previewCtx.beginPath();
        this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
        this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
        this.previewCtx.moveTo(bottomLeft.x, bottomLeft.y-length);
        this.previewCtx.lineTo(bottomLeft.x, bottomLeft.y);
        this.previewCtx.lineTo(bottomRight.x, bottomRight.y);
        this.previewCtx.lineTo(bottomRight.x, bottomRight.y-length);
        this.previewCtx.stroke();
    }

    private drawLine() {
        if(this.scopeOptions.style != "line") {
            return;
        }
        const {x, y, w, h} = this.scopeRect;
        
        this.previewCtx.beginPath();
        this.previewCtx.strokeStyle = this.scopeOptions.color || "#75ff75";
        this.previewCtx.lineWidth = this.scopeOptions.lineWidth || 2;
        this.previewCtx.moveTo(x, y+h/2);
        this.previewCtx.lineTo(x+w, y+h/2);
        this.previewCtx.stroke();
    }
}
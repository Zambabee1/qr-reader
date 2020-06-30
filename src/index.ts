import {
    BarcodeFormat,
    BrowserMultiFormatReader,
    DecodeHintType,
    HTMLCanvasElementLuminanceSource,
    HybridBinarizer,
    BinaryBitmap,
    Result
} from "@zxing/library/esm/index";

interface CodeReaderOptions {
    canvas: HTMLCanvasElement;
}

interface Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;
};

function wait(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export default class CodeReader {
    private initialized = false;

    private video: HTMLVideoElement;
    private preview: HTMLCanvasElement;
    private scope: HTMLCanvasElement;
    private previewCtx: CanvasRenderingContext2D;
    private scopeCtx: CanvasRenderingContext2D;
    private scopeRect: Rectangle;
    private codeReader: BrowserMultiFormatReader;
    private resizeListener: () => void;

    constructor(opts: CodeReaderOptions) {
        this.video = document.createElement("video");
        this.preview = opts.canvas;
        this.scope = document.createElement("canvas");
        this.previewCtx = this.preview.getContext("2d");
        this.scopeCtx = this.scope.getContext("2d");
    }
    
    async init () {
        const hints = new Map();
        const formats = [
            BarcodeFormat.EAN_8,
            BarcodeFormat.EAN_13,
            BarcodeFormat.QR_CODE,
        ];
        hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
        this.codeReader = new BrowserMultiFormatReader(hints);

        this.video.srcObject = await navigator.mediaDevices.getUserMedia({
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
    }

    private calculateSizes() {
        this.preview.width = this.video.videoWidth;
        this.preview.height = this.video.videoHeight;

        // Set scope rectangle based on the longest canvas side
        this.scopeRect = { x: 0, y: 0, w: 0, h: 0 };
        if (this.preview.width < this.preview.height) {
            this.scopeRect.h = this.preview.height / 2;
            this.scopeRect.w = Math.min(
                this.scopeRect.h / 3 * 4, // 4:3
                this.preview.width - 40 // Maximum width
            );
        } else {
            this.scopeRect.w = this.preview.width / 2;
            this.scopeRect.h = this.scopeRect.w / 4 * 3; // 3:4
        }

        this.scope.width = this.scopeRect.w;
        this.scope.height = this.scopeRect.h;

        this.scopeRect.x = this.preview.width / 2 - this.scopeRect.w / 2;
        this.scopeRect.y = this.preview.height / 2 - this.scopeRect.h / 2;
    }

    private render() {
        const { x, y, w, h } = this.scopeRect; 
        this.scopeCtx.drawImage(this.video, x, y, w, h, 0, 0, w, h);
        this.previewCtx.drawImage(this.video, 0, 0);

        this.previewCtx.beginPath();
        this.previewCtx.rect(x, y, w, h);
        this.previewCtx.closePath();
        this.previewCtx.strokeStyle = "#75ff75";
        this.previewCtx.lineWidth = 2;
        this.previewCtx.stroke();

        if(this.initialized) {
            requestAnimationFrame(() => this.render());
        }
    }

    private async decode() {
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
        return result.getText();
    }
}
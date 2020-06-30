import {BarcodeFormat,BrowserMultiFormatReader,DecodeHintType} from "@zxing/library/esm/index";

interface CodeReaderOptions {
    canvas: HTMLCanvasElement;
}

export class CodeReader {
    private video;
    private preview;
    private scope;
    private previewCtx;
    private scopeCtx;
    private scopeSize;
    private codeReader;

    constructor(opts: CodeReaderOptions) {
        const hints = new Map();
        const formats = [BarcodeFormat.EAN_8,BarcodeFormat.EAN_13,BarcodeFormat.QR_CODE];

        hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);
        
        this.codeReader = new BrowserMultiFormatReader(hints);

        this.video = document.createElement("video");
        this.preview = opts.canvas;
        this.scope = document.createElement("canvas");
        this.previewCtx = this.preview.getContext("2d");
        this.scopeCtx = this.scope.getContext("2d");
        
        this.scopeSize = {};
    }
    
    async init () {
        this.video.srcObject = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
        });
           
        await this.video.play();
        
        this.calculateSizes();
        requestAnimationFrame(this.render);
        
        window.addEventListener('resize', () => this.calculateSizes());
    }

    calculateSizes() {
        this.preview.width = this.video.videoWidth;
        this.preview.height = this.video.videoHeight;

        // Set scope size based on the longest canvas side
        if (this.preview.width < this.preview.height) {
            this.scopeSize.height = this.preview.height / 2;
            this.scopeSize.width = Math.min(
                this.scopeSize.height / 3 * 4, // 4:3
                this.preview.width - 40 // Maximum width
            );
        } else {
            this.scopeSize.width = this.preview.width / 2;
            this.scopeSize.height = this.scopeSize.width / 4 * 3; // 3:4
        }

        this.scope.width = this.scopeSize.width;
        this.scope.height = this.scopeSize.height;

        this.scopeSize.x = this.preview.width / 2 - this.scopeSize.width / 2;
        this.scopeSize.y = this.preview.height / 2 - this.scopeSize.height / 2;
    }

    render() {
        const {x,y,width,height} = this.scopeSize; 
        this.scopeCtx.drawImage(this.video,x,y,width,height,0,0,width,height);
        this.previewCtx.drawImage(this.video,0,0);

        this.previewCtx.beginPath();
        this.previewCtx.rect(x,y,width,height);
        this.previewCtx.closePath();
        this.previewCtx.strokeStyle = "#75ff75";
        this.previewCtx.lineWidth = 2;
        this.previewCtx.stroke();

        requestAnimationFrame(this.render);
    }

    async read() {
        const stream = this.scope.captureStream();
        const decodeResult = await this.codeReader.decodeOnceFromStream(stream);

        return decodeResult.text;  
    }
}
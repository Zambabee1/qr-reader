import {
    BarcodeFormat,
    BrowserMultiFormatReader,
    DecodeHintType,
    HTMLCanvasElementLuminanceSource,
    HybridBinarizer,
    BinaryBitmap,
    Result
} from "@zxing/library/esm/index";

let codeReader;

global.addEventListener('message', (msg) => {
    switch (msg.type) {
        case 'init':
            const hints = new Map();
            hints.set(DecodeHintType.POSSIBLE_FORMATS, msg.formats);
            codeReader = new BrowserMultiFormatReader(hints);
            break;
    }
});

const hints = new Map();
const formats = [ZXing.BarcodeFormat.EAN_8,ZXing.BarcodeFormat.EAN_13,ZXing.BarcodeFormat.QR_CODE];

hints.set(ZXing.DecodeHintType.POSSIBLE_FORMATS, formats);
 
const codeReader = new ZXing.BrowserMultiFormatReader(hints);

const video = document.createElement("video");
const preview = document.getElementById("preview");
const scope = document.createElement("canvas");
const previewCtx = preview.getContext("2d");
const scopeCtx = scope.getContext("2d");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
const resultClose = document.getElementById("result-close");

let scopeSize = {};

navigator.mediaDevices.getUserMedia({
    video: { facingMode: "environment" },
}).then(stream => {
    video.srcObject = stream;
    return video.play();
}).then(() => {
    calculateSizes();
    requestAnimationFrame(render);
    read();
})
.catch(reason => console.error(reason));

window.addEventListener('resize', () => calculateSizes());

function calculateSizes() {
    preview.width = video.videoWidth;
    preview.height = video.videoHeight;

    // Set scope size based on the longest canvas side
    if (preview.width < preview.height) {
        scopeSize.height = preview.height / 2;
        scopeSize.width = Math.min(
            scopeSize.height / 3 * 4, // 4:3
            preview.width - 40 // Maximum width
        );
    } else {
        scopeSize.width = preview.width / 2;
        scopeSize.height = scopeSize.width / 4 * 3; // 3:4
    }

    scope.width = scopeSize.width;
    scope.height = scopeSize.height;

    scopeSize.x = preview.width / 2 - scopeSize.width / 2;
    scopeSize.y = preview.height / 2 - scopeSize.height / 2;
}

function render() {
    scopeCtx.drawImage(video,scopeSize.x,scopeSize.y,scopeSize.width,scopeSize.height,0,0,scopeSize.width,scopeSize.height);
    previewCtx.drawImage(video,0,0);

    previewCtx.beginPath();
    previewCtx.rect(scopeSize.x,scopeSize.y,scopeSize.width,scopeSize.height);
    previewCtx.closePath();
    previewCtx.strokeStyle = "#75ff75";
    previewCtx.lineWidth = 2;
    previewCtx.stroke();

    requestAnimationFrame(render);
}

async function read() {
    const stream = scope.captureStream();
    const decodeResult = await codeReader.decodeOnceFromStream(stream);
    result.style.display = "block";
    resultText.textContent = decodeResult.text;

    resultClose.addEventListener("click", () => {
        result.style.display = "none";
        read();
    },{once: true});
}
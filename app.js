const codeReader = new ZXing.BrowserMultiFormatReader();

const video = document.createElement("video");
const preview = document.getElementById("preview");
const scope = document.createElement("canvas");
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
    const ctx = preview.getContext("2d");
    ctx.drawImage(video,0,0);

    const scopeCtx = scope.getContext("2d");
    scopeCtx.drawImage(video,scopeSize.x,scopeSize.y,scopeSize.width,scopeSize.height,0,0,scopeSize.width,scopeSize.height);

    ctx.beginPath();
    ctx.rect(scopeSize.x,scopeSize.y,scopeSize.width,scopeSize.height);
    ctx.closePath();
    ctx.strokeStyle = "#75ff75";
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(render);
}

async function read() {
    scope.getContext("2d");
    const stream = scope.captureStream();
    const decodeResult = await codeReader.decodeOnceFromStream(stream);
    result.style.display = "block";
    resultText.textContent = decodeResult.text;

    resultClose.addEventListener("click", () => {
        result.style.display = "none";
        read();
    },{once: true})
}
# KAI AI Removes

A privacy-first, browser-local image and video cleanup website created by **KAI AI**.

The video tool now uses the working frame-by-frame engine from the source package supplied for this project. It decodes frames with WebCodecs/Mediabunny, detects supported Gemini/Veo-style marks, applies local restoration, re-encodes the video track, and exports MP4 without uploading the media file.

## Included tools

- Browser-local image cleanup with batch PNG/ZIP export
- Frame-by-frame video decoding and processing
- Automatic supported-watermark detection
- Local ONNX FDnCNN cleanup models
- Before/after synchronized video preview
- MP4 export with compatible audio passthrough
- English interface and KAI AI branding
- LinkedIn credit: https://www.linkedin.com/in/kirohan/
- GitHub Pages deployment workflow

## Run locally

No package installation or build step is required for the deployed website.

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

Use a recent desktop Chrome or Edge browser. Do not open `index.html` directly with `file://`, because the browser must fetch the ONNX and WebAssembly assets over HTTP.

## GitHub Pages

1. Upload every file and folder in this project to the repository root.
2. Open **Settings → Pages**.
3. Set the source to **GitHub Actions**.
4. Push to the `main` branch.
5. Wait for the Pages deployment workflow to finish.

The following folders are required and must not be deleted:

```text
models/
onnxruntime/
.github/workflows/
```

## Video workflow

1. Open the Video Remover section.
2. Choose an MP4, WebM, or MOV video.
3. Confirm that you own the video or have permission to edit it.
4. Run watermark detection or start processing directly.
5. Keep the page open while every frame is processed.
6. Download the generated MP4.

The first video run may be slower because the local ONNX model and WebAssembly runtime must load. Long or high-resolution videos can require substantial memory and processing time.

## Browser notes

- Chrome and Edge provide the best WebCodecs support.
- H.264/AVC encoding must be available in the browser.
- If WebGPU is unavailable, the engine falls back to WebAssembly.
- GitHub Pages does not provide cross-origin-isolation headers, so the WebAssembly fallback may use one thread and run more slowly.
- Audio is preserved only when its source codec can be copied into the generated MP4.

## Responsible use

Use the tool only for media you created, commissioned, licensed, or otherwise have permission to edit. Do not use it to misrepresent authorship or remove ownership/provenance marks from unauthorized content.

## Attribution and license

KAI AI interface and integration code are released under the MIT License in `LICENSE`.

The frame-by-frame video engine, runtime integration, and model-related assets are derived from the MIT-licensed source package supplied for this project. The required third-party license notice is preserved in:

```text
THIRD_PARTY_LICENSE_GEMINI_WATERMARK_REMOVER.txt
```

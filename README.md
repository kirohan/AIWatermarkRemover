# KAI AI Removes

A privacy-first, browser-local image and video cleanup utility created by **KAI AI**.

## What changed in version 3

The video workflow now uses a genuine decoded-frame pipeline instead of periodically sampling a playing video. Every presented frame is drawn to a canvas, processed, and explicitly submitted to the output stream.

- Frame-by-frame processing with `requestVideoFrameCallback`
- Explicit canvas-frame capture with `CanvasCaptureMediaStreamTrack.requestFrame()` when supported
- Correct selection coordinates based on the actual rendered video surface
- Automatic bottom-right Gemini/Veo selection preset
- Gemini/Veo restoration mode for bright translucent marks
- Full-region frame inpainting mode
- Blur fallback
- Frame counter and progress reporting
- Browser-local export with optional audio passthrough

## Run locally

No installation or build step is required.

```bash
python3 -m http.server 4173
```

Open the local address shown by Python in a recent desktop Chrome or Edge browser.

You can also use:

```bash
npm run start
npm run check
```

## Recommended video workflow

1. Upload a short MP4, WebM, or MOV file.
2. Confirm that you own the video or have permission to edit it.
3. Use **Auto-select Gemini/Veo corner**, or drag a box around the complete mark.
4. Start with **Gemini/Veo restore** for a bright translucent logo.
5. Use **Frame inpaint** when the mark must be completely replaced.
6. Process the video and download the generated result.

Desktop Chrome or Edge provides the most reliable browser support. Output is generally WebM because browser-native MP4 recording support varies. Audio is preserved only when the browser exposes the source audio track through `captureStream()`.

## Important limitation

This independent implementation does not bundle the reference website's ONNX detection or inpainting model. It performs local pixel restoration and spatial inpainting. Results depend on the background behind the selected mark, and complex moving textures may still show artifacts.

## Privacy and responsible use

Media is processed locally in the browser and is not uploaded by this project. Use the tool only for media you created, commissioned, licensed, or otherwise have permission to edit. Do not use it to misrepresent authorship or remove ownership or provenance marks from unauthorized content.

## Creator

Created by **KAI AI**.

LinkedIn: https://www.linkedin.com/in/kirohan/

## License

MIT License. See `LICENSE`.

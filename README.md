# KAI AI Removes

A zero-dependency, privacy-first image and video watermark cleanup utility that runs in the browser.

Created by **KAI AI**  
LinkedIn: https://www.linkedin.com/in/kirohan/

## Features

### Image cleanup

- JPG, PNG, and WebP input
- Multiple-image queue
- Manual selection box
- Edge Blend, Soft Fill, and Privacy Blur modes
- Before/after comparison
- PNG export
- Dependency-free ZIP export for completed images

### Video cleanup

- MP4, WebM, and MOV input when the browser can decode the source
- Manual fixed-area selection
- Smart Blur, Pixelate, and Clean Patch modes
- Local frame-by-frame processing
- Progress display and stop control
- Browser-supported MediaRecorder export, normally WebM
- Attempts to preserve audio when the browser exposes an audio capture track

## Privacy

Media remains on the user’s device. The app has no backend, account system, analytics script, tracking pixel, or upload endpoint.

## Responsible use

Use the tool only for media you created, commissioned, licensed, or otherwise have permission to edit. Do not remove ownership, platform, attribution, or provenance marks from content you are not authorized to modify.

The app modifies visible pixels. It does not remove invisible provenance signals, embedded ownership records, or metadata.

## Run locally

Open `index.html` directly, or serve the directory:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Video limitations

- Video processing occurs in real time because frames are rendered and recorded in the browser.
- Export formats depend on MediaRecorder support in the browser.
- Audio preservation depends on the browser’s media capture implementation.
- For stability, videos with an edge larger than 1920 pixels are scaled down during export.
- Clean Patch works best when the mark is fixed and the nearby background is simple.
- Smart Blur is generally the most reliable mode for complex or moving scenes.

## Deployment

This is a static application. Upload the files to any static hosting provider. No installation, package download, API key, build command, database, or server is required.

## License

MIT License. Keep the KAI AI credit visible in derivative deployments.

# CleanMark — Powered by KAI AI

A zero-dependency, privacy-first image cleanup website for images users own or are authorized to edit.

CleanMark helps creators, students, researchers, small businesses, and everyday users clean small unwanted overlays, obscure sensitive details, and prepare images without uploading them to a remote server.

> **Credit:** Designed and released with **KAI AI**. The product header, footer, metadata, license, and documentation preserve this credit.

## Why this project exists

Many image utilities require accounts, upload private files to unknown servers, place basic features behind paywalls, or work poorly on slower connections. CleanMark keeps the workflow simple:

1. Add one or more images.
2. Draw a selection over an area you are authorized to edit.
3. Choose a repair method.
4. Preview and export locally.

After the page loads, image processing happens on the user's device through the Canvas API.

## Features

- 100% browser-local image processing
- No account and no image upload
- Zero runtime dependencies
- JPG, PNG, and WebP input
- Batch queue with a reusable proportional selection
- Edge Blend repair for small overlays on simple backgrounds
- Soft Fill for flat or softly textured areas
- Privacy Blur for faces, IDs, addresses, and other sensitive details
- Before/after comparison slider
- Individual lossless PNG export
- Built-in, dependency-free ZIP export
- English and Bangla interface
- Dark and light themes
- Responsive desktop and mobile layout
- Keyboard-accessible upload flow
- GitHub Pages deployment workflow
- Visible responsible-use confirmation

## Responsible use

CleanMark is intended only for images that you:

- created yourself;
- commissioned;
- licensed;
- received permission to edit; or
- are otherwise legally authorized to modify.

Do not use it to misrepresent authorship, remove ownership notices from someone else's work, bypass platform rules, or infringe copyright or other rights.

CleanMark changes visible pixels only. It is not designed to remove invisible provenance signals, steganographic watermarks, cryptographic credentials, or metadata.

## Repair modes

### Edge Blend

Interpolates pixels from the selection boundary. It works best for small overlays near a corner and on uncomplicated backgrounds.

### Soft Fill

Samples the border around the selected region, creates a softly textured fill, and feathers the boundary. It works best on flat-color or gently textured backgrounds.

### Privacy Blur

Obscures the selected area. Use this when the goal is privacy rather than reconstruction.

The MVP deliberately uses understandable local image processing rather than claiming AI restoration or perfect content-aware reconstruction.

## Tech stack

- Semantic HTML
- Modern CSS
- Vanilla JavaScript
- Canvas API
- File and Blob APIs
- A small built-in ZIP writer using the standard uncompressed ZIP format

There is no framework, package download, API key, server, database, analytics SDK, or build tool.

## Run locally

The quickest option is to open `index.html` directly in a modern browser.

For a local HTTP server:

```bash
npm start
```

This command uses Python's built-in HTTP server and opens the project on port `4173`. You may also use any static server you prefer.

Check the JavaScript syntax with:

```bash
npm run check
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload or push all project files to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. The included `.github/workflows/deploy.yml` workflow publishes the repository as a static website.

No build command is required.

## Create and push the repository

```bash
git init
git add .
git commit -m "Launch CleanMark by KAI AI"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cleanmark-kai-ai.git
git push -u origin main
```

## Project structure

```text
cleanmark-kai-ai/
├── .github/workflows/deploy.yml
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── app.js
├── styles.css
├── index.html
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
└── README.md
```

## Honest limitations

- Edge Blend and Soft Fill work best on small selections and relatively simple backgrounds.
- They are not substitutes for advanced content-aware image editors on complex faces, text, architecture, or repeating patterns.
- Large images and large batches can use substantial browser memory.
- Export is PNG, so output files may be larger than the original JPEG or WebP.
- The browser decodes the image and may not preserve every original metadata field.

## Roadmap

- Web Worker processing for very large batches
- Offline/PWA installation
- Manual clone-source brush
- Undo history and multiple selections
- Optional JPEG/WebP quality controls
- Automated accessibility testing
- More interface languages
- A benchmark page showing where each repair method succeeds or fails

## Attribution

**CleanMark — Powered by KAI AI**

This repository is an independent implementation. It does not copy the source code, branding, calibration masks, or proprietary assets of the reference website. General product concepts such as browser-local processing, batch workflows, and private exports are implemented independently.

## License

MIT License. See [LICENSE](LICENSE).

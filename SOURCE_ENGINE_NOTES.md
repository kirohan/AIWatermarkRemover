# Source Engine Notes

The uploaded source archive contained a large development repository with tests, research reports, release archives, samples, extension code, scripts, and experimental assets.

For the website deployment, only the required runtime components were retained:

- The compiled frame-by-frame video application
- Three local ONNX restoration models and their manifest
- The WebAssembly runtime files used by the video application
- The KAI AI image application and website interface
- GitHub Pages deployment configuration
- Original third-party MIT license notice

Development-only tests, benchmark reports, sample videos, historical release archives, extension packages, research artifacts, and unrelated scripts were omitted from the deployable repository. This keeps the repository smaller while preserving the working browser video pipeline.

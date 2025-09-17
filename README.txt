# Bathroom & Drinks Logger — PWA

This folder is ready to publish as a Progressive Web App (PWA) using GitHub Pages.

## Files
- `index.html` — your app (self-contained CSS/JS)
- `manifest.webmanifest` — app metadata for install-to-home-screen
- `sw.js` — service worker for offline caching
- `icons/icon-192.png`, `icons/icon-512.png` — install icons
- `.nojekyll` — ensures GitHub Pages serves files as-is

## How to Publish on GitHub Pages (no command line)
1. Create a free GitHub account at https://github.com (if you don't have one).
2. Create a new repository (e.g. `bathroom-logger`), make it **Public**, and tick "Add a README".
3. Click **Add file → Upload files**, drag the *contents of this folder* (everything inside, not the folder itself).
4. Commit the changes.
5. Go to **Settings → Pages**. Under **Source**, choose **Branch: main**, **Folder: /(root)**, then **Save**.
6. After a minute, your app will be live at: `https://<your-user>.github.io/<repo-name>/`

## Install on Android
1. Open the link in **Chrome** on Android.
2. Tap **⋮** (menu) → **Install app** (or **Add to Home screen**).
3. An icon will appear on the home screen. The app opens full screen and works offline.

Enjoy!
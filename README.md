# Mascot Spark V20 — Final Cleanup Build

Mascot Spark is a beginner-friendly Procreate mascot drawing PWA. It generates small character lessons for food mascots, object characters, icon mascots, blobs, cute creatures, logo marks, and more.

This final cleanup build keeps all files in the repository root for easy GitHub Pages deployment.

## Root files

```txt
index.html
manifest.json
service-worker.js
icon-192.png
icon-512.png
icon.svg
README.md
```

## Current cache

```js
const CACHE_NAME = "mascot-spark-v20";
```

## Major features included

- 3-mode UI theme system
- Simple / Advanced view toggle
- Focus Mode
- Today’s Practice card
- Guided Next Step mode
- Traceable blueprint system
- Blueprint Studio
- Blueprint SVG export
- Blueprint PNG export
- Palette swatches and palette role guidance
- Smart Surprise types
- Subject packs
- Skill Focus system
- Practice Intelligence cards
- Mascot Anatomy
- Version 2 challenge engine
- Fix My Mascot coach
- Subject-specific mini-rules
- AI Coach workspace with OpenRouter support
- Offline fallback coaching
- Guided session timer
- Before / After redraw tracker
- Saved Mascot Stash
- Stash JSON export
- Text worksheet export
- HTML worksheet export
- Version/cache tools
- Accessibility and touch polish

## How to use

1. Open the app.
2. Choose a subject, emotion, lesson size, and skill focus.
3. Press **New lesson** or **Surprise me**.
4. Use **Guided step mode** to draw one step at a time.
5. Open **Blueprint Studio** if you want a large tracing guide.
6. Export the blueprint as SVG or PNG if you want to import it into Procreate.
7. Draw Version 1.
8. Use **Version 2 Challenge** or **Fix My Mascot** to improve.
9. Save the lesson to **Stash**.

## GitHub Pages deployment

1. Unzip this package.
2. Upload every file directly into the root of your GitHub repository.
3. Do not place icons in a separate folder.
4. Enable GitHub Pages from the repository root.
5. Wait a few minutes for deployment.
6. Open your GitHub Pages link.

## If GitHub Pages shows an old version

Use the app’s **Version tools**:

- Clear browser cache storage
- Reload app

If it still shows the old version:

1. Delete the installed PWA from your home screen.
2. Clear website data for the GitHub Pages site.
3. Reopen the page.
4. Reinstall the PWA.

## OpenRouter AI

OpenRouter is optional.

The app works without an API key using offline fallback coaching. If you add an OpenRouter key, Coach tools can produce deeper custom guidance.

Use the model field however you prefer. It defaults to:

```txt
openrouter/free
```

Do not hard-code your API key into the source before uploading publicly.

## Final QA checklist

Before treating this as final:

- New lesson works.
- Surprise Me works.
- Simple / Advanced toggle works.
- Focus Mode works.
- Palette swatches display.
- Guided Step mode advances.
- Blueprint Studio opens and closes.
- Blueprint SVG export works.
- Blueprint PNG export works.
- Text worksheet export works.
- HTML worksheet export works.
- Stash save/edit/delete works.
- Version tools open and close.
- Dark/neutral/light theme works.
- iPad portrait layout looks usable.
- iPad landscape layout looks usable.
- Service worker cache is `mascot-spark-v20`.

## Notes

All data is stored locally in the browser using localStorage. Saved lessons and settings do not sync across devices unless you export/import them manually.

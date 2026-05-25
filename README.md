# Mascot Spark PWA

Mascot Spark is a cozy beginner-friendly drawing teacher for Procreate. It helps you generate simple mascot lessons, traceable blueprint-style guides, creative twists, palette moods, and optional AI-assisted lesson help through OpenRouter.

## What this app does

Mascot Spark gives you one calm drawing lesson at a time.

It can help you practice:

- Blob mascots
- Food mascots
- Object characters
- Icon mascots
- Letter mascots
- Mask mascots
- Plant mascots
- Star / moon mascots
- Potion bottle mascots
- Tiny bug mascots
- Cloud / weather mascots
- Gem / charm mascots
- Pencil / stationery mascots

Each lesson includes:

- A clear mascot drawing goal
- Step-by-step drawing phases
- Beginner mistake warnings
- Traceable construction blueprint
- Procreate setup notes
- Palette mood options
- Tiny twist options
- Cozy / Cozy+ / Remix creative modes
- Optional OpenRouter AI help

## File structure

All files are kept in the root folder as requested.

```txt
index.html
manifest.json
service-worker.js
icon-192.png
icon-512.png
icon.svg
README.md
```

## How to use locally

1. Unzip the project.
2. Open `index.html` in your browser.
3. Use the controls to generate a mascot lesson.
4. Screenshot or export the blueprint.
5. Import it into Procreate.
6. Lower the guide layer opacity.
7. Draw over it on a new layer.

## How to install as a PWA

The app includes:

- `manifest.json`
- `service-worker.js`
- 192x192 icon
- 512x512 icon
- Apple touch icon reference

To install properly, the app should be served from a web server, not just opened as a local file.

Good free hosting options:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload all root files:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`
   - `icon.svg`
   - `README.md`
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. Open the GitHub Pages URL after deployment finishes.

## OpenRouter AI notes

OpenRouter is optional. The app works without AI.

To use AI help:

1. Get an OpenRouter API key.
2. Paste it into the OpenRouter key field inside the app.
3. Leave the model as:

```txt
openrouter/free
```

4. Choose an AI help mode.
5. Click the AI button.

The API key is saved only in your browser using `localStorage`.

Important:

- Do not hard-code your API key into `index.html`.
- Do not upload a version with your key inside it.
- Free models may rate-limit or fail depending on OpenRouter availability.

## PWA notes

The service worker caches the app shell so it can load more reliably after first visit.

Cached files:

```txt
./
./index.html
./manifest.json
./icon-192.png
./icon-512.png
```

If you update the app and the old version keeps loading, change the cache name inside `service-worker.js`.

Example:

```js
const CACHE_NAME = "mascot-spark-v2";
```

Then redeploy.

## Icon notes

The app icons use the glowing question-mark mascot artwork:

- `icon-192.png`
- `icon-512.png`
- `icon.svg`

These are referenced in `manifest.json` and in the HTML metadata.

## Recommended Procreate workflow

1. Generate a lesson.
2. Screenshot the blueprint.
3. Import the screenshot into Procreate.
4. Lower opacity to 20–30%.
5. Create a new sketch layer above it.
6. Draw the big shape first.
7. Add face placement.
8. Add tiny limbs.
9. Add one twist only.
10. Hide the guide.
11. Clean line on a new layer.
12. Add flat color, one shadow, and one highlight.

## Beginner rule

Keep it simple:

```txt
Big shape first.
Face second.
Tiny limbs third.
Decoration last.
```

Mascot Spark is designed to make drawing feel approachable, playful, and repeatable.

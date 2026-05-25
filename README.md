# Mascot Spark V7 — Stitched Halo Bloom

This is a complete rewrite of the Mascot Spark PWA.

## What was added

### 01. Better drawing instruction

- More “draw this first, then this” panels
- More beginner step order
- More traceable blueprint variations
- Clearer body-first, face-map, icon-grid, worksheet, and shadow-map modes

### 02. More mascot subject categories

Includes blob, food, object, icon, letter, number, mask, plant, flower, star/moon, potion, bug, cloud/weather, gem/charm, stationery, candy, toy, sticker, badge/emblem, creative tool, book/notebook, ghost, tiny creature, household object, and drink mascots.

### 03. More duo emotions

Includes grumpy-cute, spooky-sweet, sad-hopeful, haunted-happy, brave-scared, jealous-cute, chaotic-soft, lonely-sparkly, bashful-proud, gloomy-sweet, feral-cute, melty-happy, and soft-suspicious.

### 04. More tiny twists

Includes sparkle, hat, patch, charm tag, freckles, bow, halo, fang, glow mark, ribbon tail, stitches, leaf, star cheek, button cheek, teardrop, bandage, crown, cape, wings, antennae, question mark charm, moon mark, heart patch, glasses, scarf, paint drip, shine spot, holographic thread stitch, raindrop bead, and sprout tuft.

### 07. More specific color profiles

Palette profiles include 5, 6, and 7 color selections. They are meant to be copied into Procreate as color references.

### Optional flavor does not change subject

The optional flavor controls only affect mood/style. The selected Subject Category remains the base character.

### More AI help categories

Includes simplify, explain, variation, step-by-step, mistakes, Procreate layers, clearer blueprint, gentle critique, creative but easy, practice drill, draw-along script, fix awkward proportions, expression coach, silhouette coach, color coach, and worksheet mode.

### More lesson size categories

Includes micro, tiny, normal, slow, study, icon sheet, polish, one-shape-only drill, expression sheet, silhouette drill, accessory control drill, color pass practice, and daily mascot quest.

### Better UI

- Tab organization
- Surprise Me button
- Better iPad portrait layout
- Better iPad landscape layout
- Stitched Halo Bloom 3-mode theme system

## Files

All files are in the root:

```txt
index.html
manifest.json
service-worker.js
icon-192.png
icon-512.png
icon.svg
README.md
```

## Service worker cache

This build uses:

```js
const CACHE_NAME = "mascot-spark-v7";
```

If GitHub Pages shows an old version, confirm `service-worker.js` uploaded correctly and clear site data or reinstall the PWA.

## GitHub Pages

Upload all root files to your repository root. Then enable GitHub Pages from the main branch root folder.

## OpenRouter

OpenRouter is optional. The offline lesson generator works without it.

Use:

```txt
openrouter/free
```

Do not hard-code your API key into the file.


## V8 teaching update

This build improves the actual drawing-teacher behavior.

Added:

- Stronger “Draw this first, then this” cards
- Procreate layer guidance inside each draw-first card
- Traceable step blueprint panels:
  - Body only
  - Guide lines
  - Face placement
  - Tiny limbs
  - Twist + polish
- Better step-by-step lesson phases
- Each phase now tells:
  - what to draw
  - which Procreate layer to use
  - what the canvas should look like
  - what mistake to avoid
  - what to check before moving on
- Copy lesson text button
- Service worker cache updated to:

```js
const CACHE_NAME = "mascot-spark-v8";
```


## V9 expansion update

This version expands:

- More mascot subjects
- More duo emotions
- More tiny twists
- Stronger optional flavor lock

Optional flavor is now explicitly treated as style/mood only. It cannot replace the selected subject category.

Examples:

```txt
Subject: Fruit mascot
Optional flavor: with holographic thread accents
Result: still a fruit mascot, just with holographic thread styling.
```

```txt
Subject: Robot mascot
Optional flavor: with sleepy bedtime softness
Result: still a robot mascot, just softer and sleepier.
```


## V10 UI + blueprint update

This version adds:

- Surprise Me button improvements
- Palette swatch preview with visual color dots
- Better tab organization
- More organized UI
- More unique blueprint variants, including:
  - plush body
  - fruit body
  - potion bottle
  - cloud puff
  - robot grid
  - ghost drape
  - gem facet
  - letter build
  - number build
  - badge emblem
  - weather symbol
- Better iPad portrait mode layout
- Better iPad landscape mode layout


## V11 guided UI update

Added:

- Next Step guided mode
- Previous / Next / Show All Steps controls
- Stronger section hierarchy
- More distinct button hierarchy:
  - main generate action
  - playful Surprise Me action
  - AI coach action
  - quieter utility actions
- Tiny icons added to tabs
- Friendlier tab names:
  - Start
  - Personality
  - Palette
  - Trace Guide
  - Coach


## V12 palette preview fix

This version fixes palette previews so the colors are visibly shown.

Added:

- Larger visible palette dots
- Full palette color strip
- Selected palette note
- Palette swatches inside the generated lesson output
- Palette cards can be tapped/clicked to select that palette
- No copy buttons added

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v12";
```


## V13 AI coach workspace

Added a more spacious dedicated Coach tab.

New Coach tools:

- General Lesson Help
- Subject-Specific Drawing Logic
- Emotion Coach
- Palette Coach

All AI help output now appears in the Coach tab instead of being scattered elsewhere.

Also added:
- current coach context pills
- larger output card
- offline fallback guidance if no API key is entered
- service worker cache:

```js
const CACHE_NAME = "mascot-spark-v13";
```

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


## V21 emotion blueprint pass 1

This build begins adding emotion-specific construction guides directly into the blueprints.

Pass 1 emotion blueprint coverage:

- Added: 15
- Total current emotion entries: 46
- Remaining for next pass: 31

Added emotion blueprint guides for:

- shy
- happy
- sleepy
- grumpy
- spooky
- sassy
- nervous
- proud
- dreamy
- mischievous
- dramatic
- calm
- confused
- angryTiny
- sadHopeful

What changed:

- Main blueprint now includes an emotion guide overlay.
- Traceable step panels now include emotion guides from the Face Placement step onward.
- Practice Intelligence indicates whether the selected emotion is supported in Pass 1 or still waiting for the next pass.
- Unsupported emotions still show a safe placeholder face-zone guide.

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v21";
```


## V22 emotion blueprint pass 2

Added another 15 emotion blueprint guides.

Pass 2 totals:

- Added this pass: 15
- Total emotion blueprint coverage now: 30
- Total current emotion entries: 46
- Remaining for next pass: 16

New emotion blueprint guides added in Pass 2:

- delightedShy
- gloomySweet
- softSuspicious
- hauntedHappy
- chaoticSoft
- bashfulProud
- braveScared
- jealousCute
- lonelySparkly
- feralCute
- meltyHappy
- embarrassedBrave
- sleepyMischief
- anxiousProud
- hopefulGrumpy

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v22";
```


## V23 emotion blueprint pass 3

Added the final remaining 16 emotion blueprint guides.

Pass 3 totals:

- Added this pass: 16
- Total emotion blueprint coverage now: 46
- Total current emotion entries: 46
- Remaining for next pass: 0

New emotion blueprint guides added in Pass 3:

- bashfulChaotic
- smugCute
- timidMagical
- dramaticSleepy
- woundedSparkly
- overexcitedSoft
- suspiciousHappy
- gloomyGlam
- lonelyBrave
- tenderFeral
- eerieCalm
- gigglyNervous
- softVillain
- rainyHopeful
- cursedAdorable
- seriousTiny

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v23";
```


## V24 AI Shading Lab

Added a new Shade Lab focused on simple mascot shading for Procreate.

Included:

- new **Shade Lab** tab
- shading style selector
- light direction selector
- shading intensity selector
- output mode selector
- offline fallback shading guidance
- optional OpenRouter-powered shading help
- visual shading map preview
- shading map SVG export
- shading map PNG export
- palette role suggestions
- Procreate layer plan
- “don’t muddy it” guidance
- quick presets:
  - Make It Simpler
  - Make It More Glossy
  - Make It More Icon-Readable

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v24";
```


## V25 subject blueprint completion

Added custom subject blueprint guides for the remaining 16 subject categories:

- blob
- food
- object
- mask
- flower
- star
- bug
- stationery
- candy
- toy
- tool
- household
- drink
- sauce
- artSupply
- plushKeychain

Subject blueprint coverage now:

- Total subject categories: 50
- Custom subject blueprint guides: 50
- Remaining without custom guides: 0

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v25";
```


## V26 tiny twist blueprint pass 1

Added custom tiny twist blueprint guides for the first 15 twists:

- sparkle
- hat
- patch
- charm
- freckle
- bow
- halo
- fang
- glow
- ribbon
- stitches
- leaf
- starCheek
- button
- teardrop

Twist blueprint coverage now:

- Total twist options: 51
- Decorative twists needing custom guides: 50
- Custom twist blueprint guides added so far: 15
- Remaining custom twist guides to add: 35

What changed:

- Main blueprint now includes a twist guide overlay + twist guide label.
- Final trace step panel now includes the twist guide overlay.
- Practice Intelligence now reports twist blueprint support status.
- Trace note now includes twist blueprint support status.

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v26";
```


## V27 surprise fix + tiny twist blueprint pass 2

Changed Surprise Me:

- Randomizes every main option.
- Always randomizes emotion.
- Always randomizes tiny twist.
- Surprise Type now nudges the result instead of locking the emotion.

Added 15 more tiny twist blueprint guides:

- bandage
- crown
- cape
- wings
- antenna
- question
- moon
- heart
- glasses
- scarf
- paint
- shine
- thread
- raindrop
- sprout

Twist blueprint coverage now:

- Total twist options: 51
- Decorative twists needing custom guides: 50
- Custom twist blueprint guides added so far: 30
- Remaining custom twist guides to add: 20

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v27";
```


## V28 lesson + blueprint trigger + tiny twist blueprint pass 3

Updated lesson trigger:

- Clicking **Give me a mascot lesson** now generates the lesson and automatically opens the **Trace Guide** tab.
- The top **New lesson** button now does the same.

Added the final 20 tiny twist blueprint guides:

- zipper
- safetyPin
- bell
- flowerPin
- brokenHeart
- gumdropShine
- ghostWisp
- threadLoop
- tinyBoots
- oneMitten
- blanket
- peelCorner
- waxSeal
- crescentBrow
- mismatchedButtons
- tinyBackpack
- bowtie
- floatingStar
- blushStripe
- tinySatchel

Twist blueprint coverage now:

- Total twist options: 51
- Decorative twists needing custom guides: 50
- Custom twist blueprint guides added so far: 50
- Remaining custom twist guides to add: 0

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v28";
```


## V29 studio flow + blueprint 2.0 + dashboard

Added:

- Beginner Flow tab
  - one clear drawing sequence
  - previous / next flow controls
  - flow step auto-routing to Trace Guide and Shade Lab

- Visual step cards
  - body only
  - construction guide
  - face placement
  - limbs and twist
  - clean final

- Blueprint Studio 2.0
  - label toggle
  - shading map stage
  - transparent PNG export
  - regular PNG/SVG export preserved

- Stash Dashboard
  - saved count
  - drawn count
  - redrawn count
  - favorites count
  - stash search
  - stash sorting

- Generate Similar
  - keeps the lesson family feeling similar
  - changes unlocked details

- Surprise Locks
  - lock subject
  - lock emotion
  - lock twist
  - lock palette
  - lock blueprint
  - lock skill

- QA / cleanup
  - JavaScript syntax checked
  - service worker syntax checked
  - root file check
  - cache updated

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v29";
```


## V30 cleanup + review addons

Cleanup:

- Removed duplicate PNG helper function definitions.
- Kept transparent PNG support.
- Rechecked root files.
- Rechecked JavaScript syntax.
- Rechecked service worker syntax.

Added:

- Review tab
- AI image prompt export
- Copy image prompt
- Critique My Drawing Prep checklist
- Full app backup export
- Full app backup import

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v30";
```


## V31 remaining addons

Added:

- Blueprint personality variants
  - Simple
  - Cute
  - Icon
  - Plush
  - Dynamic

- Blueprint Studio layer toggles
  - Body
  - Face
  - Emotion
  - Twist
  - Labels

- Transparent Shade Map PNG export

- Practice dashboard suggestion card

Notes:

- Subject, emotion, and tiny twist guide coverage remains complete.
- PNG helper cleanup from V30 is preserved.

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v31";
```


## V32 specific shape subjects

Added a real Shape Pack so shape-based mascot lessons are more specific.

New specific shape subjects:

- Circle badge
- Squircle tile
- Rounded triangle
- Diamond tile
- Heart badge
- Crescent drop
- Clover glyph
- Pill capsule
- Starburst seal
- Arch tile
- Ribbon loop
- Pebble stack

Each specific shape subject now has:

- a clearer subject label
- a specific shape description
- sample mascot names
- a dedicated body construction
- a dedicated subject guide / blueprint note
- extra lesson steps that force the shape to read before face details

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v32";
```


## V33 emergency runtime fix

Fixed:

- A fatal JavaScript runtime issue where `async` appeared on its own line before a function declaration.
- The browser treated `async` as an undefined variable, which stopped the app script.
- `populateSelect()` is now defensive.
- `populateSelect()` now explicitly sets dropdown values after filling options.
- The default emotion now points to `grumpy-cute` instead of the nonexistent `grumpy` key.

Service worker cache:

```js
const CACHE_NAME = "mascot-spark-v33";
```

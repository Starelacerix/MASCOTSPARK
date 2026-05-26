const subjectData = {
      blob: ["Blob mascot", "one uneven oval blob", "simple squishy shapes", ["Mochi Blob", "Pocket Puff", "Wobble Bean"]],
      food: ["Food mascot", "one rounded food shape", "face placement", ["Toast Buddy", "Berry Bop", "Dumpling Dot"]],
      object: ["Object character", "one object silhouette", "object-to-character design", ["Button Bean", "Tiny Paint Tube", "Key Charm"]],
      icon: ["Icon mascot", "one clean emblem shape", "icon readability", ["Spark Badge", "Moon Tile", "Gem Dot"]],
      letter: ["Letter mascot", "one chunky letter", "letter construction", ["Letter Bean", "Curly M Mascot", "Alphabet Sprite"]],
      number: ["Number mascot", "one chunky number shape", "readable symbol character", ["Zero Bean", "Curly Two Buddy", "Seven Sprite"]],
      mask: ["Mask mascot", "one rounded mask shape", "symmetry and expression", ["Soft Chaos Mask", "Moon Mask", "Button-Eye Mask"]],
      plant: ["Plant mascot", "one leaf, sprout, or plant shape", "organic softness", ["Leaf Bean", "Sprout Dot", "Moss Buddy"]],
      flower: ["Flower mascot", "one flower head or petal cluster", "petal grouping", ["Bloom Bean", "Petal Dot", "Tiny Daisy Pal"]],
      star: ["Star / moon mascot", "one moon, star, or comet shape", "celestial silhouette", ["Moon Dot", "Starry Bean", "Tiny Comet"]],
      potion: ["Potion bottle mascot", "one rounded bottle shape", "object clarity", ["Potion Pip", "Bottle Bop", "Tiny Elixir"]],
      bug: ["Tiny bug mascot", "one oval bug body", "small repeated shapes", ["Button Beetle", "Moth Dot", "Tiny Flutter"]],
      cloud: ["Cloud / weather mascot", "one puffy cloud or weather shape", "soft edges", ["Cloud Puff", "Rainy Bean", "Storm Dot"]],
      gem: ["Gem / charm mascot", "one diamond or charm shape", "faceted simplicity", ["Gem Sprite", "Crystal Dot", "Tiny Relic"]],
      stationery: ["Pencil / stationery mascot", "one stationery silhouette", "creative object identity", ["Pencil Pip", "Eraser Bean", "Marker Dot"]],
      candy: ["Candy mascot", "one candy wrapper, gummy, or lollipop shape", "plush candy surfaces", ["Gummy Dot", "Taffy Bean", "Candy Button"]],
      toy: ["Toy mascot", "one plush toy body", "soft toy proportions", ["Plush Button", "Stuffie Dot", "Pocket Doll"]],
      sticker: ["Sticker mascot", "one sticker-like shape", "bold silhouette readability", ["Sticker Spark", "Peel Dot", "Glossy Badge Bean"]],
      badge: ["Badge / emblem mascot", "one badge, crest, or ribbon shape", "emblem clarity", ["Badge Bloom", "Crest Bean", "Ribbon Dot"]],
      tool: ["Creative tool mascot", "one brush, pen, palette, or tool shape", "creative tool identity", ["Brush Buddy", "Pen Nib Pip", "Palette Dot"]],
      book: ["Book / notebook mascot", "one book or page shape", "folded paper simplicity", ["Notebook Nib", "Book Bean", "Page Sprite"]],
      ghost: ["Ghost mascot", "one soft ghost sheet shape", "soft spooky silhouette", ["Ghost Bean", "Sheet Sprite", "Tiny Boo Buddy"]],
      creature: ["Tiny creature mascot", "one simple creature body", "invented creature design", ["Pocket Gremlin", "Nub Creature", "Soft Monster Dot"]],
      household: ["Household object mascot", "one simple household object", "everyday object character", ["Lamp Dot", "Mug Bean", "Pillow Pal"]],
      drink: ["Drink mascot", "one cup, bottle, or juice box shape", "container clarity", ["Tea Cup Dot", "Soda Bean", "Juice Box Pal"]],

      fruit: ["Fruit mascot", "one fruit body shape", "round edible character design", ["Peach Pip", "Apple Dot", "Citrus Bean"]],
      vegetable: ["Vegetable mascot", "one vegetable body shape", "organic object character", ["Carrot Pip", "Radish Dot", "Mushroom Sprout"]],
      dessert: ["Dessert mascot", "one dessert silhouette", "sweet treat character design", ["Pudding Dot", "Cake Bean", "Cookie Charm"]],
      breakfast: ["Breakfast mascot", "one breakfast food shape", "cozy food character", ["Pancake Puff", "Eggy Dot", "Waffle Bean"]],
      sauce: ["Sauce / condiment mascot", "one bottle, jar, or packet shape", "container personality", ["Ketchup Pip", "Honey Dot", "Jam Jar Buddy"]],
      shell: ["Shell mascot", "one shell or beach trinket shape", "soft beach object design", ["Shell Bean", "Pearl Dot", "Tiny Conch"]],
      aquatic: ["Aquatic mascot", "one fish, droplet, or sea-creature shape", "water-soft silhouette", ["Bubble Fish", "Droplet Dot", "Tiny Jelly"]],
      robot: ["Tiny robot mascot", "one rounded mechanical body", "cute machine design", ["Bolt Bean", "Robo Dot", "Tiny Circuit"]],
      device: ["Device mascot", "one phone, tablet, or tiny screen shape", "tech object character", ["Pixel Pal", "Tiny Tablet", "Screen Bean"]],
      clothing: ["Clothing mascot", "one clothing item silhouette", "soft fabric character", ["Sock Gremlin", "Mittens Dot", "Tiny Hoodie"]],
      accessory: ["Accessory mascot", "one wearable accessory shape", "fashion object personality", ["Bow Bean", "Charm Clip", "Tiny Locket"]],
      music: ["Music mascot", "one musical object or note shape", "sound-symbol character", ["Note Dot", "Tiny Tambourine", "Chord Bean"]],
      artSupply: ["Art supply mascot", "one art supply shape", "creative studio character", ["Crayon Dot", "Paint Pot", "Ink Bean"]],
      magicObject: ["Magic object mascot", "one wand, crystal, scroll, or charm shape", "mystic object design", ["Wand Wisp", "Scroll Bean", "Rune Dot"]],
      celestialObject: ["Celestial object mascot", "one planet, cloud moon, or star object", "sky-symbol character", ["Planet Pip", "Comet Bean", "Orbit Dot"]],
      plushKeychain: ["Plush keychain mascot", "one tiny hanging plush shape", "keychain character design", ["Keychain Puff", "Clip Bean", "Charm Plush"]],
      tinyMonster: ["Tiny monster mascot", "one small monster body", "soft creature attitude", ["Fang Puff", "Nub Goblin", "Tiny Howl"]],
      zodiac: ["Zodiac mascot", "one zodiac-symbol-inspired body", "symbolic character design", ["Aries Puff", "Moon Sign Dot", "Star Chart Bean"]],
      emoji: ["Emoji mascot", "one simple expression-ball body", "face-first character design", ["Mood Dot", "Emoji Bean", "Tiny Reaction"]],
      package: ["Package mascot", "one box, mailer, or wrapped shape", "parcel character design", ["Parcel Pip", "Box Bean", "Tiny Mailer"]],
      furniture: ["Furniture mascot", "one furniture silhouette", "home object character", ["Chair Dot", "Lampy Bean", "Tiny Table"]],
      garden: ["Garden mascot", "one garden object or nature shape", "outdoor cozy character", ["Watering Can Dot", "Seed Packet", "Garden Bean"]],
      weatherIcon: ["Weather icon mascot", "one weather-symbol shape", "forecast icon character", ["Thunder Dot", "Snow Puff", "Sunny Bean"]],
      abstractShape: ["Abstract shape mascot", "one invented soft abstract shape", "shape-language practice", ["Blob Glyph", "Loop Dot", "Wiggle Bean"]],
      circleBadge: ["Circle badge mascot", "one clean circular badge shape", "centered shape readability", ["Orbit Button", "Roundy Spark", "Halo Dot"]],
      squircleTile: ["Squircle tile mascot", "one soft squircle app-tile shape", "soft corner control", ["Tile Puff", "Soft App Bean", "Squish Icon"]],
      roundedTriangle: ["Rounded triangle mascot", "one rounded triangle wedge shape", "point-softening and balance", ["Tri Puff", "Lucky Wedge", "Soft Peak"]],
      diamondTile: ["Diamond tile mascot", "one rounded diamond badge", "angled symmetry", ["Gem Crest", "Diamond Dot", "Tilt Bean"]],
      heartBadge: ["Heart badge mascot", "one plump heart-like badge shape", "heart silhouette clarity", ["Hearty Loop", "Sweet Crest", "Cupid Bean"]],
      crescentDrop: ["Crescent drop mascot", "one crescent-moon droplet shape", "moon-curve shape control", ["Moon Drip", "Crescent Pip", "Night Drop"]],
      cloverGlyph: ["Clover glyph mascot", "one four-lobed clover glyph shape", "multi-lobe balance", ["Clover Pop", "Lucky Puff", "Petal Node"]],
      pillCapsule: ["Pill capsule mascot", "one capsule or lozenge shape", "capsule proportions", ["Capsule Pop", "Jelly Cap", "Lozenge Bean"]],
      starburstSeal: ["Starburst seal mascot", "one burst-edged sticker seal", "spiky but cute edges", ["Burst Button", "Star Seal", "Spark Ruffle"]],
      archTile: ["Arch tile mascot", "one arch-window or shrine-top tile shape", "arched silhouette control", ["Archie Tile", "Window Puff", "Shrine Dot"]],
      ribbonLoop: ["Ribbon loop mascot", "one looped ribbon / bow-loop badge", "looped silhouette design", ["Loopie Crest", "Ribbon Bean", "Bow Knot Dot"]],
      pebbleStack: ["Pebble stack mascot", "one stacked pebble / blob cluster shape", "asymmetric balance", ["Pebble Pile", "Stack Dot", "Smooth Cluster"]],
      logoMark: ["Logo mark mascot", "one brand-mark shape", "brandable mascot silhouette", ["Mark Dot", "Logo Bean", "Crestling"]]
    };


    const emotions = {
      shy: ["Shy", "low dot eyes, blush cheeks, tiny curved mouth", "hands tucked close to the body", "Do not place the face too high."],
      happy: ["Happy", "bright dot eyes, lifted smile, small sparkle cheek", "tiny raised arms", "Keep the smile small and readable."],
      sleepy: ["Sleepy", "closed curved eyes, tiny yawn mouth, droopy posture", "small pillow-like cheek", "One sleepy cue is enough."],
      grumpy: ["Grumpy-cute", "flat brows, dot eyes, tiny frown", "round body to keep it cute", "Do not make the shapes too sharp."],
      spooky: ["Spooky-sweet", "uneven eyes, tiny fang, nervous smile", "soft ghostly glow", "Sweet first, spooky second."],
      sassy: ["Sassy-soft", "half-lidded eyes, tiny side-smile, one raised brow", "confident tilt", "Keep the body soft."],
      nervous: ["Nervous-cute", "uneven eyes, tiny worried mouth, small blush dots", "hands close to body", "One worry mark is enough."],
      proud: ["Proud-tiny", "bright eyes, confident tiny smile, lifted brow", "small cape or upright pose", "Pride can be shown with one tilt."],
      dreamy: ["Dreamy-sad", "soft sleepy eyes, tiny smile, relaxed cheeks", "moon or floating sparkle", "Use one dreamy symbol."],
      mischievous: ["Mischievous-sweet", "one raised brow, dot eyes, crooked tiny smile", "small fang or tilted accessory", "Keep it playful, not mean."],
      dramatic: ["Dramatic-soft", "large shiny eyes, tiny frown or O mouth", "one tear or cape", "One clear gesture is enough."],
      calm: ["Calm-glowy", "soft closed eyes, peaceful smile", "small leaf or halo", "Avoid loud accessories."],
      confused: ["Confused-cute", "one big eye, one small eye, tiny O mouth", "question mark charm", "Tilt one thing only."],
      angryTiny: ["Tiny-angry", "tiny angry brows, dot eyes, very small frown", "soft round body", "Tiny-angry works best on plush shapes."],
      sadHopeful: ["Sad-hopeful", "soft sad eyes, tiny hopeful smile, one glow mark", "warm cheek sparkle", "Do not overdo tears."],
      hauntedHappy: ["Haunted-happy", "happy smile with slightly uneven eyes", "ghostly glow", "Keep the smile readable."],
      braveScared: ["Brave-scared", "wide eyes, determined brows, tiny tense mouth", "small cape", "Show bravery with one lifted edge."],
      jealousCute: ["Jealous-cute", "side-eye dots, tiny pout, raised brow", "small heart or crossed arms", "Keep it plush, not mean."],
      chaoticSoft: ["Chaotic-soft", "uneven eyes, excited little grin, tilted head", "one crooked accessory", "One crooked detail is enough."],
      lonelySparkly: ["Lonely-sparkly", "small low eyes, tiny mouth, one bright sparkle", "extra space around the face", "The empty space is part of the mood."],
      bashfulProud: ["Bashful-proud", "blush cheeks, proud tiny smile, shy eyes", "tiny badge or sparkle", "Keep the proud detail small."],
      gloomySweet: ["Gloomy-sweet", "droopy eyes, soft little smile, low brows", "raindrop or cloud mark", "Keep one sweet color."],
      feralCute: ["Feral-cute", "tiny fang, wide eyes, chaotic small grin", "one tuft or claw mark", "Still use simple shapes."],
      meltyHappy: ["Melty-happy", "smiling eyes, tiny open smile, droopy cheeks", "one melting edge", "One droop reads better."],
      softSuspicious: ["Soft-suspicious", "half-lidded eyes, tiny side mouth, raised brow", "slight body tilt", "One suspicious cue is enough."],

      embarrassedBrave: ["Embarrassed-brave", "blush cheeks, determined brows, tiny nervous smile", "small cape or upright pose", "Keep the bravery small and readable."],
      sleepyMischief: ["Sleepy-mischievous", "sleepy eyes, tiny crooked grin, soft brow", "one tilted accessory", "Do not add too much chaos."],
      anxiousProud: ["Anxious-proud", "wide eyes, proud smile, tense brows", "tiny badge or sparkle", "Show both feelings with face, not extra props."],
      hopefulGrumpy: ["Hopeful-grumpy", "flat brows, small frown, bright cheek sparkle", "one hopeful glow mark", "Keep the glow tiny."],
      bashfulChaotic: ["Bashful-chaotic", "blush, uneven eyes, tiny grin", "crooked bow or patch", "One chaotic detail is enough."],
      smugCute: ["Smug-cute", "half-lidded eyes, tiny smirk, raised brow", "small shine or crown", "Avoid making the expression mean."],
      timidMagical: ["Timid-magical", "small worried eyes, tiny smile, sparkle freckles", "soft wand or glow", "Use gentle magic, not clutter."],
      dramaticSleepy: ["Dramatic-sleepy", "closed eyes, dramatic tiny frown, droopy pose", "little tear or moon mark", "Keep the drama simple."],
      woundedSparkly: ["Wounded-sparkly", "soft sad eyes, bandage mark, tiny hopeful sparkle", "small bandage detail", "Do not overdo injury details."],
      overexcitedSoft: ["Overexcited-soft", "wide eyes, open smile, blushy cheeks", "tiny raised arms", "Keep limbs tiny."],
      suspiciousHappy: ["Suspicious-happy", "side-eye with tiny smile", "tilted head", "One side-eye is enough."],
      gloomyGlam: ["Gloomy-glam", "droopy eyes, glossy shine, tiny pout", "small luxe sparkle", "Do not make the palette too dark."],
      lonelyBrave: ["Lonely-brave", "small low eyes, determined brow, tiny smile", "mini cape or glow", "Leave some empty space."],
      tenderFeral: ["Tender-feral", "wide eyes, tiny fang, soft blush", "one messy tuft", "Keep feral details rounded."],
      eerieCalm: ["Eerie-calm", "closed peaceful eyes, faint spooky smile", "halo or ghost glow", "Do not make it scary."],
      gigglyNervous: ["Giggly-nervous", "uneven eyes, tiny nervous laugh", "sweat drop or blush", "Keep the mouth small."],
      softVillain: ["Soft-villain", "tiny smirk, angled brows, plush body", "small cape or crown", "Villain cue should be cute, not harsh."],
      rainyHopeful: ["Rainy-hopeful", "sad eyes, tiny smile, raindrop bead", "soft blue accent", "Use one rain detail."],
      cursedAdorable: ["Cursed-adorable", "mismatched eyes, tiny smile, cute patch", "soft spooky mark", "Do not add horror details."],
      delightedShy: ["Delighted-shy", "bright eyes, tiny hidden smile, blush", "hands tucked in", "Make delight small and sweet."],
      seriousTiny: ["Serious-tiny", "straight brows, tiny line mouth, round body", "simple badge or mark", "Serious does not mean complex."]
    };


    const lessonSizes = {
      micro: ["Micro: 5 minute warm-up", [["One big shape", "Draw only the body shape.", "No details yet."], ["Low face", "Add two eyes below center and one mouth.", "High faces feel less cute."], ["Tiny finish", "Add one limb pair or one twist.", "Stop small."]]],
      tiny: ["Tiny: 10 minute sketch", [["Block shape", "Draw one readable base shape.", "Do not scratch over lines."], ["Place face", "Eyes below center, mouth close under.", "Face placement matters."], ["Tiny limbs", "Use simple curves or ovals.", "Keep limbs small."], ["Color", "Flat color, one shadow, one highlight.", "Do not over-render."]]],
      normal: ["Normal: beginner lesson", [["Ghost shape", "Lightly draw the base like a sticker silhouette.", "Avoid details early."], ["Center guide", "Add vertical guide and low face line.", "Guides are not cheating."], ["Eyes first", "Place eyes before the mouth.", "Eye spacing changes personality."], ["Mouth test", "Try three mouths, choose one.", "Do not marry the first mouth."], ["Limbs", "Add tiny arms or feet.", "Keep them secondary."], ["Clean line", "Lower sketch opacity and redraw.", "Undo messy strokes."], ["Color pass", "Base color, one shadow, one highlight.", "Stop early."]]],
      slow: ["Slow: explain every move", [["Warm-up", "Draw the base shape three times.", "Training hand, not masterpiece."], ["Final base", "Pick the friendliest base and enlarge it.", "Bigger is easier."], ["Guides", "Vertical center and low face line.", "Placement over detail."], ["Eye test", "Try dots, sleepy curves, uneven eyes.", "Test before final."], ["Mouth test", "Try smile, frown, O mouth.", "Small mouths carry emotion."], ["Limbs", "C-curves and oval feet only.", "Simple limbs improve faster."], ["Accessory limit", "One accessory only.", "One good detail beats five."], ["Clean", "New layer, slow line pass.", "Keep some charm."], ["Color", "Base, shadow, highlight.", "Stopping is skill."]]],
      study: ["Study: repeat + improve", [["Version 1", "Draw body, face, limbs only.", "Baseline first."], ["Version 2", "Improve only face placement.", "Change one thing."], ["Version 3", "Improve only silhouette.", "Silhouette matters."], ["Pick winner", "Circle clearest version.", "Clarity wins."], ["Final polish", "One shadow, one highlight, one twist.", "Stop before noise."]]],
      iconSheet: ["Icon sheet: 4 tiny versions", [["Four boxes", "Draw four tiny icon squares.", "Small prevents detail overload."], ["A plain", "Body and face only.", "Test idea."], ["B emotion", "Stronger expression.", "Change face only."], ["C twist", "Add one accessory.", "Keep readable."], ["D sticker", "Thicker outline, fewer details.", "Bold shape."], ["Choose", "Redraw clearest version larger.", "Clarity wins."]]],
      polish: ["Polish: clean final pass", [["Silhouette", "Zoom out and simplify edge.", "Remove clutter."], ["Line", "Redraw with confident lines.", "Do not trace every wobble."], ["Face balance", "Move eyes/mouth slightly.", "Small changes matter."], ["Color", "Base, shadow, highlight.", "Avoid too many colors."], ["Final charm", "One detail if still readable.", "Decoration is optional."]]],
      oneShape: ["One-shape-only drill", [["Choose shape", "Use one body shape only.", "No combined forms."], ["Alive face", "Low face and one mouth.", "No limbs yet."], ["Tiny limbs", "Two curves or two ovals.", "Keep small."], ["One mark", "Sparkle, stitch, blush, patch.", "One mark only."]]],
      expressionSheet: ["Expression sheet: 4 faces", [["Four copies", "Same body four times.", "Do not redesign."], ["Happy", "Dots and tiny smile.", "Small mouth."], ["Grumpy-cute", "Flat brows and tiny frown.", "Round body."], ["Spooky-sweet", "Uneven eye or fang.", "Not too spooky."], ["Confused", "One big eye, one small eye.", "Face only."], ["Pick", "Redraw strongest expression larger.", "Fast read wins."]]],
      silhouetteDrill: ["Silhouette drill", [["Three bodies", "Draw three silhouettes, no faces.", "No details."], ["Zoom out", "Pick clearest body.", "Details do not save weak shapes."], ["Face last", "Add simple face to best silhouette.", "Keep body."], ["Sticker-safe", "Thicken/simplify edge.", "Strong outer shape."]]],
      accessoryDrill: ["Accessory control drill", [["Plain mascot", "Body, face, limbs only.", "No decoration."], ["Test three", "Bow, patch, sparkle beside it.", "Test off-body."], ["Choose one", "Attach only strongest accessory.", "Avoid noise."], ["Balance", "Do not cover face.", "Face leads emotion."]]],
      colorPass: ["Color pass practice", [["Base", "Fill one main color.", "No shading yet."], ["Accent", "One cheek/accent color.", "Avoid rainbow overload."], ["Shadow", "One clipped shadow.", "One light direction."], ["Highlight", "One shine spot.", "Stop early."]]],
      dailyQuest: ["Daily mascot quest", [["Warm-up", "Draw round, squishy, angular shapes.", "No details."], ["Main", "Use selected subject/emotion/twist.", "Big shape first."], ["Remix", "Change one expression.", "One change only."], ["Name", "Name by mood.", "Names help memory."], ["Note", "Write what improved.", "Reflect small."]]]
    };


    const twists = {
      none: ["No extra twist", "no extra decoration", "Skip decoration this time.", ""],
      sparkle: ["One sparkle", "one little sparkle", "Add one tiny sparkle near the cheek.", '<path class="feature" d="M380 130 L388 150 L408 158 L388 166 L380 186 L372 166 L352 158 L372 150 Z"></path>'],
      hat: ["Tiny hat", "a tiny hat", "Add a tiny hat; do not cover the face.", '<path class="feature" d="M220 130 L300 130 L285 95 L235 95 Z M210 132 L310 132"></path>'],
      patch: ["Cute patch", "a cute patch", "Add one patch shape on the side.", '<rect class="feature" x="330" y="315" width="45" height="38" rx="10"></rect>'],
      charm: ["Mini charm tag", "a mini charm tag", "Hang a tiny charm from one side.", '<path class="feature" d="M370 335 Q400 365 390 395"></path><path class="feature" d="M390 395 L410 415 L390 435 L370 415 Z"></path>'],
      freckle: ["Dot freckles", "dot freckles", "Add tiny cheek dots.", '<circle class="solid" cx="195" cy="305" r="4"></circle><circle class="solid" cx="207" cy="318" r="4"></circle><circle class="solid" cx="320" cy="305" r="4"></circle><circle class="solid" cx="332" cy="318" r="4"></circle>'],
      bow: ["Tiny bow", "a tiny bow", "Add a bow on one side.", '<path class="feature" d="M198 135 L230 155 L198 175 Z M262 135 L230 155 L262 175 Z"></path>'],
      halo: ["Soft halo", "a soft halo", "Float a halo above the mascot.", '<ellipse class="feature" cx="260" cy="92" rx="58" ry="16"></ellipse>'],
      fang: ["Tiny fang", "a tiny fang", "Add one tiny fang.", '<path class="feature" d="M263 315 L270 332 L277 315"></path>'],
      glow: ["Glow mark", "a glow mark", "Add one soft glow dash.", '<path class="feature" d="M118 190 Q96 176 82 152 M405 190 Q426 174 440 150"></path>'],
      ribbon: ["Little ribbon tail", "a little ribbon tail", "Add a small ribbon behind one side.", '<path class="feature" d="M355 350 L425 382 L380 404 L425 435 L350 405"></path>'],
      stitches: ["Simple stitches", "simple stitches", "Add three stitch marks.", '<path class="feature" d="M154 230 L176 242 M148 275 L172 282 M154 318 L176 310"></path>'],
      leaf: ["Tiny leaf", "a tiny leaf", "Add one leaf sprout.", '<path class="feature" d="M260 132 C260 102 292 94 312 112 C288 118 272 128 260 132 Z"></path>'],
      starCheek: ["Star cheek", "a star cheek", "Add one star cheek.", '<path class="feature" d="M202 295 L207 306 L219 310 L207 314 L202 326 L197 314 L185 310 L197 306 Z"></path>'],
      button: ["Button cheek", "a button cheek", "Add one button cheek.", '<circle class="feature" cx="203" cy="305" r="16"></circle><circle class="solid" cx="198" cy="303" r="3"></circle><circle class="solid" cx="208" cy="307" r="3"></circle>'],
      teardrop: ["Tiny teardrop", "a tiny teardrop", "Add one teardrop.", '<path class="feature" d="M320 278 C335 295 335 312 320 318 C305 312 305 295 320 278 Z"></path>'],
      bandage: ["Tiny bandage", "a tiny bandage", "Add a small bandage.", '<rect class="feature" x="330" y="285" width="55" height="24" rx="10"></rect><path class="feature" d="M350 292 L365 307 M365 292 L350 307"></path>'],
      crown: ["Tiny crown", "a tiny crown", "Add a three-point crown.", '<path class="feature" d="M220 135 L240 100 L260 135 L280 100 L300 135 Z"></path>'],
      cape: ["Mini cape", "a mini cape", "Add one small cape behind one side.", '<path class="feature" d="M165 245 C110 285 125 370 190 390"></path>'],
      wings: ["Little wings", "little wings", "Add tiny wing curves.", '<path class="feature" d="M150 270 C100 230 92 310 142 320 M370 270 C420 230 428 310 378 320"></path>'],
      antenna: ["Antennae", "antennae", "Add two antenna curves.", '<path class="feature" d="M230 145 Q210 100 180 95 M290 145 Q310 100 340 95"></path>'],
      question: ["Question mark charm", "a question mark charm", "Add a tiny question charm.", '<path class="feature" d="M365 225 C385 205 420 218 410 248 C405 264 385 267 385 285"></path><circle class="solid" cx="385" cy="310" r="6"></circle>'],
      moon: ["Moon mark", "a moon mark", "Add one crescent mark.", '<path class="feature" d="M350 292 C330 280 330 330 350 318 C338 312 338 298 350 292 Z"></path>'],
      heart: ["Heart patch", "a heart patch", "Add one heart patch.", '<path class="feature" d="M205 292 C190 275 165 292 180 315 L205 340 L230 315 C245 292 220 275 205 292 Z"></path>'],
      glasses: ["Round glasses", "round glasses", "Add round glasses.", '<circle class="feature" cx="225" cy="265" r="25"></circle><circle class="feature" cx="295" cy="265" r="25"></circle><path class="feature" d="M250 265 L270 265"></path>'],
      scarf: ["Tiny scarf", "a tiny scarf", "Add a scarf band.", '<path class="feature" d="M195 338 L325 338 M285 338 L330 380"></path>'],
      paint: ["Paint drip", "a paint drip", "Add one rounded paint drip.", '<path class="feature" d="M330 160 C345 195 325 210 338 240 C358 215 365 185 350 160"></path>'],
      shine: ["Glossy shine spot", "a glossy shine spot", "Add one oval shine.", '<ellipse class="feature" cx="210" cy="190" rx="28" ry="12" transform="rotate(-25 210 190)"></ellipse>'],
      thread: ["Holographic thread stitch", "a holographic thread stitch", "Add a dashed edge stitch.", '<path class="feature" d="M155 210 L175 225 M150 250 L175 260 M155 292 L178 292 M165 330 L185 315"></path>'],
      raindrop: ["Raindrop bead", "a raindrop bead", "Add one raindrop bead.", '<path class="feature" d="M385 220 C405 248 405 275 385 285 C365 275 365 248 385 220 Z"></path>'],
      sprout: ["Sprout tuft", "a sprout tuft", "Add a sprout tuft.", '<path class="feature" d="M260 145 L260 105 M260 112 C235 90 210 108 220 130 M260 112 C285 90 310 108 300 130"></path>'],
      zipper: ["Tiny zipper", "a tiny zipper", "Add a short zipper line on one side.", '<path class="feature" d="M350 220 L350 315 M340 235 L360 235 M340 255 L360 255 M340 275 L360 275 M340 295 L360 295"></path>'],
      safetyPin: ["Safety pin", "a safety pin", "Add one tiny safety pin detail.", '<path class="feature" d="M350 230 C390 230 390 285 350 285 C320 285 320 245 350 245 M350 245 L380 275"></path>'],
      bell: ["Little bell", "a little bell", "Add a small bell charm.", '<path class="feature" d="M365 350 C365 320 405 320 405 350 L415 380 L355 380 Z"></path><circle class="solid" cx="385" cy="390" r="6"></circle>'],
      flowerPin: ["Flower pin", "a flower pin", "Add one small flower pin.", '<circle class="feature" cx="360" cy="275" r="10"></circle><circle class="feature" cx="345" cy="275" r="9"></circle><circle class="feature" cx="375" cy="275" r="9"></circle><circle class="feature" cx="360" cy="260" r="9"></circle><circle class="feature" cx="360" cy="290" r="9"></circle>'],
      brokenHeart: ["Broken heart patch", "a broken heart patch", "Add a tiny broken heart patch.", '<path class="feature" d="M205 292 C190 275 165 292 180 315 L205 340 L230 315 C245 292 220 275 205 292 Z M205 292 L195 310 L212 320 L202 340"></path>'],
      gumdropShine: ["Gumdrop shine", "a gumdrop shine", "Add a fat candy shine spot.", '<ellipse class="feature" cx="220" cy="190" rx="35" ry="14" transform="rotate(-25 220 190)"></ellipse><ellipse class="feature" cx="190" cy="220" rx="16" ry="7" transform="rotate(-25 190 220)"></ellipse>'],
      ghostWisp: ["Ghost wisp", "a ghost wisp", "Add one tiny floating ghost wisp.", '<path class="feature" d="M390 175 C370 150 405 125 420 155 C435 185 390 190 405 220"></path>'],
      threadLoop: ["Thread loop", "a thread loop", "Add a loose thread loop.", '<path class="feature" d="M150 235 C100 210 100 280 150 260 C190 245 170 210 140 220"></path>'],
      tinyBoots: ["Tiny boots", "tiny boots", "Add two tiny boot shapes at the bottom.", '<path class="feature" d="M175 420 L220 420 L220 445 L165 445 Z M300 420 L345 420 L355 445 L300 445 Z"></path>'],
      oneMitten: ["One mitten", "one mitten", "Add one mitten hand.", '<path class="feature" d="M115 300 C90 275 110 245 140 265 C155 285 145 315 115 300 Z"></path>'],
      blanket: ["Sleepy blanket", "a sleepy blanket", "Add a small blanket fold.", '<path class="feature" d="M155 350 C220 325 300 375 365 345 L365 405 L155 405 Z"></path>'],
      peelCorner: ["Sticker peel corner", "a sticker peel corner", "Add a small peeled corner.", '<path class="feature" d="M335 160 L390 160 L390 215 C365 190 350 175 335 160 Z"></path>'],
      waxSeal: ["Wax seal", "a wax seal", "Add a tiny wax seal stamp.", '<circle class="feature" cx="355" cy="315" r="24"></circle><path class="feature" d="M345 315 L365 315 M355 305 L355 325"></path>'],
      crescentBrow: ["Crescent brow", "a crescent brow", "Add one crescent eyebrow accent.", '<path class="feature" d="M205 225 C225 205 255 215 265 235"></path>'],
      mismatchedButtons: ["Mismatched buttons", "mismatched buttons", "Add two different button details.", '<circle class="feature" cx="205" cy="305" r="14"></circle><rect class="feature" x="315" y="292" width="28" height="28" rx="8"></rect>'],
      tinyBackpack: ["Tiny backpack", "a tiny backpack", "Add a small backpack shape behind one side.", '<path class="feature" d="M145 230 L95 250 L95 350 L145 365"></path><path class="feature" d="M105 270 L135 270"></path>'],
      bowtie: ["Bowtie", "a bowtie", "Add a tiny bowtie under the mouth.", '<path class="feature" d="M230 330 L260 345 L230 360 Z M290 330 L260 345 L290 360 Z"></path>'],
      floatingStar: ["Floating mini star", "a floating mini star", "Add a tiny floating star.", '<path class="feature" d="M105 150 L112 170 L134 170 L116 182 L123 204 L105 190 L87 204 L94 182 L76 170 L98 170 Z"></path>'],
      blushStripe: ["Blush stripes", "blush stripes", "Add two small cheek stripes.", '<path class="feature" d="M180 300 L205 292 M315 292 L340 300"></path>'],
      tinySatchel: ["Tiny satchel", "a tiny satchel", "Add a little side bag.", '<path class="feature" d="M370 320 L425 325 L420 385 L365 380 Z M380 320 C385 290 410 292 415 325"></path>']

    };


    const palettes = {
      auto: { label: "Auto", colors: [] },
      gummyHalo: { label: "Gummy Halo Morning", colors: ["#F27BA6", "#FFB7D0", "#FFF7FB", "#8EDAF7", "#D7C4F4"] },
      rainthread: { label: "Rainthread Veil", colors: ["#B97195", "#8FA79D", "#8EBFD2", "#F3F0F2", "#BFAFD0", "#6F6870"] },
      bleedingHope: { label: "Bleeding Hope Afterglow", colors: ["#140F18", "#221928", "#E785B3", "#74D6F7", "#C9526E", "#F8F2F8", "#7D62A8"] },
      gummySky: { label: "Mushy Gummybear Sky", colors: ["#FF8FBA", "#FFD1E5", "#AEE7FF", "#FFF5C8", "#BDA7FF"] },
      rainGrass: { label: "Clouded Raindrop Grass", colors: ["#DCE8E5", "#9DC8B2", "#8EDAF7", "#F7F6FB", "#7D6D79", "#CDE7D8"] },
      cutGrin: { label: "Cut-Grin Candy", colors: ["#F25787", "#352733", "#FFF7FB", "#FFD166", "#8EDAF7"] },
      holoThread: { label: "Holographic Thread", colors: ["#D7C4F4", "#8EDAF7", "#F27BA6", "#FDEEF5", "#9DC8B2", "#FFFFFF"] },
      bleedingBeauty: { label: "Bleeding Beauty", colors: ["#D95A72", "#F27BA6", "#FFF7FB", "#7D62A8", "#140F18", "#F8F2F8"] },
      ghostCandy: { label: "Ghost Candy", colors: ["#F8F2F8", "#B8A9B8", "#74D6F7", "#E785B3", "#221928", "#7D62A8"] },
      blackberry: { label: "Blackberry Lilac Luxe", colors: ["#140F18", "#2D2333", "#B97195", "#D7C4F4", "#F8F2F8", "#C9A8FF", "#74D6F7"] },
      strawberry: { label: "Strawberry Pistachio", colors: ["#FFB7D0", "#F27BA6", "#CDE7D8", "#9DC8B2", "#FFF7E8"] },
      storm: { label: "Storm Cloud Soft", colors: ["#2D3A4A", "#8EBFD2", "#DDDDE2", "#F3F0F2", "#FFE8A3", "#6F6870"] },
      luxury: { label: "Tiny Luxury Mascot", colors: ["#140F18", "#F8F2F8", "#E785B3", "#D6B96A", "#7D62A8"] },
      beach: { label: "Beach Trinket", colors: ["#8EDAF7", "#FDEEF5", "#F3D9B1", "#9DC8B2", "#FFF7FB", "#B97195"] }
    };


    const flavors = {
      "": "No flavor modifier",
      gummy: "with gummy-soft edges",
      rain: "with rainwashed softness",
      stitched: "with stitched details",
      hope: "with a hopeful glow",
      haunted: "with tiny haunted sweetness",
      plush: "with plush toy softness",
      sticker: "with sticker-like clarity",
      holo: "with holographic thread accents",
      candy: "with candy shine",
      cloudy: "with cloudy pastel mood",
      bandage: "with soft bandage details",
      moon: "with a moonlit sparkle",
      story: "with vintage storybook charm",
      eerie: "with slightly eerie cuteness",
      autumn: "with cozy autumn softness",
      glossy: "with glossy app-icon polish",
      bedtime: "with sleepy bedtime softness",
      chaos: "with cheerful chaos energy"
    };


    const blueprintOptions = {
      autoSubject: "Auto subject guide",
      classic: "Classic construction",
      bodyFirst: "Body-first tracing",
      faceMap: "Face placement map",
      limbMap: "Tiny limb map",
      stickerSafe: "Sticker-safe boundary",
      symmetry: "Symmetry helper",
      iconGrid: "Icon grid helper",
      expressionZones: "Expression zones",
      accessoryZone: "Accessory-safe zone",
      shadowMap: "Simple shadow map",
      fourPanel: "Four-step panel guide",
      worksheet: "Printable worksheet layout",
      plushBody: "Plush body guide",
      fruitSlice: "Fruit body guide",
      potionBottle: "Potion bottle guide",
      cloudPuff: "Cloud puff guide",
      robotGrid: "Robot grid guide",
      ghostDrape: "Ghost drape guide",
      gemFacet: "Gem facet guide",
      letterBuild: "Letter build guide",
      numberBuild: "Number build guide",
      badgeEmblem: "Badge emblem guide",
      weatherSymbol: "Weather symbol guide",
      shellSpiral: "Shell curve guide",
      aquaticFin: "Aquatic fin guide",
      deviceScreen: "Device screen guide",
      clothingFold: "Clothing fold guide",
      musicStem: "Music stem guide",
      wandArc: "Magic object guide",
      orbitRing: "Celestial orbit guide",
      packageFold: "Package fold guide",
      furnitureBuild: "Furniture build guide",
      gardenPot: "Garden pot guide",
      creatureHorn: "Creature horn guide",
      logoAxis: "Logo axis guide"
    };


    const drawOrders = {
      simple: ["Simple order", [
        ["Body", "Draw the one big shape.", "Do not draw eyes yet.", "Guide / rough sketch layer"],
        ["Guide", "Add a vertical center and low face line.", "Do not decorate the guide.", "Same sketch layer"],
        ["Face", "Place eyes first, then mouth.", "Do not add limbs until face works.", "Face test layer"],
        ["Limbs", "Add tiny arms or feet with simple curves.", "Do not make them large.", "Limb sketch layer"],
        ["Polish", "Clean line, flat color, one shadow, one shine.", "Do not over-render.", "Line / color / shadow layers"]
      ]],
      extraGuided: ["Extra guided: draw this first", [
        ["Body only", "Spend one minute on the outer silhouette.", "No face, no limbs, no twist.", "Rough shape layer"],
        ["Best body", "Redraw the body once and pick the clearer version.", "Do not keep both versions.", "Second sketch layer"],
        ["Face map", "Draw a low face box and place eyes inside it.", "Do not place the face high.", "Guide layer"],
        ["Expression", "Try two mouths next to the mascot before choosing.", "Do not settle instantly.", "Face test layer"],
        ["Attach", "Add tiny limbs and one twist after the face works.", "Do not cover the face.", "Detail layer"],
        ["Clean", "Lower sketch opacity and redraw slowly.", "Do not trace every wobble.", "Clean line layer"]
      ]],
      traceThenHide: ["Trace then hide guide", [
        ["Screenshot", "Screenshot or save the blueprint.", "Do not redraw from memory yet.", "Photo import"],
        ["Import", "Place it in Procreate and set opacity to 20–30%.", "Do not draw on the guide layer.", "Guide layer"],
        ["Trace body", "Trace only the outer shape first.", "Do not trace details yet.", "Sketch layer above"],
        ["Trace face", "Add face and limbs on the sketch layer.", "Do not over-copy the guide.", "Sketch layer"],
        ["Hide guide", "Turn off the guide and check readability.", "Do not color before checking.", "Layer visibility check"],
        ["Finish", "Clean line, color, shadow, highlight.", "Stop after one shadow.", "Final layers"]
      ]],
      iconFirst: ["Icon-first order", [
        ["Icon box", "Draw inside a small square.", "Do not use the whole canvas.", "Icon boundary layer"],
        ["Silhouette", "Make the outside shape readable at tiny size.", "No facial details yet.", "Rough icon layer"],
        ["Face", "Add the simplest possible face.", "Do not add tiny eyelashes or clutter.", "Face layer"],
        ["Remove", "Delete anything that disappears when zoomed out.", "Do not protect weak details.", "Cleanup pass"],
        ["Enlarge", "Redraw the winning tiny icon bigger.", "Do not enlarge a cluttered version.", "Final sketch layer"]
      ]],
      worksheet: ["Worksheet order", [
        ["Box 1", "Draw body only.", "No face.", "Worksheet box 1"],
        ["Box 2", "Draw body plus face guide.", "No decoration.", "Worksheet box 2"],
        ["Box 3", "Add eyes, mouth, limbs.", "One expression only.", "Worksheet box 3"],
        ["Box 4", "Add one tiny twist.", "No second accessory.", "Worksheet box 4"],
        ["Final", "Redraw the clean version larger.", "Do not skip the redraw.", "Final layer"]
      ]]
    };


    const aiModes = {
      simplify: "Make it easier",
      explain: "Explain like I am brand new",
      variation: "Give a similar variation",
      stepByStep: "Break into smaller steps",
      mistakes: "Tell me what mistakes to avoid",
      procreateLayers: "Focus on Procreate layers",
      blueprint: "Make the blueprint clearer",
      critique: "Critique my idea gently",
      cozyPlus: "Make it more creative but still easy",
      practiceDrill: "Turn it into a practice drill",
      drawAlong: "Make it a draw-along script",
      fixAwkward: "Help fix awkward proportions",
      expressionCoach: "Coach the expression only",
      silhouetteCoach: "Coach the silhouette only",
      colorCoach: "Suggest beginner-friendly colors",
      makeWorksheet: "Make it feel like a worksheet"
    };



    const shadeStyles = {
      softPlush: "Soft Plush",
      stickerShine: "Sticker Shine",
      gummyGloss: "Gummy Gloss",
      painterlySoft: "Painterly Soft",
      flatIcon: "Flat Icon",
      spookyGlow: "Spooky Glow",
      velvetShadow: "Velvet Shadow",
      rainyMist: "Rainy Mist"
    };


    const lightDirections = {
      topLeft: "Top Left",
      topRight: "Top Right",
      frontSoft: "Front Soft",
      underGlow: "Under Glow",
      backRim: "Back Rim Light"
    };


    const shadeIntensities = {
      tinyShade: "Tiny Shade",
      softShade: "Soft Shade",
      fullCute: "Full Cute Polish",
      iconPolish: "Icon Polish",
      atmospheric: "Atmospheric"
    };


    const shadeOutputTypes = {
      stepByStep: "Step-by-step",
      mapOnly: "Map only",
      layersOnly: "Procreate layers"
    };


    const styleRecipes = [
      "Soft sticker: rounded line, one blush mark, one pale shadow.",
      "Tiny app icon: big silhouette, simple face, no tiny details.",
      "Storybook doodle: slightly wobbly outline, warm color, tiny sparkle.",
      "Plush toy: round corners, small face, soft shadow under the body.",
      "Badge mascot: strong outside shape, centered face, one symbol.",
      "Rainthread plush: muted surface, misty edge, tiny stitched accent.",
      "Gummy halo: candy shine, soft outline, hopeful glow."
    ];


    const quests = ["Zoom out. Can you still tell what it is?", "Use only one accessory. Make it count.", "Redraw the body shape once, then pick the better one.", "Try three mouths before choosing.", "Hide the sketch layer and check the silhouette."];

    const praises = ["Messy first sketch allowed. Clean line comes later.", "Readable beats perfect.", "Move the face lower before redrawing everything.", "Tiny arms are powerful. Avoid noodle chaos.", "Stop after one shadow. Future you can over-render later."];

    const remixIdeas = ["Change the mouth only.", "Move the eyes lower.", "Tilt the body but keep the face straight.", "Swap only the accessory.", "Make a tiny icon version with fewer lines."];


    const EMOTION_BLUEPRINT_PASS_1 = [
      "shy",
      "happy",
      "sleepy",
      "grumpy",
      "spooky",
      "sassy",
      "nervous",
      "proud",
      "dreamy",
      "mischievous",
      "dramatic",
      "calm",
      "confused",
      "angryTiny",
      "sadHopeful",
      "delightedShy",
      "gloomySweet",
      "softSuspicious",
      "hauntedHappy",
      "chaoticSoft",
      "bashfulProud",
      "braveScared",
      "jealousCute",
      "lonelySparkly",
      "feralCute",
      "meltyHappy",
      "embarrassedBrave",
      "sleepyMischief",
      "anxiousProud",
      "hopefulGrumpy",
      "bashfulChaotic",
      "smugCute",
      "timidMagical",
      "dramaticSleepy",
      "woundedSparkly",
      "overexcitedSoft",
      "suspiciousHappy",
      "gloomyGlam",
      "lonelyBrave",
      "tenderFeral",
      "eerieCalm",
      "gigglyNervous",
      "softVillain",
      "rainyHopeful",
      "cursedAdorable",
      "seriousTiny",
    ];


    const beginnerFlowSteps = [
      { title: "Pick", body: "Generate or choose a mascot lesson. Do not edit every option first." },
      { title: "Blueprint", body: "Open the Trace Guide and study the largest shape before drawing." },
      { title: "Body", body: "Draw the outside silhouette only. No face yet." },
      { title: "Face", body: "Place the face low and keep the mouth tiny." },
      { title: "Twist", body: "Add one tiny twist using its placement guide." },
      { title: "Shade", body: "Use Shade Lab: one shadow, one shine, stop early." },
      { title: "Save", body: "Save to Stash, then redraw one focused Version 2." }
    ];


    const blueprintVariants = {
      simple: "Simple",
      cute: "Cute",
      icon: "Icon",
      plush: "Plush",
      dynamic: "Dynamic"
    };


    const blueprintLayerState = {
      body: true,
      face: true,
      emotion: true,
      twist: true
    };


    const subjectPacks = {
      all: "All subjects",
      snack: "Snack Pack",
      object: "Object Pack",
      magic: "Magic Pack",
      softMonster: "Soft Monster Pack",
      logo: "Logo Pack",
      shape: "Shape Pack",
      nature: "Nature Pack",
      tech: "Tech Pack",
      cozyHome: "Cozy Home Pack"
    };


    const subjectPackMap = {
      all: [],
      snack: ["food", "fruit", "vegetable", "dessert", "breakfast", "candy", "drink", "sauce"],
      object: ["object", "stationery", "household", "package", "device", "book", "tool", "artSupply"],
      magic: ["potion", "gem", "magicObject", "celestialObject", "star", "zodiac"],
      softMonster: ["ghost", "creature", "tinyMonster", "plushKeychain", "toy"],
      logo: ["icon", "sticker", "badge", "logoMark", "emoji", "abstractShape", "circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack"],
      shape: ["abstractShape", "circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack", "logoMark", "badge", "icon", "sticker"],
      nature: ["plant", "flower", "garden", "cloud", "weatherIcon", "bug", "shell", "aquatic"],
      tech: ["robot", "device", "icon", "logoMark"],
      cozyHome: ["household", "furniture", "book", "drink", "clothing", "accessory"]
    };


    const surpriseTypes = {
      softBeginner: "Soft Beginner",
      weirdCute: "Weird Cute",
      spookySweet: "Spooky-Sweet",
      iconReady: "Icon-Ready",
      paletteFirst: "Palette-First",
      blueprintFirst: "Blueprint-First",
      skillDrill: "Skill Drill",
      chaosButton: "Chaos Button"
    };


    const sessionTimers = {
      none: "No timer",
      five: "5 minute sketch",
      ten: "10 minute lesson",
      twenty: "20 minute session"
    };


    const timerPlans = {
      none: "No timer selected. Follow the guided steps at your own pace.",
      five: "5 min: 1m body, 1m face, 1m limbs/twist, 1m clean line, 1m color note.",
      ten: "10 min: 2m body, 2m face, 2m limbs/twist, 2m clean line, 2m color pass.",
      twenty: "20 min: 4m body tests, 4m face/expression, 4m limbs/twist, 4m clean line, 4m color/polish."
    };


    const emotionSeedData = [{"key": "happy", "label": "Happy", "family": "simple/core", "fill": "#FFE680", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Happy eye design: dot", "browStyle": "Happy brow logic: soft or minimal", "mouthStyle": "Happy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Happy accent: sparkle", "posture": "Happy posture: centered/expressive", "vibe": "Happy — simple/core emotional atmosphere", "differenceRule": "Happy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Happy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Happy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sleepy", "label": "Sleepy", "family": "simple/core", "fill": "#C7D8FF", "eye": "sleepy", "mouth": "smile", "accent": "z", "faceHeight": "low", "eyeStyle": "Sleepy eye design: sleepy", "browStyle": "Sleepy brow logic: soft or minimal", "mouthStyle": "Sleepy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Sleepy accent: z", "posture": "Sleepy posture: tucked/low", "vibe": "Sleepy — simple/core emotional atmosphere", "differenceRule": "Sleepy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sleepy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sleepy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "excited", "label": "Excited", "family": "simple/core", "fill": "#FFE066", "eye": "star", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Excited eye design: star", "browStyle": "Excited brow logic: arched/lifted", "mouthStyle": "Excited mouth design: smile", "blushStyle": "small soft blush", "accentText": "Excited accent: sparkle", "posture": "Excited posture: lifted/bouncy", "vibe": "Excited — simple/core emotional atmosphere", "differenceRule": "Excited has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Excited by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Excited: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "curious", "label": "Curious", "family": "simple/core", "fill": "#BFE8FF", "eye": "wide", "mouth": "smile", "accent": "question", "faceHeight": "middle", "eyeStyle": "Curious eye design: wide", "browStyle": "Curious brow logic: arched/lifted", "mouthStyle": "Curious mouth design: smile", "blushStyle": "small soft blush", "accentText": "Curious accent: question", "posture": "Curious posture: centered/expressive", "vibe": "Curious — simple/core emotional atmosphere", "differenceRule": "Curious has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Curious by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Curious: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "surprised", "label": "Surprised", "family": "simple/core", "fill": "#FFD6A5", "eye": "wide", "mouth": "o", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Surprised eye design: wide", "browStyle": "Surprised brow logic: arched/lifted", "mouthStyle": "Surprised mouth design: o", "blushStyle": "small soft blush", "accentText": "Surprised accent: sparkle", "posture": "Surprised posture: centered/expressive", "vibe": "Surprised — simple/core emotional atmosphere", "differenceRule": "Surprised has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Surprised by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Surprised: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "embarrassed", "label": "Embarrassed", "family": "simple/core", "fill": "#FFC6C7", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Embarrassed eye design: dot", "browStyle": "Embarrassed brow logic: soft or minimal", "mouthStyle": "Embarrassed mouth design: smile", "blushStyle": "wide blush", "accentText": "Embarrassed accent: sparkle", "posture": "Embarrassed posture: centered/expressive", "vibe": "Embarrassed — simple/core emotional atmosphere", "differenceRule": "Embarrassed has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Embarrassed by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Embarrassed: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "determined", "label": "Determined", "family": "simple/core", "fill": "#FFCF8A", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Determined eye design: dot", "browStyle": "Determined brow logic: soft or minimal", "mouthStyle": "Determined mouth design: smile", "blushStyle": "small soft blush", "accentText": "Determined accent: sparkle", "posture": "Determined posture: centered/expressive", "vibe": "Determined — simple/core emotional atmosphere", "differenceRule": "Determined has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Determined by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Determined: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "cozy", "label": "Cozy", "family": "simple/core", "fill": "#FFD8A8", "eye": "sleepy", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Cozy eye design: sleepy", "browStyle": "Cozy brow logic: soft or minimal", "mouthStyle": "Cozy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Cozy accent: sparkle", "posture": "Cozy posture: centered/expressive", "vibe": "Cozy — simple/core emotional atmosphere", "differenceRule": "Cozy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Cozy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Cozy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "silly", "label": "Silly", "family": "simple/core", "fill": "#BFF7D2", "eye": "wink", "mouth": "tongue", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Silly eye design: wink", "browStyle": "Silly brow logic: soft or minimal", "mouthStyle": "Silly mouth design: tongue", "blushStyle": "small soft blush", "accentText": "Silly accent: sparkle", "posture": "Silly posture: centered/expressive", "vibe": "Silly — simple/core emotional atmosphere", "differenceRule": "Silly has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Silly by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Silly: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "shy", "label": "Shy", "family": "cute mixed", "fill": "#FFD7E8", "eye": "wink", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Shy eye design: wink", "browStyle": "Shy brow logic: soft or minimal", "mouthStyle": "Shy mouth design: smile", "blushStyle": "wide blush", "accentText": "Shy accent: sparkle", "posture": "Shy posture: tucked/low", "vibe": "Shy — cute mixed emotional atmosphere", "differenceRule": "Shy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Shy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Shy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "grumpy-cute", "label": "Grumpy Cute", "family": "cute mixed", "fill": "#FFC2A6", "eye": "dot", "mouth": "frown", "accent": "anger", "faceHeight": "middle", "eyeStyle": "Grumpy Cute eye design: dot", "browStyle": "Grumpy Cute brow logic: soft or minimal", "mouthStyle": "Grumpy Cute mouth design: frown", "blushStyle": "small soft blush", "accentText": "Grumpy Cute accent: anger", "posture": "Grumpy Cute posture: centered/expressive", "vibe": "Grumpy Cute — cute mixed emotional atmosphere", "differenceRule": "Grumpy Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Grumpy Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Grumpy Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "nervous-cute", "label": "Nervous Cute", "family": "cute mixed", "fill": "#CFF7EF", "eye": "wide", "mouth": "smile", "accent": "sweat", "faceHeight": "middle", "eyeStyle": "Nervous Cute eye design: wide", "browStyle": "Nervous Cute brow logic: arched/lifted", "mouthStyle": "Nervous Cute mouth design: smile", "blushStyle": "small soft blush", "accentText": "Nervous Cute accent: sweat", "posture": "Nervous Cute posture: centered/expressive", "vibe": "Nervous Cute — cute mixed emotional atmosphere", "differenceRule": "Nervous Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Nervous Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Nervous Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "proud-tiny", "label": "Proud Tiny", "family": "cute mixed", "fill": "#FFD1A8", "eye": "dot", "mouth": "smile", "accent": "crown", "faceHeight": "low", "eyeStyle": "Proud Tiny eye design: dot", "browStyle": "Proud Tiny brow logic: soft or minimal", "mouthStyle": "Proud Tiny mouth design: smile", "blushStyle": "small soft blush", "accentText": "Proud Tiny accent: crown", "posture": "Proud Tiny posture: centered/expressive", "vibe": "Proud Tiny — cute mixed emotional atmosphere", "differenceRule": "Proud Tiny has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Proud Tiny by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Proud Tiny: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "confused-cute", "label": "Confused Cute", "family": "cute mixed", "fill": "#FFE3A8", "eye": "dot", "mouth": "smile", "accent": "question", "faceHeight": "middle", "eyeStyle": "Confused Cute eye design: dot", "browStyle": "Confused Cute brow logic: soft or minimal", "mouthStyle": "Confused Cute mouth design: smile", "blushStyle": "small soft blush", "accentText": "Confused Cute accent: question", "posture": "Confused Cute posture: centered/expressive", "vibe": "Confused Cute — cute mixed emotional atmosphere", "differenceRule": "Confused Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Confused Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Confused Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "tiny-angry", "label": "Tiny Angry", "family": "cute mixed", "fill": "#FFB5A8", "eye": "dot", "mouth": "frown", "accent": "anger", "faceHeight": "low", "eyeStyle": "Tiny Angry eye design: dot", "browStyle": "Tiny Angry brow logic: soft or minimal", "mouthStyle": "Tiny Angry mouth design: frown", "blushStyle": "small soft blush", "accentText": "Tiny Angry accent: anger", "posture": "Tiny Angry posture: centered/expressive", "vibe": "Tiny Angry — cute mixed emotional atmosphere", "differenceRule": "Tiny Angry has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Tiny Angry by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Tiny Angry: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "smugCute", "label": "Smug Cute", "family": "cute mixed", "fill": "#F7C8FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Smug Cute eye design: half", "browStyle": "Smug Cute brow logic: soft or minimal", "mouthStyle": "Smug Cute mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Smug Cute accent: sparkle", "posture": "Smug Cute posture: centered/expressive", "vibe": "Smug Cute — cute mixed emotional atmosphere", "differenceRule": "Smug Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Smug Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Smug Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "bashfulProud", "label": "Bashful Proud", "family": "cute mixed", "fill": "#FFD0B8", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Bashful Proud eye design: dot", "browStyle": "Bashful Proud brow logic: soft or minimal", "mouthStyle": "Bashful Proud mouth design: smile", "blushStyle": "wide blush", "accentText": "Bashful Proud accent: sparkle", "posture": "Bashful Proud posture: centered/expressive", "vibe": "Bashful Proud — cute mixed emotional atmosphere", "differenceRule": "Bashful Proud has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Bashful Proud by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Bashful Proud: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "gigglyNervous", "label": "Giggly Nervous", "family": "cute mixed", "fill": "#FFE0B8", "eye": "wide", "mouth": "smile", "accent": "sweat", "faceHeight": "middle", "eyeStyle": "Giggly Nervous eye design: wide", "browStyle": "Giggly Nervous brow logic: arched/lifted", "mouthStyle": "Giggly Nervous mouth design: smile", "blushStyle": "small soft blush", "accentText": "Giggly Nervous accent: sweat", "posture": "Giggly Nervous posture: centered/expressive", "vibe": "Giggly Nervous — cute mixed emotional atmosphere", "differenceRule": "Giggly Nervous has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Giggly Nervous by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Giggly Nervous: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "dreamy-sad", "label": "Dreamy Sad", "family": "soft/sad/tender", "fill": "#C9C4FF", "eye": "sleepy", "mouth": "frown", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Dreamy Sad eye design: sleepy", "browStyle": "Dreamy Sad brow logic: soft or minimal", "mouthStyle": "Dreamy Sad mouth design: frown", "blushStyle": "small soft blush", "accentText": "Dreamy Sad accent: tear", "posture": "Dreamy Sad posture: centered/expressive", "vibe": "Dreamy Sad — soft/sad/tender emotional atmosphere", "differenceRule": "Dreamy Sad has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Dreamy Sad by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Dreamy Sad: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sad-hopeful", "label": "Sad Hopeful", "family": "soft/sad/tender", "fill": "#BCD1FF", "eye": "dot", "mouth": "frown", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Sad Hopeful eye design: dot", "browStyle": "Sad Hopeful brow logic: soft or minimal", "mouthStyle": "Sad Hopeful mouth design: frown", "blushStyle": "small soft blush", "accentText": "Sad Hopeful accent: tear", "posture": "Sad Hopeful posture: centered/expressive", "vibe": "Sad Hopeful — soft/sad/tender emotional atmosphere", "differenceRule": "Sad Hopeful has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sad Hopeful by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sad Hopeful: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "gloomySweet", "label": "Gloomy Sweet", "family": "soft/sad/tender", "fill": "#CBBFE8", "eye": "sleepy", "mouth": "frown", "accent": "cloud", "faceHeight": "middle", "eyeStyle": "Gloomy Sweet eye design: sleepy", "browStyle": "Gloomy Sweet brow logic: soft or minimal", "mouthStyle": "Gloomy Sweet mouth design: frown", "blushStyle": "small soft blush", "accentText": "Gloomy Sweet accent: cloud", "posture": "Gloomy Sweet posture: centered/expressive", "vibe": "Gloomy Sweet — soft/sad/tender emotional atmosphere", "differenceRule": "Gloomy Sweet has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Gloomy Sweet by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Gloomy Sweet: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "worriedHopeful", "label": "Worried Hopeful", "family": "soft/sad/tender", "fill": "#C9E3FF", "eye": "wide", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Worried Hopeful eye design: wide", "browStyle": "Worried Hopeful brow logic: arched/lifted", "mouthStyle": "Worried Hopeful mouth design: smile", "blushStyle": "small soft blush", "accentText": "Worried Hopeful accent: sparkle", "posture": "Worried Hopeful posture: centered/expressive", "vibe": "Worried Hopeful — soft/sad/tender emotional atmosphere", "differenceRule": "Worried Hopeful has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Worried Hopeful by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Worried Hopeful: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "lonelyBrave", "label": "Lonely Brave", "family": "soft/sad/tender", "fill": "#AFC9E8", "eye": "dot", "mouth": "smile", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Lonely Brave eye design: dot", "browStyle": "Lonely Brave brow logic: soft or minimal", "mouthStyle": "Lonely Brave mouth design: smile", "blushStyle": "small soft blush", "accentText": "Lonely Brave accent: tear", "posture": "Lonely Brave posture: centered/expressive", "vibe": "Lonely Brave — soft/sad/tender emotional atmosphere", "differenceRule": "Lonely Brave has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Lonely Brave by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Lonely Brave: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "rainyHopeful", "label": "Rainy Hopeful", "family": "soft/sad/tender", "fill": "#BFD8FF", "eye": "dot", "mouth": "smile", "accent": "cloud", "faceHeight": "middle", "eyeStyle": "Rainy Hopeful eye design: dot", "browStyle": "Rainy Hopeful brow logic: soft or minimal", "mouthStyle": "Rainy Hopeful mouth design: smile", "blushStyle": "small soft blush", "accentText": "Rainy Hopeful accent: cloud", "posture": "Rainy Hopeful posture: centered/expressive", "vibe": "Rainy Hopeful — soft/sad/tender emotional atmosphere", "differenceRule": "Rainy Hopeful has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Rainy Hopeful by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Rainy Hopeful: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "dramatic-soft", "label": "Dramatic Soft", "family": "soft/sad/tender", "fill": "#E8C8F7", "eye": "dot", "mouth": "frown", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Dramatic Soft eye design: dot", "browStyle": "Dramatic Soft brow logic: soft or minimal", "mouthStyle": "Dramatic Soft mouth design: frown", "blushStyle": "small soft blush", "accentText": "Dramatic Soft accent: sparkle", "posture": "Dramatic Soft posture: centered/expressive", "vibe": "Dramatic Soft — soft/sad/tender emotional atmosphere", "differenceRule": "Dramatic Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Dramatic Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Dramatic Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "dramaticSleepy", "label": "Dramatic Sleepy", "family": "soft/sad/tender", "fill": "#CFC4F7", "eye": "sleepy", "mouth": "frown", "accent": "z", "faceHeight": "low", "eyeStyle": "Dramatic Sleepy eye design: sleepy", "browStyle": "Dramatic Sleepy brow logic: soft or minimal", "mouthStyle": "Dramatic Sleepy mouth design: frown", "blushStyle": "small soft blush", "accentText": "Dramatic Sleepy accent: z", "posture": "Dramatic Sleepy posture: tucked/low", "vibe": "Dramatic Sleepy — soft/sad/tender emotional atmosphere", "differenceRule": "Dramatic Sleepy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Dramatic Sleepy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Dramatic Sleepy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "spooky-sweet", "label": "Spooky Sweet", "family": "spooky/eerie/cursed", "fill": "#F2ECFF", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Spooky Sweet eye design: dot", "browStyle": "Spooky Sweet brow logic: soft or minimal", "mouthStyle": "Spooky Sweet mouth design: smile", "blushStyle": "small soft blush", "accentText": "Spooky Sweet accent: sparkle", "posture": "Spooky Sweet posture: centered/expressive", "vibe": "Spooky Sweet — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Spooky Sweet has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Spooky Sweet by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Spooky Sweet: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "hauntedHappy", "label": "Haunted Happy", "family": "spooky/eerie/cursed", "fill": "#EDE8FF", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Haunted Happy eye design: dot", "browStyle": "Haunted Happy brow logic: soft or minimal", "mouthStyle": "Haunted Happy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Haunted Happy accent: sparkle", "posture": "Haunted Happy posture: centered/expressive", "vibe": "Haunted Happy — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Haunted Happy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Haunted Happy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Haunted Happy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "eerieCalm", "label": "Eerie Calm", "family": "spooky/eerie/cursed", "fill": "#CFEDE4", "eye": "sleepy", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Eerie Calm eye design: sleepy", "browStyle": "Eerie Calm brow logic: soft or minimal", "mouthStyle": "Eerie Calm mouth design: smile", "blushStyle": "small soft blush", "accentText": "Eerie Calm accent: sparkle", "posture": "Eerie Calm posture: centered/expressive", "vibe": "Eerie Calm — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Eerie Calm has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Eerie Calm by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Eerie Calm: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "cursedAdorable", "label": "Cursed Adorable", "family": "spooky/eerie/cursed", "fill": "#D8C0FF", "eye": "xeye", "mouth": "smile", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Cursed Adorable eye design: xeye", "browStyle": "Cursed Adorable brow logic: soft or minimal", "mouthStyle": "Cursed Adorable mouth design: smile", "blushStyle": "small soft blush", "accentText": "Cursed Adorable accent: sparkle", "posture": "Cursed Adorable posture: centered/expressive", "vibe": "Cursed Adorable — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Cursed Adorable has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Cursed Adorable by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Cursed Adorable: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sicklyCute", "label": "Sickly Cute", "family": "spooky/eerie/cursed", "fill": "#CDEFC7", "eye": "dot", "mouth": "frown", "accent": "sweat", "faceHeight": "low", "eyeStyle": "Sickly Cute eye design: dot", "browStyle": "Sickly Cute brow logic: soft or minimal", "mouthStyle": "Sickly Cute mouth design: frown", "blushStyle": "small soft blush", "accentText": "Sickly Cute accent: sweat", "posture": "Sickly Cute posture: tucked/low", "vibe": "Sickly Cute — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Sickly Cute has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sickly Cute by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sickly Cute: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "softVillain", "label": "Soft Villain", "family": "spooky/eerie/cursed", "fill": "#D7B8FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Soft Villain eye design: half", "browStyle": "Soft Villain brow logic: soft or minimal", "mouthStyle": "Soft Villain mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Soft Villain accent: sparkle", "posture": "Soft Villain posture: centered/expressive", "vibe": "Soft Villain — spooky/eerie/cursed emotional atmosphere", "differenceRule": "Soft Villain has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Soft Villain by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Soft Villain: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "sassy-soft", "label": "Sassy Soft", "family": "chaotic/oddball", "fill": "#E7C7FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Sassy Soft eye design: half", "browStyle": "Sassy Soft brow logic: soft or minimal", "mouthStyle": "Sassy Soft mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Sassy Soft accent: sparkle", "posture": "Sassy Soft posture: centered/expressive", "vibe": "Sassy Soft — chaotic/oddball emotional atmosphere", "differenceRule": "Sassy Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Sassy Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Sassy Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "mischievous-sweet", "label": "Mischievous Sweet", "family": "chaotic/oddball", "fill": "#FFD5E8", "eye": "wink", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Mischievous Sweet eye design: wink", "browStyle": "Mischievous Sweet brow logic: soft or minimal", "mouthStyle": "Mischievous Sweet mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Mischievous Sweet accent: sparkle", "posture": "Mischievous Sweet posture: centered/expressive", "vibe": "Mischievous Sweet — chaotic/oddball emotional atmosphere", "differenceRule": "Mischievous Sweet has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Mischievous Sweet by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Mischievous Sweet: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "chaoticSoft", "label": "Chaotic Soft", "family": "chaotic/oddball", "fill": "#FFD6F3", "eye": "wink", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Chaotic Soft eye design: wink", "browStyle": "Chaotic Soft brow logic: soft or minimal", "mouthStyle": "Chaotic Soft mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Chaotic Soft accent: sparkle", "posture": "Chaotic Soft posture: centered/expressive", "vibe": "Chaotic Soft — chaotic/oddball emotional atmosphere", "differenceRule": "Chaotic Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Chaotic Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Chaotic Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "bashfulChaotic", "label": "Bashful Chaotic", "family": "chaotic/oddball", "fill": "#FFC7F2", "eye": "dot", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Bashful Chaotic eye design: dot", "browStyle": "Bashful Chaotic brow logic: soft or minimal", "mouthStyle": "Bashful Chaotic mouth design: smirk", "blushStyle": "wide blush", "accentText": "Bashful Chaotic accent: sparkle", "posture": "Bashful Chaotic posture: centered/expressive", "vibe": "Bashful Chaotic — chaotic/oddball emotional atmosphere", "differenceRule": "Bashful Chaotic has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Bashful Chaotic by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Bashful Chaotic: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "overexcitedSoft", "label": "Overexcited Soft", "family": "chaotic/oddball", "fill": "#FFD1F0", "eye": "star", "mouth": "smile", "accent": "sparkle", "faceHeight": "high", "eyeStyle": "Overexcited Soft eye design: star", "browStyle": "Overexcited Soft brow logic: arched/lifted", "mouthStyle": "Overexcited Soft mouth design: smile", "blushStyle": "small soft blush", "accentText": "Overexcited Soft accent: sparkle", "posture": "Overexcited Soft posture: lifted/bouncy", "vibe": "Overexcited Soft — chaotic/oddball emotional atmosphere", "differenceRule": "Overexcited Soft has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Overexcited Soft by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Overexcited Soft: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "suspiciousHappy", "label": "Suspicious Happy", "family": "chaotic/oddball", "fill": "#D9F7B8", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Suspicious Happy eye design: half", "browStyle": "Suspicious Happy brow logic: soft or minimal", "mouthStyle": "Suspicious Happy mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Suspicious Happy accent: sparkle", "posture": "Suspicious Happy posture: centered/expressive", "vibe": "Suspicious Happy — chaotic/oddball emotional atmosphere", "differenceRule": "Suspicious Happy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Suspicious Happy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Suspicious Happy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "softSuspicious", "label": "Soft Suspicious", "family": "chaotic/oddball", "fill": "#D8C7FF", "eye": "half", "mouth": "smirk", "accent": "sparkle", "faceHeight": "middle", "eyeStyle": "Soft Suspicious eye design: half", "browStyle": "Soft Suspicious brow logic: soft or minimal", "mouthStyle": "Soft Suspicious mouth design: smirk", "blushStyle": "small soft blush", "accentText": "Soft Suspicious accent: sparkle", "posture": "Soft Suspicious posture: centered/expressive", "vibe": "Soft Suspicious — chaotic/oddball emotional atmosphere", "differenceRule": "Soft Suspicious has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Soft Suspicious by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Soft Suspicious: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "calm-glowy", "label": "Calm Glowy", "family": "magical/glam/strange-pretty", "fill": "#CFF8F2", "eye": "sleepy", "mouth": "smile", "accent": "glow", "faceHeight": "middle", "eyeStyle": "Calm Glowy eye design: sleepy", "browStyle": "Calm Glowy brow logic: soft or minimal", "mouthStyle": "Calm Glowy mouth design: smile", "blushStyle": "small soft blush", "accentText": "Calm Glowy accent: glow", "posture": "Calm Glowy posture: centered/expressive", "vibe": "Calm Glowy — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Calm Glowy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Calm Glowy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Calm Glowy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "timidMagical", "label": "Timid Magical", "family": "magical/glam/strange-pretty", "fill": "#DCCBFF", "eye": "wink", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Timid Magical eye design: wink", "browStyle": "Timid Magical brow logic: soft or minimal", "mouthStyle": "Timid Magical mouth design: smile", "blushStyle": "small soft blush", "accentText": "Timid Magical accent: sparkle", "posture": "Timid Magical posture: tucked/low", "vibe": "Timid Magical — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Timid Magical has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Timid Magical by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Timid Magical: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "gloomyGlam", "label": "Gloomy Glam", "family": "magical/glam/strange-pretty", "fill": "#B8A7D9", "eye": "sleepy", "mouth": "frown", "accent": "cloud", "faceHeight": "middle", "eyeStyle": "Gloomy Glam eye design: sleepy", "browStyle": "Gloomy Glam brow logic: soft or minimal", "mouthStyle": "Gloomy Glam mouth design: frown", "blushStyle": "small soft blush", "accentText": "Gloomy Glam accent: cloud", "posture": "Gloomy Glam posture: centered/expressive", "vibe": "Gloomy Glam — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Gloomy Glam has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Gloomy Glam by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Gloomy Glam: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "woundedSparkly", "label": "Wounded Sparkly", "family": "magical/glam/strange-pretty", "fill": "#F7C7D9", "eye": "dot", "mouth": "frown", "accent": "tear", "faceHeight": "middle", "eyeStyle": "Wounded Sparkly eye design: dot", "browStyle": "Wounded Sparkly brow logic: soft or minimal", "mouthStyle": "Wounded Sparkly mouth design: frown", "blushStyle": "small soft blush", "accentText": "Wounded Sparkly accent: tear", "posture": "Wounded Sparkly posture: centered/expressive", "vibe": "Wounded Sparkly — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Wounded Sparkly has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Wounded Sparkly by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Wounded Sparkly: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "tenderFeral", "label": "Tender Feral", "family": "magical/glam/strange-pretty", "fill": "#FFD1B8", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Tender Feral eye design: dot", "browStyle": "Tender Feral brow logic: soft or minimal", "mouthStyle": "Tender Feral mouth design: smile", "blushStyle": "small soft blush", "accentText": "Tender Feral accent: sparkle", "posture": "Tender Feral posture: centered/expressive", "vibe": "Tender Feral — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Tender Feral has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Tender Feral by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Tender Feral: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "seriousTiny", "label": "Serious Tiny", "family": "magical/glam/strange-pretty", "fill": "#D8D8E8", "eye": "dot", "mouth": "line", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Serious Tiny eye design: dot", "browStyle": "Serious Tiny brow logic: soft or minimal", "mouthStyle": "Serious Tiny mouth design: line", "blushStyle": "small soft blush", "accentText": "Serious Tiny accent: sparkle", "posture": "Serious Tiny posture: centered/expressive", "vibe": "Serious Tiny — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Serious Tiny has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Serious Tiny by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Serious Tiny: clear eyes, clear mouth, one accent, and a simple readable silhouette."}, {"key": "delightedShy", "label": "Delighted Shy", "family": "magical/glam/strange-pretty", "fill": "#FFD9B8", "eye": "dot", "mouth": "smile", "accent": "sparkle", "faceHeight": "low", "eyeStyle": "Delighted Shy eye design: dot", "browStyle": "Delighted Shy brow logic: soft or minimal", "mouthStyle": "Delighted Shy mouth design: smile", "blushStyle": "wide blush", "accentText": "Delighted Shy accent: sparkle", "posture": "Delighted Shy posture: tucked/low", "vibe": "Delighted Shy — magical/glam/strange-pretty emotional atmosphere", "differenceRule": "Delighted Shy has its own expression recipe so it does not collapse into a generic happy/sad mascot.", "practiceTip": "Practice Delighted Shy by drawing the eyes first, then the mouth, then the accent. Keep the face readable before adding decoration.", "examplePrompt": "Draw a beginner-friendly mascot showing Delighted Shy: clear eyes, clear mouth, one accent, and a simple readable silhouette."}];

    const emotionMap = Object.fromEntries(emotionSeedData.map(item => [item.key, {
      label:item.label, family:item.family, svg:emotionSvgFace(item),
      faceHeight:item.faceHeight, eyeStyle:item.eyeStyle, browStyle:item.browStyle, mouthStyle:item.mouthStyle,
      blushStyle:item.blushStyle, accent:item.accentText, posture:item.posture, vibe:item.vibe,
      differenceRule:item.differenceRule, practiceTip:item.practiceTip, examplePrompt:item.examplePrompt
    }]));


    const exactEmotionOverrides = {"happy": {"label": "Happy", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"happy emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFE680\"/>\n  <circle cx=\"32\" cy=\"32\" r=\"22\" fill=\"#FFF1A8\"/>\n  <path d=\"M19 29c2.5-4 7.5-4 10 0\" fill=\"none\" stroke=\"#3E2C18\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M35 29c2.5-4 7.5-4 10 0\" fill=\"none\" stroke=\"#3E2C18\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M22 38c5 7 15 9 22 0\" fill=\"none\" stroke=\"#3E2C18\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle cx=\"18\" cy=\"38\" r=\"3\" fill=\"#FFAF6B\" opacity=\".75\"/>\n  <circle cx=\"47\" cy=\"38\" r=\"3\" fill=\"#FFAF6B\" opacity=\".75\"/>\n  <path d=\"M12 17l3-2 3 2-3 2zM48 13l4-2 4 2-4 3z\" fill=\"#FFFFFF\" opacity=\".9\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "two upward curved closed eyes", "browStyle": "barely lifted cheerful brows", "mouthStyle": "large open smiling arc", "blushStyle": "small warm cheek dots", "accent": "tiny gleams", "posture": "open and lifted", "vibe": "bright, simple, cheerful", "differenceRule": "Different from excited because happy is steady and round, not explosive or high‑energy.", "practiceTip": "Begin with a round face; sketch soft curved eyes and a wide beaming smile, adding a slight blush to capture warmth.", "examplePrompt": "Draw a plush mascot lying in a sunny meadow, eyes closed in delight and beaming a contented smile."}, "sleepy": {"label": "Sleepy", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"sleepy emotion\">\n  <circle cx=\"32\" cy=\"34\" r=\"25\" fill=\"#C7D8FF\"/>\n  <path d=\"M20 31c3 2 6 2 9 0\" fill=\"none\" stroke=\"#2C3A57\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M36 31c3 2 6 2 9 0\" fill=\"none\" stroke=\"#2C3A57\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M29 43c2 1 4 1 6 0\" fill=\"none\" stroke=\"#2C3A57\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M47 13h8l-8 8h8\" fill=\"none\" stroke=\"#6B7FC7\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n  <path d=\"M39 7h6l-6 6h6\" fill=\"none\" stroke=\"#6B7FC7\" stroke-width=\"2.5\" stroke-linejoin=\"round\"/>\n  <ellipse cx=\"32\" cy=\"52\" rx=\"13\" ry=\"3\" fill=\"#8196D9\" opacity=\".22\"/>\n</svg>", "faceHeight": "low", "eyeStyle": "two droopy closed eyes", "browStyle": "absent sleepy brow", "mouthStyle": "tiny flat curve", "blushStyle": "extremely faint", "accent": "Z marks", "posture": "drooping downward", "vibe": "drowsy, quiet, drifting", "differenceRule": "Different from dramaticSleepy because sleepy is plain and calm, not theatrical or exaggerated.", "practiceTip": "Sketch a cozy round face with drooping eyes and a tiny mouth, then add soft ‘Z’ marks to hint at slumber.", "examplePrompt": "Illustrate a small creature curled up in a blanket, its droopy eyes barely open as gentle Z’s float up."}, "excited": {"label": "Excited", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"excited emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFE066\"/>\n  <path d=\"M19 28l4-5 4 5\" fill=\"none\" stroke=\"#3D2A12\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M37 28l4-5 4 5\" fill=\"none\" stroke=\"#3D2A12\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M22 39c5 8 15 9 21 0\" fill=\"none\" stroke=\"#3D2A12\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle cx=\"18\" cy=\"38\" r=\"3.5\" fill=\"#FF8A5B\" opacity=\".75\"/>\n  <circle cx=\"47\" cy=\"38\" r=\"3.5\" fill=\"#FF8A5B\" opacity=\".75\"/>\n  <path d=\"M10 18l4-2 2-4 2 4 4 2-4 2-2 4-2-4z\" fill=\"#FFFFFF\"/>\n  <path d=\"M47 12l3-6 3 6 6 3-6 3-3 6-3-6-6-3z\" fill=\"#FF8DE3\"/>\n</svg>", "faceHeight": "high", "eyeStyle": "two starry triangle eyes", "browStyle": "lifted invisible brows", "mouthStyle": "huge upward smile", "blushStyle": "bright round blush", "accent": "bursting sparkles", "posture": "springing upward", "vibe": "electric, bright, eager", "differenceRule": "Different from happy because excited is explosive and bouncy, not steady or simple.", "practiceTip": "Play with star‑shaped eyes and a big open mouth; add little burst symbols around the head to communicate energy.", "examplePrompt": "Draw a playful mascot leaping up with starry eyes and sparkling bursts, radiating infectious excitement."}, "curious": {"label": "Curious", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"curious emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#BFE8FF\"/>\n  <circle cx=\"24\" cy=\"32\" r=\"4\" fill=\"#26394A\"/>\n  <circle cx=\"42\" cy=\"30\" r=\"5\" fill=\"#26394A\"/>\n  <circle cx=\"25.5\" cy=\"30.5\" r=\"1.2\" fill=\"#FFFFFF\"/>\n  <circle cx=\"43.8\" cy=\"28\" r=\"1.4\" fill=\"#FFFFFF\"/>\n  <path d=\"M18 24c3-3 8-3 11-1\" fill=\"none\" stroke=\"#26394A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M36 21c4-4 9-3 12 1\" fill=\"none\" stroke=\"#26394A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M28 43c3 2 6 2 9 0\" fill=\"none\" stroke=\"#26394A\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M50 13c3 0 5 2 5 5 0 3-3 4-5 6\" fill=\"none\" stroke=\"#6C63FF\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"50\" cy=\"28\" r=\"1.7\" fill=\"#6C63FF\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "one small eye + one larger searching eye", "browStyle": "one raised inquisitive brow", "mouthStyle": "small neutral curve", "blushStyle": "none", "accent": "question mark", "posture": "leaning forward", "vibe": "alert, wondering, interested", "differenceRule": "Different from confused‑cute because curious is engaged and searching, not stuck or unsure.", "practiceTip": "Experiment with asymmetry: draw one eye larger and higher than the other; add a raised brow and a tiny mouth that hints at inquiry.", "examplePrompt": "Create a whimsical creature peering around a corner with one large curious eye and a floating question mark overhead."}, "surprised": {"label": "Surprised", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"surprised emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFD6A5\"/>\n  <circle cx=\"24\" cy=\"30\" r=\"4.5\" fill=\"#3E2A1C\"/>\n  <circle cx=\"40\" cy=\"30\" r=\"4.5\" fill=\"#3E2A1C\"/>\n  <circle cx=\"25.5\" cy=\"28.4\" r=\"1.2\" fill=\"#FFFFFF\"/>\n  <circle cx=\"41.5\" cy=\"28.4\" r=\"1.2\" fill=\"#FFFFFF\"/>\n  <path d=\"M18 22c4-4 9-4 12-1\" fill=\"none\" stroke=\"#3E2A1C\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M34 21c4-3 9-3 12 1\" fill=\"none\" stroke=\"#3E2A1C\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <circle cx=\"32\" cy=\"43\" r=\"4.5\" fill=\"none\" stroke=\"#3E2A1C\" stroke-width=\"3\"/>\n  <path d=\"M11 17l3-2 3 2-3 2zM50 15l4-2 4 2-4 2z\" fill=\"#FFFFFF\" opacity=\".9\"/>\n</svg>", "faceHeight": "high", "eyeStyle": "two wide round eyes", "browStyle": "high lifted brows", "mouthStyle": "small open O mouth", "blushStyle": "faint warm cheeks", "accent": "tiny shock gleams", "posture": "popped upright", "vibe": "startled, open, innocent", "differenceRule": "Different from excited because surprised is frozen and wide‑eyed, not joyful or energetic.", "practiceTip": "Focus on big circles for the eyes and a rounded mouth; keep the brows high and curved to capture that startled look.", "examplePrompt": "Draw a small mascot with huge eyes and a round ‘O’ mouth, as if it’s just found a hidden treasure chest."}, "embarrassed": {"label": "Embarrassed", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"embarrassed emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFC6C7\"/>\n  <path d=\"M19 29c3 2 6 2 9 0\" fill=\"none\" stroke=\"#5A2D35\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M36 29c3 2 6 2 9 0\" fill=\"none\" stroke=\"#5A2D35\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M28 42c3 2 6 2 9 0\" fill=\"none\" stroke=\"#5A2D35\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <ellipse cx=\"18\" cy=\"38\" rx=\"7\" ry=\"4\" fill=\"#FF6F91\" opacity=\".7\"/>\n  <ellipse cx=\"47\" cy=\"38\" rx=\"7\" ry=\"4\" fill=\"#FF6F91\" opacity=\".7\"/>\n  <path d=\"M15 21c3-2 6-2 9 0\" fill=\"none\" stroke=\"#B85B6B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M40 21c3-2 6-2 9 0\" fill=\"none\" stroke=\"#B85B6B\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n  <path d=\"M49 14l1.8 3.5 3.8.5-2.8 2.7.7 3.8-3.5-1.8-3.5 1.8.7-3.8-2.8-2.7 3.8-.5z\" fill=\"#FFF2A8\"/>\n</svg>", "faceHeight": "low", "eyeStyle": "two closed downward curved eyes", "browStyle": "awkwardly lifted brows", "mouthStyle": "small uneasy smile", "blushStyle": "large intense oval blush", "accent": "tiny nervous sparkle", "posture": "shrunk and flushed", "vibe": "flustered, exposed, sweetly awkward", "differenceRule": "Different from shy because embarrassed is hotter and more exposed, while shy is quieter and inward.", "practiceTip": "Use curved lines to close the eyes and slump the brows; overlay big oval blush marks and an uneven smile to show flustered heat.", "examplePrompt": "Draw a bashful creature hiding its face behind its hands, cheeks burning and a tiny smile peeking out."}, "determined": {"label": "Determined", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"determined emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFCF8A\"/>\n  <path d=\"M17 25l13 3\" stroke=\"#3A2416\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <path d=\"M47 25l-13 3\" stroke=\"#3A2416\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n  <circle cx=\"24\" cy=\"33\" r=\"3.5\" fill=\"#3A2416\"/>\n  <circle cx=\"40\" cy=\"33\" r=\"3.5\" fill=\"#3A2416\"/>\n  <path d=\"M25 44c4 3 10 3 14 0\" fill=\"none\" stroke=\"#3A2416\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M11 18l4-2 2-4 2 4 4 2-4 2-2 4-2-4z\" fill=\"#FFFFFF\"/>\n  <path d=\"M48 43l5 3-5 3-3 5-3-5-5-3 5-3 3-5z\" fill=\"#FFE066\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "two focused dot eyes", "browStyle": "strong inward angled brows", "mouthStyle": "firm confident line‑smile", "blushStyle": "none", "accent": "resolve spark", "posture": "forward and braced", "vibe": "focused, sturdy, ready", "differenceRule": "Different from tiny‑angry because determined has controlled focus, not reactive anger.", "practiceTip": "Practice drawing symmetrical eyes under firm angled brows; add a straight mouth and a tiny shine to suggest inner strength.", "examplePrompt": "Design a small hero creature standing upright with a firm grin and a single sparkle of determination in its eye."}, "cozy": {"label": "Cozy", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"cozy emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#FFD8A8\"/>\n  <path d=\"M18 36c8 8 20 8 28 0v10c0 5-5 9-14 9s-14-4-14-9z\" fill=\"#B77A50\" opacity=\".85\"/>\n  <path d=\"M21 30c3 2 6 2 9 0\" fill=\"none\" stroke=\"#4A2E1F\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M35 30c3 2 6 2 9 0\" fill=\"none\" stroke=\"#4A2E1F\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M27 41c3 2 7 2 10 0\" fill=\"none\" stroke=\"#4A2E1F\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <ellipse cx=\"18\" cy=\"38\" rx=\"4.5\" ry=\"3\" fill=\"#FF9A85\" opacity=\".55\"/>\n  <ellipse cx=\"46\" cy=\"38\" rx=\"4.5\" ry=\"3\" fill=\"#FF9A85\" opacity=\".55\"/>\n  <path d=\"M14 18c2-3 5-5 9-5\" fill=\"none\" stroke=\"#FFF3D1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n  <path d=\"M42 14c3 1 6 3 8 6\" fill=\"none\" stroke=\"#FFF3D1\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>", "faceHeight": "low", "eyeStyle": "two relaxed closed eyes", "browStyle": "soft relaxed brow", "mouthStyle": "small warm smile", "blushStyle": "warm muted blush", "accent": "blanket wrap", "posture": "wrapped and nestled", "vibe": "warm, safe, nest‑like", "differenceRule": "Different from calm‑glowy because cozy is tactile and warm, not magical or radiant.", "practiceTip": "Draw a round face with eyes closed and mouth smiling, wrapped in a scarf or blanket; use warm, soft shading to convey softness.", "examplePrompt": "Illustrate a snuggly mascot wrapped in a chunky knit scarf, eyes closed with a contented smile."}, "silly": {"label": "Silly", "family": "simple/core", "svg": "\n<svg viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"silly emotion\">\n  <circle cx=\"32\" cy=\"32\" r=\"26\" fill=\"#BFF7D2\"/>\n  <circle cx=\"23\" cy=\"31\" r=\"4\" fill=\"#263A2B\"/>\n  <path d=\"M38 31c2.5-2 5.5-2 8 0\" fill=\"none\" stroke=\"#263A2B\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M24 44c5 5 12 5 17 0\" fill=\"none\" stroke=\"#263A2B\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n  <path d=\"M35 44c0 6 5 8 8 4\" fill=\"#FF7CA8\" stroke=\"#263A2B\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <circle cx=\"18\" cy=\"38\" r=\"3\" fill=\"#FFB36B\" opacity=\".6\"/>\n  <circle cx=\"47\" cy=\"38\" r=\"3\" fill=\"#FFB36B\" opacity=\".6\"/>\n  <path d=\"M13 17l3-2 3 2-3 2zM49 15l4-2 4 2-4 2z\" fill=\"#FFFFFF\"/>\n</svg>", "faceHeight": "middle", "eyeStyle": "one dot eye + one wink", "browStyle": "bouncy mismatched brows", "mouthStyle": "goofy grin with tongue", "blushStyle": "small warm blush", "accent": "playful gleams", "posture": "loose and wobbly", "vibe": "goofy, harmless, playful", "differenceRule": "Different from chaoticSoft because silly is simple and goofy, not unstable or overcharged.", "practiceTip": "Play with asymmetry: sketch one eye winking and the other wide; add a lopsided grin with a tongue sticking out.", "examplePrompt": "Create a quirky mascot sticking out its tongue and winking, hair a bit ruffled, radiating carefree silliness."}};
    Object.assign(emotionMap, exactEmotionOverrides);

    const skillFocuses = {
      auto: "Auto skill match",
      shapeControl: "Shape Control",
      facePlacement: "Face Placement",
      expressionDesign: "Expression Design",
      tinyLimbs: "Tiny Limbs",
      objectCharacter: "Object-to-Character",
      iconReadability: "Icon Readability",
      paletteControl: "Palette Control",
      polishPass: "Polish Pass",
      redrawPractice: "Redraw Practice"
    };


    const skillFocusData = {
      auto: {
        title: "Auto skill match",
        goal: "The app picks the most useful skill focus from your lesson choices.",
        drills: ["Follow the generated step order.", "Keep the subject readable.", "Make one simple Version 2 change."]
      },
      shapeControl: {
        title: "Shape Control",
        goal: "Practice making the main body simple, readable, and friendly.",
        drills: ["Draw the body 3 times.", "Pick the clearest silhouette.", "Do not add details until the body works."]
      },
      facePlacement: {
        title: "Face Placement",
        goal: "Practice placing eyes and mouth low enough to feel cute and readable.",
        drills: ["Move the face lower.", "Try two eye spacings.", "Make the mouth smaller than you think."]
      },
      expressionDesign: {
        title: "Expression Design",
        goal: "Practice making the duo emotion readable with limited marks.",
        drills: ["Use one eye cue.", "Use one mouth cue.", "Use one body or accessory cue only."]
      },
      tinyLimbs: {
        title: "Tiny Limbs",
        goal: "Practice adding limbs without making the mascot cluttered.",
        drills: ["Use C-curves for arms.", "Use oval feet.", "Keep limbs smaller than the face area."]
      },
      objectCharacter: {
        title: "Object-to-Character",
        goal: "Keep the subject recognizable after adding personality.",
        drills: ["Preserve one subject cue.", "Put the face after readability works.", "Remove details that hide the subject."]
      },
      iconReadability: {
        title: "Icon Readability",
        goal: "Make the mascot readable when small.",
        drills: ["Zoom out.", "Remove tiny details.", "Keep the silhouette bold."]
      },
      paletteControl: {
        title: "Palette Control",
        goal: "Use color roles instead of using every color equally.",
        drills: ["One body color.", "One accent color.", "One shadow and one highlight only."]
      },
      polishPass: {
        title: "Polish Pass",
        goal: "Practice cleaning without overworking.",
        drills: ["Lower rough sketch opacity.", "Redraw slow clean lines.", "Stop after one shadow."]
      },
      redrawPractice: {
        title: "Redraw Practice",
        goal: "Improve by changing one thing in Version 2.",
        drills: ["Duplicate the idea.", "Change only face, body, color, or limbs.", "Compare before judging."]
      }
    };


    const fixProblemData = {
      faceWeird: {
        title: "Face looks weird",
        fixFirst: "Move the face lower before changing the body.",
        steps: ["Duplicate the sketch.", "Lower both eyes and mouth slightly.", "Make the mouth smaller.", "Remove one cheek/detail mark."],
        avoid: "Do not redraw the whole mascot until face placement is tested."
      },
      boringBody: {
        title: "Body feels boring",
        fixFirst: "Change the silhouette, not the decoration.",
        steps: ["Redraw the body with one softer bump.", "Flatten the bottom slightly.", "Tilt the top edge a little.", "Keep the face the same while testing."],
        avoid: "Do not add accessories to hide a weak body shape."
      },
      awkwardLimbs: {
        title: "Limbs look awkward",
        fixFirst: "Make limbs smaller and simpler.",
        steps: ["Replace arms with C-curves.", "Replace feet with tiny ovals.", "Move limbs lower on the body.", "Check that limbs do not cover the face."],
        avoid: "Do not make limbs detailed hands or feet yet."
      },
      subjectLost: {
        title: "Subject is not readable",
        fixFirst: "Restore one obvious subject cue.",
        steps: ["Name the subject cue: stem, handle, screen, wrapper, etc.", "Make that cue larger.", "Remove one unrelated accessory.", "Zoom out and check again."],
        avoid: "Do not let optional flavor override the selected subject."
      },
      emotionUnclear: {
        title: "Expression is unclear",
        fixFirst: "Simplify the face into one clear expression formula.",
        steps: ["Choose one eye cue.", "Choose one mouth cue.", "Add one tiny body cue.", "Remove extra emotional symbols."],
        avoid: "Do not use every emotion cue at once."
      },
      muddyColors: {
        title: "Colors feel muddy",
        fixFirst: "Use fewer palette colors.",
        steps: ["Pick one body color.", "Pick one accent color.", "Use one shadow color only.", "Use one tiny highlight."],
        avoid: "Do not use all palette colors equally."
      },
      tooManyDetails: {
        title: "Too many details",
        fixFirst: "Remove before adding.",
        steps: ["Circle the most important detail.", "Delete or ignore two smaller details.", "Keep face, subject cue, and one twist.", "Check silhouette again."],
        avoid: "Do not solve clutter by adding more polish."
      },
      notCute: {
        title: "Not cute enough",
        fixFirst: "Round the body and lower the face.",
        steps: ["Soften sharp corners.", "Lower the eyes.", "Make the mouth smaller.", "Add one blush or shine mark."],
        avoid: "Do not make every feature bigger."
      },
      notIconReadable: {
        title: "Not readable as an icon",
        fixFirst: "Bold silhouette, fewer details.",
        steps: ["Zoom out to thumbnail size.", "Remove tiny accessories.", "Thicken the outer shape.", "Keep only face plus one subject cue."],
        avoid: "Do not keep details that disappear when small."
      }
    };


    const TWIST_BLUEPRINT_PASS_1 = [
      "sparkle",
      "hat",
      "patch",
      "charm",
      "freckle",
      "bow",
      "halo",
      "fang",
      "glow",
      "ribbon",
      "stitches",
      "leaf",
      "starCheek",
      "button",
      "teardrop",
      "bandage",
      "crown",
      "cape",
      "wings",
      "antenna",
      "question",
      "moon",
      "heart",
      "glasses",
      "scarf",
      "paint",
      "shine",
      "thread",
      "raindrop",
      "sprout",
      "zipper",
      "safetyPin",
      "bell",
      "flowerPin",
      "brokenHeart",
      "gumdropShine",
      "ghostWisp",
      "threadLoop",
      "tinyBoots",
      "oneMitten",
      "blanket",
      "peelCorner",
      "waxSeal",
      "crescentBrow",
      "mismatchedButtons",
      "tinyBackpack",
      "bowtie",
      "floatingStar",
      "blushStripe",
      "tinySatchel",
    ];

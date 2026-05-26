function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }


    function randomSelect(id) {
      const el = document.getElementById(id);
      if (!el) return;
      const start = el.options[0] && el.options[0].value === "" ? 1 : 0;
      el.selectedIndex = Math.floor(Math.random() * (el.options.length - start)) + start;
    }


    function surpriseMe() {
      smartSurprise();
    }


    function makeBody(type) {
      if (type === "food") return '<path class="shape" d="M155 205 C155 145 200 115 260 115 C320 115 365 145 365 205 L365 380 L155 380 Z"></path>';
      if (type === "object") return '<rect class="shape" x="165" y="135" width="190" height="270" rx="38"></rect>';
      if (type === "icon" || type === "badge" || type === "sticker") return '<path class="shape" d="M260 105 L375 170 L375 330 L260 405 L145 330 L145 170 Z"></path>';
      if (type === "letter") return '<path class="shape" d="M205 400 L250 135 L305 135 L355 400 L305 400 L295 340 L215 340 L205 400 Z M228 285 L282 285 L255 190 Z"></path>';
      if (type === "number") return '<path class="shape" d="M220 160 C250 115 340 130 345 195 C350 245 295 270 260 300 L345 300 L345 380 L175 380 C180 310 275 285 280 220 C283 190 245 185 225 215 Z"></path>';
      if (type === "mask") return '<path class="shape" d="M145 198 C154 120 229 102 260 132 C292 102 366 120 375 198 C390 305 328 390 260 405 C192 390 130 305 145 198 Z"></path>';
      if (type === "plant") return '<path class="shape" d="M260 125 C320 145 350 215 315 285 C292 332 250 375 210 405 C198 350 168 290 182 230 C195 170 225 142 260 125 Z"></path>';
      if (type === "flower") return '<circle class="shape" cx="260" cy="270" r="70"></circle><ellipse class="shape" cx="260" cy="155" rx="45" ry="75"></ellipse><ellipse class="shape" cx="260" cy="385" rx="45" ry="75"></ellipse><ellipse class="shape" cx="145" cy="270" rx="75" ry="45"></ellipse><ellipse class="shape" cx="375" cy="270" rx="75" ry="45"></ellipse>';
      if (type === "star") return '<path class="shape" d="M260 100 L302 206 L415 215 L328 288 L355 400 L260 338 L165 400 L192 288 L105 215 L218 206 Z"></path>';
      if (type === "potion") return '<path class="shape" d="M225 105 L295 105 L295 165 C340 185 365 238 350 310 C338 370 300 408 260 408 C220 408 182 370 170 310 C155 238 180 185 225 165 Z"></path>';
      if (type === "bug") return '<ellipse class="shape" cx="260" cy="285" rx="120" ry="150"></ellipse><path class="feature" d="M220 140 Q205 102 170 92 M300 140 Q315 102 350 92"></path>';
      if (type === "cloud") return '<path class="shape" d="M145 305 C105 300 95 245 135 225 C145 175 205 160 235 190 C265 145 340 160 350 220 C400 225 420 300 360 320 L165 320 C158 320 151 315 145 305 Z"></path>';
      if (type === "gem") return '<path class="shape" d="M185 150 L335 150 L390 235 L260 410 L130 235 Z"></path><path class="guide" d="M185 150 L260 410 L335 150 M130 235 L390 235"></path>';
      if (type === "stationery" || type === "tool") return '<path class="shape" d="M210 115 L310 115 L310 355 L260 425 L210 355 Z"></path>';
      if (type === "candy") return '<rect class="shape" x="180" y="190" width="160" height="140" rx="55"></rect><path class="shape" d="M180 230 L105 190 L130 270 L105 350 L180 310"></path><path class="shape" d="M340 230 L415 190 L390 270 L415 350 L340 310"></path>';
      if (type === "toy") return '<path class="shape" d="M185 180 C185 120 245 115 260 160 C275 115 335 120 335 180 L335 350 C335 410 185 410 185 350 Z"></path>';
      if (type === "book") return '<path class="shape" d="M145 150 L260 130 L375 150 L375 390 L260 370 L145 390 Z"></path><path class="guide" d="M260 130 L260 370"></path>';
      if (type === "ghost") return '<path class="shape" d="M150 390 L150 210 C150 140 210 105 260 105 C310 105 370 140 370 210 L370 390 L325 360 L285 390 L245 360 L205 390 L170 360 Z"></path>';
      if (type === "creature") return '<path class="shape" d="M160 250 C130 170 205 115 260 150 C315 115 390 170 360 250 C395 315 335 405 260 385 C185 405 125 315 160 250 Z"></path>';
      if (type === "household" || type === "drink" || type === "sauce") return '<path class="shape" d="M185 160 L335 160 L350 360 C350 405 170 405 170 360 Z"></path>';
      if (type === "fruit" || type === "vegetable" || type === "dessert" || type === "breakfast") return '<path class="shape" d="M165 250 C165 165 220 125 270 145 C335 125 380 190 360 270 C340 360 280 405 220 385 C170 368 145 310 165 250 Z"></path>';
      if (type === "shell" || type === "aquatic") return '<path class="shape" d="M135 300 C165 180 275 120 390 190 C345 230 330 310 370 380 C275 405 180 380 135 300 Z"></path>';
      if (type === "robot" || type === "device") return '<rect class="shape" x="165" y="145" width="190" height="235" rx="35"></rect><path class="feature" d="M225 145 L215 105 M295 145 L305 105"></path>';
      if (type === "clothing" || type === "accessory") return '<path class="shape" d="M180 160 C220 125 300 125 340 160 L370 350 C330 405 190 405 150 350 Z"></path>';
      if (type === "music") return '<path class="shape" d="M240 120 L320 105 L320 330 C320 380 240 390 230 340 C220 295 275 285 295 315 L295 160 L240 170 Z"></path>';
      if (type === "artSupply") return '<path class="shape" d="M210 110 L310 110 L300 350 L260 425 L220 350 Z"></path>';
      if (type === "magicObject") return '<path class="shape" d="M180 390 L330 125 M330 125 L350 160 M330 125 L295 130"></path><circle class="shape" cx="180" cy="390" r="50"></circle>';
      if (type === "celestialObject") return '<circle class="shape" cx="260" cy="265" r="130"></circle><path class="guide" d="M140 300 C220 220 330 220 405 300"></path>';
      if (type === "plushKeychain") return '<path class="shape" d="M185 180 C185 120 245 115 260 160 C275 115 335 120 335 180 L335 350 C335 410 185 410 185 350 Z"></path><circle class="feature" cx="260" cy="105" r="28"></circle>';
      if (type === "tinyMonster") return '<path class="shape" d="M160 250 C130 170 205 115 260 150 C315 115 390 170 360 250 C395 315 335 405 260 385 C185 405 125 315 160 250 Z"></path><path class="feature" d="M220 150 L205 105 M300 150 L315 105"></path>';
      if (type === "circleBadge") return '<circle class="shape" cx="260" cy="265" r="136"></circle>';
      if (type === "squircleTile") return '<path class="shape" d="M175 145 C175 125 190 110 210 110 L310 110 C330 110 345 125 345 145 L345 345 C345 365 330 380 310 380 L210 380 C190 380 175 365 175 345 Z"></path>';
      if (type === "roundedTriangle") return '<path class="shape" d="M260 118 C276 118 288 126 296 140 L378 302 C392 328 374 360 344 360 L176 360 C146 360 128 328 142 302 L224 140 C232 126 244 118 260 118 Z"></path>';
      if (type === "diamondTile") return '<path class="shape" d="M260 108 L374 222 Q392 240 374 258 L260 372 L146 258 Q128 240 146 222 Z"></path>';
      if (type === "heartBadge") return '<path class="shape" d="M260 395 L182 318 C126 262 134 178 198 160 C228 152 248 164 260 182 C272 164 292 152 322 160 C386 178 394 262 338 318 Z"></path>';
      if (type === "crescentDrop") return '<path class="shape" d="M314 120 C222 136 163 220 182 306 C196 370 250 408 310 404 C250 382 212 330 212 270 C212 210 248 160 314 120 Z"></path><path class="guide" d="M312 148 C262 172 234 217 234 268 C234 316 258 354 302 378"></path>';
      if (type === "cloverGlyph") return '<circle class="shape" cx="220" cy="210" r="62"></circle><circle class="shape" cx="300" cy="210" r="62"></circle><circle class="shape" cx="220" cy="290" r="62"></circle><circle class="shape" cx="300" cy="290" r="62"></circle>';
      if (type === "pillCapsule") return '<rect class="shape" x="145" y="180" width="230" height="170" rx="85"></rect><line class="guide" x1="260" y1="180" x2="260" y2="350"></line>';
      if (type === "starburstSeal") return '<path class="shape" d="M260 110 L294 148 L344 136 L352 186 L402 202 L380 248 L410 292 L366 320 L370 372 L318 370 L286 410 L246 374 L198 390 L182 342 L132 328 L148 280 L118 238 L156 208 L150 158 L202 162 L232 118 Z"></path>';
      if (type === "archTile") return '<path class="shape" d="M170 370 L170 236 C170 162 212 118 260 118 C308 118 350 162 350 236 L350 370 Z"></path>';
      if (type === "ribbonLoop") return '<path class="shape" d="M164 214 C164 160 220 140 260 188 C300 140 356 160 356 214 C356 258 322 286 286 290 L330 382 L260 338 L190 382 L234 290 C198 286 164 258 164 214 Z"></path>';
      if (type === "pebbleStack") return '<ellipse class="shape" cx="224" cy="310" rx="102" ry="78"></ellipse><ellipse class="shape" cx="296" cy="244" rx="84" ry="66"></ellipse><ellipse class="shape" cx="212" cy="216" rx="62" ry="52"></ellipse>';
      if (type === "zodiac" || type === "emoji" || type === "abstractShape" || type === "logoMark") return '<path class="shape" d="M160 205 C160 130 230 100 285 125 C348 153 384 218 363 292 C345 356 288 398 218 380 C153 363 124 298 160 205 Z"></path>';
      if (type === "package") return '<path class="shape" d="M150 180 L260 120 L370 180 L370 360 L260 420 L150 360 Z"></path><path class="guide" d="M150 180 L260 240 L370 180 M260 240 L260 420"></path>';
      if (type === "furniture") return '<path class="shape" d="M175 170 L345 170 L345 300 L315 300 L315 400 L285 400 L285 300 L235 300 L235 400 L205 400 L205 300 L175 300 Z"></path>';
      if (type === "garden") return '<path class="shape" d="M180 180 L340 180 L320 390 L200 390 Z"></path><path class="feature" d="M210 150 C230 110 270 120 260 180 M300 150 C330 120 350 150 320 180"></path>';
      if (type === "weatherIcon") return '<path class="shape" d="M145 305 C105 300 95 245 135 225 C145 175 205 160 235 190 C265 145 340 160 350 220 C400 225 420 300 360 320 L165 320 C158 320 151 315 145 305 Z"></path><path class="feature" d="M250 335 L220 410 L275 370 L245 450"></path>';
      return '<path class="shape" d="M160 205 C160 130 230 100 285 125 C348 153 384 218 363 292 C345 356 288 398 218 380 C153 363 124 298 160 205 Z"></path>';
    }



    function getEmotionBlueprintGuide(emotion) {
      const guides = {
        shy: {
          overlay: '<ellipse class="guide" cx="260" cy="285" rx="88" ry="58"></ellipse><path class="guide" d="M205 318 Q190 340 170 350 M315 318 Q330 340 350 350"></path>',
          label: "Shy guide: low face, tucked-in tiny arms, blush zone close to eyes."
        },
        happy: {
          overlay: '<path class="guide" d="M195 250 Q225 225 255 250 M265 250 Q295 225 325 250"></path><path class="guide" d="M210 325 Q260 365 310 325"></path>',
          label: "Happy guide: lifted eyes, clear smile arc, open cheerful spacing."
        },
        sleepy: {
          overlay: '<path class="guide" d="M198 258 Q225 278 252 258 M268 258 Q295 278 322 258"></path><path class="guide" d="M245 315 Q260 328 275 315"></path><line class="guide" x1="330" y1="195" x2="370" y2="165"></line>',
          label: "Sleepy guide: closed eyes, droopy mouth, soft downward rhythm."
        },
        grumpy: {
          overlay: '<path class="guide" d="M196 235 L248 258 M324 235 L272 258"></path><path class="guide" d="M238 326 Q260 308 282 326"></path>',
          label: "Grumpy-cute guide: angled brows + tiny frown, but keep body round."
        },
        spooky: {
          overlay: '<circle class="guide" cx="222" cy="260" r="24"></circle><path class="guide" d="M282 238 L322 278 M322 238 L282 278"></path><path class="guide" d="M248 320 Q260 336 272 320 M266 326 L272 344"></path>',
          label: "Spooky-sweet guide: one uneven eye, one spooky mark, tiny fang."
        },
        sassy: {
          overlay: '<path class="guide" d="M196 252 L248 252 M274 252 L326 242"></path><path class="guide" d="M242 320 Q270 336 292 305"></path>',
          label: "Sassy-soft guide: half-lids, side smile, slight face asymmetry."
        },
        nervous: {
          overlay: '<circle class="guide" cx="222" cy="264" r="16"></circle><circle class="guide" cx="300" cy="268" r="10"></circle><path class="guide" d="M246 318 Q260 308 274 318"></path><path class="guide" d="M332 230 Q350 250 338 270"></path>',
          label: "Nervous-cute guide: uneven eyes, tiny worried mouth, one sweat/blush cue."
        },
        proud: {
          overlay: '<path class="guide" d="M205 245 Q225 232 245 245 M275 245 Q295 232 315 245"></path><path class="guide" d="M242 315 Q260 330 282 315"></path><path class="guide" d="M260 390 L260 420"></path>',
          label: "Proud-tiny guide: lifted eyes, confident small smile, upright center."
        },
        dreamy: {
          overlay: '<path class="guide" d="M200 258 Q225 278 250 258 M270 258 Q295 278 320 258"></path><circle class="guide" cx="370" cy="190" r="22"></circle><path class="guide" d="M252 318 Q260 324 268 318"></path>',
          label: "Dreamy-sad guide: soft closed eyes, tiny mouth, floating moon/spark cue."
        },
        mischievous: {
          overlay: '<path class="guide" d="M198 245 L248 255 M274 255 Q300 238 326 248"></path><path class="guide" d="M244 316 Q265 336 290 310"></path><path class="guide" d="M270 320 L276 338"></path>',
          label: "Mischievous-sweet guide: one raised brow, crooked smile, tiny fang optional."
        },
        dramatic: {
          overlay: '<circle class="guide" cx="222" cy="260" r="26"></circle><circle class="guide" cx="298" cy="260" r="26"></circle><path class="guide" d="M252 322 Q260 340 268 322"></path><path class="guide" d="M330 288 Q350 318 330 342"></path>',
          label: "Dramatic-soft guide: bigger eyes, small O/frown mouth, one tear cue."
        },
        calm: {
          overlay: '<path class="guide" d="M200 260 Q225 275 250 260 M270 260 Q295 275 320 260"></path><path class="guide" d="M245 318 Q260 330 275 318"></path><ellipse class="guide" cx="260" cy="210" rx="78" ry="24"></ellipse>',
          label: "Calm-glowy guide: closed peaceful eyes, small smile, soft halo zone."
        },
        confused: {
          overlay: '<circle class="guide" cx="220" cy="260" r="24"></circle><circle class="guide" cx="304" cy="268" r="12"></circle><circle class="guide" cx="260" cy="318" r="13"></circle><path class="guide" d="M360 200 C390 175 420 195 405 225 C397 242 378 242 378 260"></path>',
          label: "Confused-cute guide: one big eye, one small eye, O mouth, question cue."
        },
        angryTiny: {
          overlay: '<path class="guide" d="M198 238 L248 262 M322 238 L272 262"></path><path class="guide" d="M244 324 Q260 312 276 324"></path><circle class="guide" cx="260" cy="270" r="96"></circle>',
          label: "Tiny-angry guide: angry brows, very small frown, keep the round cute body."
        },
        sadHopeful: {
          overlay: '<path class="guide" d="M198 252 Q224 240 250 260 M270 260 Q296 240 322 252"></path><path class="guide" d="M246 322 Q260 314 274 322"></path><path class="guide" d="M365 210 L374 232 L396 240 L374 248 L365 270 L356 248 L334 240 L356 232 Z"></path>',
          label: "Sad-hopeful guide: soft sad eyes, tiny restrained mouth, one hopeful glow mark."
        },
        delightedShy: {
          overlay: '<path class="guide" d="M198 252 Q225 232 252 252 M268 252 Q295 232 322 252"></path><path class="guide" d="M242 320 Q260 344 278 320"></path><path class="guide" d="M206 318 Q190 336 176 346 M314 318 Q330 336 344 346"></path>',
          label: "Delighted-shy guide: happy lifted eyes, tucked tiny mouth, inward bashful arms."
        },
        gloomySweet: {
          overlay: '<path class="guide" d="M198 262 Q224 246 250 264 M270 264 Q296 246 322 262"></path><path class="guide" d="M244 324 Q260 318 276 324"></path><path class="guide" d="M360 208 Q378 228 365 248"></path>',
          label: "Gloomy-sweet guide: soft sad eyes, tiny kind mouth, one droop cue only."
        },
        softSuspicious: {
          overlay: '<path class="guide" d="M198 250 L248 254 M276 258 Q302 244 326 250"></path><path class="guide" d="M244 320 Q262 334 286 312"></path>',
          label: "Soft-suspicious guide: one flatter eye, one lifted eye, small side-smile."
        },
        hauntedHappy: {
          overlay: '<circle class="guide" cx="222" cy="260" r="20"></circle><path class="guide" d="M284 240 L320 280 M320 240 L284 280"></path><path class="guide" d="M210 324 Q260 360 310 324"></path>',
          label: "Haunted-happy guide: spooky eye mismatch with a clear cheerful smile."
        },
        chaoticSoft: {
          overlay: '<circle class="guide" cx="224" cy="260" r="22"></circle><path class="guide" d="M282 250 Q302 232 324 254"></path><path class="guide" d="M242 322 Q265 346 292 314"></path><path class="guide" d="M352 188 L382 202 L364 224"></path>',
          label: "Chaotic-soft guide: uneven face rhythm, but keep the overall body cuddly."
        },
        excited: {
          overlay: '<circle class="guide" cx="222" cy="260" r="18"></circle><circle class="guide" cx="300" cy="260" r="18"></circle><path class="guide" d="M220 322 Q260 368 300 322"></path>',
          label: "Excited guide: bright wide eyes and a big smile arc."
        },
        curious: {
          overlay: '<circle class="guide" cx="220" cy="260" r="16"></circle><circle class="guide" cx="300" cy="266" r="24"></circle><circle class="guide" cx="260" cy="320" r="11"></circle>',
          label: "Curious guide: one slightly larger eye and a tiny O-mouth."
        },
        surprised: {
          overlay: '<circle class="guide" cx="220" cy="260" r="22"></circle><circle class="guide" cx="300" cy="260" r="22"></circle><circle class="guide" cx="260" cy="324" r="15"></circle>',
          label: "Surprised guide: round eyes, round mouth, simple lifted spacing."
        },
        embarrassed: {
          overlay: '<path class="guide" d="M202 260 Q226 278 250 260 M270 260 Q294 278 318 260"></path><path class="guide" d="M246 322 Q260 330 274 322"></path><path class="guide" d="M190 304 Q202 314 214 304 M306 304 Q318 314 330 304"></path>',
          label: "Embarrassed guide: shy closed eyes, tiny mouth, blush zones near cheeks."
        },
        determined: {
          overlay: '<path class="guide" d="M198 244 L248 256 M272 256 L322 244"></path><path class="guide" d="M242 320 Q260 330 278 320"></path>',
          label: "Determined guide: focused angled brows and a small firm mouth."
        },
        cozy: {
          overlay: '<path class="guide" d="M202 260 Q226 276 250 260 M270 260 Q294 276 318 260"></path><path class="guide" d="M244 320 Q260 334 276 320"></path><ellipse class="guide" cx="260" cy="210" rx="86" ry="28"></ellipse>',
          label: "Cozy guide: peaceful closed eyes, small smile, warm halo or blanket vibe."
        },
        sicklyCute: {
          overlay: '<path class="guide" d="M202 260 Q226 278 250 260 M270 260 Q294 278 318 260"></path><path class="guide" d="M244 324 Q260 314 276 324"></path><path class="guide" d="M340 210 L376 210"></path>',
          label: "Sickly-cute guide: tired eyes, tiny downturned mouth, one thermometer or bandage zone."
        },
        bashfulProud: {
          overlay: '<path class="guide" d="M202 252 Q226 238 250 252 M270 252 Q294 238 318 252"></path><path class="guide" d="M244 320 Q260 338 282 318"></path><path class="guide" d="M210 320 Q194 338 178 348"></path>',
          label: "Bashful-proud guide: lifted eyes, small confident smile, one tucked side cue."
        },
        worriedHopeful: {
          overlay: '<circle class="guide" cx="220" cy="264" r="15"></circle><circle class="guide" cx="300" cy="268" r="11"></circle><path class="guide" d="M246 322 Q260 314 274 322"></path><path class="guide" d="M365 210 L374 232 L396 240 L374 248 L365 270 L356 248 L334 240 L356 232 Z"></path>',
          label: "Worried-hopeful guide: worried small eyes, tiny unsure mouth, one hopeful star cue."
        },
        silly: {
          overlay: '<circle class="guide" cx="224" cy="260" r="18"></circle><path class="guide" d="M286 248 Q304 236 322 258"></path><path class="guide" d="M236 324 Q260 346 288 312"></path><path class="guide" d="M258 326 L272 344"></path>',
          label: "Silly guide: uneven playful eyes and a goofy crooked mouth."

        },
        bashfulChaotic: {
          overlay: '<path class="guide" d="M202 254 Q225 240 248 256 M272 252 Q296 238 320 258"></path><path class="guide" d="M242 322 Q260 344 286 316"></path><path class="guide" d="M210 320 Q190 340 174 352 M338 202 L372 214 L350 238"></path>',
          label: "Bashful-chaotic guide: shy lifted eyes, crooked smile, one chaotic accent only."
        },
        smugCute: {
          overlay: '<path class="guide" d="M198 252 L248 252 M274 256 Q298 242 322 248"></path><path class="guide" d="M242 320 Q268 336 292 312"></path>',
          label: "Smug-cute guide: flat confident eye, one lifted brow, tiny smug side-mouth."
        },
        timidMagical: {
          overlay: '<path class="guide" d="M202 260 Q226 278 250 260 M270 260 Q294 278 318 260"></path><path class="guide" d="M246 322 Q260 330 274 322"></path><path class="guide" d="M365 208 L374 230 L396 238 L374 246 L365 268 L356 246 L334 238 L356 230 Z"></path>',
          label: "Timid-magical guide: shy closed eyes, tiny mouth, one magical star cue."
        },
        dramaticSleepy: {
          overlay: '<path class="guide" d="M196 258 Q224 282 252 258 M268 258 Q296 282 324 258"></path><path class="guide" d="M244 324 Q260 346 276 324"></path><path class="guide" d="M330 286 Q352 314 334 344"></path>',
          label: "Dramatic-sleepy guide: sleepy lids with one dramatic droop or tear curve."
        },
        woundedSparkly: {
          overlay: '<path class="guide" d="M202 262 Q226 278 250 262 M270 262 Q294 278 318 262"></path><path class="guide" d="M246 324 Q260 316 274 324"></path><path class="guide" d="M334 212 L372 212"></path><path class="guide" d="M365 242 L374 260 L394 268 L374 276 L365 294 L356 276 L336 268 L356 260 Z"></path>',
          label: "Wounded-sparkly guide: tired kind eyes, one small hurt mark, one sparkle of resilience."
        },
        overexcitedSoft: {
          overlay: '<circle class="guide" cx="220" cy="260" r="20"></circle><circle class="guide" cx="300" cy="260" r="20"></circle><path class="guide" d="M216 322 Q260 372 304 322"></path><path class="guide" d="M170 300 Q188 286 202 302 M318 302 Q332 286 350 300"></path>',
          label: "Overexcited-soft guide: big cheerful eyes and mouth, but keep limbs soft and rounded."
        },
        suspiciousHappy: {
          overlay: '<path class="guide" d="M198 250 L248 254 M274 254 Q300 240 324 250"></path><path class="guide" d="M220 324 Q260 352 300 324"></path>',
          label: "Suspicious-happy guide: one questioning eye with a still-readable happy smile."
        },
        gloomyGlam: {
          overlay: '<path class="guide" d="M198 262 Q224 246 250 264 M270 264 Q296 246 322 262"></path><path class="guide" d="M244 324 Q260 318 276 324"></path><path class="guide" d="M206 214 Q232 194 260 208 Q288 194 314 214"></path>',
          label: "Gloomy-glam guide: droopy sweet eyes, tiny mouth, elegant brow or lash silhouette."
        },
        lonelyBrave: {
          overlay: '<path class="guide" d="M202 260 Q226 276 250 264 M270 264 Q294 248 318 260"></path><path class="guide" d="M246 324 Q260 316 274 324"></path><path class="guide" d="M260 388 L260 420"></path>',
          label: "Lonely-brave guide: soft low eyes, small brave mouth, centered upright posture."
        },
        tenderFeral: {
          overlay: '<circle class="guide" cx="222" cy="260" r="18"></circle><path class="guide" d="M286 248 Q304 236 322 256"></path><path class="guide" d="M240 324 Q262 346 288 314"></path><path class="guide" d="M258 324 L272 342"></path>',
          label: "Tender-feral guide: one sweet eye, one wild eye, tiny fang or crooked grin."
        },
        eerieCalm: {
          overlay: '<path class="guide" d="M202 260 Q226 276 250 260 M270 260 Q294 276 318 260"></path><path class="guide" d="M246 320 Q260 332 274 320"></path><ellipse class="guide" cx="260" cy="206" rx="84" ry="24"></ellipse><path class="guide" d="M352 210 Q380 236 352 262"></path>',
          label: "Eerie-calm guide: peaceful closed eyes with one strange floating cue."
        },
        gigglyNervous: {
          overlay: '<circle class="guide" cx="222" cy="264" r="15"></circle><circle class="guide" cx="300" cy="268" r="10"></circle><path class="guide" d="M238 322 Q260 346 286 320"></path><path class="guide" d="M332 228 Q350 248 338 268"></path>',
          label: "Giggly-nervous guide: worried uneven eyes with a tiny giggle-smile."
        },
        softVillain: {
          overlay: '<path class="guide" d="M198 250 L248 254 M276 254 Q302 240 326 248"></path><path class="guide" d="M242 322 Q266 338 292 312"></path><path class="guide" d="M205 214 Q232 200 260 210 Q288 200 316 214"></path>',
          label: "Soft-villain guide: sly eyes and a small cunning mouth, still plush not harsh."
        },
        rainyHopeful: {
          overlay: '<path class="guide" d="M200 262 Q226 246 252 264 M268 264 Q294 246 320 262"></path><path class="guide" d="M246 324 Q260 316 274 324"></path><path class="guide" d="M356 202 Q344 222 356 242 Q368 222 356 202"></path><path class="guide" d="M385 210 L394 232 L416 240 L394 248 L385 270 L376 248 L354 240 L376 232 Z"></path>',
          label: "Rainy-hopeful guide: sad-soft eyes, a tiny hopeful mouth, raindrop plus one star cue."
        },
        cursedAdorable: {
          overlay: '<circle class="guide" cx="222" cy="260" r="20"></circle><path class="guide" d="M284 240 L320 280 M320 240 L284 280"></path><path class="guide" d="M244 324 Q264 340 286 320"></path><path class="guide" d="M352 206 Q376 190 392 212 Q372 224 366 244"></path>',
          label: "Cursed-adorable guide: spooky mismatch face, but keep the mouth tiny and cute."
        },
        seriousTiny: {
          overlay: '<path class="guide" d="M200 250 L248 252 M272 252 L320 250"></path><path class="guide" d="M246 320 Q260 326 274 320"></path><circle class="guide" cx="260" cy="272" r="92"></circle>',
          label: "Serious-tiny guide: level eyes, very small firm mouth, extra emphasis on tiny scale."
        }
      };

      return guides[emotion] || {
        overlay: '<ellipse class="guide" cx="260" cy="285" rx="95" ry="68"></ellipse>',
        label: "Emotion guide coming next pass: keep the face low and readable."
      };
    }


    function emotionBlueprintBadge(emotion) {
      const supported = EMOTION_BLUEPRINT_PASS_1.includes(emotion);
      return supported ? "Emotion blueprint: full current set supported" : "Emotion blueprint: fallback guide";
    }


    function makeFace(emotion) {
      if (emotion === "sleepy" || emotion === "calm" || emotion === "dreamy") return ['<path class="feature" d="M207 258 Q225 270 243 258"></path><path class="feature" d="M277 258 Q295 270 313 258"></path>', '<path class="feature" d="M246 308 Q260 318 274 308"></path>'];
      if (emotion === "grumpy" || emotion === "angryTiny") return ['<path class="feature" d="M207 248 L245 260"></path><path class="feature" d="M313 248 L275 260"></path>', '<path class="feature" d="M246 315 Q260 305 274 315"></path>'];
      if (emotion === "spooky" || emotion === "hauntedHappy" || emotion === "feralCute") return ['<circle class="solid" cx="222" cy="260" r="9"></circle><path class="feature" d="M285 250 L310 275 M310 250 L285 275"></path>', '<path class="feature" d="M244 306 Q260 320 276 306 M265 315 L270 330"></path>'];
      if (emotion === "confused" || emotion === "braveScared") return ['<circle class="solid" cx="220" cy="260" r="14"></circle><circle class="solid" cx="302" cy="265" r="7"></circle>', '<circle class="feature" cx="260" cy="312" r="8"></circle>'];
      if (emotion === "sassy" || emotion === "softSuspicious" || emotion === "jealousCute") return ['<path class="feature" d="M205 258 L242 258"></path><path class="feature" d="M278 258 L315 252"></path>', '<path class="feature" d="M248 312 Q268 322 282 304"></path>'];
      if (emotion === "dramatic" || emotion === "sadHopeful" || emotion === "lonelySparkly") return ['<circle class="feature" cx="225" cy="260" r="18"></circle><circle class="feature" cx="295" cy="260" r="18"></circle><circle class="solid" cx="232" cy="252" r="5"></circle><circle class="solid" cx="302" cy="252" r="5"></circle>', '<circle class="feature" cx="260" cy="315" r="10"></circle>'];
      return ['<circle class="solid" cx="225" cy="265" r="10"></circle><circle class="solid" cx="295" cy="265" r="10"></circle>', '<path class="feature" d="M245 306 Q260 318 275 306"></path>'];
    }



    function getSubjectGuide(type) {
      if (["blob"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="272" rx="126" ry="152"></ellipse><path class="guide" d="M176 352 C210 372 310 372 344 352"></path>',
          note: "Build one soft jelly body first, then add the face low."
        };
      }
      if (["food"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="275" rx="120" ry="142"></ellipse><path class="guide" d="M185 200 Q260 150 335 200"></path>',
          note: "Start with a simple food body, then add one clear edible cue."
        };
      }
      if (["object"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="168" y="145" width="184" height="240" rx="38"></rect><line class="guide" x1="260" y1="145" x2="260" y2="385"></line>',
          note: "Use a clean object silhouette first, then add the face and limbs."
        };
      }
      if (["mask"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M165 190 C200 150 320 150 355 190 C350 295 318 352 260 382 C202 352 170 295 165 190 Z"></path><line class="guide" x1="165" y1="245" x2="355" y2="245"></line>',
          note: "Keep the mask silhouette centered and balanced before adding facial symbols."
        };
      }
      if (["flower"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="260" r="48"></circle><circle class="guide" cx="260" cy="175" r="52"></circle><circle class="guide" cx="336" cy="228" r="52"></circle><circle class="guide" cx="308" cy="320" r="52"></circle><circle class="guide" cx="212" cy="320" r="52"></circle><circle class="guide" cx="184" cy="228" r="52"></circle>',
          note: "Place the flower center first, then build a few readable petals around it."
        };
      }
      if (["star"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 128 L292 220 L390 220 L310 276 L340 372 L260 314 L180 372 L210 276 L130 220 L228 220 Z"></path>',
          note: "Use the big five-point star silhouette first; keep the face small inside it."
        };
      }
      if (["bug"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="288" rx="86" ry="118"></ellipse><line class="guide" x1="260" y1="170" x2="260" y2="406"></line><path class="guide" d="M216 170 L190 130 M304 170 L330 130"></path>',
          note: "Build the rounded bug body, center line, and antennae before tiny details."
        };
      }
      if (["stationery"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="182" y="130" width="156" height="270" rx="24"></rect><path class="guide" d="M182 176 L338 176"></path><line class="guide" x1="260" y1="130" x2="260" y2="400"></line>',
          note: "Use the paper or tool frame first, then place the face low and simple."
        };
      }
      if (["candy"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="265" rx="86" ry="104"></ellipse><path class="guide" d="M174 250 L126 224 L126 308 L174 282"></path><path class="guide" d="M346 250 L394 224 L394 308 L346 282"></path>',
          note: "Center the sweet body first, then add wrapper or candy cues."
        };
      }
      if (["toy"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="260" rx="108" ry="124"></ellipse><circle class="guide" cx="214" cy="176" r="28"></circle><circle class="guide" cx="306" cy="176" r="28"></circle>',
          note: "Use a plushy toy body first, then one toy-defining part like ears or seams."
        };
      }
      if (["tool"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="260" y1="126" x2="260" y2="390"></line><rect class="guide" x="224" y="284" width="72" height="122" rx="20"></rect><path class="guide" d="M195 170 L325 170"></path>',
          note: "Build the handle or main axis first, then the tool head."
        };
      }
      if (["household"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="176" y="152" width="168" height="230" rx="32"></rect><line class="guide" x1="260" y1="152" x2="260" y2="382"></line><line class="guide" x1="176" y1="220" x2="344" y2="220"></line>',
          note: "Keep the home-object silhouette readable before character details."
        };
      }
      if (["drink"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M200 148 L320 148 L304 386 L216 386 Z"></path><line class="guide" x1="200" y1="186" x2="320" y2="186"></line><path class="guide" d="M260 90 L260 148"></path>',
          note: "Cup or bottle shape first, liquid zone second, face third."
        };
      }
      if (["sauce"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M224 118 L296 118 L312 176 L312 382 L208 382 L208 176 Z"></path><line class="guide" x1="208" y1="176" x2="312" y2="176"></line>',
          note: "Use a squeeze bottle or jar body first, then the flavor cue."
        };
      }
      if (["artSupply"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="220" y1="130" x2="320" y2="350"></line><path class="guide" d="M320 350 L336 388 L298 372 Z"></path><path class="guide" d="M220 130 L198 158 L236 166 Z"></path>',
          note: "Use a strong pencil or brush axis first, then add the cute face."
        };
      }
      if (["plushKeychain"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="260" cy="278" rx="106" ry="126"></ellipse><circle class="guide" cx="260" cy="118" r="34"></circle><line class="guide" x1="260" y1="152" x2="260" y2="170"></line>',
          note: "Build the plush charm body first, then add the hanging loop up top."
        };
      }
      if (["fruit", "vegetable", "dessert", "breakfast"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="265" r="118"></circle><path class="guide" d="M260 150 C245 125 255 110 280 100"></path>',
          note: "Round body first, then one food-identifying cue."
        };
      }
      if (["shell"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M170 330 C210 190 300 160 365 220"></path><path class="guide" d="M190 340 C225 245 290 225 342 262"></path><path class="guide" d="M210 350 C240 285 286 278 325 305"></path>',
          note: "Use layered shell arcs instead of one flat outline."
        };
      }
      if (["aquatic"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M165 292 C220 212 320 212 373 260"></path><path class="guide" d="M258 250 C275 205 320 198 350 215"></path><path class="guide" d="M270 315 C300 325 325 345 342 372"></path>',
          note: "Fishy flow first, then a tail or fin cue."
        };
      }
      if (["robot", "device"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="172" y="152" width="176" height="228" rx="30"></rect><line class="guide" x1="260" y1="152" x2="260" y2="380"></line><line class="guide" x1="172" y1="230" x2="348" y2="230"></line>',
          note: "Keep the frame clean and aligned before adding the face."
        };
      }
      if (["clothing", "accessory"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M190 165 C225 140 295 140 330 165"></path><path class="guide" d="M180 195 L340 195"></path><path class="guide" d="M210 330 C235 350 285 350 310 330"></path>',
          note: "Build the wearable silhouette, then add the character face low."
        };
      }
      if (["music"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="292" y1="118" x2="292" y2="330"></line><ellipse class="guide" cx="250" cy="342" rx="42" ry="30"></ellipse>',
          note: "Start with the note stem, then add the note body."
        };
      }
      if (["magicObject"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M180 390 L325 145"></path><circle class="guide" cx="180" cy="390" r="42"></circle><path class="guide" d="M325 145 C350 145 362 165 352 190"></path>',
          note: "Use a simple wand or relic axis before adding charm details."
        };
      }
      if (["celestialObject"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="265" r="118"></circle><ellipse class="guide" cx="260" cy="265" rx="170" ry="56"></ellipse>',
          note: "Large planet/moon body first, orbit cue second."
        };
      }
      if (["package"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M150 180 L260 120 L370 180 L260 240 Z"></path><line class="guide" x1="260" y1="240" x2="260" y2="420"></line>',
          note: "Keep the box fold readable before the face and limbs."
        };
      }
      if (["furniture"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="175" y1="300" x2="345" y2="300"></line><line class="guide" x1="210" y1="300" x2="210" y2="402"></line><line class="guide" x1="310" y1="300" x2="310" y2="402"></line>',
          note: "Use a seat/top line first, then place the legs."
        };
      }
      if (["garden", "plant"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="185" y="188" width="150" height="198" rx="10"></rect><path class="guide" d="M215 160 C235 120 275 120 260 180 M300 160 C320 130 340 150 318 182"></path>',
          note: "Use pot/leaf landmarks so the plant read stays clear."
        };
      }
      if (["creature", "tinyMonster"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M208 160 L190 112 M312 160 L330 112"></path><ellipse class="guide" cx="260" cy="268" rx="126" ry="132"></ellipse>',
          note: "Keep the body round and let the horns or tuft be only accents."
        };
      }
      if (["circleBadge"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="265" r="138"></circle><line class="guide" x1="122" y1="265" x2="398" y2="265"></line><line class="guide" x1="260" y1="127" x2="260" y2="403"></line>',
          note: "Start with a true circle. Keep the face centered and the details inside the safe ring."
        };
      }
      if (["squircleTile"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="168" y="112" width="184" height="268" rx="54"></rect><line class="guide" x1="168" y1="246" x2="352" y2="246"></line>',
          note: "Build the squircle from a soft box, not from a plain circle."
        };
      }
      if (["roundedTriangle"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 120 L374 332 L146 332 Z"></path><circle class="guide" cx="260" cy="262" r="88"></circle>',
          note: "Place a simple triangle first, then soften every corner so it stays cute."
        };
      }
      if (["diamondTile"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 110 L382 232 L260 354 L138 232 Z"></path><line class="guide" x1="138" y1="232" x2="382" y2="232"></line>',
          note: "Use one centered diamond and keep the top and side angles balanced."
        };
      }
      if (["heartBadge"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="220" cy="204" r="54"></circle><circle class="guide" cx="300" cy="204" r="54"></circle><path class="guide" d="M170 224 L260 364 L350 224"></path>',
          note: "Build the heart from two top circles and one pointed lower drop."
        };
      }
      if (["crescentDrop"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="272" cy="264" r="126"></circle><circle class="guide" cx="314" cy="250" r="108"></circle>',
          note: "Draw the outer moon curve first, then carve the inner crescent out of it."
        };
      }
      if (["cloverGlyph"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="220" cy="210" r="62"></circle><circle class="guide" cx="300" cy="210" r="62"></circle><circle class="guide" cx="220" cy="290" r="62"></circle><circle class="guide" cx="300" cy="290" r="62"></circle>',
          note: "Keep the four lobes even enough to read as a clover, but still soft."
        };
      }
      if (["pillCapsule"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="144" y="180" width="232" height="170" rx="85"></rect><line class="guide" x1="260" y1="180" x2="260" y2="350"></line>',
          note: "Use one capsule body and split it cleanly down the middle."
        };
      }
      if (["starburstSeal"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="260" cy="260" r="128"></circle><path class="guide" d="M260 132 L286 162 L326 154 L332 194 L372 206 L354 244 L380 280 L344 304 L348 346 L306 344 L280 378 L246 348 L208 362 L194 324 L154 312 L166 274 L142 238 L172 214 L168 172 L208 176 L234 138 Z"></path>',
          note: "Keep the burst points chunky and limited so the seal stays readable."
        };
      }
      if (["archTile"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="172" y="118" width="176" height="252" rx="18"></rect><path class="guide" d="M172 236 C172 162 214 118 260 118 C306 118 348 162 348 236"></path>',
          note: "Think arch-top window: flat sides, rounded top, stable base."
        };
      }
      if (["ribbonLoop"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="214" cy="222" r="52"></circle><circle class="guide" cx="306" cy="222" r="52"></circle><path class="guide" d="M238 262 L194 380 M282 262 L326 380"></path>',
          note: "Start with two soft loops, then drop the ribbon tails underneath."
        };
      }
      if (["pebbleStack"].includes(type)) {
        return {
          overlay: '<ellipse class="guide" cx="224" cy="310" rx="102" ry="78"></ellipse><ellipse class="guide" cx="296" cy="244" rx="84" ry="66"></ellipse><ellipse class="guide" cx="212" cy="216" rx="62" ry="52"></ellipse>',
          note: "Stack two or three pebble shapes with overlap so it reads more specific than a blob."
        };
      }
      if (["logoMark", "abstractShape", "zodiac", "emoji"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="260" y1="110" x2="260" y2="405"></line><line class="guide" x1="135" y1="265" x2="385" y2="265"></line>',
          note: "Use a strong axis so the symbol still reads after adding personality."
        };
      }
      if (["badge", "icon", "sticker"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M260 115 L360 175 L360 325 L260 385 L160 325 L160 175 Z"></path>',
          note: "Center the emblem and keep key details away from the edges."
        };
      }
      if (["book"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="260" y1="132" x2="260" y2="370"></line><line class="guide" x1="145" y1="185" x2="375" y2="185"></line>',
          note: "Spine first, page shape second."
        };
      }
      if (["ghost"].includes(type)) {
        return {
          overlay: '<line class="guide" x1="150" y1="210" x2="370" y2="210"></line><path class="guide" d="M150 390 L180 360 L215 390 L245 360 L285 390 L325 360 L370 390"></path>',
          note: "Top dome first, wavy drape second."
        };
      }
      if (["cloud", "weatherIcon"].includes(type)) {
        return {
          overlay: '<circle class="guide" cx="195" cy="250" r="55"></circle><circle class="guide" cx="260" cy="220" r="70"></circle><circle class="guide" cx="330" cy="250" r="55"></circle>',
          note: "Build from puffs, not one flat cloud edge."
        };
      }
      if (["potion"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="218" y="100" width="84" height="70" rx="12"></rect><ellipse class="guide" cx="260" cy="285" rx="105" ry="135"></ellipse>',
          note: "Bottle neck first, rounded body second."
        };
      }
      if (["gem"].includes(type)) {
        return {
          overlay: '<path class="guide" d="M185 150 L260 235 L335 150 M130 235 L260 235 L390 235"></path>',
          note: "Use only a few facet lines so the gem stays readable."
        };
      }
      if (["letter"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="165" y="120" width="190" height="285" rx="25"></rect>',
          note: "Keep the letter readable before adding the face."
        };
      }
      if (["number"].includes(type)) {
        return {
          overlay: '<rect class="guide" x="175" y="140" width="170" height="240" rx="25"></rect>',
          note: "Keep the number readable before adding the face."
        };
      }
      return {
        overlay: '<ellipse class="guide" cx="260" cy="265" rx="145" ry="180"></ellipse>',
        note: "Trace the big body shape first, then place the face low."
      };
    }


    function getStageGuides(type, stage) {
      const common = {
        body: '',
        guide: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>',
        face: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>',
        limbs: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>',
        final: '<line class="guide" x1="260" y1="70" x2="260" y2="430"></line><line class="guide" x1="120" y1="270" x2="400" y2="270"></line>'
      };
      const subject = getSubjectGuide(type).overlay || '';
      if (stage === "body") return '';
      return common[stage] + subject;
    }


    function makeBlueprint(type, emotion, twist, style) {
      const body = makeBody(type);
      const [eyes, mouth] = makeFace(emotion);
      const twistSvg = twists[twist] ? twists[twist][3] : "";
      const variant = getBlueprintVariant();
      const subjectGuide = getSubjectGuide(type);
      const emotionGuide = getEmotionBlueprintGuide(emotion);
      const twistGuide = getTwistBlueprintGuide(twist);
      let overlay = style === "autoSubject" ? `${subjectGuide.overlay}<text class="label" x="35" y="535">Auto subject guide: ${subjectGuide.note}</text>` : "";
      if (style === "bodyFirst") overlay = '<text class="label" x="35" y="535">Body-first: trace only the outside shape before adding face.</text>';
      if (style === "faceMap") overlay = '<rect class="guide" x="185" y="235" width="150" height="105" rx="35"></rect><text class="label" x="35" y="535">Face map: keep eyes and mouth inside this soft box.</text>';
      if (style === "limbMap") overlay = '<circle class="guide" cx="145" cy="300" r="35"></circle><circle class="guide" cx="375" cy="300" r="35"></circle><circle class="guide" cx="215" cy="410" r="28"></circle><circle class="guide" cx="305" cy="410" r="28"></circle>';
      if (style === "stickerSafe") overlay = '<rect class="guide" x="110" y="90" width="300" height="360" rx="75"></rect><text class="label" x="35" y="535">Sticker-safe: keep key details inside the rounded boundary.</text>';
      if (style === "symmetry") overlay = '<line class="guide" x1="210" y1="100" x2="210" y2="445"></line><line class="guide" x1="310" y1="100" x2="310" y2="445"></line>';
      if (style === "iconGrid") overlay = '<rect class="guide" x="120" y="120" width="280" height="280" rx="60"></rect><line class="guide" x1="260" y1="120" x2="260" y2="400"></line><line class="guide" x1="120" y1="260" x2="400" y2="260"></line>';
      if (style === "expressionZones") overlay = '<ellipse class="guide" cx="260" cy="280" rx="95" ry="70"></ellipse><text class="label" x="35" y="535">Expression zone: only adjust the face inside this oval.</text>';
      if (style === "accessoryZone") overlay = '<rect class="guide" x="320" y="90" width="95" height="130" rx="30"></rect><text class="label" x="35" y="535">Accessory zone: keep decoration away from the face.</text>';
      if (style === "shadowMap") overlay = '<path class="guide" d="M165 360 C220 415 315 415 365 360"></path><text class="label" x="35" y="535">Shadow map: put one shadow under the lower body.</text>';
      if (style === "fourPanel") overlay = '<line class="guide" x1="260" y1="70" x2="260" y2="460"></line><line class="guide" x1="90" y1="265" x2="430" y2="265"></line><text class="label" x="35" y="535">Four panels: body, face, limbs, final polish.</text>';
      if (style === "worksheet") overlay = '<rect class="guide" x="80" y="80" width="360" height="400" rx="35"></rect><text class="label" x="35" y="535">Worksheet mode: trace, redraw, then hide the guide.</text>';
      if (style === "plushBody") overlay = '<circle class="guide" cx="205" cy="175" r="42"></circle><circle class="guide" cx="315" cy="175" r="42"></circle><text class="label" x="35" y="535">Plush body: keep ears/head bumps soft and round.</text>';
      if (style === "fruitSlice") overlay = '<circle class="guide" cx="260" cy="265" r="118"></circle><path class="guide" d="M260 147 L260 383 M158 210 L362 320 M158 320 L362 210"></path><text class="label" x="35" y="535">Fruit guide: think juicy round body + simple slice lines.</text>';
      if (style === "potionBottle") overlay = '<rect class="guide" x="218" y="100" width="84" height="70" rx="12"></rect><ellipse class="guide" cx="260" cy="285" rx="105" ry="135"></ellipse><text class="label" x="35" y="535">Potion guide: neck first, bottle body second.</text>';
      if (style === "cloudPuff") overlay = '<circle class="guide" cx="195" cy="250" r="55"></circle><circle class="guide" cx="260" cy="220" r="70"></circle><circle class="guide" cx="330" cy="250" r="55"></circle><text class="label" x="35" y="535">Cloud guide: build the body from overlapping puffs.</text>';
      if (style === "robotGrid") overlay = '<rect class="guide" x="165" y="145" width="190" height="235" rx="35"></rect><line class="guide" x1="165" y1="225" x2="355" y2="225"></line><line class="guide" x1="260" y1="145" x2="260" y2="380"></line><text class="label" x="35" y="535">Robot guide: use a cleaner grid and keep corners rounded.</text>';
      if (style === "ghostDrape") overlay = '<line class="guide" x1="150" y1="210" x2="370" y2="210"></line><path class="guide" d="M150 390 L180 360 L215 390 L245 360 L285 390 L325 360 L370 390"></path><text class="label" x="35" y="535">Ghost guide: top is soft, bottom is draped and wavy.</text>';
      if (style === "gemFacet") overlay = '<path class="guide" d="M185 150 L260 235 L335 150 M130 235 L260 235 L390 235"></path><text class="label" x="35" y="535">Gem guide: use a few clean facet lines only.</text>';
      if (style === "letterBuild") overlay = '<rect class="guide" x="165" y="120" width="190" height="285" rx="25"></rect><text class="label" x="35" y="535">Letter guide: build the mascot from chunky letter strokes.</text>';
      if (style === "numberBuild") overlay = '<rect class="guide" x="175" y="140" width="170" height="240" rx="25"></rect><text class="label" x="35" y="535">Number guide: keep the number readable before adding a face.</text>';
      if (style === "badgeEmblem") overlay = '<path class="guide" d="M260 115 L360 175 L360 325 L260 385 L160 325 L160 175 Z"></path><text class="label" x="35" y="535">Badge guide: strong centered emblem shape first.</text>';
      if (style === "weatherSymbol") overlay = '<circle class="guide" cx="260" cy="230" r="55"></circle><path class="guide" d="M245 290 L220 360 L275 325 L250 400"></path><text class="label" x="35" y="535">Weather guide: one symbol body + one forecast accent.</text>';
      if (style === "shellSpiral") overlay = '<path class="guide" d="M170 330 C210 190 300 160 365 220"></path><path class="guide" d="M190 340 C225 245 290 225 342 262"></path><path class="guide" d="M210 350 C240 285 286 278 325 305"></path><text class="label" x="35" y="535">Shell guide: use layered shell arcs, not random rib lines.</text>';
      if (style === "aquaticFin") overlay = '<path class="guide" d="M165 292 C220 212 320 212 373 260"></path><path class="guide" d="M258 250 C275 205 320 198 350 215"></path><path class="guide" d="M270 315 C300 325 325 345 342 372"></path><text class="label" x="35" y="535">Aquatic guide: long body flow first, fin accents second.</text>';
      if (style === "deviceScreen") overlay = '<rect class="guide" x="182" y="160" width="156" height="205" rx="22"></rect><circle class="guide" cx="260" cy="180" r="4"></circle><text class="label" x="35" y="535">Device guide: frame first, screen inner area second.</text>';
      if (style === "clothingFold") overlay = '<path class="guide" d="M190 165 C225 140 295 140 330 165"></path><line class="guide" x1="180" y1="195" x2="340" y2="195"></line><path class="guide" d="M210 330 C235 350 285 350 310 330"></path><text class="label" x="35" y="535">Clothing guide: neckline first, body fall second.</text>';
      if (style === "musicStem") overlay = '<line class="guide" x1="292" y1="118" x2="292" y2="330"></line><ellipse class="guide" cx="250" cy="342" rx="42" ry="30"></ellipse><text class="label" x="35" y="535">Music guide: stem first, note head second.</text>';
      if (style === "wandArc") overlay = '<path class="guide" d="M180 390 L325 145"></path><circle class="guide" cx="180" cy="390" r="42"></circle><path class="guide" d="M325 145 C350 145 362 165 352 190"></path><text class="label" x="35" y="535">Magic guide: use one main relic axis and one charm cue.</text>';
      if (style === "orbitRing") overlay = '<circle class="guide" cx="260" cy="265" r="118"></circle><ellipse class="guide" cx="260" cy="265" rx="170" ry="56"></ellipse><text class="label" x="35" y="535">Orbit guide: sphere first, orbit ring second.</text>';
      if (style === "packageFold") overlay = '<path class="guide" d="M150 180 L260 120 L370 180 L260 240 Z"></path><line class="guide" x1="260" y1="240" x2="260" y2="420"></line><text class="label" x="35" y="535">Package guide: top flap first, body folds second.</text>';
      if (style === "furnitureBuild") overlay = '<line class="guide" x1="175" y1="300" x2="345" y2="300"></line><line class="guide" x1="210" y1="300" x2="210" y2="402"></line><line class="guide" x1="310" y1="300" x2="310" y2="402"></line><text class="label" x="35" y="535">Furniture guide: seat or top plane first, then support legs.</text>';
      if (style === "gardenPot") overlay = '<rect class="guide" x="185" y="188" width="150" height="198" rx="10"></rect><path class="guide" d="M215 160 C235 120 275 120 260 180 M300 160 C320 130 340 150 318 182"></path><text class="label" x="35" y="535">Garden guide: container first, leaf or sprout cues second.</text>';
      if (style === "creatureHorn") overlay = '<path class="guide" d="M208 160 L190 112 M312 160 L330 112"></path><ellipse class="guide" cx="260" cy="268" rx="126" ry="132"></ellipse><text class="label" x="35" y="535">Creature guide: round body first, horn/tuft accents second.</text>';
      if (style === "logoAxis") overlay = '<line class="guide" x1="260" y1="110" x2="260" y2="405"></line><line class="guide" x1="135" y1="265" x2="385" y2="265"></line><text class="label" x="35" y="535">Logo axis: use strong vertical and horizontal balance lines.</text>';

      return `
        <text class="label" x="24" y="32">TRACE ORDER: 1 body → 2 guide → 3 eyes → 4 mouth → 5 limbs/twist</text>
        <line class="guide" x1="260" y1="82" x2="260" y2="440"></line>
        <line class="guide" x1="130" y1="275" x2="390" y2="275"></line>
        ${style === "autoSubject" ? '' : '<ellipse class="guide" cx="260" cy="265" rx="145" ry="180"></ellipse>'}
        ${body}
        <path class="feature" d="M155 300 Q112 305 105 342"></path>
        <path class="feature" d="M365 300 Q408 305 415 342"></path>
        <path class="feature" d="M215 392 Q205 425 178 435"></path>
        <path class="feature" d="M305 392 Q315 425 342 435"></path>
        ${eyes}
        ${mouth}
        ${emotionGuide.overlay}
        ${twistGuide.overlay}
        ${twistSvg}
        ${overlay}
        <text class="label" x="35" y="486">${emotionGuide.label}</text>
        <text class="label" x="35" y="510">${twistGuide.label}</text>
        <text class="label" x="35" y="508">Import into Procreate, lower opacity, draw on a new layer.</text>
      `;
    }



    function miniBlueprintSvg(type, emotion, twist, stage) {
      const body = makeBody(type);
      const face = makeFace(emotion);
      const eyes = face[0];
      const mouth = face[1];
      const twistSvg = twists[twist] ? twists[twist][3] : "";
      const emotionGuide = getEmotionBlueprintGuide(emotion);
      const twistGuide = getTwistBlueprintGuide(twist);

      const guides = getStageGuides(type, stage);

      const limbs = `
        <path class="feature" d="M155 300 Q112 305 105 342"></path>
        <path class="feature" d="M365 300 Q408 305 415 342"></path>
        <path class="feature" d="M215 392 Q205 425 178 435"></path>
        <path class="feature" d="M305 392 Q315 425 342 435"></path>
      `;

      let content = "";
      if (stage === "body") content = `${body}`;
      if (stage === "guide") content = `${guides}${body}`;
      if (stage === "face") content = `${guides}${body}${eyes}${mouth}${emotionGuide.overlay}`;
      if (stage === "limbs") content = `${guides}${body}${limbs}${eyes}${mouth}${emotionGuide.overlay}`;
      if (stage === "final") content = `${guides}${wrapBlueprintLayer(body + limbs, "body")}${wrapBlueprintLayer(eyes + mouth, "face")}${wrapBlueprintLayer(emotionGuide.overlay, "emotion")}${wrapBlueprintLayer(twistGuide.overlay + twistSvg, "twist")}<path class="guide" d="M165 360 C220 415 315 415 365 360"></path>`;

      return `<svg viewBox="0 0 520 520" aria-hidden="true">${content}</svg>`;
    }


    function renderTraceStepPanels(data) {
      const steps = [
        ["1. Body only", "body"],
        ["2. Guide lines", "guide"],
        ["3. Face placement", "face"],
        ["4. Tiny limbs", "limbs"],
        ["5. Twist + polish", "final"]
      ];

      document.getElementById("traceStepPanels").innerHTML = steps.map(([label, stage]) => `
        <div class="trace-panel">
          <strong>${label}</strong>
          ${miniBlueprintSvg(data.type, data.emotion, data.twist, stage)}
        </div>
      `).join("");
    }


    function phaseLayerName(index) {
      const names = [
        "Rough shape layer",
        "Guide layer",
        "Face test layer",
        "Detail sketch layer",
        "Clean line layer",
        "Flat color layer",
        "Shadow/highlight layer",
        "Final check"
      ];
      return names[index] || "Practice layer";
    }


    function phaseCanvasLook(index) {
      const looks = [
        "You should only see a simple outer shape.",
        "You should see light guide lines, not finished details.",
        "You should see the expression starting to read.",
        "You should see tiny limbs/details attached lightly.",
        "You should see clean confident lines.",
        "You should see flat readable color.",
        "You should see one shadow and one highlight.",
        "You should see a mascot that still reads when zoomed out."
      ];
      return looks[index] || "You should see one clear improvement.";
    }


    function getPaletteRoles(palette) {
      const colors = (palette && palette.colors) ? palette.colors : [];
      if (!colors.length) return [];
      return [
        { role: "Body", color: colors[0], tip: "main mascot shape" },
        { role: "Accent", color: colors[1] || colors[0], tip: "twist or cheeks" },
        { role: "Soft fill", color: colors[2] || colors[0], tip: "secondary area" },
        { role: "Shadow", color: colors[colors.length - 2] || colors[1] || colors[0], tip: "one small shadow" },
        { role: "Highlight", color: colors[colors.length - 1] || colors[0], tip: "shine spot only" }
      ];
    }


    function exportWorksheet() {
      const title = document.getElementById("title")?.textContent || "Mascot Spark Worksheet";
      const meta = document.getElementById("meta")?.textContent || "";
      const goal = document.getElementById("goal")?.textContent || "";
      const palette = document.getElementById("lessonPaletteName")?.textContent || "";
      const drawFirst = Array.from(document.querySelectorAll("#drawFirstPanels .draw-card")).map((card, i) => `${i + 1}. ${card.innerText}`).join("\\n\\n");
      const phases = Array.from(document.querySelectorAll("#phases .phase")).map((phase, i) => `${i + 1}. ${phase.innerText}`).join("\\n\\n");
      const checks = Array.from(document.querySelectorAll("#checks .check")).map((check, i) => `${i + 1}. ${check.innerText}`).join("\\n");
      const remix = `One change: ${document.getElementById("remixOne")?.textContent || ""}\\nSecond version: ${document.getElementById("remixTwo")?.textContent || ""}`;

      const worksheet = [
        "MASCOT SPARK WORKSHEET",
        "=======================",
        "",
        title,
        meta,
        "",
        "GOAL",
        goal,
        "",
        "PALETTE",
        palette,
        "",
        "PRACTICE INTELLIGENCE",
        skill,
        "",
        "MASCOT ANATOMY",
        anatomy,
        "",
        "SUBJECT MINI-RULES",
        rules,
        "",
        "VERSION 2 CHALLENGE",
        version2,
        "",
        "DRAW THIS FIRST",
        drawFirst,
        "",
        "STEP-BY-STEP PHASES",
        phases,
        "",
        "CHECKLIST",
        checks,
        "",
        "VERSION 2 CHALLENGE",
        remix,
        "",
        "REDRAW REFLECTION",
        document.getElementById("redrawReflection")?.value || "",
        "",
        "REFLECTION",
        "What improved?",
        "",
        "What would I redraw?",
        ""
      ].join("\\n");

      const blob = new Blob([worksheet], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "mascot-spark";
      a.href = url;
      a.download = `${safeTitle}-worksheet.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      status("Worksheet exported locally as a text file.", "ok");
    }






    function updateTodayPractice(data) {
      const title = document.getElementById("todayPracticeTitle");
      const goal = document.getElementById("todayPracticeGoal");
      const subject = document.getElementById("todaySubject");
      const skill = document.getElementById("todaySkill");
      const next = document.getElementById("todayNext");

      if (!data) return;
      const skillLabel = skillFocusData?.[data.skillFocus]?.title || "Practice";
      if (title) title.textContent = `${data.subjectName || "Mascot"} · ${skillLabel}`;
      if (goal) goal.textContent = `Goal: ${data.goal || "Follow the guided step mode."}`;
      if (subject) subject.textContent = `Subject: ${data.subjectName || "—"}`;
      if (skill) skill.textContent = `Skill: ${skillLabel}`;
      if (next) next.textContent = `Next: ${data.phases?.[0]?.[0] || "Start Step 1"}`;
    }


    function inlineBlueprintExportStyles(clone) {
      const classRules = {
        guide: {
          stroke: "rgba(255,255,255,.58)",
          "stroke-width": "2",
          "stroke-dasharray": "7 8",
          fill: "none",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        shape: {
          stroke: "#ffffff",
          "stroke-width": "5",
          fill: "#ffffff",
          "fill-opacity": ".055",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        feature: {
          stroke: "#ffffff",
          "stroke-width": "5",
          fill: "none",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        },
        solid: {
          fill: "#ffffff",
          stroke: "none"
        },
        label: {
          fill: "rgba(255,255,255,.88)",
          "font-size": "13",
          "font-weight": "850",
          "font-family": "Arial, sans-serif"
        },
        "shade-zone-label": {
          fill: "#DCEEFF",
          "font-size": "11",
          "font-weight": "850",
          "font-family": "Arial, sans-serif"
        }
      };

      clone.querySelectorAll("*").forEach(node => {
        const classes = Array.from(node.classList || []);
        classes.forEach(cls => {
          const rule = classRules[cls];
          if (!rule) return;
          Object.entries(rule).forEach(([attr, value]) => {
            if (!node.hasAttribute(attr)) node.setAttribute(attr, value);
          });
        });

        const tag = node.tagName ? node.tagName.toLowerCase() : "";
        const drawingTag = ["path", "line", "polyline"].includes(tag);
        if (drawingTag && !node.hasAttribute("fill") && !node.hasAttribute("stroke")) {
          node.setAttribute("fill", "none");
          node.setAttribute("stroke", "#ffffff");
          node.setAttribute("stroke-width", "4");
          node.setAttribute("stroke-linecap", "round");
          node.setAttribute("stroke-linejoin", "round");
        }
      });
    }


    function svgElementToString(svg, transparent = false) {
      if (!svg) return "";
      const clone = svg.cloneNode(true);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      clone.setAttribute("width", "1600");
      clone.setAttribute("height", "1600");
      clone.setAttribute("viewBox", clone.getAttribute("viewBox") || "0 0 520 560");

      inlineBlueprintExportStyles(clone);

      const viewBox = (clone.getAttribute("viewBox") || "0 0 520 560").split(/\s+/).map(Number);
      const x = Number.isFinite(viewBox[0]) ? viewBox[0] : 0;
      const y = Number.isFinite(viewBox[1]) ? viewBox[1] : 0;
      const w = Number.isFinite(viewBox[2]) ? viewBox[2] : 520;
      const h = Number.isFinite(viewBox[3]) ? viewBox[3] : 560;

      if (!transparent) {
        const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bg.setAttribute("x", String(x));
        bg.setAttribute("y", String(y));
        bg.setAttribute("width", String(w));
        bg.setAttribute("height", String(h));
        bg.setAttribute("fill", "#173b63");
        clone.insertBefore(bg, clone.firstChild);
      }

      return `<?xml version="1.0" encoding="UTF-8"?>\n${new XMLSerializer().serializeToString(clone)}`;
    }


    async function downloadCurrentBlueprintPng() {
      const svg = document.getElementById("blueprintSvg");
      if (!svg) {
        status("No blueprint found to export.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, "mascot-spark-blueprint.png");
    }


    function downloadBlueprintPng() {
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) {
        status("Open Blueprint Studio first.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, `mascot-spark-blueprint-${blueprintStudioStage || "final"}.png`);
    }


    let beginnerFlowIndex = 0;

    let blueprintLabelsHidden = false;


    function getLockedIds() {
      return {
        subject: document.getElementById("lockSubject")?.checked,
        emotion: document.getElementById("lockEmotion")?.checked,
        twist: document.getElementById("lockTwist")?.checked,
        palette: document.getElementById("lockPalette")?.checked,
        blueprint: document.getElementById("lockBlueprint")?.checked,
        skill: document.getElementById("lockSkill")?.checked
      };
    }


    function randomizeIfUnlocked(id, locked) {
      if (!locked) randomFromOptions(id);
    }


    function generateSimilar() {
      if (!currentLessonData) {
        newLesson(true);
        return;
      }

      const locked = getLockedIds();
      const keepSubjectPack = document.getElementById("subjectPack")?.value || "all";
      filterSubjectsByPack(keepSubjectPack);

      randomizeIfUnlocked("lessonType", locked.subject);
      randomizeIfUnlocked("emotion", locked.emotion);
      randomizeIfUnlocked("funTwist", locked.twist);
      randomizeIfUnlocked("paletteMood", locked.palette);
      randomizeIfUnlocked("blueprintStyle", locked.blueprint);
      randomizeIfUnlocked("skillFocus", locked.skill);

      // Keep general learning shape stable.
      setSelect("creativeMode", document.getElementById("creativeMode")?.value || "cozy");
      setSelect("level", document.getElementById("level")?.value || "tiny");

      newLesson(true);
      status("Generated a similar lesson with unlocked details changed.", "ok");
    }


    function svgStringToPngBlob(svgString, width = 1600, height = 1600, transparent = false) {
      return new Promise((resolve, reject) => {
        const encoded = encodeURIComponent(svgString)
          .replace(/'/g, "%27")
          .replace(/"/g, "%22");
        const url = `data:image/svg+xml;charset=utf-8,${encoded}`;
        const img = new Image();

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d", { alpha: true });

          ctx.clearRect(0, 0, width, height);

          if (!transparent) {
            ctx.fillStyle = "#173b63";
            ctx.fillRect(0, 0, width, height);
          }

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(blob => {
            if (blob) resolve(blob);
            else reject(new Error("Could not create PNG blob."));
          }, "image/png");
        };

        img.onerror = () => reject(new Error("Could not render SVG as PNG."));

        img.src = url;
      });
    }

    async function downloadSvgElementAsPng(svg, filename, transparent = false) {
      try {
        const svgString = svgElementToString(svg, transparent);
        const blob = await svgStringToPngBlob(svgString, 1600, 1600, transparent);
        downloadBlob(blob, filename);
        status(transparent ? "Transparent PNG exported." : "PNG exported.", "ok");
      } catch (error) {
        status(error.message || "PNG export failed.", "bad");
      }
    }


    function downloadCurrentBlueprintTransparentPng() {
      const svg = document.getElementById("blueprintSvg");
      if (!svg) {
        status("No blueprint found to export.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, "mascot-spark-blueprint-transparent.png", true);
    }


    function downloadBlueprintTransparentPng() {
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) {
        status("Open Blueprint Studio first.", "bad");
        return;
      }
      downloadSvgElementAsPng(svg, `mascot-spark-blueprint-${blueprintStudioStage || "final"}-transparent.png`, true);
    }


    function currentLessonForExport() {
      const data = currentLessonData || {};
      const ctx = typeof getCurrentCoachContext === "function" ? getCurrentCoachContext() : {};
      const shade = typeof getCurrentShadeContext === "function" ? getCurrentShadeContext() : {};
      return { data, ctx, shade };
    }


    function generateImagePrompt() {
      const { data, ctx, shade } = currentLessonForExport();
      const palette = ctx.palette || {};
      const paletteText = palette.colors && palette.colors.length
        ? `${palette.label}: ${palette.colors.join(", ")}`
        : (palette.label || "soft mascot palette");

      const prompt = [
        `A beginner-friendly mascot character concept of a ${data.subjectName || ctx.subject?.[0] || "cute mascot"}.`,
        `Emotion: ${data.emotionName || ctx.emotion?.[0] || "cute expressive"}.`,
        `Tiny twist/accessory: ${data.twistName || ctx.twist?.[0] || "one small charming detail"}.`,
        `Shape language: ${data.subjectBase || "simple rounded body"}, low face placement, readable silhouette, cute icon-friendly proportions.`,
        `Palette: ${paletteText}.`,
        `Shading: ${shade.shadeStyle || "soft plush shading"}, light from ${shade.lightDirection || "top left"}, simple shadow and one clean highlight.`,
        `Style: clean Procreate-friendly mascot design, rounded forms, soft sticker clarity, gentle texture, no complex background.`,
        `Beginner drawing reference only: clear construction, simple face, one main accessory, no clutter.`
      ].join(" ");

      const box = document.getElementById("imagePromptOutput");
      if (box) box.value = prompt;
      status("AI image prompt generated.", "ok");
      showTab("tab-review");
    }

    async function copyImagePrompt() {
      const box = document.getElementById("imagePromptOutput");
      if (!box || !box.value.trim()) generateImagePrompt();
      try {
        await navigator.clipboard.writeText(document.getElementById("imagePromptOutput").value);
        status("Image prompt copied.", "ok");
      } catch {
        status("Copy failed. Select the prompt text and copy manually.", "bad");
      }
    }


    function generateCritiquePrep() {
      const { data } = currentLessonForExport();
      const subject = data.subjectName || "subject";
      const emotion = data.emotionName || "emotion";
      const twist = data.twistName || "tiny twist";
      const skill = data.skillFocus ? (skillFocusData[data.skillFocus]?.title || data.skillFocus) : "current skill";

      const sections = [
        {
          heading: "First check",
          items: [
            `Can you still tell it is a ${subject}?`,
            "Does the silhouette read when zoomed out?",
            "Is the face slightly below center?",
            `Does the expression clearly show ${emotion}?`
          ]
        },
        {
          heading: "Twist check",
          items: [
            `Does the ${twist} support the mascot instead of covering the face?`,
            "Is the twist smaller than the main body?",
            "Would the mascot still work if the twist was removed?"
          ]
        },
        {
          heading: "Shading check",
          items: [
            "Is there one clear main shadow?",
            "Is there one clear highlight?",
            "Did you avoid shading every edge?",
            "Does the color still feel clean, not muddy?"
          ]
        },
        {
          heading: "Version 2 fix",
          items: [
            `Redraw only the part related to ${skill}.`,
            "Make one change, not five.",
            "Compare Version 1 and Version 2 before judging yourself."
          ]
        }
      ];

      const box = document.getElementById("critiquePrepOutput");
      if (box) {
        box.innerHTML = sections.map(section => `
          <section>
            <h4>${section.heading}</h4>
            <ul>${section.items.map(item => `<li>${item}</li>`).join("")}</ul>
          </section>
        `).join("");
      }
      showTab("tab-review");
      status("Critique checklist generated.", "ok");
    }


    function collectFullBackupData() {
      const keys = [
        "mascotSparkStash",
        "mascotSparkPracticeMemory",
        "mascotSparkRedrawTracker",
        "mascotSparkApiKey",
        "mascotSparkModel",
        "mascotSparkFocusMode",
        "mascotSparkViewMode",
        "mascotSparkTheme"
      ];

      const storage = {};
      keys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value !== null) storage[key] = value;
      });

      return {
        app: "Mascot Spark",
        version: APP_VERSION || "V30",
        exportedAt: new Date().toISOString(),
        storage
      };
    }


    function exportFullBackup() {
      const backup = collectFullBackupData();
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      downloadBlob(blob, `mascot-spark-full-backup-${backup.version || "v30"}.json`);
      const box = document.getElementById("backupStatus");
      if (box) box.textContent = "Full backup exported.";
      status("Full app backup exported.", "ok");
    }

    async function importFullBackup(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const backup = JSON.parse(text);
        if (!backup || backup.app !== "Mascot Spark" || !backup.storage) {
          throw new Error("This does not look like a Mascot Spark backup.");
        }

        Object.entries(backup.storage).forEach(([key, value]) => {
          if (typeof value === "string") localStorage.setItem(key, value);
        });

        const box = document.getElementById("backupStatus");
        if (box) box.textContent = `Imported backup from ${backup.exportedAt || "unknown date"}. Reloading...`;
        status("Backup imported. Reloading app.", "ok");
        setTimeout(() => location.reload(), 700);
      } catch (error) {
        const box = document.getElementById("backupStatus");
        if (box) box.textContent = error.message || "Import failed.";
        status(error.message || "Import failed.", "bad");
      } finally {
        event.target.value = "";
      }
    }



    function getBlueprintVariant() {
      return document.getElementById("blueprintVariant")?.value || "simple";
    }


    function wrapBlueprintLayer(svg, layerName) {
      return `<g class="bp-${layerName}">${svg || ""}</g>`;
    }


    function applyBlueprintVariantOverlay(type, variant) {
      const label = blueprintVariants[variant] || "Simple";
      const overlays = {
        simple: '<rect class="guide bp-variant" x="138" y="112" width="244" height="312" rx="34"></rect>',
        cute: '<ellipse class="guide bp-variant" cx="260" cy="270" rx="142" ry="170"></ellipse><path class="guide bp-variant" d="M175 350 Q260 412 345 350"></path>',
        icon: '<rect class="guide bp-variant" x="132" y="132" width="256" height="256" rx="56"></rect><circle class="guide bp-variant" cx="260" cy="260" r="132"></circle>',
        plush: '<ellipse class="guide bp-variant" cx="260" cy="282" rx="136" ry="158"></ellipse><path class="guide bp-variant" d="M190 380 Q260 430 330 380"></path><path class="guide bp-variant" d="M165 240 Q140 285 165 330"></path><path class="guide bp-variant" d="M355 240 Q380 285 355 330"></path>',
        dynamic: '<path class="guide bp-variant" d="M166 360 C210 250 292 160 374 180"></path><line class="guide bp-variant" x1="168" y1="386" x2="378" y2="142"></line>'
      };
      return `${overlays[variant] || overlays.simple}<text class="label" x="35" y="462">Blueprint personality: ${label}</text>`;
    }


    function applyBlueprintLayerClasses() {
      const targets = [document.getElementById("blueprintSvg"), document.getElementById("blueprintStudioSvg")].filter(Boolean);
      targets.forEach(svg => {
        Object.entries(blueprintLayerState).forEach(([key, visible]) => {
          svg.classList.toggle(`blueprint-layer-hidden-${key}`, !visible);
        });
      });
    }


    function toggleBlueprintLayer(layer) {
      if (!(layer in blueprintLayerState)) return;
      blueprintLayerState[layer] = !blueprintLayerState[layer];
      applyBlueprintLayerClasses();
      status(`${layer} layer ${blueprintLayerState[layer] ? "shown" : "hidden"}.`, "ok");
    }


    function getPracticeDashboardSuggestion(items = getStash()) {
      if (!items.length) {
        return "Save a few lessons to unlock practice suggestions.";
      }
      const drawn = items.filter(x => x.status === "drawn" || x.status === "redrawn").length;
      const redrawn = items.filter(x => x.status === "redrawn").length;
      const favorites = items.filter(x => x.favorite).length;
      if (drawn === 0) return "Pick one saved lesson and mark it drawn. Do not wait for a perfect prompt.";
      if (redrawn === 0) return "Try one Version 2 redraw. Redrawing is where the learning starts.";
      if (favorites > drawn / 2) return "You are collecting strong prompts. Now convert one favorite into a finished drawing.";
      return "Good rhythm. Next: practice the least comfortable skill focus for one short session.";
    }


    function downloadShadeMapTransparentPng() {
      const svg = document.getElementById("shadeMapSvg");
      if (!svg) return;
      downloadSvgElementAsPng(svg, "mascot-spark-shading-map-transparent.png", true);
    }


    let timerRemaining = 0;

    let timerInitial = 0;

    let timerInterval = null;


    function randomFromOptions(id) {
      const el = document.getElementById(id);
      if (!el || !el.options.length) return null;
      const index = Math.floor(Math.random() * el.options.length);
      el.selectedIndex = index;
      return el.value;
    }


    function chooseSubjectFromPack(pack) {
      filterSubjectsByPack(pack);
      return randomFromOptions("lessonType");
    }


    function smartSurprise() {
      const surpriseType = document.getElementById("surpriseType")?.value || "softBeginner";
      const locked = getLockedIds();

      if (!locked.subject) {
        randomFromOptions("subjectPack");
        filterSubjectsByPack(document.getElementById("subjectPack")?.value || "all");
        randomFromOptions("lessonType");
      }

      randomizeIfUnlocked("emotion", locked.emotion);
      randomizeIfUnlocked("funTwist", locked.twist);
      randomizeIfUnlocked("paletteMood", locked.palette);
      randomizeIfUnlocked("blueprintStyle", locked.blueprint);
      randomizeIfUnlocked("skillFocus", locked.skill);

      [
        "level",
        "creativeMode",
        "drawOrderMode",
        "ideaPreset",
        "aiStyle",
        "shadeStyle",
        "lightDirection",
        "shadeIntensity",
        "shadeOutputType"
      ].forEach(id => randomFromOptions(id));

      if (surpriseType === "softBeginner") {
        setSelect("creativeMode", "cozy");
        setSelect("level", "tiny");
        if (!locked.blueprint) setSelect("blueprintStyle", "autoSubject");
      }

      if (surpriseType === "spookySweet") {
        if (!locked.subject) chooseSubjectFromPack("softMonster");
        if (!locked.blueprint) setSelect("blueprintStyle", "autoSubject");
        setSelect("shadeStyle", "spookyGlow");
      }

      if (surpriseType === "iconReady") {
        if (!locked.subject) chooseSubjectFromPack("logo");
        if (!locked.skill) setSelect("skillFocus", "iconReadability");
        if (!locked.blueprint) setSelect("blueprintStyle", "iconGrid");
        setSelect("shadeStyle", "flatIcon");
      }

      if (surpriseType === "paletteFirst" && !locked.palette) {
        randomFromOptions("paletteMood");
        if (!locked.skill) setSelect("skillFocus", "paletteControl");
      }

      if (surpriseType === "blueprintFirst" && !locked.blueprint) {
        randomFromOptions("blueprintStyle");
      }

      if (surpriseType === "skillDrill") {
        if (!locked.skill) randomFromOptions("skillFocus");
        setSelect("level", "study");
      }

      if (surpriseType === "chaosButton") {
        setSelect("creativeMode", "remix");
        if (!locked.blueprint) randomFromOptions("blueprintStyle");
        if (!locked.palette) randomFromOptions("paletteMood");
      }

      // Final freshening, still respecting locks.
      randomizeIfUnlocked("emotion", locked.emotion);
      randomizeIfUnlocked("funTwist", locked.twist);

      document.getElementById("customIdea").value = "";
      renderPalettePreview();
      setupTimerFromSelect?.();
      newLesson(true);
      status(`Surprise randomized with locks respected: ${surpriseTypes[surpriseType] || "Surprise"}.`, "ok");
    }


    function setSelect(id, value) {
      const el = document.getElementById(id);
      if (!el) return;
      if (Array.from(el.options).some(o => o.value === value)) el.value = value;
    }


    function makeItMore(mode) {
      if (mode === "cuter") {
        setSelect("emotion", "delightedShy");
        setSelect("funTwist", "blushStripe");
        setSelect("blueprintStyle", "faceMap");
      }
      if (mode === "spookier") {
        setSelect("emotion", "spooky");
        setSelect("funTwist", "ghostWisp");
        setSelect("blueprintStyle", "ghostDrape");
      }
      if (mode === "simpler") {
        setSelect("level", "micro");
        setSelect("creativeMode", "cozy");
        setSelect("skillFocus", "shapeControl");
        setSelect("blueprintStyle", "bodyFirst");
        setSelect("funTwist", "none");
      }
      if (mode === "icon") {
        setSelect("skillFocus", "iconReadability");
        setSelect("blueprintStyle", "iconGrid");
        setSelect("level", "iconSheet");
      }
      if (mode === "plush") {
        setSelect("blueprintStyle", "plushBody");
        setSelect("funTwist", "button");
        setSelect("skillFocus", "shapeControl");
      }
      if (mode === "chaos") {
        setSelect("creativeMode", "remix");
        setSelect("emotion", "chaoticSoft");
        setSelect("funTwist", "mismatchedButtons");
      }

      newLesson();
      status(`Adjusted: ${mode.replace(/([A-Z])/g, " $1").toLowerCase()}.`, "ok");
    }


    function setupTimerFromSelect() {
      const key = document.getElementById("sessionTimer")?.value || "none";
      const label = document.getElementById("timerLabel");
      const plan = document.getElementById("timerPlan");
      const seconds = key === "five" ? 300 : key === "ten" ? 600 : key === "twenty" ? 1200 : 0;
      timerInitial = seconds;
      timerRemaining = seconds;
      if (label) label.textContent = sessionTimers[key] || "No timer";
      if (plan) plan.textContent = timerPlans[key] || timerPlans.none;
      updateTimerDisplay();
    }


    function startSessionTimer() {
      if (!timerInitial) setupTimerFromSelect();
      if (!timerInitial) {
        status("Choose a timer first.", "bad");
        return;
      }
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timerRemaining = Math.max(0, timerRemaining - 1);
        updateTimerDisplay();
        if (timerRemaining <= 0) {
          clearInterval(timerInterval);
          status("Timer complete. Stop, review, or draw Version 2.", "ok");
        }
      }, 1000);
      status("Timer started.", "ok");
    }


    function pauseSessionTimer() {
      clearInterval(timerInterval);
      status("Timer paused.", "ok");
    }


    function resetSessionTimer() {
      clearInterval(timerInterval);
      setupTimerFromSelect();
      status("Timer reset.", "ok");
    }


    function markRedrawStage(stage) {
      const key = "mascotSparkRedrawTracker";
      const tracker = JSON.parse(localStorage.getItem(key) || "{}");
      tracker[stage] = new Date().toLocaleString();
      localStorage.setItem(key, JSON.stringify(tracker));
      status(stage === "v1" ? "Version 1 marked as drawn." : "Version 2 marked as drawn.", "ok");
    }


    function saveRedrawReflection() {
      const value = document.getElementById("redrawReflection")?.value.trim() || "";
      const tracker = JSON.parse(localStorage.getItem("mascotSparkRedrawTracker") || "{}");
      tracker.reflection = value;
      tracker.updated = new Date().toLocaleString();
      localStorage.setItem("mascotSparkRedrawTracker", JSON.stringify(tracker));
      status("Redraw reflection saved locally.", "ok");
    }


    function updatePracticeMemory() {
      const memory = JSON.parse(localStorage.getItem("mascotSparkPracticeMemory") || "[]");
      const subject = document.getElementById("lessonType")?.value || "";
      const skill = document.getElementById("skillFocus")?.value || "auto";
      const emotion = document.getElementById("emotion")?.value || "";
      memory.unshift({ subject, skill, emotion, date: Date.now() });
      const trimmed = memory.slice(0, 8);
      localStorage.setItem("mascotSparkPracticeMemory", JSON.stringify(trimmed));

      const box = document.getElementById("practiceMemoryCard");
      if (!box) return;

      const skillCounts = trimmed.reduce((acc, item) => {
        acc[item.skill] = (acc[item.skill] || 0) + 1;
        return acc;
      }, {});
      const topSkill = Object.entries(skillCounts).sort((a, b) => b[1] - a[1])[0];
      const suggestion = topSkill && topSkill[1] >= 2
        ? `You practiced ${skillFocuses[topSkill[0]] || topSkill[0]} a few times. Try a different skill focus next for balance.`
        : "Keep generating lessons. After a few, Mascot Spark will suggest what to practice next.";

      box.textContent = suggestion;
    }


    const APP_VERSION = "V43";

    const APP_CACHE_NAME = "mascot-spark-v43";


    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      }[char]));
    }


    function getCurrentLessonSnapshot() {
      const c = typeof getCurrentCoachContext === "function" ? getCurrentCoachContext() : null;
      return {
        id: Date.now().toString(36),
        title: document.getElementById("title")?.textContent || "Mascot Lesson",
        meta: document.getElementById("meta")?.textContent || "",
        goal: document.getElementById("goal")?.textContent || "",
        subject: c?.subject?.[0] || "",
        emotion: c?.emotion?.[0] || "",
        twist: c?.twist?.[0] || "",
        palette: c?.palette?.label || "Auto",
        blueprint: c?.blueprint || "",
        lesson: c?.lesson?.[0] || "",
        skillFocus: document.getElementById("skillFocusCard")?.innerText || "",
        anatomy: document.getElementById("anatomyCard")?.innerText || "",
        rules: document.getElementById("subjectRulesCard")?.innerText || "",
        version2: document.getElementById("version2Card")?.innerText || "",
        date: new Date().toLocaleString(),
        status: "not-drawn",
        favorite: false,
        note: ""
      };
    }


    function getStash() {
      try {
        return JSON.parse(localStorage.getItem("mascotSparkStash") || "[]");
      } catch {
        return [];
      }
    }


    function setStash(items) {
      localStorage.setItem("mascotSparkStash", JSON.stringify(items));
      renderStash();
    }


    function saveCurrentLessonToStash() {
      const stash = getStash();
      const item = getCurrentLessonSnapshot();
      stash.unshift(item);
      setStash(stash);
      showTab("tab-stash");
      status("Lesson saved to Stash.", "ok");
    }


    function updateStashItem(id, changes) {
      const stash = getStash().map(item => item.id === id ? { ...item, ...changes } : item);
      setStash(stash);
    }


    function deleteStashItem(id) {
      const stash = getStash().filter(item => item.id !== id);
      setStash(stash);
    }


    function clearStash() {
      if (!confirm("Clear all saved Mascot Stash lessons in this browser?")) return;
      setStash([]);
      status("Stash cleared.", "ok");
    }


    function exportStashJson() {
      const blob = new Blob([JSON.stringify(getStash(), null, 2)], { type: "application/json" });
      downloadBlob(blob, "mascot-spark-stash.json");
      status("Stash JSON exported.", "ok");
    }


    function downloadBlob(blob, filename) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    }


    function worksheetHtmlFromItem(item, includeCurrentBlueprint = false) {
      const swatches = Array.from(document.querySelectorAll("#lessonPaletteSwatches .lesson-palette-swatch"))
        .map(s => `<span class="swatch" style="${s.getAttribute("style") || ""}"></span>`)
        .join("");
      const currentBlueprint = includeCurrentBlueprint ? document.getElementById("blueprintSvg")?.outerHTML || "" : "";

      return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${escapeHtml(item.title)} — Mascot Spark Worksheet</title>
<style>
  body { font-family: system-ui, -apple-system, sans-serif; padding: 28px; line-height: 1.45; color: #2f2a30; background: #fff7fb; }
  h1 { margin: 0 0 6px; font-size: 34px; }
  .meta { color: #7D6D79; font-weight: 700; margin-bottom: 18px; }
  section { border: 1px solid #D7C4F4; background: #FDEEF5; border-radius: 18px; padding: 16px; margin: 14px 0; }
  h2 { margin: 0 0 8px; font-size: 15px; text-transform: uppercase; letter-spacing: .08em; color: #7D6D79; }
  .swatches { display: flex; gap: 8px; flex-wrap: wrap; }
  .swatch { width: 30px; height: 30px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,.15); }
  svg { width: 100%; max-height: 600px; background: #173b63; border-radius: 18px; }
  pre { white-space: pre-wrap; font-family: inherit; margin: 0; }
  .reflection { min-height: 120px; border: 1px dashed #BFAFD0; border-radius: 14px; background: white; }
</style>
</head>
<body>
<h1>${escapeHtml(item.title)}</h1>
<div class="meta">${escapeHtml(item.meta)}<br>${escapeHtml(item.date || "")}</div>
<section><h2>Goal</h2><p>${escapeHtml(item.goal)}</p></section>
<section><h2>Practice Intelligence</h2><pre>${escapeHtml(item.skillFocus || "")}</pre></section>
<section><h2>Mascot Anatomy</h2><pre>${escapeHtml(item.anatomy || "")}</pre></section>
<section><h2>Subject Rules</h2><pre>${escapeHtml(item.rules || "")}</pre></section>
<section><h2>Version 2 Challenge</h2><pre>${escapeHtml(item.version2 || "")}</pre></section>
<section><h2>Palette</h2><p>${escapeHtml(item.palette)}</p><div class="swatches">${swatches}</div></section>
${currentBlueprint ? `<section><h2>Blueprint</h2>${currentBlueprint}</section>` : ""}
<section><h2>Reflection</h2><div class="reflection"></div></section>
</body>
</html>`;
    }


    function exportHtmlWorksheet() {
      const item = getCurrentLessonSnapshot();
      const htmlDoc = worksheetHtmlFromItem(item, true);
      const safe = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "mascot-spark";
      downloadBlob(new Blob([htmlDoc], { type: "text/html;charset=utf-8" }), `${safe}-worksheet.html`);
      status("HTML worksheet exported locally.", "ok");
    }


    function downloadStashWorksheet(id) {
      const item = getStash().find(x => x.id === id);
      if (!item) return;
      const htmlDoc = worksheetHtmlFromItem(item, false);
      const safe = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "mascot-spark";
      downloadBlob(new Blob([htmlDoc], { type: "text/html;charset=utf-8" }), `${safe}-worksheet.html`);
    }


    let blueprintStudioStage = "final";


    function extractSvgInner(svgString) {
      const start = svgString.indexOf(">");
      const end = svgString.lastIndexOf("</svg>");
      if (start === -1 || end === -1) return "";
      return svgString.slice(start + 1, end);
    }


    function downloadBlueprintSvg() {
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) return;
      const doc = svgElementToString(svg, false);
      downloadBlob(new Blob([doc], { type: "image/svg+xml;charset=utf-8" }), "mascot-spark-blueprint.svg");
      status("Blueprint SVG exported.", "ok");
    }


    function clearLocalAppData() {
      if (!confirm("Reset all local Mascot Spark data in this browser? Export your stash first if needed.")) return;
      localStorage.clear();
      status("Local data cleared. Reloading...", "ok");
      setTimeout(() => location.reload(), 500);
    }

    async function clearServiceWorkerCaches() {
      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map(key => caches.delete(key)));
      }
      status("Browser cache storage cleared for this app. Reloading...", "ok");
      setTimeout(() => location.reload(), 500);
    }



    function emotionSvgFace(config) {
      const label = config.label || "emotion";
      const fill = config.fill || "#FFD7E8";
      const eye = config.eye || "dot";
      const mouth = config.mouth || "smile";
      const accent = config.accent || "sparkle";
      const ghost = ["spooky-sweet", "hauntedHappy"].includes(config.key);
      const safeLabel = String(label).toLowerCase();
      const base = ghost
        ? `<path d="M12 35c0-15 9-25 20-25s20 10 20 25v16c0 2-2.3 3.2-4 2l-4-3-4 3-4-3-4 3-4-3-4 3-4-3-4 3c-1.7 1.2-4-.1-4-2z" fill="${fill}"/>`
        : `<circle cx="32" cy="32" r="26" fill="${fill}"/>`;
      const eyes = {
        happy:`<path d="M19 29c2.5-4 7.5-4 10 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/><path d="M35 29c2.5-4 7.5-4 10 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/>`,
        sleepy:`<path d="M20 31c3 2 6 2 9 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/><path d="M36 31c3 2 6 2 9 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        dot:`<circle cx="24" cy="32" r="3.4" fill="#33243A"/><circle cx="40" cy="32" r="3.4" fill="#33243A"/>`,
        wide:`<circle cx="24" cy="31" r="4.8" fill="#33243A"/><circle cx="40" cy="31" r="4.8" fill="#33243A"/><circle cx="25.5" cy="29.5" r="1.2" fill="#fff"/><circle cx="41.5" cy="29.5" r="1.2" fill="#fff"/>`,
        wink:`<circle cx="24" cy="32" r="3.4" fill="#33243A"/><path d="M37 32c2.5-1.8 5.4-1.8 8 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        star:`<path d="M19 29l4-6 4 6" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M37 29l4-6 4 6" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`,
        half:`<path d="M20 33h9" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/><path d="M36 33h9" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/>`,
        xeye:`<circle cx="24" cy="32" r="4" fill="#33243A"/><path d="M37 28l8 8M45 28l-8 8" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        animal:`<circle cx="24" cy="35" r="3.2" fill="#5A3025"/><circle cx="40" cy="35" r="3.2" fill="#5A3025"/><path d="M31 38l1.5 2 1.5-2z" fill="#5A3025"/>`
      }[eye] || `<circle cx="24" cy="32" r="3.4" fill="#33243A"/><circle cx="40" cy="32" r="3.4" fill="#33243A"/>`;
      const mouths = {
        smile:`<path d="M24 41c5 6 12 6 17 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/>`,
        tiny:`<path d="M29 42c2 1.5 5 1.5 7 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        frown:`<path d="M27 44c3-3 7-3 10 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`,
        line:`<path d="M27 43h10" stroke="#33243A" stroke-width="3.2" stroke-linecap="round"/>`,
        o:`<circle cx="32" cy="43" r="4.5" fill="none" stroke="#33243A" stroke-width="3"/>`,
        smirk:`<path d="M27 43c5 3 10 2 14-2" fill="none" stroke="#33243A" stroke-width="3.3" stroke-linecap="round"/>`,
        tongue:`<path d="M24 43c5 5 12 5 17 0" fill="none" stroke="#33243A" stroke-width="3.5" stroke-linecap="round"/><path d="M35 44c0 6 5 8 8 4" fill="#FF7CA8" stroke="#33243A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`
      }[mouth] || `<path d="M29 42c2 1.5 5 1.5 7 0" fill="none" stroke="#33243A" stroke-width="3" stroke-linecap="round"/>`;
      const accents = {
        sparkle:`<path d="M48 15l2 4 4 .6-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4-.6z" fill="#FFF6A8"/>`,
        sweat:`<path d="M48 24c4 4 3 9-1 12-4-3-5-8 1-12z" fill="#68B7FF"/>`,
        crown:`<path d="M21 19l4-7 7 6 7-6 4 7z" fill="#FFE16A" stroke="#B78522" stroke-width="2" stroke-linejoin="round"/>`,
        question:`<path d="M50 13c3 0 5 2 5 5 0 3-3 4-5 6" fill="none" stroke="#6C63FF" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="28" r="1.7" fill="#6C63FF"/>`,
        z:`<path d="M47 13h8l-8 8h8" fill="none" stroke="#6B7FC7" stroke-width="3" stroke-linejoin="round"/>`,
        tear:`<path d="M45 34c4 5 2 10-2 12-4-2-5-7 2-12z" fill="#7DB9FF" opacity=".9"/>`,
        cloud:`<path d="M14 20c3-5 10-7 15-3 2-4 8-4 11 0 5-2 9 1 10 6H14z" fill="#F6F1FF" opacity=".9"/>`,
        bandage:`<path d="M17 20h15v7H17z" fill="#FFF4F7" stroke="#C76984" stroke-width="2" stroke-linejoin="round"/><path d="M24.5 21v5M22 23.5h5" stroke="#C76984" stroke-width="2" stroke-linecap="round"/>`,
        ears:`<path d="M16 19l8-8 5 11z" fill="${fill}" stroke="#5A3025" stroke-width="2.5" stroke-linejoin="round"/><path d="M48 19l-8-8-5 11z" fill="${fill}" stroke="#5A3025" stroke-width="2.5" stroke-linejoin="round"/>`,
        glow:`<circle cx="32" cy="12" r="2.2" fill="#FFF7B8"/><circle cx="17" cy="19" r="1.8" fill="#FFF7B8"/><circle cx="48" cy="20" r="1.8" fill="#FFF7B8"/><circle cx="14" cy="34" r="1.6" fill="#FFF7B8"/><circle cx="50" cy="35" r="1.6" fill="#FFF7B8"/>`,
        anger:`<path d="M14 19l3-5 2 5 5 2-5 2-2 5-3-5-5-2z" fill="#FF6B6B"/>`
      }[accent] || "";
      const blush = `<ellipse cx="18" cy="39" rx="5" ry="3.2" fill="#FF8FB8" opacity=".55"/><ellipse cx="46" cy="39" rx="5" ry="3.2" fill="#FF8FB8" opacity=".55"/>`;
      return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safeLabel} emotion">${accent === "ears" ? accents : ""}${base}${eyes}${mouth}${blush}${accent !== "ears" ? accents : ""}</svg>`;
    }


    let selectedEmotionKey = "happy";

    function getEmotionEntry(key){ return emotionMap[key] || emotionMap.happy; }

    function emotionKeys(){ return Object.keys(emotionMap); }

    function syncLessonEmotionToLab(){
      const key=document.getElementById("emotion")?.value || "happy";
      if(emotionMap[key]) selectedEmotionKey=key;
      renderEmotionLab(); showTab("tab-emotions");
    }

    function selectedEmotionSvgDocument(){ return getEmotionEntry(selectedEmotionKey).svg.trim(); }

    function pickAutoSkill(type, emotion, blueprintStyle) {
      if (["icon", "badge", "sticker", "logoMark", "emoji"].includes(type)) return "iconReadability";
      if (["object", "food", "fruit", "robot", "device", "potion", "book", "package", "drink"].includes(type)) return "objectCharacter";
      if (["grumpy", "spooky", "sadHopeful", "hauntedHappy", "chaoticSoft", "gloomySweet", "softSuspicious"].includes(emotion)) return "expressionDesign";
      if (blueprintStyle === "faceMap") return "facePlacement";
      if (blueprintStyle === "limbMap") return "tinyLimbs";
      return "shapeControl";
    }


    function getEffectiveSkillFocus(type, emotion, blueprintStyle) {
      const selected = document.getElementById("skillFocus")?.value || "auto";
      return selected === "auto" ? pickAutoSkill(type, emotion, blueprintStyle) : selected;
    }


    function getSubjectRules(type) {
      const map = {
        fruit: ["Start with a round or heart-like body.", "Readable cue: stem, leaf, shine, or seed.", "Avoid too many seeds."],
        vegetable: ["Start with one simple vegetable silhouette.", "Readable cue: leaf top, root point, or cap.", "Avoid realistic texture overload."],
        robot: ["Start with a rounded rectangle.", "Readable cue: antenna, screen, bolt, or panel.", "Avoid sharp mechanical clutter."],
        device: ["Start with the outer device frame.", "Readable cue: screen area.", "Avoid placing details too close to edges."],
        potion: ["Start with neck, then bottle body.", "Readable cue: cork, liquid line, label.", "Avoid a neck wider than the bottle."],
        cloud: ["Start from overlapping puff circles.", "Readable cue: puffy top edge.", "Avoid flat cloud edges."],
        ghost: ["Start with a dome top.", "Readable cue: wavy draped bottom.", "Avoid too many bottom scallops."],
        gem: ["Start with a diamond body.", "Readable cue: 1–3 facet lines.", "Avoid too many inner lines."],
        shell: ["Start with one curved shell wedge.", "Readable cue: layered ribs.", "Avoid random rib directions."],
        aquatic: ["Start with long body flow.", "Readable cue: tail, fin, bubble, or droplet.", "Avoid fins before body."],
        letter: ["Start with chunky letter strokes.", "Readable cue: letter silhouette.", "Avoid hiding the letter with face/details."],
        number: ["Start with chunky number shape.", "Readable cue: number silhouette.", "Avoid decorating before the number reads."],
        package: ["Start with box/fold logic.", "Readable cue: flap, tape, corner.", "Avoid losing the fold directions."],
        furniture: ["Start with top/seat plane.", "Readable cue: legs or cushion.", "Avoid starting with legs first."],
        garden: ["Start with pot/base.", "Readable cue: sprout, leaf, watering shape.", "Avoid leaves hiding the pot."]
      };
      return map[type] || ["Start with the biggest readable silhouette.", "Keep one clear subject cue.", "Avoid adding details before the subject reads."];
    }


    function getVersion2Challenge(data) {
      const skill = data.skillFocus;
      if (skill === "facePlacement") return { title: "Face Fix Version", body: "Draw the same mascot again, but move the face lower and make the mouth smaller." };
      if (skill === "shapeControl") return { title: "Silhouette Version", body: "Keep the face the same, but redraw the body shape three different ways." };
      if (skill === "expressionDesign") return { title: "Expression Version", body: "Keep the same body, but make three different mouth options for the duo emotion." };
      if (skill === "tinyLimbs") return { title: "Limb Version", body: "Keep the same body and face, but make the limbs 30% smaller." };
      if (skill === "objectCharacter") return { title: "Readability Version", body: "Redraw the same mascot with one subject cue larger and one decoration removed." };
      if (skill === "iconReadability") return { title: "Icon Version", body: "Redraw it as a tiny square icon and remove anything that disappears." };
      if (skill === "paletteControl") return { title: "Color Version", body: "Use only body color, one accent, one shadow, and one highlight." };
      return { title: "One-Change Version", body: "Draw the same mascot again, but change only one thing: face, body, color, or twist." };
    }


    function fixMyMascot() {
      const key = document.getElementById("fixProblem")?.value || "faceWeird";
      const fix = fixProblemData[key] || fixProblemData.faceWeird;
      renderCoachOutput({
        title: "Fix My Mascot",
        summary: `${fix.title}: ${fix.fixFirst}`,
        sections: [
          { heading: "Try this", items: fix.steps },
          { heading: "Avoid", items: [fix.avoid] },
          { heading: "Version 2", items: ["Duplicate the sketch or redraw the same mascot. Change only this fix area first."] }
        ],
        note: "Do not solve every problem at once. One fix teaches more than five random changes."
      });
      status("Fix plan created.", "ok");
    }


    function getCurrentCoachContext() {
      const subjectKey = document.getElementById("lessonType")?.value || "blob";
      const emotionKey = document.getElementById("emotion")?.value || "happy";
      const paletteKey = document.getElementById("paletteMood")?.value || "auto";
      const blueprintKey = document.getElementById("blueprintStyle")?.value || "classic";
      const twistKey = document.getElementById("funTwist")?.value || "none";
      const lessonKey = document.getElementById("level")?.value || "normal";

      return {
        subjectKey,
        emotionKey,
        paletteKey,
        blueprintKey,
        twistKey,
        lessonKey,
        subject: subjectData[subjectKey] || subjectData.blob,
        emotion: emotions[emotionKey] || emotions.happy,
        palette: palettes[paletteKey] || palettes.auto,
        blueprint: blueprintOptions[blueprintKey] || blueprintOptions.classic,
        twist: twists[twistKey] || twists.none,
        lesson: lessonSizes[lessonKey] || lessonSizes.normal,
        flavor: document.getElementById("customIdea")?.value.trim() || flavors[document.getElementById("ideaPreset")?.value] || "none"
      };
    }


    function subjectLogicFallback() {
      const c = getCurrentCoachContext();
      return {
        title: "Subject-Specific Drawing Logic",
        summary: `Use the selected subject as the core shape language. The goal is for the mascot to still read clearly as ${c.subject[0].toLowerCase()} even after you add emotion and a tiny twist.`,
        sections: [
          {
            heading: "Start with",
            items: [
              `Begin with ${c.subject[1]}.`,
              `Focus on ${c.subject[2]} before adding personality details.`,
              `Keep the outside silhouette simple first, then add the face.`
            ]
          },
          {
            heading: "What makes it read",
            items: [
              `Preserve one obvious cue that says “${c.subject[0]}.”`,
              `Use only one or two subject-defining details so the shape stays beginner-friendly.`,
              `If the subject is getting lost, remove decorations before changing the main body.`
            ]
          },
          {
            heading: "Avoid",
            items: [
              `Do not let the optional flavor turn it into a different subject.`,
              `Do not add the face before the base shape reads clearly.`,
              `Do not stack multiple accessories if they cover the subject cue.`
            ]
          }
        ],
        note: `Good rule: if you zoom out and it no longer reads as ${c.subject[0].toLowerCase()}, simplify the silhouette before doing anything else.`
      };
    }


    function emotionCoachFallback() {
      const c = getCurrentCoachContext();
      return {
        title: "Emotion Coach",
        summary: `Use one dominant face cue, one body cue, and one optional extra mark. That keeps the selected duo emotion readable without making the mascot too busy.`,
        sections: [
          {
            heading: "Expression formula",
            items: [
              `Face cue: ${c.emotion[1]}.`,
              `Body cue: ${c.emotion[2]}.`,
              `Keep the face low on the body so the emotion reads cuter and more mascot-like.`
            ]
          },
          {
            heading: "How to balance the duo emotion",
            items: [
              `Choose one side of the duo emotion as the main read and let the second side be the accent.`,
              `Use the mouth and eye shape first before adding any extra symbol.`,
              `If the emotion feels muddy, remove one detail and make the mouth clearer.`
            ]
          },
          {
            heading: "Avoid",
            items: [
              c.emotion[3],
              `Do not use too many emotional symbols at once.`,
              `Do not let the twist overpower the face.`
            ]
          }
        ],
        note: "Best practice: keep one emotional cue in the face and one in the pose or accessory, then stop."
      };
    }


    function paletteCoachFallback() {
      const c = getCurrentCoachContext();
      const colors = (c.palette.colors || []);
      const body = colors[0] || "your main color";
      const secondary = colors[1] || colors[0] || "a secondary color";
      const accent = colors[2] || colors[1] || colors[0] || "an accent color";
      const shadow = colors[Math.max(0, colors.length - 2)] || secondary;
      const highlight = colors[Math.max(0, colors.length - 1)] || accent;

      return {
        title: "Palette Coach",
        summary: `Use the selected palette in a simple order: main body color first, one supporting accent second, then one shadow and one highlight. That keeps the mascot colorful without becoming muddy.`,
        sections: [
          {
            heading: "Suggested color jobs",
            items: [
              `Main body: ${body}`,
              `Secondary detail: ${secondary}`,
              `Accent: ${accent}`,
              `Shadow: ${shadow}`,
              `Highlight or shine: ${highlight}`
            ]
          },
          {
            heading: "Keep it clean",
            items: [
              `Do not try to use every palette color equally.`,
              `Pick one main body color and let the others support it.`,
              `Use the lightest or brightest color in smaller doses so it feels special.`
            ]
          },
          {
            heading: "Avoid muddy color",
            items: [
              `Avoid scattering similar colors everywhere in tiny pieces.`,
              `Avoid adding too many shadows in different colors.`,
              `If the drawing looks muddy, reduce the palette use to body + one accent + one shadow.`
            ]
          }
        ],
        note: "If you feel unsure, stop after flat color + one shadow + one shine spot."
      };
    }



    function defaultShadeStyleForCurrentLesson() {
      const type = document.getElementById("lessonType")?.value || "blob";
      const emotion = document.getElementById("emotion")?.value || "happy";
      if (["food", "fruit", "dessert", "breakfast", "candy", "drink", "sauce"].includes(type)) return "gummyGloss";
      if (["icon", "badge", "sticker", "logoMark", "emoji"].includes(type)) return "flatIcon";
      if (["ghost", "tinyMonster"].includes(type) || ["spooky", "hauntedHappy", "eerieCalm", "cursedAdorable"].includes(emotion)) return "spookyGlow";
      if (["shell", "aquatic", "cloud", "weatherIcon"].includes(type)) return "rainyMist";
      return "softPlush";
    }


    function getCurrentShadeContext() {
      const coach = getCurrentCoachContext();
      return {
        ...coach,
        shadeStyleKey: document.getElementById("shadeStyle")?.value || defaultShadeStyleForCurrentLesson(),
        shadeStyle: shadeStyles[document.getElementById("shadeStyle")?.value || defaultShadeStyleForCurrentLesson()] || "Soft Plush",
        lightKey: document.getElementById("lightDirection")?.value || "topLeft",
        lightDirection: lightDirections[document.getElementById("lightDirection")?.value || "topLeft"] || "Top Left",
        intensityKey: document.getElementById("shadeIntensity")?.value || "tinyShade",
        intensity: shadeIntensities[document.getElementById("shadeIntensity")?.value || "tinyShade"] || "Tiny Shade",
        outputKey: document.getElementById("shadeOutputType")?.value || "stepByStep",
        outputType: shadeOutputTypes[document.getElementById("shadeOutputType")?.value || "stepByStep"] || "Step-by-step"
      };
    }


    function getShadeRoleColors(context) {
      const colors = (context.palette.colors && context.palette.colors.length ? context.palette.colors : ["#F27BA6", "#FFB7D0", "#FFF7FB", "#8EDAF7", "#D7C4F4"]).slice();
      const body = colors[0] || "#F27BA6";
      const secondary = colors[1] || body;
      const accent = colors[2] || secondary;
      const shadow = colors[Math.max(0, colors.length - 2)] || secondary;
      const highlight = colors[Math.max(0, colors.length - 1)] || accent;
      const blush = colors[1] || "#FFB7D0";
      const outline = colors.length > 5 ? colors[0] : "#352733";
      return { body, secondary, accent, shadow, highlight, blush, outline };
    }


    function shadeSvgClasses(svg, colors) {
      if (!svg) return "";
      return svg
        .replace(/class="shape"/g, `fill="${colors.body}" stroke="${colors.outline}" stroke-width="4" stroke-linejoin="round"`)
        .replace(/class="solid"/g, `fill="${colors.outline}"`)
        .replace(/class="feature"/g, `fill="none" stroke="${colors.outline}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`)
        .replace(/class="guide"/g, `fill="none" stroke="${colors.highlight}" stroke-width="2.5" stroke-dasharray="8 8" stroke-linecap="round" stroke-linejoin="round"`);
    }


    function getSubjectShadeProfile(type) {
      const softRound = {
        label: "soft rounded mascot",
        mapNotes: [
          "Use one large curved lower-side shadow, not many little patches.",
          "Keep the highlight round and high on the form.",
          "Add a tiny contact shadow under the body so it sits on the page."
        ],
        svg: (colors) => `
          <path d="M178 320 C206 374 300 392 350 332 C334 388 296 424 250 414 C206 404 174 370 178 320 Z" fill="${colors.shadow}" opacity=".18"></path>
          <ellipse cx="215" cy="202" rx="46" ry="24" fill="#FFFFFF" opacity=".22" transform="rotate(-18 215 202)"></ellipse>
        `
      };

      const profiles = {
        ghost: {
          label: "translucent ghost",
          mapNotes: [
            "Shade very lightly under the eyes and along the lower scalloped edge.",
            "Use a pale rim glow instead of heavy body shadows.",
            "Leave the center mostly open so the ghost still feels translucent."
          ],
          svg: (colors) => `
            <path d="M155 370 C190 392 214 392 240 374 C266 392 294 392 320 374 C344 392 372 392 402 370" stroke="${colors.shadow}" stroke-width="14" stroke-linecap="round" fill="none" opacity=".18"></path>
            <ellipse cx="260" cy="214" rx="92" ry="42" fill="#FFFFFF" opacity=".16"></ellipse>
            <path d="M160 178 C198 116 320 98 366 184" stroke="${colors.highlight}" stroke-width="10" fill="none" opacity=".26" stroke-linecap="round"></path>
          `
        },
        fruit: {
          label: "round fruit form",
          mapNotes: [
            "Use one curved crescent shadow on the lower side of the fruit.",
            "Place one glossy highlight high on the opposite side.",
            "Keep blush and highlight separate so the color does not get muddy."
          ],
          svg: (colors) => `
            <path d="M190 338 C230 400 334 390 364 322 C348 388 306 424 252 410 C210 400 184 370 190 338 Z" fill="${colors.shadow}" opacity=".22"></path>
            <ellipse cx="218" cy="188" rx="42" ry="24" fill="#FFFFFF" opacity=".38" transform="rotate(-22 218 188)"></ellipse>
            <ellipse cx="244" cy="214" rx="18" ry="10" fill="#FFFFFF" opacity=".20" transform="rotate(-22 244 214)"></ellipse>
          `
        },
        snack: {
          label: "snack / candy mascot",
          mapNotes: [
            "Add a small side shadow where the form turns away from the light.",
            "Use one candy-like shine on the wrapper or top curve.",
            "Keep the edible surface clean; avoid dirty gray shadows."
          ],
          svg: (colors) => `
            <ellipse cx="320" cy="330" rx="82" ry="118" fill="${colors.shadow}" opacity=".19" transform="rotate(-15 320 330)"></ellipse>
            <ellipse cx="214" cy="200" rx="54" ry="26" fill="#FFFFFF" opacity=".30" transform="rotate(-16 214 200)"></ellipse>
            <path d="M164 382 C210 412 306 418 356 382" stroke="${colors.shadow}" stroke-width="10" fill="none" opacity=".12" stroke-linecap="round"></path>
          `
        },
        object: {
          label: "object mascot",
          mapNotes: [
            "Choose one plane as the shadow side.",
            "Put a narrow highlight on the top or front edge.",
            "Use contact shadows where handles, corners, straps, or lids overlap."
          ],
          svg: (colors) => `
            <path d="M292 166 L376 188 L382 378 L286 396 Z" fill="${colors.shadow}" opacity=".20"></path>
            <path d="M166 176 L276 156" stroke="#FFFFFF" stroke-width="10" opacity=".24" stroke-linecap="round"></path>
            <path d="M188 390 C236 414 304 414 356 390" stroke="${colors.shadow}" stroke-width="9" opacity=".18" fill="none" stroke-linecap="round"></path>
          `
        },
        icon: {
          label: "flat icon / badge",
          mapNotes: [
            "Use a thin lower-right shadow only.",
            "Use a clean top-left shine strip if needed.",
            "Keep shadows graphic and simple so the icon reads small."
          ],
          svg: (colors) => `
            <path d="M166 350 L360 350 L376 390 L150 390 Z" fill="${colors.shadow}" opacity=".18"></path>
            <path d="M164 164 L356 164" stroke="#FFFFFF" stroke-width="9" opacity=".25" stroke-linecap="round"></path>
            <path d="M372 178 L390 360" stroke="${colors.shadow}" stroke-width="8" opacity=".16" stroke-linecap="round"></path>
          `
        },
        shape: {
          label: "specific shape mascot",
          mapNotes: [
            "Shade according to the shape's geometry, not like a generic blob.",
            "Put a contact shadow where the shape visually rests.",
            "Use highlights to clarify the shape type: corner, curve, point, loop, or arch."
          ],
          svg: (colors) => `
            <path d="M178 340 C222 394 308 394 356 338" stroke="${colors.shadow}" stroke-width="18" opacity=".16" fill="none" stroke-linecap="round"></path>
            <path d="M188 178 C228 142 300 138 342 172" stroke="#FFFFFF" stroke-width="10" opacity=".22" fill="none" stroke-linecap="round"></path>
            <circle cx="260" cy="420" r="22" fill="${colors.shadow}" opacity=".11"></circle>
          `
        },
        letter: {
          label: "letter / number mascot",
          mapNotes: [
            "Use inner-edge shadows where the stroke bends.",
            "Keep the face area clear of heavy shading.",
            "Add one clean shine along the upper stroke."
          ],
          svg: (colors) => `
            <path d="M210 358 C238 384 292 384 322 356" stroke="${colors.shadow}" stroke-width="14" opacity=".17" fill="none" stroke-linecap="round"></path>
            <path d="M204 178 C234 154 296 154 326 178" stroke="#FFFFFF" stroke-width="9" opacity=".22" fill="none" stroke-linecap="round"></path>
          `
        },
        mask: {
          label: "mask / face object",
          mapNotes: [
            "Shade under eyes, nose, and lower mask edge.",
            "Use highlight on the forehead or upper cheek plane.",
            "Keep the expression readable; do not cover the eyes with shadow."
          ],
          svg: (colors) => `
            <path d="M186 336 C220 372 302 376 340 334" stroke="${colors.shadow}" stroke-width="16" opacity=".20" fill="none" stroke-linecap="round"></path>
            <ellipse cx="214" cy="202" rx="46" ry="22" fill="#FFFFFF" opacity=".22" transform="rotate(-18 214 202)"></ellipse>
            <path d="M204 286 C238 306 284 306 318 286" stroke="${colors.shadow}" stroke-width="9" opacity=".13" fill="none" stroke-linecap="round"></path>
          `
        },
        tool: {
          label: "tool / device mascot",
          mapNotes: [
            "Shade the side plane and any grip/handle overlap.",
            "Highlight the top edge to show the object is solid.",
            "Use sharper shadow shapes than you would on plush blobs."
          ],
          svg: (colors) => `
            <path d="M304 170 L376 210 L366 384 L288 402 Z" fill="${colors.shadow}" opacity=".20"></path>
            <path d="M164 180 L270 154" stroke="#FFFFFF" stroke-width="8" opacity=".24" stroke-linecap="round"></path>
            <path d="M220 390 L364 380" stroke="${colors.shadow}" stroke-width="9" opacity=".16" stroke-linecap="round"></path>
          `
        }
      };

      const fruitTypes = ["fruit", "veggie", "dessert", "drink", "egg", "mushroom"];
      const snackTypes = ["snack", "candy", "cookie", "cake", "soda"];
      const objectTypes = ["mug", "book", "bag", "shoe", "lamp", "pencil", "key", "jar", "bottle", "chair", "teapot", "camera", "clock"];
      const iconTypes = ["icon", "badge", "sticker", "logoMark", "emoji"];
      const shapeTypes = ["abstractShape", "circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack"];
      const letterTypes = ["letter", "number"];
      const maskTypes = ["mask", "monster", "softMonster", "ghost"];
      const toolTypes = ["brush", "paintTube", "eraser", "procreateBrush", "tabletPen"];

      if (type === "ghost") return profiles.ghost;
      if (fruitTypes.includes(type)) return profiles.fruit;
      if (snackTypes.includes(type)) return profiles.snack;
      if (objectTypes.includes(type)) return profiles.object;
      if (iconTypes.includes(type)) return profiles.icon;
      if (shapeTypes.includes(type)) return profiles.shape;
      if (letterTypes.includes(type)) return profiles.letter;
      if (maskTypes.includes(type)) return profiles.mask;
      if (toolTypes.includes(type)) return profiles.tool;
      return softRound;
    }


    function getShadeMapZones(context, colors) {
      const style = context.shadeStyleKey;
      const light = context.lightKey;
      const intensity = context.intensityKey;
      const type = document.getElementById("lessonType")?.value || "blob";
      const profile = getSubjectShadeProfile(type);

      const zones = {
        topLeft: {
          shadow: '<ellipse cx="318" cy="336" rx="120" ry="140" fill="' + colors.shadow + '" opacity=".26" transform="rotate(-12 318 336)"></ellipse>',
          highlight: '<ellipse cx="212" cy="208" rx="72" ry="50" fill="' + colors.highlight + '" opacity=".55" transform="rotate(-18 212 208)"></ellipse>',
          rim: '<path d="M158 178 C182 140 220 124 244 120" stroke="' + colors.highlight + '" stroke-width="8" stroke-linecap="round" fill="none" opacity=".32"></path>'
        },
        topRight: {
          shadow: '<ellipse cx="202" cy="336" rx="120" ry="140" fill="' + colors.shadow + '" opacity=".26" transform="rotate(12 202 336)"></ellipse>',
          highlight: '<ellipse cx="308" cy="208" rx="72" ry="50" fill="' + colors.highlight + '" opacity=".55" transform="rotate(18 308 208)"></ellipse>',
          rim: '<path d="M362 178 C338 140 300 124 276 120" stroke="' + colors.highlight + '" stroke-width="8" stroke-linecap="round" fill="none" opacity=".32"></path>'
        },
        frontSoft: {
          shadow: '<ellipse cx="260" cy="350" rx="124" ry="108" fill="' + colors.shadow + '" opacity=".22"></ellipse>',
          highlight: '<ellipse cx="260" cy="196" rx="84" ry="42" fill="' + colors.highlight + '" opacity=".48"></ellipse>',
          rim: ''
        },
        underGlow: {
          shadow: '<ellipse cx="260" cy="216" rx="122" ry="88" fill="' + colors.shadow + '" opacity=".22"></ellipse>',
          highlight: '<ellipse cx="260" cy="368" rx="110" ry="74" fill="' + colors.highlight + '" opacity=".58"></ellipse>',
          rim: '<ellipse cx="260" cy="402" rx="102" ry="32" fill="' + colors.highlight + '" opacity=".18"></ellipse>'
        },
        backRim: {
          shadow: '<ellipse cx="260" cy="290" rx="120" ry="146" fill="' + colors.shadow + '" opacity=".28"></ellipse>',
          highlight: '',
          rim: '<path d="M165 205 C175 140 220 118 260 118 C300 118 345 140 355 205 C366 280 338 360 260 388 C182 360 154 280 165 205 Z" stroke="' + colors.highlight + '" stroke-width="12" fill="none" opacity=".55" stroke-linejoin="round"></path>'
        }
      };

      let picked = { ...(zones[light] || zones.topLeft) };

      let blush = '<circle cx="220" cy="308" r="18" fill="' + colors.blush + '" opacity=".22"></circle><circle cx="300" cy="308" r="18" fill="' + colors.blush + '" opacity=".22"></circle>';
      let extra = profile.svg(colors);
      let labels = `
        <text class="shade-zone-label" x="374" y="286">shadow side</text>
        <text class="shade-zone-label" x="166" y="154">highlight</text>
        <text class="shade-zone-label" x="210" y="442">contact shadow</text>
      `;

      if (intensity === "tinyShade") {
        blush = '';
      }
      if (intensity === "iconPolish") {
        blush = '';
        picked.shadow = picked.shadow.replace('opacity=".26"', 'opacity=".16"').replace('opacity=".22"', 'opacity=".16"').replace('opacity=".28"', 'opacity=".18"');
        picked.highlight = picked.highlight.replace('opacity=".55"', 'opacity=".38"').replace('opacity=".48"', 'opacity=".34"').replace('opacity=".58"', 'opacity=".38"');
      }
      if (intensity === "fullCute") {
        extra += '<ellipse cx="205" cy="178" rx="22" ry="12" fill="' + colors.highlight + '" opacity=".65" transform="rotate(-18 205 178)"></ellipse>';
      }
      if (intensity === "atmospheric") {
        extra += '<ellipse cx="260" cy="440" rx="132" ry="26" fill="' + colors.shadow + '" opacity=".18"></ellipse>';
      }

      if (style === "gummyGloss") {
        extra += '<ellipse cx="190" cy="182" rx="26" ry="14" fill="#FFFFFF" opacity=".55" transform="rotate(-22 190 182)"></ellipse><ellipse cx="222" cy="210" rx="16" ry="10" fill="#FFFFFF" opacity=".35" transform="rotate(-22 222 210)"></ellipse>';
      }
      if (style === "stickerShine" || style === "flatIcon") {
        blush = '';
        extra += '<ellipse cx="208" cy="196" rx="30" ry="16" fill="#FFFFFF" opacity=".45" transform="rotate(-18 208 196)"></ellipse>';
      }
      if (style === "spookyGlow") {
        extra += '<circle cx="260" cy="270" r="142" fill="' + colors.highlight + '" opacity=".06"></circle>';
      }
      if (style === "velvetShadow") {
        picked.shadow = picked.shadow.replace('opacity=".26"', 'opacity=".33"').replace('opacity=".22"', 'opacity=".28"').replace('opacity=".18"', 'opacity=".24"');
      }
      if (style === "rainyMist") {
        extra += '<ellipse cx="260" cy="176" rx="118" ry="34" fill="' + colors.highlight + '" opacity=".15"></ellipse><ellipse cx="260" cy="392" rx="138" ry="28" fill="' + colors.highlight + '" opacity=".08"></ellipse>';
      }
      if (style === "painterlySoft") {
        extra += '<path d="M164 322 C194 296 220 302 244 316" stroke="' + colors.shadow + '" stroke-width="10" stroke-linecap="round" fill="none" opacity=".14"></path><path d="M282 182 C308 170 330 182 346 200" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round" fill="none" opacity=".16"></path>';
      }

      return { shadow: picked.shadow, highlight: picked.highlight, rim: picked.rim, blush, extra, labels, profile };
    }


    function makeShadeMapSVG(context) {
      const colors = getShadeRoleColors(context);
      const type = document.getElementById("lessonType")?.value || "blob";
      const emotion = document.getElementById("emotion")?.value || "happy";
      const twist = document.getElementById("funTwist")?.value || "none";

      const rawBody = makeBody(type);
      const rawEyes = makeFace(emotion)[0];
      const rawMouth = makeFace(emotion)[1];
      const rawTwist = twists[twist] ? twists[twist][3] : "";

      const clipBody = rawBody.replace(/class="shape"/g, 'fill="#fff"');
      const body = shadeSvgClasses(rawBody, colors);
      const face = shadeSvgClasses(rawEyes + rawMouth, colors);
      const twistSvg = shadeSvgClasses(rawTwist, colors);
      const zones = getShadeMapZones(context, colors);

      return `
        <defs>
          <clipPath id="shadeClip">${clipBody}</clipPath>
        </defs>
        <rect x="0" y="0" width="520" height="560" fill="#173b63"></rect>
        <text x="24" y="38" fill="#DCEEFF" font-size="22" font-weight="800">${context.shadeStyle} · ${context.lightDirection}</text>
        <text x="24" y="62" fill="#A9C6DF" font-size="13">${context.intensity} · ${context.outputType}</text>
        <text x="24" y="84" fill="#A9C6DF" font-size="12">Subject logic: ${zones.profile.label}</text>
        <ellipse cx="260" cy="452" rx="124" ry="24" fill="#0E2B49" opacity=".55"></ellipse>

        ${body}
        <g clip-path="url(#shadeClip)">
          ${zones.shadow}
          ${zones.highlight}
          ${zones.blush}
          ${zones.extra}
        </g>
        ${zones.rim}
        ${twistSvg}
        ${face}
        ${zones.labels}

        <g>
          <rect x="24" y="470" width="156" height="64" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(220,238,255,.18)"></rect>
          <text x="40" y="492" fill="#DCEEFF" font-size="12" font-weight="800">SHADOW</text>
          <text x="40" y="510" fill="#A9C6DF" font-size="11">main form shadow</text>
          <circle cx="148" cy="502" r="10" fill="${colors.shadow}"></circle>

          <rect x="188" y="470" width="156" height="64" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(220,238,255,.18)"></rect>
          <text x="204" y="492" fill="#DCEEFF" font-size="12" font-weight="800">HIGHLIGHT</text>
          <text x="204" y="510" fill="#A9C6DF" font-size="11">shine / glow zone</text>
          <circle cx="312" cy="502" r="10" fill="${colors.highlight}"></circle>

          <rect x="352" y="470" width="144" height="64" rx="18" fill="rgba(255,255,255,.08)" stroke="rgba(220,238,255,.18)"></rect>
          <text x="368" y="492" fill="#DCEEFF" font-size="12" font-weight="800">BLUSH</text>
          <text x="368" y="510" fill="#A9C6DF" font-size="11">soft cheek warmth</text>
          <circle cx="470" cy="502" r="10" fill="${colors.blush}"></circle>
        </g>
      `;
    }


    function getShadingMapText(context) {
      const type = document.getElementById("lessonType")?.value || "blob";
      const profile = getSubjectShadeProfile(type);
      const base = [];

      if (context.lightKey === "topRight") {
        base.push(
          "Main shadow: lower-left side of the body.",
          "Highlight: upper-right side.",
          "Contact shadow: tiny shadow under the mascot."
        );
      } else if (context.lightKey === "frontSoft") {
        base.push(
          "Main shadow: soft low band across the lower body.",
          "Highlight: top-center soft oval.",
          "Contact shadow: small shadow directly underneath."
        );
      } else if (context.lightKey === "underGlow") {
        base.push(
          "Main shadow: upper half of the body.",
          "Glow highlight: lower body and lower edge.",
          "Contact shadow: keep it light so the glow still reads."
        );
      } else if (context.lightKey === "backRim") {
        base.push(
          "Main shadow: center/front plane of the body.",
          "Rim light: thin bright edge around the outside silhouette.",
          "Do not add many interior highlights with this setup."
        );
      } else {
        base.push(
          "Main shadow: lower-right side of the body.",
          "Highlight: upper-left side.",
          "Contact shadow: tiny shadow under the mascot."
        );
      }

      return [
        `Subject-specific logic: ${profile.label}.`,
        ...profile.mapNotes,
        ...base,
        "Accent shine: one tiny shine on the twist or accessory.",
        "Face-safe rule: do not cover the eyes or mouth with the main shadow."
      ];
    }


    function shadingLabFallback() {
      const c = getCurrentShadeContext();
      const roles = getShadeRoleColors(c);
      const simpleLayerPlan = c.intensityKey === "tinyShade"
        ? [
            "Layer 1: flat base color.",
            "Layer 2: contact shadow under mascot — multiply around 18–24%.",
            "Layer 3: main form shadow clipping mask — multiply around 20–25%.",
            "Layer 4: highlight clipping mask — normal/add around 30–40%."
          ]
        : [
            "Layer 1: blueprint guide at low opacity.",
            "Layer 2: rough sketch.",
            "Layer 3: clean line.",
            "Layer 4: flat body color.",
            "Layer 5: contact shadow under the mascot — multiply around 18–24%.",
            "Layer 6: main form shadow clipping mask — multiply around 20–30%.",
            "Layer 7: highlight / rim glow clipping mask — normal or add around 35–45%.",
            "Layer 8: blush / glow accents.",
            "Layer 9: optional texture polish at very low opacity."
          ];

      const styleNote = {
        softPlush: "Use very round shadow shapes. Think plush toy, not hard cel shading.",
        stickerShine: "Use clean, graphic shine spots that still read small.",
        gummyGloss: "Use one big glossy shine and maybe one tiny secondary shine.",
        painterlySoft: "Use loose soft brush shading, but stop early.",
        flatIcon: "Keep shadow simple so the mascot still reads at icon size.",
        spookyGlow: "Use soft glow instead of many hard shadows.",
        velvetShadow: "Use slightly deeper shadows, but keep the edges soft.",
        rainyMist: "Keep the contrast soft and slightly misty."
      }[c.shadeStyleKey] || "Keep it simple and readable.";

      const subjectProfile = getSubjectShadeProfile(document.getElementById("lessonType")?.value || "blob");
      const summary = `Use ${c.shadeStyle.toLowerCase()} with light from ${c.lightDirection.toLowerCase()}. This is a local smart SVG map, not AI image generation. It now uses ${subjectProfile.label} logic so the shadows fit the mascot type instead of using one generic blob shadow.`;

      const sections = [
        {
          heading: "Suggested color jobs",
          items: [
            `Body: ${roles.body}`,
            `Secondary detail: ${roles.secondary}`,
            `Shadow: ${roles.shadow}`,
            `Highlight or shine: ${roles.highlight}`,
            `Blush or warmth: ${roles.blush}`
          ]
        },
        {
          heading: "Smart local shading map",
          items: getShadingMapText(c)
        },
        {
          heading: "Traceable shadow zones",
          items: [
            "Blue map background stays separate from your drawing.",
            "Main form shadow shows the largest shadow shape to trace.",
            "Highlight zone shows where shine or glow belongs.",
            "Contact shadow shows where the mascot touches the ground.",
            "Labels identify shadow, highlight, and contact-shadow regions."
          ]
        },
        {
          heading: "Procreate layer plan",
          items: simpleLayerPlan
        },
        {
          heading: "Avoid muddy shading",
          items: [
            "Do not shade every edge.",
            "Do not use every palette color as a shadow.",
            "Do not make the shadow darker than the line art unless you want a dramatic style.",
            "Stop after one main shadow + one main shine if the mascot already reads."
          ]
        },
        {
          heading: "Version 2 shading challenge",
          items: [
            "Make one cleaner second version using fewer shading shapes.",
            "Try moving the highlight slightly higher or lower and compare the result.",
            "Export the shading map and trace only the shadow shape once."
          ]
        }
      ];

      if (c.outputKey === "mapOnly") {
        sections.splice(2, 2);
      }
      if (c.outputKey === "layersOnly") {
        sections.splice(0, 2);
      }

      return {
        title: `Full Emotion Set Integration — ${c.shadeStyle}`,
        summary,
        sections,
        note: styleNote
      };
    }


    function setShadePreset(mode) {
      if (mode === "simpler") {
        document.getElementById("shadeIntensity").value = "tinyShade";
        document.getElementById("shadeOutputType").value = "stepByStep";
        if (document.getElementById("shadeStyle").value === "velvetShadow") document.getElementById("shadeStyle").value = "softPlush";
      }
      if (mode === "glossy") {
        document.getElementById("shadeStyle").value = "gummyGloss";
        document.getElementById("shadeIntensity").value = "fullCute";
        document.getElementById("lightDirection").value = "topLeft";
      }
      if (mode === "icon") {
        document.getElementById("shadeStyle").value = "flatIcon";
        document.getElementById("shadeIntensity").value = "iconPolish";
        document.getElementById("shadeOutputType").value = "mapOnly";
      }
      renderShadeContext();
      renderShadeMap();
      renderShadeOutput(shadingLabFallback());
      status("Shade Lab preset applied.", "ok");
    }


    function downloadShadeMapSvg() {
      const svg = document.getElementById("shadeMapSvg");
      if (!svg) return;
      const doc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 560">${svg.innerHTML}</svg>`;
      downloadBlob(new Blob([doc], { type: "image/svg+xml;charset=utf-8" }), "mascot-spark-shading-map.svg");
      status("Shading map SVG exported.", "ok");
    }


    function downloadShadeMapPng() {
      const svg = document.getElementById("shadeMapSvg");
      if (!svg) return;
      downloadSvgElementAsPng(svg, "mascot-spark-shading-map.png");
    }

    

    function getTwistBlueprintGuide(twist) {
      const guides = {
        sparkle: {
          overlay: '<circle class="guide" cx="380" cy="158" r="34"></circle><path class="guide" d="M380 120 L380 196 M342 158 L418 158"></path>',
          label: "Twist guide: keep the sparkle in a corner zone away from the face."
        },
        hat: {
          overlay: '<rect class="guide" x="210" y="82" width="100" height="58" rx="14"></rect><line class="guide" x1="210" y1="140" x2="310" y2="140"></line>',
          label: "Twist guide: rest the tiny hat above the head, not over the eyes."
        },
        patch: {
          overlay: '<rect class="guide" x="326" y="300" width="58" height="52" rx="14"></rect>',
          label: "Twist guide: place the patch on the outer side wall, not the center face."
        },
        charm: {
          overlay: '<path class="guide" d="M360 322 Q400 352 390 402"></path><circle class="guide" cx="392" cy="416" r="26"></circle>',
          label: "Twist guide: use a side hanging path first, then place the charm shape."
        },
        freckle: {
          overlay: '<circle class="guide" cx="202" cy="308" r="18"></circle><circle class="guide" cx="328" cy="308" r="18"></circle>',
          label: "Twist guide: keep freckles in the cheek zones and make them tiny."
        },
        bow: {
          overlay: '<ellipse class="guide" cx="230" cy="155" rx="42" ry="28"></ellipse><circle class="guide" cx="230" cy="155" r="10"></circle>',
          label: "Twist guide: build a small bow side-cluster, then add the knot in the middle."
        },
        halo: {
          overlay: '<ellipse class="guide" cx="260" cy="92" rx="74" ry="24"></ellipse>',
          label: "Twist guide: float the halo above the mascot with a little breathing room."
        },
        fang: {
          overlay: '<rect class="guide" x="254" y="304" width="28" height="34" rx="8"></rect>',
          label: "Twist guide: the fang should hang from the mouth zone, not become the mouth."
        },
        glow: {
          overlay: '<path class="guide" d="M116 188 Q90 170 72 146"></path><path class="guide" d="M404 188 Q430 170 448 146"></path>',
          label: "Twist guide: keep glow marks on the outside silhouette as side accents."
        },
        ribbon: {
          overlay: '<path class="guide" d="M350 344 L430 380 L382 406 L430 438 L346 404"></path>',
          label: "Twist guide: let the ribbon trail from one side and stay behind the body."
        },
        stitches: {
          overlay: '<rect class="guide" x="142" y="214" width="46" height="118" rx="14"></rect>',
          label: "Twist guide: stack small stitch marks in a side strip, not all over."
        },
        leaf: {
          overlay: '<path class="guide" d="M260 138 C260 98 300 90 322 112 C292 118 274 130 260 138 Z"></path>',
          label: "Twist guide: grow the leaf from the top edge like a sprout."
        },
        starCheek: {
          overlay: '<circle class="guide" cx="202" cy="310" r="24"></circle>',
          label: "Twist guide: keep the star cheek inside one cheek circle only."
        },
        button: {
          overlay: '<circle class="guide" cx="203" cy="305" r="24"></circle>',
          label: "Twist guide: place the button cheek on one side and keep it smaller than the eye."
        },
        teardrop: {
          overlay: '<path class="guide" d="M320 270 C344 296 344 320 320 330 C296 320 296 296 320 270 Z"></path>',
          label: "Twist guide: hang the teardrop under one eye, not at the mouth."
        },
        bandage: {
          overlay: '<rect class="guide" x="326" y="278" width="66" height="38" rx="14"></rect><line class="guide" x1="346" y1="286" x2="370" y2="310"></line><line class="guide" x1="370" y1="286" x2="346" y2="310"></line>',
          label: "Twist guide: place the bandage on one side and keep it smaller than the face."
        },
        crown: {
          overlay: '<path class="guide" d="M214 142 L238 96 L260 136 L284 96 L308 142 Z"></path><line class="guide" x1="212" y1="146" x2="310" y2="146"></line>',
          label: "Twist guide: float the crown just above the top edge with a clear base line."
        },
        cape: {
          overlay: '<path class="guide" d="M166 238 C108 284 124 372 196 398"></path><path class="guide" d="M166 238 Q190 278 196 398"></path>',
          label: "Twist guide: keep the cape behind the body and visible on one side only."
        },
        wings: {
          overlay: '<path class="guide" d="M150 270 C94 226 88 316 146 326"></path><path class="guide" d="M370 270 C426 226 432 316 374 326"></path>',
          label: "Twist guide: mirror the wings lightly, but keep them smaller than the body."
        },
        antenna: {
          overlay: '<path class="guide" d="M230 145 Q210 100 180 95"></path><path class="guide" d="M290 145 Q310 100 340 95"></path><circle class="guide" cx="180" cy="95" r="12"></circle><circle class="guide" cx="340" cy="95" r="12"></circle>',
          label: "Twist guide: attach antennae to the top curve and keep their tips tiny."
        },
        question: {
          overlay: '<path class="guide" d="M365 225 C385 205 420 218 410 248 C405 264 385 267 385 285"></path><circle class="guide" cx="385" cy="310" r="12"></circle>',
          label: "Twist guide: keep the question charm floating to the side, not over the eyes."
        },
        moon: {
          overlay: '<circle class="guide" cx="350" cy="305" r="34"></circle><circle class="guide" cx="362" cy="305" r="28"></circle>',
          label: "Twist guide: place the crescent mark in a side patch zone."
        },
        heart: {
          overlay: '<path class="guide" d="M205 292 C190 275 165 292 180 315 L205 340 L230 315 C245 292 220 275 205 292 Z"></path>',
          label: "Twist guide: place the heart patch on the cheek or side, never covering the mouth."
        },
        glasses: {
          overlay: '<circle class="guide" cx="225" cy="265" r="32"></circle><circle class="guide" cx="295" cy="265" r="32"></circle><line class="guide" x1="257" y1="265" x2="263" y2="265"></line>',
          label: "Twist guide: align glasses to the eye line before drawing rims."
        },
        scarf: {
          overlay: '<line class="guide" x1="192" y1="338" x2="328" y2="338"></line><path class="guide" d="M285 338 L334 386"></path>',
          label: "Twist guide: wrap the scarf below the face and let one tail hang."
        },
        paint: {
          overlay: '<path class="guide" d="M330 160 C348 196 324 214 338 246 C362 218 370 184 350 160"></path>',
          label: "Twist guide: keep the paint drip at the top or side edge as one rounded drip."
        },
        shine: {
          overlay: '<ellipse class="guide" cx="210" cy="190" rx="38" ry="18" transform="rotate(-25 210 190)"></ellipse>',
          label: "Twist guide: put the glossy shine on the light side and keep it oval."
        },
        thread: {
          overlay: '<path class="guide" d="M150 206 L184 334"></path><path class="guide" d="M155 210 L178 226 M150 250 L178 262 M154 292 L180 292 M164 330 L188 314"></path>',
          label: "Twist guide: stitch along one edge strip instead of scattering stitches."
        },
        raindrop: {
          overlay: '<path class="guide" d="M385 220 C410 252 410 278 385 292 C360 278 360 252 385 220 Z"></path>',
          label: "Twist guide: hang the raindrop as a side bead or under-eye droplet."
        },
        sprout: {
          overlay: '<line class="guide" x1="260" y1="145" x2="260" y2="104"></line><path class="guide" d="M260 112 C235 90 210 108 220 130"></path><path class="guide" d="M260 112 C285 90 310 108 300 130"></path>',
          label: "Twist guide: grow the sprout from the top center with two simple leaves."
        }
,
        zipper: {
          overlay: '<line class="guide" x1="362" y1="186" x2="362" y2="356"></line><path class="guide" d="M350 228 L374 228 M350 260 L374 260 M350 292 L374 292 M350 324 L374 324"></path>',
          label: "Twist guide: place the zipper on one outer side strip and keep the teeth evenly spaced."
        },
        safetyPin: {
          overlay: '<path class="guide" d="M346 286 C386 252 416 326 368 336"></path><path class="guide" d="M368 336 L388 350"></path>',
          label: "Twist guide: let the safety pin sit along one side curve like a clipped accent."
        },
        bell: {
          overlay: '<path class="guide" d="M360 260 C334 260 334 300 360 314 C386 300 386 260 360 260 Z"></path><circle class="guide" cx="360" cy="322" r="8"></circle>',
          label: "Twist guide: keep the bell small and hanging near the lower side edge."
        },
        flowerPin: {
          overlay: '<circle class="guide" cx="342" cy="214" r="16"></circle><circle class="guide" cx="342" cy="188" r="16"></circle><circle class="guide" cx="366" cy="202" r="16"></circle><circle class="guide" cx="318" cy="202" r="16"></circle><circle class="guide" cx="342" cy="216" r="8"></circle>',
          label: "Twist guide: make the flower pin a tiny petal cluster on one upper side."
        },
        brokenHeart: {
          overlay: '<path class="guide" d="M210 292 C194 274 168 292 182 314 L208 340 L220 324 L232 340 L258 314 C272 292 246 274 230 292 Z"></path><line class="guide" x1="220" y1="302" x2="220" y2="330"></line>',
          label: "Twist guide: keep the broken heart patch cheek-sized and split by one center crack."
        },
        gumdropShine: {
          overlay: '<ellipse class="guide" cx="206" cy="188" rx="34" ry="20" transform="rotate(-25 206 188)"></ellipse><ellipse class="guide" cx="226" cy="212" rx="16" ry="10" transform="rotate(-25 226 212)"></ellipse>',
          label: "Twist guide: use two shine ovals on the light side like glossy candy."
        },
        ghostWisp: {
          overlay: '<path class="guide" d="M372 210 C410 204 424 242 400 262 C420 276 414 310 382 314"></path>',
          label: "Twist guide: float the wisp near the outside edge and keep it airy, not thick."
        },
        threadLoop: {
          overlay: '<path class="guide" d="M150 204 Q128 240 150 272 Q174 306 150 338"></path>',
          label: "Twist guide: make one looping thread line on an edge instead of tangling the whole mascot."
        },
        tinyBoots: {
          overlay: '<rect class="guide" x="208" y="398" width="38" height="28" rx="8"></rect><rect class="guide" x="274" y="398" width="38" height="28" rx="8"></rect>',
          label: "Twist guide: place the boots under the body and keep them blocky and tiny."
        },
        oneMitten: {
          overlay: '<circle class="guide" cx="374" cy="334" r="22"></circle><path class="guide" d="M352 334 L330 326"></path>',
          label: "Twist guide: put the mitten on one hand side only so it reads as a cute mismatch."
        },
        blanket: {
          overlay: '<path class="guide" d="M156 262 Q260 230 364 262 L338 388 Q260 410 182 388 Z"></path>',
          label: "Twist guide: let the blanket wrap the lower half, leaving the face fully visible."
        },
        peelCorner: {
          overlay: '<path class="guide" d="M334 150 Q374 150 374 190 Q354 182 334 150 Z"></path>',
          label: "Twist guide: curl one top corner only so the peel effect stays readable."
        },
        waxSeal: {
          overlay: '<circle class="guide" cx="350" cy="280" r="30"></circle>',
          label: "Twist guide: place the wax seal as one centered side stamp, not near the eyes."
        },
        crescentBrow: {
          overlay: '<path class="guide" d="M192 224 C214 200 242 218 232 238 C220 230 204 226 192 224 Z"></path>',
          label: "Twist guide: keep the crescent brow just above one eye as a small mood accent."
        },
        mismatchedButtons: {
          overlay: '<circle class="guide" cx="204" cy="304" r="20"></circle><circle class="guide" cx="324" cy="318" r="14"></circle>',
          label: "Twist guide: use two uneven button accents so the mismatch reads clearly."
        },
        tinyBackpack: {
          overlay: '<rect class="guide" x="346" y="286" width="54" height="76" rx="16"></rect><path class="guide" d="M356 286 Q373 266 390 286"></path>',
          label: "Twist guide: place the backpack behind one side of the body like a strapped accessory."
        },
        bowtie: {
          overlay: '<path class="guide" d="M220 338 L250 354 L220 370 Z M300 338 L270 354 L300 370 Z"></path><circle class="guide" cx="260" cy="354" r="8"></circle>',
          label: "Twist guide: center the bowtie below the mouth and keep it smaller than the face."
        },
        floatingStar: {
          overlay: '<path class="guide" d="M374 182 L380 196 L395 200 L380 204 L374 218 L368 204 L353 200 L368 196 Z"></path>',
          label: "Twist guide: let the floating star hover in a corner zone away from the main face."
        },
        blushStripe: {
          overlay: '<rect class="guide" x="178" y="296" width="46" height="12" rx="6"></rect><rect class="guide" x="296" y="296" width="46" height="12" rx="6"></rect>',
          label: "Twist guide: keep blush stripes low on the cheeks and shorter than the eye width."
        },
        tinySatchel: {
          overlay: '<path class="guide" d="M324 286 Q358 250 392 286"></path><rect class="guide" x="346" y="286" width="62" height="54" rx="12"></rect>',
          label: "Twist guide: hang the satchel from a strap arc and keep the bag body small."
        }

      };

      return guides[twist] || {
        overlay: '',
        label: twist === "none"
          ? "Twist guide: no extra twist selected."
          : "Twist guide: custom blueprint guide not added yet."
      };
    }


    function twistBlueprintBadge(twist) {
      if (twist === "none") return "Twist blueprint: none selected";
      return TWIST_BLUEPRINT_PASS_1.includes(twist)
        ? "Twist blueprint: full current set supported"
        : "Twist blueprint: fallback guide";
    }


function generalLessonFallback() {
      const c = getCurrentCoachContext();
      return {
        title: "General Lesson Help",
        summary: `Work from big to small: first the ${c.subject[0].toLowerCase()} shape, then the ${c.emotion[0].toLowerCase()} expression, then the twist, then color. The app already has a guided step mode, so let the steps carry you instead of trying to solve everything at once.`,
        sections: [
          {
            heading: "What to focus on first",
            items: [
              `Start with the main body shape and ignore tiny details.`,
              `Get the face placement right before adding limbs.`,
              `Use the selected blueprint as a guide, not as something to over-copy.`
            ]
          },
          {
            heading: "When to simplify",
            items: [
              `If the drawing feels awkward, fix the face height before changing the body.`,
              `If the subject stops reading, remove a detail rather than adding one.`,
              `If the palette feels muddy, use fewer colors.`
            ]
          },
          {
            heading: "Procreate rhythm",
            items: [
              `Guide layer at low opacity.`,
              `Sketch layer for body and face tests.`,
              `Clean line layer after the form works.`,
              `Flat color, one shadow, one highlight.`
            ]
          }
        ],
        note: "You do not have to finish every step perfectly. A cleaner second version often teaches more than a perfect first version."
      };
    }

    async function callCoachModel(mode) {
      const key = document.getElementById("apiKey").value.trim();
      const model = document.getElementById("model").value.trim() || "openrouter/free";
      const context = getCurrentCoachContext();

      if (!key) {
        if (mode === "subject") return subjectLogicFallback();
        if (mode === "emotion") return emotionCoachFallback();
        if (mode === "palette") return paletteCoachFallback();
        return generalLessonFallback();
      }

      saveSettings();

      let system = "";
      if (mode === "subject") {
        system = `You are a beginner mascot drawing coach. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Focus on subject-specific drawing logic: how to draw the selected subject so it reads clearly, what shape to start with, what detail makes it recognizable, and what to avoid. Keep advice concise and practical.`;
      } else if (mode === "emotion") {
        system = `You are a beginner mascot expression coach. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Explain the selected duo emotion as an expression formula: face cue, body cue, optional extra mark, balance advice, and what to avoid. Keep it concise and practical.`;
      } else if (mode === "palette") {
        system = `You are a beginner color coach for mascot drawing. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Explain how to use the selected palette without muddying the drawing. Assign likely jobs to the palette colors, explain a clean usage order, and what to avoid. Keep it concise and practical.`;
      } else {
        system = `You are a beginner mascot drawing coach. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Give concise support for the current lesson: what to focus on first, how to simplify, and a Procreate workflow.`;
      }

      const payload = {
        subject: context.subject[0],
        subjectShape: context.subject[1],
        subjectFocus: context.subject[2],
        emotion: context.emotion[0],
        emotionFormula: context.emotion[1],
        emotionBodyCue: context.emotion[2],
        emotionAvoid: context.emotion[3],
        twist: context.twist[0],
        palette: context.palette.label || "Auto",
        paletteColors: context.palette.colors || [],
        blueprint: context.blueprint,
        lessonSize: context.lesson[0],
        optionalFlavor: context.flavor,
        aiHelpCategory: aiModes[document.getElementById("aiStyle").value] || "General help"
      };

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "Mascot Spark V13"
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: system },
            { role: "user", content: JSON.stringify(payload) }
          ],
          temperature: 0.55,
          max_tokens: 900
        })
      });

      if (!res.ok) throw new Error("OpenRouter error " + res.status + ": " + (await res.text()).slice(0, 220));
      const raw = await res.json();
      const text = raw.choices && raw.choices[0] && raw.choices[0].message ? raw.choices[0].message.content : "";
      const data = extractJson(text);
      if (!data) throw new Error("AI response was not usable JSON.");
      return data;
    }

    async function runCoach(mode) {
      showTab('tab-ai');
      renderCoachContext();

      const titleMap = {
        general: "General Lesson Help",
        subject: "Subject-Specific Drawing Logic",
        emotion: "Emotion Coach",
        palette: "Palette Coach"
      };

      status(`Running ${titleMap[mode] || "Coach"}...`, "");
      try {
        const data = await callCoachModel(mode);
        renderCoachOutput(data);
        status(`${titleMap[mode] || "Coach"} ready.`, "ok");
      } catch (err) {
        const fallback = mode === "subject"
          ? subjectLogicFallback()
          : mode === "emotion"
            ? emotionCoachFallback()
            : mode === "palette"
              ? paletteCoachFallback()
              : generalLessonFallback();
        renderCoachOutput(fallback);
        status(err.message + " Showing offline coach output instead.", "bad");
      }
    }


    function aiSubjectLogic() {
      runCoach("subject");
    }


    function aiEmotionCoach() {
      runCoach("emotion");
    }


    function aiPaletteCoach() {
      runCoach("palette");
    }


    let currentLessonData = null;

    let guidedStepIndex = 0;

    let showAllPhases = false;


    function newLesson(openBlueprint = false) {
      const type = document.getElementById("lessonType").value;
      const emotion = document.getElementById("emotion").value;
      const level = document.getElementById("level").value;
      const mode = document.getElementById("creativeMode").value;
      const twist = document.getElementById("funTwist").value;
      const flavor = document.getElementById("customIdea").value.trim() || flavors[document.getElementById("ideaPreset").value] || ""; // flavor-only: never replaces subject
      const palette = palettes[document.getElementById("paletteMood").value] || { label: "Auto", colors: [] };
      const blueprintStyle = document.getElementById("blueprintStyle").value;
      const drawOrderMode = document.getElementById("drawOrderMode").value;
      const skillFocus = getEffectiveSkillFocus(type, emotion, blueprintStyle);

      const subject = subjectData[type];
      const specificShapeTypes = ["circleBadge", "squircleTile", "roundedTriangle", "diamondTile", "heartBadge", "crescentDrop", "cloverGlyph", "pillCapsule", "starburstSeal", "archTile", "ribbonLoop", "pebbleStack"];
      const isSpecificShapeSubject = specificShapeTypes.includes(type);
      const emo = emotions[emotion];
      const lesson = lessonSizes[level];
      const tw = twists[twist];
      let phases = lesson[1].map(x => [...x]);

      if (isSpecificShapeSubject) {
        phases.unshift(
          ["Lock the shape first", `Draw the ${subject[1]} before adding any face. The shape itself should read clearly even with no character details.`, "If the silhouette looks generic, redraw the shape once before moving on."],
          ["Respect the shape logic", `Keep the mascot specific to its shape family: ${subject[2]}.`, "Do not turn this back into a plain blob by over-rounding everything."]
        );
      }

      if (mode === "cozyPlus") {
        phases.splice(Math.min(3, phases.length), 0,
          ["Push the silhouette", "Adjust one edge: flatten bottom, tilt top, or add one soft bump.", "One silhouette change is enough."],
          ["Add a focal detail", "Choose one thing viewers notice first.", "If everything is special, nothing is special."]
        );
      }

      if (mode === "remix") {
        phases.splice(Math.min(3, phases.length), 0,
          ["Make one playful swap", "Change exactly one thing: eyes, mouth, pose tilt, or accessory.", "Remix gets messy if everything changes."]
        );
      }

      if (drawOrderMode === "extraGuided") {
        phases.unshift(
          ["Before anything: body only", "Draw only the outside shape for one minute. No eyes, mouth, limbs, color, or accessory yet.", "Do not decorate before the body works."],
          ["Redraw the body once", "Make a second version of the same body beside the first. Pick the clearer silhouette.", "Do not keep polishing the weaker first shape."]
        );
      }

      if (blueprintStyle === "autoSubject") {
        phases.unshift(["Use the subject guide", "Let the blueprint show the key construction logic for the selected mascot family before you add the face.", "Do not treat every subject like the same generic blob."]);
      }

      if (blueprintStyle === "faceMap") {
        phases.splice(2, 0,
          ["Use the face map", "Place eyes on the lower face line, then put the mouth close underneath.", "A mascot often looks wrong because of face placement."],
          ["Test face height", "Move the same face slightly lower on a duplicate sketch and compare which version feels cuter.", "Do not redraw the whole mascot when only the face is off."]
        );
      }

      if (blueprintStyle === "bodyFirst") {
        phases.unshift(["Trace body only first", "Use the blueprint as a body-only tracing guide. Hide all detail thinking until the outer shape works.", "Do not start with the eyes."]);
      }

      if (blueprintStyle === "limbMap") {
        phases.splice(Math.min(4, phases.length), 0, ["Place limbs in zones", "Use the limb map circles to add tiny arms and feet. Keep every limb smaller than the face area.", "Large limbs make beginner mascots feel clumsy."]);
      }

      if (blueprintStyle === "shadowMap") {
        phases.push(["Use the shadow map", "Add one soft shadow under the lower body or under the accessory. Keep the light direction simple.", "Do not shade every edge. One shadow is enough."]);
      }

      if (blueprintStyle === "fourPanel" || blueprintStyle === "worksheet") {
        phases.push(["Redraw as a worksheet", "Make four boxes: body only, guide + face, limbs + twist, clean final.", "Do not skip the redraw box. The redraw is where learning happens."]);
      }

      if (blueprintStyle === "plushBody") {
        phases.splice(1, 0, ["Use plush bumps", "Build the head/body from soft rounded bumps. Keep every edge soft.", "Do not sharpen the silhouette."]);
      }

      if (blueprintStyle === "fruitSlice") {
        phases.splice(2, 0, ["Keep it juicy and simple", "Use one round fruit body and only a few inner slice lines if needed.", "Do not overdraw fruit texture."]);
      }

      if (blueprintStyle === "potionBottle") {
        phases.splice(1, 0, ["Neck then bottle", "Draw the bottle neck first, then the larger rounded body underneath.", "Do not make the neck wider than the bottle."]);
      }

      if (blueprintStyle === "cloudPuff") {
        phases.splice(1, 0, ["Build from puffs", "Use overlapping circles or puff bumps to form the cloud.", "Do not flatten the cloud too early."]);
      }

      if (blueprintStyle === "robotGrid") {
        phases.splice(1, 0, ["Use the robot grid", "Keep the face and body aligned to the grid, but keep corners rounded.", "Do not make it too stiff or sharp."]);
      }

      if (blueprintStyle === "ghostDrape") {
        phases.push(["Shape the drape", "Use a soft top and a wavy bottom edge for the ghost sheet.", "Do not overcomplicate the bottom scallops."]);
      }

      if (blueprintStyle === "gemFacet") {
        phases.push(["Add only a few facets", "One to three inner facet lines are enough.", "Too many lines make the gem feel noisy."]);
      }

      if (blueprintStyle === "letterBuild" || blueprintStyle === "numberBuild") {
        phases.unshift(["Keep the symbol readable", "Before adding any face or limbs, make sure the base letter/number still reads clearly.", "Do not decorate a symbol that is not readable yet."]);
      }

      if (blueprintStyle === "badgeEmblem") {
        phases.unshift(["Center the emblem", "Build a strong centered badge silhouette first.", "Do not let side details unbalance the shape."]);
      }

      if (blueprintStyle === "weatherSymbol") {
        phases.push(["Use one forecast accent", "Add one rain, bolt, or sun accent only after the base symbol works.", "Do not stack too many weather icons together."]);
      }

      if (blueprintStyle === "shellSpiral") {
        phases.splice(1, 0, ["Use shell ribs", "Draw two or three shell arcs that follow the outer curve.", "Do not add too many rib lines."]);
      }

      if (blueprintStyle === "aquaticFin") {
        phases.splice(1, 0, ["Use body flow first", "Draw the long body flow before placing fins and tail cues.", "Do not build the fins before the body."]);
      }

      if (blueprintStyle === "deviceScreen") {
        phases.splice(1, 0, ["Frame then screen", "Keep the outer device frame readable and place the screen area inside it.", "Do not make the inner screen too close to the edge."]);
      }

      if (blueprintStyle === "clothingFold") {
        phases.splice(1, 0, ["Neckline then fall", "Use the neckline or top seam first, then let the body drop down softly.", "Do not clutter the clothing with too many folds."]);
      }

      if (blueprintStyle === "musicStem") {
        phases.splice(1, 0, ["Stem first", "Start with the note stem or musical axis, then add the note body.", "Do not decorate before the note reads clearly."]);
      }

      if (blueprintStyle === "wandArc") {
        phases.splice(1, 0, ["Use the relic axis", "Build a clear wand or charm direction line before adding the magical tip.", "Do not add random sparkles too early."]);
      }

      if (blueprintStyle === "orbitRing") {
        phases.splice(1, 0, ["Build the sphere first", "Draw the large celestial body before adding the orbit ring.", "Do not let the orbit ring overpower the body."]);
      }

      if (blueprintStyle === "packageFold") {
        phases.splice(1, 0, ["Top flap first", "Use the top fold to anchor the box form, then build the body folds.", "Do not lose the fold logic."]);
      }

      if (blueprintStyle === "furnitureBuild") {
        phases.splice(1, 0, ["Top plane first", "Draw the seat, cushion, or top plane before adding support legs.", "Do not start with the legs."]);
      }

      if (blueprintStyle === "gardenPot") {
        phases.splice(1, 0, ["Container first", "Start with the pot or base shape, then add the leaves or sprout cues.", "Do not let the leaves hide the container read."]);
      }

      if (blueprintStyle === "creatureHorn") {
        phases.splice(1, 0, ["Round body first", "Keep the main body plush and let the horn or tuft be only a small accent.", "Do not make the horns dominate the silhouette."]);
      }

      if (blueprintStyle === "logoAxis") {
        phases.splice(1, 0, ["Use the axis", "Balance the symbol on a clear vertical and horizontal axis before adding expression.", "Do not tilt everything off-axis too early."]);
      }

      const skillInfo = skillFocusData[skillFocus] || skillFocusData.shapeControl;
      phases.splice(Math.min(2, phases.length), 0, [
        `Skill focus: ${skillInfo.title}`,
        `${skillInfo.goal} Practice drill: ${skillInfo.drills[0]}`,
        "Do not treat this as just a prompt. Use the skill focus as the reason for the drawing."
      ]);

      const flavorText = flavor ? ` Flavor: ${flavor}.` : "";
      const paletteText = palette && palette.label !== "Auto" ? ` Palette: ${palette.label}.` : "";
      const title = pick(subject[3]);

      renderLesson({
        title,
        type,
        emotion,
        twist,
        blueprintStyle,
        skillFocus,
        subjectName: subject[0],
        subjectBase: subject[1],
        emotionName: emo[0],
        twistName: tw[0],
        meta: `${subject[0]} · ${emo[0]} · ${lesson[0]}`,
        goal: `Draw a ${emo[0].toLowerCase()} ${subject[0].toLowerCase()} using ${subject[1]}, ${emo[1]}, and ${emo[2]}. Add ${tw[1]}.${flavorText}${paletteText} Subject lock: stay with ${subject[0].toLowerCase()}; flavor only changes the vibe.`,
        shapeSpell: mode === "cozyPlus" ? "Use big-medium-small: one big body, one medium detail, two tiny expression marks." : mode === "remix" ? "Change one thing only. Keep the body shape stable." : "Big shape first. Face second. Decoration last.",
        styleRecipe: palette && palette.label !== "Auto" ? `${palette.label} · ${palette.colors.length} colors` : pick(styleRecipes),
        paletteKey: document.getElementById("paletteMood").value,
        complexity: mode === "cozyPlus" ? 68 : mode === "remix" ? 56 : 42,
        meterText: mode === "cozyPlus" ? "Cozy+ difficulty: more design thinking, still beginner-safe." : mode === "remix" ? "Remix difficulty: playful, one change at a time." : "Cozy difficulty: easy and drawable.",
        drawOrder: drawOrders[drawOrderMode][1],
        phases,
        checks: [
          "The selected subject category is still recognizable.",
          "The face is slightly below center.",
          "The mascot uses one main tiny twist only.",
          "The silhouette reads when zoomed out.",
          "The optional flavor changed mood/style only; the selected subject stayed recognizable."
        ],
        avoid: emo[3],
        quest: pick(quests),
        praise: pick(praises),
        remixOne: pick(remixIdeas),
        remixTwo: mode === "cozyPlus" ? "Make a sticker version with a thicker outline and fewer details." : "Draw the same mascot again with a different mouth, not a different body.",
        traceNote: `<strong>Beginner use:</strong><br>Trace the big body shape first. Hide the guide when done. If the mascot still reads, the drawing worked. Emotion blueprint pass: ${emotionBlueprintBadge(emotion)}. Twist blueprint pass: ${twistBlueprintBadge(twist)}.`
      });

      if (openBlueprint) {
        showTab("tab-blueprint");
        status("Mascot lesson + blueprint ready.", "ok");
      }
    }


    function extractJson(text) {
      try { return JSON.parse(text); } catch(e) {}
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        try { return JSON.parse(match[0]); } catch(e) {}
      }
      return null;
    }

    async function aiLesson() {
      runCoach("general");
    }


    let deferredInstallPrompt = null;

    window.addEventListener("beforeinstallprompt", event => {
      event.preventDefault();
      deferredInstallPrompt = event;
      document.getElementById("installBtn").style.display = "inline-flex";
    });

    async function installApp() {
      if (!deferredInstallPrompt) {
        status("Use your browser menu to add this app to your home screen.", "");
        return;
      }
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      document.getElementById("installBtn").style.display = "none";
    }

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js").catch(error => console.warn("Service worker registration failed:", error));
      });
    }

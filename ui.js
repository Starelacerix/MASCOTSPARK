function populateSelect(id, data, selected) {
      const el = document.getElementById(id);
      if (!el || !data) return;
      el.innerHTML = Object.entries(data).map(([value, label]) => {
        const text = Array.isArray(label) ? label[0] : (label && label.label ? label.label : label);
        return `<option value="${value}" ${value === selected ? "selected" : ""}>${text}</option>`;
      }).join("");
      if (selected && Object.prototype.hasOwnProperty.call(data, selected)) {
        el.value = selected;
      } else {
        const first = Object.keys(data)[0];
        if (first) el.value = first;
      }
    }



    function renderPalettePreview() {
      const selected = document.getElementById("paletteMood")?.value || "auto";
      const preview = document.getElementById("palettePreview");
      if (!preview) return;

      const entries = Object.entries(palettes).filter(([key]) => key !== "auto");
      const selectedPalette = palettes[selected];

      preview.innerHTML = entries.map(([key, value]) => {
        const dots = value.colors.map(color =>
          `<span class="palette-dot" style="background-color:${color};" aria-label="${value.label} swatch"></span>`
        ).join("");

        const strip = value.colors.map(color =>
          `<span style="background-color:${color};"></span>`
        ).join("");

        return `
          <div class="palette-card ${key === selected ? "active" : ""}" onclick="selectPalette('${key}')" role="button" tabindex="0">
            <span class="palette-title">${value.label}</span>
            <div class="palette-dots">${dots}</div>
            <div class="palette-strip">${strip}</div>
            <span class="palette-count">${value.colors.length} visible color swatches</span>
          </div>
        `;
      }).join("");

      if (selectedPalette && selectedPalette.colors && selectedPalette.colors.length) {
        preview.insertAdjacentHTML("afterbegin", `
          <div class="palette-selected-note" style="grid-column:1 / -1;">
            Selected palette: <strong>${selectedPalette.label}</strong>. The color dots and strip below show the actual palette colors.
          </div>
        `);
      }
    }


    function selectPalette(key) {
      const el = document.getElementById("paletteMood");
      if (!el) return;
      el.value = key;
      renderPalettePreview();
      renderEmotionLab();
      newLesson();
    }


    function bootSelects() {
      populateSelect("subjectPack", subjectPacks, "all");
      populateSelect("lessonType", subjectData, "blob");
      populateSelect("skillFocus", skillFocuses, "auto");
      populateSelect("surpriseType", surpriseTypes, "softBeginner");
      populateSelect("sessionTimer", sessionTimers, "none");
      populateSelect("emotion", emotions, "happy");
      populateSelect("level", lessonSizes, "normal");
      populateSelect("funTwist", twists, "sparkle");
      populateSelect("ideaPreset", flavors, "");
      populateSelect("paletteMood", palettes, "gummyHalo");
      renderPalettePreview();
      populateSelect("blueprintStyle", blueprintOptions, "autoSubject");
      populateSelect("drawOrderMode", drawOrders, "simple");
      populateSelect("aiStyle", aiModes, "simplify");
      populateSelect("shadeStyle", shadeStyles, "softPlush");
      populateSelect("lightDirection", lightDirections, "topLeft");
      populateSelect("shadeIntensity", shadeIntensities, "tinyShade");
      populateSelect("shadeOutputType", shadeOutputTypes, "stepByStep");
    }


    function status(msg, kind = "") {
      const box = document.getElementById("status");
      box.textContent = msg;
      box.className = "status show " + kind;
    }


    function themeLabel(mode) {
      if (mode === "light") return "Theme: Light";
      if (mode === "neutral") return "Theme: Neutral";
      return "Theme: Dark";
    }


    function setTheme(mode) {
      document.documentElement.setAttribute("data-theme", mode);
      localStorage.setItem("mascotSparkTheme", mode);
      document.getElementById("themeBtn").textContent = themeLabel(mode);
      document.querySelector('meta[name="theme-color"]').setAttribute("content", mode === "light" ? "#F27BA6" : mode === "neutral" ? "#B97195" : "#E785B3");
    }


    function toggleTheme() {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      setTheme(current === "light" ? "neutral" : current === "neutral" ? "dark" : "light");
    }


    function loadTheme() {
      const saved = localStorage.getItem("mascotSparkTheme") || "light";
      setTheme(["light", "neutral", "dark"].includes(saved) ? saved : "light");
    }


    function showTab(tabId) {
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === tabId));
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
    }


    function copyLessonText() {
      const title = document.getElementById("title").textContent;
      const goal = document.getElementById("goal").textContent;
      const phases = Array.from(document.querySelectorAll(".phase")).map((p, i) => `${i + 1}. ${p.innerText}`).join("\n\n");
      const text = `${title}\n\n${goal}\n\n${phases}`;
      navigator.clipboard?.writeText(text).then(() => {
        status("Lesson text copied.", "ok");
      }).catch(() => {
        status("Copy failed. You can still select and copy manually.", "bad");
      });
    }





    function setViewMode(mode) {
      const simple = mode === "simple";
      document.body.classList.toggle("simple-mode", simple);
      localStorage.setItem("mascotSparkViewMode", simple ? "simple" : "advanced");
      const btn = document.getElementById("viewModeBtn");
      if (btn) btn.textContent = simple ? "Advanced mode" : "Simple mode";

      const activeAdvancedPanel = document.querySelector(".tab-panel.active[data-advanced-only='true']");
      if (simple && activeAdvancedPanel) showTab("tab-lesson");
    }


    function toggleViewMode() {
      const current = localStorage.getItem("mascotSparkViewMode") || "advanced";
      setViewMode(current === "simple" ? "advanced" : "simple");
    }


    function loadViewMode() {
      setViewMode(localStorage.getItem("mascotSparkViewMode") || "advanced");
    }


    function renderPaletteRoleGuide(paletteKey) {
      const palette = palettes[paletteKey] || palettes.auto;
      const box = document.getElementById("paletteRoleGuide");
      if (!box) return;

      const roles = getPaletteRoles(palette);
      if (!roles.length) {
        box.innerHTML = '<div class="compact-help">Auto palette: choose 1 body color, 1 accent, 1 shadow, and 1 highlight.</div>';
        return;
      }

      box.innerHTML = roles.map(item => `
        <div class="palette-role">
          <div class="palette-role-color" style="background:${item.color}"></div>
          <div class="palette-role-body">
            <strong>${item.role}</strong>
            <span>${item.tip}</span>
          </div>
        </div>
      `).join("");
    }


    function setModalOpen(id, open) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.toggle("open", open);
      modal.setAttribute("aria-hidden", open ? "false" : "true");
    }



    function renderBeginnerFlow(data = currentLessonData) {
      const title = document.getElementById("flowTitle");
      const goal = document.getElementById("flowGoal");
      const steps = document.getElementById("flowSteps");
      const currentTitle = document.getElementById("flowCurrentTitle");
      const currentBody = document.getElementById("flowCurrentBody");

      if (title && data) title.textContent = `${data.subjectName || "Mascot"} Flow`;
      if (goal && data) goal.textContent = data.goal || "Follow one step at a time.";
      if (steps) {
        steps.innerHTML = beginnerFlowSteps.map((step, i) => `
          <button class="flow-step ${i === beginnerFlowIndex ? "active" : ""}" onclick="setFlowStep(${i})">
            <strong>${i + 1}. ${step.title}</strong>
            <span>${step.body}</span>
          </button>
        `).join("");
      }

      const active = beginnerFlowSteps[beginnerFlowIndex] || beginnerFlowSteps[0];
      if (currentTitle) currentTitle.textContent = active.title;
      if (currentBody) currentBody.textContent = active.body;
    }


    function setFlowStep(index) {
      beginnerFlowIndex = Math.max(0, Math.min(beginnerFlowSteps.length - 1, index));
      renderBeginnerFlow();
      if (beginnerFlowIndex === 1) showTab("tab-blueprint");
      if (beginnerFlowIndex === 5) showTab("tab-shade");
      status(`Flow step ${beginnerFlowIndex + 1}: ${beginnerFlowSteps[beginnerFlowIndex].title}`, "ok");
    }


    function nextFlowStep() {
      setFlowStep(beginnerFlowIndex + 1);
    }


    function previousFlowStep() {
      setFlowStep(beginnerFlowIndex - 1);
    }


    function startBeginnerFlow() {
      beginnerFlowIndex = 0;
      showTab("tab-flow");
      renderBeginnerFlow();
      status("Beginner Flow started.", "ok");
    }


    function renderVisualStepCards(data = currentLessonData) {
      const box = document.getElementById("visualStepCards");
      if (!box || !data) return;

      const stages = [
        ["body", "Body only", "Trace the largest readable silhouette first."],
        ["guide", "Construction guide", "Use the subject guide to understand the form."],
        ["face", "Face placement", "Place eyes low and keep expression simple."],
        ["limbs", "Limbs and twist", "Add tiny limbs and the twist placement guide."],
        ["final", "Clean mascot", "Finish with one clear outline and one main detail."]
      ];

      box.innerHTML = stages.map(([stage, title, copy]) => `
        <article class="visual-step-card">
          ${miniBlueprintSvg(data.type, data.emotion, data.twist, stage)}
          <strong>${title}</strong>
          <p>${copy}</p>
        </article>
      `).join("");
    }


    function updateStashDashboard(items = getStash()) {
      const box = document.getElementById("stashDashboard");
      if (!box) return;
      const total = items.length;
      const drawn = items.filter(x => x.status === "drawn").length;
      const redrawn = items.filter(x => x.status === "redrawn").length;
      const favorites = items.filter(x => x.favorite).length;
      box.innerHTML = `
        <div class="stash-stat"><strong>${total}</strong><span>Saved</span></div>
        <div class="stash-stat"><strong>${drawn}</strong><span>Drawn</span></div>
        <div class="stash-stat"><strong>${redrawn}</strong><span>Redrawn</span></div>
        <div class="stash-stat"><strong>${favorites}</strong><span>Favorites</span></div>
        <div class="practice-suggestion-card">Practice suggestion<span>${getPracticeDashboardSuggestion(items)}</span></div>
      `;
    }


    function toggleBlueprintLabels() {
      blueprintLabelsHidden = !blueprintLabelsHidden;
      const svg = document.getElementById("blueprintStudioSvg");
      if (svg) svg.classList.toggle("hide-blueprint-labels", blueprintLabelsHidden);
      const main = document.getElementById("blueprintSvg");
      if (main) main.classList.toggle("hide-blueprint-labels", blueprintLabelsHidden);
      status(blueprintLabelsHidden ? "Blueprint labels hidden." : "Blueprint labels shown.", "ok");
    }



    function filterSubjectsByPack(packKey) {
      const lessonSelect = document.getElementById("lessonType");
      if (!lessonSelect) return;

      const allowed = subjectPackMap[packKey] || [];
      const current = lessonSelect.value;

      lessonSelect.innerHTML = Object.entries(subjectData)
        .filter(([key]) => allowed.length === 0 || allowed.includes(key))
        .map(([value, label]) => `<option value="${value}">${label[0]}</option>`)
        .join("");

      if (current && Array.from(lessonSelect.options).some(o => o.value === current)) {
        lessonSelect.value = current;
      }
    }


    function updateTimerDisplay() {
      const box = document.getElementById("timerDisplay");
      if (!box) return;
      if (!timerInitial) {
        box.textContent = "--:--";
        return;
      }
      const min = Math.floor(timerRemaining / 60);
      const sec = timerRemaining % 60;
      box.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    }


    function renderStash() {
      const grid = document.getElementById("stashGrid");
      if (!grid) return;

      const filter = document.getElementById("stashFilter")?.value || "all";
      const search = (document.getElementById("stashSearch")?.value || "").toLowerCase().trim();
      const sort = document.getElementById("stashSort")?.value || "newest";
      let stash = getStash();
      updateStashDashboard(stash);

      if (filter === "favorite") stash = stash.filter(item => item.favorite);
      else if (filter !== "all") stash = stash.filter(item => item.status === filter);

      if (search) {
        stash = stash.filter(item => [
          item.title,
          item.subject,
          item.emotion,
          item.twist,
          item.palette,
          item.blueprint,
          item.note
        ].join(" ").toLowerCase().includes(search));
      }

      if (sort === "oldest") stash = stash.slice().reverse();
      if (sort === "favorites") stash = stash.slice().sort((a, b) => Number(b.favorite) - Number(a.favorite));

      if (!stash.length) {
        grid.innerHTML = `<div class="compact-help">No saved lessons here yet. Generate a mascot lesson, then tap “Save current lesson.”</div>`;
        return;
      }

      grid.innerHTML = stash.map(item => `
        <article class="stash-card">
          <h4>${escapeHtml(item.title)}</h4>
          <div class="stash-meta">
            ${escapeHtml(item.subject)} · ${escapeHtml(item.emotion)} · ${escapeHtml(item.twist)}<br>
            ${escapeHtml(item.palette)} · ${escapeHtml(item.blueprint)}<br>
            ${escapeHtml(item.date)}
          </div>

          <select onchange="updateStashItem('${item.id}', { status: this.value })">
            <option value="not-drawn" ${item.status === "not-drawn" ? "selected" : ""}>Not drawn</option>
            <option value="drawn" ${item.status === "drawn" ? "selected" : ""}>Drawn</option>
            <option value="redrawn" ${item.status === "redrawn" ? "selected" : ""}>Redrawn</option>
          </select>

          <textarea class="stash-note" placeholder="Reflection note..." oninput="updateStashItem('${item.id}', { note: this.value })">${escapeHtml(item.note || "")}</textarea>

          <div class="stash-actions">
            <button onclick="updateStashItem('${item.id}', { favorite: ${!item.favorite} })">${item.favorite ? "Unfavorite" : "Favorite"}</button>
            <button onclick="downloadStashWorksheet('${item.id}')">Worksheet</button>
            <button onclick="deleteStashItem('${item.id}')">Delete</button>
          </div>
        </article>
      `).join("");
    }


    function openBlueprintStudio() {
      setModalOpen("blueprintStudio", true);
      setBlueprintStudioStage(blueprintStudioStage || "final");
    }


    function closeBlueprintStudio() {
      setModalOpen("blueprintStudio", false);
    }


    function setBlueprintStudioStage(stage) {
      blueprintStudioStage = stage;
      const svg = document.getElementById("blueprintStudioSvg");
      if (!svg) return;
      const type = document.getElementById("lessonType")?.value || "blob";
      const emotion = document.getElementById("emotion")?.value || "happy";
      const twist = document.getElementById("funTwist")?.value || "none";
      if (stage === "final") {
        svg.innerHTML = makeBlueprint(type, emotion, twist, document.getElementById("blueprintStyle")?.value || "autoSubject");
      } else if (stage === "shade") {
        renderShadeMap();
        svg.innerHTML = document.getElementById("shadeMapSvg")?.innerHTML || "";
      } else {
        svg.innerHTML = extractSvgInner(miniBlueprintSvg(type, emotion, twist, stage));
      }
      svg.classList.toggle("hide-blueprint-labels", blueprintLabelsHidden);
      applyBlueprintLayerClasses();
    }


    function showVersionTools() {
      setModalOpen("versionTools", true);
    }


    function closeVersionTools() {
      setModalOpen("versionTools", false);
    }


    function renderEmotionLab(){
      const gallery=document.getElementById("emotionGallery"); if(!gallery) return;
      const family=document.getElementById("emotionFamilyFilter")?.value || "all";
      const keys=emotionKeys().filter(key => family==="all" || emotionMap[key].family===family);
      gallery.innerHTML=keys.map(key => { const e=emotionMap[key]; return `<button class="emotion-card ${key===selectedEmotionKey?"active":""}" onclick="selectEmotionLab('${key}')" type="button">${e.svg}<strong>${e.label}</strong><span>${e.family}</span></button>`; }).join("");
      renderEmotionDetail(); renderEmotionCompareSelects(); renderEmotionCompare();
    }

    function selectEmotionLab(key){
      selectedEmotionKey=key;
      const lessonEmotion=document.getElementById("emotion");
      if(lessonEmotion && emotionMap[key]) lessonEmotion.value=key;
      renderEmotionLab(); renderEmotionLessonHint();
    }

    function renderEmotionDetail(){
      const box=document.getElementById("emotionDetail"); if(!box) return;
      const e=getEmotionEntry(selectedEmotionKey);
      const rows=[["Face",e.faceHeight],["Eyes",e.eyeStyle],["Brows",e.browStyle],["Mouth",e.mouthStyle],["Blush",e.blushStyle],["Accent",e.accent],["Posture",e.posture],["Vibe",e.vibe]].map(([a,b])=>`<div class="emotion-meta-row"><b>${a}</b><span>${b}</span></div>`).join("");
      box.innerHTML=`<div class="emotion-detail-preview">${e.svg}<div><h3>${e.label}</h3><p class="small">${e.family}</p></div></div><div class="emotion-meta-grid">${rows}</div><div class="coach-section"><h4>Difference rule</h4><p>${e.differenceRule}</p></div><div class="coach-section"><h4>Practice tip</h4><p>${e.practiceTip}</p></div><div class="coach-section"><h4>Example prompt</h4><p>${e.examplePrompt}</p></div>`;
    }

    function renderEmotionCompareSelects(){
      const a=document.getElementById("emotionCompareA"), b=document.getElementById("emotionCompareB"); if(!a || !b) return;
      const options=emotionKeys().map(key=>`<option value="${key}">${emotionMap[key].label}</option>`).join("");
      const currentA=a.value || selectedEmotionKey, currentB=b.value || (selectedEmotionKey==="happy" ? "cursedAdorable" : "happy");
      a.innerHTML=options; b.innerHTML=options; a.value=emotionMap[currentA]?currentA:selectedEmotionKey; b.value=emotionMap[currentB]?currentB:"cursedAdorable";
    }

    function renderEmotionCompare(){
      const box=document.getElementById("emotionCompare"); if(!box) return;
      const a=getEmotionEntry(document.getElementById("emotionCompareA")?.value || selectedEmotionKey);
      const b=getEmotionEntry(document.getElementById("emotionCompareB")?.value || "cursedAdorable");
      box.innerHTML=`<div class="emotion-compare-preview">${a.svg}<strong>${a.label}</strong><span>${a.vibe}</span><small>${a.differenceRule}</small></div><div class="emotion-compare-preview">${b.svg}<strong>${b.label}</strong><span>${b.vibe}</span><small>${b.differenceRule}</small></div>`;
    }

    function downloadSelectedEmotionSvg(){
      const e=getEmotionEntry(selectedEmotionKey);
      downloadBlob(new Blob([selectedEmotionSvgDocument()],{type:"image/svg+xml;charset=utf-8"}),`mascot-spark-emotion-${selectedEmotionKey}.svg`);
      status(`${e.label} SVG exported.`,"ok");
    }

    function downloadSelectedEmotionPng(){
      const holder=document.createElement("div"); holder.innerHTML=selectedEmotionSvgDocument();
      const svg=holder.querySelector("svg"); if(!svg) return;
      downloadSvgElementAsPng(svg,`mascot-spark-emotion-${selectedEmotionKey}.png`,true);
      status("Emotion PNG exported.","ok");
    }

    function renderEmotionLessonHint(data){
      const box=document.getElementById("emotionLessonHint"); if(!box) return;
      const key=data?.emotionKey || document.getElementById("emotion")?.value || selectedEmotionKey;
      const e=getEmotionEntry(key);
      box.innerHTML=`<strong>Emotion logic: ${e.label}</strong><span>${e.eyeStyle}. ${e.mouthStyle}. ${e.posture}. ${e.practiceTip}</span>`;
    }



    function toggleFocusMode() {
      const active = !document.body.classList.contains("focus-mode");
      document.body.classList.toggle("focus-mode", active);
      localStorage.setItem("mascotSparkFocusMode", active ? "on" : "off");
      const btn = document.getElementById("focusModeBtn");
      if (btn) btn.textContent = active ? "Exit focus" : "Focus mode";
      if (active) status("Focus Mode on: current step + blueprint only.", "ok");
    }


    function loadFocusMode() {
      const active = localStorage.getItem("mascotSparkFocusMode") === "on";
      document.body.classList.toggle("focus-mode", active);
      const btn = document.getElementById("focusModeBtn");
      if (btn) btn.textContent = active ? "Exit focus" : "Focus mode";
    }


    function renderPracticeIntelligence(data) {
      const skill = skillFocusData[data.skillFocus] || skillFocusData.shapeControl;
      const subjectRules = getSubjectRules(data.type);
      const anatomy = [
        `Base shape: ${data.subjectBase}`,
        `Readability cue: keep one clear ${data.subjectName.toLowerCase()} detail.`,
        `Expression source: ${data.emotionName} face formula.`,
        `Twist: ${data.twistName}`,
        `Danger zone: too many tiny details.`
      ];
      const version2 = getVersion2Challenge(data);

      const skillBox = document.getElementById("skillFocusCard");
      const anatomyBox = document.getElementById("anatomyCard");
      const rulesBox = document.getElementById("subjectRulesCard");
      const versionBox = document.getElementById("version2Card");

      if (skillBox) skillBox.innerHTML = `<b>${skill.title}</b><br>${skill.goal}<ul>${skill.drills.map(x => `<li>${x}</li>`).join("")}</ul>`;
      if (anatomyBox) anatomyBox.innerHTML = `<ul>${anatomy.map(x => `<li>${x}</li>`).join("")}</ul>`;
      if (rulesBox) rulesBox.innerHTML = `<ul>${subjectRules.map(x => `<li>${x}</li>`).join("")}<li>${emotionBlueprintBadge(data.emotion)}</li><li>${twistBlueprintBadge(data.twist)}</li></ul>`;
      if (versionBox) versionBox.innerHTML = `<b>${version2.title}</b><br>${version2.body}`;
    }


    function renderCoachContext() {
      const c = getCurrentCoachContext();
      const box = document.getElementById("coachContext");
      if (!box) return;
      box.innerHTML = `
        <span>Subject: ${c.subject[0]}</span>
        <span>Emotion: ${c.emotion[0]}</span>
        <span>Twist: ${c.twist[0]}</span>
        <span>Palette: ${c.palette.label || "Auto"}</span>
        <span>Blueprint: ${c.blueprint}</span>
        <span>Lesson: ${c.lesson[0]}</span>
      `;
    }


    function clearAiOutput() {
      const title = document.getElementById("aiOutputTitle");
      const body = document.getElementById("aiOutputBody");
      if (title) title.textContent = "Coach Output";
      if (body) body.innerHTML = '<p class="small">Run one of the Coach tools to see help here.</p>';
    }


    function renderCoachOutput(data) {
      showTab('tab-ai');
      const title = document.getElementById("aiOutputTitle");
      const body = document.getElementById("aiOutputBody");
      if (!title || !body) return;

      title.textContent = data.title || "Coach Output";

      const summary = data.summary ? `<div class="coach-summary">${data.summary}</div>` : "";
      const sections = (data.sections || []).map(section => `
        <section class="coach-section">
          <h4>${section.heading}</h4>
          <ul>${(section.items || []).map(item => `<li>${item}</li>`).join("")}</ul>
        </section>
      `).join("");

      const note = data.note ? `<div class="coach-inline-note">${data.note}</div>` : "";

      body.innerHTML = summary + sections + note;
    }


    function renderShadeMap() {
      const box = document.getElementById("shadeMapSvg");
      if (!box) return;
      const context = getCurrentShadeContext();
      box.innerHTML = makeShadeMapSVG(context);
    }


    function renderShadeContext() {
      const c = getCurrentShadeContext();
      const box = document.getElementById("shadeContext");
      if (!box) return;
      box.innerHTML = `
        <span>Subject: ${c.subject[0]}</span>
        <span>Emotion: ${c.emotion[0]}</span>
        <span>Palette: ${c.palette.label || "Auto"}</span>
        <span>Shade style: ${c.shadeStyle}</span>
        <span>Light: ${c.lightDirection}</span>
        <span>Intensity: ${c.intensity}</span>
      `;
    }


    function renderShadeOutput(data) {
      const title = document.getElementById("shadeOutputTitle");
      const body = document.getElementById("shadeOutputBody");
      if (!title || !body) return;
      title.textContent = data.title || "Full Emotion Set Integration";

      const context = getCurrentShadeContext();
      const roles = getShadeRoleColors(context);
      const chips = `
        <div class="shade-chip-row">
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.body}"></span>Body</span>
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.shadow}"></span>Shadow</span>
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.highlight}"></span>Highlight</span>
          <span class="shade-chip"><span class="shade-chip-swatch" style="background:${roles.blush}"></span>Blush</span>
        </div>
      `;

      const summary = data.summary ? `<div class="coach-summary">${data.summary}</div>` : "";
      const sections = (data.sections || []).map(section => `
        <section class="coach-section">
          <h4>${section.heading}</h4>
          <ul>${(section.items || []).map(item => `<li>${item}</li>`).join("")}</ul>
        </section>
      `).join("");
      const note = data.note ? `<div class="coach-inline-note">${data.note}</div>` : "";
      body.innerHTML = summary + chips + sections + note;
    }

    async function callShadingModel() {
      const key = document.getElementById("apiKey")?.value.trim();
      const model = document.getElementById("model")?.value.trim() || "openrouter/free";
      const context = getCurrentShadeContext();

      if (!key) return shadingLabFallback();
      saveSettings();

      const system = `You are a beginner shading coach for mascot drawing in Procreate. Return ONLY valid JSON with keys: title, summary, sections, note. sections must be an array of objects with heading and items arrays. Focus on simple mascot shading: assign palette color roles, explain where the shadow goes, where the highlight goes, give a simple Procreate layer plan, and what to avoid so the drawing does not get muddy. Keep it concise, practical, and beginner-safe.`;

      const payload = {
        subject: context.subject[0],
        emotion: context.emotion[0],
        twist: context.twist[0],
        palette: context.palette.label || "Auto",
        paletteColors: context.palette.colors || [],
        shadingStyle: context.shadeStyle,
        lightDirection: context.lightDirection,
        shadingIntensity: context.intensity,
        outputType: context.outputType,
        lessonSize: context.lesson[0]
      };

      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${key}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href,
          "X-Title": "Mascot Spark V24"
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

    async function runShadingLab() {
      showTab("tab-shade");
      renderShadeContext();
      renderEmotionLessonHint(data);
      renderShadeMap();
      status("Building shading plan...", "");
      try {
        const data = await callShadingModel();
        renderShadeOutput(data);
        status("Shading plan ready.", "ok");
      } catch (err) {
        renderShadeOutput(shadingLabFallback());
        status(err.message + " Showing offline shading plan instead.", "bad");
      }
    }


    function updateGuidedStep() {
      if (!currentLessonData || !currentLessonData.phases || currentLessonData.phases.length === 0) return;

      const phases = currentLessonData.phases;
      guidedStepIndex = Math.max(0, Math.min(guidedStepIndex, phases.length - 1));
      const step = phases[guidedStepIndex];

      document.getElementById("guidedProgress").textContent = `Step ${guidedStepIndex + 1} of ${phases.length}`;
      document.getElementById("guidedLayer").textContent = `Layer: ${phaseLayerName(guidedStepIndex)}`;
      document.getElementById("guidedTitle").textContent = step[0];
      document.getElementById("guidedDraw").textContent = step[1];
      document.getElementById("guidedAvoid").textContent = step[2];
      document.getElementById("guidedCheck").textContent = phaseCanvasLook(guidedStepIndex);
    }


    function nextGuidedStep() {
      if (!currentLessonData) return;
      if (guidedStepIndex < currentLessonData.phases.length - 1) {
        guidedStepIndex += 1;
        updateGuidedStep();
      } else {
        status("You reached the final step. Redraw it once or generate a new lesson.", "ok");
      }
    }


    function previousGuidedStep() {
      if (!currentLessonData) return;
      guidedStepIndex = Math.max(0, guidedStepIndex - 1);
      updateGuidedStep();
    }


    function toggleAllSteps() {
      showAllPhases = !showAllPhases;
      const phases = document.getElementById("phases");
      phases.classList.toggle("show-all", showAllPhases);
      status(showAllPhases ? "All phases shown." : "Guided mode active. Full phase list hidden.", "ok");
    }


    function renderLessonPalette(key) {
      const palette = palettes[key];
      const swatchBox = document.getElementById("lessonPaletteSwatches");
      const nameBox = document.getElementById("lessonPaletteName");
      if (!swatchBox || !nameBox) return;

      if (!palette || !palette.colors || palette.colors.length === 0) {
        swatchBox.innerHTML = "";
        nameBox.textContent = "Auto palette";
        renderPaletteRoleGuide("auto");
        return;
      }

      swatchBox.innerHTML = palette.colors.map(color =>
        `<span class="lesson-palette-swatch" style="background-color:${color};" aria-label="${palette.label} color"></span>`
      ).join("");
      nameBox.textContent = `${palette.label} · ${palette.colors.length} colors`;
      const currentKey = document.getElementById("paletteMood")?.value || "auto";
      renderPaletteRoleGuide(currentKey);
    }


    function renderLesson(data) {
      currentLessonData = data;
      guidedStepIndex = 0;
      showAllPhases = false;
      document.getElementById("phases")?.classList.remove("show-all");
      document.getElementById("title").textContent = data.title;
      document.getElementById("meta").textContent = data.meta;
      document.getElementById("goal").textContent = data.goal;
      document.getElementById("shapeSpell").textContent = data.shapeSpell;
      document.getElementById("styleRecipe").textContent = data.styleRecipe;
      renderLessonPalette(data.paletteKey || "auto");
      document.getElementById("meterFill").style.width = data.complexity + "%";
      document.getElementById("meterText").textContent = data.meterText;
      document.getElementById("drawFirstPanels").innerHTML = data.drawOrder.map((item, i) => `
        <div class="draw-card" data-step="${i + 1}">
          <strong>${item[0]}</strong>
          <span class="do-line">${item[1]}</span>
          <span class="dont-line">Avoid: ${item[2] || "adding too much too soon."}</span>
          <span class="layer-line">Procreate: ${item[3] || "new sketch layer"}</span>
        </div>
      `).join("");

      renderTraceStepPanels(data);

      document.getElementById("phases").innerHTML = data.phases.map((p, i) => `
        <div class="phase">
          <div class="phase-title"><span class="num">${i + 1}</span>${p[0]}</div>
          <div class="phase-parts">
            <div class="phase-part"><b>Draw:</b> ${p[1]}</div>
            <div class="phase-part"><b>Procreate layer:</b> ${phaseLayerName(i)}</div>
            <div class="phase-part"><b>Canvas should look like:</b> ${phaseCanvasLook(i)}</div>
          </div>
          <div class="mistake">${p[2]}</div>
          <div class="phase-check">Before moving on: zoom out and check that this step still reads clearly.</div>
        </div>
      `).join("");
      document.getElementById("checks").innerHTML = data.checks.map(c => `<label class="check"><input type="checkbox"><span>${c}</span></label>`).join("");
      document.getElementById("avoid").textContent = data.avoid;
      document.getElementById("quest").textContent = data.quest;
      document.getElementById("praise").textContent = data.praise;
      document.getElementById("remixOne").textContent = data.remixOne;
      document.getElementById("remixTwo").textContent = data.remixTwo;
      document.getElementById("traceNote").innerHTML = data.traceNote;
      renderPalettePreview();
      document.getElementById("blueprintSvg").innerHTML = makeBlueprint(data.type, data.emotion, data.twist, data.blueprintStyle);
      applyBlueprintLayerClasses();
      if (document.getElementById("shadeStyle") && !document.getElementById("shadeStyle").dataset.touched) {
        document.getElementById("shadeStyle").value = defaultShadeStyleForCurrentLesson();
      }
      renderCoachContext();
      renderShadeContext();
      renderShadeMap();
      renderShadeOutput(shadingLabFallback());
      renderBeginnerFlow(data);
      renderVisualStepCards(data);
      updateGuidedStep();
    }


    function resetChecks() {
      document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
    }


    function saveSettings() {
      localStorage.setItem("mascotSparkApiKey", document.getElementById("apiKey").value.trim());
      localStorage.setItem("mascotSparkModel", document.getElementById("model").value.trim() || "openrouter/free");
      status("AI settings saved in this browser.", "ok");
    }


    function loadSettings() {
      document.getElementById("apiKey").value = localStorage.getItem("mascotSparkApiKey") || "";
      document.getElementById("model").value = localStorage.getItem("mascotSparkModel") || "openrouter/free";
    }


    function closeOpenModalsOnEscape(event) {
      if (event.key !== "Escape") return;
      closeBlueprintStudio?.();
      closeVersionTools?.();
    }


    function updateFinalBuildBadge() {
      const badge = document.getElementById("finalBuildBadge");
      if (badge) badge.textContent = `Mascot Spark ${APP_VERSION || "V20"} · Full Emotion Set Integration · Cache ${APP_CACHE_NAME || "mascot-spark-v43"}`;
    }

    document.addEventListener("keydown", closeOpenModalsOnEscape);

    document.addEventListener("DOMContentLoaded", () => {
      bootSelects();
      document.getElementById("paletteMood").addEventListener("change", () => { renderPalettePreview(); renderCoachContext(); renderShadeContext(); renderShadeMap(); renderShadeOutput(shadingLabFallback()); });
      ["shadeStyle","lightDirection","shadeIntensity","shadeOutputType"].forEach(id => {
        document.getElementById(id)?.addEventListener("change", () => {
          document.getElementById("shadeStyle").dataset.touched = "true";
          renderShadeContext();
          renderShadeMap();
          renderShadeOutput(shadingLabFallback());
        });
      });
      document.getElementById("subjectPack")?.addEventListener("change", (event) => filterSubjectsByPack(event.target.value));
      document.getElementById("blueprintVariant")?.addEventListener("change", () => {
        if (currentLessonData) renderLesson(currentLessonData);
      });
      document.getElementById("sessionTimer")?.addEventListener("change", setupTimerFromSelect);
      setupTimerFromSelect();
      renderCoachContext();
      loadViewMode();
      loadFocusMode();
      loadTheme();
      loadSettings();
      renderStash();
      updateFinalBuildBadge();
      newLesson();
    });

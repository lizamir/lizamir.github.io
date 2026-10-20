/* SCOOP: choose a flavor (colors the preview), build a combination of up to three, and a scroll-velocity marquee. */
(() => {
  const FLAVORS = [
    { id: "pistachio", name: "פיסטוק", cat: "nut", color: "#B5C39A", desc: "ירוק, קטיפתי וכמעט מלוח־מתוק." },
    { id: "strawberry", name: "תות שדה", cat: "fruit", color: "#E8798A", desc: "פירותי ורענן, בצבע של קיץ." },
    { id: "mango", name: "מנגו", cat: "fruit", color: "#F2A93B", desc: "צהוב־כתום, מתוק ושמשי." },
  ];
  const list = document.getElementById("s-list");
  const empty = document.getElementById("s-empty");
  const preview = document.getElementById("s-preview");
  const pname = document.getElementById("s-pname");
  const pdesc = document.getElementById("s-pdesc");
  const scoop = document.getElementById("s-scoop");
  const add = document.getElementById("s-add");
  const bowl = document.getElementById("s-bowl");
  const summary = document.getElementById("s-summary");
  const copied = document.getElementById("s-copied");
  let filter = "all", current = FLAVORS[0].id, combo = [];
  const byId = (id) => FLAVORS.find((f) => f.id === id);

  const renderList = () => {
    const shown = FLAVORS.filter((f) => filter === "all" || f.cat === filter);
    list.innerHTML = "";
    empty.hidden = shown.length > 0;
    preview.hidden = shown.length === 0;
    list.hidden = shown.length === 0;
    if (shown.length && !shown.some((f) => f.id === current)) current = shown[0].id;
    shown.forEach((f) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button"; b.className = "s-pick";
      b.setAttribute("aria-current", String(f.id === current));
      b.dataset.inCombo = String(combo.includes(f.id));
      b.innerHTML = `<i style="--c:${f.color}"></i><span>${f.name}</span><span class="tick" aria-hidden="true">✓</span><small>${f.cat === "fruit" ? "פירותי" : f.cat === "nut" ? "אגוזי" : "קרמי"}</small>`;
      b.addEventListener("click", () => { current = f.id; renderList(); renderPreview(); });
      li.appendChild(b); list.appendChild(li);
    });
    renderPreview();
  };
  const renderPreview = () => {
    const f = byId(current);
    if (!f) return;
    preview.style.setProperty("--flavor", f.color);
    scoop.style.setProperty("--flavor", f.color);
    pname.textContent = f.name; pdesc.textContent = f.desc;
    const inC = combo.includes(f.id);
    add.setAttribute("aria-pressed", String(inC));
    add.textContent = inC ? "הסירו מהשילוב" : combo.length >= 3 ? "השילוב מלא (3 טעמים)" : "הוסיפו לשילוב";
    add.disabled = !inC && combo.length >= 3;
    add.style.opacity = add.disabled ? ".55" : "";
  };
  const renderBowl = () => {
    bowl.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const li = document.createElement("li");
      const f = byId(combo[i]);
      if (f) { li.style.setProperty("--c", f.color); li.setAttribute("aria-label", f.name); }
      else { li.className = "empty"; li.setAttribute("aria-hidden", "true"); }
      bowl.appendChild(li);
    }
    summary.textContent = combo.length ? "השילוב שלי: " + combo.map((id) => byId(id).name).join(" + ") : "עוד לא בחרתם. סמנו טעם והוסיפו אותו.";
  };
  document.querySelectorAll("[data-filter]").forEach((b) =>
    b.addEventListener("click", () => {
      filter = b.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
      renderList();
    })
  );
  add.addEventListener("click", () => {
    const i = combo.indexOf(current);
    if (i >= 0) combo.splice(i, 1); else if (combo.length < 3) combo.push(current);
    renderList(); renderBowl();
  });
  document.getElementById("s-clear").addEventListener("click", () => { combo = []; renderList(); renderBowl(); });
  document.getElementById("s-copy").addEventListener("click", async () => {
    if (!combo.length) { copied.textContent = "בחרו קודם טעם."; return; }
    const text = "השילוב שלי ב‑SCOOP: " + combo.map((id) => byId(id).name).join(" + ");
    let ok = true;
    try { await navigator.clipboard.writeText(text); } catch { ok = false; }
    copied.textContent = ok ? "הועתק" : "אפשר לסמן ולהעתיק ידנית מהשורה למעלה.";
    setTimeout(() => (copied.textContent = ""), 2400);
  });
  renderList(); renderBowl();

  /* marquee: moves on its own, faster while you scroll */
  const track = document.querySelector(".s-track");
  if (track && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let x = 0, last = performance.now(), lastY = scrollY, boost = 0;
    const half = () => track.scrollWidth / 2;
    const loop = (t) => {
      const dt = Math.min(50, t - last); last = t;
      const dy = Math.abs(scrollY - lastY); lastY = scrollY;
      boost += (Math.min(dy, 60) * 0.06 - boost) * 0.15;
      x -= (0.04 + boost * 0.06) * dt;
      if (-x >= half()) x += half();
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
})();

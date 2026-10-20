(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* GLOW: soft light that follows the pointer in the hero + a breathing guide */
  const gh = $(".beauty-hero");
  if (gh && !reduce) {
    gh.addEventListener("pointermove", (e) => {
      const r = gh.getBoundingClientRect();
      gh.style.setProperty("--mx", e.clientX - r.left + "px");
      gh.style.setProperty("--my", e.clientY - r.top + "px");
    });
  }
  const orb = $("#orb");
  if (orb) {
    const btn = $("#breathBtn"), txt = $("#breathTxt"), cnt = $("#orbCount");
    const reco = $("#fxgReco");
    const recos = {
      dry: "יבש: טיפול פנים להזנה ולחות עמוקה, עם עיסוי איטי וסרום מרגיע.",
      mix: "מעורב: טיפול פנים מאזן, ניקוי עדין ומסכה שמווסתת את האזורים הבוהקים.",
      sens: "רגיש: טיפול פנים מרגיע, בלי חומרים חזקים ובקצב הכי רך שיש.",
    };
    $$("input[name=skin]").forEach((i) => i.addEventListener("change", () => (reco.textContent = recos[i.value])));
    let running = false, timer;
    const phases = [["in", "שאיפה איטית", 4], ["hold", "מחזיקים רגע", 2], ["out", "נשיפה ארוכה", 6]];
    const run = async () => {
      running = true; btn.textContent = "עצירה";
      for (let c = 1; c <= 3 && running; c++) {
        for (const [p, label, sec] of phases) {
          if (!running) break;
          orb.dataset.phase = p;
          txt.textContent = label;
          for (let s = sec; s > 0 && running; s--) { cnt.textContent = s; await new Promise((r) => (timer = setTimeout(r, 1000))); }
        }
      }
      const done = running;
      running = false; orb.dataset.phase = "out"; cnt.textContent = ""; btn.textContent = "עוד סבב";
      txt.textContent = done ? "מוכנים. ככה מתחיל טיפול ב‑GLOW." : "נעצר. אפשר להתחיל מחדש.";
    };
    btn.addEventListener("click", () => { if (running) { running = false; clearTimeout(timer); } else run(); });
  }

  /* AURA: a "flashlight" that finds the shine, plus a metal switch */
  const lens = $("#lens");
  if (lens) {
    let tx = 0.5, ty = 0.5, x = 0.5, y = 0.5, touched = false, t0 = performance.now();
    const set = (e) => {
      const r = lens.getBoundingClientRect();
      tx = clamp((e.clientX - r.left) / r.width); ty = clamp((e.clientY - r.top) / r.height); touched = true;
    };
    lens.addEventListener("pointermove", set);
    lens.addEventListener("pointerdown", set);
    lens.addEventListener("pointerleave", () => (touched = false));
    lens.addEventListener("keydown", (e) => {
      const k = { ArrowLeft: [-0.08, 0], ArrowRight: [0.08, 0], ArrowUp: [0, -0.08], ArrowDown: [0, 0.08] }[e.key];
      if (k) { e.preventDefault(); tx = clamp(tx + k[0]); ty = clamp(ty + k[1]); touched = true; }
    });
    const paint = () => {
      if (!touched && !reduce) { const t = (performance.now() - t0) / 1000; tx = 0.5 + Math.sin(t * 0.7) * 0.28; ty = 0.5 + Math.cos(t * 0.5) * 0.22; }
      if (reduce && !touched) { tx = 0.5; ty = 0.5; }
      x += (tx - x) * 0.14; y += (ty - y) * 0.14;
      lens.style.setProperty("--lx", x * 100 + "%"); lens.style.setProperty("--ly", y * 100 + "%");
      requestAnimationFrame(paint);
    };
    paint();
    const copy = { gold: "זהב. חם, מלא, בלי פשרות.", silver: "כסף. קר, חד ונקי.", rose: "רוז גולד. רך, מחמיא ורומנטי." };
    $$(".metals button").forEach((b) =>
      b.addEventListener("click", () => {
        lens.dataset.metal = b.dataset.m;
        $$(".metals button").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
        $("#metalTxt").textContent = copy[b.dataset.m];
      })
    );
  }

  /* SCOOP: build a cone, scoops drop and squash */
  const scoops = $("#scoops");
  if (scoops) {
    const name = $("#coneName");
    const picked = [];
    const stage = $(".cone-stage");
    const render = () => {
      $$(".flv button").forEach((b) => (b.disabled = picked.length >= 3));
      name.textContent = picked.length
        ? `הגביע שלך: ${picked.map((p) => p.n).join(" + ")}${picked.length === 3 ? ". הושלם!" : ""}`
        : "בחרו עד שלושה טעמים ותראו מה יוצא.";
    };
    const burst = () => {
      if (reduce) return;
      const cols = ["#f4d4d9", "#f1ef81", "#31765e", "#e3a0b0", "#7ab88f", "#fff"];
      for (let i = 0; i < 26; i++) {
        const s = document.createElement("i");
        s.className = "spr";
        s.style.cssText = `left:50%;top:30%;background:${cols[i % cols.length]};--dx:${(Math.random() - 0.5) * 360}px;--dy:${-40 + Math.random() * 240}px;--rot:${Math.random() * 720 - 360}deg`;
        stage.appendChild(s);
        setTimeout(() => s.remove(), 1200);
      }
    };
    $$(".flv button").forEach((b) =>
      b.addEventListener("click", () => {
        if (picked.length >= 3) return;
        picked.push({ n: b.dataset.n, c: b.dataset.c });
        const d = document.createElement("div");
        d.className = "sc"; d.style.background = b.dataset.c; d.setAttribute("aria-hidden", "true");
        scoops.appendChild(d);
        render();
        if (picked.length === 3) setTimeout(burst, 700);
      })
    );
    $("#coneUndo").addEventListener("click", () => { picked.pop(); scoops.lastElementChild?.remove(); render(); });
    $("#coneReset").addEventListener("click", () => { picked.length = 0; scoops.innerHTML = ""; render(); });
    render();
  }

  /* STACK: the burger comes apart as you scroll */
  const ex = $("[data-explode]");
  if (ex && !reduce) {
    const onScroll = () => {
      const r = ex.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - innerHeight));
      const e = clamp((p - 0.08) / 0.62);
      const eased = 1 - Math.pow(1 - e, 3);
      ex.style.setProperty("--e", eased.toFixed(3));
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  } else if (ex) ex.style.setProperty("--e", "1");

  /* PLAYDAY: drag stickers into the festival day (or press Enter to cycle them) */
  const tray = $("#tray");
  if (tray) {
    const slots = $$(".slot"), sum = $("#planSum");
    const colors = ["#ffe17a", "#ffb4a2", "#b8e0d2", "#cdb4f6", "#a5d8ff", "#ffd6a5"];
    const names = ["תיאטרון", "מוזיקה", "יצירה", "ספורט", "מדע", "בישול"];
    names.forEach((n, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "stk"; b.textContent = n;
      b.style.setProperty("--c", colors[i]); b.style.setProperty("--r", (i % 2 ? 1 : -1) * (2 + (i % 3)) + "deg");
      b.setAttribute("aria-label", `${n}. גררו ללוח הזמנים, או הקישו Enter כדי להעביר לשלב הבא`);
      tray.appendChild(b);
    });
    const label = (s) => s.querySelector("h3").textContent;
    const update = () => {
      const parts = slots.map((s) => `${label(s)}: ${$$(".stk", s).map((x) => x.textContent).join(", ") || "פנוי"}`);
      const n = slots.reduce((a, s) => a + $$(".stk", s).length, 0);
      sum.textContent = n ? parts.join(" · ") : "הלוח עוד ריק. גררו מדבקה פנימה.";
    };
    const confetti = (x, y) => {
      if (reduce) return;
      for (let i = 0; i < 22; i++) {
        const p = document.createElement("i");
        p.className = "paper";
        const shapes = ["50%", "3px", "50% 0"];
        p.style.cssText = `left:${x}px;top:${y}px;background:${colors[i % colors.length]};border-radius:${shapes[i % 3]};--dx:${(Math.random() - 0.5) * 340}px;--dy:${-120 + Math.random() * 280}px;--rot:${Math.random() * 900 - 450}deg`;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 1400);
      }
    };
    const place = (b, target) => {
      target.appendChild(b);
      const r = b.getBoundingClientRect();
      confetti(r.left + r.width / 2, r.top + r.height / 2);
      update();
    };
    const zones = () => [...slots, tray];
    tray.addEventListener("pointerdown", () => {});
    document.addEventListener("pointerdown", (e) => {
      const b = e.target.closest(".stk");
      if (!b || !b.closest(".fx-play")) return;
      const r = b.getBoundingClientRect();
      const dx = e.clientX - r.left, dy = e.clientY - r.top;
      let moved = false, ghost = null;
      const onMove = (m) => {
        if (!moved && Math.hypot(m.clientX - e.clientX, m.clientY - e.clientY) < 6) return;
        if (!moved) {
          moved = true;
          ghost = b.cloneNode(true); ghost.classList.add("drag"); ghost.style.width = r.width + "px";
          document.body.appendChild(ghost); b.style.opacity = ".25";
        }
        ghost.style.left = m.clientX - dx + "px"; ghost.style.top = m.clientY - dy + "px";
        const under = document.elementFromPoint(m.clientX, m.clientY)?.closest(".slot,.tray");
        zones().forEach((z) => z.classList.toggle("hot", z === under));
      };
      const onUp = (u) => {
        removeEventListener("pointermove", onMove); removeEventListener("pointerup", onUp);
        zones().forEach((z) => z.classList.remove("hot"));
        if (moved) {
          const under = document.elementFromPoint(u.clientX, u.clientY)?.closest(".slot,.tray");
          ghost.remove(); b.style.opacity = "";
          if (under && under !== b.parentElement) place(b, under);
          b.dataset.dragged = "1";
          setTimeout(() => delete b.dataset.dragged, 0);
        }
      };
      addEventListener("pointermove", onMove); addEventListener("pointerup", onUp);
    });
    /* keyboard / tap fallback: cycle tray → morning → noon → afternoon → tray */
    tray.closest(".fx-play").addEventListener("click", (e) => {
      const b = e.target.closest(".stk");
      if (!b || b.dataset.dragged) return;
      const order = [tray, ...slots];
      const next = order[(order.indexOf(b.parentElement) + 1) % order.length];
      place(b, next);
      b.focus();
    });
    update();
  }
})();

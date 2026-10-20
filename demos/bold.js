(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* pill buttons: the ink fill grows from where the pointer enters */
  $$("[data-fill]").forEach((el) => {
    const set = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", e.clientX - r.left + "px");
      el.style.setProperty("--y", e.clientY - r.top + "px");
    };
    el.addEventListener("pointerenter", set);
    el.addEventListener("pointerleave", set);
  });

  /* hero: every letter swells as the pointer gets close (variable font weight axis) */
  const mega = $("[data-weight]");
  if (mega && !reduce) {
    const letters = [];
    $$(".line", mega).forEach((line) => {
      const text = line.textContent;
      line.textContent = "";
      [...text].forEach((c) => {
        const s = document.createElement("span");
        s.className = "ch";
        s.textContent = c;
        line.appendChild(s);
        letters.push(s);
      });
    });
    const measure = () => {
      letters.forEach((s) => { s.style.minWidth = ""; s.style.fontVariationSettings = '"wght" 900'; });
      letters.forEach((s) => { s.style.minWidth = s.getBoundingClientRect().width + "px"; });
    };
    document.fonts.ready.then(measure);
    addEventListener("resize", measure);
    let mx = -9999, my = -9999, raf = 0, idle = 0;
    const paint = () => {
      raf = 0;
      const radius = Math.max(220, innerWidth * 0.2);
      letters.forEach((s) => {
        const r = s.getBoundingClientRect();
        const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
        const f = clamp(1 - d / radius);
        s.style.fontVariationSettings = `"wght" ${Math.round(100 + 800 * (1 - f * f))}`;
      });
    };
    const queue = () => { if (!raf) raf = requestAnimationFrame(paint); };
    addEventListener("pointermove", (e) => { mx = e.clientX; my = e.clientY; queue(); clearTimeout(idle); }, { passive: true });
    mega.addEventListener("pointerleave", () => { mx = my = -9999; queue(); });
    /* touch / no hover: a slow breathing wave so the effect is still seen */
    if (!fine) {
      let t = 0;
      setInterval(() => {
        t += 0.35;
        letters.forEach((s, i) => { s.style.fontVariationSettings = `"wght" ${Math.round(560 + 340 * Math.sin(t + i * 0.9))}`; });
      }, 90);
    }
    /* start light so the first swell is visible */
    letters.forEach((s) => (s.style.fontVariationSettings = '"wght" 900'));
  }

  /* ticker skews with scroll velocity */
  const ticker = $(".ticker");
  let lastY = scrollY, skew = 0;
  /* scroll-scrubbed "noise → idea" */
  const noise = $("[data-noise]");
  const ease = (p) => 1 - Math.pow(1 - p, 3);
  const onScroll = () => {
    const dy = scrollY - lastY; lastY = scrollY;
    skew += (clamp(dy * 0.12, -5, 5) - skew) * 0.35;
    if (ticker && !reduce) ticker.style.setProperty("--skew", skew.toFixed(2) + "deg");
    if (noise && !reduce) {
      const r = noise.getBoundingClientRect();
      const total = r.height - innerHeight;
      const p = clamp(-r.top / total);
      noise.style.setProperty("--p", p.toFixed(3));
      noise.style.setProperty("--e", ease(clamp(p / 0.78)).toFixed(3));
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(() => { skew *= 0.7; if (ticker && !reduce) ticker.style.setProperty("--skew", skew.toFixed(2) + "deg"); }, 120);

  /* reveal on scroll + poster entrance */
  $$(".sec-head > *, .steps li, .contact > *, .hero-foot").forEach((el) => el.setAttribute("data-r", ""));
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.setAttribute("data-in", "");
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.2 });
  $$("[data-r],[data-poster]").forEach((el) => io.observe(el));

  /* poster 3: the middle word swaps */
  const swap = $("[data-swap]");
  if (swap) {
    const words = $$("b", swap);
    let i = 0;
    words[0].classList.add("on");
    if (!reduce) {
      setInterval(() => {
        const cur = words[i];
        cur.classList.remove("on"); cur.classList.add("off");
        i = (i + 1) % words.length;
        const nxt = words[i];
        nxt.classList.remove("off"); void nxt.offsetWidth; nxt.classList.add("on");
        setTimeout(() => cur.classList.remove("off"), 650);
      }, 1500);
    }
  }

  /* cursor: a blend-mode dot that grows over interactive things */
  const cur = $(".fx-cursor");
  if (cur && fine && !reduce) {
    let x = 0, y = 0, cx = 0, cy = 0;
    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; cur.classList.add("on"); }, { passive: true });
    document.addEventListener("pointerleave", () => cur.classList.remove("on"));
    const loop = () => {
      cx += (x - cx) * 0.22; cy += (y - cy) * 0.22;
      cur.style.transform = `translate(${cx}px,${cy}px)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("pointerover", (e) => cur.classList.toggle("grow", !!e.target.closest("a,button,.poster,.steps li,input,select,label")));
  }

  /* MESSAGE LAB: copy decisions → headlines + a Google result preview */
  const F = {
    cafe: {
      noun: "בית קפה", slug: "cafe", keyword: "בית קפה שכונתי", benefit: "קפה שמכינים בלי למהר",
      warm: ["{name}. בית קפה שמרגישים בו בבית.", "{benefit}, ושולחן שמחכה לכם ב{city}."],
      bold: ["{name}. לא עוד בית קפה.", "בית קפה שלא מתנצל על הקפה שלו."],
      calm: ["{name}. {benefit}, בלי רעש.", "פינה שקטה, כוס טובה, ושעה אחת ב{city}."],
    },
    gym: {
      noun: "סטודיו לכושר", slug: "studio", keyword: "סטודיו לכושר", benefit: "אימון שמתאים לגוף שלכם",
      warm: ["{name}. מקום שבו מתחילים ומרגישים שייכים.", "{benefit}, בקבוצה קטנה ב{city}."],
      bold: ["{name}. יותר חזק ממה שחשבתם.", "סטודיו לכושר בלי תירוצים."],
      calm: ["{name}. אימון שקט, תוצאה רועשת.", "לאט, נכון, ובקצב שלכם ב{city}."],
    },
    flowers: {
      noun: "חנות פרחים", slug: "flowers", keyword: "חנות פרחים", benefit: "זר שנראה כאילו גדל במיוחד בשבילכם",
      warm: ["{name}. פרחים שמספרים מה שקשה להגיד.", "{benefit}. משלוח ב{city}."],
      bold: ["{name}. לא עוד זר ורדים.", "פרחים עם אופי, לא עם סרט מתנה."],
      calm: ["{name}. שקט של פרחים טריים.", "זר אחד, יום טוב יותר ב{city}."],
    },
    bakery: {
      noun: "מאפייה", slug: "bakery", keyword: "מאפייה", benefit: "לחם שמתפיחים לאט, כמו פעם",
      warm: ["{name}. ריח של לחם טרי מתחיל את הבוקר.", "{benefit}, חם מהתנור ב{city}."],
      bold: ["{name}. הלחם שהשכנים מקנאים בו.", "מאפייה שמתפיחה לאט ופועלת מהר."],
      calm: ["{name}. בצק, זמן וידיים.", "{benefit}. בלי קיצורי דרך ב{city}."],
    },
  };
  const tail = { warm: "בואו לטעום.", bold: "בואו לראות בעצמכם.", calm: "נשמח לראותכם." };
  const form = $("#labForm");
  if (form) {
    const name = $("#fName"), field = $("#fField"), city = $("#fCity");
    const fill = (t, d) => t.replace(/\{name\}/g, d.name).replace(/\{city\}/g, d.city).replace(/\{benefit\}/g, d.benefit);
    const cut = (t, n) => (t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t);
    const render = () => {
      const f = F[field.value];
      const tone = form.querySelector("input[name=tone]:checked").value;
      const d = { name: name.value.trim() || "העסק שלכם", city: city.value.trim() || "העיר שלכם", benefit: f.benefit };
      const lines = f[tone].map((t) => fill(t, d));
      lines.push(`${d.name} | ${f.keyword} ב${d.city}`.length < 60 ? `${d.name}. ${f.noun} ב${d.city}, ובמקום אחד הכול.` : `${d.name}. ${f.noun} ב${d.city}.`);
      const heads = $("#heads");
      heads.innerHTML = "";
      lines.forEach((l, i) => {
        const li = document.createElement("li");
        li.style.setProperty("--n", i);
        li.textContent = l;
        heads.appendChild(li);
      });
      const title = `${d.name} | ${f.keyword} ב${d.city}`;
      const desc = `${f.noun} ב${d.city}: ${f.benefit}. ${tail[tone]}`;
      $("#sTitle").textContent = cut(title, 60);
      $("#sDesc").textContent = cut(desc, 155);
      $("#sUrl").textContent = f.slug;
      const set = (id, bar, len, max) => {
        $(id).textContent = len;
        const u = $(bar);
        u.style.width = clamp(len / max) * 100 + "%";
        u.classList.toggle("over", len > max);
      };
      set("#mT", "#bT", title.length, 60);
      set("#mD", "#bD", desc.length, 155);
    };
    form.addEventListener("input", render);
    form.addEventListener("change", render);
    render();
    $("#copyHeads").addEventListener("click", async () => {
      const text = $$("#heads li").map((l) => l.textContent).join("\n");
      let ok = true;
      try { await navigator.clipboard.writeText(text); } catch { ok = false; }
      $("#copied").textContent = ok ? "הועתק ✓" : "לא הצלחנו להעתיק, אפשר לסמן ידנית";
      setTimeout(() => ($("#copied").textContent = ""), 2400);
    });
  }
})();

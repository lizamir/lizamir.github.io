/* PLAYDAY: pick activities into a local schedule. Reorder by drag or with the up and down buttons.
   Total time is computed from the activities. Print and download work for real; "send" opens a WhatsApp message. */
(() => {
  const AREAS = [
    { id: "play", name: "משחק", color: "#F4D96A", items: [["תחנות משחק בחצר", 30], ["תחרויות קבוצתיות", 45], ["משחקי לוח וחשיבה", 30]] },
    { id: "move", name: "תנועה", color: "#8FB2F0", items: [["סדנת מחול", 45], ["ספורט ואתגר", 60], ["יוגה לילדים", 30]] },
    { id: "make", name: "יצירה", color: "#F29B8B", items: [["סדנת יצירה", 60], ["ציור קיר משותף", 45], ["בניית פסל", 45]] },
  ];
  const ACT = {};
  AREAS.forEach((a) => a.items.forEach(([n, m], i) => (ACT[a.id + i] = { id: a.id + i, name: n, min: m, area: a.name, color: a.color })));
  const KEY = "playday-plan-v1";
  let plan = [], start = "09:00";
  try { const s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s) { plan = (s.plan || []).filter((id) => ACT[id]); start = s.start || start; } } catch {}
  const $ = (id) => document.getElementById(id);
  const pool = $("p-pool"), list = $("p-list"), empty = $("p-empty"), total = $("p-total"), status = $("p-status"), startEl = $("p-start"), send = $("p-send");
  startEl.value = start;
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify({ plan, start })); } catch {} };
  const fmt = (m) => `${String(Math.floor(m / 60) % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
  const toMin = (t) => { const [h, m] = t.split(":").map(Number); return (h || 0) * 60 + (m || 0); };
  const dur = (m) => (m < 60 ? `${m} דק׳` : `${Math.floor(m / 60)} שעות${m % 60 ? ` ו‑${m % 60} דק׳` : ""}`);
  const say = (t) => { status.textContent = t; clearTimeout(say.t); say.t = setTimeout(() => (status.textContent = ""), 2600); };

  pool.innerHTML = AREAS.map((a) => `<div class="p-group" style="--c:${a.color}"><h3>${a.name}</h3><ul>${a.items.map(([n, m], i) => `<li class="p-act"><b>${n}</b><span>${m} דק׳</span><button type="button" class="p-add" data-add="${a.id + i}" aria-label="הוספת ${n} ללוח הזמנים">+</button></li>`).join("")}</ul></div>`).join("");

  const text = () => {
    let t = toMin(startEl.value);
    const lines = plan.map((id) => { const a = ACT[id]; const l = `${fmt(t)}–${fmt(t + a.min)}  ${a.name} (${a.area}, ${a.min} דק׳)`; t += a.min; return l; });
    const sum = plan.reduce((s, id) => s + ACT[id].min, 0);
    return { lines, sum, text: `יום כיף PLAYDAY\n${lines.join("\n")}\nסה״כ: ${dur(sum)}` };
  };
  const render = () => {
    let t = toMin(startEl.value);
    list.innerHTML = "";
    plan.forEach((id, i) => {
      const a = ACT[id];
      const li = document.createElement("li");
      li.className = "p-item"; li.draggable = true; li.dataset.i = i; li.style.setProperty("--c", a.color);
      li.innerHTML = `<span class="p-time">${fmt(t)}–${fmt(t + a.min)}</span><span class="p-name">${a.name}<small>${a.area} · ${a.min} דק׳</small></span><span class="p-ctl"><span class="p-handle" aria-hidden="true">⠿</span><button type="button" data-up="${i}" aria-label="העלאת ${a.name}" ${i === 0 ? "disabled" : ""}>↑</button><button type="button" data-down="${i}" aria-label="הורדת ${a.name}" ${i === plan.length - 1 ? "disabled" : ""}>↓</button><button type="button" data-del="${i}" aria-label="הסרת ${a.name}">✕</button></span>`;
      t += a.min; list.appendChild(li);
    });
    empty.hidden = plan.length > 0;
    const { sum, text: tx } = text();
    total.textContent = plan.length ? `סה״כ ${dur(sum)} · מסתיים ב‑${fmt(toMin(startEl.value) + sum)}` : "";
    send.href = window.waLink(`היי ליז, ראיתי את עמוד PLAYDAY בפורטפוליו. ככה בניתי יום כיף:\n${tx}`);
    send.target = "_blank"; send.rel = "noreferrer";
    save();
  };
  const burst = (x, y) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cols = ["#F4D96A", "#3152C9", "#DA543D", "#8FB2F0"];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("i");
      s.className = "spark";
      s.style.cssText = `left:${x}px;top:${y}px;background:${cols[i % 4]};border-radius:${i % 2 ? "50%" : "2px"};--dx:${(Math.random() - .5) * 150}px;--dy:${(Math.random() - .6) * 130}px;--r:${Math.random() * 360}deg`;
      document.body.appendChild(s); setTimeout(() => s.remove(), 850);
    }
  };
  const move = (i, j) => { if (j < 0 || j >= plan.length) return; const [x] = plan.splice(i, 1); plan.splice(j, 0, x); render(); };
  pool.addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]"); if (!b) return;
    plan.push(b.dataset.add); render();
    const r = b.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2);
    say(`${ACT[b.dataset.add].name} נוספה ללוח הזמנים.`);
  });
  list.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const d = b.dataset;
    if (d.up != null) { const i = +d.up; move(i, i - 1); list.querySelector(`[data-up="${i - 1}"]:not(:disabled)`)?.focus() || list.querySelector(`[data-down="${i - 1}"]`)?.focus(); }
    if (d.down != null) { const i = +d.down; move(i, i + 1); list.querySelector(`[data-down="${i + 1}"]:not(:disabled)`)?.focus() || list.querySelector(`[data-up="${i + 1}"]`)?.focus(); }
    if (d.del != null) { const name = ACT[plan[+d.del]].name; plan.splice(+d.del, 1); render(); say(`${name} הוסרה.`); }
  });
  let from = null;
  list.addEventListener("dragstart", (e) => { const li = e.target.closest(".p-item"); if (!li) return; from = +li.dataset.i; li.classList.add("drag"); e.dataTransfer.effectAllowed = "move"; e.dataTransfer.setData("text/plain", String(from)); });
  list.addEventListener("dragover", (e) => { const li = e.target.closest(".p-item"); if (!li || from == null) return; e.preventDefault(); list.querySelectorAll(".over").forEach((x) => x.classList.remove("over")); li.classList.add("over"); });
  list.addEventListener("drop", (e) => { const li = e.target.closest(".p-item"); if (!li || from == null) return; e.preventDefault(); move(from, +li.dataset.i); from = null; });
  list.addEventListener("dragend", () => { from = null; list.querySelectorAll(".drag,.over").forEach((x) => x.classList.remove("drag", "over")); });
  startEl.addEventListener("input", () => { start = startEl.value; render(); });
  $("p-clear").addEventListener("click", () => { plan = []; render(); say("הלוח נוקה."); });
  $("p-print").addEventListener("click", () => { if (!plan.length) return say("אין עדיין פעילויות להדפסה."); window.print(); });
  $("p-download").addEventListener("click", () => {
    if (!plan.length) return say("אין עדיין פעילויות להורדה.");
    const blob = new Blob(["﻿" + text().text + "\n"], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "playday-schedule.txt";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    say("הקובץ הורד.");
  });
  render();
})();

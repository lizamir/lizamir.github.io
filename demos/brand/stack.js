/* STACK: pick the patty and toppings, get a clear summary you can copy or send as a WhatsApp message. */
(() => {
  const form = document.getElementById("k-form");
  const text = document.getElementById("k-sum-text");
  const send = document.getElementById("k-send");
  const copied = document.getElementById("k-copied");
  const join = (a) => (a.length <= 1 ? a.join("") : a.slice(0, -1).join(", ") + " ו" + a[a.length - 1]);
  const build = () => {
    const patty = form.elements.patty.value;
    const tops = [...form.querySelectorAll("[name=top]:checked")].map((i) => i.value);
    const base = patty === "כפולה" ? "המבורגר עם קציצה כפולה" : "המבורגר עם קציצה אחת";
    return tops.length ? `${base}, ${join(tops)}.` : `${base}, בלי תוספות.`;
  };
  const render = () => {
    const s = build();
    text.textContent = s;
    send.href = window.waLink(`היי, ראיתי את עמוד STACK בפורטפוליו של ליז. ההמבורגר שבניתי: ${s}`);
    send.target = "_blank"; send.rel = "noreferrer";
  };
  form.addEventListener("change", render);
  document.getElementById("k-copy").addEventListener("click", async () => {
    let ok = true;
    try { await navigator.clipboard.writeText(build()); } catch { ok = false; }
    copied.textContent = ok ? "הסיכום הועתק." : "אפשר לסמן ולהעתיק ידנית את הסיכום.";
    setTimeout(() => (copied.textContent = ""), 2400);
  });
  render();
})();

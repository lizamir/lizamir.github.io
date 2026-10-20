/* Shared behaviour: entrance reveal, the back pill, and WhatsApp links with a prefilled message. */
(() => {
  document.documentElement.classList.remove("no-js");
  const WA = "972546887442";
  window.waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = window.waLink(a.dataset.wa);
    a.target = "_blank";
    a.rel = "noreferrer";
  });
  const pill = document.createElement("a");
  pill.className = "back-pill";
  pill.href = "/#work";
  pill.textContent = "← לפורטפוליו של ליז";
  document.body.appendChild(pill);
  const els = [...document.querySelectorAll(".rv")];
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((e) => e.setAttribute("data-in", ""));
    return;
  }
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute("data-in", ""); io.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  els.forEach((e) => io.observe(e));
})();

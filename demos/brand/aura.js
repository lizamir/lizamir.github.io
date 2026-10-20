/* AURA: an item dialog with a controlled zoom. It restores scroll position and focus when it closes. */
(() => {
  const dlg = document.getElementById("item-dialog");
  const stage = document.getElementById("a-stage");
  const img = document.getElementById("a-dlg-img");
  const title = document.getElementById("a-dlg-title");
  const val = document.getElementById("a-zoom-val");
  const interest = document.getElementById("a-interest");
  const items = {
    cuff: { name: "צמיד גל", alt: "תקריב של צמיד גל בגוון זהב", at: [0.69, 0.5] },
    ring: { name: "טבעת עיגול", alt: "תקריב של טבעת עיגול בגוון זהב", at: [0.875, 0.69] },
  };
  const levels = [1, 1.6, 2.4];
  let level = 0, scrollY = 0, opener = null, cur = "cuff";
  const apply = (center = true) => {
    img.style.setProperty("--zw", levels[level] * 100 + "%");
    val.textContent = Math.round(levels[level] * 100) + "%";
    if (center) requestAnimationFrame(() => {
      const [x, y] = items[cur].at;
      stage.scrollLeft = stage.scrollWidth * x - stage.clientWidth / 2 * (document.dir === "rtl" ? -1 : 1) * 0;
      stage.scrollTop = stage.scrollHeight * y - stage.clientHeight / 2;
    });
  };
  const centerOn = () => {
    const [x, y] = items[cur].at;
    const w = stage.scrollWidth, h = stage.scrollHeight;
    /* in RTL, scrollLeft runs 0 (right edge) to negative; use the logical position from the left edge */
    const maxLeft = w - stage.clientWidth;
    const fromLeft = Math.max(0, Math.min(maxLeft, w * x - stage.clientWidth / 2));
    stage.scrollLeft = getComputedStyle(stage).direction === "rtl" ? fromLeft - maxLeft : fromLeft;
    stage.scrollTop = Math.max(0, h * y - stage.clientHeight / 2);
  };
  const render = () => {
    img.style.setProperty("--zw", levels[level] * 100 + "%");
    val.textContent = Math.round(levels[level] * 100) + "%";
    requestAnimationFrame(centerOn);
  };
  document.querySelectorAll("[data-item]").forEach((b) =>
    b.addEventListener("click", () => {
      cur = b.dataset.item; opener = b; level = 1;
      title.textContent = items[cur].name;
      img.alt = items[cur].alt;
      interest.href = window.waLink(`היי ליז, ראיתי את עמוד AURA בפורטפוליו ואני מתעניינת ב${items[cur].name}.`);
      interest.target = "_blank"; interest.rel = "noreferrer";
      scrollY = window.scrollY;
      document.documentElement.style.overflow = "hidden";
      dlg.showModal();
      render();
    })
  );
  document.querySelectorAll("[data-zoom]").forEach((b) =>
    b.addEventListener("click", () => {
      level = Math.max(0, Math.min(levels.length - 1, level + Number(b.dataset.zoom)));
      render();
    })
  );
  const close = () => dlg.close();
  document.getElementById("a-close").addEventListener("click", close);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) close(); });
  dlg.addEventListener("close", () => {
    document.documentElement.style.overflow = "";
    window.scrollTo(0, scrollY);
    opener && opener.focus({ preventScroll: true });
  });
})();

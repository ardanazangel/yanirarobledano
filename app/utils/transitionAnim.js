export const animatePageOut = (href, router) => {
  const container = document.getElementById("container");
  if (!container) { router.push(href); return; }
  container.classList.add("page-out");
  const go = () => router.push(href);
  const t = setTimeout(go, 700); // fallback si animationend no dispara
  container.addEventListener("animationend", () => { clearTimeout(t); go(); }, { once: true });
};

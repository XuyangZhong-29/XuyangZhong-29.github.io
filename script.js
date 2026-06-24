/* =====================================================================
 *  个人学术主页交互逻辑
 * ===================================================================== */
(function () {
  "use strict";
  const D = window.SITE_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- 图标库 ---------- */
  const ICONS = {
    email: '<path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    scholar: '<path d="M12 3L2 9l10 6 8-4.8V17h2V9z"/><path d="M6 12.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" fill="none"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>',
    twitter: '<path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.3 11.3 0 0 1 3.8 4.6a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18a11.3 11.3 0 0 0 6.1 1.8c7.3 0 11.4-6.1 11.4-11.4v-.5c.8-.6 1.5-1.3 2-2.1z"/>',
    linkedin: '<rect x="2" y="2" width="20" height="20" rx="3" fill="none"/><path d="M7 10v7M7 7v0M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
    orcid: '<circle cx="12" cy="12" r="10" fill="none"/><path d="M9 8v8M9 6v0M13 8h1.5a4 4 0 0 1 0 8H13z"/>',
    website: '<circle cx="12" cy="12" r="9" fill="none"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" fill="none"/>',
  };
  const icon = (name) =>
    `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.website}</svg>`;

  /* =====================================================================
   *  主题切换
   * ===================================================================== */
  const root = document.documentElement;
  const toggle = $("#themeToggle");
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") root.setAttribute("data-theme", stored);

  toggle.addEventListener("click", () => {
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") || (sysDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* =====================================================================
   *  渲染内容
   * ===================================================================== */
  // 品牌名
  $("[data-brand]").textContent = D.profile.name;

  // Hero
  const p = D.profile;
  const linksHTML = p.links
    .map(
      (l, i) =>
        `<a class="btn${i === 0 ? " btn--primary" : ""}" href="${l.url}" target="_blank" rel="noopener">${icon(l.icon)}<span>${l.label}</span></a>`
    )
    .join("");
  $("#hero").innerHTML = `
    <div class="hero__text">
      <p class="hero__greet">Hi, welcome to my homepage 👋</p>
      <h1 class="hero__name">${p.name} <span class="hero__name-en">${p.nameEn}</span></h1>
      <p class="hero__role">${p.title}</p>
      <p class="hero__affil">${p.affiliation}</p>
      <p class="hero__short">${p.bioShort}</p>
      <div class="hero__meta">
        <span>${icon("website")} ${p.location}</span>
        <span>${icon("email")} ${p.email}</span>
      </div>
      <div class="hero__links">${linksHTML}</div>
    </div>
    <div class="hero__avatar"><img src="${p.avatar}" alt="${p.name}" /></div>`;

  // 关于
  $("#aboutBio").innerHTML = p.bio.map((t) => `<p>${t}</p>`).join("");
  $("#interests").innerHTML = D.interests.map((t) => `<span class="tag">${t}</span>`).join("");

  // 最新消息
  $("#news-list").innerHTML = D.news
    .map(
      (n) =>
        `<li class="news__item"><span class="news__date">${n.date}</span><span class="news__content">${n.content}</span></li>`
    )
    .join("");

  // 论文
  const renderPub = (pub) => {
    const links = (pub.links || [])
      .map((l) => `<a class="pub__link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
      .join("");
    return `<li class="pub${pub.highlight ? " is-highlight" : ""}" data-type="${pub.type}">
      <div class="pub__meta">
        <span class="pub__year">${pub.year}</span>
        <span class="pub__type">${pub.type}</span>
        ${pub.highlight ? '<span class="pub__badge">★ Featured</span>' : ""}
      </div>
      <h3 class="pub__title">${pub.title}</h3>
      <p class="pub__authors">${pub.authors.join(", ")}</p>
      <p class="pub__venue">${pub.venue}</p>
      ${links ? `<div class="pub__links">${links}</div>` : ""}
    </li>`;
  };
  const pubList = $("#pub-list");
  pubList.innerHTML = D.publications.map(renderPub).join("");

  // 论文筛选标签
  const types = ["All", ...new Set(D.publications.map((x) => x.type))];
  $("#pubFilters").innerHTML = types
    .map((t, i) => `<button class="filter-btn${i === 0 ? " active" : ""}" data-filter="${t}">${t}</button>`)
    .join("");
  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      $$(".pub", pubList).forEach((el) => {
        const show = f === "All" || el.dataset.type === f;
        el.style.display = show ? "" : "none";
        if (show) { el.style.animation = "none"; void el.offsetWidth; el.style.animation = "fadeUp .4s var(--ease)"; }
      });
    });
  });

  // 页脚
  $("#footerCopy").textContent = D.footer.copyright;
  $("#footerNote").textContent = D.footer.note;

  /* =====================================================================
   *  交互行为
   * ===================================================================== */
  // 导航：滚动加阴影
  const nav = $("#nav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", window.scrollY > 8);
    $("#toTop").classList.toggle("show", window.scrollY > 480);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // 移动端菜单
  const burger = $("#burger");
  const navLinks = $(".nav__links");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  $$(".nav__link").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

  // 滚动监听：导航高亮（scrollspy）
  const sections = $$("main section[id]");
  const navMap = new Map($$(".nav__link").map((a) => [a.getAttribute("href").slice(1), a]));
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navMap.forEach((a) => a.classList.remove("active"));
          const link = navMap.get(e.target.id);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  // 进场动画
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); }
      });
    },
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => revealObs.observe(el));

  // 注入论文淡入关键帧
  const style = document.createElement("style");
  style.textContent = "@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}";
  document.head.appendChild(style);
})();

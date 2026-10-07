import {
  COPY, COUNCIL, DAYS, KINDS, LINKS, NOTES, PAGES, SCHEDULE, SOCIAL, TEAM, UI, YEARS, pick,
} from "./content.js";

const page = document.body.dataset.page || "home";
const params = new URLSearchParams(location.search);
const asked = params.get("lang");
const stored = localStorage.getItem("as-lang");
const lang = ["bg", "en", "fr", "de"].includes(asked)
  ? asked
  : ["bg", "en", "fr", "de"].includes(stored) ? stored : "bg";
localStorage.setItem("as-lang", lang);
document.documentElement.lang = lang;
const theme = localStorage.getItem("as-theme") === "dark" ? "dark" : "light";
document.documentElement.dataset.theme = theme;
const c = COPY[lang];
const ui = UI[lang];

const NAV = [
  ["index.html", "home", c.nav[0][1]],
  ["programa.html", "programa", c.nav[1][1]],
  ["plan.html", "plan", c.nav[2][1]],
  ["razpis.html", "razpis", c.nav[3][1]],
  ["rektorat.html", "rektorat", c.nav[4][1]],
  ["ekip.html", "ekip", c.nav[5][1]],
  ["priem.html", "priem", c.nav[6][1]],
  ["kontakt.html", "kontakt", c.nav[7][1]],
];

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (ch) => {
    if (ch === "&") return "\u0026amp;";
    if (ch === "<") return "\u0026lt;";
    if (ch === ">") return "\u0026gt;";
    if (ch === '"') return "\u0026quot;";
    return "\u0026#39;";
  });
}

const SUN = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
const MOON = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/></svg>`;

function shell(inner) {
  const links = NAV.map(([href, id, label]) => `<a class="${id === page ? "on" : ""}" href="${href}">${esc(label)}</a>`).join("");
  const more = `<a href="kariera.html">${esc(c.more[0][1])}</a><a href="mosaic.html">African Mosaic</a>`;
  const langs = [["bg", "БГ"], ["en", "EN"], ["fr", "FR"], ["de", "DE"]]
    .map(([id, label]) => `<button type="button" class="lang${id === lang ? " on" : ""}" data-lang="${id}" aria-pressed="${id === lang}">${label}</button>`)
    .join("");
  return `
  <header class="mast">
    <div class="kente" aria-hidden="true"></div>
    <div class="bar">
      <a class="brand" href="index.html"><span class="mark">СУ</span><span><span class="word">${esc(c.brand)}</span><span class="sub">${esc(c.brandEn)}</span></span></a>
      <nav class="nav" aria-label="Main">${links}</nav>
      <div class="tools">
        <div class="themes" role="group" aria-label="${esc(ui.themeLight)} / ${esc(ui.themeDark)}">
          <button class="neon-btn neon-sun" type="button" id="theme-light" aria-pressed="${theme === "light"}" aria-label="${esc(ui.themeLight)}">${SUN}</button>
          <button class="neon-btn neon-moon" type="button" id="theme-dark" aria-pressed="${theme === "dark"}" aria-label="${esc(ui.themeDark)}">${MOON}</button>
        </div>
        <div class="langs" role="group" aria-label="${esc(ui.langLabel)}">${langs}</div>
        <button class="menu-btn" type="button" id="menu" aria-expanded="false">${esc(c.menu)}</button>
      </div>
    </div>
    <nav class="drawer" id="drawer">${links}${more}</nav>
  </header>
  <div id="main">${inner}</div>
  <footer class="foot">
    <div class="kente" aria-hidden="true"></div>
    <div class="foot-in">
      <div>
        <p class="word">${esc(c.brand)}</p>
        <p class="sand">${esc(c.uni)}</p>
        <p class="sand">${esc(c.faculty)}</p>
        <p class="sand">${esc(c.dept)}</p>
        <p>${esc(c.address)}</p>
      </div>
      <div>
        <p><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p>
        <p>${SOCIAL.map((s) => `<a href="${esc(s.href)}">${esc(s.label)}</a>`).join(" · ")}</p>
        <p><a href="${esc(c.separateHref)}">${esc(c.separate)}</a></p>
      </div>
      <div>
        <p><a href="${lang === "bg" ? LINKS.degree : LINKS.degreeEn}">${esc(ui.degreeLink)}</a></p>
        <p><a href="${LINKS.fcml}">FKNF</a></p>
        <p><a href="${LINKS.su}">${esc(ui.suLink)}</a></p>
        <p><a href="kariera.html">${esc(c.more[0][1])}</a></p>
        <p><a href="mosaic.html">African Mosaic</a></p>
      </div>
    </div>
    <p class="wrap sand">${esc(c.disclaimer)}</p>
  </footer>`;
}

function head(kicker, title, lead) {
  return `<header class="pagehead"><div class="wrap"><p class="kicker">${esc(kicker)}</p><h1>${esc(title)}</h1><div class="af-rule" aria-hidden="true"></div>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div></header>`;
}

function home() {
  return `
  <section class="hero-band"><div class="hero">
    <div>
      <p class="kicker">${esc(c.homeKicker)}</p>
      <h1>${esc(c.homeTitle)}</h1>
      <div class="af-rule" aria-hidden="true"></div>
      <p class="lead">${esc(c.homeLead)}</p>
      <div class="row">
        <a class="btn solid" href="razpis.html">${esc(c.ctaSchedule)}</a>
        <a class="btn ghost" href="rektorat.html">${esc(c.ctaMap)}</a>
      </div>
    </div>
    <dl class="facts">${c.facts.map(([k, v]) => `<div class="fact"><span>${esc(k)}</span><strong>${esc(v)}</strong></div>`).join("")}</dl>
  </div></section>
  <div class="wrap">
    <div class="grid-2">
      <section><h2>${esc(c.whoTitle)}</h2><p>${esc(c.whoBody)}</p><p><strong>${esc(c.free)}</strong></p><p class="muted">${esc(c.freeBody)}</p></section>
      <aside class="card"><h2>${esc(c.nowTitle)}</h2><p>${esc(c.nowBody)}</p><p class="muted">${esc(c.notEu)}</p></aside>
    </div>
    <h2>${esc(c.strandsTitle)}</h2>
    <div class="grid-3">${c.strands.map(([n, t, b]) => `<article class="card"><p class="kicker">${esc(n)}</p><h3>${esc(t)}</h3><p>${esc(b)}</p></article>`).join("")}</div>
    <p class="muted">${esc(c.citiesNote)}</p>
    <p class="cities">${esc(c.cities)}</p>
  </div>`;
}

function programa() {
  const p = PAGES.programa[lang];
  return head(p.kicker, p.title, p.lead) + `<div class="wrap grid-2">${p.blocks.map(([t, b]) => `<section class="card"><h2>${esc(t)}</h2><p>${esc(b)}</p></section>`).join("")}</div>`;
}

function plan() {
  const p = PAGES.plan[lang];
  return head(p.kicker, p.title, p.lead) + `<div class="wrap">
    <div class="grid-3">${p.phases.map(([n, t, b]) => `<article class="phase"><p>${esc(n)}</p><h2>${esc(t)}</h2><p>${esc(b)}</p></article>`).join("")}</div>
    <p>${esc(p.core)}</p>
    <h2>${esc(p.modulesTitle)}</h2>
    <div class="grid-3">${p.modules.map(([code, t, b]) => `<article class="card"><p class="kicker">${esc(code)}</p><h3>${esc(t)}</h3><p>${esc(b)}</p></article>`).join("")}</div>
    <div class="grid-2" style="margin-top:1rem">
      <section class="card"><h2>${esc(p.teachTitle)}</h2><p>${esc(p.teach)}</p></section>
      <section class="card"><h2>${esc(p.stateTitle)}</h2><p>${esc(p.state)}</p></section>
    </div>
    <h2>${esc(p.themesTitle)}</h2>
    <p class="muted">${esc(p.themesNote)}</p>
    <ul>${p.themes.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    <p><a href="${LINKS.plans}">${esc(ui.planLink)}</a></p>
  </div>`;
}

const EDGE = { fr: "#1f6b3a", en: "#1a4a62", pt: "#c9a227", sw: "#0f3d38", ling: "#1a463c", lit: "#7a2e3a", myth: "#b8432e", af: "#12352c", teach: "#3d5346" };

function razpis() {
  const year = Number(new URLSearchParams(location.search).get("year") || 1);
  const y = YEARS.includes(year) ? year : 1;
  const slots = SCHEDULE[y];
  const tabs = YEARS.map((n) => `<button type="button" class="${n === y ? "on" : ""}" data-year="${n}">${esc(ui.years[n - 1])}</button>`).join("");
  const legend = Object.entries(KINDS).map(([key, k]) => `<li><span class="swatch" style="background:${EDGE[key]}"></span>${esc(pick(lang, k))}</li>`).join("");
  const cards = DAYS.map((d, i) => {
    const daySlots = slots.filter((s) => s.day === i);
    const body = daySlots.length ? daySlots.map(slotCard).join("") : `<p class="muted">${esc(ui.noClasses)}</p>`;
    return `<section><h2>${esc(pick(lang, d))}</h2>${body}</section>`;
  }).join("");
  const rows = slots.map((s) => `<tr><td>${esc(pick(lang, DAYS[s.day]))}</td><td>${esc(s.start)}–${esc(s.end)}</td><td>${esc(pick(lang, s.course))}${s.note ? `<div class="note">${esc(pick(lang, s.note))}</div>` : ""}</td><td>${esc(pick(lang, s.form))}</td><td>${esc(pick(lang, s.teacher))}</td><td>${esc(pick(lang, s.room))}</td></tr>`).join("");
  return head(ui.scheduleKicker, ui.scheduleTitle, ui.scheduleLead) +
    `<div class="wrap"><div class="tabs" id="years">${tabs}</div><ul class="legend">${legend}</ul>${weekGrid(slots)}<div class="m-only">${cards}</div><h2>${esc(ui.listTitle)}</h2><div class="table-wrap"><table><thead><tr>${ui.cols.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div><h2>${esc(ui.notesTitle)}</h2>${NOTES[lang].map((n) => `<p class="card">${esc(n)}</p>`).join("")}</div>`;
}

function slotCard(s) {
  return `<article class="card slot" style="border-left-color:${EDGE[s.kind]}"><p class="when">${esc(s.start)}–${esc(s.end)} · ${esc(pick(lang, s.form))}</p><h3>${esc(pick(lang, s.course))}</h3><p>${esc(pick(lang, s.teacher))}</p><p class="muted">${esc(pick(lang, s.room))}</p>${s.note ? `<p class="note">${esc(pick(lang, s.note))}</p>` : ""}</article>`;
}

function mins(t) { const [h, m] = t.split(":").map(Number); return h * 60 + m; }

function weekGrid(slots) {
  const hours = Array.from({ length: 12 }, (_, i) => 8 + i);
  const headRow = `<div></div>` + DAYS.map((d) => `<div class="hd">${esc(pick(lang, d))}</div>`).join("");
  const cols = DAYS.map((_, day) => {
    const list = slots.filter((s) => s.day === day);
    const placed = [];
    for (const slot of [...list].sort((a, b) => mins(a.start) - mins(b.start))) {
      let lane = 0;
      while (placed.some((p) => p.lane === lane && mins(p.slot.start) < mins(slot.end) && mins(p.slot.end) > mins(slot.start))) lane += 1;
      placed.push({ slot, lane });
    }
    const lanes = Math.max(1, ...placed.map((p) => p.lane + 1), 1);
    const blocks = placed.map(({ slot, lane }) => {
      const top = ((mins(slot.start) - 480) / 720) * 100;
      const height = ((mins(slot.end) - mins(slot.start)) / 720) * 100;
      const width = 100 / lanes;
      return `<article style="top:${top}%;height:${height}%;left:${lane * width}%;width:${width}%;border-left-color:${EDGE[slot.kind]}"><strong>${esc(slot.start)}–${esc(slot.end)}</strong><br>${esc(pick(lang, slot.course))}</article>`;
    }).join("");
    const lines = hours.map((h) => `<span class="hline" style="top:${((h - 8) / 12) * 100}%"></span>`).join("");
    return `<div class="col">${lines}${blocks || `<p class="muted" style="padding:.5rem">${esc(ui.noClassesShort)}</p>`}</div>`;
  }).join("");
  const hourCol = `<div class="hours">${hours.map((h, i) => `<span style="top:${(i / 12) * 100}%">${String(h).padStart(2, "0")}</span>`).join("")}</div>`;
  return `<div class="week d-only">${headRow}${hourCol}${cols}</div>`;
}

function rektorat() {
  const rooms = [
    ["233", ui.room233],
    ["243", ui.room243],
    ["65, 125А, 168, 174, 224, 286", ui.room65],
    ["533 / 536", ui.roomBlock],
  ];
  return head(ui.mapKicker, ui.mapTitle, ui.mapLead) +
    `<div class="wrap"><div id="finder"><figure class="card mapfig"><img src="maps/rectorate-first-floor.jpg" alt="${esc(ui.mapAlt)}"></figure></div><p class="muted">${esc(ui.mapCaption)}</p><p><a href="maps/rectorate-first-floor.pdf">${esc(ui.mapPdf)}</a></p><h2>${esc(ui.roomsTitle)}</h2><p class="muted">${esc(ui.roomsLead)}</p><div class="grid-2">${rooms.map(([n, b]) => `<article class="card"><h3>${esc(n)}</h3><p>${esc(b)}</p></article>`).join("")}</div><p><a href="razpis.html">${esc(ui.toSchedule)}</a></p></div>`;
}

function ekip() {
  return head(ui.teamKicker, ui.teamTitle, ui.teamLead) +
    `<div class="wrap"><p><a href="${LINKS.facultyList}">${esc(ui.facultyLink)}</a></p><div class="grid-2">${TEAM.map((m) => `<article class="card"><p class="kicker">${esc(m.initials)}</p><h2>${esc(pick(lang, m.name))}</h2><p class="muted">${esc(pick(lang, m.role))}</p><p>${esc(pick(lang, m.bio))}</p>${m.hours ? `<p>${esc(pick(lang, m.hours))}</p>` : ""}${m.mail ? `<p><a href="mailto:${esc(m.mail)}">${esc(m.mail)}</a></p>` : ""}${m.href ? `<p><a href="${esc(m.href)}">authors.uni-sofia.bg</a></p>` : ""}</article>`).join("")}</div><h2>${esc(ui.councilTitle)}</h2><ul>${COUNCIL.map((p) => `<li>${esc(pick(lang, p))}</li>`).join("")}</ul></div>`;
}

function priem() {
  return head(ui.applyKicker, ui.applyTitle, ui.applyLead) +
    `<div class="wrap"><ul class="points">${ui.applyPoints.map((t) => `<li>${esc(t)}</li>`).join("")}</ul><p><strong>${esc(c.free)}</strong> ${esc(c.freeBody)}</p><p>${esc(ui.feesBody)} <a href="${LINKS.fees}">${esc(ui.feesLink)}</a></p><ul>${ui.applyLinks.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join("")}</ul></div>`;
}

function kariera() {
  return head(ui.careersKicker, ui.careersTitle, ui.careersLead) +
    `<div class="wrap grid-2">${ui.careerBlocks.map(([t, b]) => `<article class="card"><h2>${esc(t)}</h2><p>${esc(b)}</p></article>`).join("")}</div>`;
}

function mosaic() {
  return head("ISSN 3033-1412", "African Mosaic", ui.mosaicLead) +
    `<div class="wrap grid-2">
      <article class="card"><h2>${esc(ui.vol1)}</h2><p>${esc(ui.vol1Body)}</p><p><a href="https://africanstudies.eu/mosaic/african-mosaic-2024.pdf">PDF</a></p></article>
      <article class="card"><h2>${esc(ui.vol2)}</h2><p>${esc(ui.vol2Body)}</p><p><a href="https://africanstudies.eu/mosaic/african-mosaic-2025.pdf">PDF</a></p></article>
    </div>`;
}

function kontakt() {
  return head(ui.contactKicker, ui.contactTitle, ui.contactLead) +
    `<div class="wrap grid-2"><section class="card band"><p>${esc(c.uni)}</p><p>${esc(c.faculty)}</p><p>${esc(c.dept)}</p><p>${esc(c.address)}</p><p><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p></section><section class="card"><h2>${esc(ui.headTitle)}</h2><p>${esc(ui.headName)}</p><p>${esc(ui.headHours)}</p><p><a href="mailto:g.sokolova@uni-sofia.bg">g.sokolova@uni-sofia.bg</a></p></section></div>`;
}

const views = { home, programa, plan, razpis, rektorat, ekip, priem, kariera, mosaic, kontakt };
document.getElementById("app").innerHTML = shell((views[page] || home)());

document.querySelectorAll("#app a[href]").forEach((a) => {
  const href = a.getAttribute("href");
  if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#")) return;
  const url = new URL(href, location.href);
  url.searchParams.set("lang", lang);
  a.setAttribute("href", url.pathname.replace(/^\//, "") + url.search);
});

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const next = btn.getAttribute("data-lang");
    localStorage.setItem("as-lang", next);
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    location.href = url.pathname + url.search;
  });
});

function paintTheme(next) {
  localStorage.setItem("as-theme", next);
  document.documentElement.dataset.theme = next;
  document.getElementById("theme-light").setAttribute("aria-pressed", next === "light" ? "true" : "false");
  document.getElementById("theme-dark").setAttribute("aria-pressed", next === "dark" ? "true" : "false");
}
document.getElementById("theme-light").addEventListener("click", () => paintTheme("light"));
document.getElementById("theme-dark").addEventListener("click", () => paintTheme("dark"));

document.getElementById("menu").addEventListener("click", () => {
  const d = document.getElementById("drawer");
  const open = d.classList.toggle("open");
  document.getElementById("menu").setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll("[data-year]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = new URL(location.href);
    url.searchParams.set("year", btn.dataset.year);
    url.searchParams.set("lang", lang);
    location.href = url.pathname + url.search;
  });
});

if (page === "rektorat") {
  import("../maps/finder.js").then(({ mountFinder }) => {
    mountFinder(document.getElementById("finder"), lang);
  });
}

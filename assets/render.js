import {
  COPY, COUNCIL, DAYS, KINDS, LINKS, PAGES, SCHEDULE, SOCIAL, TEAM, YEARS, pick,
} from "./content.js";

const page = document.body.dataset.page || "home";
const lang = localStorage.getItem("as-lang") === "en" ? "en" : "bg";
document.documentElement.lang = lang;
const c = COPY[lang];

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

function shell(inner) {
  const links = NAV.map(([href, id, label]) => `<a class="${id === page ? "on" : ""}" href="${href}">${esc(label)}</a>`).join("");
  const more = `<a href="kariera.html">${esc(c.more[0][1])}</a><a href="mosaic.html">African Mosaic</a>`;
  return `
  <header class="mast">
    <div class="bar">
      <a class="brand" href="index.html"><span class="mark">СУ</span><span><span class="word">${esc(c.brand)}</span><span class="sub">${esc(c.brandEn)}</span></span></a>
      <nav class="nav" aria-label="Main">${links}</nav>
      <div>
        <button class="lang" type="button" id="lang">${esc(c.otherLang)}</button>
        <button class="menu-btn" type="button" id="menu" aria-expanded="false">${lang === "bg" ? "Меню" : "Menu"}</button>
      </div>
    </div>
    <nav class="drawer" id="drawer">${links}${more}</nav>
  </header>
  <div id="main">${inner}</div>
  <footer class="foot">
    <div class="foot-in">
      <div>
        <p class="word" style="color:#f4f0e6;font-size:1.4rem">${esc(c.brand)}</p>
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
        <p><a href="${lang === "bg" ? LINKS.degree : LINKS.degreeEn}">${lang === "bg" ? "Специалността на сайта на СУ" : "The degree on the SU site"}</a></p>
        <p><a href="${LINKS.fcml}">FKNF</a></p>
        <p><a href="kariera.html">${esc(c.more[0][1])}</a></p>
        <p><a href="mosaic.html">African Mosaic</a></p>
      </div>
    </div>
    <p class="wrap sand" style="padding-bottom:2rem">${esc(c.disclaimer)}</p>
  </footer>`;
}

function head(kicker, title, lead) {
  return `<header class="pagehead"><div class="wrap"><p class="kicker">${esc(kicker)}</p><h1>${esc(title)}</h1>${lead ? `<p class="lead">${esc(lead)}</p>` : ""}</div></header>`;
}

function home() {
  return `
  <section class="hero-band"><div class="hero">
    <div>
      <p class="kicker">${esc(c.homeKicker)}</p>
      <h1>${esc(c.homeTitle)}</h1>
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
    <p style="font-family:var(--serif);font-size:1.25rem;color:var(--forest)">${esc(c.cities)}</p>
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
    <p><a href="${LINKS.plans}">${lang === "bg" ? "Випускови учебни планове на СУ" : "Cohort study plans at Sofia University"}</a></p>
  </div>`;
}

const NOTES = {
  bg: [
    "Източник: разпис за зимния семестър 2026–2027, 02.10.2026. Началните часове 08:30, 12:15 и 14:30 са на точната минута.",
    "Петък на III курс е празен. Понеделник и вторник на IV курс са празни.",
    "Социолингвистиката на I курс в четвъртък е упражнение от два часа през седмица. Религиите на III курс са онлайн или в зала 286.",
    "Часовете за профил „Учител“ на IV курс не са в мрежата заради мобилност по „Еразъм+“. Модулът „Франкофонска Африка“ за IV курс също не тече този зимен семестър.",
  ],
  en: [
    "Source: winter-semester timetable 2026–2027, 2 October 2026. Start times 08:30, 12:15 and 14:30 are exact.",
    "Friday of year 3 is empty. Monday and Tuesday of year 4 are empty.",
    "Year 1 sociolinguistics on Thursday is a two-hour exercise every other week. Year 3 religions are online or in room 286.",
    "Teacher-track hours for year 4 are off the grid because those students are on Erasmus+. The Francophone Africa module for year 4 does not run this winter either.",
  ],
};

const EDGE = { fr: "#2f6a45", en: "#1e4d6b", pt: "#8a6232", sw: "#1a4a44", ling: "#245246", lit: "#6e3048", myth: "#9a4e32", af: "#1c3d34", teach: "#3d5346" };

function razpis() {
  const year = Number(new URLSearchParams(location.search).get("year") || 1);
  const y = YEARS.includes(year) ? year : 1;
  const slots = SCHEDULE[y];
  const tabs = YEARS.map((n) => `<button type="button" class="${n === y ? "on" : ""}" data-year="${n}">${lang === "bg" ? ["I", "II", "III", "IV"][n - 1] + " курс" : "Year " + n}</button>`).join("");
  const legend = Object.entries(KINDS).map(([key, k]) => `<li><span class="swatch" style="background:${EDGE[key]}"></span>${esc(pick(lang, k))}</li>`).join("");
  const cards = DAYS.map((d, i) => {
    const daySlots = slots.filter((s) => s.day === i);
    const body = daySlots.length ? daySlots.map(slotCard).join("") : `<p class="muted">${lang === "bg" ? "Няма часове." : "No classes."}</p>`;
    return `<section><h2>${esc(pick(lang, d))}</h2>${body}</section>`;
  }).join("");
  const rows = slots.map((s) => `<tr><td>${esc(pick(lang, DAYS[s.day]))}</td><td>${esc(s.start)}–${esc(s.end)}</td><td>${esc(pick(lang, s.course))}${s.note ? `<div class="note">${esc(pick(lang, s.note))}</div>` : ""}</td><td>${esc(pick(lang, s.form))}</td><td>${esc(pick(lang, s.teacher))}</td><td>${esc(pick(lang, s.room))}</td></tr>`).join("");
  const week = weekGrid(slots);
  return head(lang === "bg" ? "02.10.2026" : "2 October 2026", lang === "bg" ? "Седмично разписание" : "Weekly timetable", lang === "bg" ? "Зимен семестър 2026–2027, I–IV курс." : "Winter semester 2026–2027, years 1–4.") +
    `<div class="wrap"><div class="tabs" id="years">${tabs}</div><ul class="legend">${legend}</ul>${week}<div class="m-only">${cards}</div><h2>${lang === "bg" ? "Списък" : "List"}</h2><div class="table-wrap"><table><thead><tr>${(lang === "bg" ? ["Ден", "Час", "Дисциплина", "Форма", "Преподавател", "Зала"] : ["Day", "Time", "Course", "Form", "Teacher", "Room"]).map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div><h2>${lang === "bg" ? "Забележки" : "Notes"}</h2>${NOTES[lang].map((n) => `<p class="card">${esc(n)}</p>`).join("")}</div>`;
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
    return `<div class="col">${lines}${blocks || `<p class="muted" style="padding:.5rem">${lang === "bg" ? "Няма часове" : "No classes"}</p>`}</div>`;
  }).join("");
  const hourCol = `<div class="hours">${hours.map((h, i) => `<span style="top:${(i / 12) * 100}%">${String(h).padStart(2, "0")}</span>`).join("")}</div>`;
  return `<div class="week d-only">${headRow}${hourCol}${cols}</div>`;
}

function rektorat() {
  const rooms = [
    ["233", lang === "bg" ? "Първи етаж, северно крило. Номерът е на плана." : "First floor, north wing. The number is on this plan."],
    ["243", lang === "bg" ? "Втори етаж, северно крило — в легендата: 241, 243, 245, 252." : "Second floor, north wing — the legend lists 241, 243, 245, 252."],
    ["65, 125А, 168, 174, 224, 286", lang === "bg" ? "Ректорат, други етажи. Не са номерирани на този чертеж." : "Rectorate, other floors. Not numbered on this drawing."],
    ["533 / 536", lang === "bg" ? "Блок I. 536 е Африканско-карибският културен център." : "Block I. 536 is the African-Caribbean Cultural Centre."],
  ];
  return head(lang === "bg" ? "Ректорат" : "Rectorate", lang === "bg" ? "Първи етаж" : "First floor", lang === "bg"
    ? "Чертежът е първият етаж на Ректората, бул. „Цар Освободител“ 15. „Вие сте тук“ е ориентир на плана, не кабинет на програмата."
    : "First floor of the Rectorate, 15 Tsar Osvoboditel Blvd. “You are here” is a wayfinding mark, not the programme office.") +
    `<div class="wrap"><figure class="card mapfig"><img src="maps/rectorate-first-floor.jpg" alt="${lang === "bg" ? "План на първия етаж на Ректората" : "First-floor plan of the Rectorate"}"><figcaption>${lang === "bg" ? "Първи етаж. Легендата посочва зали и на горните етажи." : "First floor. The legend also points to rooms upstairs."}</figcaption></figure><p><a href="maps/rectorate-first-floor.pdf">${lang === "bg" ? "Изтегли плана (PDF)" : "Download the plan (PDF)"}</a></p><h2>${lang === "bg" ? "Зали този семестър" : "Rooms this semester"}</h2><div class="grid-2">${rooms.map(([n, b]) => `<article class="card"><h3>${esc(n)}</h3><p>${esc(b)}</p></article>`).join("")}</div><p><a href="razpis.html">${lang === "bg" ? "Към разписанието" : "To the timetable"}</a></p></div>`;
}

function ekip() {
  return head(lang === "bg" ? "Екип" : "Team", lang === "bg" ? "Екипът по Африканистика" : "The African Studies team", lang === "bg"
    ? "Преподаватели, изследователи и инспектор учебна дейност на бакалавърската програма."
    : "Faculty, researchers and the academic inspector of the bachelor’s programme.") +
    `<div class="wrap"><p><a href="${LINKS.facultyList}">${lang === "bg" ? "Преподаватели на катедрата (СУ)" : "Department faculty list (SU)"}</a></p><div class="grid-2">${TEAM.map((m) => `<article class="card"><p class="kicker">${esc(m.initials)}</p><h2>${esc(pick(lang, m.name))}</h2><p class="muted">${esc(pick(lang, m.role))}</p><p>${esc(pick(lang, m.bio))}</p>${m.hours ? `<p>${esc(pick(lang, m.hours))}</p>` : ""}${m.mail ? `<p><a href="mailto:${esc(m.mail)}">${esc(m.mail)}</a></p>` : ""}${m.href ? `<p><a href="${esc(m.href)}">authors.uni-sofia.bg</a></p>` : ""}</article>`).join("")}</div><h2>${lang === "bg" ? "Програмен съвет" : "Programme council"}</h2><ul>${COUNCIL.map((p) => `<li>${esc(pick(lang, p))}</li>`).join("")}</ul></div>`;
}

function priem() {
  const items = [
    [lang === "bg" ? "Програмата на български (СУ)" : "The programme in Bulgarian (SU)", LINKS.degree],
    ["African Studies (in English)", LINKS.degreeEn],
    [lang === "bg" ? "Прием след средно образование" : "Admission after secondary school", LINKS.admitBg],
    [lang === "bg" ? "Балообразуване, кампания 2026" : "Ranking, 2026 campaign", LINKS.ranking],
    ["Bachelor’s programmes in English", LINKS.bachelorsEn],
    ["International students", LINKS.international],
    [lang === "bg" ? "Кандидати извън ЕС" : "Applicants from non-EU countries", LINKS.nonEu],
    ["FKNF", LINKS.fcml],
  ];
  return head(lang === "bg" ? "Прием" : "Admissions", lang === "bg" ? "Приемът е към Софийския университет" : "You apply to Sofia University", lang === "bg"
    ? "„Африканистика“ не е отделно училище. Кандидатствате за бакалавърската програма към ФКНФ."
    : "African Studies is not a separate school. You apply for the BA at FKNF.") +
    `<div class="wrap"><p><strong>${esc(c.free)}</strong> ${esc(c.freeBody)}</p><p>${lang === "bg" ? "В таблицата на СУ за 2025/2026, за „African Studies (in English)“, редовна форма, е посочена сума 2 900 евро за студенти извън ЕС. Цифрата важи само за този документ." : "In the SU table for 2025/2026, “African Studies (in English)”, full-time, is listed at 2,900 euro for non-EU students. That figure belongs only to that document."} <a href="${LINKS.fees}">PDF</a></p><ul>${items.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join("")}</ul></div>`;
}

function kariera() {
  const blocks = lang === "bg" ? [
    ["Превод и езици", "Преводачи и работа с английски и френски или английски и португалски на ниво B2–C1."],
    ["Институции", "Държавни и неправителствени организации и културни институции, които работят с Африка."],
    ["Референти и медии", "Референти за африкански държави, журналисти, редактори, експерти в медии."],
    ["Училище", "Учители по английски и френски или по английски и португалски, ако е избран педагогическият модул."],
  ] : [
    ["Translation and languages", "Translators, and work needing English plus French or Portuguese at B2–C1."],
    ["Institutions", "State and non-governmental organisations and cultural institutions that work with Africa."],
    ["Briefing and media", "Country officers, journalists, editors and media specialists."],
    ["Schools", "Teachers of English and French, or English and Portuguese, if the pedagogical module was chosen."],
  ];
  return head(lang === "bg" ? "Реализация" : "Careers", lang === "bg" ? "Филолог африканист — и по желание учител" : "A philologist in African studies — and, if you choose, a teacher", lang === "bg" ? "Описание от официалната характеристика, не кариерен маркетинг." : "The official description of the degree, not career marketing.") +
    `<div class="wrap grid-2">${blocks.map(([t, b]) => `<article class="card"><h2>${esc(t)}</h2><p>${esc(b)}</p></article>`).join("")}</div>`;
}

function mosaic() {
  return head("ISSN 3033-1412", "African Mosaic", lang === "bg"
    ? "Електронно списание на катедрата. Издава Университетско издателство „Св. Климент Охридски“."
    : "The department’s electronic journal, published by Sofia University Press.") +
    `<div class="wrap grid-2">
      <article class="card"><h2>${lang === "bg" ? "Том 1 (2024)" : "Volume 1 (2024)"}</h2><p>${lang === "bg" ? "Музика, танци, изкуство и общества." : "Music, dance, art and societies."}</p><p><a href="https://africanstudies.eu/mosaic/african-mosaic-2024.pdf">PDF</a></p></article>
      <article class="card"><h2>${lang === "bg" ? "Том 2 (2025)" : "Volume 2 (2025)"}</h2><p>${lang === "bg" ? "Конференцията „Африка в един променящ се свят“, 21–22 ноември 2025." : "The conference “Africa in a Changing World”, 21–22 November 2025."}</p><p><a href="https://africanstudies.eu/mosaic/african-mosaic-2025.pdf">PDF</a></p></article>
    </div>`;
}

function kontakt() {
  return head(lang === "bg" ? "Контакт" : "Contact", lang === "bg" ? "Пишете на програмата" : "Write to the programme", c.email) +
    `<div class="wrap grid-2"><section class="card" style="background:var(--forest);color:var(--paper)"><p>${esc(c.uni)}</p><p>${esc(c.faculty)}</p><p>${esc(c.dept)}</p><p>${esc(c.address)}</p><p><a style="color:#f4f0e6" href="mailto:${esc(c.email)}">${esc(c.email)}</a></p></section><section class="card"><h2>${lang === "bg" ? "Ръководител на катедрата" : "Head of department"}</h2><p>${lang === "bg" ? "Доц. д-р Галина Русева-Соколова" : "Assoc. Prof. Dr Galina Ruseva-Sokolova"}</p><p>${lang === "bg" ? "Сряда, 12:00–14:00, онлайн." : "Wednesday, 12:00–14:00, online."}</p><p><a href="mailto:g.sokolova@uni-sofia.bg">g.sokolova@uni-sofia.bg</a></p></section></div>`;
}

const views = { home, programa, plan, razpis, rektorat, ekip, priem, kariera, mosaic, kontakt };
document.getElementById("app").innerHTML = shell((views[page] || home)());

document.getElementById("lang").addEventListener("click", () => {
  localStorage.setItem("as-lang", lang === "bg" ? "en" : "bg");
  location.reload();
});
document.getElementById("menu").addEventListener("click", () => {
  const d = document.getElementById("drawer");
  const open = d.classList.toggle("open");
  document.getElementById("menu").setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll("[data-year]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = new URL(location.href);
    url.searchParams.set("year", btn.dataset.year);
    location.href = url.pathname + url.search;
  });
});

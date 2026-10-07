const ASPECT = 2200 / 1555;
const QUICK = ["hall-1", "hall-2", "aula", "secretariat", "aud-45", "library", "erasmus"];

const COPY = {
  bg: {
    label: "Търсене на зала",
    placeholder: "Зала, стая или служба",
    clear: "Изчисти търсенето",
    empty: "Няма съвпадение",
    other: "друг етаж",
    zoomIn: "Приближи",
    zoomOut: "Отдалечи",
    fit: "Целият план",
    close: "Затвори",
    notOnPlan: "Не е на този план. Следвайте указателите за етажа.",
    here: "Вие сте тук",
    floors: { 1: "Първи етаж", 2: "Втори етаж", 3: "Трети етаж", 4: "Четвърти етаж", 5: "Пети етаж" },
    wings: { north: "Северно крило", south: "Южно крило", center: "Център", library: "Библиотека", service: "Служби" },
  },
  en: {
    label: "Find a room",
    placeholder: "Hall, room or service",
    clear: "Clear search",
    empty: "Nothing matches",
    other: "another floor",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    fit: "Whole plan",
    close: "Close",
    notOnPlan: "Not on this plan. Follow the signs for that floor.",
    here: "You are here",
    floors: { 1: "First floor", 2: "Second floor", 3: "Third floor", 4: "Fourth floor", 5: "Fifth floor" },
    wings: { north: "North wing", south: "South wing", center: "Centre", library: "Library", service: "Services" },
  },
  fr: {
    label: "Chercher une salle",
    placeholder: "Salle, bureau ou service",
    clear: "Effacer la recherche",
    empty: "Aucun résultat",
    other: "autre étage",
    zoomIn: "Zoom avant",
    zoomOut: "Zoom arrière",
    fit: "Tout le plan",
    close: "Fermer",
    notOnPlan: "Pas sur ce plan. Suivez les indications de l’étage.",
    here: "Vous êtes ici",
    floors: { 1: "Premier étage", 2: "Deuxième étage", 3: "Troisième étage", 4: "Quatrième étage", 5: "Cinquième étage" },
    wings: { north: "Aile nord", south: "Aile sud", center: "Centre", library: "Bibliothèque", service: "Services" },
  },
  de: {
    label: "Raum suchen",
    placeholder: "Saal, Raum oder Dienst",
    clear: "Suche löschen",
    empty: "Keine Treffer",
    other: "anderes Stockwerk",
    zoomIn: "Vergrößern",
    zoomOut: "Verkleinern",
    fit: "Gesamter Plan",
    close: "Schließen",
    notOnPlan: "Nicht auf diesem Plan. Folgen Sie den Hinweisen zum Stockwerk.",
    here: "Sie sind hier",
    floors: { 1: "Erstes Stockwerk", 2: "Zweites Stockwerk", 3: "Drittes Stockwerk", 4: "Viertes Stockwerk", 5: "Fünftes Stockwerk" },
    wings: { north: "Nordflügel", south: "Südflügel", center: "Mitte", library: "Bibliothek", service: "Dienste" },
  },
};

function fold(value) {
  return String(value)
    .toLocaleLowerCase("bg")
    .replaceAll("„", "")
    .replaceAll("“", "")
    .replaceAll("\"", "")
    .replaceAll("+", "")
    .replaceAll("–", " ")
    .replaceAll("-", " ")
    .replace(/\s+/g, " ")
    .trim();
}

function rankText(text, query) {
  if (text === query) return 96;
  if (!text.startsWith(query)) return query.length >= 3 && text.includes(query) ? 54 : 0;
  const rest = text.slice(query.length);
  if (rest.startsWith(" ") && query.length < 5) return 0;
  return rest.length === 0 ? 96 : 70;
}

export function searchPlaces(places, query) {
  const q = fold(query);
  if (!q) return [];
  const hits = [];
  for (const place of places) {
    let score = 0;
    if (place.code && fold(place.code) === q) score = 100;
    for (const field of [place.nameBg, place.nameEn, ...place.aliases]) {
      score = Math.max(score, rankText(fold(field), q));
    }
    if (place.code && q.length >= 2 && fold(place.code).startsWith(q) && fold(place.code) !== q) {
      score = Math.max(score, 84);
    }
    if (score > 0) hits.push({ place, score });
  }
  hits.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.place.onPlan !== b.place.onPlan) return a.place.onPlan ? -1 : 1;
    return a.place.nameBg.localeCompare(b.place.nameBg, "bg");
  });
  return hits.slice(0, 8).map((hit) => hit.place);
}

function pointInPoly(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0];
    const yi = poly[i][1];
    const xj = poly[j][0];
    const yj = poly[j][1];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.00001) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export function hitTest(places, x, y) {
  for (const place of places) {
    if (!place.poly || place.poly.length < 3) continue;
    if (pointInPoly(x, y, place.poly)) return place;
  }
  let best = null;
  let bestD = 2.2;
  for (const place of places) {
    if (!place.onPlan) continue;
    const dx = place.point[0] - x;
    const dy = (place.point[1] - y) * ASPECT;
    const d = Math.hypot(dx, dy);
    if (d < bestD) {
      best = place;
      bestD = d;
    }
  }
  return best;
}

function text(lang, place) {
  return lang === "bg" ? place.nameBg : place.nameEn;
}

function otherName(lang, place) {
  return lang === "bg" ? place.nameEn : place.nameBg;
}

function where(lang, t, place) {
  const floor = t.floors[place.floor] || String(place.floor);
  const wing = t.wings[place.wing] || "";
  const alt = lang === "bg" ? COPY.en : COPY.bg;
  return {
    line: `${floor} · ${wing}`,
    other: `${alt.floors[place.floor] || place.floor} · ${alt.wings[place.wing] || ""}`,
  };
}

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs || {})) {
    if (key === "class") node.className = value;
    else if (key === "text") node.textContent = value;
    else node.setAttribute(key, value);
  }
  for (const child of children || []) node.append(child);
  return node;
}

export async function mountFinder(root, lang) {
  if (!root) return;
  const t = COPY[lang] || COPY.en;
  const imgUrl = new URL("./rectorate-first-floor.jpg", import.meta.url).href;
  const dataUrl = new URL("./places.json", import.meta.url).href;

  root.className = "finder";
  root.replaceChildren();
  const search = el("div", { class: "finder-search" });
  const label = el("label", { class: "sr-only", for: "room-q", text: t.label });
  const input = el("input", {
    id: "room-q",
    type: "search",
    autocomplete: "off",
    role: "combobox",
    "aria-expanded": "false",
    "aria-controls": "room-list",
    "aria-autocomplete": "list",
    placeholder: t.placeholder,
  });
  const clear = el("button", { type: "button", class: "finder-clear", "aria-label": t.clear, hidden: "", text: "×" });
  const list = el("ul", { id: "room-list", class: "finder-list", role: "listbox", hidden: "" });
  search.append(label, input, clear, list);
  const chips = el("div", { class: "finder-chips" });
  const stage = el("div", { class: "finder-stage" });
  const world = el("div", { class: "finder-world" });
  const image = el("img", { src: imgUrl, alt: t.label, draggable: "false" });
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  world.append(image, svg);
  const pin = el("div", { class: "finder-pin" }, [el("span", { text: t.here })]);
  const zoom = el("div", { class: "finder-zoom" });
  const zoomIn = el("button", { type: "button", "aria-label": t.zoomIn, text: "+" });
  const zoomOut = el("button", { type: "button", "aria-label": t.zoomOut, text: "−" });
  const zoomFit = el("button", { type: "button", "aria-label": t.fit, text: "⌂" });
  zoom.append(zoomIn, zoomOut, zoomFit);
  stage.append(world, pin, zoom);
  const card = el("article", { class: "finder-card", hidden: "" });
  root.append(search, chips, stage, card);

  let places = [];
  try {
    const response = await fetch(dataUrl);
    if (!response.ok) throw new Error(String(response.status));
    places = await response.json();
  } catch {
    root.replaceChildren(el("p", { class: "muted", text: t.empty }));
    return;
  }

  const here = places.find((place) => place.id === "you-are-here");
  const state = {
    query: "",
    open: false,
    active: 0,
    selected: null,
    view: { x: 0, y: 0, scale: 1 },
    size: { w: 1, h: 1 },
    userMoved: false,
  };
  const asked = new URLSearchParams(location.search).get("room");
  let pending = asked
    ? places.find((place) => (place.code && fold(place.code) === fold(asked)) || place.id === asked || place.id === `room-${asked}`)
    : null;

  function results() {
    return searchPlaces(places, state.query);
  }

  function fitSize() {
    const viewAspect = state.size.w / Math.max(state.size.h, 1);
    if (viewAspect > ASPECT) {
      const height = state.size.h;
      return { w: height * ASPECT, h: height };
    }
    const width = state.size.w;
    return { w: width, h: width / ASPECT };
  }

  function paintView() {
    const fit = fitSize();
    world.style.width = `${fit.w}px`;
    world.style.height = `${fit.h}px`;
    world.style.transform = `translate(${state.view.x}px, ${state.view.y}px) scale(${state.view.scale})`;
    if (!here || state.selected?.id === "you-are-here") {
      pin.hidden = true;
      return;
    }
    pin.hidden = false;
    pin.style.left = `${state.view.x + (here.point[0] / 100) * fit.w * state.view.scale}px`;
    pin.style.top = `${state.view.y + (here.point[1] / 100) * fit.h * state.view.scale}px`;
  }

  function applyFit() {
    const fit = fitSize();
    state.view = { x: (state.size.w - fit.w) / 2, y: (state.size.h - fit.h) / 2, scale: 1 };
    paintView();
  }

  function paintMark() {
    const place = state.selected;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (!place) return;
    const ns = "http://www.w3.org/2000/svg";
    if (place.poly && place.poly.length >= 3) {
      const points = place.poly.map((pair) => pair.join(",")).join(" ");
      const defs = document.createElementNS(ns, "defs");
      const mask = document.createElementNS(ns, "mask");
      mask.id = "room-mask";
      const wash = document.createElementNS(ns, "rect");
      wash.setAttribute("width", "100");
      wash.setAttribute("height", "100");
      wash.setAttribute("fill", "white");
      const hole = document.createElementNS(ns, "polygon");
      hole.setAttribute("points", points);
      hole.setAttribute("fill", "black");
      mask.append(wash, hole);
      defs.append(mask);
      const dim = document.createElementNS(ns, "rect");
      dim.setAttribute("width", "100");
      dim.setAttribute("height", "100");
      dim.setAttribute("fill", "#1c1612");
      dim.setAttribute("fill-opacity", "0.4");
      dim.setAttribute("mask", "url(#room-mask)");
      const poly = document.createElementNS(ns, "polygon");
      poly.setAttribute("points", points);
      poly.setAttribute("fill", "#b8432e");
      poly.setAttribute("fill-opacity", "0.38");
      poly.setAttribute("stroke", "#b8432e");
      poly.setAttribute("stroke-width", "0.45");
      svg.append(defs, dim, poly);
      return;
    }
    const dim = document.createElementNS(ns, "rect");
    dim.setAttribute("width", "100");
    dim.setAttribute("height", "100");
    dim.setAttribute("fill", "#1c1612");
    dim.setAttribute("fill-opacity", "0.28");
    const ring = document.createElementNS(ns, "ellipse");
    ring.setAttribute("cx", String(place.point[0]));
    ring.setAttribute("cy", String(place.point[1]));
    ring.setAttribute("rx", "1.7");
    ring.setAttribute("ry", String(1.7 * ASPECT));
    ring.setAttribute("fill", "#b8432e");
    ring.setAttribute("fill-opacity", "0.28");
    ring.setAttribute("stroke", "#b8432e");
    ring.setAttribute("stroke-width", "0.35");
    const pulse = document.createElementNS(ns, "ellipse");
    pulse.setAttribute("class", "finder-pulse");
    pulse.setAttribute("cx", String(place.point[0]));
    pulse.setAttribute("cy", String(place.point[1]));
    pulse.setAttribute("rx", "3.1");
    pulse.setAttribute("ry", String(3.1 * ASPECT));
    pulse.setAttribute("fill", "none");
    pulse.setAttribute("stroke", "#b8432e");
    pulse.setAttribute("stroke-width", "0.45");
    svg.append(dim, ring, pulse);
  }

  function paintCard() {
    const place = state.selected;
    card.replaceChildren();
    if (!place) {
      card.hidden = true;
      return;
    }
    card.hidden = false;
    const spot = where(lang, t, place);
    const head = el("div", { class: "finder-card-head" });
    const titles = el("div");
    titles.append(el("h2", { text: text(lang, place) }), el("p", { class: "muted", text: otherName(lang, place) }));
    const closeBtn = el("button", { type: "button", class: "finder-clear", "aria-label": t.close, text: "×" });
    closeBtn.addEventListener("click", () => {
      state.selected = null;
      paintMark();
      paintCard();
      paintView();
      paintChips();
    });
    head.append(titles, closeBtn);
    card.append(head, el("p", { class: "finder-where", text: spot.line }), el("p", { class: "muted", text: spot.other }));
    const note = lang === "bg" ? place.noteBg : place.noteEn || place.noteBg;
    const noteAlt = lang === "bg" ? place.noteEn : place.noteBg;
    if (note) card.append(el("p", { text: note }));
    if (noteAlt && noteAlt !== note) card.append(el("p", { class: "muted", text: noteAlt }));
    if (!place.onPlan) card.append(el("p", { class: "finder-off", text: t.notOnPlan }));
  }

  function markActive() {
    list.querySelectorAll("button").forEach((button, index) => {
      button.setAttribute("aria-selected", index === state.active ? "true" : "false");
    });
  }

  function paintList() {
    const found = results();
    list.replaceChildren();
    clear.hidden = state.query ? false : true;
    const show = state.open && state.query;
    list.hidden = !show;
    input.setAttribute("aria-expanded", show ? "true" : "false");
    if (!show) return;
    if (!found.length) {
      list.append(el("li", { class: "finder-empty", text: t.empty }));
      return;
    }
    found.forEach((place, index) => {
      const spot = where(lang, t, place);
      const button = el("button", { type: "button", role: "option", "aria-selected": index === state.active ? "true" : "false" });
      const badge = el("span", { class: "finder-code", text: place.code || text(lang, place).slice(0, 1) });
      const names = el("span", { class: "finder-names" });
      names.append(el("strong", { text: text(lang, place) }), el("span", { text: `${otherName(lang, place)} · ${spot.line}` }));
      button.append(badge, names);
      if (!place.onPlan) button.append(el("span", { class: "finder-other", text: t.other }));
      button.addEventListener("pointerenter", () => {
        state.active = index;
        markActive();
      });
      button.addEventListener("click", () => choose(place));
      list.append(el("li", {}, [button]));
    });
  }

  function paintChips() {
    chips.replaceChildren();
    for (const id of QUICK) {
      const place = places.find((item) => item.id === id);
      if (!place) continue;
      const button = el("button", {
        type: "button",
        class: state.selected?.id === id ? "on" : "",
        text: text(lang, place),
      });
      button.addEventListener("click", () => choose(place));
      chips.append(button);
    }
  }

  function focusPlace(place) {
    state.userMoved = true;
    state.selected = place;
    const scale = Math.max(state.view.scale, place.onPlan ? 2.35 : 1.7);
    const fit = fitSize();
    state.view = {
      scale,
      x: state.size.w / 2 - (place.point[0] / 100) * fit.w * scale,
      y: state.size.h * 0.46 - (place.point[1] / 100) * fit.h * scale,
    };
    const url = new URL(location.href);
    url.searchParams.set("room", place.code || place.id);
    history.replaceState(null, "", url.pathname + url.search);
    paintMark();
    paintCard();
    paintView();
    paintChips();
  }

  function choose(place) {
    state.query = place.code && place.kind === "room" ? place.code : text(lang, place);
    input.value = state.query;
    state.open = false;
    focusPlace(place);
    paintList();
  }

  function zoomAt(next, anchorX, anchorY) {
    state.userMoved = true;
    const scale = Math.min(6.5, Math.max(1, next));
    const ratio = scale / state.view.scale;
    state.view = {
      scale,
      x: anchorX - (anchorX - state.view.x) * ratio,
      y: anchorY - (anchorY - state.view.y) * ratio,
    };
    paintView();
  }

  function measure() {
    const rect = stage.getBoundingClientRect();
    state.size = { w: rect.width, h: Math.max(rect.height, 1) };
    if (pending && state.size.w > 40 && state.size.h > 40) {
      const place = pending;
      pending = null;
      focusPlace(place);
      state.query = place.code && place.kind === "room" ? place.code : text(lang, place);
      input.value = state.query;
      paintList();
      return;
    }
    if (!state.userMoved) applyFit();
    else paintView();
  }

  input.addEventListener("input", () => {
    state.query = input.value;
    state.open = true;
    state.active = 0;
    paintList();
  });
  input.addEventListener("focus", () => {
    state.open = true;
    paintList();
  });
  input.addEventListener("keydown", (event) => {
    const found = results();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      state.open = true;
      state.active = Math.min(state.active + 1, Math.max(found.length - 1, 0));
      paintList();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      state.active = Math.max(state.active - 1, 0);
      paintList();
    } else if (event.key === "Enter" && found[state.active]) {
      event.preventDefault();
      choose(found[state.active]);
    } else if (event.key === "Escape") {
      state.open = false;
      paintList();
    }
  });
  clear.addEventListener("click", () => {
    state.query = "";
    input.value = "";
    state.open = false;
    state.selected = null;
    paintList();
    paintMark();
    paintCard();
    paintView();
    paintChips();
    input.focus();
  });

  zoomIn.addEventListener("click", () => zoomAt(state.view.scale * 1.3, state.size.w / 2, state.size.h / 2));
  zoomOut.addEventListener("click", () => zoomAt(state.view.scale / 1.3, state.size.w / 2, state.size.h / 2));
  zoomFit.addEventListener("click", () => {
    state.userMoved = false;
    applyFit();
  });

  const drag = { id: null, x: 0, y: 0, ox: 0, oy: 0, moved: false };
  stage.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest("button")) return;
    stage.setPointerCapture(event.pointerId);
    drag.id = event.pointerId;
    drag.x = event.clientX;
    drag.y = event.clientY;
    drag.ox = state.view.x;
    drag.oy = state.view.y;
    drag.moved = false;
  });
  stage.addEventListener("pointermove", (event) => {
    if (drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (Math.hypot(dx, dy) > 4) {
      drag.moved = true;
      state.userMoved = true;
    }
    state.view.x = drag.ox + dx;
    state.view.y = drag.oy + dy;
    paintView();
  });
  stage.addEventListener("pointerup", (event) => {
    if (drag.id !== event.pointerId) return;
    const moved = drag.moved;
    drag.id = null;
    if (moved) return;
    const rect = world.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const place = hitTest(places, x, y);
    if (!place) return;
    state.query = place.code && place.kind === "room" ? place.code : text(lang, place);
    input.value = state.query;
    state.open = false;
    state.selected = place;
    const url = new URL(location.href);
    url.searchParams.set("room", place.code || place.id);
    history.replaceState(null, "", url.pathname + url.search);
    paintList();
    paintMark();
    paintCard();
    paintChips();
    paintView();
  });
  stage.addEventListener("pointercancel", () => {
    drag.id = null;
  });
  stage.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      const rect = stage.getBoundingClientRect();
      const factor = event.deltaY < 0 ? 1.12 : 1 / 1.12;
      zoomAt(state.view.scale * factor, event.clientX - rect.left, event.clientY - rect.top);
    },
    { passive: false },
  );

  document.addEventListener("pointerdown", (event) => {
    if (search.contains(event.target)) return;
    if (!state.open) return;
    state.open = false;
    paintList();
  });

  paintChips();
  measure();
  const observer = new ResizeObserver(measure);
  observer.observe(stage);
}

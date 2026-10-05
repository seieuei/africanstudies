// @ts-nocheck
/** African Studies BA only. The EU programmes are a different site. */
import { extendContent, courseLD, noteLD, roomLD, teacherLD, formLD } from "./locales.js";
export { UI, NOTES } from "./locales.js";

export const YEARS = [1, 2, 3, 4];

export const DAYS = [
  { bg: "Понеделник", en: "Monday", fr: "Lundi", de: "Montag" },
  { bg: "Вторник", en: "Tuesday", fr: "Mardi", de: "Dienstag" },
  { bg: "Сряда", en: "Wednesday", fr: "Mercredi", de: "Mittwoch" },
  { bg: "Четвъртък", en: "Thursday", fr: "Jeudi", de: "Donnerstag" },
  { bg: "Петък", en: "Friday", fr: "Vendredi", de: "Freitag" },
];

const f = {
  ex: { bg: "Упражнения", en: "Exercise" },
  ex1: { bg: "Упражнение", en: "Exercise" },
  lec: { bg: "Лекция", en: "Lecture" },
  both: { bg: "Лекция и упражнение", en: "Lecture and exercise" },
  teach: { bg: "Лекция · профил учител", en: "Lecture · teacher track" },
};

/** kind: fr en pt sw ling lit myth af teach */
export const SCHEDULE = {
  1: [
    s(0, "08:00", "12:00", "Френски език – анализ на текста, I", "French – text analysis, I", f.ex, "Гл. ас. д-р Елена Динева", "Chief Asst. Prof. Dr Elena Dineva", "Зала 174, Ректорат", "Room 174, Rectorate", "fr"),
    s(0, "13:00", "16:00", "Социолингвистика", "Sociolinguistics", f.lec, "Проф. Ангел Ангелов", "Prof. Angel Angelov", "Зала 233, Ректорат", "Room 233, Rectorate", "ling"),
    s(1, "08:00", "10:00", "Френски език – анализ на текста, I", "French – text analysis, I", f.ex, "Гл. ас. д-р Елена Динева", "Chief Asst. Prof. Dr Elena Dineva", "Зала 174, Ректорат", "Room 174, Rectorate", "fr"),
    s(1, "10:00", "13:00", "Академичен английски", "Academic English", f.both, "Гл. ас. д-р Александър Костов", "Chief Asst. Prof. Dr Alexander Kostov", "Зала 233, Ректорат", "Room 233, Rectorate", "en"),
    s(1, "13:00", "16:00", "Академичен английски", "Academic English", f.both, "Гл. ас. д-р Пенка Христова", "Chief Asst. Prof. Dr Penka Hristova", "Зала 233, Ректорат", "Room 233, Rectorate", "en"),
    s(1, "16:00", "18:00", "Африканска митология", "African mythology", f.lec, "Проф. д-р Светлана Стойчева", "Prof. Dr Svetlana Stoycheva", "Зала 233, Ректорат", "Room 233, Rectorate", "myth"),
    s(2, "09:00", "13:00", "Втори език – френски, I", "Second language – French, I", f.ex, "Гл. ас. д-р Стилияна Петкова", "Chief Asst. Prof. Dr Stiliyana Petkova", "Зала 233, Ректорат", "Room 233, Rectorate", "fr"),
    s(2, "13:00", "16:00", "Увод в литературната теория", "Introduction to literary theory", f.lec, "проф. дн Магдалена Костова-Панайотова", "Prof. DSc Magdalena Kostova-Panayotova", "Зала 233, Ректорат", "Room 233, Rectorate", "lit"),
    s(3, "10:00", "13:00", "Увод в общото езикознание", "Introduction to general linguistics", f.both, "Проф. д-р Александра Багашева", "Prof. Dr Alexandra Bagasheva", "Зала 233, Ректорат", "Room 233, Rectorate", "ling"),
    s(3, "14:30", "16:00", "Социолингвистика", "Sociolinguistics", f.ex1, "Гл. ас. д-р Пенка Христова", "Chief Asst. Prof. Dr Penka Hristova", "Зала 233, Ректорат", "Room 233, Rectorate", "ling", "Два часа през седмица.", "Two hours, every other week."),
    s(4, "08:00", "12:00", "Втори език – френски, I", "Second language – French, I", f.ex, "Гл. ас. д-р Марина Полякова", "Chief Asst. Prof. Dr Marina Polyakova", "Зала 233, Ректорат", "Room 233, Rectorate", "fr"),
  ],
  2: [
    s(0, "10:00", "12:00", "Втори чужд език: френски – практическа морфология", "Second foreign language: French – practical morphology", f.lec, "Доц. д-р Георги Жечев", "Assoc. Prof. Dr Gueorgui Jetchev", "Зала 286, Ректорат", "Room 286, Rectorate", "fr"),
    s(0, "12:15", "14:00", "Езикова генеалогия и типология – африкански езици", "Language genealogy and typology – African languages", f.lec, "Доц. д-р Георги Жечев", "Assoc. Prof. Dr Gueorgui Jetchev", "Зала 286, Ректорат", "Room 286, Rectorate", "ling"),
    s(0, "16:00", "20:00", "Португалски език – I част", "Portuguese, part I", f.ex, "Гл. ас. д-р Соня Боянова", "Chief Asst. Prof. Dr Sonya Boyanova", "Зала 224, Ректорат", "Room 224, Rectorate", "pt", "Заедно с групите по втори език португалски във факултета.", "Together with the faculty’s Portuguese second-language groups."),
    s(1, "10:00", "13:00", "Аспекти на изучаването на Африка, II част", "Aspects of the study of Africa, part II", f.lec, "Проф. д-р Александър Николов", "Prof. Dr Alexander Nikolov", "Зала 286, Ректорат", "Room 286, Rectorate", "af"),
    s(1, "16:00", "18:00", "Африканска митология", "African mythology", f.lec, "Проф. д-р Светлана Стойчева Андерсон", "Prof. Dr Svetlana Stoycheva Anderson", "Зала 233, Ректорат", "Room 233, Rectorate", "myth"),
    s(2, "12:15", "15:00", "Контакти между езици", "Language contact", f.both, "Гл. ас. д-р Ивайло Буров", "Chief Asst. Prof. Dr Ivaylo Burov", "Зала 174, Ректорат", "Room 174, Rectorate", "ling"),
    s(3, "12:00", "16:00", "Английски език – практическа граматика", "English – practical grammar", f.both, "Проф. д-р Нели Тинчева", "Prof. Dr Nelly Tincheva", "Зала 286, Ректорат", "Room 286, Rectorate", "en"),
    s(3, "16:00", "18:30", "Междукултурна комуникация", "Intercultural communication", f.both, "Проф. д-р Мадлен Данова", "Prof. Dr Madeleine Danova", "Зала 243, Ректорат", "Room 243, Rectorate", "af"),
    s(4, "10:00", "14:00", "Втори чужд език: френски – практическа морфология", "Second foreign language: French – practical morphology", f.ex, "Гл. ас. д-р Петър Рогалски", "Chief Asst. Prof. Dr Petar Rogalski", "Зала 168, Ректорат", "Room 168, Rectorate", "fr"),
  ],
  3: [
    s(0, "08:00", "12:00", "Четвърти чужд език – суахили, IV част", "Fourth foreign language – Swahili, part IV", f.ex, "Д-р Александър Елизариев", "Dr Aleksandar Elizarev", "Зала 233, Ректорат", "Room 233, Rectorate", "sw"),
    s(0, "12:00", "14:00", "Увод в португалоезичните африкански литератури", "Introduction to Portuguese-language African literatures", f.lec, "Гл. ас. д-р Илина Чалъкова", "Chief Asst. Prof. Dr Ilina Chalakova", "Зала 168, Ректорат", "Room 168, Rectorate", "lit"),
    s(0, "14:00", "17:00", "Постколониални литератури", "Postcolonial literatures", f.lec, "Доц. д-р Александра Главанова", "Assoc. Prof. Dr Alexandra Glavanova", "Зала 286, Ректорат", "Room 286, Rectorate", "lit"),
    s(1, "08:00", "10:00", "Английски език – практически синтаксис", "English – practical syntax", f.lec, "Доц. д-р Цветомира Венкова", "Assoc. Prof. Dr Tsvetomira Venkova", "Зала 286, Ректорат", "Room 286, Rectorate", "en"),
    s(1, "10:00", "14:00", "Втори език – португалски: практически синтаксис", "Second language – Portuguese: practical syntax", f.both, "Доц. д-р Донка Мангачева", "Assoc. Prof. Dr Donka Mangacheva", "125А, Ректорат", "125A, Rectorate", "pt", "Успоредна група.", "Parallel group."),
    s(1, "12:00", "14:00", "Втори език – френски: практически синтаксис", "Second language – French: practical syntax", f.lec, "Доц. д-р Жана Кръстева", "Assoc. Prof. Dr Zhana Krasteva", "Зала 168, Ректорат", "Room 168, Rectorate", "fr", "Успоредна група.", "Parallel group."),
    s(1, "14:00", "17:00", "Религии и религиозни общности в Африка, II част", "Religions and religious communities in Africa, part II", f.lec, "Доц. д-р Галина Соколова", "Assoc. Prof. Dr Galina Sokolova", "Онлайн / Зала 286, Ректорат", "Online / Room 286, Rectorate", "af", "Онлайн или в зала 286.", "Online or in room 286."),
    s(2, "08:00", "12:00", "Четвърти чужд език – суахили, IV част", "Fourth foreign language – Swahili, part IV", f.ex, "Д-р Александър Елизариев", "Dr Aleksandar Elizarev", "Зала 286, Ректорат", "Room 286, Rectorate", "sw"),
    s(2, "12:00", "14:00", "Английски език – практически синтаксис", "English – practical syntax", f.ex1, "Гл. ас. д-р Пенка Христова", "Chief Asst. Prof. Dr Penka Hristova", "Зала 286, Ректорат", "Room 286, Rectorate", "en"),
    s(2, "15:00", "18:00", "Аспекти на изучаването на Африка, IV част", "Aspects of the study of Africa, part IV", f.lec, "Гл. ас. д-р Калоян Цветков", "Chief Asst. Prof. Dr Kaloyan Tsvetkov", "Зала 286, Ректорат", "Room 286, Rectorate", "af", "Екосистеми, опазване на околната среда и регионални политики в Африка.", "Ecosystems, environmental protection and regional policies in Africa."),
    s(3, "08:00", "12:00", "Четвърти чужд език – суахили, IV част", "Fourth foreign language – Swahili, part IV", f.teach, "проф. дпс Соня Карабельова", "Prof. DSc Sonya Karabelova", "Зала 65, Ректорат", "Room 65, Rectorate", "teach", "Профил учител. Технология.", "Teacher track. Technology."),
    s(3, "12:00", "14:00", "Увод във френскоезичните африкански литератури", "Introduction to French-language African literatures", f.lec, "Гл. ас. д-р Стилияна Петкова", "Chief Asst. Prof. Dr Stiliyana Petkova", "Зала 168, Ректорат", "Room 168, Rectorate", "lit"),
    s(3, "14:00", "16:00", "Английски език: увод в англоезичните африкански литератури", "English: introduction to English-language African literatures", f.lec, "Гл. ас. д-р Марина Полякова", "Chief Asst. Prof. Dr Marina Polyakova", "Зала Френска библиотека, Ректорат", "French Library, Rectorate", "lit"),
    s(3, "16:00", "18:00", "Африканско изкуство", "African art", f.lec, "Изсл. Деян Петров", "Researcher Deyan Petrov", "Зала Творческо ателие и Зала 233, Ректорат", "Creative studio and Room 233, Rectorate", "myth", "Двете зали са в един час.", "Both rooms are one class."),
  ],
  4: [
    s(2, "08:00", "12:00", "Английски език: превод на художествени текстове", "English: translation of literary texts", f.ex, "Гл. ас. д-р Александър Костов", "Chief Asst. Prof. Dr Alexander Kostov", "Зала 536, Африканско-карибски културен център, Блок I", "Room 536, African-Caribbean Cultural Centre, Block I", "en", "Модул „Англофонска Африка“.", "Anglophone Africa module."),
    s(2, "14:00", "17:00", "Диалогът Африка – Азия", "The Africa–Asia dialogue", f.lec, "Д-р Александър Елизариев", "Dr Aleksandar Elizarev", "Зала 533, Блок I", "Room 533, Block I", "af"),
    s(3, "08:30", "12:00", "Четвърти чужд език – суахили, IV част", "Fourth foreign language – Swahili, part IV", f.ex, "Д-р Александър Елизариев", "Dr Aleksandar Elizarev", "Зала 286, Ректорат", "Room 286, Rectorate", "sw"),
    s(3, "12:00", "14:00", "Литератури на Западна Африка: Гана, Нигерия, Либерия, Гамбия", "Literatures of West Africa: Ghana, Nigeria, Liberia, Gambia", f.lec, "Гл. ас. д-р Марина Полякова", "Chief Asst. Prof. Dr Marina Polyakova", "Зала Френска библиотека, Ректорат", "French Library, Rectorate", "lit", "Историческо и съвременно развитие на африканските литератури.", "Historical and contemporary development of African literatures."),
    s(3, "16:00", "19:00", "Трети чужд език: френски, V част", "Third foreign language: French, part V", f.ex, "Гл. ас. д-р Марина Полякова", "Chief Asst. Prof. Dr Marina Polyakova", "Зала 286, Ректорат", "Room 286, Rectorate", "fr"),
    s(4, "08:30", "12:00", "Четвърти чужд език – суахили, IV част", "Fourth foreign language – Swahili, part IV", f.ex, "Д-р Александър Елизариев", "Dr Aleksandar Elizarev", "Зала 286, Ректорат", "Room 286, Rectorate", "sw"),
    s(4, "12:15", "14:00", "Аспекти на изучаването на Африка, VI част", "Aspects of the study of Africa, part VI", f.lec, "Доц. д-р Едуард Маринов", "Assoc. Prof. Dr Eduard Marinov", "Зала 286, Ректорат", "Room 286, Rectorate", "af", "Икономическо развитие на Африка.", "Economic development of Africa."),
    s(4, "14:00", "16:00", "Регионална икономика на англофонска и франкофонска Африка", "Regional economy of Anglophone and Francophone Africa", f.lec, "Доц. д-р Едуард Маринов", "Assoc. Prof. Dr Eduard Marinov", "Зала 286, Ректорат", "Room 286, Rectorate", "af", "Двете регионални икономики са в един и същ час.", "The two regional economies are one and the same class."),
  ],
};

function s(day, start, end, bg, en, form, teacherBg, teacherEn, roomBg, roomEn, kind, noteBg, noteEn) {
  const [fr, de] = courseLD(en);
  const noted = noteEn ? noteLD(noteEn) : null;
  return {
    day, start, end, kind,
    course: { bg, en, fr, de },
    form: { ...form, ...formLD(form.bg) },
    teacher: {
      bg: teacherBg,
      en: teacherEn,
      fr: teacherLD(teacherEn, "fr"),
      de: teacherLD(teacherEn, "de"),
    },
    room: { bg: roomBg, en: roomEn, fr: roomLD(roomEn, "fr"), de: roomLD(roomEn, "de") },
    note: noteBg ? { bg: noteBg, en: noteEn, fr: noted[0], de: noted[1] } : null,
  };
}

export const KINDS = {
  fr: { bg: "Френски", en: "French", swatch: "bg-moss" },
  en: { bg: "Английски", en: "English", swatch: "bg-lagoon" },
  pt: { bg: "Португалски", en: "Portuguese", swatch: "bg-gold" },
  sw: { bg: "Суахили", en: "Swahili", swatch: "bg-swahili" },
  ling: { bg: "Езикознание", en: "Linguistics", swatch: "bg-forest-2" },
  lit: { bg: "Литератури", en: "Literatures", swatch: "bg-wine" },
  myth: { bg: "Митология и изкуство", en: "Mythology and art", swatch: "bg-clay" },
  af: { bg: "Африкански изследвания", en: "African studies", swatch: "bg-band" },
  teach: { bg: "Профил учител", en: "Teacher track", swatch: "bg-teach" },
};

export const COPY = {
  bg: {
    langName: "Български",
    otherLang: "EN",
    skip: "Към съдържанието",
    uni: "Софийски университет „Св. Климент Охридски“",
    faculty: "Факултет по класически и нови филологии",
    dept: "Катедра „Африканистика и Индо-тихоокеански изследвания“",
    brand: "Африканистика",
    brandEn: "African Studies",
    menu: "Меню",
    close: "Затвори",
    nav: [
      ["/", "Начало"],
      ["/programa", "Програма"],
      ["/plan", "План"],
      ["/razpis", "Разписание"],
      ["/rektorat", "Ректорат"],
      ["/ekip", "Екип"],
      ["/priem", "Прием"],
      ["/kontakt", "Контакт"],
    ],
    more: [
      ["/kariera", "Реализация"],
      ["/mosaic", "African Mosaic"],
    ],
    disclaimer: "Този сайт представя само бакалавърската програма „Африканистика“ към ФКНФ. Прием, такси и учебни планове се определят от Софийския университет — винаги сверявайте с официалните страници.",
    separate: "Програмите за Европейския съюз са друг сайт",
    separateHref: "https://euei.clgeu.africanstudies.eu/",
    address: "София 1504, бул. „Цар Освободител“ 15",
    email: "african.studies@fcml.uni-sofia.bg",
    homeKicker: "Бакалавър · ФКНФ · от 2017/2018",
    homeTitle: "Африканистика",
    homeLead: "Единствената бакалавърска програма от този тип в България: пълен филологически цикъл с английски като първи език и френски или португалски като втори, заедно с африкански езици, литератури и общества.",
    free: "Без такса за български и европейски граждани",
    freeBody: "За студентите, за които е предназначена — български граждани и граждани на ЕС — програмата е безплатна, както е посочено от нея. Таксите за кандидати извън ЕС се публикуват от Софийския университет.",
    facts: [
      ["Степен", "Бакалавър"],
      ["Срок", "8 семестъра"],
      ["Език", "Английски"],
      ["Град", "София"],
    ],
    whoTitle: "За кого е",
    whoBody: "За студенти, които искат сериозно филологическо образование и обосновано разбиране за езиковото, литературното, културното, историческото и социално-икономическото многообразие на Африка. Обучението е във ФКНФ, катедра „Африканистика и Индо-тихоокеански изследвания“.",
    strandsTitle: "Три посоки",
    strands: [
      ["01", "Езици", "Английски до B2–C1; френски или португалски като втори език; един или два африкански езика — суахили, малагашки, африканс. Арабски и хинди са сред избираемите."],
      ["02", "Литератури и култури", "Ядрото през първите пет семестъра е на английски. От шести семестър избирате англофонска, франкофонска или лузофонска Африка. Модулните курсове са на езика на направлението."],
      ["03", "Общества", "История, икономика, политика и култура на африканските държави, превод, социолингвистика и по желание педагогически модул за учителска квалификация."],
    ],
    cities: "Лагос · Найроби · Дакар · Мапуто · Акра · Адис Абеба · Луанда · Кейптаун · Абиджан · Дар ес Салам · Антананариво",
    citiesNote: "Градове и езици — не клишета.",
    nowTitle: "Този семестър",
    nowBody: "Зимен семестър 2026–2027. Седмичното разписание е за I, II, III и IV курс. Планът на първия етаж на Ректората е на отделна страница — знакът „Вие сте тук“ е ориентир на чертежа, не кабинет на програмата.",
    ctaSchedule: "Разписание по курсове",
    ctaMap: "План на Ректората",
    notEu: "Този адрес е само за Африканистика. Степените „Европейски съюз и европейска интеграция“ и „Културни връзки и геополитика на Европейския съюз“ не се публикуват тук.",
  },
  en: {
    langName: "English",
    otherLang: "БГ",
    skip: "Skip to content",
    uni: "Sofia University St. Kliment Ohridski",
    faculty: "Faculty of Classical and Modern Philology",
    dept: "Department of African and Indo-Pacific Studies",
    brand: "African Studies",
    brandEn: "Африканистика",
    menu: "Menu",
    close: "Close",
    nav: [
      ["/", "Home"],
      ["/programa", "Programme"],
      ["/plan", "Curriculum"],
      ["/razpis", "Timetable"],
      ["/rektorat", "Rectorate"],
      ["/ekip", "Team"],
      ["/priem", "Apply"],
      ["/kontakt", "Contact"],
    ],
    more: [
      ["/kariera", "Careers"],
      ["/mosaic", "African Mosaic"],
    ],
    disclaimer: "This site presents only the BA in African Studies at FKNF. Admissions, fees and curricula are set by Sofia University — always check the official pages.",
    separate: "The European Union programmes are a different website",
    separateHref: "https://euei.clgeu.africanstudies.eu/en/",
    address: "15 Tsar Osvoboditel Blvd, Sofia 1504",
    email: "african.studies@fcml.uni-sofia.bg",
    homeKicker: "Bachelor · FKNF · since 2017/2018",
    homeTitle: "African Studies",
    homeLead: "The only bachelor’s degree of its kind in Bulgaria: a full philological cycle with English as the first language and French or Portuguese as the second, together with African languages, literatures and societies.",
    free: "Tuition-free for Bulgarian and EU citizens",
    freeBody: "For the students it is intended for — Bulgarian and EU citizens — the BA is tuition-free, as stated by the programme. Fees for applicants from outside the EU are published by Sofia University.",
    facts: [
      ["Degree", "Bachelor"],
      ["Length", "8 semesters"],
      ["Language", "English"],
      ["City", "Sofia"],
    ],
    whoTitle: "Who it is for",
    whoBody: "For students who want a serious philological education and a grounded understanding of the linguistic, literary, cultural, historical and socio-economic diversity of Africa. Teaching is at FKNF, in the Department of African and Indo-Pacific Studies.",
    strandsTitle: "Three strands",
    strands: [
      ["01", "Languages", "English to CEFR B2–C1; French or Portuguese as the second language; one or two African languages — Swahili, Malagasy, Afrikaans. Arabic and Hindi are among the electives."],
      ["02", "Literatures and cultures", "Core courses in the first five semesters are taught in English. From the sixth semester you specialise in Anglophone, Francophone or Lusophone Africa. Module courses are in the language of the track."],
      ["03", "Societies", "History, economy, politics and culture of African states, plus translation, sociolinguistics, and an optional pedagogical module for a teaching qualification."],
    ],
    cities: "Lagos · Nairobi · Dakar · Maputo · Accra · Addis Ababa · Luanda · Cape Town · Abidjan · Dar es Salaam · Antananarivo",
    citiesNote: "Cities and languages — not clichés.",
    nowTitle: "This semester",
    nowBody: "Winter semester 2026–2027. The weekly timetable covers years 1, 2, 3 and 4. The first-floor plan of the Rectorate is on its own page — “You are here” is a wayfinding mark on the drawing, not the programme office.",
    ctaSchedule: "Timetable by year",
    ctaMap: "Rectorate plan",
    notEu: "This address is only for African Studies. The degrees in European Union and European Integration, and in Cultural Liaisons and Geopolitics of the European Union, are not published here.",
  },
};

export const PAGES = {
  programa: {
    bg: {
      kicker: "Специалността",
      title: "Филология, насочена към Африка",
      lead: "Африканистика е бакалавърска програма на ФКНФ — не отделен институт и не генерален курс по area studies, а филологическо обучение с езици, литератури, култури и общества на континента.",
      blocks: [
        ["Какво е това", "Обучението е ориентирано към широка общообразователна подготовка по базисни лингвистични, литературоведски и културологични дисциплини — и към специализирана работа с англофонски, франкофонски и лузофонски литератури, лингвистика и превод. Това е единствената програма в България с пълен цикъл по английски като първи чужд език и френски или португалски като втори, съчетан с африкански езици. Започна през учебната 2017/2018 година."],
        ["Как е организирана", "Осем семестъра; дисциплините са задължителни, избираеми и факултативни. Уводните курсове по езикознание и литературознание задават филологическата рамка. Ядрото през първите пет семестъра се преподава на английски. Три модула — Англофонска, Франкофонска и Лузофонска Африка — се въвеждат от шести семестър и продължават до осми. Модулните курсове са на съответния език."],
        ["Квалификация", "Бакалавърска степен се получава след успешно полагане на държавен изпит. Професионалната квалификация е филолог африканист; при избран педагогически модул — и учител по английски и френски, или по английски и португалски. Езиковата компетентност, към която е насочена програмата, е B2–C1 по Общата европейска езикова рамка."],
        ["Мобилност", "Студентите могат да участват в обмен с африкански университети, с които Софийският университет има споразумения. Партньори на програмата, посочени от нея, са Phoenix Perpeticum, Квадрат 500 и Дипломатическият институт."],
      ],
    },
    en: {
      kicker: "The degree",
      title: "A philology aimed at Africa",
      lead: "African Studies is a bachelor’s programme at FKNF — not a separate institute and not a general area-studies course, but a philological education in the languages, literatures, cultures and societies of the continent.",
      blocks: [
        ["What it is", "The degree combines a broad foundation in linguistics, literary studies and cultural studies with specialised work on Anglophone, Francophone and Lusophone literatures, linguistics and translation. It is the only programme in Bulgaria with a full cycle of English as the first foreign language and French or Portuguese as the second, together with African languages. It began in the 2017/2018 academic year."],
        ["How it is organised", "Eight semesters; courses are compulsory, elective and optional. Introductory linguistics and literary theory set the philological frame. The core of the first five semesters is taught in English. Three modules — Anglophone, Francophone and Lusophone Africa — run from the sixth semester through the eighth. Module courses are in the language of the track."],
        ["Qualification", "The bachelor’s degree is awarded after a successful state examination. The professional qualification is philologist in African studies; with the pedagogical module, also teacher of English and French, or of English and Portuguese. The language competence the programme aims at is CEFR B2–C1."],
        ["Mobility", "Students may join exchanges with African universities that have agreements with Sofia University. Partners named by the programme are Phoenix Perpeticum, Kvadrat 500 and the Diplomatic Institute."],
      ],
    },
  },
  plan: {
    bg: {
      kicker: "Учебен план",
      title: "Осем семестъра, после три модула",
      lead: "Тук не преписваме всеки ред от випусковия план — той се обновява по прием. По-долу е структурата, която университетът описва.",
      phases: [
        ["1–2", "Начало на филологията", "Езици, уводни дисциплини, академичен английски."],
        ["3–5", "Ядро", "Лингвистика, литератури, общества, превод — на английски."],
        ["6–8", "Модул", "Англофонска, франкофонска или лузофонска Африка."],
      ],
      core: "Задължителните и избираемите дисциплини изграждат филологическата основа. Уводните курсове по езикознание и литературознание са общофилологически. Ядрото през тези пет семестъра се преподава на английски. Успоредно вървят английски като първи език и френски или португалски като втори.",
      modulesTitle: "Направления след пети семестър",
      modules: [
        ["EN", "Англофонска Африка", "Литератури, култури и общества на англоезична Африка. Модулните курсове са на английски."],
        ["FR", "Франкофонска Африка", "Франкофонски литератури и култури. Модулните курсове са на френски."],
        ["PT", "Лузофонска Африка", "Португалоезична Африка. Модулните курсове са на португалски."],
      ],
      teachTitle: "Педагогически модул",
      teach: "Факултативен модул за квалификация учител по английски и френски или по английски и португалски. Не е задължителен.",
      stateTitle: "Държавен изпит",
      state: "Бакалавърската степен се получава след успешно полагане на държавен изпит. Това е условието за дипломата филолог африканист — и за учителската квалификация, ако модулът е избран.",
      themesTitle: "Теми, които се преподават",
      themesNote: "Това не е пълен учебен план, а области, свързани с екипа. Точните дисциплини, часове и кредити са във випусковите планове на СУ.",
      themes: [
        "Академичен английски, практическа синтактика, английски език",
        "Увод в англофонските африкански литератури",
        "Източноафрикански литератури",
        "Франкофонски африкански литератури",
        "Превод от английски и от френски",
        "Социолингвистика на Африка, езикова политика, английският като лингва франка",
        "Аспекти на африканистиката",
        "Суахили I–IV",
        "Диалог Африка–Азия",
        "Психология на миграцията (Африка–Европа)",
        "Антропология, митология, изкуство и култура",
        "Християнството в съвременна Африка",
      ],
    },
    en: {
      kicker: "Curriculum",
      title: "Eight semesters, then three modules",
      lead: "This page does not copy every line of the cohort plan — that plan is updated by year of admission. Below is the structure the university describes.",
      phases: [
        ["1–2", "Starting philology", "Languages, introductory disciplines, academic English."],
        ["3–5", "Core", "Linguistics, literatures, societies, translation — in English."],
        ["6–8", "Module", "Anglophone, Francophone or Lusophone Africa."],
      ],
      core: "Compulsory and elective courses build the philological foundation. Introductory linguistics and literary theory are shared across philology. The core of these five semesters is taught in English, alongside English as the first language and French or Portuguese as the second.",
      modulesTitle: "Tracks after semester five",
      modules: [
        ["EN", "Anglophone Africa", "Literatures, cultures and societies of English-speaking Africa. Module courses are in English."],
        ["FR", "Francophone Africa", "Francophone literatures and cultures. Module courses are in French."],
        ["PT", "Lusophone Africa", "Portuguese-speaking Africa. Module courses are in Portuguese."],
      ],
      teachTitle: "Pedagogical module",
      teach: "An optional module for a teaching qualification in English and French, or English and Portuguese. It is not compulsory.",
      stateTitle: "State examination",
      state: "The bachelor’s degree is awarded after a successful state examination. That is the condition for the diploma of philologist in African studies — and for the teaching qualification, if the module was chosen.",
      themesTitle: "Themes taught in the programme",
      themesNote: "This is not a full curriculum. It lists fields connected with the African Studies team. Exact courses, hours and credits are in the Sofia University cohort plans.",
      themes: [
        "Academic English, practical syntax, English language",
        "Introduction to Anglophone African literatures",
        "East African literatures",
        "Francophone African literatures",
        "Translation from English and from French",
        "Sociolinguistics of Africa, language policy, English as a lingua franca",
        "Aspects of African studies",
        "Swahili I–IV",
        "Africa–Asia dialogue",
        "Psychology of migration (Africa–Europe)",
        "Anthropology, mythology, art and culture",
        "Christianity in contemporary Africa",
      ],
    },
  },
};

export const TEAM = [
  { initials: "ГРС", name: { bg: "Доц. д-р Галина Русева-Соколова", en: "Assoc. Prof. Dr Galina Ruseva-Sokolova" }, role: { bg: "Ръководител на катедрата", en: "Head of department" }, bio: { bg: "Специалист по предмодерна литература на Северна Индия. Научните ѝ интереси обхващат културните контакти между Европа и Индия, индуизма в съпоставителна перспектива и религиозната антропология.", en: "A specialist in premodern North Indian literature and culture. Her research includes India–Europe cross-cultural studies, Hinduism in a comparative perspective, and religious anthropology." }, href: "https://authors.uni-sofia.bg/AuthorPublications.aspx?id=95857e95-1027-4b51-8ee8-089321626f72", hours: { bg: "Приемно време: сряда, 12:00–14:00, онлайн.", en: "Office hours: Wednesday, 12:00–14:00, online." }, mail: "g.sokolova@uni-sofia.bg" },
  { initials: "ГЖ", name: { bg: "Доц. д-р Георги Жечев", en: "Assoc. Prof. Dr Gueorgui Jetchev" }, role: { bg: "Преподавател", en: "Faculty" }, bio: { bg: "Фонетика и фонология на френския език; романски и славянски фонологични процеси; многоезичие и франкофония в Югоизточна Европа. Ръководи магистърската програма „Франкофония, многоезичие и интеркултурна медиация“.", en: "French phonetics and phonology; Romance and Slavic phonological processes; multilingualism and francophonie in South-East Europe. Directs the master’s programme Francophonie, Plurilingualism and Intercultural Mediation." }, href: "https://authors.uni-sofia.bg/AuthorPublications.aspx?id=2c251f98-76f9-48cf-aec8-9daec58d1205" },
  { initials: "ПХ", name: { bg: "Гл. ас. д-р Пенка Христова", en: "Chief Asst. Prof. Dr Penka Hristova" }, role: { bg: "Преподавател", en: "Faculty" }, bio: { bg: "Социолингвистика на Африка; аспекти на африканистиката; практическа синтактика; академичен английски; езикова политика; английският като лингва франка в Африка; християнството в съвременна Африка.", en: "Sociolinguistics of Africa; aspects of African studies; practical syntax; academic English; language policy; English as a lingua franca in Africa; Christianity in contemporary Africa." }, href: "https://authors.uni-sofia.bg/AuthorPublications.aspx?id=4357654f-dd25-43e9-99f9-fc22b7685439" },
  { initials: "МП", name: { bg: "Гл. ас. д-р Марина Полякова", en: "Chief Asst. Prof. Dr Marina Polyakova" }, role: { bg: "Преподавател", en: "Faculty" }, bio: { bg: "Английски, френски, литература, медии, комуникации и социални изследвания на пола. Афро-диаспорни, постколониални и деколониални изследвания; модернизъм и постмодернизъм; автобиография; етнически литератури и женско писане.", en: "English, French, literature, media, communications and gender studies. Afro-diasporic, postcolonial and decolonial studies; modernism and postmodernism; autobiography; ethnic literatures and women’s writing." } },
  { initials: "СП", name: { bg: "Гл. ас. д-р Стилияна Петкова", en: "Chief Asst. Prof. Dr Stiliyana Petkova" }, role: { bg: "Преподавател", en: "Faculty" }, bio: { bg: "Франкофонски африкански литератури; превод от френски.", en: "Francophone African literatures; translation from French." }, href: "https://authors.uni-sofia.bg/AuthorPublications.aspx?id=67fc1f76-ff41-4059-9590-608a0ee31bd3" },
  { initials: "ММ", name: { bg: "Гл. ас. д-р Мартин Миланов", en: "Chief Asst. Prof. Dr Martin Milanov" }, role: { bg: "Преподавател", en: "Faculty" }, bio: { bg: "Външна политика на ЕС и Китай; международни организации и многостранна дипломация; геополитика в XXI век.", en: "EU and China foreign policy; international organisations and multilateral diplomacy; geopolitics in the 21st century." } },
  { initials: "АЕ", name: { bg: "Д-р Александър Елизариев", en: "Dr Aleksandar Elizarev" }, role: { bg: "Изследовател", en: "Researcher" }, bio: { bg: "Суахили I–IV, основен акцент за тази програма; диалог Африка–Азия. В по-широк катедрен контекст работи и върху хинди, пенджаби и сикхизъм.", en: "Swahili I–IV, the primary teaching for this BA; the Africa–Asia dialogue. In the wider department he also works on Hindi, Punjabi and Sikhism." } },
  { initials: "ДГ", name: { bg: "Дениза Георгиева", en: "Deniza Georgieva" }, role: { bg: "Изследовател", en: "Researcher" }, bio: { bg: "Психология на миграцията (Африка–Европа).", en: "Psychology of migration (Africa–Europe)." } },
  { initials: "ДП", name: { bg: "Деян Петров", en: "Deyan Petrov" }, role: { bg: "Изследовател", en: "Researcher" }, bio: { bg: "Музикант, социален изследовател и преподавател. Антропология на африканските изкуства, митологии и култури. Работи върху социокултурното значение на африканските ритми като форма на език.", en: "Musician, social researcher and lecturer. Anthropology of African arts, mythologies and cultures, with a focus on African rhythms as a form of language." } },
  { initials: "ДХ", name: { bg: "Десислава Христова", en: "Dessislava Hristova" }, role: { bg: "Инспектор учебна дейност", en: "Academic inspector" }, bio: { bg: "Учебна администрация на програмата.", en: "Academic administration of the programme." } },
];

export const COUNCIL = [
  { bg: "Доц. д-р Георги Жечев", en: "Assoc. Prof. Dr Gueorgui Jetchev" },
  { bg: "Проф. д-р Мадлен Данова, заместник-ректор", en: "Prof. Dr Madeleine Danova, vice-rector" },
  { bg: "Проф. д-р Яна Андреева", en: "Prof. Dr Yana Andreeva" },
];

export const LINKS = {
  su: "https://www.uni-sofia.bg",
  fcml: "https://fcml.uni-sofia.bg/",
  dept: "https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/fakultet_po_klasicheski_i_novi_filologii/katedri/afrikanistika_i_indo_tihookeanski_izsledvaniya",
  deptEn: "https://www.uni-sofia.bg/index.php/eng/the_university/faculties/faculty_of_classical_and_modern_philology/structure/departments/african_and_indo_pacific_studies",
  degree: "https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/fakultet_po_klasicheski_i_novi_filologii/specialnosti/bakalav_rski_programi/fakultet_po_klasicheski_i_novi_filologii/afrikanistika",
  degreeEn: "https://www.uni-sofia.bg/index.php/eng/the_university/faculties/faculty_of_classical_and_modern_philology/degree_programmes/bachelor_s_degree_programmes/faculty_of_classical_and_modern_philology/african_studies_in_english",
  plans: "https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/fakultet_po_klasicheski_i_novi_filologii/uchebni_planove/afrikanistika",
  facultyList: "https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/fakultet_po_klasicheski_i_novi_filologii/katedri/afrikanistika_i_indo_tihookeanski_izsledvaniya/prepodavateli",
  fees: "https://www.uni-sofia.bg/index.php/eng/content/download/336010/2164479/version/2/file/Fees+2025-2026+English+RD+19-550-24.09.25.pdf",
  admitBg: "https://www.uni-sofia.bg/index.php/bul/priem/priem_za_obrazovatelno_kvalifikacionna_stepen_bakalav_r_i_magist_r_sled_sredno_obrazovanie",
  ranking: "https://www.uni-sofia.bg/index.php/bul/priem/priem_za_obrazovatelno_kvalifikacionna_stepen_bakalav_r_i_magist_r_sled_sredno_obrazovanie/kandidatstudentska_kampaniya_2026/baloobrazuvane",
  bachelorsEn: "https://www.uni-sofia.bg/index.php/eng/admission/international_students/bachelor_s_degree_programs_in_english",
  international: "https://www.uni-sofia.bg/index.php/eng/admission/international_students",
  nonEu: "https://www.uni-sofia.bg/index.php/eng/admission/international_students/application_procedure/applicants_from_non_eu_member_countries/application_and_enrollment",
  mosaicNews: "https://www.uni-sofia.bg/index.php/bul/universitet_t/fakulteti/fakultet_po_klasicheski_i_novi_filologii/novini/p_rvi_broj_na_spisanie_african_mosaic",
  sister: "https://seas.africanstudies.eu/",
};

export const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/share/1CTLe3jWhG/?mibextid=wwXIfr" },
  { label: "YouTube", href: "https://www.youtube.com/@africanstudiesSU" },
  { label: "Instagram", href: "https://www.instagram.com/africastudiessu1324" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/144598947/" },
  { label: "Wikipedia", href: "https://bg.wikipedia.org/wiki/%D0%90%D1%84%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0" },
];

export function pick(lang, pair) {
  if (!pair) return "";
  return pair[lang] || pair.en || pair.bg || "";
}

extendContent({ COPY, PAGES, TEAM, COUNCIL, KINDS });

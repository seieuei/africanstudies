# Африканистика · africanstudies.eu

Static site for the BA in African Studies at Sofia University, Faculty of Classical and Modern Philology.

This repository is **only** that programme. It is not the site of the European Union degrees.

## Two websites

| Site | Address | Repository |
| --- | --- | --- |
| African Studies | https://africanstudies.eu | this repository |
| European Union and European Integration, and Cultural Liaisons and Geopolitics of the EU | https://euei.clgeu.africanstudies.eu | [seieuei/euei-clgeu](https://github.com/seieuei/euei-clgeu) |

Upload the files themselves into that document root. Do not put them in an extra subfolder.

Before you upload, remove the EU prospectus files if they were copied here by mistake: `data.js`, `site.js`, `site.css` at the root (the EU one), `ba.html`, `ma.html`, `bachelor.html`, `master.html`, `lecturers.html`, `timetable.html`, `map.html`, `apply.html`, `official.html`, and the folders `en/`, `bg/`, `fr/`, `tr/`. Also replace the old African Studies folders (`programa/`, `priem/`, `ekip/`, `kontakt/`, `kariera/`, `mosaic/`, `ucheben-plan/`) so the new pages are the ones that open. This copy uses `programa.html`, `priem.html`, and the same names with `.html`. The `.htaccess` file sends the old addresses to the new pages.

Upload `euei-clgeu` into the document root of the subdomain only.

Do not copy one folder into the other. If both domains share one folder, the EU pages replace the African Studies homepage. In SiteGround, give the subdomain its own document root.

## What is in this copy

- Weekly timetable, winter semester 2026–2027, years I–IV, from the schedule of 2 October 2026.
- First-floor plan of the Rectorate (`maps/rectorate-first-floor.jpg` and the PDF). “You are here” is a wayfinding mark on the drawing, not the programme office.
- Programme, curriculum, team, admissions, careers, African Mosaic, contact.
- Bulgarian, English, French and German, switched in the header. The choice stays in the browser. Shared links can use `?lang=en`, `?lang=fr` or `?lang=de`. `/en`, `/fr` and `/de` on the app preview open the same pages.
- Light and dark mode: sun and moon in the header. The choice stays in the browser.

Plain HTML, CSS and JavaScript. No build step.

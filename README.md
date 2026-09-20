# Iqra Wartaq — landing page & privacy policy

Static site for اقرأ وارتق (Iqra Wartaq) — a Quran memorization app: the
whole mushaf to read offline, recitation streamed or downloaded. Deployed via GitHub Pages, built by `.github/workflows/pages.yml` on
every push to `main`. Deliberately a separate repo from the app's own
(private) source, so this can be public without exposing that code.

Plain HTML/CSS/JS, no build step, no framework. `index.html` is the landing
page, `privacy.html` is the privacy policy both stores link to — both bilingual
(Arabic default, English toggle), with the choice remembered in
`localStorage`.

To preview locally: open `index.html` directly, or serve the folder with
any static server (`python3 -m http.server`).

The screenshots in `assets/screens/` are downscaled from the app repo's
`store/apple/iphone/` set, which is photographed from the running app by
`tool/store_screenshots.sh` there. Retake them there, then copy them here.

**Keep `privacy.html` true.** Both stores review it against what the app
actually does. It was rewritten when recitation moved from the app bundle to
a CDN; any feature that changes what the app sends or stores changes this page
first.

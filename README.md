# Iqra Wartaq — landing page & privacy policy

Static site for اقرأ وارتق (Iqra Wartaq) — an offline Quran memorization
app. Deployed via GitHub Pages, built by `.github/workflows/pages.yml` on
every push to `main`. Deliberately a separate repo from the app's own
(private) source, so this can be public without exposing that code.

Plain HTML/CSS/JS, no build step, no framework. `index.html` is the landing
page, `privacy.html` is the Play Store-linked privacy policy — both bilingual
(Arabic default, English toggle), with the choice remembered in
`localStorage`.

To preview locally: open `index.html` directly, or serve the folder with
any static server (`python3 -m http.server`).

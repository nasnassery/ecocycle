# EcoCycle – Recycling Awareness Website

Web Programming (1501341) – University of Sharjah – Fall 2026/2027
Student:Riaz Nassery U23106778 Muhammad Allsultan U23106004

## Folder structure

```
ecocycle/
├── index.html        Page 1 – Home
├── types.html        Page 2 – Recycling Types
├── calculator.html   Page 3 – Recycling Calculator
├── quiz.html         Page 4 – Recycling Quiz
├── contact.html      Page 5 – Contact Us
├── css/style.css     All styling
├── js/calculator.js  Calculator logic
├── js/quiz.js        Quiz scoring
├── js/contact.js     Form validation
└── images/           Logo and material pictures (SVG)
```

## Proposal vs. what was built

| Proposal item | Where it is |
|---|---|
| 5 connected pages | Same nav menu on all 5 pages |
| Home: intro + importance | `index.html` – hero, 3 "why" cards, tips |
| Types: plastic, paper, metal, e-waste | `types.html` – 4 cards + comparison table |
| Calculator: material + weight | `calculator.html` + `js/calculator.js` |
| Quiz with automatic score | `quiz.html` + `js/quiz.js` |
| Contact form with JS validation | `contact.html` + `js/contact.js` |
| Images / multimedia | SVG images on every page + embedded YouTube video on Home |
| Responsive design | `@media (max-width: 768px)` in `style.css` |
| GitHub Pages | See "Publishing" below |

## CSS topics used (style.css is numbered by section)

CSS variables, box model (margin/padding/box-sizing), Flexbox (header, hero),
Grid (cards, materials), pseudo-classes (`:hover`, `:focus`, `:nth-child`),
transitions/transform, `position: sticky`, table styling, attribute selectors
(`input[type="text"]`), media queries.

## How to explain the JavaScript

**calculator.js**
1. Read the material and weight with `getElementById(...).value`.
2. Validate: material chosen, weight > 0. Show an error and `return` if not.
3. Multiply weight × the saving for that material (stored in an object).
4. Write the result into the page with `innerHTML`.

**quiz.js**
1. `event.preventDefault()` stops the page from reloading.
2. First loop: make sure every question has an answer (`:checked`).
3. Second loop: compare each answer with the `answers` object, add 1 to `score`,
   color the question green (`correct`) or red (`wrong`).
4. Show the score and a message using `if / else if / else`.

**contact.js**
1. Read and `trim()` every field, clear old errors.
2. Check each rule: name ≥ 3 chars, email has `@` and `.`, phone (optional) is
   10 digits, message ≥ 10 chars. Each failure shows its own red message.
3. If `isValid` is still `true`, show a thank-you message and `reset()` the form.

## Publishing on GitHub Pages

1. Create a repository (e.g. `ecocycle`) and upload all files (keep `index.html` in the root).
2. Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `root` → Save.
3. The site appears at `https://<username>.github.io/ecocycle/`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Redesign of the ANPA Costa Rica website — Asociación Nacional Protectora de Animales, the country's
oldest animal welfare NGO (founded 1980). Content is in Spanish (Costa Rican voice: "vos/sumate").

The visual/technical standard lives in [`Documentación/Manual Tecnico Diseño.md`](Documentación/Manual%20Tecnico%20Diseño.md) —
consult it before adding any new screen or component (color tokens, typography scale, a11y checklist).

## Technology: Astro + React islands

Static-first site built with **Astro** (SSG). React is used **only as islands** on the two genuinely
interactive pieces; everything else is static HTML/CSS shipped with zero client JS.

- **React islands (the only client-side JS):** `Counters.tsx` (animated impact counters) and
  `ContactForm.tsx` (footer contact form). If a new piece needs interactivity, add a `.tsx` island and
  mount it with a `client:*` directive — don't reach for JS elsewhere.
- **Styling:** vanilla CSS with design tokens (CSS custom properties). **No Tailwind, no CSS-in-JS.**
- **Content:** news items are Markdown files in a content collection (editable without touching code).

### Commands

```bash
npm install        # install deps
npm run dev        # dev server with HMR → http://localhost:4321
npm run build      # static build to dist/ (also type-checks .astro + content schema)
npm run preview    # serve the built dist/ locally
```

There is no separate lint/test step. `npm run build` is the gate — it validates content frontmatter
against the schema and fails on Astro/TS errors.

## File structure

```
astro.config.mjs             # React integration + site URL (for SEO/OG absolute URLs)
public/                      # static assets served as-is (favicon.svg, future images)
src/
  layouts/Base.astro         # <html lang="es">, <head> SEO (title/description/OG), fonts, global CSS
  components/
    Navbar.astro             # single header; prop `active`; CSS dropdown + <script> mobile toggle
    Footer.astro             # single footer; embeds ContactForm island
    Logo.astro               # brand disc + wordmark, shared by Navbar & Footer
    Hero.astro, ProgramCard.astro, NewsCard.astro, DonationGoal.astro, Allies.astro
    Counters.tsx / .css      # React island — count-up animation
    ContactForm.tsx / .css   # React island — placeholder submit
  content.config.ts          # `noticias` collection schema (Astro content layer)
  content/noticias/*.md      # one file per news item (frontmatter drives the cards)
  data/
    counters.ts              # impact figures [191770, 78858, 56, 46] + icons
    programas.ts             # ANPA Castra / Educa / FOCABA (used by Home cards AND /programas)
    aliados.ts               # partner chips
  pages/
    index.astro              # Home
    programas.astro          # program detail sections with #castra / #educa / #focaba anchors
    donar.astro              # donation placeholder page
  styles/
    tokens.css               # all design tokens as CSS variables
    global.css               # reset, shared utilities, responsive vars (imports tokens.css)
```

## Conventions

- **Design tokens are the source of truth for style.** Never hardcode a brand hex — use the CSS
  variables from `src/styles/tokens.css`. Key ones:

  | Token | Value | Use |
  |---|---|---|
  | `--rojo` | `#d4232b` | Brand, accents, section labels |
  | `--verde` | `#1f8a5b` | **Reserved for the Donar CTA + success states only** (§3.4 of the Manual) |
  | `--tinta` | `#1d1b1a` | Headings/body text |
  | `--crema` | `#faf6f1` | Page background |
  | `--font-head` | `'Archivo'` | Headings, figures, labels |
  | `--font-body` | `'Public Sans'` | Body, nav, UI |

  Green is the **action** color, red is the **brand/narrative** color — do not use green decoratively.

- **Component-scoped CSS**: `.astro` components use a scoped `<style>` block. React islands import a
  co-located `.css` file (e.g. `Counters.css`) — those class names are effectively global, so prefix
  them (`.contador-*`, `.cf-*`) to avoid collisions. Shared utilities (`.contenedor`, `.btn-donar`,
  `.enlace-accion`, `.etiqueta-seccion`) live in `global.css`.

- **Responsive breakpoints** (Manual §5.1): `900px` (nav collapses to hamburger, grids → 1 col, hero H1
  → 40px) and `820px` (footer grid → 1 col).

- **Data vs. content**: structural, rarely-edited lists (programs, allies, counters) are typed TS modules
  in `src/data/`. Editorial content that staff may add/edit (news) is Markdown in `src/content/noticias/`
  — add a file there and it appears on the Home automatically (sorted by `date` desc).

- **SVG icons** are stored as raw markup strings in the `data/*.ts` modules and rendered with Astro's
  `set:html` / React's `dangerouslySetInnerHTML`.

- **Navbar `active` prop**: every page passes it — `<Navbar active="inicio" />` (`"inicio" | "programas"
  | "donar" | ""`). Unlike the old framework, Navbar/Footer are defined **once** and imported everywhere;
  there is no more duplicated markup to keep in sync.

## Placeholders (not yet wired for production)

- **Contact form** (`ContactForm.tsx`): validates + shows success state client-side but does **not** send.
  Wire to a forms service before deploy.
- **Donations** (`donar.astro` and every "Donar" CTA): UI only, no payment gateway yet.
- **Images**: hero/cards use Unsplash URLs as placeholders; allies use monochrome markers. Replace with
  optimized owned assets (WebP/AVIF, explicit `width`/`height`) before deploy (Manual §9, §6.7).

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Redesign of the ANPA Costa Rica website — Asociación Nacional Protectora de Animales, the country's
oldest animal welfare NGO (founded 1980). Content is in Spanish (Costa Rican voice: "vos/sumate").

The visual/technical standard lives in [`Documentación/Manual Tecnico Diseño.md`](Documentación/Manual%20Tecnico%20Diseño.md) —
consult it before adding any new screen or component (color tokens, typography scale, a11y checklist).

## Technology: React 19 + Vite + React Router 7 (SPA)

Single-page app built with **React 19**, bundled by **Vite**, routed with **React Router 7**
(`react-router-dom`, `createBrowserRouter`). Everything is a React component; there are no more
"islands" — the whole UI is client-rendered. `vite build` emits a static `dist/` (SPA).

- **Routing:** `src/router.tsx` declares a persistent `RootLayout` route with five children
  (`/`, `/programas`, `/focaba`, `/comunidad`, `/donar`). Internal navigation uses `<Link>`/`<NavLink>`;
  external links stay `<a>`.
- **SEO per page:** the `<Seo>` component (`src/components/Seo.tsx`) renders `<title>`/`<meta>` that
  React 19 hoists into `<head>`. It resolves **client-side** (SPA), so crawlers without JS see only
  the shell in `index.html`. If server-rendered SEO becomes a requirement, add static prerendering.
- **Styling:** vanilla CSS. Global tokens + utilities in `src/styles/` are imported once in
  `main.tsx`; component/page styles are **CSS Modules** (`*.module.css`). **No Tailwind, no CSS-in-JS.**
- **Content:** news items are Markdown files loaded at build time via `import.meta.glob`
  (`src/content/noticias.ts`), editable without touching code.

### Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server with HMR → http://localhost:5173
npm run build      # tsc -b (typecheck) + vite build → static dist/
npm run preview    # serve the built dist/ locally
npm run typecheck  # type-check only (tsc -b --noEmit)
```

There is no separate lint/test step. `npm run build` is the gate — it type-checks all `.tsx`/`.ts`
and fails on TS errors before bundling.

## File structure

```
index.html                   # <head> base (fonts, favicon, viewport); #root + main.tsx entry
vite.config.ts               # @vitejs/plugin-react
tsconfig.json / .app / .node # project-references TS config (bundler resolution, strict)
public/                      # static assets served as-is (favicon.svg, img/anpa-logo.png)
src/
  main.tsx                   # createRoot + RouterProvider; imports global.css
  router.tsx                 # createBrowserRouter: RootLayout + 5 page routes
  layouts/
    RootLayout.tsx / .module.css  # persistent shell: <Outlet/>, paw-trail (re-animates on route
                                  # change), floating WhatsApp, Chatbot, scroll-to-hash/top
  components/
    Seo.tsx                  # per-page <title>/<meta> via React 19 document metadata
    Navbar.tsx / .module.css # single header; prop `active`; CSS dropdowns; mobile menu via useState
    Footer.tsx / .module.css # single footer; embeds ContactForm
    Logo.tsx / .module.css   # brand disc + wordmark, shared by Navbar & Footer
    Hero, ProgramCard, NewsCard, DonationGoal, Allies  (.tsx / .module.css)
    Counters, Carousel, ContactForm, Chatbot, BusquedaIA, LocationPicker  (.tsx + plain .css)
  content/
    noticias.ts              # loads noticias/*.md (import.meta.glob + frontmatter parser), sorts desc
    noticias/*.md            # one file per news item (frontmatter drives the cards)
  data/
    counters.ts              # impact figures [191770, 78858, 56, 46] + icons
    programas.ts             # ANPA Castra / Educa (used by Home cards AND /programas)
    castra.ts, educa.ts      # content for the /programas tabs
    comunidad.ts             # refugios, mascotas, tablero, coincidencias (/comunidad)
    focaba.ts, donaciones.ts, aliados.ts
  pages/
    Home.tsx / .module.css        # /
    Programas.tsx / .module.css    # tabs #castra / #educa, vet filter, accordions, LocationPicker
    Focaba.tsx / .module.css       # /focaba (static)
    Comunidad.tsx / .module.css    # tabs #adopciones / #busqueda, board filters, BusquedaIA
    Donar.tsx / .module.css        # tabs Donaciones / Merch, recurring-donation switch
  styles/
    tokens.css               # all design tokens as CSS variables
    global.css               # reset, shared utilities, responsive vars (imports tokens.css)
```

## Conventions

- **Design tokens are the source of truth for style.** Never hardcode a brand hex — use the CSS
  variables from `src/styles/tokens.css`. Key ones:

  | Token | Value | Use |
  |---|---|---|
  | `--rojo` | `#c41230` | Brand, accents, section labels |
  | `--verde` | `#1f8a5b` | **Reserved for the Donar CTA + success states only** (§3.4 of the Manual) |
  | `--tinta` | `#1d1b1a` | Headings/body text |
  | `--crema` | `#faf6f1` | Page background |
  | `--font-head` | `'Archivo'` | Headings, figures, labels |
  | `--font-body` | `'Public Sans'` | Body, nav, UI |

  Green is the **action** color, red is the **brand/narrative** color — do not use green decoratively.

- **CSS scoping**: component and page styles live in a co-located `*.module.css` imported as
  `styles` and referenced with `className={styles.x}` (or `styles['con-guion']`). This replaces
  Astro's scoped `<style>` and is **required** because class names like `.hero`, `.seccion`,
  `.cabecera`, `.tab`, `.meta` repeat across pages with different rules. The six interactive widgets
  (`Counters`, `Carousel`, `ContactForm`, `Chatbot`, `BusquedaIA`, `LocationPicker`) keep a plain
  co-located `.css` with **globally-unique prefixed** class names (`contador-`, `carrusel-`, `cf-`,
  `chat-`, `ia-`, `lp-`). Shared utilities (`.contenedor`, `.btn-donar`, `.enlace-accion`,
  `.etiqueta-seccion`) are global in `global.css` and combined with module classes via template
  strings, e.g. `` className={`btn-donar ${styles.metaCta}`} ``.

- **Responsive breakpoints** (Manual §5.1): `900px` (nav collapses to hamburger, grids → 1 col, hero H1
  → 40px) and `820px` (footer grid → 1 col).

- **Data vs. content**: structural, rarely-edited lists (programs, allies, counters, page copy) are
  typed TS modules in `src/data/`. Editorial content that staff may add/edit (news) is Markdown in
  `src/content/noticias/` — add a file there and it appears on the Home automatically (sorted by
  `date` desc). Frontmatter is **flat `clave: valor`** (parsed by a small parser in `noticias.ts`,
  no YAML nesting).

- **SVG icons** are stored as raw markup strings in the `data/*.ts` modules and rendered with React's
  `dangerouslySetInnerHTML`.

- **Tab pages** (`Programas`, `Comunidad`): the active tab is React state synced to the URL hash
  (`#castra`, `#adopciones`, …). Opening `/programas#educa` from the Navbar/Footer selects the tab via
  a `useEffect` on `location.hash`; clicking a tab updates the hash with `history.replaceState` (no
  scroll). `Donar`'s tabs are local state only (no hash).

- **Navbar `active` prop**: every page passes it — `<Navbar active="inicio" />` (`"inicio" | "programas"
  | "focaba" | "comunidad" | "donar" | ""`). Navbar/Footer are defined once and imported everywhere.

## Deployment note (SPA)

Because this is a client-routed SPA, the host **must fall back to `index.html`** for unknown paths
(e.g. Netlify `/* → /index.html`), so a hard refresh on `/programas` doesn't 404.

## Placeholders (not yet wired for production)

- **Contact form** (`ContactForm.tsx`): validates + shows success state client-side but does **not** send.
  Wire to a forms service before deploy.
- **Donations** (`Donar.tsx` and every "Donar" CTA): UI only, no payment gateway yet.
- **Images**: hero/cards use Unsplash URLs as placeholders; allies use monochrome markers. Replace with
  optimized owned assets (WebP/AVIF, explicit `width`/`height`) before deploy (Manual §9, §6.7).

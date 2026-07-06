# Manual Técnico de Diseño — Sitio Web ANPA

**Asociación Nacional Protectora de Animales · Costa Rica**
Versión 1.0 · Junio 2026 · Documento de estándar visual y técnico

---

## 1. Propósito y principios

Este manual registra el estándar de diseño del sitio web rediseñado de ANPA. Su objetivo es garantizar **consistencia, accesibilidad y mantenibilidad** en toda nueva pantalla o componente.

**Principios rectores**

1. **Impacto emocional primero.** El contenido comunica rescate, cuidado y vida digna antes que estructura institucional.
2. **Conversión visible.** La acción «Donar» es siempre prominente y diferenciada (verde), nunca enterrada en submenús.
3. **Claridad sobre densidad.** Máximo 2 niveles de navegación; jerarquía visual explícita.
4. **Accesible por defecto.** Contraste AA, textos `alt`, roles ARIA y objetivos táctiles ≥ 44 px.
5. **Renderizado confiable.** Sin estados vacíos en el primer pintado (los contadores muestran cifras reales desde el inicio).

---

## 2. Identidad de marca

### 2.1 Logo
- Marca formada por un **disco rojo (#d4232b)** con huella en blanco + wordmark «ANPA» en Archivo Black.
- Bajada de marca: «Protección Animal · CR», en mayúsculas, 9.5–10 px, color `#8a827a`.
- Espacio de respeto mínimo: la altura de la huella alrededor del logo.
- Tamaño mínimo del disco: 40 px (navbar) / 44 px (footer).

### 2.2 Tono de voz
- Cercano, esperanzador y directo. Trato de «vos/sumate» (español de Costa Rica).
- Evitar tecnicismos; priorizar la historia humana y animal.

---

## 3. Color

### 3.1 Paleta principal

| Token | HEX | Uso |
|---|---|---|
| Rojo institucional | `#d4232b` | Marca, acentos, encabezados de sección, campaña |
| Rojo oscuro (hover) | `#a81a20` | Estados hover sobre rojo |
| Verde acción | `#1f8a5b` | **Exclusivo del CTA «Donar»** y confirmaciones |
| Verde oscuro (hover) | `#166b46` | Hover del botón Donar |
| Tinta (texto fuerte) | `#1d1b1a` | Títulos y texto principal |
| Texto secundario | `#544f48` / `#6b635b` | Párrafos y descripciones |
| Texto tenue | `#8a827a` / `#9a928a` | Metadatos, fechas, etiquetas |

### 3.2 Neutros y fondos

| Token | HEX | Uso |
|---|---|---|
| Crema (fondo base) | `#faf6f1` | Fondo general del sitio |
| Blanco | `#ffffff` | Tarjetas, navbar, secciones alternas |
| Borde cálido | `#ece4da` / `#efe7dd` | Bordes de tarjetas y separadores |
| Tinta footer | `#1a1816` | Fondo del pie de página |

### 3.3 Tintes suaves (fondos de íconos / etiquetas)
- Rojo suave: `#fbeceb` (texto `#d4232b`)
- Verde suave: `#eef6f1` (texto `#1f8a5b`)

### 3.4 Regla de acento
> El **verde `#1f8a5b` se reserva para la conversión** (donar) y los mensajes de éxito. No usarlo como color decorativo. El rojo es el color narrativo de la marca; el verde es el color de la acción.

### 3.5 Contraste (WCAG AA)
- Texto normal: ratio mínimo **4.5:1**. Texto grande (≥ 24 px o 19 px bold): **3:1**.
- Texto blanco sobre rojo `#d4232b` y verde `#1f8a5b`: válido para texto grande/bold (botones). Para texto pequeño sobre color, usar siempre peso ≥ 600.

---

## 4. Tipografía

**Familias (Google Fonts)**
- **Archivo** — títulos, cifras, etiquetas. Pesos 700 / 800 / 900.
- **Public Sans** — cuerpo, navegación, formularios. Pesos 400 / 500 / 600 / 700.

### 4.1 Escala tipográfica

| Rol | Familia / Peso | Tamaño | Tracking | Line-height |
|---|---|---|---|---|
| Hero H1 | Archivo 900 | 58 px (40 px móvil) | -1.5 px | 1.04 |
| H2 sección | Archivo 800 | 34–36 px | -0.8 a -1 px | 1.1 |
| H3 tarjeta | Archivo 700/800 | 18–23 px | — | 1.3 |
| Cifra contador | Archivo 900 | 40 px | -1 px | 1 |
| Etiqueta sección | Archivo 800 | 13 px | 1.2 px, mayúsc. | — |
| Cuerpo grande | Public Sans 400 | 16.5–19 px | — | 1.6–1.7 |
| Cuerpo | Public Sans 400 | 14–15 px | — | 1.6 |
| Meta / fecha | Public Sans 600 | 12.5–13 px | — | — |

**Regla:** En slides/encabezados usar `text-wrap: balance`; en párrafos largos `text-wrap: pretty`.

---

## 5. Layout y espaciado

- **Ancho de contenido:** `max-width: 1200px`, centrado, con padding lateral de 24 px (22 px en móvil).
- **Ritmo vertical de secciones:** 64–80 px de padding vertical. Secciones alternan fondo crema `#faf6f1` y blanco `#ffffff` para crear ritmo.
- **Grids:** usar siempre `display: grid` / `flex` con `gap` (nunca márgenes individuales entre hermanos).
  - Programas y noticias: 3 columnas → 1 columna en móvil.
  - Contadores: 4 columnas → 2 columnas en móvil.
- **Radios de esquina:** tarjetas 18–22 px · botones tipo píldora 999 px · íconos cuadrados 11–14 px.
- **Sombras:** suaves y bajas en opacidad, p. ej. `0 14px 36px -28px rgba(0,0,0,0.35)`. Evitar sombras duras.

### 5.1 Breakpoints
| Nombre | Ancho | Cambios |
|---|---|---|
| Desktop | > 900 px | Layout completo |
| Tablet/móvil | ≤ 900 px | Grids a 1–2 columnas, hero H1 a 40 px |
| Navbar móvil | ≤ 900 px | Menú hamburguesa; oculta nav y CTA inline |
| Footer móvil | ≤ 820 px | Grid del footer a 1 columna |

---

## 6. Componentes

### 6.1 Navbar (`Navbar.dc.html`)
- Sticky, fondo blanco, borde inferior `#ece5dd`, altura 74 px.
- **Máximo 2 niveles**: «Programas» despliega un único submenú (ANPA Castra / ANPA Educa / FOCABA). Sin terceros niveles.
- **Botón «Donar» verde** siempre visible (píldora). En móvil aparece como botón ancho dentro del panel.
- Estado activo: enlace en rojo `#d4232b` con fondo `#fbeceb` + `aria-current="page"`.
- Accesibilidad: `role="banner"`, `nav[aria-label="Principal"]`, `aria-haspopup`/`aria-expanded` en el desplegable, `aria-label` en íconos sociales.
- Prop `active`: `inicio` · `programas` · `donar` · `""`.

### 6.2 Hero
- Imagen full-bleed con overlay degradado oscuro (lado izquierdo más opaco para legibilidad).
- Estructura: etiqueta-distintivo → H1 emocional → párrafo de apoyo → **dos CTAs**: «Donar ahora» (verde, primario) y «Conoce nuestra misión» (contorno claro).
- La imagen del hero lleva `width`/`height` y `loading="eager"`.

### 6.3 Contadores de impacto
- **Renderizan la cifra real desde el HTML** (sin ceros). La animación de conteo arranca desde ~86 % del valor solo cuando la sección entra en viewport (`IntersectionObserver`, umbral 0.3), animando únicamente el incremento.
- Tarjeta: ícono en disco de tinte suave + cifra Archivo 900 + etiqueta.
- Formato numérico con separador de miles (`191,770`).

### 6.4 Tarjeta de programa
- Imagen representativa (16:9 aprox., `object-fit: cover`, fondo de respaldo `#e7ddd2`).
- Badge de ícono superpuesto (disco de color de marca).
- Título Archivo 800 + descripción de 2–3 líneas + enlace «Conocer más →».
- Hover: elevación `translateY(-5px)` + sombra más profunda.

### 6.5 Bloque de meta de donación
- Dos paneles: izquierdo rojo (relato + **barra de progreso** con `role="progressbar"` y `aria-valuenow/min/max`) y derecho blanco (ejemplos de aporte + CTA verde).
- La barra anima su `width` con transición de 1 s.

### 6.6 Noticias / actividad reciente
- Tarjeta con imagen, etiqueta de categoría (tinte rojo o verde), **fecha visible**, título y extracto.
- Incluye «Caso del mes» para transmitir urgencia y confianza.

### 6.7 Aliados
- Chips uniformes en blanco con borde; marca monocroma nítida.
- **Reemplazar los marcadores por SVG o PNG @2x reales** con `width`/`height` explícitos antes del deploy (evita reflow y pixelado).

### 6.8 Footer (`Footer.dc.html`)
- Fondo tinta `#1a1816`. Tres columnas: marca + redes · navegación · **formulario de contacto funcional**.
- **Formulario:** campos nombre, correo, mensaje, todos `required`, con validación HTML5 (`checkValidity` / `reportValidity`) y estado de éxito accesible (`role="status"`).
- **Todos los enlaces apuntan a rutas internas válidas** del sitio (sin URLs de staging ni enlaces rotos).

---

## 7. Botones y estados

| Tipo | Relleno | Texto | Hover |
|---|---|---|---|
| Primario (Donar) | `#1f8a5b` | Blanco 700 | `#166b46` + `translateY(-1px)` |
| Secundario claro | transparente + borde claro | Blanco 700 | fondo `rgba(255,255,255,0.2)` |
| Enlace de acción | — | `#d4232b` 700 + flecha | — |
| Campo de formulario | `#262320` | Blanco | borde foco `#1f8a5b` |

- Forma: píldora (999 px) para CTAs; 11–13 px para botones de formulario.
- Todo elemento interactivo debe tener estado `hover`/`focus` perceptible.

---

## 8. Accesibilidad (checklist de QA)

- [ ] Toda imagen con `alt` descriptivo (vacío solo si es decorativa).
- [ ] Imágenes con `width` y `height` para evitar reflow.
- [ ] Contraste de texto ≥ 4.5:1 (3:1 para texto grande). Validar con Lighthouse / axe.
- [ ] Roles y landmarks: `banner`, `navigation`, `contentinfo`, `progressbar`, `status`.
- [ ] `aria-current`, `aria-expanded`, `aria-haspopup`, `aria-label` donde corresponde.
- [ ] Objetivos táctiles ≥ 44 px.
- [ ] Navegación operable por teclado y foco visible.
- [ ] Sin estados vacíos/“0” en el primer render.

---

## 9. Estándar técnico

- **Arquitectura:** sitio estático con **Astro** (SSG). Las páginas son `src/pages/*.astro`; el chrome
  reutilizable (`Navbar.astro`, `Footer.astro`) se define **una sola vez** y se importa en cada página.
  React se usa **solo como islas** en lo interactivo: `Counters.tsx` (contadores) y `ContactForm.tsx`
  (formulario), montadas con `client:*`. El resto se sirve sin JavaScript de cliente.
- **Estilos:** CSS con *design tokens* (variables CSS en `src/styles/tokens.css`). Componentes `.astro`
  usan `<style>` scoped; las islas React importan su `.css` co-localizado. Sin Tailwind ni estilos inline.
- **Contenido:** las noticias son Markdown en `src/content/noticias/` (content collection con schema).
  Las listas estructurales (programas, aliados, contadores) viven en `src/data/*.ts`.
- **Imágenes:** producción debe migrar a activos propios optimizados (WebP/AVIF, `@2x`), con `loading="lazy"`
  salvo el hero (`eager`). Mientras tanto se usan fotografías representativas (Unsplash).
- **Enlaces:** rutas internas absolutas del sitio (`/`, `/programas`, `/donar`, `/#impacto`). Auditar que
  ningún `href` apunte a dominios de staging.
- **Rendimiento:** `preconnect` a Google Fonts; animaciones vía `requestAnimationFrame`; transiciones CSS
  para hover/progreso; JS de cliente limitado a las dos islas.
- **SEO:** cada página define `title` + `description` vía el layout `Base.astro` (incluye Open Graph y
  `<html lang="es">`).

---

## 10. Mapa de páginas

| Página | Archivo | Estado |
|---|---|---|
| Inicio | `src/pages/index.astro` | ✅ Implementada |
| Programas | `src/pages/programas.astro` | ✅ Implementada (anclas `#castra`/`#educa`/`#focaba`) |
| Donar | `src/pages/donar.astro` | ✅ Maqueta (sin pasarela de pago aún) |
| Navbar (componente) | `src/components/Navbar.astro` | ✅ |
| Footer (componente) | `src/components/Footer.astro` | ✅ |

---

## 11. Trazabilidad — observaciones del sitio anterior resueltas

| # | Observación | Solución en el estándar |
|---|---|---|
| 1 | Hero sin CTA claro | Hero emocional + dos CTAs diferenciados (§6.2) |
| 2 | Navegación muy anidada | Máximo 2 niveles (§6.1) |
| 3 | Formulario ausente en footer | Formulario funcional con validación (§6.8) |
| 4 | Links rotos en footer | Rutas internas válidas, sin staging (§6.8, §9) |
| 5 | Contadores en 0 al cargar | Cifra real en HTML, anima solo el incremento (§6.3) |
| 6 | Logos de aliados pixelados | Chips nítidos; migrar a SVG/PNG @2x (§6.7) |
| 7 | Tarjetas de programa planas | Imagen + ícono + descripción de 2–3 líneas (§6.4) |
| 8 | Falta de accesibilidad | Checklist a11y completo (§8) |
| 9 | Donación poco prominente | Botón «Donar» verde fijo en navbar (§6.1) |
| 10 | Sin urgencia/impacto reciente | Bloque de noticias + caso del mes + meta de donación (§6.5, §6.6) |

---

*Mantener este documento actualizado con cada cambio del sistema. Cualquier nuevo componente debe declarar su token de color, tipografía y estado de accesibilidad aquí antes de pasar a producción.*

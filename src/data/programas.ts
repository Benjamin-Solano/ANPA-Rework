// Programas de ANPA (§6.4). Usado en el Home (tarjetas) y en /programas (secciones con ancla).
export interface Programa {
  /** Ancla / id de sección en /programas (ej. 'castra' → /programas#castra). */
  slug: string;
  title: string;
  tone: 'rojo' | 'verde';
  img: string;
  alt: string;
  /** Markup SVG del ícono (24x24 viewBox). */
  icon: string;
  /** Resumen corto para la tarjeta del Home. */
  desc: string;
  /** Descripción extendida para la página /programas. */
  detalle: string;
}

export const programas: Programa[] = [
  {
    slug: 'castra',
    title: 'ANPA Castra',
    tone: 'rojo',
    img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=600&q=80',
    alt: 'Veterinario revisa a un perro en jornada de castración',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.1 8.1L20 20M8.1 15.9L20 4"/></svg>',
    desc: 'Jornadas masivas de castración a bajo costo para prevenir el abandono y la sobrepoblación.',
    detalle:
      'Jornadas masivas de castración a bajo costo en articulación con gobiernos locales. Cada castración evita decenas de nacimientos en la calle y es la herramienta preventiva más efectiva contra el abandono y la sobrepoblación animal.',
  },
  {
    slug: 'educa',
    title: 'ANPA Educa',
    tone: 'verde',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80',
    alt: 'Taller comunitario de educación en bienestar animal',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M21 7v6"/><path d="M7 9.5V14c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.5"/></svg>',
    desc: 'Educación y sensibilización en escuelas y comunidades para una tenencia responsable.',
    detalle:
      'Programas de educación y sensibilización en escuelas y comunidades de todo el país. Formamos en tenencia responsable, empatía y respeto por los animales, sembrando el cambio cultural desde la niñez.',
  },
  {
    slug: 'focaba',
    title: 'FOCABA',
    tone: 'rojo',
    img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80',
    alt: 'Encuentro regional de bienestar animal',
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
    desc: 'Foro Centroamericano de Bienestar Animal: articulamos políticas y alianzas regionales.',
    detalle:
      'El Foro Centroamericano de Bienestar Animal articula políticas públicas, coordinación regional y alianzas entre organizaciones para elevar los estándares de bienestar animal en toda Centroamérica.',
  },
];

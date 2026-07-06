// Contadores de impacto (§6.3). Cifras reales — se muestran desde el primer render;
// la animación (isla Counters.tsx) solo anima el incremento desde ~86 % al entrar en viewport.
export interface Counter {
  /** Valor final real. */
  target: number;
  label: string;
  /** Tono del disco de ícono: rojo o verde (tinte suave + color). */
  tone: 'rojo' | 'verde';
  /** Markup SVG del ícono (24x24 viewBox). */
  icon: string;
}

export const counters: Counter[] = [
  {
    target: 191770,
    label: 'Animales castrados',
    tone: 'rojo',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="10" r="1.7"/><circle cx="10.5" cy="6.5" r="1.7"/><circle cx="15.5" cy="6.5" r="1.7"/><circle cx="19" cy="10" r="1.7"/><path d="M12.5 11c-2.8 0-4.7 2.3-4.7 4.4 0 1.7 1.3 2.4 2.6 2.4 1 0 1.6-.5 2.1-.5s1.1.5 2.1.5c1.3 0 2.6-.7 2.6-2.4C17.2 13.3 15.3 11 12.5 11z" fill="currentColor"/></svg>',
  },
  {
    target: 78858,
    label: 'Personas sensibilizadas',
    tone: 'verde',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 11a3 3 0 0 0 0-6"/><path d="M21 20c0-2.5-1.5-4.7-3.7-5.6"/></svg>',
  },
  {
    target: 56,
    label: 'Gobiernos locales',
    tone: 'rojo',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h6"/></svg>',
  },
  {
    target: 46,
    label: 'Años de trayectoria',
    tone: 'verde',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 6.9H21l-5.6 4.1 2.1 6.9L12 15.8 6.5 19.9l2.1-6.9L3 8.9h6.6z"/></svg>',
  },
];

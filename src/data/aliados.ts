// Aliados institucionales (§6.7).
// NOTA producción: reemplazar los marcadores por SVG/PNG @2x reales con width/height explícitos.
export interface Aliado {
  name: string;
  /** Marca monocroma corta mientras no haya logo real. */
  mark: string;
  color: string;
}

export const aliados: Aliado[] = [
  { name: 'BNCR', mark: 'B', color: '#1f6fb0' },
  { name: 'BAC Credomatic', mark: 'BC', color: '#d4232b' },
  { name: 'Min. de Salud', mark: 'S', color: '#1f8a5b' },
  { name: 'MEP', mark: 'M', color: '#2a4a8a' },
  { name: 'IFAM', mark: 'I', color: '#c77a1a' },
];

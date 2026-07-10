// Contenido de la página /focaba — Foro Centroamericano de Bienestar Animal.
export interface Pilar {
  letter: string;
  title: string;
  desc: string;
}

export interface Impacto {
  value: string;
  label: string;
}

export const pilares: Pilar[] = [
  { letter: 'E', title: 'Educación', desc: 'Talleres en escuelas y comunidades sobre tenencia responsable.' },
  { letter: 'S', title: 'Sensibilización', desc: 'Campañas para transformar la cultura de respeto hacia los animales.' },
  { letter: 'G', title: 'Gestión local', desc: 'Articulación con municipalidades para políticas de bienestar animal.' },
];

export const impacto: Impacto[] = [
  { value: '78,858', label: 'Personas sensibilizadas' },
  { value: '56', label: 'Gobiernos locales aliados' },
  { value: '120+', label: 'Escuelas visitadas' },
];

// Contenido de la pestaña ANPA Castra en /programas.
export interface Campana {
  zone: string;
  date: string;
  spots: string;
}

export interface Precio {
  type: string;
  price: string;
  requires: string;
}

export interface Guia {
  title: string;
  content: string;
}

export const campanas: Campana[] = [
  { zone: 'Desamparados, San José', date: '18 jul · 8am-1pm', spots: '12 cupos' },
  { zone: 'Guápiles, Limón', date: '25 jul · 8am-12pm', spots: '6 cupos' },
  { zone: 'Nicoya, Guanacaste', date: '2 ago · 7am-1pm', spots: '20 cupos' },
  { zone: 'San Ramón, Alajuela', date: '9 ago · 8am-1pm', spots: 'Lleno' },
];

export const precios: Precio[] = [
  { type: 'Perro macho', price: '₡8,000', requires: 'Ayuno 8h · vacunas al día · dueño mayor de edad' },
  { type: 'Perro hembra', price: '₡12,000', requires: 'Ayuno 8h · fuera de celo · reposo post-op 10 días' },
  { type: 'Gato macho', price: '₡6,000', requires: 'Ayuno 8h · transportadora obligatoria' },
  { type: 'Gato hembra', price: '₡9,000', requires: 'Ayuno 8h · transportadora · reposo 7 días' },
];

export const guias: Guia[] = [
  {
    title: 'Cuidados pre-cirugía',
    content:
      'Ayuno de sólidos 8 horas antes · ayuno de agua 2 horas antes. Baño 48h antes, no el mismo día. Traer transportadora o correa fija.',
  },
  {
    title: 'Cuidados post-cirugía',
    content:
      'Reposo estricto 7-10 días, sin saltos ni carreras. Usar collar isabelino para evitar lamido. Revisar la herida a diario y volver si hay hinchazón o secreción.',
  },
];

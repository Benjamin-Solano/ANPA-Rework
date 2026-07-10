// Contenido de /comunidad — pestañas Adopciones y Mascotas perdidas.
export interface Refugio {
  name: string;
  location: string;
  raised: string;
  goal: string;
  pct: number;
}

export interface Mascota {
  name: string;
  age: string;
  sex: string;
  size: string;
  shelter: string;
  notes: string;
  img: string;
}

export interface ReportePerdido {
  name: string;
  type: 'perdido' | 'encontrado';
  zone: string;
  date: string;
  img: string;
}

export interface Coincidencia {
  match: string;
  zone: string;
  date: string;
  desc: string;
  contactName: string;
  contact: string;
  img: string;
}

export const refugios: Refugio[] = [
  { name: 'Refugio Huellitas de Amor', location: 'Cartago', raised: '₡890,000', goal: '₡1,200,000', pct: 74 },
  { name: 'Fundación Patitas Felices', location: 'Alajuela', raised: '₡410,000', goal: '₡900,000', pct: 46 },
  { name: 'Refugio San Francisco', location: 'Puntarenas', raised: '₡1,050,000', goal: '₡1,050,000', pct: 100 },
];

export const mascotas: Mascota[] = [
  { name: 'Toby', age: '2 años', sex: 'Macho', size: 'Mediano', shelter: 'Huellitas de Amor', notes: 'Vacunado, esterilizado, le encanta jugar con niños.', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=500&q=80' },
  { name: 'Mora', age: '5 meses', sex: 'Hembra', size: 'Pequeña', shelter: 'Patitas Felices', notes: 'Rescatada de la calle, tímida al inicio, muy cariñosa.', img: 'https://images.unsplash.com/photo-1517849845537-4d257902861a?auto=format&fit=crop&w=500&q=80' },
  { name: 'Rocky', age: '4 años', sex: 'Macho', size: 'Grande', shelter: 'San Francisco', notes: 'Necesita patio, convive bien con otros perros.', img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=500&q=80' },
  { name: 'Nube', age: '1 año', sex: 'Hembra', size: 'Mediana', shelter: 'Huellitas de Amor', notes: 'Esterilizada, sociable, ideal para primera mascota.', img: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=500&q=80' },
  { name: 'Simón', age: '3 años', sex: 'Macho', size: 'Pequeño', shelter: 'Patitas Felices', notes: 'Vacunado al día, tranquilo, apto para apartamento.', img: 'https://images.unsplash.com/photo-1477884143824-5d2a1a2b1b1e?auto=format&fit=crop&w=500&q=80' },
  { name: 'Luna', age: '6 meses', sex: 'Hembra', size: 'Pequeña', shelter: 'San Francisco', notes: 'Muy juguetona, en proceso de esterilización.', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80' },
];

export const tablero: ReportePerdido[] = [
  { name: 'Milo', type: 'perdido', zone: 'Curridabat', date: '5 jul', img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Kira', type: 'encontrado', zone: 'Heredia centro', date: '6 jul', img: 'https://images.unsplash.com/photo-1518715303039-6ac0c73e9d1e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Bimbo', type: 'perdido', zone: 'Tibás', date: '3 jul', img: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sin nombre', type: 'encontrado', zone: 'Alajuela', date: '7 jul', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=400&q=80' },
  { name: 'Pelusa', type: 'perdido', zone: 'San Pedro', date: '1 jul', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80' },
  { name: 'Rex', type: 'encontrado', zone: 'Escazú', date: '8 jul', img: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=400&q=80' },
];

export const coincidencias: Coincidencia[] = [
  {
    match: '92%',
    zone: 'Curridabat',
    date: '5 jul',
    desc: 'Mestizo mediano, pelaje café con blanco en el pecho, collar azul sin placa.',
    contactName: 'Marcela V.',
    contact: '8888-1234',
    img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80',
  },
  {
    match: '78%',
    zone: 'San Pedro',
    date: '4 jul',
    desc: 'Perro talla mediana, orejas caídas, cicatriz pequeña en la pata trasera derecha.',
    contactName: 'Diego R.',
    contact: '7777-5566',
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400&q=80',
  },
  {
    match: '61%',
    zone: 'Zapote',
    date: '2 jul',
    desc: 'Gato adulto atigrado, muy asustadizo, encontrado cerca de un parque.',
    contactName: 'Ana L.',
    contact: '6666-9911',
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=400&q=80',
  },
];

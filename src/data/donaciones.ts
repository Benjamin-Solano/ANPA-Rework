// Contenido de /donar — pestañas Donaciones y Merch.
export interface MetodoPago {
  short: string;
  name: string;
}

export interface ProductoMerch {
  name: string;
  price: string;
  img: string;
}

export interface Transparencia {
  value: string;
  label: string;
}

// Caso activo con meta visual (§ idea original: meta de 500 mil por un caso puntual).
export const casoActivo = {
  badge: 'Caso activo',
  titulo: 'Cirugía de Luna — displasia de cadera',
  desc: 'Cada donación acerca a Luna a su cirugía. Ayudanos a alcanzar la meta antes de su fecha programada.',
  recaudado: 320000,
  meta: 500000,
  faltan: 'Faltan 12 días',
};

export const transparencia: Transparencia[] = [
  { value: '₡4.2M', label: 'Recaudado este año' },
  { value: '₡1.1M', label: 'Deuda pendiente con clínicas' },
  { value: '38', label: 'Casos apoyados' },
];

export const metodos: MetodoPago[] = [
  { short: 'SINPE', name: 'SINPE Móvil' },
  { short: 'PP', name: 'PayPal' },
  { short: 'TRF', name: 'Transferencia bancaria' },
  { short: 'TC', name: 'Tarjeta' },
];

export const montosRecurrentes: string[] = ['₡3,000/mes', '₡5,000/mes', '₡10,000/mes', 'Otro monto'];

export const merch: ProductoMerch[] = [
  { name: 'Camiseta ANPA', price: '₡9,500', img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80' },
  { name: 'Taza "Adoptá no compres"', price: '₡5,000', img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80' },
  { name: 'Set de stickers', price: '₡2,500', img: 'https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?auto=format&fit=crop&w=500&q=80' },
  { name: 'Bolso de tela', price: '₡7,000', img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80' },
];

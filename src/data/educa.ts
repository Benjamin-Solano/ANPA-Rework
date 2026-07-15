// Contenido de la pestaña ANPA Educa en /programas.
export interface Emergencia {
  letter: string;
  title: string;
  content: string;
}

export interface Vacuna {
  age: string;
  info: string;
}

export interface Veterinaria {
  name: string;
  zone: string;
  hours: string;
  is24: boolean;
  rating: string;
}

export interface Faq {
  q: string;
  a: string;
}

export const emergencias: Emergencia[] = [
  {
    letter: 'I',
    title: 'Intoxicación',
    content:
      'Retira restos del tóxico de la boca. No induzcas el vómito sin indicación veterinaria. Lleva el envase o planta al veterinario. Traslado inmediato.',
  },
  {
    letter: 'A',
    title: 'Atropellamiento',
    content:
      'No lo muevas si sospechas fractura. Cúbrelo para mantener temperatura. Usa una tabla o manta rígida para trasladarlo. Traslado inmediato, evita que camine.',
  },
  {
    letter: 'C',
    title: 'Convulsiones',
    content:
      'Aleja objetos, no lo sujetes. No metas las manos en su boca. Cronometra la duración. Si dura más de 5 min, traslado urgente.',
  },
  {
    letter: 'K',
    title: 'Kit de emergencia en casa',
    content: 'Gasas y vendas · suero fisiológico · guantes desechables · manta térmica · teléfono de veterinaria 24h a la mano.',
  },
];

export const pasosDenuncia: string[] = [
  'Completa el formulario con la mayor cantidad de detalles posible',
  'Un equipo de ANPA revisa el caso en 24-48 horas',
  'Se contacta a autoridades locales (SENASA / Fuerza Pública) si aplica',
  'Recibes seguimiento del estado de la denuncia por correo',
];

export const tiposMaltrato: string[] = [
  'Abandono',
  'Agresión física',
  'Negligencia (falta de alimento, agua o refugio)',
  'Hacinamiento / cría irresponsable',
  'Otro',
];

export const vacunas: Vacuna[] = [
  { age: '6-8 semanas', info: 'Primera dosis múltiple (moquillo, parvovirus) y desparasitación.' },
  { age: '10-12 semanas', info: 'Refuerzo múltiple + primera dosis de leptospirosis.' },
  { age: '14-16 semanas', info: 'Refuerzo final + vacuna antirrábica.' },
  { age: 'Adulto', info: 'Refuerzo anual + control antiparasitario cada 3 meses.' },
];

export const veterinarias: Veterinaria[] = [
  { name: 'Clínica Veterinaria San Rafael', zone: 'Desamparados', hours: '7am-9pm', is24: false, rating: '4.8' },
  { name: 'Hospital Veterinario Central', zone: 'San José centro', hours: 'Abierto 24h', is24: true, rating: '4.6' },
  { name: 'VetLife Escazú', zone: 'Escazú', hours: '8am-7pm', is24: false, rating: '4.9' },
  { name: 'Urgencias Animal CR', zone: 'Heredia', hours: 'Abierto 24h', is24: true, rating: '4.7' },
];

export const faqs: Faq[] = [
  { q: '¿Cómo agendo una cita de castración?', a: 'Desde la sección "Sistema de citas" en ANPA Castra, eligiendo clínica y fecha disponible.' },
  { q: '¿ANPA tiene refugio propio?', a: 'No, ANPA trabaja en red con refugios verificados listados en la sección Comunidad.' },
  { q: '¿Puedo ser voluntario sin experiencia?', a: 'Sí, cada refugio verificado detalla sus oportunidades de voluntariado en su ficha.' },
  { q: '¿Qué documentos necesito para adoptar?', a: 'Cédula vigente y completar el formulario de solicitud de adopción del refugio elegido.' },
  { q: '¿Las donaciones son deducibles de impuestos?', a: 'ANPA es de utilidad pública; consultá con tu contador sobre la deducción aplicable.' },
];

import { useState } from 'react';
import './Chatbot.css';

interface Mensaje {
  from: 'bot' | 'user';
  text: string;
}

interface RespuestaRapida {
  label: string;
  href: string;
  reply: string;
}

const RESPUESTAS_RAPIDAS: RespuestaRapida[] = [
  { label: 'Agendar cita', href: '/programas#castra', reply: 'En ANPA Castra encontrás el sistema de citas, precios y requisitos.' },
  { label: 'Adoptar', href: '/comunidad#adopciones', reply: 'Mirá el directorio de refugios verificados y las mascotas disponibles.' },
  { label: 'Donar', href: '/donar', reply: 'Podés donar por SINPE, PayPal, transferencia o tarjeta, con total transparencia.' },
  { label: 'Mascota perdida', href: '/comunidad#busqueda', reply: 'Subí una foto en "Mascotas perdidas" y buscamos coincidencias por IA.' },
];

const BotIcon = ({ size }: { size: number }) => (
  <svg viewBox="0 0 120 116" width={size} height={size} aria-hidden="true">
    <path d="M18 50 L8 12 L32 42 Z" fill="#fbebea" stroke="#1e1a18" strokeWidth="4" strokeLinejoin="round" />
    <path d="M102 50 L112 12 L88 42 Z" fill="#fbebea" stroke="#1e1a18" strokeWidth="4" strokeLinejoin="round" />
    <circle cx="60" cy="58" r="36" fill="#fff" stroke="#1e1a18" strokeWidth="4" />
    <circle cx="92" cy="62" r="7" fill="#fff" stroke="#1e1a18" strokeWidth="3.5" />
    <circle cx="92" cy="62" r="2.6" fill="#1e1a18" />
    <path d="M26 46 Q60 26 94 46 Q96 62 90 70 Q60 84 30 70 Q24 62 26 46 Z" fill="var(--rojo)" stroke="#1e1a18" strokeWidth="4" />
    <ellipse cx="44" cy="50" rx="9" ry="5" fill="#fff" opacity="0.35" transform="rotate(-15 44 50)" />
    <ellipse cx="60" cy="86" rx="15" ry="11" fill="#fff" stroke="#1e1a18" strokeWidth="4" />
    <ellipse cx="60" cy="81" rx="5.5" ry="4.2" fill="#1e1a18" />
    <path d="M53 92 Q60 101 67 92 Q60 96 53 92 Z" fill="#e8899a" stroke="#1e1a18" strokeWidth="2.5" />
    <path d="M24 92 Q60 106 96 92" stroke="#1e1a18" strokeWidth="5" fill="none" strokeLinecap="round" />
  </svg>
);

/** Chatbot flotante global: respuestas rápidas que navegan a la sección correspondiente. */
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { from: 'bot', text: '¡Hola! Soy el asistente de ANPA. ¿En qué te ayudo? Elegí una opción abajo.' },
  ]);

  const responder = (r: RespuestaRapida) => {
    setMensajes((m) => [...m, { from: 'user', text: r.label }, { from: 'bot', text: r.reply }]);
    window.setTimeout(() => {
      window.location.href = r.href;
    }, 700);
  };

  return (
    <div className="chat-widget">
      {open && (
        <div className="chat-panel">
          <div className="chat-cabeza">
            <div className="chat-cabeza-info">
              <span className="chat-icono-cabeza">
                <BotIcon size={30} />
              </span>
              <div>
                <div className="chat-titulo">Asistente ANPA</div>
                <div className="chat-estado">En línea · responde al instante</div>
              </div>
            </div>
            <button type="button" className="chat-cerrar" onClick={() => setOpen(false)} aria-label="Cerrar chat">
              ×
            </button>
          </div>
          <div className="chat-mensajes">
            {mensajes.map((m, idx) => (
              <div key={idx} className={`chat-fila chat-fila-${m.from}`}>
                <div className={`chat-burbuja chat-burbuja-${m.from}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="chat-respuestas">
            {RESPUESTAS_RAPIDAS.map((r) => (
              <button key={r.label} type="button" className="chat-respuesta" onClick={() => responder(r)}>
                {r.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button type="button" className="chat-boton" onClick={() => setOpen((v) => !v)} aria-label="Abrir asistente de ANPA" aria-expanded={open}>
        <BotIcon size={46} />
      </button>
    </div>
  );
}

import { useState } from 'react';
import LocationPicker from './LocationPicker.tsx';
import type { Coincidencia } from '../data/comunidad.ts';
import './BusquedaIA.css';

interface Props {
  coincidencias: Coincidencia[];
}

type ReportType = 'perdido' | 'encontrado';
type Canal = 'correo' | 'whatsapp';

const matchColor = (pct: string) => {
  const n = parseInt(pct, 10);
  if (n >= 85) return '#3e9663';
  if (n >= 70) return '#c99a3e';
  return 'var(--rojo)';
};

/**
 * Búsqueda de mascotas perdidas/encontradas con match por IA (mock) + alertas por zona.
 * Isla React: necesita estado real (tipo de reporte, resultados, canal de alerta).
 */
export default function BusquedaIA({ coincidencias }: Props) {
  const [tipo, setTipo] = useState<ReportType>('perdido');
  const [matched, setMatched] = useState(false);
  const [canal, setCanal] = useState<Canal>('correo');
  const [alertaActiva, setAlertaActiva] = useState(false);

  return (
    <>
      <div className="ia-caja">
        <h2 className="h2">Búsqueda con IA</h2>
        <p className="sub">Subí una foto y comparamos automáticamente con reportes existentes.</p>

        <div className="ia-tipo-tabs" role="tablist" aria-label="Tipo de reporte">
          <button type="button" className={`ia-tipo${tipo === 'perdido' ? ' activo' : ''}`} onClick={() => setTipo('perdido')} role="tab" aria-selected={tipo === 'perdido'}>
            Perdí a mi mascota
          </button>
          <button type="button" className={`ia-tipo${tipo === 'encontrado' ? ' activo' : ''}`} onClick={() => setTipo('encontrado')} role="tab" aria-selected={tipo === 'encontrado'}>
            Encontré una mascota
          </button>
        </div>

        <div className="ia-form-grid">
          <label className="ia-upload">
            <input type="file" accept="image/*" hidden />
            <span className="ia-upload-titulo">Sube la foto</span>
            <span className="ia-upload-sub">arrastrar o tocar para adjuntar</span>
          </label>
          <div className="ia-campos">
            <LocationPicker />
            <textarea className="ia-textarea" rows={2} placeholder="Descripción (color, tamaño, señas)" aria-label="Descripción" />
            <input className="ia-input" type="text" placeholder="Contacto" aria-label="Contacto" />
          </div>
        </div>

        <button type="button" className="ia-buscar" onClick={() => setMatched(true)}>
          Buscar coincidencias
        </button>

        {matched && (
          <div className="ia-resultados">
            <div className="ia-resultados-titulo">{coincidencias.length} posibles coincidencias encontradas</div>
            <div className="ia-resultados-sub">
              Comparamos la foto y descripción con reportes existentes — revisá los detalles para descartar rápido si es o no tu mascota.
            </div>
            <div className="ia-resultados-grid">
              {coincidencias.map((m) => (
                <div className="ia-match-card" key={m.contactName}>
                  <div className="ia-match-img-wrap">
                    <img className="ia-match-img" src={m.img} alt="" width="240" height="110" loading="lazy" />
                    <span className="ia-match-badge" style={{ background: matchColor(m.match) }}>
                      {m.match}
                    </span>
                  </div>
                  <div className="ia-match-cuerpo">
                    <div className="ia-match-meta">{m.zone} · {m.date}</div>
                    <div className="ia-match-desc">{m.desc}</div>
                    <div className="ia-match-reportante">Reportado por: {m.contactName} · {m.contact}</div>
                    <button type="button" className="ia-match-contactar">Contactar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="alertas-caja">
        <div className="alertas-texto">
          <div className="alertas-titulo">Avisos por zona</div>
          <div className="alertas-desc">
            Creá tu alerta y recibí un aviso cuando alguien reporte una mascota perdida o encontrada cerca de tu ubicación.
          </div>
        </div>
        <div className="alertas-form">
          <div className="alertas-canales" role="group" aria-label="Canal de alerta">
            <button type="button" className={`alertas-canal${canal === 'correo' ? ' activo' : ''}`} onClick={() => setCanal('correo')}>
              Por correo
            </button>
            <button type="button" className={`alertas-canal${canal === 'whatsapp' ? ' activo' : ''}`} onClick={() => setCanal('whatsapp')}>
              Por WhatsApp
            </button>
          </div>
          <input
            className="alertas-input"
            type={canal === 'correo' ? 'email' : 'tel'}
            placeholder={canal === 'correo' ? 'tu-correo@ejemplo.com' : 'Número de WhatsApp (+506...)'}
            aria-label={canal === 'correo' ? 'Correo electrónico' : 'Número de WhatsApp'}
          />
          {alertaActiva ? (
            <div className="alertas-confirmacion" role="status">✓ Alertas activadas para tu zona.</div>
          ) : (
            <button type="button" className="alertas-activar" onClick={() => setAlertaActiva(true)}>
              Activar alertas de mi zona
            </button>
          )}
        </div>
      </div>
    </>
  );
}

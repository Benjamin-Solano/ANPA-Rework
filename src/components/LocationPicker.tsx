import { useState } from 'react';
import './LocationPicker.css';

type Status = 'idle' | 'loading' | 'manual' | 'done' | 'error';

const STATUS_COLOR: Record<Status, string> = {
  idle: 'tenue',
  loading: 'tenue',
  manual: 'texto',
  done: 'verde',
  error: 'rojo',
};

/**
 * Selector de ubicación reutilizable: pin ajustable sobre un mapa placeholder +
 * botón de geolocalización real del navegador. Usado en la denuncia de maltrato
 * (Programas/Educa) y en el reporte de mascota perdida/encontrada (Comunidad).
 */
export default function LocationPicker() {
  const [pin, setPin] = useState({ xPct: 50, yPct: 50 });
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = Math.max(4, Math.min(96, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(6, Math.min(96, ((e.clientY - rect.top) / rect.height) * 100));
    setPin({ xPct, yPct });
    setStatus('manual');
    setMessage('Pin ajustado manualmente en el mapa.');
  };

  const useCurrentLocation = () => {
    setStatus('loading');
    setMessage('');
    if (!navigator.geolocation) {
      setStatus('error');
      setMessage('Tu navegador no permite geolocalización. Marcá el pin manualmente en el mapa.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const acc = Math.round(pos.coords.accuracy || 0);
        setPin({ xPct: 50, yPct: 50 });
        setStatus('done');
        setMessage(`Ubicación detectada (±${acc}m). Ajustá el pin si no es exacto.`);
      },
      () => {
        setStatus('error');
        setMessage('No pudimos acceder a tu ubicación (permiso denegado o no disponible). Marcá el pin manualmente.');
      },
      { timeout: 8000 },
    );
  };

  return (
    <div className="lp">
      <div className="lp-label">Ubicación</div>
      <div className="lp-mapa" onClick={handleMapClick} role="button" tabIndex={0} aria-label="Tocá el mapa para ajustar el pin de ubicación">
        <div className="lp-mapa-texto">MAPA (Google Maps) — tocá para ajustar el pin</div>
        <div className="lp-pin" style={{ left: `${pin.xPct}%`, top: `${pin.yPct}%` }}>
          <div className="lp-pin-punta" />
        </div>
      </div>
      <div className="lp-acciones">
        <button type="button" className="lp-gps" onClick={useCurrentLocation}>
          <span className="lp-gps-punto" />
          Usar mi ubicación actual (GPS)
        </button>
        {status === 'loading' && <span className="lp-buscando">Buscando…</span>}
      </div>
      {message && <div className={`lp-mensaje lp-mensaje-${STATUS_COLOR[status]}`}>{message}</div>}
    </div>
  );
}

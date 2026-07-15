import { useState } from 'react';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { casoActivo, transparencia, metodos, montosRecurrentes, merch } from '../data/donaciones';
import s from './Donar.module.css';

type Tab = 'donaciones' | 'merch';

// en-US da separador de coma (₡320,000), consistente con Counters y el patrón del diseño aprobado.
const fmt = (n: number) => `₡${n.toLocaleString('en-US')}`;

export default function Donar() {
  const [tab, setTab] = useState<Tab>('donaciones');
  const [recurrente, setRecurrente] = useState(false);

  const pct = Math.round((casoActivo.recaudado / casoActivo.meta) * 100);

  return (
    <>
      <Seo
        title="Donar"
        description="Doná a ANPA Costa Rica por SINPE, PayPal, transferencia o tarjeta, con total transparencia sobre a dónde va cada colón. Donación única o recurrente. También tienda solidaria ANPA."
      />
      <Navbar active="donar" />

      <section className={s.cabecera}>
        <div className={`contenedor ${s['cabecera-inner']}`}>
          <h1 className={s['cabecera-h1']}>Donaciones</h1>
          <p className={s['cabecera-p']}>Cada colón cuenta, y podés ver exactamente a dónde va.</p>
          <div className={s.tabs} role="tablist" aria-label="Donaciones">
            <button
              type="button"
              className={`${s.tab} ${tab === 'donaciones' ? s.activo : ''}`}
              role="tab"
              aria-selected={tab === 'donaciones'}
              onClick={() => setTab('donaciones')}
            >
              Donaciones
            </button>
            <button
              type="button"
              className={`${s.tab} ${tab === 'merch' ? s.activo : ''}`}
              role="tab"
              aria-selected={tab === 'merch'}
              onClick={() => setTab('merch')}
            >
              Merch
            </button>
          </div>
        </div>
      </section>

      {/* ============ DONACIONES ============ */}
      <div className={`contenedor ${s.seccion}`} role="tabpanel" hidden={tab !== 'donaciones'}>
        <div className={s.meta}>
          <div className={s['meta-rojo']}>
            <span className={s['meta-badge']}>{casoActivo.badge}</span>
            <h2 className={s['meta-h2']}>{casoActivo.titulo}</h2>
            <p className={s['meta-p']}>{casoActivo.desc}</p>
            <div className={s['meta-cifras']}>
              <span className={s['meta-raised']}>{fmt(casoActivo.recaudado)}</span>{' '}
              <span className={s['meta-goal']}>de {fmt(casoActivo.meta)}</span>
            </div>
            <div className={s['meta-barra']} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label="Progreso de la meta de donación">
              <div className={s['meta-barra-fill']} style={{ width: `${pct}%` }}></div>
            </div>
            <div className={s['meta-pie']}>
              <span>{pct}% alcanzado</span>
              <span>{casoActivo.faltan}</span>
            </div>
          </div>
          <div className={s['meta-blanco']}>
            <h3 className={s['meta-h3']}>Tu aporte se convierte en vidas salvadas</h3>
            <p className={s['meta-blanco-p']}>Elegí un monto y sumate hoy. Cada colón llega directo al programa.</p>
            <div className={s['meta-aportes']}>
              <div className={s['meta-aporte']}>
                <span className={s['meta-monto']}>₡5k</span>
                <span>Cubre vacunas para 5 animales rescatados.</span>
              </div>
              <div className={s['meta-aporte']}>
                <span className={s['meta-monto']}>₡15k</span>
                <span>Financia una castración completa.</span>
              </div>
            </div>
            <button type="button" className={`btn-donar ${s['meta-cta']}`}>Quiero donar ♥</button>
          </div>
        </div>

        <h2 className={s.h2}>Transparencia general</h2>
        <p className={s.sub}>Cómo se han usado los fondos este año.</p>
        <div className={s['transparencia-grid']}>
          {transparencia.map((t) => (
            <div className={s['transparencia-card']} key={t.label}>
              <div className={s['transparencia-valor']}>{t.value}</div>
              <div className={s['transparencia-label']}>{t.label}</div>
            </div>
          ))}
        </div>

        <h2 className={s.h2}>Elegí cómo donar</h2>
        <div className={s['metodos-grid']}>
          {metodos.map((m) => (
            <div className={s['metodo-card']} key={m.name}>
              <div className={s['metodo-icono']}>{m.short}</div>
              <div className={s['metodo-nombre']}>{m.name}</div>
            </div>
          ))}
        </div>

        <div className={s['recurrente-caja']}>
          <div>
            <div className={s['recurrente-titulo']}>Donación recurrente</div>
            <div className={s['recurrente-desc']}>Suscribite con un monto mensual y ayudá de forma constante.</div>
          </div>
          <button
            type="button"
            className={`${s.switch} ${recurrente ? s.on : ''}`}
            aria-pressed={recurrente}
            aria-label="Activar donación recurrente"
            onClick={() => setRecurrente((v) => !v)}
          >
            <span className={s['switch-knob']}></span>
          </button>
        </div>
        {recurrente && (
          <div className={s['recurrente-montos']}>
            {montosRecurrentes.map((m) => <div className={s['recurrente-monto']} key={m}>{m}</div>)}
          </div>
        )}
      </div>

      {/* ============ MERCH ============ */}
      <div className={`contenedor ${s.seccion}`} role="tabpanel" hidden={tab !== 'merch'}>
        <h2 className={s.h2}>Tienda ANPA</h2>
        <p className={s.sub}>100% de la ganancia se destina a los programas de ANPA.</p>
        <div className={s['merch-grid']}>
          {merch.map((p) => (
            <div className={s['merch-card']} key={p.name}>
              <img className={s['merch-img']} src={p.img} alt={p.name} width="400" height="300" loading="lazy" />
              <div className={s['merch-cuerpo']}>
                <div className={s['merch-nombre']}>{p.name}</div>
                <div className={s['merch-fila']}>
                  <div className={s['merch-precio']}>{p.price}</div>
                  <button type="button" className={s['merch-agregar']}>Agregar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

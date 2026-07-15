import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BusquedaIA from '../components/BusquedaIA';
import { refugios, mascotas, tablero, coincidencias } from '../data/comunidad';
import s from './Comunidad.module.css';

type Tab = 'adopciones' | 'busqueda';
type BoardType = 'all' | 'perdido' | 'encontrado';

export default function Comunidad() {
  const location = useLocation();
  const [tab, setTab] = useState<Tab>(location.hash === '#busqueda' ? 'busqueda' : 'adopciones');
  const [boardType, setBoardType] = useState<BoardType>('all');
  const [boardZone, setBoardZone] = useState<string>('all');

  const zonas = useMemo(() => ['all', ...Array.from(new Set(tablero.map((b) => b.zone)))], []);

  useEffect(() => {
    const h = location.hash.replace('#', '');
    if (h === 'adopciones' || h === 'busqueda') setTab(h);
  }, [location.hash]);

  const selectTab = (name: Tab) => {
    setTab(name);
    window.history.replaceState(null, '', `#${name}`);
  };

  const boardVisible = tablero.filter(
    (b) => (boardType === 'all' || b.type === boardType) && (boardZone === 'all' || b.zone === boardZone),
  );

  return (
    <>
      <Seo
        title="Comunidad"
        description="Comunidad ANPA: refugios verificados, adopciones seguras y búsqueda de mascotas perdidas con IA — sin fraudes de redes sociales."
      />
      <Navbar active="comunidad" />

      <section className={s.cabecera}>
        <div className={`contenedor ${s['cabecera-inner']}`}>
          <h1 className={s['cabecera-h1']}>Comunidad</h1>
          <p className={s['cabecera-p']}>Refugios verificados, adopciones seguras y mascotas perdidas — sin fraudes de redes sociales.</p>
          <div className={s.tabs} role="tablist" aria-label="Comunidad">
            <button
              type="button"
              className={`${s.tab} ${tab === 'adopciones' ? s.activo : ''}`}
              role="tab"
              aria-selected={tab === 'adopciones'}
              onClick={() => selectTab('adopciones')}
            >
              Adopciones
            </button>
            <button
              type="button"
              className={`${s.tab} ${tab === 'busqueda' ? s.activo : ''}`}
              role="tab"
              aria-selected={tab === 'busqueda'}
              onClick={() => selectTab('busqueda')}
            >
              Mascotas perdidas
            </button>
          </div>
        </div>
      </section>

      {/* ============ ADOPCIONES ============ */}
      <div id="adopciones" className={`contenedor ${s.seccion}`} role="tabpanel" hidden={tab !== 'adopciones'}>
        <h2 className={s.h2}>Refugios verificados</h2>
        <p className={s.sub}>Donar, voluntariar o adoptar con confianza.</p>
        <div className={s['refugios-grid']}>
          {refugios.map((r) => (
            <div className={s['refugio-card']} key={r.name}>
              <div className={s['refugio-cabeza']}>
                <div className={s['refugio-nombre']}>{r.name}</div>
                <div className={s['refugio-verificado']}>✓ Verificado</div>
              </div>
              <div className={s['refugio-ubicacion']}>{r.location}</div>
              <div className={s['refugio-barra']}>
                <div className={s['refugio-barra-fill']} style={{ width: `${r.pct}%` }} />
              </div>
              <div className={s['refugio-recaudo']}>{r.raised} recaudado de {r.goal}</div>
              <div className={s['refugio-acciones']}>
                <button type="button" className={s['refugio-donar']}>Donar</button>
                <button type="button" className={s['refugio-voluntariar']}>Voluntariar</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className={s.h2}>Mascotas en adopción</h2>
        <p className={s.sub}>Publicadas por refugios verificados.</p>
        <div className={s['pets-grid']}>
          {mascotas.map((p) => (
            <div className={s['pet-card']} key={p.name}>
              <img className={s['pet-img']} src={p.img} alt={p.name} width="300" height="200" loading="lazy" />
              <div className={s['pet-cuerpo']}>
                <div className={s['pet-cabeza']}>
                  <div className={s['pet-nombre']}>{p.name}</div>
                  <div className={s['pet-edad']}>{p.age}</div>
                </div>
                <div className={s['pet-meta']}>{p.sex} · {p.size} · {p.shelter}</div>
                <div className={s['pet-notas']}>{p.notes}</div>
                <button type="button" className={s['pet-postular']}>Ver ficha y postular</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ BÚSQUEDA ============ */}
      <div id="busqueda" className={`contenedor ${s.seccion}`} role="tabpanel" hidden={tab !== 'busqueda'}>
        <BusquedaIA coincidencias={coincidencias} />

        <h2 className={s.h2}>Tablero de búsqueda</h2>
        <p className={s.sub}>Reportes activos de la comunidad — filtrá por tipo o por zona.</p>

        <div className={s['board-filtros']} role="group" aria-label="Filtrar por tipo">
          <button type="button" className={`${s['board-filtro']} ${boardType === 'all' ? s.activo : ''}`} onClick={() => setBoardType('all')}>Todos</button>
          <button type="button" className={`${s['board-filtro']} ${boardType === 'perdido' ? s.activo : ''}`} onClick={() => setBoardType('perdido')}>Perdidos</button>
          <button type="button" className={`${s['board-filtro']} ${boardType === 'encontrado' ? s.activo : ''}`} onClick={() => setBoardType('encontrado')}>Encontrados</button>
        </div>
        <div className={s['board-zonas']} role="group" aria-label="Filtrar por zona">
          {zonas.map((z) => (
            <button
              type="button"
              className={`${s['board-zona']} ${z === boardZone ? s.activo : ''}`}
              key={z}
              onClick={() => setBoardZone(z)}
            >
              {z === 'all' ? 'Todas las zonas' : z}
            </button>
          ))}
        </div>

        {boardVisible.length > 0 ? (
          <div className={s['board-grid']}>
            {boardVisible.map((b) => (
              <div className={s['board-card']} key={b.name + b.zone}>
                <div className={s['board-img-wrap']}>
                  <img className={s['board-img']} src={b.img} alt={b.name} width="220" height="130" loading="lazy" />
                  <span className={`${s['board-badge']} ${s[b.type]}`}>{b.type === 'perdido' ? 'PERDIDO' : 'ENCONTRADO'}</span>
                </div>
                <div className={s['board-cuerpo']}>
                  <div className={s['board-nombre']}>{b.name}</div>
                  <div className={s['board-meta']}>{b.zone} · {b.date}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={s['board-vacio']}>No hay reportes que coincidan con esos filtros.</div>
        )}
      </div>

      <Footer />
    </>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LocationPicker from '../components/LocationPicker';
import { campanas, precios, guias } from '../data/castra';
import { emergencias, pasosDenuncia, tiposMaltrato, vacunas, veterinarias, faqs } from '../data/educa';
import s from './Programas.module.css';

type Tab = 'castra' | 'educa';
type VetFilter = 'all' | '24h' | 'day';

export default function Programas() {
  const location = useLocation();
  const [tab, setTab] = useState<Tab>(location.hash === '#educa' ? 'educa' : 'castra');
  const [vetFilter, setVetFilter] = useState<VetFilter>('all');

  // Sincroniza la pestaña activa con el hash cuando se navega desde otra página (submenú/footer).
  useEffect(() => {
    const h = location.hash.replace('#', '');
    if (h === 'castra' || h === 'educa') setTab(h);
  }, [location.hash]);

  // Cambio de pestaña por clic: actualiza el hash sin provocar scroll (como el replaceState original).
  const selectTab = (name: Tab) => {
    setTab(name);
    window.history.replaceState(null, '', `#${name}`);
  };

  const vetsVisible = veterinarias.filter(
    (v) => vetFilter === 'all' || (vetFilter === '24h' && v.is24) || (vetFilter === 'day' && !v.is24),
  );

  return (
    <>
      <Seo
        title="Programas"
        description="ANPA Castra: mapa de campañas, sistema de citas, precios y guía de cuidados. ANPA Educa: emergencias animales, denuncia de maltrato, vacunas y veterinarias certificadas."
      />
      <Navbar active="programas" />

      <section className={s.cabecera}>
        <div className={`contenedor ${s['cabecera-inner']}`}>
          <h1 className={s['cabecera-h1']}>Programas ANPA</h1>
          <p className={s['cabecera-p']}>Dos frentes de trabajo: control de poblaciones y educación en bienestar animal.</p>
          <div className={s.tabs} role="tablist" aria-label="Programas">
            <button
              type="button"
              className={`${s.tab} ${tab === 'castra' ? s.activo : ''}`}
              role="tab"
              aria-selected={tab === 'castra'}
              onClick={() => selectTab('castra')}
            >
              ANPA Castra
            </button>
            <button
              type="button"
              className={`${s.tab} ${tab === 'educa' ? s.activo : ''}`}
              role="tab"
              aria-selected={tab === 'educa'}
              onClick={() => selectTab('educa')}
            >
              ANPA Educa
            </button>
          </div>
        </div>
      </section>

      {/* ============ ANPA CASTRA ============ */}
      <div id="castra" className={`contenedor ${s.seccion}`} role="tabpanel" hidden={tab !== 'castra'}>
        <h2 className={s.h2}>Mapa de campañas</h2>
        <p className={s.sub}>Jornadas de castración activas cerca de vos.</p>
        <div className={s['campanas-fila']}>
          <div className={s['mapa-placeholder']}>
            <span>MAPA INTERACTIVO<br />pines de campañas activas</span>
          </div>
          <div className={s['campanas-lista']}>
            {campanas.map((c) => (
              <div className={s['campana-item']} key={c.zone}>
                <div>
                  <div className={s['campana-zona']}>{c.zone}</div>
                  <div className={s['campana-fecha']}>{c.date}</div>
                </div>
                <div className={s['campana-cupos']}>{c.spots}</div>
              </div>
            ))}
          </div>
        </div>

        <h2 className={s.h2}>Sistema de citas</h2>
        <p className={s.sub}>Agendá la castración de tu mascota en 3 pasos.</p>
        <div className={s['citas-caja']}>
          <div className={s['citas-form']}>
            <div>
              <div className={s['campo-label']}>Tipo de mascota</div>
              <div className={s['citas-opciones']}>
                <div className={`${s['citas-opcion']} ${s.activa}`}>Perro</div>
                <div className={s['citas-opcion']}>Gato</div>
              </div>
            </div>
            <div>
              <div className={s['campo-label']}>Clínica más cercana</div>
              <div className={s['campo-valor']}>Clínica ANPA — Desamparados</div>
            </div>
            <div>
              <div className={s['campo-label']}>Fecha preferida</div>
              <div className={s['campo-valor']}>Elegir en calendario</div>
            </div>
            <button type="button" className={`btn-donar ${s['citas-btn']}`}>Agendar cita</button>
          </div>
          <div className={s['citas-beneficios']}>
            ✓ Confirmación inmediata por correo<br />
            ✓ Recordatorio 24h antes<br />
            ✓ Reprogramación sin costo
          </div>
        </div>

        <h2 className={s.h2}>Precios y requisitos</h2>
        <div className={s['precios-grid']}>
          {precios.map((p) => (
            <div className={s['precio-card']} key={p.type}>
              <div className={s['precio-tipo']}>{p.type}</div>
              <div className={s['precio-monto']}>{p.price}</div>
              <div className={s['precio-requisitos']}>{p.requires}</div>
            </div>
          ))}
        </div>

        <h2 className={s.h2}>Guía de cuidados pre y post castración</h2>
        <div className={s.acordeon}>
          {guias.map((g) => (
            <details className={s.detalle} key={g.title}>
              <summary>{g.title}</summary>
              <div className={s['detalle-cuerpo']}>{g.content}</div>
            </details>
          ))}
        </div>
      </div>

      {/* ============ ANPA EDUCA ============ */}
      <div id="educa" className={`contenedor ${s.seccion}`} role="tabpanel" hidden={tab !== 'educa'}>
        <h2 className={s.h2}>Emergencias animales</h2>
        <p className={s.sub}>Qué hacer como dueño antes de llegar a una veterinaria.</p>
        <div className={s.acordeon}>
          {emergencias.map((e) => (
            <details className={s.detalle} key={e.title}>
              <summary>
                <span className={s['detalle-letra']} aria-hidden="true">{e.letter}</span>
                {e.title}
              </summary>
              <div className={`${s['detalle-cuerpo']} ${s['detalle-cuerpo-indent']}`}>{e.content}</div>
            </details>
          ))}
        </div>

        <div className={s['denuncia-fila']}>
          <div className={s['denuncia-form-wrap']}>
            <h2 className={s.h2}>Denunciar maltrato animal</h2>
            <p className={s.sub}>Reportá un caso y seguí el proceso paso a paso.</p>
            <form className={s['denuncia-form']}>
              <div className={s['campo-label']}>Tipo de maltrato</div>
              <select className={s['campo-select']} aria-label="Tipo de maltrato" defaultValue="">
                <option value="">Selecciona una opción</option>
                {tiposMaltrato.map((t) => <option value={t} key={t}>{t}</option>)}
              </select>
              <LocationPicker />
              <div className={s['campo-label']}>Descripción y fotos</div>
              <div className={s['campo-adjunto']}>Arrastrá fotos o tocá para adjuntar</div>
              <button type="submit" className={s['denuncia-enviar']}>Enviar denuncia</button>
            </form>
          </div>
          <div className={s['pasos-wrap']}>
            <div className={`${s['campo-label']} ${s['pasos-titulo']}`}>Pasos del proceso</div>
            <ol className={s['pasos-lista']}>
              {pasosDenuncia.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        </div>

        <h2 className={s.h2}>Guía básica de vacunas y cuidados</h2>
        <div className={s['vacunas-grid']}>
          {vacunas.map((v) => (
            <div className={s['vacuna-card']} key={v.age}>
              <div className={s['vacuna-edad']}>{v.age}</div>
              <div className={s['vacuna-info']}>{v.info}</div>
            </div>
          ))}
        </div>

        <h2 className={s.h2}>Veterinarias certificadas</h2>
        <p className={s.sub}>Directorio con horarios y reseñas de otros dueños.</p>
        <div className={s['vet-filtros']} role="group" aria-label="Filtrar veterinarias">
          <button type="button" className={`${s['vet-filtro']} ${vetFilter === 'all' ? s.activo : ''}`} onClick={() => setVetFilter('all')}>Todas</button>
          <button type="button" className={`${s['vet-filtro']} ${vetFilter === '24h' ? s.activo : ''}`} onClick={() => setVetFilter('24h')}>24 horas</button>
          <button type="button" className={`${s['vet-filtro']} ${vetFilter === 'day' ? s.activo : ''}`} onClick={() => setVetFilter('day')}>Horario diurno</button>
        </div>
        <div className={s['vets-grid']}>
          {vetsVisible.map((v) => (
            <div className={s['vet-card']} key={v.name}>
              <div className={s['vet-cabeza']}>
                <div className={s['vet-nombre']}>{v.name}</div>
                {v.is24 && <span className={s['vet-badge']}>24H</span>}
              </div>
              <div className={s['vet-zona']}>{v.zone} · {v.hours}</div>
              <div className={s['vet-rating']}>{v.rating} ★ reseñas de dueños</div>
            </div>
          ))}
        </div>

        <div className={s['panfleto-teaser']}>
          <div>
            <div className={s['panfleto-teaser-titulo']}>Panfleto FOCABA para niños</div>
            <div className={s['panfleto-teaser-desc']}>
              Material digital para que los niños aprendan a cuidar animales en casa y en la escuela.
            </div>
          </div>
          <Link to="/focaba" className={s['panfleto-teaser-cta']}>Conocer FOCABA</Link>
        </div>

        <h2 className={s.h2}>Preguntas frecuentes</h2>
        <div className={s.acordeon}>
          {faqs.map((f) => (
            <details className={s.detalle} key={f.q}>
              <summary>{f.q}</summary>
              <div className={s['detalle-cuerpo']}>{f.a}</div>
            </details>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Counters from '../components/Counters';
import ProgramCard from '../components/ProgramCard';
import NewsCard from '../components/NewsCard';
import DonationGoal from '../components/DonationGoal';
import Allies from '../components/Allies';
import Carousel from '../components/Carousel';
import { counters } from '../data/counters';
import { programas } from '../data/programas';
import type { Programa } from '../data/programas';
import { noticias } from '../content/noticias';
import s from './Home.module.css';

const tickSvg =
  '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>';

// Tarjeta de FOCABA para el grid de "Nuestros programas": mismo componente que Castra/Educa,
// pero enlaza a /focaba (página propia) en vez de un ancla dentro de /programas.
const focabaCard: Programa = {
  slug: 'focaba',
  title: 'FOCABA',
  tone: 'rojo',
  img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80',
  alt: 'Encuentro regional de bienestar animal',
  icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>',
  desc: 'Foro Centroamericano de Bienestar Animal: articulamos políticas y alianzas regionales.',
  detalle: '',
};

const momentos = [
  { label: 'jornada de castración', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=1200&q=80', alt: 'Jornada de castración de ANPA' },
  { label: 'niños FOCABA en taller', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80', alt: 'Niños en taller de FOCABA' },
  { label: 'adopción exitosa', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80', alt: 'Familia con su mascota recién adoptada' },
  { label: 'voluntariado comunitario', img: 'https://images.unsplash.com/photo-1593871075120-982e042088d8?auto=format&fit=crop&w=1200&q=80', alt: 'Voluntarios de ANPA en jornada comunitaria' },
];

const exploraCards = [
  { title: 'Programas', desc: 'ANPA Castra y ANPA Educa', href: '/programas' },
  { title: 'FOCABA', desc: 'Educación en bienestar animal', href: '/focaba' },
  { title: 'Donaciones', desc: 'Apoyá con transparencia', href: '/donar' },
  { title: 'Comunidad', desc: 'Adopciones y mascotas perdidas', href: '/comunidad' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Inicio"
        description="ANPA Costa Rica: rescatamos, sanamos y protegemos a miles de animales cada año mediante castración preventiva, educación y comunidad. La ONG de bienestar animal más antigua del país."
      />
      <Navbar active="inicio" />

      <Hero />

      {/* CONTADORES */}
      <section id="impacto" className={`contenedor ${s.seccion}`} aria-label="Nuestro impacto">
        <div className={`${s['seccion-head']} ${s.centrado}`}>
          <span className={`etiqueta-seccion ${s['c-rojo']}`}>Impacto en cifras</span>
          <h2 className={s['seccion-h2']}>Resultados que transforman comunidades</h2>
        </div>
        <Counters counters={counters} />
      </section>

      {/* MISIÓN */}
      <section id="mision" className={`contenedor ${s['seccion-mision']}`}>
        <div className={s['mision-grid']}>
          <div className={s['mision-img-wrap']}>
            <img
              className={s['mision-img']}
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=80"
              alt="Gato atendido en una jornada de ANPA"
              width="900"
              height="1000"
              loading="lazy"
            />
            <div className={s['mision-badge']}>
              <div className={s['mision-badge-anio']}>1980</div>
              <div className={s['mision-badge-sub']}>Fundada · ONG pionera del país</div>
            </div>
          </div>
          <div>
            <span className={`etiqueta-seccion ${s['c-verde']}`}>Quiénes somos</span>
            <h2 className={s['mision-h2']}>Bienestar animal, humano y ambiental: una sola salud.</h2>
            <p className={s['mision-p']}>
              La Asociación Nacional Protectora de Animales es la organización de bienestar animal más
              antigua de Costa Rica. Trabajamos con un enfoque preventivo, educativo y participativo,
              alineados con la Agenda 2030.
            </p>
            <ul className={s['mision-lista']}>
              <li><span className={s.tick} dangerouslySetInnerHTML={{ __html: tickSvg }} />Declarada de utilidad pública por el Estado en 2019.</li>
              <li><span className={s.tick} dangerouslySetInnerHTML={{ __html: tickSvg }} />Programas con impacto económico, social y ambiental.</li>
              <li><span className={s.tick} dangerouslySetInnerHTML={{ __html: tickSvg }} />Presencia en 56 gobiernos locales de todo el país.</li>
            </ul>
            <Link to="/programas" className="enlace-accion">
              Ver nuestros programas
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* UNA SOLA SALUD (ODS) */}
      <section className={`contenedor ${s['seccion-ods']}`}>
        <img
          className={s['ods-img']}
          src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=700&q=80"
          alt="Veterinaria de ANPA atendiendo a un perro en comunidad"
          width="700"
          height="500"
          loading="lazy"
        />
        <div>
          <span className={`etiqueta-seccion ${s['c-rojo']}`}>Nuestro enfoque</span>
          <h2 className={s['ods-h2']}>Una sola salud</h2>
          <p className={s['ods-p']}>
            Nuestras metas se alinean con la Agenda 2030 y los Objetivos de Desarrollo Sostenible (ODS),
            especialmente en los ámbitos de salud, educación y sostenibilidad ambiental. ANPA se define por
            su capacidad de transformarse y transformar, consolidándose como una organización disruptiva que
            supera la idea tradicional de «protectora de animales».
          </p>
          <p className={s['ods-p']}>
            Nuestro trabajo parte de la visión de una sola salud <em>(One Health)</em>, donde el bienestar
            animal, humano y ambiental son interdependientes. Impulsamos programas con enfoque preventivo,
            educativo y participativo, en distintos niveles de involucramiento comunitario.
          </p>
        </div>
      </section>

      {/* DIVISOR */}
      <div className={`contenedor ${s.divisor}`}>
        <div className={s['divisor-linea']}></div>
        <div className={s['divisor-icono']} aria-hidden="true">
          <svg viewBox="0 0 100 100" width="20" height="20">
            <ellipse cx="50" cy="68" rx="24" ry="18" fill="#fff" />
            <ellipse cx="18" cy="34" rx="9" ry="12" transform="rotate(-18 18 34)" fill="#fff" />
            <ellipse cx="42" cy="15" rx="9" ry="12" fill="#fff" />
            <ellipse cx="64" cy="15" rx="9" ry="12" fill="#fff" />
            <ellipse cx="88" cy="34" rx="9" ry="12" transform="rotate(18 88 34)" fill="#fff" />
          </svg>
        </div>
        <div className={s['divisor-linea']}></div>
      </div>

      {/* MISIÓN Y VISIÓN */}
      <section className={`contenedor ${s['seccion-mv']}`}>
        <div className={s['mv-card']}>
          <h3 className={s['mv-h3']}>Misión</h3>
          <p className={s['mv-p']}>
            Promover una cultura de respeto hacia los animales de compañía que genere bienestar para todos
            por igual, desarrollando programas innovadores de educación y manejo humanitario de poblaciones.
          </p>
        </div>
        <div className={s['mv-card']}>
          <h3 className={s['mv-h3']}>Visión</h3>
          <p className={s['mv-p']}>
            Lograr el mayor impacto en el bienestar animal en Costa Rica, Centroamérica y el Caribe, por la
            efectividad de nuestros programas socioeducativos, comunitarios y de triple impacto: económico,
            social y ambiental.
          </p>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section className={s['banda-blanca']}>
        <div className={`contenedor ${s.seccion}`}>
          <div className={`${s['seccion-head']} ${s.fila}`}>
            <div>
              <span className={`etiqueta-seccion ${s['c-rojo']}`}>Nuestros programas</span>
              <h2 className={s['seccion-h2']}>Tres frentes, un mismo propósito</h2>
            </div>
            <Link to="/programas" className={`enlace-accion ${s['c-verde-link']}`}>
              Ver todos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </Link>
          </div>
          <div className={s['grid-3']}>
            {programas.map((p) => <ProgramCard key={p.slug} programa={p} />)}
            <ProgramCard programa={focabaCard} href="/focaba" />
          </div>
        </div>
      </section>

      {/* META DE DONACIÓN */}
      <DonationGoal />

      {/* MOMENTOS ANPA (carrusel) */}
      <section className={s['banda-blanca']}>
        <div className={`contenedor ${s.seccion}`}>
          <Carousel slides={momentos} />
        </div>
      </section>

      {/* NOTICIAS */}
      <section id="noticias">
        <div className={`contenedor ${s.seccion}`}>
          <div className={s['seccion-head']}>
            <span className={`etiqueta-seccion ${s['c-verde']}`}>Actividad reciente</span>
            <h2 className={s['seccion-h2']}>Últimas noticias</h2>
          </div>
          <div className={s['grid-3']}>
            {noticias.map((n) => (
              <NewsCard
                key={n.slug}
                title={n.title}
                tag={n.tag}
                tone={n.tone}
                date={n.date}
                image={n.image}
                alt={n.alt}
                excerpt={n.excerpt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORA LA PLATAFORMA */}
      <section className={s['banda-blanca']}>
        <div className={`contenedor ${s.seccion} ${s['explora-seccion']}`}>
          <h2 className={`${s['seccion-h2']} ${s['explora-h2']}`}>Explorá la plataforma</h2>
          <div className={s['explora-grid']}>
            {exploraCards.map((c) => (
              <Link key={c.href} className={s['explora-card']} to={c.href}>
                <div className={s['explora-icono']} aria-hidden="true" />
                <div className={s['explora-titulo']}>{c.title}</div>
                <div className={s['explora-desc']}>{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ALIADOS */}
      <Allies />

      <Footer />
    </>
  );
}

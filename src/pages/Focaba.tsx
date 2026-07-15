import Seo from '../components/Seo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { pilares, impacto } from '../data/focaba';
import s from './Focaba.module.css';

export default function Focaba() {
  return (
    <>
      <Seo
        title="FOCABA"
        description="FOCABA: el Foro Centroamericano de Bienestar Animal de ANPA. Educación, sensibilización y alianzas con gobiernos locales para fortalecer el vínculo humano-animal en Costa Rica."
      />
      <Navbar active="focaba" />

      <section className={s.hero}>
        <div className={`contenedor ${s['hero-grid']}`}>
          <div>
            <span className={s['hero-badge']}>Programa ANPA</span>
            <h1 className={s['hero-h1']}>FOCABA</h1>
            <p className={s['hero-p']}>
              Fortaleciendo el vínculo humano-animal. Un programa de educación, sensibilización y trabajo
              articulado con gobiernos locales para promover el bienestar animal desde la niñez y la
              comunidad.
            </p>
          </div>
          <div className={s['hero-img-wrap']}>
            <img
              className={s['hero-img']}
              src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=700&q=80"
              alt="Taller comunitario del programa FOCABA"
              width="700"
              height="700"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className={`contenedor ${s.seccion}`}>
        <h2 className={s['seccion-h2']}>¿Qué es FOCABA?</h2>
        <div className={s['pilares-grid']}>
          {pilares.map((p) => (
            <div className={s['pilar-card']} key={p.title}>
              <div className={s['pilar-letra']} aria-hidden="true">{p.letter}</div>
              <div className={s['pilar-titulo']}>{p.title}</div>
              <div className={s['pilar-desc']}>{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={s['banda-blanca']}>
        <div className={`contenedor ${s.seccion} ${s['alianza-grid']}`}>
          <div>
            <h2 className={s['seccion-h2']}>Alianza con gobiernos locales</h2>
            <p className={s['alianza-p']}>
              FOCABA trabaja junto a 56 gobiernos locales en Costa Rica, integrando el bienestar animal a
              las políticas municipales: ordenanzas, censos caninos/felinos y jornadas conjuntas de
              castración y educación.
            </p>
            <p className={s['alianza-p']}>
              Este enfoque articulado multiplica el alcance de cada campaña y asegura continuidad más allá
              de una sola jornada.
            </p>
          </div>
          <img
            className={s['alianza-img']}
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80"
            alt="Firma de convenio entre ANPA y una municipalidad"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </section>

      <section className={`contenedor ${s.seccion}`}>
        <div className={s.panfleto}>
          <div>
            <div className={s['panfleto-titulo']}>Panfleto digital para niños</div>
            <div className={s['panfleto-desc']}>
              Material ilustrado para escuelas: cómo alimentar, jugar y cuidar la salud de una mascota,
              pensado para niños y niñas de primaria.
            </div>
          </div>
          <a href="#" className={s['panfleto-cta']}>Descargar panfleto FOCABA</a>
        </div>
      </section>

      <section className={`contenedor ${s.seccion} ${s['impacto-seccion']}`}>
        <h2 className={s['seccion-h2']}>Impacto acumulado</h2>
        <div className={s['impacto-grid']}>
          {impacto.map((i) => (
            <div className={s['impacto-card']} key={i.label}>
              <div className={s['impacto-valor']}>{i.value}</div>
              <div className={s['impacto-label']}>{i.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

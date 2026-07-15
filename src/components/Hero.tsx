import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

/** Hero emocional con overlay + dos CTAs diferenciados (§6.2). */
export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Bienvenida">
      <img
        className={styles.heroImg}
        src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1600&q=80"
        alt="Voluntaria abraza a un perro rescatado"
        width="1600"
        height="900"
        loading="eager"
      />
      <div className={styles.heroOverlay}></div>
      <div className={`${styles.heroContenido} contenedor`}>
        <div className={styles.heroCaja}>
          <span className={styles.heroBadge}>
            <span className={styles.heroPunto}></span>
            46 años protegiendo la vida animal en Costa Rica
          </span>
          <h1 className={styles.heroH1}>Cada animal merece una vida digna.</h1>
          <p className={styles.heroSub}>
            Rescatamos, sanamos y protegemos a miles de animales cada año. Con castración preventiva,
            educación y comunidad construimos un país donde ninguno quede atrás.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/donar" className={`btn-donar ${styles.heroCtaPrimario}`}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.5 1.7 5 5 5c2 0 3.2 1.2 4 2.3C9.8 6.2 11 5 13 5c3.3 0 4.7 3.5 3 6.8C19.5 16.4 12 21 12 21z"></path></svg>
              Donar ahora
            </Link>
            <a href="#mision" className={styles.heroCtaSecundario}>
              Conoce nuestra misión
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import styles from './DonationGoal.module.css';

/** Bloque de meta de donación (§6.5): panel rojo con barra de progreso + panel blanco con CTA. */
export default function DonationGoal() {
  const raised = '₡4.620.000';
  const goal = '₡6.000.000';
  const pct = 77;
  const donantes = 312;

  return (
    <section className={`contenedor ${styles.metaSeccion}`}>
      <div className={styles.meta}>
        <div className={styles.metaRojo}>
          <span className={styles.metaBadge}>Campaña de junio</span>
          <h2 className={styles.metaH2}>3.000 castraciones para frenar el abandono</h2>
          <p className={styles.metaP}>
            Cada castración evita decenas de nacimientos en la calle. Ayúdanos a alcanzar la meta de este
            mes.
          </p>
          <div className={styles.metaCifras}>
            <span className={styles.metaRaised}>{raised}</span>
            <span className={styles.metaGoal}>de {goal}</span>
          </div>
          <div
            className={styles.metaBarra}
            role="progressbar"
            aria-valuenow={pct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progreso de la meta de donación"
          >
            <div className={styles.metaBarraFill} style={{ width: `${pct}%` }}></div>
          </div>
          <div className={styles.metaPie}>
            <span><strong>{pct}%</strong> alcanzado</span>
            <span><strong>{donantes}</strong> donantes este mes</span>
          </div>
        </div>

        <div className={styles.metaBlanco}>
          <h3 className={styles.metaH3}>Tu aporte se convierte en vidas salvadas</h3>
          <p className={styles.metaBlancoP}>Elegí un monto y sumate hoy. Cada colón llega directo al programa.</p>
          <div className={styles.metaAportes}>
            <div className={styles.metaAporte}>
              <span className={styles.metaMonto}>₡5k</span>
              <span>Cubre vacunas para 5 animales rescatados.</span>
            </div>
            <div className={styles.metaAporte}>
              <span className={styles.metaMonto}>₡15k</span>
              <span>Financia una castración completa.</span>
            </div>
          </div>
          <Link to="/donar" className={`btn-donar ${styles.metaCta}`}>
            Quiero donar
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.5 1.7 5 5 5c2 0 3.2 1.2 4 2.3C9.8 6.2 11 5 13 5c3.3 0 4.7 3.5 3 6.8C19.5 16.4 12 21 12 21z"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

import { aliados } from '../data/aliados';
import styles from './Allies.module.css';

/** Aliados institucionales (§6.7). */
export default function Allies() {
  return (
    <section id="aliados" className={`contenedor ${styles.aliadosSeccion}`}>
      <p className={styles.aliadosTitulo}>Con el respaldo de aliados que confían en nosotros</p>
      <div className={styles.aliadosLista}>
        {aliados.map((a) => (
          <div className={styles.aliado} key={a.name}>
            <span className={styles.aliadoMarca} style={{ background: a.color }}>{a.mark}</span>
            <span className={styles.aliadoNombre}>{a.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

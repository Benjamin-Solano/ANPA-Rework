import { Link } from 'react-router-dom';
import type { Programa } from '../data/programas';
import styles from './ProgramCard.module.css';

interface Props {
  programa: Programa;
  /** Sobrescribe el destino por defecto (/programas#slug) — usado por la tarjeta de FOCABA. */
  href?: string;
}

export default function ProgramCard({ programa: p, href = `/programas#${p.slug}` }: Props) {
  const bg = p.tone === 'rojo' ? 'var(--rojo)' : 'var(--verde)';

  return (
    <Link className={styles.progCard} to={href}>
      <div className={styles.progImgWrap}>
        <img className={styles.progImg} src={p.img} alt={p.alt} width="600" height="400" loading="lazy" />
        <span
          className={styles.progIcono}
          aria-hidden="true"
          style={{ background: bg }}
          dangerouslySetInnerHTML={{ __html: p.icon }}
        ></span>
      </div>
      <div className={styles.progCuerpo}>
        <h3 className={styles.progTitulo}>{p.title}</h3>
        <p className={styles.progDesc}>{p.desc}</p>
        <span className={`enlace-accion ${styles.enlaceAccion}`}>
          Conocer más
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
        </span>
      </div>
    </Link>
  );
}

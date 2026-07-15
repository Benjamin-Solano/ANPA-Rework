import type { CSSProperties } from 'react';
import styles from './Logo.module.css';

interface Props {
  /** Tamaño del disco en px (§2.1: mín 40 navbar / 44 footer). */
  size?: number;
  /** Esquema de color del texto: 'oscuro' (navbar) o 'claro' (footer). */
  variant?: 'oscuro' | 'claro';
}

/** Logo de marca (disco con el logo real de ANPA + wordmark). Reutilizado en Navbar y Footer. */
export default function Logo({ size = 42, variant = 'oscuro' }: Props) {
  const wordColor = variant === 'claro' ? '#fff' : 'var(--tinta)';
  const subColor = variant === 'claro' ? '#8d857c' : 'var(--tenue)';

  return (
    <span className={styles.logo} style={{ '--disco': `${size}px` } as CSSProperties}>
      <span className={styles.disco} aria-hidden="true">
        <img src="/img/anpa-logo.png" alt="" width={size} height={size} loading="eager" />
      </span>
      <span className={styles.wordmark}>
        <span className={styles.marca} style={{ color: wordColor }}>ANPA</span>
        <span className={styles.bajada} style={{ color: subColor }}>Protección Animal · CR</span>
      </span>
    </span>
  );
}

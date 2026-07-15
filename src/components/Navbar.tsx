import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { programas } from '../data/programas';
import styles from './Navbar.module.css';

interface Props {
  /** Página activa para resaltar el enlace (§6.1). */
  active?: 'inicio' | 'programas' | 'focaba' | 'comunidad' | 'donar' | '';
}

const redes = [
  {
    label: 'Facebook',
    href: '#',
    icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3.5H14V3.8c0-1 .3-1.7 1.7-1.7H17.6V-.9C17.3-.9 16-.9 14.6-.9c-2.9 0-4.6 1.7-4.6 4.9V5.5H7V9h3v9.5h4z" transform="translate(0 2)"/></svg>',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  },
  {
    label: 'YouTube',
    href: '#',
    icon: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2zM10 15V9l5.2 3z"/></svg>',
  },
];

const submenuDesc: Record<string, string> = {
  castra: 'Castración masiva y preventiva',
  educa: 'Educación y sensibilización',
};

const comunidadSubmenu = [
  { slug: 'adopciones', title: 'Adopciones', desc: 'Refugios verificados y mascotas disponibles' },
  { slug: 'busqueda', title: 'Mascotas perdidas', desc: 'Búsqueda con IA y tablero comunitario' },
];

export default function Navbar({ active = '' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.nav} role="banner">
      <div className={`${styles.navInner} contenedor`}>
        <Link to="/" aria-label="ANPA — inicio">
          <Logo size={42} variant="oscuro" />
        </Link>

        <nav className={`${styles.navDesktop} ${styles.navLinks}`} aria-label="Principal">
          <Link
            to="/"
            className={`${styles.navLink} ${active === 'inicio' ? styles.activo : ''}`}
            aria-current={active === 'inicio' ? 'page' : undefined}
          >
            Inicio
          </Link>

          <div className={styles.tieneSubmenu}>
            <Link to="/programas" className={`${styles.navLink} ${active === 'programas' ? styles.activo : ''}`} aria-haspopup="true">
              Programas
              <svg className={styles.chevron} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"></path></svg>
            </Link>
            <div className={styles.submenu} role="menu">
              {programas.map((p) => (
                <Link key={p.slug} to={`/programas#${p.slug}`} role="menuitem">
                  <span className={styles.submenuTitulo}>{p.title}</span>
                  <span className={styles.submenuDesc}>{submenuDesc[p.slug]}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/focaba"
            className={`${styles.navLink} ${active === 'focaba' ? styles.activo : ''}`}
            aria-current={active === 'focaba' ? 'page' : undefined}
          >
            FOCABA
          </Link>

          <div className={styles.tieneSubmenu}>
            <Link to="/comunidad" className={`${styles.navLink} ${active === 'comunidad' ? styles.activo : ''}`} aria-haspopup="true">
              Comunidad
              <svg className={styles.chevron} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 9l6 6 6-6"></path></svg>
            </Link>
            <div className={styles.submenu} role="menu">
              {comunidadSubmenu.map((c) => (
                <Link key={c.slug} to={`/comunidad#${c.slug}`} role="menuitem">
                  <span className={styles.submenuTitulo}>{c.title}</span>
                  <span className={styles.submenuDesc}>{c.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className={`${styles.navDesktop} ${styles.navDerecha}`}>
          <div className={styles.redes} aria-label="Redes sociales">
            {redes.map((r) => (
              <a key={r.label} href={r.href} className={styles.red} aria-label={r.label} dangerouslySetInnerHTML={{ __html: r.icon }} />
            ))}
          </div>
          <Link to="/donar" className={`btn-donar ${styles.navDonar}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.5 1.7 5 5 5c2 0 3.2 1.2 4 2.3C9.8 6.2 11 5 13 5c3.3 0 4.7 3.5 3 6.8C19.5 16.4 12 21 12 21z"></path></svg>
            Donar
          </Link>
        </div>

        <button
          className={styles.navMobileBtn}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="nav-mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
        </button>
      </div>

      <div className={styles.navMobilePanel} id="nav-mobile-panel" hidden={!open}>
        <Link to="/" className={styles.mLink} onClick={() => setOpen(false)}>Inicio</Link>
        <Link to="/programas" className={styles.mLink} onClick={() => setOpen(false)}>Programas</Link>
        <Link to="/focaba" className={styles.mLink} onClick={() => setOpen(false)}>FOCABA</Link>
        <Link to="/comunidad" className={styles.mLink} onClick={() => setOpen(false)}>Comunidad</Link>
        <Link to="/#noticias" className={styles.mLink} onClick={() => setOpen(false)}>Noticias</Link>
        <Link to="/donar" className={styles.mLinkDonar} onClick={() => setOpen(false)}>Donar ahora</Link>
      </div>
    </header>
  );
}

import { Link } from 'react-router-dom';
import Logo from './Logo';
import ContactForm from './ContactForm';
import styles from './Footer.module.css';

const redes = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3l.5-3.5H14V3.8c0-1 .3-1.7 1.7-1.7H17.6V-.9C17.3-.9 16-.9 14.6-.9c-2.9 0-4.6 1.7-4.6 4.9V5.5H7V9h3v9.5h4z" transform="translate(0 2)"/></svg>',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22.4 12 31 31 0 0 0 22 8.2zM10 15V9l5.2 3z"/></svg>',
  },
];

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`${styles.footerGrid} contenedor`}>
        <div>
          <div className={styles.footerMarca}>
            <Logo size={44} variant="claro" />
          </div>
          <p className={styles.footerDesc}>
            Asociación Nacional Protectora de Animales. La entidad de bienestar animal más antigua de Costa
            Rica, declarada de utilidad pública desde 2019.
          </p>
          <div className={styles.footerRedes}>
            {redes.map((r) => (
              <a key={r.label} href={r.href} className={styles.footerRed} aria-label={r.label} dangerouslySetInnerHTML={{ __html: r.icon }} />
            ))}
          </div>
        </div>

        <nav className={styles.footerNav} aria-label="Enlaces del pie">
          <h3 className={styles.footerTitulo}>Navegación</h3>
          <Link to="/" className={styles.footerLink}>Inicio</Link>
          <Link to="/programas#castra" className={styles.footerLink}>ANPA Castra</Link>
          <Link to="/programas#educa" className={styles.footerLink}>ANPA Educa</Link>
          <Link to="/focaba" className={styles.footerLink}>FOCABA</Link>
          <Link to="/comunidad#adopciones" className={styles.footerLink}>Adopciones</Link>
          <Link to="/comunidad#busqueda" className={styles.footerLink}>Mascotas perdidas</Link>
          <Link to="/#noticias" className={styles.footerLink}>Noticias</Link>
          <Link to="/donar" className={styles.footerLink}>Donar</Link>
        </nav>

        <div>
          <h3 className={styles.footerTitulo}>Escríbenos</h3>
          <ContactForm />
        </div>
      </div>

      <div className={`${styles.footerBottom} contenedor`}>
        <span>© {anio} ANPA · Asociación Nacional Protectora de Animales. Todos los derechos reservados.</span>
        <span className={styles.footerLegal}>
          <Link to="/#privacidad">Privacidad</Link>
          <Link to="/#transparencia">Transparencia</Link>
        </span>
      </div>
    </footer>
  );
}

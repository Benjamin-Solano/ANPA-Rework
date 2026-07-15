import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Chatbot from '../components/Chatbot';
import styles from './RootLayout.module.css';

/**
 * Layout persistente de toda la app (ex Base.astro). Al no desmontarse entre rutas, el
 * rastro de huellas, el botón de WhatsApp y el Chatbot persisten como con transition:persist.
 * - Rastro de huellas: se reanima en cada cambio de ruta (ex 'astro:after-swap').
 * - Scroll: sube al top en cada navegación y salta a la ancla #hash si existe.
 */
export default function RootLayout() {
  const { pathname, hash } = useLocation();
  const trailRef = useRef<HTMLDivElement>(null);

  // Reanima el rastro de huellas en cada navegación.
  useEffect(() => {
    const trail = trailRef.current;
    if (!trail) return;
    trail.classList.remove(styles.andando);
    // Fuerza reflow para reiniciar la animación.
    void trail.offsetWidth;
    trail.classList.add(styles.andando);
  }, [pathname]);

  // Gestión de scroll: a la ancla si hay hash, arriba si no.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Outlet />

      {/* Rastro de huellas al navegar entre secciones. */}
      <div ref={trailRef} className={styles.pawTrail} aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <svg key={i} viewBox="0 0 100 100" width="20" height="20" style={{ animationDelay: `${i * 0.12}s` }}>
            <ellipse cx="50" cy="68" rx="26" ry="20" fill="#C41230" />
            <ellipse cx="20" cy="36" rx="11" ry="14" transform="rotate(-15 20 36)" fill="#C41230" />
            <ellipse cx="42" cy="18" rx="11" ry="14" fill="#C41230" />
            <ellipse cx="62" cy="18" rx="11" ry="14" fill="#C41230" />
            <ellipse cx="84" cy="36" rx="11" ry="14" transform="rotate(15 84 36)" fill="#C41230" />
          </svg>
        ))}
      </div>

      {/* WhatsApp flotante */}
      <a
        className={styles.whatsappFloat}
        href="https://wa.me/50600000000"
        target="_blank"
        rel="noopener"
        aria-label="Escribinos por WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.1-.3.2-.6 0a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.3-1.7c-.2-.3 0-.5.1-.6l.4-.5.3-.4a.5.5 0 0 0 0-.5c-.1-.1-.7-1.6-.9-2.2s-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 6 6 0 0 0 1.3 3.2 13.3 13.3 0 0 0 4.9 4.4c.7.3 1.2.5 1.6.6a3.9 3.9 0 0 0 1.8.1 3 3 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.1-.3-.2-.6-.4z" />
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0 11.9 11.9 0 0 0 1.7 17.8L0 24l6.4-1.7A11.9 11.9 0 0 0 12 24a11.8 11.8 0 0 0 8.5-3.5 11.9 11.9 0 0 0 0-17zM12 21.8a9.7 9.7 0 0 1-5-1.3l-.4-.2-3.8 1 1-3.7-.2-.4A9.8 9.8 0 1 1 21.8 12 9.8 9.8 0 0 1 12 21.8z" />
        </svg>
      </a>

      <Chatbot />
    </>
  );
}

import { useState } from 'react';
import './ContactForm.css';

/**
 * Formulario de contacto del footer (§6.8).
 * PLACEHOLDER: valida con HTML5 y muestra el estado de éxito accesible en cliente.
 * TODO producción: conectar a un servicio de formularios (sin backend) antes del deploy.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Sin envío real todavía — solo transición a estado de éxito.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="cf-exito" role="status">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3cba82"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
        <div>
          <div className="cf-exito-titulo">¡Mensaje enviado!</div>
          <div className="cf-exito-texto">Gracias por escribirnos. Te responderemos muy pronto.</div>
        </div>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={onSubmit} noValidate>
      <input
        className="cf-campo"
        type="text"
        name="nombre"
        required
        placeholder="Tu nombre"
        aria-label="Nombre"
      />
      <input
        className="cf-campo"
        type="email"
        name="correo"
        required
        placeholder="Tu correo electrónico"
        aria-label="Correo electrónico"
      />
      <textarea
        className="cf-campo cf-textarea"
        name="mensaje"
        required
        rows={3}
        placeholder="¿Cómo podemos ayudarte?"
        aria-label="Mensaje"
      />
      <button className="cf-enviar" type="submit">
        Enviar mensaje
      </button>
    </form>
  );
}

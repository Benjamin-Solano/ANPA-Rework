interface Props {
  /** Título de la pestaña / SEO. Se le añade el sufijo de marca. */
  title: string;
  /** Meta description para buscadores y Open Graph. */
  description: string;
  /** Ruta o URL de imagen para Open Graph (opcional). */
  ogImage?: string;
}

/**
 * SEO por página usando el metadata nativo de React 19: los elementos <title>/<meta>
 * renderizados aquí se hoistean automáticamente al <head>. Sustituye al <head> dinámico
 * que antes generaba Base.astro. Nota: al ser SPA, se resuelve en cliente al montar la página.
 */
export default function Seo({ title, description, ogImage = '/og-default.jpg' }: Props) {
  const fullTitle = `${title} · ANPA Costa Rica`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / redes sociales */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="ANPA Costa Rica" />
      <meta property="og:locale" content="es_CR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
}

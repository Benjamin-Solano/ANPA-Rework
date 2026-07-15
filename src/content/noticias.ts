// Colección de noticias / actividad reciente (§6.6), reemplaza la content collection de Astro.
// Cada noticia es un archivo Markdown en src/content/noticias/. Vite las importa como texto crudo
// con import.meta.glob y aquí se parsea su frontmatter (formato plano: clave: valor por línea).

export interface Noticia {
  /** Nombre del archivo sin extensión. */
  slug: string;
  title: string;
  tag: string;
  /** Tono de la etiqueta: rojo o verde. */
  tone: 'rojo' | 'verde';
  /** Fecha de publicación (para ordenar y mostrar). */
  date: Date;
  image: string;
  alt: string;
  excerpt: string;
  /** Cuerpo Markdown (por ahora sin renderizar; disponible para páginas de detalle). */
  body: string;
}

/** Parser mínimo de frontmatter YAML plano (clave: valor, un par por línea). */
function parseFrontmatter(raw: string): { attributes: Record<string, string>; body: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match) return { attributes: {}, body: raw };

  const attributes: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    // Quita comillas envolventes simples o dobles.
    if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
      value = value.slice(1, -1);
    }
    attributes[key] = value;
  }
  return { attributes, body: match[2].trim() };
}

const modules = import.meta.glob('./noticias/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export const noticias: Noticia[] = Object.entries(modules)
  .map(([path, raw]): Noticia => {
    const { attributes, body } = parseFrontmatter(raw);
    const slug = path.split('/').pop()!.replace(/\.md$/, '');
    return {
      slug,
      title: attributes.title ?? '',
      tag: attributes.tag ?? '',
      tone: attributes.tone === 'verde' ? 'verde' : 'rojo',
      date: new Date(attributes.date),
      image: attributes.image ?? '',
      alt: attributes.alt ?? '',
      excerpt: attributes.excerpt ?? '',
      body,
    };
  })
  .sort((a, b) => b.date.getTime() - a.date.getTime());

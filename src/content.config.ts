import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Colección de noticias / actividad reciente (§6.6).
// Cada noticia es un archivo Markdown en src/content/noticias/.
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    /** Categoría visible en la tarjeta (Castración, Educación, Rescate, ...). */
    tag: z.string(),
    /** Tono de la etiqueta: rojo o verde. */
    tone: z.enum(['rojo', 'verde']).default('rojo'),
    /** Fecha de publicación (para ordenar y mostrar). */
    date: z.coerce.date(),
    image: z.string(),
    alt: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { noticias };

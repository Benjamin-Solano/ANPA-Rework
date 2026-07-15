import styles from './NewsCard.module.css';

interface Props {
  title: string;
  tag: string;
  tone: 'rojo' | 'verde';
  date: Date;
  image: string;
  alt: string;
  excerpt: string;
}

const dateFmt = new Intl.DateTimeFormat('es-CR', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export default function NewsCard({ title, tag, tone, date, image, alt, excerpt }: Props) {
  const fecha = dateFmt.format(date);
  const tagBg = tone === 'rojo' ? 'var(--rojo-suave)' : 'var(--verde-suave)';
  const tagFg = tone === 'rojo' ? 'var(--rojo)' : 'var(--verde)';

  return (
    <a className={styles.newsCard} href="#">
      <img className={styles.newsImg} src={image} alt={alt} width="600" height="380" loading="lazy" />
      <div className={styles.newsCuerpo}>
        <div className={styles.newsMeta}>
          <span className={styles.newsTag} style={{ background: tagBg, color: tagFg }}>{tag}</span>
          <span className={styles.newsFecha}>{fecha}</span>
        </div>
        <h3 className={styles.newsTitulo}>{title}</h3>
        <p className={styles.newsExcerpt}>{excerpt}</p>
      </div>
    </a>
  );
}

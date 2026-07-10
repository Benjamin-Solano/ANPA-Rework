import { useState } from 'react';
import './Carousel.css';

export interface Slide {
  label: string;
  img: string;
  alt: string;
}

interface Props {
  slides: Slide[];
}

/** Carrusel "Momentos ANPA" del Home — prev/next + puntos. Isla React por el estado de slide activo. */
export default function Carousel({ slides }: Props) {
  const [i, setI] = useState(0);
  const n = slides.length;
  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <div className="carrusel">
      <div className="carrusel-head">
        <h2 className="carrusel-h2">Momentos ANPA</h2>
        <div className="carrusel-nav">
          <button type="button" className="carrusel-flecha" onClick={prev} aria-label="Anterior">‹</button>
          <button type="button" className="carrusel-flecha" onClick={next} aria-label="Siguiente">›</button>
        </div>
      </div>
      <div className="carrusel-marco">
        <div className="carrusel-pista" style={{ transform: `translateX(-${i * 100}%)` }}>
          {slides.map((s) => (
            <div className="carrusel-slide" key={s.label}>
              <img src={s.img} alt={s.alt} width="1200" height="400" loading="lazy" />
              <div className="carrusel-etiqueta">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="carrusel-puntos">
        {slides.map((s, idx) => (
          <button
            key={s.label}
            type="button"
            className={`carrusel-punto${idx === i ? ' activo' : ''}`}
            onClick={() => setI(idx)}
            aria-label={`Ir a la imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import type { Counter } from '../data/counters';
import './Counters.css';

interface Props {
  counters: Counter[];
}

const fmt = (n: number) => n.toLocaleString('en-US');

/**
 * Isla interactiva de contadores (§6.3).
 * Muestra las cifras reales desde el primer render (sin ceros) y, al entrar en
 * viewport, anima únicamente el incremento desde ~86 % hasta el valor final.
 */
export default function Counters({ counters }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);
  const [values, setValues] = useState<number[]>(() => counters.map((c) => c.target));

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;

    const runCount = () => {
      const targets = counters.map((c) => c.target);
      const start = targets.map((t) => Math.round(t * 0.86));
      const t0 = performance.now();
      const dur = 1200;
      setValues(start);
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        const e = 1 - Math.pow(1 - p, 3); // easing cúbico out
        setValues(targets.map((t, i) => Math.round(start[i] + (t - start[i]) * e)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !animated.current) {
          animated.current = true;
          runCount();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [counters]);

  return (
    <div className="contadores" ref={ref}>
      {counters.map((c, i) => (
        <div className="contador-card" key={c.label}>
          <div
            className="contador-icono"
            aria-hidden="true"
            style={{
              background: c.tone === 'rojo' ? 'var(--rojo-suave)' : 'var(--verde-suave)',
              color: c.tone === 'rojo' ? 'var(--rojo)' : 'var(--verde)',
            }}
            dangerouslySetInnerHTML={{ __html: c.icon }}
          />
          <div className="contador-cifra">{fmt(values[i])}</div>
          <div className="contador-label">{c.label}</div>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ stop = 0, speed = 3000, prefix = '', affix = '' }) {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const startTime = performance.now();
          const target = Number(stop);

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / speed, 1);
            setCount(Math.floor(progress * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasCounted, stop, speed]);

  return (
    <div className="count-box" ref={elementRef}>
      {prefix && <span className="prefix">{prefix}</span>}
      <span className="count-text">{count}</span>
      {affix && <span className="affix">{affix}</span>}
    </div>
  );
}

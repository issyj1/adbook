// src/components/ColourChange.jsx
import React, { useEffect, useRef, useState } from 'react';

export default function ColourChange({ children, backgroundRef }) {
  const ref = useRef(null);
  const [isOverlapping, setIsOverlapping] = useState(false);

  useEffect(() => {
    const checkOverlap = () => {
      if (!ref.current || !backgroundRef.current) return;

      const elementRect = ref.current.getBoundingClientRect();
      const bgRect = backgroundRef.current.getBoundingClientRect();

      const overlap =
        elementRect.bottom > bgRect.top &&
        elementRect.top < bgRect.bottom &&
        elementRect.right > bgRect.left &&
        elementRect.left < bgRect.right;

      setIsOverlapping(overlap);
    };

    window.addEventListener('scroll', checkOverlap, { passive: true });
    window.addEventListener('resize', checkOverlap);

    checkOverlap(); // initial check

    return () => {
      window.removeEventListener('scroll', checkOverlap);
      window.removeEventListener('resize', checkOverlap);
    };
  }, [backgroundRef]);

  return (
    <div
      ref={ref}
      style={{
        transition: 'color 0.3s',
        color: isOverlapping ? 'red' : 'black', // changes color on overlap
      }}
    >
      {children}
    </div>
  );
}

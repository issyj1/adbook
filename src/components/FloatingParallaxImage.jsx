import { useEffect, useRef } from 'react';

export default function Parallax() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', height: '200vh' }}>
      {/* Your parallax element */}
      <div
        ref={parallaxRef}
        className="floating-parallax"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        🌟
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h1>Scroll down to see the parallax</h1>
      </div>
    </div>
  );
}

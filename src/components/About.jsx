import React, { useEffect, useRef } from 'react';

function About() {
  const headingRef = useRef(null);

  useEffect(() => {
    const h2 = headingRef.current;
    if (h2) {
      h2.classList.add('show');
    }
  }, []);

  return (
    <h2 className="slidein" ref={headingRef}>
      Home
    </h2>
  );
}

export default About;
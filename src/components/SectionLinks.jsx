import React from 'react';

function SectionLink({ href, children, className }) {
  return (
    <a href={href} className={className || "default-link"}>
      {children}
    </a>
  );
}

export default SectionLink;
import React from 'react';

function GalleryItem({ imageSrc, altText, tooltipText, linkLabel, onClick }) {
  return (
    <div className="gallery-item" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="tooltip-container rotate-on-hover">
        <img src={imageSrc} alt={altText} className="image" />
        <span className="tooltip-text">{tooltipText}</span>
      </div>
      <div className="text">{linkLabel}</div>
    </div>
  );
}

export default GalleryItem;

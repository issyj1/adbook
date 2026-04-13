// components/Gallery.jsx
import React, { useState } from 'react';
import GalleryItem from './GalleryItem';
import Lightbox from './LightBox';

function Gallery({ projects }) {
  const [lightboxContent, setLightboxContent] = useState(null);
  const [originRect, setOriginRect] = useState(null);

  const openLightbox = (e, contents) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOriginRect(rect);
    setLightboxContent(contents); // Now sending array of content
  };

  const closeLightbox = () => {
    setLightboxContent(null);
    setOriginRect(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-column">
        {projects.map((item) => (
          <GalleryItem
            key={item.id}
            imageSrc={item.imageSrc}
            altText={item.altText}
            tooltipText={item.tooltipText}
            linkLabel={item.title}
            onClick={(e) => openLightbox(e, item.contents)}
          />
        ))}
      </div>

      <Lightbox content={lightboxContent} onClose={closeLightbox} originRect={originRect} />
    </div>
  );
}

export default Gallery;

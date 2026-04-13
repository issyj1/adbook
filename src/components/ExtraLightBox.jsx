// src/components/ExtraLightbox.js
import React from 'react';
import './ExtraLightbox.css'; // styling for pink background etc.

export default function ExtraLightbox({ title, contents, onClose }) {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="project-gallery extra-lightbox"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close-btn-top" onClick={onClose}>×</button>

        {title && <h2 className="lightbox-title">{title}</h2>}

        {contents.map((item, index) => {
          if (item.type === 'image') {
            return (
              <img
                key={index}
                src={item.src}
                alt={item.alt || ''}
                style={{ width: '100%', maxWidth: 600, marginBottom: '1rem' }}
              />
            );
          }
          if (item.type === 'video') {
            return (
              <video
                key={index}
                controls
                style={{ width: '100%', maxWidth: 600, marginBottom: '1rem' }}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          }
          if (item.type === 'text') {
            return (
              <p key={index} className="lightbox-text">
                {item.text}
              </p>
            );
          }
          if (item.type === 'html') {
            return (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: item.html }}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

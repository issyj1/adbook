import React from 'react';

export default function Lightbox({ title, contents, originRect, onClose, extraClass = '' }) {
  return (
    <div className={`lightbox-overlay ${extraClass}`} onClick={onClose}>
      <div
        className={`project-gallery ${extraClass}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          transformOrigin: originRect
            ? `${originRect.left + originRect.width / 2}px ${originRect.top + originRect.height / 2}px`
            : 'center top',
        }}
      >
        <button className="lightbox-close-btn-top" onClick={onClose}>×</button>
        {title && <h2 className="lightbox-title">{title}</h2>}

        {contents.map((item, index) => {
          if (item.type === 'image') {
            return (
              <img
                key={index}
                src={item.src.startsWith('/')
                  ? process.env.PUBLIC_URL + item.src
                  : item.src}
                alt={item.alt || ''}
                style={{ width: '100%', maxWidth: 600, marginBottom: '1rem' }}
              />
            );
          }
          if (item.type === 'video') {
            return item.src.includes('youtube.com/embed') ? (
              <div key={index} className="video-container" style={{ marginBottom: '1rem' }}>
                <iframe
                  width="560"
                  height="315"
                  src={item.src}
                  title={item.alt || 'YouTube video'}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ width: '100%', maxWidth: 600 }}
                />
              </div>
            ) : (
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
            return <p key={index} className="lightbox-text">{item.text}</p>;
          }
          if (item.type === 'html') {
            return (
              <div
                key={index}
                className="lightbox-html"
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

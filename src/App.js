import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import ExpandableIntro from "./components/ExpandableIntro";
import MyMasonryComponent from "./components/MyMasonry";
import Lightbox from "./components/LightBox";
import ButtonGroup from "./components/ButtonGroup";
import { projects, extraLightboxes, bottomButtons } from './data';
import tiger from "./assets/img/tiger.png";

function App() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [originRect, setOriginRect] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const allItems = [...projects, ...extraLightboxes, ...bottomButtons];

  const projectLinksRef = useRef(null);

 

  const handleClick = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setOriginRect(rect);
    setActiveProjectId(prev => (prev === id ? null : id));
  };

  const current = allItems.find(item => item.id === activeProjectId);
  const extraClass = extraLightboxes.some(extra => extra.id === activeProjectId)
    ? 'extra-lightbox'
    : bottomButtons.some(bottom => bottom.id === activeProjectId)
      ? 'bottom-lightbox'
      : '';


      
      const ijRef = useRef(null);


  
const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="app-container">

<MyMasonryComponent></MyMasonryComponent>
      {/* Huge IJ background */}
       {/* ------------------ Masonry & Extra Buttons ------------------ */}
      
       <ButtonGroup
        buttons={extraLightboxes}
        onClick={handleClick}
        className="extra-buttons"
        buttonClassName="extra-trigger-button"
      />

      {/* ------------------ Lightbox ------------------ */}
      {current && (
        <Lightbox
          title={current.title}
          contents={current.contents}
          originRect={originRect}
          onClose={() => setActiveProjectId(null)}
          extraClass={extraClass}
        />
      )}

      <img className="ij" src="/adbook/img/Assets/ij2.png" alt="ij" />
      <div className="h2-container">

<h4>Advertising Folio</h4>
</div>

      {/* Conditional Background IJ */}
     
    
      {/* Main content */}
 {/* ------------------ Intro Section ------------------ */}


<div className="background">

      <div className="content">

      {/* ------------------ Projects Section ------------------ */}
      <div className="project-links" ref={projectLinksRef}>
        {projects.map(project => {
          const firstImage = project.contents.find(item => item.type === "image")?.src;
          return (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="project-link-item"
              style={{ position: 'relative' }}
            >
              <button
                className="project-title-button"
                onClick={(e) => {
                  if (project.id === 12) {
                    window.open(
                      "https://www.dailymail.co.uk/sciencetech/article-11789971/EE-smart-billboards-guide-clubbers-home-nights-Manchester.html",
                      "_blank",
                      "noopener,noreferrer"
                    );
                    return;
                  }
                
                  handleClick(e, project.id);
                }}              >
                {project.title} <span>&#8595;</span>
              </button>

              {hoveredProjectId === project.id && firstImage && (
                <img
                  src={firstImage}
                  alt={project.title}
                  className="project-hover-preview"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '120%',
                    width: '200px',
                    border: '2px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    zIndex: 1000,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
   
</div>
    </div>

   
{/* Example: slow-scrolling photos */}

     

      {/* ------------------ Footer Images ------------------ */}
      <div className="h2-container">

      <h4>My other sites:</h4>
</div>
      <a href="https://isabellejohnsonphoto.com" target="_blank" rel="noopener noreferrer">
    <img className="links" src="/adbook/img/Assets/photo.png" alt="ij" />
</a>
      <br />
      <a href="https://newworldcreative.studio" target="_blank" rel="noopener noreferrer">
  <img className="links" src="/adbook/img/Assets/studio.png" alt="ij" />
</a>
      
<p className="footer">Bespoke build by Isabelle Johnson at newworldcreative.studio </p>
    </div>
  );
}

export default App;

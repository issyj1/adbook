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
<p className="background-ij"></p>

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

<h4>Advertising Folio</h4>

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
<p className="text2">
    Hi, I'm Isabelle (or Issy) and I'm a creative.
I’ve been lucky enough to work with some of the business's biggest brands and awarded agencies including Mother, Saatchi & Saatchi and BETC Paris, plus running my own creative studio for the past 2 years.

I’m a cultural sponge who aspires to Jack Dee’s sense of humour and always carries a Sakura Pigma Micron 02 fineliner. In my previous life before advertising I worked at Vogue Paris which was full of very serious people, so I decided to be silly for a living. I have a sharp radar for bullshit – especially my own.
Having graduated from UCL, I speak multiple languages and also work as a photographer inside and outside of adland.
I attended School of Communication Arts 2.0 2019/20 with a scholarship.

{/* Example: slow-scrolling photos */}

</p>

      {/* ------------------ Footer Images ------------------ */}
      <img className="img3" src="/adbook/img/meart.jpg" alt="Me" />
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

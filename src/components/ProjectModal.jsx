import { useState, useEffect } from 'react';
import { X, Layers, Box, Cpu, Sparkles, ZoomIn, Eye, RotateCcw } from 'lucide-react';

function ProjectModal({ project, isOpen, onClose }) {
  const [activePass, setActivePass] = useState('final');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxImage) setLightboxImage(null);
        else onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActivePass('final');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, lightboxImage]);

  if (!isOpen || !project) return null;

  const currentWipImage = project.wipPasses
    ? project.wipPasses[activePass] || project.heroImage
    : project.heroImage;

  return (
    <div
      className="modalBackdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="projectModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="projectModalHeader">
          <div className="projectHeaderMeta">
            <span className="projectCategoryBadge">{project.category}</span>
            <span className="projectYearBadge">{project.year}</span>
            {project.client && (
              <span className="projectClientBadge">Client: {project.client}</span>
            )}
          </div>
          <button
            onClick={onClose}
            className="modalCloseBtn"
            aria-label="Close project modal"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="projectModalBody">
          <div className="wipViewportContainer">
            <div className="wipImageFrame">
              <img
                src={currentWipImage}
                alt={`${project.title} - ${activePass} pass`}
                className="wipActiveImg"
                loading="eager"
              />
              <div className="activePassOverlay">
                <span className="activePassPill">Pass: {activePass.toUpperCase()}</span>
                {project.polycount && (
                  <span className="polycountPill">{project.polycount}</span>
                )}
              </div>
            </div>

            <div className="wipPassSelector">
              <div className="wipPassSelectorLabel">
                <Layers size={15} aria-hidden="true" />
                <span>Render Passes:</span>
              </div>
              <div className="passButtonsGroup">
                <button
                  className={`passBtn ${activePass === 'final' ? 'active' : ''}`}
                  onClick={() => setActivePass('final')}
                >
                  <Sparkles size={14} aria-hidden="true" />
                  <span>Final Comp (4K)</span>
                </button>
                <button
                  className={`passBtn ${activePass === 'clay' ? 'active' : ''}`}
                  onClick={() => setActivePass('clay')}
                >
                  <Box size={14} aria-hidden="true" />
                  <span>Clay / MatCap Sculpt</span>
                </button>
                <button
                  className={`passBtn ${activePass === 'wireframe' ? 'active' : ''}`}
                  onClick={() => setActivePass('wireframe')}
                >
                  <Cpu size={14} aria-hidden="true" />
                  <span>Wireframe & Topology</span>
                </button>
                <button
                  className={`passBtn ${activePass === 'lighting' ? 'active' : ''}`}
                  onClick={() => setActivePass('lighting')}
                >
                  <Eye size={14} aria-hidden="true" />
                  <span>Lighting & AO Pass</span>
                </button>
              </div>
            </div>
          </div>

          <div className="projectOverviewGrid">
            <div className="projectMainInfo">
              <h1 id="project-modal-title" className="projectTitleLarge">
                {project.title}
              </h1>

              <div className="projectRoleBlock">
                <span className="roleLabel">Artist Roles:</span>
                <span className="roleValue">{project.role}</span>
              </div>

              <div className="projectSection">
                <h3 className="projectSectionTitle">Project Overview</h3>
                <p className="projectParagraph">{project.overview}</p>
              </div>

              <div className="projectSection">
                <h3 className="projectSectionTitle">Concept, Reference & Moodboard</h3>
                <p className="projectParagraph">{project.conceptBrief}</p>
              </div>
            </div>

            <div className="projectSpecsSidebar">
              <div className="specsCard">
                <h4>Pipeline & Software</h4>
                <div className="softwarePillList">
                  {project.software.map((sw, i) => (
                    <span key={i} className="softwarePill">
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              {project.textureSets && (
                <div className="specsCard">
                  <h4>Texture Sets & Materials</h4>
                  <p className="specsText">{project.textureSets}</p>
                </div>
              )}

              <div className="specsCard">
                <h4>Interactive Turntable</h4>
                <div className="turntableNotice">
                  <RotateCcw size={16} aria-hidden="true" />
                  <span>360° Studio Turntable Available for Production Review</span>
                </div>
              </div>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="projectGallerySection">
              <div className="sectionHeaderWithCount">
                <h3 className="projectSectionTitle">Final 4K Renders Gallery</h3>
                <span className="galleryCount">{project.gallery.length} High-Res Angles</span>
              </div>
              <p className="gallerySubtext">Click any render to inspect full-resolution details</p>
              
              <div className="galleryGrid">
                {project.gallery.map((item, index) => (
                  <div
                    key={index}
                    className="galleryItemCard"
                    onClick={() => setLightboxImage(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') setLightboxImage(item);
                    }}
                    title="Click to zoom in 4K"
                  >
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="galleryThumbnail"
                      loading="lazy"
                    />
                    <div className="galleryHoverOverlay">
                      <ZoomIn size={22} aria-hidden="true" />
                      <span>Zoom 4K</span>
                    </div>
                    <span className="galleryItemCaption">{item.caption}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {lightboxImage && (
          <div
            className="lightboxBackdrop"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightboxCloseBtn"
                onClick={() => setLightboxImage(null)}
                aria-label="Close zoom preview"
              >
                <X size={24} />
              </button>
              <img
                src={lightboxImage.url}
                alt={lightboxImage.caption}
                className="lightboxImg"
              />
              <p className="lightboxCaption">{lightboxImage.caption}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;

import { useEffect } from 'react';
import { X, Play, Clock, Sparkles } from 'lucide-react';
import { SHOWREEL_DATA } from '../data/portfolioData';

function ShowreelModal({ isOpen, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modalBackdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="showreel-title"
    >
      <div className="showreelModalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div className="showreelMeta">
            <span className="showreelBadge">
              <Sparkles size={14} aria-hidden="true" />
              <span>CGI & Animation Reel</span>
            </span>
            <h2 id="showreel-title" className="showreelTitle">
              {SHOWREEL_DATA.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="modalCloseBtn"
            aria-label="Close showreel modal"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="showreelGrid">
          <div className="videoPlayerWrapper">
            <div className="videoResponsiveContainer">
              <iframe
                src={SHOWREEL_DATA.embedSrc}
                title="3D Animation & CGI Showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="showreelIframe"
              ></iframe>
            </div>
            <div className="videoSpecsBar">
              <span>Resolution: {SHOWREEL_DATA.resolution}</span>
              <span>•</span>
              <span>Length: {SHOWREEL_DATA.duration}</span>
              <span>•</span>
              <span>Color Pipeline: ACEScg</span>
            </div>
          </div>

          <div className="showreelSidebar">
            <div className="sidebarHeader">
              <Clock size={16} aria-hidden="true" />
              <h3>Projects in this Reel</h3>
            </div>
            <p className="sidebarNote">Click any sequence to inspect breakdown & renders:</p>
            <div className="featuredProjectsList">
              {SHOWREEL_DATA.featuredProjects.map((item, idx) => (
                <button
                  key={idx}
                  className="featuredProjectItem"
                  onClick={() => {
                    if (onSelectProject) {
                      onSelectProject(item.title);
                    }
                  }}
                  title={`Inspect ${item.title}`}
                >
                  <div className="timestampBadge">
                    <Play size={10} aria-hidden="true" />
                    <span>{item.time}</span>
                  </div>
                  <div className="featuredProjectInfo">
                    <span className="featuredProjectTitle">{item.title}</span>
                    <span className="featuredProjectCategory">{item.category}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowreelModal;

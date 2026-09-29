import { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Box, Server, Database, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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

  if (!isOpen || !project) return null;

  return (
    <div
      className="modalBackdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="projectModalContent" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="projectModalHeader">
          <div className="projectHeaderMeta">
            <span className="projectCategoryBadge">{project.category}</span>
            <span className="projectClientBadge">Full Stack System</span>
          </div>
          <button
            onClick={onClose}
            className="modalCloseBtn"
            aria-label="Close project modal"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        {/* Body */}
        <div className="projectModalBody">
          {/* Main Screenshot Viewport */}
          <div className="wipViewportContainer">
            <div className="wipImageFrame">
              <picture>
                <source srcSet={project.imageWebp} type="image/webp" />
                <img
                  src={project.imagePng}
                  alt={project.title}
                  className="wipActiveImg"
                />
              </picture>
              <div className="activePassOverlay">
                <span className="activePassPill">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="projectOverviewGrid">
            <div className="projectMainInfo">
              <h1 id="project-modal-title" className="projectTitleLarge">
                {project.title}
              </h1>

              <div className="projectSection">
                <h3 className="projectSectionTitle">Project Overview</h3>
                <p className="projectParagraph">{project.overview || project.description}</p>
              </div>

              <div className="projectSection">
                <h3 className="projectSectionTitle">Key Architectural Features</h3>
                <div className="modalHighlightsList">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="modalHighlightItem">
                      <CheckCircle size={16} className="textEmerald" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.architecture && (
                <div className="projectSection">
                  <h3 className="projectSectionTitle">System Architecture Stack</h3>
                  <div className="architectureCard">
                    <code>{project.architecture}</code>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Details */}
            <div className="projectSpecsSidebar">
              <div className="specsCard">
                <h4>Technologies Used</h4>
                <div className="softwarePillList">
                  {project.tech.map((t) => (
                    <span key={t} className="softwarePill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="specsCard">
                <h4>Source Repository</h4>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary fullWidth"
                >
                  <FaGithub size={16} />
                  <span>View Code on GitHub</span>
                </a>
              </div>

              <div className="specsCard">
                <h4>Live Deployment Status</h4>
                <p className="specsText">
                  Internal enterprise application. Code walkthrough and database schema demonstration available upon interview request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;

import { useState } from 'react';
import { CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, Layers, CheckCircle, Eye, ArrowUpRight, Box } from 'lucide-react';

function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section projectsSection" aria-label="Featured Projects">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Box size={14} aria-hidden="true" />
          <span>FEATURED WORK</span>
        </div>
        <h2 className="sectionTitle">Recent Full Stack Projects</h2>
        <p className="sectionSubtitle">
          Production-grade applications engineered with React.js, Python Flask, PHP Laravel, and MySQL. Click any project to inspect technical architecture and details.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="categoryFilterContainer" role="tablist" aria-label="Project filter categories">
        {CATEGORIES.map((cat) => {
          const count =
            cat === 'All'
              ? PROJECTS_DATA.length
              : PROJECTS_DATA.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`categoryTabBtn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              <span>{cat}</span>
              <span className="categoryCountBadge">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="projectsGridContainer">
        {filteredProjects.map((project, idx) => (
          <article
            className="projectCard revealOnScroll"
            key={project.id}
            style={{ animationDelay: `${idx * 0.1}s` }}
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
          >
            {/* Project Image Viewport */}
            <div
              className="projectThumbWrapper"
              onClick={() => onSelectProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectProject(project);
              }}
              title="Click to view detailed architecture"
            >
              <picture>
                <source srcSet={project.imageWebp} type="image/webp" />
                <img
                  src={project.imagePng}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="340"
                  className={`projectThumbImg ${
                    hoveredProjectId === project.id ? 'hovered' : ''
                  }`}
                />
              </picture>

              <div className="thumbTopBar">
                <span className="thumbCategoryBadge">{project.category}</span>
              </div>

              <div className="thumbHoverPrompt">
                <span className="inspectPill">
                  <Eye size={15} aria-hidden="true" />
                  <span>Inspect Architecture & Details</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </div>
            </div>

            {/* Project Card Content */}
            <div className="projectCardDetails">
              <h3
                className="projectCardTitle clickableTitle"
                onClick={() => onSelectProject(project)}
              >
                {project.title}
              </h3>
              <p className="projectCardSnippet">{project.description}</p>

              {/* Project Highlights */}
              <div className="projectHighlights">
                {project.highlights.map((h) => (
                  <div key={h} className="projectHighlightItem">
                    <CheckCircle size={13} className="highlightCheck" aria-hidden="true" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="projectSoftwareBadges">
                {project.tech.map((t) => (
                  <span key={t} className="miniSoftwareTag">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="projectLinksRow">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary smBtn"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  <FaGithub size={15} aria-hidden="true" />
                  <span>View Code</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="btn primary smBtn"
                >
                  <Eye size={15} aria-hidden="true" />
                  <span>Details</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

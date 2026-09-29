import { useState } from 'react';
import { CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';
import { Eye, ArrowUpRight, Box } from 'lucide-react';

function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All Work');
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const filteredProjects =
    activeCategory === 'All Work'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section projectsSection" aria-label="3D Portfolio Projects">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Box size={14} aria-hidden="true" />
          <span>PORTFOLIO SHOWCASE</span>
        </div>
        <h2 className="sectionTitle">Selected 3D CGI & Animation Work</h2>
        <p className="sectionSubtitle">
          Explore production-grade 3D projects across game cinematics, hard-surface modeling, environment architecture, and commercial product visualization.
        </p>
      </div>

      <div className="categoryFilterContainer" role="tablist" aria-label="Project Categories">
        {CATEGORIES.map((category) => {
          const count =
            category === 'All Work'
              ? PROJECTS_DATA.length
              : PROJECTS_DATA.filter((p) => p.category === category).length;

          return (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              className={`categoryTabBtn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              <span>{category}</span>
              <span className="categoryCountBadge">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="projectsGridContainer">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="projectCard revealOnScroll"
            style={{ animationDelay: `${idx * 0.08}s` }}
            onClick={() => onSelectProject(project)}
            onMouseEnter={() => setHoveredProjectId(project.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSelectProject(project);
            }}
            aria-label={`Open project details for ${project.title}`}
          >
            <div className="projectThumbWrapper">
              <img
                src={project.heroImage}
                alt={project.title}
                className={`projectThumbImg ${
                  hoveredProjectId === project.id ? 'hovered' : ''
                }`}
                loading="lazy"
              />

              <div
                className={`hoverGifOverlay ${
                  hoveredProjectId === project.id ? 'visible' : ''
                }`}
                style={{
                  backgroundImage: `url(${project.hoverGif || project.heroImage})`
                }}
              ></div>

              <div className="thumbTopBar">
                <span className="thumbCategoryBadge">{project.category}</span>
                <span className="thumbYearBadge">{project.year}</span>
              </div>

              <div className="thumbHoverPrompt">
                <span className="inspectPill">
                  <Eye size={15} aria-hidden="true" />
                  <span>Inspect WIP & 4K Renders</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </span>
              </div>
            </div>

            <div className="projectCardDetails">
              <div className="projectCardTitleRow">
                <h3 className="projectCardTitle">{project.title}</h3>
              </div>

              <p className="projectCardSnippet">{project.overview}</p>

              <div className="projectSoftwareBadges">
                {project.software.slice(0, 3).map((sw, i) => (
                  <span key={i} className="miniSoftwareTag">
                    {sw}
                  </span>
                ))}
                {project.software.length > 3 && (
                  <span className="miniSoftwareTag more">
                    +{project.software.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

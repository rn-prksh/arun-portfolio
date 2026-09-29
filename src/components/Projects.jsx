import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, Layers, CheckCircle } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Hostel & Hall Ticket Management System',
    category: 'React & Flask',
    tech: ['React.js', 'Python Flask', 'MySQL', 'JWT', 'REST APIs'],
    description:
      'A multi-role enterprise web application connecting Students, Faculty Staff, Admin, and Hostel Wardens with an automated hall ticket clearance workflow, live status tracking, and secure RESTful endpoints.',
    imageWebp: '/images/hostel_mgmt.webp',
    imagePng: '/images/hostel_mgmt.png',
    github: 'https://github.com/rn-prksh',
    demo: null,
    highlights: ['Multi-role RBAC permissions', 'Hall ticket clearance workflow', 'JWT authentication'],
  },
  {
    id: 2,
    title: 'Industrial Management System',
    category: 'Laravel & PHP',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'MVC'],
    description:
      'An end-to-end industrial manufacturing platform engineered to track dye and mold production processes, tooling lifecycles, and machine job allocations with relational database integrity.',
    imageWebp: '/images/industrial.webp',
    imagePng: '/images/industrial.png',
    github: 'https://github.com/rn-prksh/industrial-management-system',
    demo: null,
    highlights: ['Dye & mold lifecycle tracking', 'Full CRUD operations', 'Clean MVC architecture'],
  },
  {
    id: 3,
    title: 'Task Management System',
    category: 'React & Flask',
    tech: ['React.js', 'CodeIgniter', 'MySQL', 'Firebase', 'OAuth 2.0'],
    description:
      'A streamlined productivity and task collaboration system featuring multi-provider authentication with Google OAuth, Zoho OAuth, and Firebase Auth for unified account access.',
    imageWebp: '/images/task.webp',
    imagePng: '/images/task.png',
    github: 'https://github.com/rn-prksh',
    demo: null,
    highlights: ['Google & Zoho OAuth 2.0', 'Firebase token validation', 'Responsive task boards'],
  },
];

const categories = ['All', 'React & Flask', 'Laravel & PHP'];

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="sectionTitle">
        <p>Featured Work</p>
        <h2>Recent Projects</h2>
      </div>

      {/* Filter Tabs */}
      <div className="filterTabs" role="tablist" aria-label="Project filter categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeFilter === cat}
            className={`filterBtn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projectsGrid">
        {filteredProjects.map((project) => (
          <article className="projectCard" key={project.id}>
            <div className="projectImageContainer">
              <picture>
                <source srcSet={project.imageWebp} type="image/webp" />
                <img
                  src={project.imagePng}
                  alt={`Screenshot of ${project.title}`}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="340"
                  className="projectImg"
                />
              </picture>
              <div className="projectCategoryBadge">
                <Layers size={13} aria-hidden="true" />
                <span>{project.category}</span>
              </div>
            </div>

            <div className="projectBody">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDesc">{project.description}</p>

              <div className="projectHighlights">
                {project.highlights.map((h) => (
                  <div key={h} className="projectHighlightItem">
                    <CheckCircle size={13} className="highlightCheck" aria-hidden="true" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="techTags" aria-label="Technologies used">
                {project.tech.map((item) => (
                  <span key={item} className="techTag">
                    {item}
                  </span>
                ))}
              </div>

              <div className="projectLinks">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLinkBtn primaryLink"
                  aria-label={`View source code for ${project.title} on GitHub`}
                >
                  <FaGithub size={16} aria-hidden="true" />
                  <span>View Code</span>
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLinkBtn secondaryLink"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <ExternalLink size={15} aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="demoBadge" title="Available for live walkthrough or code review">
                    Internal System / Demo on Request
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

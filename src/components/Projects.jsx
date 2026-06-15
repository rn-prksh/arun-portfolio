const projects = [
  {
    title: 'Hostel & Hall Ticket Management System',
    tech: ['React.js', 'Flask', 'MySQL', 'JWT'],
    description:
      'Developed a multi-role platform for Students, Staff, Admin and Hostel Admin with hall ticket approval workflow, REST APIs and MySQL connectivity.',
    image: '/images/hostel_mgmt.png',
    github: '#',
    demo: '#'
  },
  {
    title: 'Industrial Management System',
    tech: ['Laravel', 'MySQL'],
    description:
      'Built a web application to track dye and mold production processes end-to-end with user authentication and database integration.',
    image: '/images/industrial.png',
    github: 'https://github.com/rn-prksh/industrial-management-system',
    demo: '#'
  },
  {
    title: 'Task Management System',
    tech: ['React.js', 'CodeIgniter', 'MySQL', 'Firebase', 'OAuth'],
    description:
      'Implemented Google OAuth, Zoho OAuth and Firebase Authentication for secure user access with REST API integration.',
    image: 'images/task.png',
    github: '#',
    demo: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="sectionTitle">
        <p>Projects</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div className="projectCard" key={project.title}>
            <div className="projectImage">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="projectPlaceholder">
                  Project Screenshot {index + 1}
                </div>
              )}
            </div>

            <div className="projectBody">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="techTags">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="projectLinks">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="note">
        Image blank irukkura place la project screenshot add pannalam.
      </p>
    </section>
  );
}

export default Projects;

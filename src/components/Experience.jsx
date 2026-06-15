const experiences = [
  {
    role: 'Software Intern – Python Flask Full Stack Developer',
    company: 'DCE Technology, Virudhunagar',
    period: 'Jul 2025 – Mar 2026',
    points: [
      'Developed full-stack web applications using Python, Flask and MySQL.',
      'Built RESTful APIs and integrated frontend applications with Flask backend services.',
      'Implemented JWT Authentication, database design and deployment best practices.'
    ]
  },
  {
    role: 'Software Intern – Full Stack Development (Laravel)',
    company: 'DCE Technology, Virudhunagar',
    period: 'Sep 2024 – Apr 2025',
    points: [
      'Completed a 7-month internship in full stack web development using Laravel.',
      'Developed and maintained modules using MVC Architecture.',
      'Implemented database integration and user authentication features.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="sectionTitle">
        <p>Experience</p>
        <h2>Internship Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timelineItem" key={exp.role}>
            <div className="dot"></div>
            <div className="timelineCard">
              <div className="timelineHeader">
                <h3>{exp.role}</h3>
                <span>{exp.period}</span>
              </div>
              <p className="company">{exp.company}</p>
              <ul>
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

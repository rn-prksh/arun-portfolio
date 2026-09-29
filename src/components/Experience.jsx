import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Software Intern – Python Flask Full Stack Developer',
    company: 'DCE Technology',
    location: 'Virudhunagar, India',
    period: 'Jul 2025 – Mar 2026',
    duration: '9 mos',
    badge: 'Python / Flask Stack',
    points: [
      'Architected and developed full-stack web applications using Python, Flask framework, and MySQL database.',
      'Designed and engineered scalable RESTful APIs connecting interactive React.js client interfaces to backend microservices.',
      'Implemented robust JWT-based Authentication, role-based access control, relational database schema optimization, and security best practices.',
    ],
    tech: ['Python', 'Flask', 'React.js', 'MySQL', 'JWT', 'REST APIs', 'Postman'],
  },
  {
    role: 'Software Intern – Full Stack Development (Laravel)',
    company: 'DCE Technology',
    location: 'Virudhunagar, India',
    period: 'Sep 2024 – Apr 2025',
    duration: '7 mos',
    badge: 'Laravel / PHP Stack',
    points: [
      'Completed an intensive 7-month full stack software engineering internship focused on PHP and Laravel framework.',
      'Developed and maintained modular web applications following clean MVC (Model-View-Controller) architecture standards.',
      'Integrated relational MySQL databases, implemented secure session-based authentication, and created automated workflows.',
    ],
    tech: ['PHP', 'Laravel', 'MySQL', 'MVC Architecture', 'Blade', 'Git'],
  },
];

function Experience() {
  return (
    <section id="experience" className="section" aria-label="Work Experience">
      <div className="sectionTitle">
        <p>Career Journey</p>
        <h2>Internship Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div className="timelineItem" key={exp.role}>
            <div className="timelineMarker" aria-hidden="true">
              <div className="dot"></div>
              <div className="timelineLine"></div>
            </div>

            <div className="timelineCard">
              <div className="timelineHeader">
                <div>
                  <div className="timelineRoleWrap">
                    <h3>{exp.role}</h3>
                    <span className="expBadge">{exp.badge}</span>
                  </div>
                  <div className="timelineMeta">
                    <span className="company">
                      <Briefcase size={14} aria-hidden="true" />
                      {exp.company}
                    </span>
                    <span className="location">
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="periodWrap">
                  <Calendar size={14} aria-hidden="true" />
                  <span>{exp.period}</span>
                  <span className="durationBadge">({exp.duration})</span>
                </div>
              </div>

              <ul className="timelinePoints">
                {exp.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} className="pointIcon" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="expTechTags">
                {exp.tech.map((t) => (
                  <span key={t} className="techPill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;

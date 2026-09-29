import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="section experienceSection" aria-label="Work Experience">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Briefcase size={14} aria-hidden="true" />
          <span>CAREER JOURNEY</span>
        </div>
        <h2 className="sectionTitle">Internship Experience</h2>
        <p className="sectionSubtitle">
          1+ years of structured full stack software engineering experience with DCE Technology, contributing to real-world production web applications.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div className="timelineItem revealOnScroll" key={exp.role}>
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

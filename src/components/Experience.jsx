import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Calendar, MapPin, Briefcase, CheckCircle2, Sparkles } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="section experienceSection" aria-label="Work Experience">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Briefcase size={14} aria-hidden="true" />
          <span>CAREER JOURNEY</span>
        </div>
        <h2 className="sectionTitle">Professional Experience</h2>
        <p className="sectionSubtitle">
          Currently working as a Web Developer at WARX Digital Pvt Ltd with a foundation of 1+ years of software engineering internships at DCE Technology.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <div className={`timelineItem revealOnScroll ${exp.isCurrent ? 'currentTimelineItem' : ''}`} key={exp.role}>
            <div className="timelineMarker" aria-hidden="true">
              <div className={`dot ${exp.isCurrent ? 'currentDot' : ''}`}></div>
              <div className="timelineLine"></div>
            </div>

            <div className={`timelineCard ${exp.isCurrent ? 'activeRoleCard' : ''}`}>
              <div className="timelineHeader">
                <div>
                  <div className="timelineRoleWrap">
                    <h3>{exp.role}</h3>
                    <span className={`expBadge ${exp.isCurrent ? 'currentExpBadge' : ''}`}>
                      {exp.isCurrent && <span className="pulseGreen" aria-hidden="true"></span>}
                      {exp.badge}
                    </span>
                  </div>
                  <div className="timelineMeta">
                    <span className="company">
                      <Briefcase size={14} aria-hidden="true" />
                      <strong>{exp.company}</strong>
                    </span>
                    <span className="location">
                      <MapPin size={14} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className={`periodWrap ${exp.isCurrent ? 'currentPeriodWrap' : ''}`}>
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
                  <span key={t} className={`techPill ${exp.isCurrent ? 'currentTechPill' : ''}`}>
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

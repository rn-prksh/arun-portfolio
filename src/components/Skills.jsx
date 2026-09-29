import { SKILLS_DATA } from '../data/portfolioData';
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Terminal
} from 'lucide-react';

const iconMap = {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Wrench,
  Terminal
};

function Skills() {
  return (
    <section id="skills" className="section skillsSection" aria-label="Technical Skills">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Code2 size={14} aria-hidden="true" />
          <span>TECHNICAL EXPERTISE</span>
        </div>
        <h2 className="sectionTitle">Skills & Technologies</h2>
        <p className="sectionSubtitle">
          Production-proven technical skills developed across frontend design systems, backend REST APIs, relational databases, and secure authentication protocols.
        </p>
      </div>

      <div className="skillsGrid">
        {SKILLS_DATA.map((group) => {
          const Icon = iconMap[group.icon] || Code2;
          return (
            <div className="skillCard revealOnScroll" key={group.title}>
              <div className="skillCardHeader">
                <div className="skillIconWrap" aria-hidden="true">
                  <Icon size={20} />
                </div>
                <div className="skillTitleGroup">
                  <h3>{group.title}</h3>
                  <span className="skillProficiencyPercent">{group.level}% Proficiency</span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="progressTrack" role="progressbar" aria-valuenow={group.level} aria-valuemin="0" aria-valuemax="100">
                <div className="progressBar" style={{ width: `${group.level}%` }}></div>
              </div>

              {/* Skill Tags */}
              <div className="skillTags">
                {group.skills.map((skill) => (
                  <span className="skillTag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

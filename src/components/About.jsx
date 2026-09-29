import { useState } from 'react';
import {
  PORTFOLIO_INFO,
  ABOUT_HIGHLIGHTS,
  DEV_ENVIRONMENT
} from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Terminal,
  Cpu,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  Experience: Briefcase,
  Academics: GraduationCap,
  "Tech Stack": Code2,
  Status: Award
};

function About() {
  return (
    <section id="about" className="section aboutSection" aria-label="About Arun Prakash V">
      <div className="sectionHeader">
        <div className="sectionTag">
          <Terminal size={14} aria-hidden="true" />
          <span>PROFILE OVERVIEW</span>
        </div>
        <h2 className="sectionTitle">Engineering With Passion & Purpose</h2>
        <p className="sectionSubtitle">
          A dedicated Full Stack Developer with hands-on enterprise internship experience, building performant web applications with modern frontend and backend architectures.
        </p>
      </div>

      <div className="aboutMainGrid">
        {/* Left: Studio Portrait Card with Viewport Frame */}
        <div className="artistBioCard revealOnScroll">
          <div className="artistAvatarWrapper">
            <div className="avatarBoundingBox" aria-hidden="true">
              <span className="corner tl"></span>
              <span className="corner tr"></span>
              <span className="corner bl"></span>
              <span className="corner br"></span>
            </div>
            <picture>
              <source srcSet="/images/profile.webp" type="image/webp" />
              <img
                src="/images/profile.png"
                alt="Arun Prakash V - Full Stack Developer"
                className="artistPortraitImg"
                width="360"
                height="360"
              />
            </picture>
            <div className="avatarStatusPill">
              <span className="pulseGreen"></span>
              <span>Ready for Immediate Deployment</span>
            </div>
          </div>

          <div className="artistCardBio">
            <h3 className="artistNameHeading">{PORTFOLIO_INFO.name}</h3>
            <p className="artistTitleSub">{PORTFOLIO_INFO.title}</p>
            <p className="artistBioText">
              I am a <strong>B.Sc. Information Technology graduate</strong> from VHNSN College, Virudhunagar, with over a year of immersive full stack web development internship experience at <strong>DCE Technology</strong>.
            </p>
            <p className="artistBioText">
              My engineering expertise spans both frontend and backend domains: creating performant interfaces in <strong>React.js</strong> and engineering robust, secure RESTful backends using <strong>Python Flask</strong> and <strong>PHP Laravel</strong> backed by optimized <strong>MySQL</strong> databases.
            </p>

            <div className="availabilityList">
              <div className="availabilityItem">
                <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                <span>Full-time Full Stack Developer Roles</span>
              </div>
              <div className="availabilityItem">
                <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                <span>Backend API & Microservices Engineering</span>
              </div>
              <div className="availabilityItem">
                <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                <span>Frontend React.js SPA Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Credentials Highlights */}
        <div className="aboutRightCol">
          <div className="highlightsGrid revealOnScroll">
            {ABOUT_HIGHLIGHTS.map((item) => {
              const Icon = iconMap[item.category] || Code2;
              return (
                <div className="highlightCard" key={item.title}>
                  <div className="highlightIcon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="highlightContent">
                    <span className="highlightValue">{item.value}</span>
                    <h3 className="highlightTitle">{item.title}</h3>
                    <p className="highlightDesc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dev Architecture & Workflow Card */}
          <div className="softwareProficiencyCard revealOnScroll">
            <div className="cardHeader">
              <Cpu size={18} aria-hidden="true" />
              <h3>Development Workstation & Engineering Environment</h3>
            </div>
            <p className="cardIntroText">
              Core technologies, design patterns, and protocols utilized daily for scalable full stack development:
            </p>

            <div className="devEnvGrid">
              {DEV_ENVIRONMENT.slice(0, 4).map((spec, i) => (
                <div key={i} className="devEnvItem">
                  <span className="devEnvCategory">{spec.category}</span>
                  <h4 className="devEnvTitle">{spec.title}</h4>
                  <p className="devEnvDetail">{spec.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

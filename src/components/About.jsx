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
  Sparkles
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
          Web Developer at WARX Digital Pvt Ltd with 1.5+ years of software development experience building ERPs, E-commerce platforms, AI Agents, and robust REST APIs.
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
                alt="Arun Prakash V - Web Developer"
                className="artistPortraitImg"
                width="360"
                height="360"
              />
            </picture>
            <div className="avatarStatusPill">
              <span className="pulseGreen"></span>
              <span>Web Developer @ WARX Digital</span>
            </div>
          </div>

          <div className="artistCardBio">
            <h3 className="artistNameHeading">{PORTFOLIO_INFO.name}</h3>
            <p className="artistTitleSub">{PORTFOLIO_INFO.title}</p>
            <p className="artistBioText">
              I am currently working as a <strong>Web Developer at WARX Digital Pvt Ltd (since July 2026)</strong>, where I develop and maintain enterprise ERP systems, mission-critical E-commerce platforms, and engineer autonomous <strong>AI Agent projects</strong> utilizing <strong>CodeIgniter 3 (CI3)</strong>, <strong>React.js</strong>, and <strong>MySQL</strong>.
            </p>
            <p className="artistBioText">
              Prior to WARX Digital, I completed over a year of immersive full stack software engineering internships at <strong>DCE Technology</strong>, delivering production web applications in <strong>Python Flask</strong>, <strong>Laravel</strong>, and <strong>React.js</strong>. Graduated with a <strong>B.Sc. in Information Technology</strong> from VHNSN College, Virudhunagar.
            </p>

            <div className="availabilityList">
              <div className="availabilityItem">
                <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                <span>Web Developer at WARX Digital Pvt Ltd (Active)</span>
              </div>
              <div className="availabilityItem">
                <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                <span>ERP & E-Commerce Web Engineering (CI3 / React)</span>
              </div>
              <div className="availabilityItem">
                <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                <span>Autonomous AI Agent Pipelines & Workflows</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Key Credentials Highlights */}
        <div className="aboutRightCol">
          <div className="highlightsGrid revealOnScroll">
            {ABOUT_HIGHLIGHTS.map((item, idx) => {
              const Icon = iconMap[item.category] || Code2;
              return (
                <div className="highlightCard" key={idx}>
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
              <h3>Production Engineering & AI Architecture</h3>
            </div>
            <p className="cardIntroText">
              Core technologies, enterprise architectures, and automation frameworks utilized daily for production applications:
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

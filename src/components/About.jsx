import { useState } from 'react';
import {
  PORTFOLIO_INFO,
  SOFTWARE_PROFICIENCY,
  HARDWARE_SPECS,
  PIPELINE_PROCESS
} from '../data/portfolioData';
import {
  Cpu,
  Layers,
  CheckCircle,
  Compass,
  ArrowRight,
  Flame
} from 'lucide-react';

function About() {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  return (
    <>
      <section id="about" className="section aboutSection" aria-label="About the 3D Artist">
        <div className="sectionHeader">
          <div className="sectionTag">
            <Compass size={14} aria-hidden="true" />
            <span>BACKGROUND & EXPERTISE</span>
          </div>
          <h2 className="sectionTitle">Behind the Viewport</h2>
          <p className="sectionSubtitle">
            A look into my creative philosophy, 3D pipelines, and software mastery.
          </p>
        </div>

        <div className="aboutMainGrid">
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
                  alt={`${PORTFOLIO_INFO.name} - 3D Artist Portrait`}
                  className="artistPortraitImg"
                  width="360"
                  height="360"
                />
              </picture>
              <div className="avatarStatusPill">
                <span className="pulseGreen"></span>
                <span>Active 3D Workstation</span>
              </div>
            </div>

            <div className="artistCardBio">
              <h3 className="artistNameHeading">{PORTFOLIO_INFO.name}</h3>
              <p className="artistTitleSub">{PORTFOLIO_INFO.title}</p>
              <p className="artistBioText">{PORTFOLIO_INFO.bio}</p>

              <div className="availabilityList">
                <div className="availabilityItem">
                  <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                  <span>Freelance CGI & Commercial Renders</span>
                </div>
                <div className="availabilityItem">
                  <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                  <span>Full-Time Studio & Remote Roles</span>
                </div>
                <div className="availabilityItem">
                  <CheckCircle size={16} className="availIcon" aria-hidden="true" />
                  <span>Game Asset Pipelines & LookDev</span>
                </div>
              </div>

              <div className="currentlyExploringCard">
                <div className="exploringHeader">
                  <Flame size={16} aria-hidden="true" />
                  <span>Currently Exploring & Researching</span>
                </div>
                <p className="exploringText">
                  3D Gaussian Splatting for photogrammetric environment reconstruction, Real-time VDB volume rendering in Unreal Engine 5.4, and procedural terrain generation in Houdini Solaris.
                </p>
              </div>
            </div>
          </div>

          <div className="softwareProficiencyCard revealOnScroll">
            <div className="cardHeader">
              <Layers size={18} aria-hidden="true" />
              <h3>Software Proficiency & Toolsets</h3>
            </div>
            <p className="cardIntroText">
              Industry-standard production toolsets honed through hundreds of hours in modeling, sculpting, texturing, and lighting:
            </p>

            <div className="proficiencyList">
              {SOFTWARE_PROFICIENCY.map((tool, index) => (
                <div key={index} className="proficiencyItem">
                  <div className="toolInfoRow">
                    <span className="toolName">{tool.name}</span>
                    <span className="toolCategoryText">{tool.category}</span>
                    <span className="toolPercent">{tool.level}%</span>
                  </div>
                  <div className="progressTrack" role="progressbar" aria-valuenow={tool.level} aria-valuemin="0" aria-valuemax="100">
                    <div
                      className="progressBar"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="engineSummaryGrid">
              <div className="engineTagCard">
                <span className="engineName">Unreal Engine 5</span>
                <span className="engineFeature">Nanite & Lumen Cinematics</span>
              </div>
              <div className="engineTagCard">
                <span className="engineName">Cycles & Octane</span>
                <span className="engineFeature">Physically Based Raytracing</span>
              </div>
              <div className="engineTagCard">
                <span className="engineName">ZBrush & Substance</span>
                <span className="engineFeature">Multi-UDIM PBR LookDev</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pipelineProcessSection">
          <div className="subHeader">
            <span className="subHeaderTag">7-STAGE WORKFLOW</span>
            <h3 className="subHeaderTitle">My 3D Production Pipeline</h3>
            <p className="subHeaderDesc">
              From creative concept to final color grading, every project follows a rigorous, non-destructive production roadmap.
            </p>
          </div>

          <div className="pipelineTimelineGrid">
            {PIPELINE_PROCESS.map((proc, idx) => (
              <div
                key={idx}
                className={`pipelineStepCard ${activeProcessStep === idx ? 'highlighted' : ''}`}
                onMouseEnter={() => setActiveProcessStep(idx)}
              >
                <div className="stepNumberBadge">{proc.step}</div>
                <h4 className="stepTitle">{proc.title}</h4>
                <p className="stepDesc">{proc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hardware" className="section hardwareSection" aria-label="Hardware Rig and Workstation Specifications">
        <div className="sectionHeader">
          <div className="sectionTag">
            <Cpu size={14} aria-hidden="true" />
            <span>STUDIO RIG SPECIFICATIONS</span>
          </div>
          <h2 className="sectionTitle">Hardware Specs & Render Station</h2>
          <p className="sectionSubtitle">
            3D artists care about raw horsepower. Here is the dedicated workstation powering high-poly sculpting, Houdini VDB caching, and 4K raytraced renders.
          </p>
        </div>

        <div className="hardwareSpecsGrid">
          {HARDWARE_SPECS.map((spec, i) => (
            <div key={i} className="hardwareCard revealOnScroll">
              <div className="hwCardHeader">
                <span className="hwCategoryBadge">{spec.category}</span>
              </div>
              <h3 className="hwTitle">{spec.title}</h3>
              <p className="hwDetail">{spec.detail}</p>
            </div>
          ))}
        </div>

        <div className="renderCapacityBanner">
          <div className="capacityInfo">
            <h4>Ready for Heavy Scene Demands</h4>
            <p>
              Equipped to handle 50M+ poly ZBrush subtools, real-time Unreal Engine 5 virtual production stages, and multi-threaded EXR render queues without slowdown.
            </p>
          </div>
          <a href="#contact" className="btn primary">
            <span>Request Workstation Capacity</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}

export default About;

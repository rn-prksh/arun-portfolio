import { useState } from 'react';
import { Download, ArrowRight, Mail, Check, Sparkles, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero3DCanvas from './3d/Hero3DCanvas';
import { PORTFOLIO_INFO } from '../data/portfolioData';

function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="home" className="heroSection" aria-label="Introduction">
      {/* Interactive 3D WebGL Canvas Viewport */}
      <Hero3DCanvas />

      {/* Dark Gradient Vignette for Readability */}
      <div className="heroVignette" aria-hidden="true"></div>

      <div className="heroForeground">
        {/* Availability Badge */}
        <div className="heroBadge">
          <span className="pulseGreen" aria-hidden="true"></span>
          <span>Available for Full Stack Developer Roles</span>
        </div>

        <h1 className="heroNameTitle">
          <span className="heroPretitle">HI, I AM</span>
          <span className="heroMainName">{PORTFOLIO_INFO.name}</span>
          <span className="heroRoleHighlight">{PORTFOLIO_INFO.title}</span>
        </h1>

        <p className="heroDescription">
          {PORTFOLIO_INFO.bio}
        </p>

        {/* Action CTAs */}
        <div className="heroCtaGroup">
          <a
            href={PORTFOLIO_INFO.resumeUrl}
            className="btn primary glowEffect"
            download
            aria-label="Download Arun Prakash V Resume in PDF format"
          >
            <Download size={18} aria-hidden="true" />
            <span>Download Resume</span>
          </a>

          <a href="#projects" className="btn secondary">
            <span>View Projects</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>

          <div className="heroQuickEmail">
            <button
              onClick={handleCopyEmail}
              className="copyEmailBtn"
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              <Mail size={16} aria-hidden="true" />
              <span className="emailText">{PORTFOLIO_INFO.email}</span>
              {copied ? (
                <span className="copyFeedback success">
                  <Check size={14} aria-hidden="true" /> Copied!
                </span>
              ) : (
                <span className="copyFeedback">Copy</span>
              )}
            </button>
          </div>
        </div>

        {/* Social Networks Row */}
        <div className="heroSocialsRow">
          <a
            href={PORTFOLIO_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="heroSocialIconBtn"
            aria-label="Arun Prakash V on GitHub"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={PORTFOLIO_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="heroSocialIconBtn"
            aria-label="Arun Prakash V on LinkedIn"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Tech Stack Ticker */}
        <div className="pipelineTicker" aria-label="Core Tech Stack">
          <span className="tickerLabel">CORE STACK:</span>
          <div className="tickerItems">
            <span>React.js</span>
            <span className="tickerDivider">•</span>
            <span>Python Flask</span>
            <span className="tickerDivider">•</span>
            <span>PHP Laravel</span>
            <span className="tickerDivider">•</span>
            <span>MySQL</span>
            <span className="tickerDivider">•</span>
            <span>RESTful APIs</span>
            <span className="tickerDivider">•</span>
            <span>JWT & OAuth 2.0</span>
            <span className="tickerDivider">•</span>
            <span>Git & Postman</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#about" className="heroScrollIndicator" aria-label="Scroll down to about section">
        <span className="scrollText">SCROLL</span>
        <ChevronDown size={18} className="scrollChevron" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;

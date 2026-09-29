import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Download, ArrowRight, Mail, Check } from 'lucide-react';

function Hero() {
  const [copied, setCopied] = useState(false);
  const email = 'rnprkshv@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="home" className="hero section" aria-label="Introduction">
      <div className="heroContent">
        <div className="badge">
          <span className="badgePulse" aria-hidden="true"></span>
          <span>Available for Full Stack Developer Roles</span>
        </div>

        <h1 className="heroTitle">
          Hi, I am <span className="highlightText">Arun Prakash V</span>
        </h1>
        <h2 className="heroSubtitle">Full Stack Developer</h2>

        <p className="heroText">
          Motivated Full Stack Developer with hands-on experience in <strong>React.js</strong>,{' '}
          <strong>Flask</strong>, <strong>Laravel</strong>, and <strong>MySQL</strong>. Passionate
          about engineering scalable web applications, architecting robust REST APIs, and solving
          real-world business problems.
        </p>

        <div className="heroButtons">
          <a
            href="/resume/Arun_Prakash_bsc_Resume.pdf"
            className="btn primary"
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
        </div>

        <div className="heroActions">
          <div className="quickEmail">
            <button
              onClick={handleCopyEmail}
              className="copyEmailBtn"
              title="Click to copy email address"
              aria-label="Copy email address to clipboard"
            >
              <Mail size={16} aria-hidden="true" />
              <span className="emailText">{email}</span>
              {copied ? (
                <span className="copyFeedback success">
                  <Check size={14} aria-hidden="true" /> Copied!
                </span>
              ) : (
                <span className="copyFeedback">Copy</span>
              )}
            </button>
          </div>

          <div className="socials" aria-label="Social media profiles">
            <a
              href="https://github.com/rn-prksh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arun Prakash V on GitHub (opens in new tab)"
            >
              <FaGithub size={22} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/arun-prakash-v"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Arun Prakash V on LinkedIn (opens in new tab)"
            >
              <FaLinkedin size={22} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="heroImageContainer">
        <div className="heroImageGlow" aria-hidden="true"></div>
        <div className="heroImageFrame">
          <picture>
            <source srcSet="/images/profile.webp" type="image/webp" />
            <img
              src="/images/profile.png"
              alt="Arun Prakash V - Full Stack Developer"
              width="290"
              height="290"
              fetchpriority="high"
              decoding="async"
              className="avatarImg"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Hero;
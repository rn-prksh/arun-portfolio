import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ArrowUp, Box } from 'lucide-react';
import { FaArtstation, FaBehance, FaInstagram, FaDiscord, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Footer({ onOpenShowreel }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="portfolioFooter">
      <div className="footerInner">
        <div className="footerTopGrid">
          <div className="footerBrandCol">
            <a href="#home" className="footerLogoLink">
              <div className="footerLogoIcon">
                <Box size={22} aria-hidden="true" />
              </div>
              <div className="footerLogoTexts">
                <span className="footerBrandName">{PORTFOLIO_INFO.name}</span>
                <span className="footerBrandTitle">3D CGI & ANIMATION</span>
              </div>
            </a>
            <p className="footerTagline">
              Engineering high-fidelity 3D assets, cinematic environments, and emotive character performances with real-time and offline raytracing pipelines.
            </p>
            <div className="footerPipelineBadge">
              <span className="pipelineDot"></span>
              <span>Render Engines: Unreal Engine 5 • Cycles • Octane</span>
            </div>
          </div>

          <div className="footerNavCol">
            <h4 className="footerColTitle">Exploration</h4>
            <ul className="footerLinksList">
              <li>
                <a href="#projects">All 3D Projects</a>
              </li>
              <li>
                <button onClick={onOpenShowreel} className="footerTextBtn">
                  2026 Showreel
                </button>
              </li>
              <li>
                <a href="#about">Artist Profile & Pipeline</a>
              </li>
              <li>
                <a href="#hardware">Studio Hardware Specs</a>
              </li>
              <li>
                <a href="#resources">Free 3D Asset Packs</a>
              </li>
              <li>
                <a href="#contact">Commission Inquiries</a>
              </li>
            </ul>
          </div>

          <div className="footerSocialCol">
            <h4 className="footerColTitle">Industry Networks</h4>
            <div className="footerSocialIcons">
              <a
                href={PORTFOLIO_INFO.socials.artstation}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ArtStation"
              >
                <FaArtstation size={18} />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
              >
                <FaBehance size={18} />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <FaDiscord size={18} />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
            <div className="footerStatusNotice">
              <span>Commission Status: </span>
              <strong>{PORTFOLIO_INFO.commissionStatus}</strong>
            </div>
          </div>
        </div>

        <div className="footerBottomBar">
          <p className="copyrightText">
            © {new Date().getFullYear()} {PORTFOLIO_INFO.name}. All 3D models, textures, animations and renders are copyrighted and property of their respective clients & creators.
          </p>
          <button
            onClick={scrollToTop}
            className="footerBackToTopBtn"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

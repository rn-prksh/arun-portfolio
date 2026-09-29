import {
  FREELANCE_SERVICES,
  WHY_WORK_WITH_ME,
  PORTFOLIO_INFO
} from '../data/portfolioData';
import {
  Globe,
  Rocket,
  ShoppingCart,
  Smartphone,
  Settings,
  BarChart3,
  Link2,
  Palette,
  Wrench,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Mail,
  Briefcase
} from 'lucide-react';

const iconMap = {
  Globe,
  Rocket,
  ShoppingCart,
  Smartphone,
  Settings,
  BarChart3,
  Link2,
  Palette,
  Wrench
};

function Freelance() {
  return (
    <section id="freelance" className="section freelanceSection" aria-label="Freelance Web Development Services">
      {/* Section Header */}
      <div className="sectionHeader">
        <div className="sectionTag">
          <Briefcase size={14} aria-hidden="true" />
          <span>FREELANCE WEB DEVELOPMENT</span>
        </div>
        <h2 className="sectionTitle">Your Vision. My Code. A Website That Works for Your Business.</h2>
        <p className="sectionSubtitle">
          Ready to bring your idea to life? I’m available for <strong>freelance web development projects of all types</strong> — from modern business websites and landing pages to custom web applications and e-commerce platforms.
        </p>
      </div>

      {/* Target Audiences Bar */}
      <div className="targetClientsBanner revealOnScroll">
        <span className="targetClientsLabel">Tailored for:</span>
        <div className="clientTypeBadges">
          <span className="clientBadge">🚀 Startups</span>
          <span className="clientBadge">💼 Small Businesses</span>
          <span className="clientBadge">🧑‍💻 Freelancers & Creators</span>
          <span className="clientBadge">🏢 Established Companies</span>
        </div>
      </div>

      {/* What I Can Build */}
      <div className="servicesCategoryBlock">
        <div className="subHeader">
          <span className="subHeaderTag">CAPABILITIES</span>
          <h3 className="subHeaderTitle">What I Can Build For You</h3>
          <p className="subHeaderDesc">
            Whether starting from scratch or scaling an existing system, I deliver end-to-end full stack web solutions:
          </p>
        </div>

        <div className="servicesGrid">
          {FREELANCE_SERVICES.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <div
                className="serviceCard revealOnScroll"
                key={service.title}
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <div className="serviceIconBox" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <h4 className="serviceTitle">{service.title}</h4>
                <p className="serviceDesc">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Work With Me */}
      <div className="whyWorkWithMeSection revealOnScroll">
        <div className="whyHeader">
          <Sparkles size={20} className="sparkleIcon" aria-hidden="true" />
          <h3>Why Work With Me?</h3>
        </div>
        <p className="whyIntro">
          When you partner with me, you get direct engineering attention without agency bloat or communication barriers:
        </p>

        <div className="whyGrid">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div className="whyCard" key={idx}>
              <div className="whyCheckWrap" aria-hidden="true">
                <CheckCircle size={18} className="textEmerald" />
              </div>
              <div className="whyContent">
                <h4 className="whyTitle">{item.title}</h4>
                <p className="whyDesc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Have a Project in Mind? High-Converting CTA Banner */}
      <div className="freelanceCtaBanner revealOnScroll">
        <div className="ctaContent">
          <span className="ctaPretitle">HAVE A PROJECT IN MIND?</span>
          <h3 className="ctaTitle">Let’s turn your idea into a powerful digital experience.</h3>
          <p className="ctaSubtitle">
            📩 Available for Freelance Projects — Let’s Build Something Great Together.
          </p>
        </div>

        <div className="ctaActions">
          <a href="#contact" className="btn primary glowEffect">
            <span>Hire Me For a Project</span>
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_INFO.email}?subject=Freelance%20Project%20Inquiry%20from%20Portfolio`}
            className="btn secondary"
          >
            <Mail size={16} aria-hidden="true" />
            <span>Email Direct Inquiry</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Freelance;

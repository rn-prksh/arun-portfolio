import { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Download,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2200);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2200);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Arun,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:${PORTFOLIO_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="section contactSection" aria-label="Contact Arun Prakash V">
      <div className="sectionHeader">
        <div className="sectionTag">
          <MessageSquare size={14} aria-hidden="true" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="sectionTitle">Let's Build Something Together</h2>
        <p className="sectionSubtitle">
          Seeking full-time Full Stack, Frontend, or Backend Developer opportunities. Feel free to reach out directly for interviews or project discussions.
        </p>
      </div>

      <div className="contactGridContainer">
        {/* Left Column: Direct Info */}
        <div className="contactSidebarCard revealOnScroll">
          {/* Status Card */}
          <div className="commissionStatusCard">
            <div className="statusHeader">
              <span className="beaconDot" aria-hidden="true"></span>
              <span className="statusLabel">HIRING STATUS</span>
            </div>
            <h3 className="statusTitle">{PORTFOLIO_INFO.statusBadge}</h3>
            <p className="statusDescription">
              Immediate joiner available for full-time on-site and remote engineering teams.
            </p>
          </div>

          {/* Email Item */}
          <div className="directContactCard">
            <h4>Direct Email</h4>
            <div className="emailCopyBox">
              <span className="emailAddress">{PORTFOLIO_INFO.email}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(PORTFOLIO_INFO.email, 'email')}
                className="copyBtn"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Phone Item */}
          <div className="directContactCard">
            <h4>Phone / WhatsApp</h4>
            <div className="emailCopyBox">
              <span className="emailAddress">{PORTFOLIO_INFO.phone}</span>
              <button
                type="button"
                onClick={() => copyToClipboard(PORTFOLIO_INFO.phone, 'phone')}
                className="copyBtn"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Location & Resume Download */}
          <div className="rateSheetCard">
            <div className="rateSheetInfo">
              <h4>Curriculum Vitae</h4>
              <p>Download my comprehensive resume covering educational credentials, internship deliverables, and technical skills.</p>
            </div>
            <a
              href={PORTFOLIO_INFO.resumeUrl}
              download
              className="btn secondary rateSheetBtn"
              aria-label="Download Arun Prakash V Resume"
            >
              <Download size={16} aria-hidden="true" />
              <span>Download Resume PDF</span>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="socialNetworksCard">
            <h4>Professional Profiles</h4>
            <div className="socialIconsGrid">
              <a
                href={PORTFOLIO_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                aria-label="GitHub profile"
              >
                <FaGithub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.gmail}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                aria-label="Gmail Webmail"
              >
                <Mail size={18} />
                <span>Gmail Web</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Composer */}
        <div className="contactFormCard revealOnScroll">
          <div className="formHeader">
            <Sparkles size={18} aria-hidden="true" />
            <h3>Send a Direct Message</h3>
          </div>
          <p className="formIntro">
            Have a role, opportunity, or technical question? Send a note directly to my inbox.
          </p>

          <form onSubmit={handleSubmit} className="inquiryForm">
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan / Technical Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Your Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Job Opportunity / Interview Invitation"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Hi Arun, we would like to discuss an opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn primary submitInquiryBtn">
              <Send size={18} aria-hidden="true" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

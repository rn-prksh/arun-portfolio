import { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import {
  Mail,
  Send,
  Download,
  Copy,
  Check,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { FaArtstation, FaBehance, FaInstagram, FaDiscord, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloadingRateSheet, setDownloadingRateSheet] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectCategory: 'Character Design',
    pipeline: 'Unreal Engine 5',
    budget: '$2,000 - $5,000',
    timeline: '1 - 2 Months',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    });
  };

  const handleDownloadRateSheet = () => {
    setDownloadingRateSheet(true);
    setTimeout(() => {
      setDownloadingRateSheet(false);
      alert('Downloading 2026 3D Commission Rate Sheet & Services Overview (PDF)');
    }, 1200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contactSection" aria-label="Contact and Commission Inquiries">
      <div className="sectionHeader">
        <div className="sectionTag">
          <MessageSquare size={14} aria-hidden="true" />
          <span>COMMISSIONS & INQUIRIES</span>
        </div>
        <h2 className="sectionTitle">Let's Bring Your Vision to Life in 3D</h2>
        <p className="sectionSubtitle">
          Available for commercial 3D production, game asset pipelines, environment worldbuilding, and cinematic look-development.
        </p>
      </div>

      <div className="contactGridContainer">
        <div className="contactSidebarCard revealOnScroll">
          <div className="commissionStatusCard">
            <div className="statusHeader">
              <span className="beaconDot" aria-hidden="true"></span>
              <span className="statusLabel">CURRENT STATUS</span>
            </div>
            <h3 className="statusTitle">{PORTFOLIO_INFO.commissionStatus}</h3>
            <p className="statusDescription">
              Accepting bookings for commercial look-development, AAA character sculpts, and real-time Unreal Engine 5 projects.
            </p>
          </div>

          <div className="directContactCard">
            <h4>Direct Studio Email</h4>
            <div className="emailCopyBox">
              <span className="emailAddress">{PORTFOLIO_INFO.email}</span>
              <button
                onClick={handleCopyEmail}
                className="copyBtn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="rateSheetCard">
            <div className="rateSheetInfo">
              <h4>2026 Commercial Rate Sheet</h4>
              <p>Transparent pricing guidelines for modeling, texturing, rigging, and turnkey 3D animations.</p>
            </div>
            <button
              onClick={handleDownloadRateSheet}
              className="btn secondary rateSheetBtn"
              disabled={downloadingRateSheet}
              aria-label="Download 3D rate sheet"
            >
              <Download size={16} aria-hidden="true" />
              <span>{downloadingRateSheet ? 'Preparing PDF...' : 'Download Rate Sheet (PDF)'}</span>
            </button>
          </div>

          <div className="socialNetworksCard">
            <h4>Artist Networks & Community</h4>
            <div className="socialIconsGrid">
              <a
                href={PORTFOLIO_INFO.socials.artstation}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                title="ArtStation Portfolio"
              >
                <FaArtstation size={20} />
                <span>ArtStation</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                title="Behance Case Studies"
              >
                <FaBehance size={20} />
                <span>Behance</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                title="Instagram Renders & WIPs"
              >
                <FaInstagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                title="Discord Community"
              >
                <FaDiscord size={20} />
                <span>Discord</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                title="YouTube Breakdown Tutorials"
              >
                <FaYoutube size={20} />
                <span>YouTube</span>
              </a>
              <a
                href={PORTFOLIO_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLinkItem"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contactFormCard revealOnScroll">
          <div className="formHeader">
            <Sparkles size={18} aria-hidden="true" />
            <h3>Submit a Project Inquiry</h3>
          </div>
          <p className="formIntro">
            Fill in the details below to receive a custom production timeline and estimate within 24 hours.
          </p>

          {formSubmitted ? (
            <div className="formSuccessState">
              <div className="successIconBox">
                <Check size={32} />
              </div>
              <h4>Inquiry Received!</h4>
              <p>
                Thank you for reaching out. I have received your 3D project parameters and will respond with a tailored proposal and availability schedule within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="inquiryForm">
              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="inquiry-name">Your Name / Studio *</label>
                  <input
                    type="text"
                    id="inquiry-name"
                    required
                    placeholder="e.g. Alex Morgan / Pixel Forge Studios"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="inquiry-email">Work Email *</label>
                  <input
                    type="email"
                    id="inquiry-email"
                    required
                    placeholder="alex@pixelforge.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="inquiry-category">Project Category</label>
                  <select
                    id="inquiry-category"
                    value={formData.projectCategory}
                    onChange={(e) => setFormData({ ...formData, projectCategory: e.target.value })}
                  >
                    <option value="Character Design">Character Design & Sculpting</option>
                    <option value="Environment Art">Environment Art & Modular Sets</option>
                    <option value="Product Visualization">Commercial Product Visualization</option>
                    <option value="Motion Graphics">CGI Motion Graphics & Title Design</option>
                    <option value="Game Assets">Game-Ready Assets & Rigging</option>
                    <option value="Turnkey CGI Animation">Full Turnkey CGI Animation</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label htmlFor="inquiry-pipeline">Target Engine / Software</label>
                  <select
                    id="inquiry-pipeline"
                    value={formData.pipeline}
                    onChange={(e) => setFormData({ ...formData, pipeline: e.target.value })}
                  >
                    <option value="Unreal Engine 5">Unreal Engine 5 (Lumen / Nanite)</option>
                    <option value="Blender Cycles">Blender Cycles (Raytraced)</option>
                    <option value="Octane / Redshift">Octane / Redshift Render</option>
                    <option value="Unity">Unity Universal Render Pipeline</option>
                    <option value="Pre-rendered Video">Pre-rendered ProRes / EXR</option>
                  </select>
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label htmlFor="inquiry-budget">Estimated Budget</label>
                  <select
                    id="inquiry-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="Under $2,000">Under $2,000</option>
                    <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000+">$10,000+ (Comprehensive Pipeline)</option>
                  </select>
                </div>
                <div className="formGroup">
                  <label htmlFor="inquiry-timeline">Target Delivery</label>
                  <select
                    id="inquiry-timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  >
                    <option value="Urgent (< 2 Weeks)">Urgent (&lt; 2 Weeks)</option>
                    <option value="1 - 2 Months">1 - 2 Months</option>
                    <option value="3+ Months">3+ Months / Ongoing Contract</option>
                  </select>
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="inquiry-message">Project Description & Specifications *</label>
                <textarea
                  id="inquiry-message"
                  required
                  rows={5}
                  placeholder="Describe your 3D asset requirements, polycount targets, moodboard links, or reference files..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn primary submitInquiryBtn">
                <Send size={18} aria-hidden="true" />
                <span>Transmit Project Brief</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;

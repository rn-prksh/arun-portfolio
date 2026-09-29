import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const email = 'rnprkshv@gmail.com';
  const phone = '+91 9597477183';

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
    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="section" aria-label="Contact Arun Prakash V">
      <div className="sectionTitle">
        <p>Get in Touch</p>
        <h2>Let's Build Something Together</h2>
      </div>

      <div className="contactWrapper">
        {/* Contact Info Card */}
        <div className="contactInfoCard">
          <div className="contactStatus">
            <span className="contactStatusDot" aria-hidden="true"></span>
            <div>
              <strong>Open for Opportunities</strong>
              <p>Full-time Full Stack, Frontend or Backend Developer roles</p>
            </div>
          </div>

          <div className="contactList">
            {/* Email Item */}
            <div className="contactItem">
              <div className="contactIconWrap" aria-hidden="true">
                <Mail size={20} />
              </div>
              <div className="contactDetail">
                <span className="contactLabel">Email</span>
                <a href={`mailto:${email}`} className="contactValue">
                  {email}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(email, 'email')}
                className="copyBtn"
                aria-label="Copy email address"
                title="Copy to clipboard"
              >
                {copiedEmail ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Item */}
            <div className="contactItem">
              <div className="contactIconWrap" aria-hidden="true">
                <Phone size={20} />
              </div>
              <div className="contactDetail">
                <span className="contactLabel">Phone</span>
                <a href="tel:+919597477183" className="contactValue">
                  {phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => copyToClipboard(phone, 'phone')}
                className="copyBtn"
                aria-label="Copy phone number"
                title="Copy to clipboard"
              >
                {copiedPhone ? <Check size={16} className="text-cyan" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Location Item */}
            <div className="contactItem">
              <div className="contactIconWrap" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div className="contactDetail">
                <span className="contactLabel">Location</span>
                <span className="contactValue">Aruppukottai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="contactSocials">
            <span className="socialsPrompt">Connect directly:</span>
            <div className="socialLinksRow">
              <a
                href="https://github.com/rn-prksh"
                target="_blank"
                rel="noopener noreferrer"
                className="contactSocialLink"
                aria-label="GitHub profile of Arun Prakash V"
              >
                <FaGithub size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/arun-prakash-v"
                target="_blank"
                rel="noopener noreferrer"
                className="contactSocialLink"
                aria-label="LinkedIn profile of Arun Prakash V"
              >
                <FaLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rnprkshv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contactSocialLink"
                aria-label="Open in Gmail Webmail"
              >
                <Mail size={18} />
                <span>Gmail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Message Form */}
        <form className="contactForm" onSubmit={handleSubmit} aria-label="Send direct message">
          <h3 className="formTitle">Send a Quick Message</h3>
          <p className="formSubtitle">Have a role, project, or question? Send me a note directly.</p>

          <div className="formGroup">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              required
              placeholder="e.g. John Doe / Tech Recruiter"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="e.g. recruiter@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Job Opportunity / Project Collaboration"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Tell me about the role or project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button type="submit" className="btn primary fullWidth">
            <Send size={18} aria-hidden="true" />
            <span>Send Email Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

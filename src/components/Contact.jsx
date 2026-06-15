import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="sectionTitle">
        <p>Contact</p>
        <h2>Get In Touch</h2>
      </div>

      <div className="contactCard">
        <div className="contactInfo">
          <p>
            <Mail size={20} /> rnprkshv@gmail.com
          </p>
          <p>
            <Phone size={20} /> +91 9597477183
          </p>
          <p>
            <MapPin size={20} /> Aruppukottai, Tamil Nadu
          </p>
        </div>

        <div className="contactButtons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rnprkshv@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Mail Me
          </a>
          <a
            href="https://github.com/rn-prksh"
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-prakash-v"
            target="_blank"
            rel="noreferrer"
            className="iconBtn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;

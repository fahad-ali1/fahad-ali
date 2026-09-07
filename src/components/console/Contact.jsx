import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const EMAIL = "fahadali8@icloud.com";
const EMAIL_SUBJECT = encodeURIComponent("Portfolio inquiry");

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="section-inner contact-inner">
        <h2 className="section-heading">Let's talk</h2>
        <p className="contact-copy">
          For any inquiries, feel free to reach out by email.
        </p>

        <div className="contact-actions">
          <a
            className="hero-cta"
            href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
          >
            Email me <span aria-hidden="true">→</span>
          </a>
          <a
            className="contact-secondary"
            href="https://github.com/fahad-ali1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <a
            className="contact-secondary"
            href="https://www.linkedin.com/in/fahad-ali1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

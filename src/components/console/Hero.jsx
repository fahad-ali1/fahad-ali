import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../../data/content";
import HeroField from "./HeroField";
import "./Hero.css";

const EMAIL = "fahadali8@icloud.com";
const EMAIL_SUBJECT = encodeURIComponent("Portfolio inquiry");

const Hero = () => {
  return (
    <section id="top" className="hero">
      <HeroField />
      <div className="hero-inner">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">
          {profile.role}
          <span className="hero-location">
            <FaMapMarkerAlt aria-hidden="true" /> {profile.location}
          </span>
        </p>

        <div className="hero-actions">
          <a
            className="hero-cta"
            href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`}
          >
            Get in touch <span aria-hidden="true">→</span>
          </a>
          <div className="hero-social">
            <a
              href="https://github.com/fahad-ali1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/fahad-ali1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href={`mailto:${EMAIL}?subject=${EMAIL_SUBJECT}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

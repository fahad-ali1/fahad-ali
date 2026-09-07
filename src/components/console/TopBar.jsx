import React, { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import "./TopBar.css";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const TopBar = ({ darkMode, toggleDarkMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-bar">
      <div className="top-bar-inner">
        <a href="#top" className="top-bar-mark">
          Fahad Ali
        </a>

        <nav className="top-bar-nav top-bar-nav-desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="top-bar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="top-bar-nav top-bar-nav-mobile"
          aria-label="Primary mobile"
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default TopBar;

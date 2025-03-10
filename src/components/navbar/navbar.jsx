import React, { useEffect } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="/"
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <span className="nav-icon">
            <AiFillHome />
          </span>
          <span className="nav-text">Home</span>
        </Link>
        <Link
          to="/experience"
          className={`nav-item ${
            location.pathname === "/experience" ? "active" : ""
          }`}
        >
          <span className="nav-icon">
            <GiSkills />
          </span>
          <span className="nav-text">Experience</span>
        </Link>
        <Link
          to="/portfolio"
          className={`nav-item ${
            location.pathname === "/portfolio" ? "active" : ""
          }`}
        >
          <span className="nav-icon">
            <FaProjectDiagram />
          </span>
          <span className="nav-text">Projects</span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

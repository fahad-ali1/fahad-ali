import React, { useEffect, useRef } from "react";
import "./header.css";
import Socials from "./socials.jsx";
import FeaturedProjects from "./featuredProjects.jsx";
import ParticleBackground from "./ParticleBackground";
import { Link } from "react-router-dom";
import { FaServer, FaLayerGroup, FaRobot } from "react-icons/fa";

const Header = () => {
  const titleRef = useRef(null);
  const featuredRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (titleRef.current) {
          titleRef.current.classList.toggle("unstick", entry.isIntersecting);
        }
      },
      {
        threshold: 1,
        rootMargin: "-80px 0px 0px 0px", // Offset for navbar height
      }
    );

    if (featuredRef.current) {
      observer.observe(featuredRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header>
      <ParticleBackground />
      <div className="header">
        <div className="header-content">
          <h1>Fahad Ali</h1>
          <h5 className="mainText">
            Upcoming Full-Stack Developer & AI Engineer
          </h5>

          <div className="aboutme">
            <h4>Building intelligent solutions with modern technologies</h4>
            <h4>
              <FaLayerGroup /> Full-Stack Applications | <FaRobot /> RAG Systems
              | <FaServer /> Servers
            </h4>
          </div>

          <Socials />

          <div className="buttons">
            <Link to="/experience" className="button">
              <span>Experience</span>
            </Link>
            <Link to="/portfolio" className="button">
              <span>Projects</span>
            </Link>
          </div>
        </div>

        <div className="featured-title-floating" ref={titleRef}>
          <h1>🔥 Featured Projects</h1>
          <div className="scroll-indicator"></div>
        </div>
      </div>

      <div className="featured" ref={featuredRef}>
        <div className="container">
          <FeaturedProjects />
        </div>
      </div>
    </header>
  );
};

export default Header;

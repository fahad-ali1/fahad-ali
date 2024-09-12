import React, { useEffect } from "react";
import "./portfolio.css";

import ClassSchedulerWebAppImage from "../../assets/class-scheduler-webapp.png";
import ClassSchedulerApp from "../../assets/class-scheduler-demo.png";
import PersonalWebsite2Image from "../../assets/personal-website2-demo.png";
import PersonalWebsite1Image from "../../assets/personal-website-demo.png";
import PropertyAssessmentImage from "../../assets/property-assessment-app.png";
import SpaceBlasterImage from "../../assets/space-blaster-demo.png";
import CoupOnlineGameImage from "../../assets/coup-online-game.png";
import HomeServer from "../../assets/raspberrypi5-stock-image.jpg";

const Portfolio = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="portfolio">
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>
      <h1 className="caption">
        Click on each card to visit the GitHub repository!
      </h1>
      <div className="portfolioContainer">
        <a
          href="https://github.com/fahad-ali1/course_registration_system"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="courseRegisterWebApp">
            <a
              className="livePageButton"
              href="https://course-register.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔥 Click Here to View Live Website
            </a>
            <div className="portfolioItem-image">
              <img src={ClassSchedulerWebAppImage} alt="" />
            </div>
            <h1>Class Scheduler Web Application</h1>
            <h3>Full Stack Web Application</h3>
            <h4 className="skills">Skills: ReactJS, Node.js, MongoDB, Git</h4>
          </article>
        </a>

        <a
          href="https://github.com/batec2/CoupOnline"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="coupOnlineGame">
            <div className="portfolioItem-image">
              <img src={CoupOnlineGameImage} alt="" />
            </div>
            <h1>Coup Card Game (Online Remake)</h1>
            <h3>Full Stack Web Game</h3>
            <h4 className="skills">
              Skills: Vite, Node.js, MongoDB, ShadCN, Tailwind CSS, Git
            </h4>
          </article>
        </a>

        <a className="portfolioItem">
          <article id="personalServerProject">
            <div className="portfolioItem-image">
              <img src={HomeServer} alt="Personal Server Project" />
            </div>
            <h1>Personal Server Project</h1>
            <h3>Self-hosted Services</h3>
            <h4 className="skills">Skills: Linux, Networking, Docker, SSH, Scripting</h4>
          </article>
        </a>

        <a
          href="https://github.com/fahad-ali1/fahad-ali"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="website2">
            <div className="portfolioItem-image">
              <img src={PersonalWebsite2Image} alt="" />
            </div>
            <h1>Personal Portfolio Website (V2)</h1>
            <h3>Updated Portfolio Website</h3>
            <h4 className="skills">Skills: ReactJS, Git</h4>
          </article>
        </a>
        <a
          href="https://github.com/fahad-ali1/fahad-ali/tree/backupV1"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="website1">
            <div className="portfolioItem-image">
              <img src={PersonalWebsite1Image} alt="" />
            </div>
            <h1>Personal Portfolio Website (V1)</h1>
            <h3>Original Portfolio Website to learn ReactJS</h3>
            <h4 className="skills">Skills: ReactJS, Git</h4>
          </article>
        </a>
        <a
          href="https://github.com/fahad-ali1/Space-Blaster"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="game">
            <div className="portfolioItem-image">
              <img src={SpaceBlasterImage} alt="" />
            </div>
            <h1>2D Space Shooter Game</h1>
            <h3>Game made with Python</h3>
            <h4 className="skills">Skills: Python, Python Arcade, Git</h4>
          </article>
        </a>
        <a
          href="https://github.com/fahad-ali1/PropertyAssessmentGUI"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="propertyAssessments">
            <div className="portfolioItem-image">
              <img src={PropertyAssessmentImage} alt="" />
            </div>
            <h1>Property Assessments Application</h1>
            <h3>An app to Create Assessments of Properties in Edmonton</h3>
            <h4 className="skills">Skills: Java, SQL, Git</h4>
          </article>
        </a>
        <a
          href="https://github.com/fahad-ali1/CMPT-395-Class-Scheduler"
          className="portfolioItem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article id="scheduler">
            <div className="portfolioItem-image">
              <img src={ClassSchedulerApp} alt="" />
            </div>
            <h1>Class Scheduling App</h1>
            <h3>An app Created Using Python and PyQT 5</h3>
            <h4 className="skills">Skills: Python, PyQt5, Git</h4>
          </article>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

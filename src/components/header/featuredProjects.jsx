import React from "react";
import { Link } from "react-router-dom";
import ClassSchedulerImage from "../../assets/class-scheduler-webapp.png";
import CoupOnlineGameImage from "../../assets/coup-online-game.png";
import PropertyAssessmentImage from "../../assets/property-assessment-app.png";

const FeaturedProjects = () => {
  return (
    <div className="featuredProjects">
      <div className="project">
        <Link
          to={{
            pathname: "/fahad-ali/portfolio",
            hash: "#courseRegisterWebApp",
          }}
        >
          <img
            className="projectImage"
            src={ClassSchedulerImage}
            alt="Class Scheduler Web App"
          />
          <h3>Class Scheduler Web Application</h3>
        </Link>
      </div>
      <div className="project">
        <Link
          to={{ pathname: "/fahad-ali/portfolio", hash: "#coupOnlineGame" }}
        >
          <img
            className="projectImage"
            src={CoupOnlineGameImage}
            alt="Coup Online Game"
          />
          <h3>Coup Card Game (Online Remake)</h3>
        </Link>
      </div>
      <div className="project">
        <Link
          to={{
            pathname: "/fahad-ali/portfolio",
            hash: "#propertyAssessments",
          }}
        >
          <img
            className="projectImage"
            src={PropertyAssessmentImage}
            alt="Property Assessment Application"
          />
          <h3>Property Assessment Application</h3>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;

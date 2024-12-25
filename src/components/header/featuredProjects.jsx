import React from "react";
import { Link } from "react-router-dom";
import ClassSchedulerImage from "../../assets/class-scheduler-webapp.png";
import CoupOnlineGameImage from "../../assets/coup-online-game.png";
import ChatBotImage from "../../assets/chatbot.png";

const FeaturedProjects = () => {
  return (
    <div className="featuredProjects">
      <div className="project">
        <Link
          to={{
            pathname: "/portfolio",
            hash: "#ChatBot",
          }}
        >
          <img className="projectImage" src={ChatBotImage} alt="ChatBot" />
          <h3>MacEwan University Chatbot</h3>
        </Link>
      </div>
      <div className="project">
        <Link
          to={{
            pathname: "/portfolio",
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
          to={{ pathname: "/portfolio", hash: "#coupOnlineGame" }}
        >
          <img
            className="projectImage"
            src={CoupOnlineGameImage}
            alt="Coup Online Game"
          />
          <h3>Coup Card Game (Online Remake)</h3>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;

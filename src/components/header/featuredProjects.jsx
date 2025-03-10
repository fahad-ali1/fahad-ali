import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./header.css";

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      id: "chatBot",
      title: "MacEwan University Chatbot",
      description:
        "AI-powered chatbot using RAG system to answer student questions",
      skills: ["ReactJS", "Pinecone", "Cohere", "Langchain"],
      image: require("../../assets/chatbot.png"),
      githubUrl: "https://github.com/fahad-ali1/MacEwan_Chatbot",
      liveUrl: "https://macewan-chatbot.onrender.com/",
    },
    {
      id: "youtubeAutomation",
      title: "YouTube Content Automation",
      description: "AI system for automated video content generation",
      skills: ["Gemini", "ElevenLabs", "Edge TTS", "Remotion"],
      image: require("../../assets/automategpt-automation.png"),
    },
    {
      id: "courseRegisterWebApp",
      title: "Class Scheduler Web App",
      description: "Full-stack application for course registration",
      skills: ["ReactJS", "Node.js", "MongoDB", "Git"],
      image: require("../../assets/class-scheduler-webapp.png"),
      githubUrl: "https://github.com/fahad-ali1/course_registration_system",
      liveUrl: "https://course-register.onrender.com/",
    },
  ];

  return (
    <div className="featured-projects-container">
      <div className="featured-projects-scroll">
        {featuredProjects.map((project) => (
          <div key={project.id} className="featured-project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-buttons">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button github"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-button live"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="project-content">
              <Link to={`/portfolio#${project.id}`}>
                <h3>{project.title}</h3>
              </Link>
              <p className="project-description">{project.description}</p>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;

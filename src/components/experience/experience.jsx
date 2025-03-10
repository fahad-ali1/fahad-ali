import React from "react";
import "./experience.css";
import { MdLanguage } from "react-icons/md";
import {
  FaTools,
  FaNodeJs,
  FaDatabase,
  FaReact,
  FaGithub,
  FaCode,
  FaWindows,
  FaApple,
  FaLinux,
  FaBrain,
  FaCloud,
  FaServer,
  FaRobot,
  FaVideo,
} from "react-icons/fa";
import {
  SiVite,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiDocker,
} from "react-icons/si";

const Experience = () => {
  const skills = [
    {
      category: "AI & Machine Learning",
      icon: <FaBrain />,
      details: [
        { name: "RAG Systems", icon: <FaRobot /> },
        { name: "LangChain", icon: <FaRobot /> },
        { name: "Vector DBs", icon: <FaDatabase /> },
        { name: "Speech AI", icon: <FaVideo /> },
        { name: "LLM Integration", icon: <FaBrain /> },
      ],
    },
    {
      category: "Full Stack Development",
      icon: <FaReact />,
      details: [
        { name: "React/Node.js", icon: <FaReact /> },
        { name: "Python", icon: <SiPython /> },
        { name: "MongoDB/SQL", icon: <FaDatabase /> },
        { name: "Modern UI", icon: <SiTailwindcss /> },
        { name: "API Design", icon: <FaCloud /> },
      ],
    },
    {
      category: "DevOps & Infrastructure",
      icon: <FaTools />,
      details: [
        { name: "Linux Systems", icon: <FaLinux /> },
        { name: "Git/CI/CD", icon: <FaGithub /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Cloud Services", icon: <FaCloud /> },
      ],
    },
  ];

  return (
    <div className="experience">
      <div className="experience-container">
        <h5>What Skills Do I Have?</h5>
        <h2>My Experience</h2>

        {skills.map((skill, index) => (
          <div
            className="experienceSection"
            key={index}
            style={{ animationDelay: `${0.6 + index * 0.2}s` }}
          >
            <h3>
              <span className="skillIcon">{skill.icon}</span>
              <span className="skillCategory">{skill.category}</span>
            </h3>
            <div className="experienceDetails">
              {skill.details.map((detail, idx) => (
                <div
                  className="skillCard"
                  key={idx}
                  style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                >
                  <span className="icon">{detail.icon}</span>
                  <div>
                    <h4>{detail.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

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
} from "react-icons/fa";

const Experience = () => {
  const skills = [
    {
      category: "Languages",
      icon: <MdLanguage />,
      details: [
        { name: "Python", level: "Advanced", icon: <FaCode /> },
        { name: "Java", level: "Experienced", icon: <FaCode /> },
        { name: "JavaScript", level: "Intermediate", icon: <FaCode /> },
        { name: "C", level: "Intermediate", icon: <FaCode /> },
      ],
    },
    {
      category: "AI/ML Tools",
      icon: <FaBrain />,
      details: [
        {
          name: "Cohere",
          level: "Intermediate",
          icon: <FaCode />,
        },
        {
          name: "Langchain",
          level: "Intermediate",
          icon: <FaCode />,
        },
        {
          name: "Pinecone",
          level: "Intermediate",
          icon: <FaCode />,
        },
      ],
    },
    {
      category: "Tools",
      icon: <FaTools />,
      details: [
        { name: "Node.js", level: "Intermediate", icon: <FaNodeJs /> },
        { name: "SQL", level: "Intermediate", icon: <FaDatabase /> },
        { name: "MongoDB", level: "Intermediate", icon: <FaDatabase /> },
        { name: "ReactJS", level: "Intermediate", icon: <FaReact /> },
        { name: "Vite", level: "Intermediate", icon: <FaCode /> },
        { name: "Git/GitHub", level: "Advanced", icon: <FaGithub /> },
        { name: "Tailwind CSS", level: "Intermediate", icon: <FaCode /> },
        { name: "Visual Studio", level: "Intermediate", icon: <FaCode /> },
        { name: "PyQt5", level: "Intermediate", icon: <FaCode /> },
      ],
    },
    {
      category: "Operating Systems",
      icon: <FaWindows />,
      details: [
        { name: "Windows 10", level: "Advanced", icon: <FaWindows /> },
        { name: "Windows 11", level: "Advanced", icon: <FaWindows /> },
        { name: "macOS", level: "Advanced", icon: <FaApple /> },
        { name: "Linux", level: "Experienced", icon: <FaLinux /> },
      ],
    },
  ];

  return (
    <div className="experience">
      <div className="experienceCardContent">
        <h5>What Skills Do I Have?</h5>
        <h2>My Experience</h2>

        {skills.map((skill, index) => (
          <div className="experienceSection" key={index}>
            <h3>
              <span className="skillIcon">{skill.icon}</span>{" "}
              <span className="skillCategory">{skill.category}</span>
            </h3>
            <div className="experienceDetails">
              {skill.details.map((detail, idx) => (
                <article className="skillCard" key={idx}>
                  <div>
                    <span className="icon">{detail.icon}</span>
                    <h4>{detail.name}</h4>
                    <small>{detail.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

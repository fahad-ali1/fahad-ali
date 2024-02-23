import React from 'react';
import './experience.css';
import { MdLanguage } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const Experience = () => {
  const skills = [
    {
      category: "Languages",
      icon: <MdLanguage />,
      details: [
        { name: "Python", level: "Advanced" },
        { name: "SQL", level: "Intermediate" },
        { name: "Java", level: "Experienced" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },
    {
      category: "Tools",
      icon: <FaTools />,
      details: [
        { name: "Node.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Git/GitHub", level: "Advanced" },
        { name: "Visual Studio", level: "Intermediate" },
        { name: "PyQt5", level: "Intermediate" }
      ]
    }
  ];

  return (
    <div className='experience'>
      <div className='experienceCardContent'>
        <h5>What Skills Do I Have?</h5>
        <h2>My Experience</h2>

        {skills.map((skill, index) => (
          <div className="experienceSection" key={index}>
            <h3>{skill.icon} {skill.category}</h3>
            <div className="experienceDetails">
              {skill.details.map((detail, idx) => (
                <article key={idx}>
                  {skill.icon}
                  <div>
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

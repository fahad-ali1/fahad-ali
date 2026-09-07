import React from "react";
import Tile from "./Tile";
import { skills } from "../../data/content";
import "./Skills.css";

const Skills = () => {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Skills</h2>

        <Tile className="skills-tile">
          <div className="skills-groups">
            {groups.map(([group, items]) => (
              <div key={group} className="skills-group">
                <h3 className="skills-group-title">{group}</h3>
                <div className="skills-tags">
                  {items.map((item) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Tile>
      </div>
    </section>
  );
};

export default Skills;

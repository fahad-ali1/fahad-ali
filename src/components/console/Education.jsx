import React from "react";
import Tile from "./Tile";
import { education } from "../../data/content";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Education</h2>

        <Tile status="complete" statusLabel="Complete" className="education-tile">
          <h3 className="education-school">{education.school}</h3>
          <p className="education-degree">{education.degree}</p>
          <div className="education-meta">
            <span>{education.dates}</span>
          </div>

          <div className="education-coursework">
            {education.coursework.map((course) => (
              <span key={course} className="skill-tag">
                {course}
              </span>
            ))}
          </div>
        </Tile>
      </div>
    </section>
  );
};

export default Education;

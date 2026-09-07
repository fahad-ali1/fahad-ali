import React from "react";
import Tile from "./Tile";
import { experience } from "../../data/content";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Experience</h2>

        <div className="experience-grid">
          {experience.map((role, index) => (
            <Tile
              key={role.id}
              status={role.status}
              statusLabel={role.statusLabel}
              size={role.status === "active" ? "large" : "regular"}
              delay={index * 90}
              className="experience-tile"
            >
              <h3 className="experience-title">{role.title}</h3>
              <p className="experience-org">{role.org}</p>
              <p className="experience-dates">{role.dates}</p>

              <ul className="experience-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>

              {role.stats && (
                <div className="experience-stats">
                  {role.stats.map((stat) => (
                    <div key={stat.label} className="stat-cell">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </Tile>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

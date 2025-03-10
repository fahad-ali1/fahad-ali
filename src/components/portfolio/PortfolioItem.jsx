import React from "react";
import "./portfolio.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const PortfolioItem = ({ item, index }) => {
  const hasButtons = item.githubUrl || item.liveUrl;

  return (
    <div
      className="portfolioItem"
      style={{
        animationDelay: `${0.8 + index * 0.1}s`,
      }}
    >
      <article id={item.id}>
        <div className="portfolioItem-image">
          <img src={require(`../../assets/${item.image}`)} alt={item.altText} />
        </div>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>

        {hasButtons && (
          <div className="project-buttons">
            {item.githubUrl && (
              <a
                className="githubButton"
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            )}
            {item.liveUrl && (
              <a
                className="livePageButton"
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        )}

        <div className="skills">
          <div>Skills:</div>
          {Array.isArray(item.skills) ? (
            <div style={{ marginTop: "0.5rem" }}>
              {item.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <span className="skill-tag">{item.skills}</span>
          )}
        </div>
      </article>
    </div>
  );
};

export default PortfolioItem;

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tile from "./Tile";
import { featuredProjects } from "../../data/content";
import { projects } from "../../data/projects";
import "./Projects.css";

const projectImages = import.meta.glob("../../assets/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

const getProjectImage = (filename) => {
  const match = Object.entries(projectImages).find(([path]) =>
    path.endsWith(`/${filename}`)
  );
  return match?.[1];
};

const ProjectLinks = ({ githubUrl, liveUrl }) => {
  if (!githubUrl && !liveUrl) return null;
  return (
    <div className="project-links">
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub /> Code
        </a>
      )}
      {liveUrl && (
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> Live
        </a>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Projects</h2>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <Tile
              key={project.id}
              status={project.status}
              statusLabel={project.statusLabel}
              delay={index * 90}
              className="featured-tile"
              media={
                project.image && (
                  <img
                    src={getProjectImage(project.image)}
                    alt={project.altText}
                    loading="lazy"
                  />
                )
              }
            >
              <h3 className="featured-title">{project.title}</h3>
              <p className="featured-dates">{project.dates}</p>
              <p className="featured-description">{project.description}</p>

              {project.bullets && (
                <ul className="featured-bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}

              {project.learned && (
                <p className="project-card-learned featured-learned">
                  <span>What I learned:</span> {project.learned}
                </p>
              )}

              <div className="featured-tags">
                {project.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
            </Tile>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-image">
                <img
                  src={getProjectImage(project.image)}
                  alt={project.altText}
                  loading="lazy"
                />
              </div>
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.learned && (
                  <p className="project-card-learned">
                    <span>What I learned:</span> {project.learned}
                  </p>
                )}
                <div className="project-card-tags">
                  {project.skills.map((skill) => (
                    <span key={skill} className="skill-tag skill-tag-small">
                      {skill}
                    </span>
                  ))}
                </div>
                <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

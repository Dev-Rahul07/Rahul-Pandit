import React from "react";
import { Github } from "./Icons";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      {project.tech.map((t, i) => (
        <span key={i} className="tech-tag">
          {t}
        </span>
      ))}
    </div>
    <div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        <Github className="icon icon-sm mr-1" /> View on GitHub
      </a>
    </div>
  </div>
);

export default ProjectCard;

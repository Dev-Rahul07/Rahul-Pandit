import React from "react";
import { Github } from "./Icons";

const ProjectCard = ({ project }) => (
  <div className="project-card p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
    <p className="text-gray-400 mb-4">{project.description}</p>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((t, i) => (
        <span
          key={i}
          className="bg-gray-700 text-white px-2 py-1 rounded text-sm"
        >
          {t}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="flex gap-6"> {/* Increased gap between buttons */}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded transition-all duration-200 hover:bg-blue-700 hover:underline"
        >
          <Github className="icon icon-sm" /> GitHub
        </a>
      )}
      {project.deployUrl && (
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded transition-all duration-200 hover:bg-green-700 hover:underline"
        >
           Live
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;


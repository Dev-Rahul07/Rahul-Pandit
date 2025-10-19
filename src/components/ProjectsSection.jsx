// src/components/ProjectsSection.jsx
import React from "react";
import { Briefcase, Github } from "./Icons";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectsCard";
import { placeholderProjects } from "../data/placeholderProjects";
import { userData } from "../data/useData";

const ProjectsSection = () => (
  <section id="projects" className="section">
    <SectionTitle icon={Briefcase} title="Featured Projects" />
    <div className="projects-grid">
      {placeholderProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    <div className="view-all">
      <a style={{ textDecoration: "none" }}
        href={userData.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        View All Projects on GitHub  - <Github className="icon icon-md" />
      </a>
    </div>
  </section>
);

export default ProjectsSection;

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
    <div className="flex flex-wrap gap-4">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200"
        >
          <Github className="icon icon-sm" />
          <span className="hover:underline">GitHub</span>
        </a>
      )}
      {project.deployUrl && (
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all duration-200"
        >
          <span className="hover:underline">Live</span>
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;


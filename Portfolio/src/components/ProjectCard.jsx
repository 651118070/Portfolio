import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
const ProjectCard= ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  steps,
  challenges,
  solutions,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-600 dark:text-white">{title}</h3>
        <p className="dark:text-gray-300 text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            
            <span
              key={tech.name}
              className={`px-3 py-1 rounded-full text-sm font-medium ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className="mb-6 flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-900 transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Development Process</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Challenges Faced</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2 dark:text-white">Solutions Implemented</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
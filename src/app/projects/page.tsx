"use client";
import { SetStateAction, useState } from "react";
import { projectList } from "./projects";

interface Projects {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  const openModal = (project: SetStateAction<Projects | null>) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <div className="py-16 text-center">
        <h1 className="text-5xl pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          My Projects
        </h1>
        <p className="text-xl text-gray-300 mt-4">
          Explore some of the projects I’ve built. Click on a project for more
          details.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-lg p-6 transition-transform transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
            onClick={() => openModal(project)}
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-3 group-hover:text-gray-200">
              {project.description.substring(0, 60)}...
            </p>
            <div className="flex flex-wrap mt-4 gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gradient-to-r from-teal-200 to-blue-300 text-gray-800 rounded-full text-sm font-medium shadow-sm transition-transform transform hover:scale-110"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-11/12 max-w-lg bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl shadow-2xl p-6 animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h2>
              <button
                className="text-gray-300 hover:text-red-500 text-2xl transition-transform transform hover:scale-110"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>

            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <h3 className="text-xl font-semibold mb-2 text-teal-400">
              Technologies:
            </h3>
            <ul className="list-none mb-6">
              {selectedProject.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="inline-block px-3 py-1 bg-teal-500 text-white rounded-full shadow-md text-sm font-medium mr-2 mb-2"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 px-6 bg-teal-600 text-white font-bold rounded-lg shadow-lg hover:scale-105 transform transition-transform"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;


import React from 'react';
import type { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300 z-10"></div>
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"/>
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20 text-white">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <p className="text-sm text-neutral-400">{project.category} — {project.year}</p>
          <h3 className="text-2xl md:text-3xl font-semibold mt-1">{project.title}</h3>
          <p className="mt-4 text-sm text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


import React from 'react';
import type { Project } from '../constants';

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  openLabel?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, openLabel = 'Open case study' }) => {
  return (
    <button
      type="button"
      className="group relative overflow-hidden cursor-pointer text-left w-full bg-neutral-100 dark:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-colors duration-300 z-10"></div>
      <img src={project.imageUrl} alt="" className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 p-5 sm:p-6 md:p-8 flex flex-col justify-between z-20 text-white">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs md:text-sm text-neutral-300 break-keep">{project.category}</p>
          <p className="text-xs md:text-sm text-neutral-300 whitespace-nowrap">{project.year}</p>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight break-keep">{project.title}</h3>
          <p className="mt-3 text-sm md:text-base text-neutral-100 leading-relaxed break-keep max-w-xl">
            {project.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase text-white">
            {openLabel}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </span>
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;

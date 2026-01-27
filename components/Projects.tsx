
import React from 'react';
import { WORK_EXPERIENCE_DATA, UI_TEXT } from '../constants';
import ProjectCard from './ProjectCard';
import { useLanguage } from './context/LanguageContext';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="work-experience" className="py-20 md:py-32">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl sm:text-5xl font-medium tracking-tight border-b border-black dark:border-white pb-4 w-full md:w-auto">
          {UI_TEXT[language].workExperience.title}
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm hidden sm:block">
          {UI_TEXT[language].workExperience.period}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {WORK_EXPERIENCE_DATA[language].map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

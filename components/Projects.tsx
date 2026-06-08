
import React, { useState, useEffect } from 'react';
import { WORK_EXPERIENCE_DATA, UI_TEXT } from '../constants';
import type { Project } from '../constants';
import ProjectCard from './ProjectCard';
import { useLanguage } from './context/LanguageContext';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="work-experience" className="py-20 md:py-32 relative">
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
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8" onClick={closeModal}>
          <div className="bg-white dark:bg-neutral-900 w-full max-w-7xl h-[95vh] rounded-2xl overflow-y-auto relative flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 right-0 z-50 flex justify-end p-4 md:p-6 pointer-events-none w-full h-0">
              <button 
                className="pointer-events-auto w-12 h-12 flex items-center justify-center text-2xl text-black dark:text-white bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-sm transition-transform hover:scale-110"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            
            <div className="w-full h-[40vh] md:h-[60vh] shrink-0 relative mt-[-80px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 text-white">
                <p className="text-sm md:text-base font-medium tracking-wider uppercase mb-3 opacity-90">{selectedProject.category} — {selectedProject.year}</p>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">{selectedProject.title}</h3>
              </div>
            </div>
            
            <div className="p-8 md:p-16 lg:p-20 bg-white dark:bg-neutral-900">

              {/* STAR Framework */}
              <div className="space-y-10">

                {/* Situation */}
                {selectedProject.situation && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold">S</span>
                      {language === 'ko' ? '상황' : 'Situation'}
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 break-keep">
                      {selectedProject.situation}
                    </p>
                  </div>
                )}

                {/* Task */}
                {selectedProject.task && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold">T</span>
                      {language === 'ko' ? '과제' : 'Task'}
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 break-keep">
                      {selectedProject.task}
                    </p>
                  </div>
                )}

                {/* Action */}
                {selectedProject.action && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-bold">A</span>
                      {language === 'ko' ? '행동' : 'Action'}
                    </h4>
                    <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap break-keep">
                      {selectedProject.action}
                    </p>
                  </div>
                )}

                {/* Results - Highlighted */}
                {selectedProject.results && (
                  <div className="p-6 bg-black dark:bg-white rounded-xl">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-600 mb-3 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-neutral-700 dark:bg-neutral-200 flex items-center justify-center text-[10px] font-bold text-white dark:text-black">R</span>
                      {language === 'ko' ? '결과' : 'Results'}
                    </h4>
                    <p className="text-base leading-relaxed text-white dark:text-black whitespace-pre-wrap break-keep">
                      {selectedProject.results}
                    </p>
                  </div>
                )}
              </div>

              {/* Image Gallery */}
              {selectedProject.detailImageUrls && selectedProject.detailImageUrls.length > 0 && (
                <div className="mt-12 space-y-4">
                  <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                    {language === 'ko' ? '상세 이미지' : 'Gallery'}
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedProject.detailImageUrls.map((url, i) => (
                      <div key={i} className="w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                        <img
                          src={url}
                          alt={`${selectedProject.title} ${i + 1}`}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

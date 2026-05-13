
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
            
            <div className="p-8 md:p-16 lg:p-24 bg-white dark:bg-neutral-900 flex flex-col gap-16 lg:gap-24">
              
              {/* Row 1: Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                    {language === 'ko' ? 'Overview' : 'Overview'}
                  </h4>
                  <p className="text-lg md:text-xl leading-relaxed text-neutral-800 dark:text-neutral-200 font-light text-left break-keep whitespace-pre-wrap">
                    {selectedProject.description}
                  </p>
                </div>
                {selectedProject.detailImageUrls && selectedProject.detailImageUrls[0] && (
                  <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                    <img src={selectedProject.detailImageUrls[0]} alt={`${selectedProject.title} detail 1`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                )}
              </div>

              {/* Row 2: Project Description */}
              {selectedProject.projectDescription && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                      {language === 'ko' ? '프로젝트 설명' : 'Project Description'}
                    </h4>
                    <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light text-left break-keep whitespace-pre-wrap">
                      {selectedProject.projectDescription}
                    </p>
                  </div>
                  {selectedProject.detailImageUrls && selectedProject.detailImageUrls[1] && (
                    <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                      <img src={selectedProject.detailImageUrls[1]} alt={`${selectedProject.title} detail 2`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>
              )}

              {/* Row 3: My Role */}
              {selectedProject.myRole && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                      {language === 'ko' ? '내가 한 것' : 'My Role'}
                    </h4>
                    <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light text-left break-keep whitespace-pre-wrap">
                      {selectedProject.myRole}
                    </p>
                  </div>
                  {selectedProject.detailImageUrls && selectedProject.detailImageUrls[2] && (
                    <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                      <img src={selectedProject.detailImageUrls[2]} alt={`${selectedProject.title} detail 3`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>
              )}

              {/* Row 4: Contribution */}
              {selectedProject.contribution && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                      {language === 'ko' ? '기여도' : 'Contribution'}
                    </h4>
                    <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light text-left break-keep whitespace-pre-wrap">
                      {selectedProject.contribution}
                    </p>
                  </div>
                  {selectedProject.detailImageUrls && selectedProject.detailImageUrls[3] && (
                    <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                      <img src={selectedProject.detailImageUrls[3]} alt={`${selectedProject.title} detail 4`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>
              )}

              {/* Row 5: Results & Achievements */}
              {selectedProject.results && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  <div>
                    <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-3">
                      {language === 'ko' ? '결과 / 성과' : 'Results & Achievements'}
                    </h4>
                    <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light text-left break-keep whitespace-pre-wrap">
                      {selectedProject.results}
                    </p>
                  </div>
                  {selectedProject.detailImageUrls && selectedProject.detailImageUrls[4] && (
                    <div className="w-full aspect-square overflow-hidden rounded-xl shadow-lg">
                      <img src={selectedProject.detailImageUrls[4]} alt={`${selectedProject.title} detail 5`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                </div>
              )}

              {/* Remaining Images */}
              {selectedProject.detailImageUrls && selectedProject.detailImageUrls.length > 5 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {selectedProject.detailImageUrls.slice(5).map((url, i) => (
                    <div key={i + 5} className="w-full aspect-square overflow-hidden rounded-xl shadow-lg col-start-1 lg:col-start-2">
                      <img src={url} alt={`${selectedProject.title} detail ${i + 6}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  ))}
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

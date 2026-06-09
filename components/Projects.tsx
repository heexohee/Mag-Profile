
import React, { useState, useEffect } from 'react';
import { WORK_EXPERIENCE_DATA, UI_TEXT } from '../constants';
import type { Project } from '../constants';
import ProjectCard from './ProjectCard';
import { useLanguage } from './context/LanguageContext';

// Helper function to render structured content with section headers
const renderStructuredContent = (text: string, isDark: boolean = false) => {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    // Section header (■)
    if (trimmedLine.startsWith('■')) {
      elements.push(
        <h5 key={index} className={`font-semibold mt-6 mb-3 text-sm md:text-base ${isDark ? 'text-neutral-200 dark:text-neutral-800' : 'text-neutral-800 dark:text-neutral-200'}`}>
          {trimmedLine}
        </h5>
      );
    }
    // Sub-section or decision header (starts with number or Issue)
    else if (/^(Issue \d+\.|[0-9]+\.)/.test(trimmedLine) || /^(Stage|Phase) \d+\./.test(trimmedLine)) {
      elements.push(
        <p key={index} className={`font-medium mt-4 mb-2 ${isDark ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-700 dark:text-neutral-300'}`}>
          {trimmedLine}
        </p>
      );
    }
    // Table-like content (starts with |)
    else if (trimmedLine.startsWith('|')) {
      elements.push(
        <p key={index} className={`font-mono text-xs md:text-sm ${isDark ? 'text-neutral-400 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>
          {line}
        </p>
      );
    }
    // Bullet points or indented items
    else if (trimmedLine.startsWith('•') || trimmedLine.startsWith('→') || trimmedLine.startsWith('└') || trimmedLine.startsWith('❌') || trimmedLine.startsWith('✓') || trimmedLine.startsWith('✗')) {
      elements.push(
        <p key={index} className={`ml-2 my-1 ${isDark ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-600 dark:text-neutral-400'}`}>
          {line}
        </p>
      );
    }
    // Labels like "Reason:", "Solution:", etc.
    else if (/^(이유|결정|증상|영향|해결|배운 점|원인|문제의 본질|해결책|설계 포인트|아키텍처 원칙|설계 철학|핵심 인사이트|Reason|Decision|Symptom|Impact|Solution|Learning|Cause|Problem essence|Design point|Architecture principle|Design philosophy|Core insight):/.test(trimmedLine)) {
      const [label, ...rest] = trimmedLine.split(':');
      elements.push(
        <p key={index} className={`my-2 ${isDark ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-600 dark:text-neutral-400'}`}>
          <span className={`font-semibold ${isDark ? 'text-neutral-200 dark:text-neutral-800' : 'text-neutral-700 dark:text-neutral-300'}`}>{label}:</span>
          {rest.join(':')}
        </p>
      );
    }
    // Empty lines
    else if (trimmedLine === '') {
      elements.push(<div key={index} className="h-2" />);
    }
    // Regular text
    else {
      elements.push(
        <p key={index} className={`my-1 ${isDark ? 'text-neutral-300 dark:text-neutral-700' : 'text-neutral-600 dark:text-neutral-400'}`}>
          {line}
        </p>
      );
    }
  });

  return <div className="space-y-0">{elements}</div>;
};

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

              {/* Keywords */}
              {selectedProject.keywords && selectedProject.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="text-xs md:text-sm px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full font-medium"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              )}

              {/* STAR Framework */}
              <div className="space-y-10">

                {/* Situation */}
                {selectedProject.situation && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold">S</span>
                      {language === 'ko' ? '상황' : 'Situation'}
                    </h4>
                    <div className="text-base md:text-lg leading-relaxed break-keep">
                      {renderStructuredContent(selectedProject.situation)}
                    </div>
                  </div>
                )}

                {/* Task */}
                {selectedProject.task && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold">T</span>
                      {language === 'ko' ? '과제' : 'Task'}
                    </h4>
                    <div className="text-base md:text-lg leading-relaxed break-keep">
                      {renderStructuredContent(selectedProject.task)}
                    </div>
                  </div>
                )}

                {/* Action */}
                {selectedProject.action && (
                  <div>
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold">A</span>
                      {language === 'ko' ? '행동' : 'Action'}
                    </h4>
                    <div className="text-sm md:text-base leading-relaxed break-keep">
                      {renderStructuredContent(selectedProject.action)}
                    </div>
                  </div>
                )}

                {/* Results - Highlighted */}
                {selectedProject.results && (
                  <div className="p-6 md:p-8 bg-black dark:bg-white rounded-xl">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-600 mb-4 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-neutral-700 dark:bg-neutral-200 flex items-center justify-center text-xs font-bold text-white dark:text-black">R</span>
                      {language === 'ko' ? '결과' : 'Results'}
                    </h4>
                    <div className="text-sm md:text-base leading-relaxed break-keep">
                      {renderStructuredContent(selectedProject.results, true)}
                    </div>
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

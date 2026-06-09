import React from 'react';
import { SKILLS_DATA, UI_TEXT } from '../constants';
import { useLanguage } from './context/LanguageContext';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="expertise" className="py-20 md:py-32 scroll-mt-28">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight border-b border-black dark:border-white pb-4 inline-block">
            {UI_TEXT[language].skills.title}
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4">
            {SKILLS_DATA.map((skill, index) => (
              <div key={index} className="border-b border-neutral-300 dark:border-neutral-800 py-3 transition-colors duration-500">
                <p className="text-lg text-black dark:text-neutral-200">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

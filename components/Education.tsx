import React from 'react';
import { EDUCATION_DATA, UI_TEXT } from '../constants';
import { useLanguage } from './context/LanguageContext';

const Education: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="education" className="py-20 md:py-32">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight border-b border-black dark:border-white pb-4 inline-block">
            {UI_TEXT[language].education.title}
          </h2>
        </div>
        <div className="md:col-span-8">
          <div className="space-y-6">
            {EDUCATION_DATA[language].map((edu) => (
              <div key={edu.id} className="border-b border-neutral-300 dark:border-neutral-800 pb-4 transition-colors duration-500">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{edu.year}</p>
                <h3 className="text-xl font-medium text-black dark:text-neutral-100 mt-1">{edu.degree}</h3>
                <p className="text-base text-neutral-600 dark:text-neutral-300">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

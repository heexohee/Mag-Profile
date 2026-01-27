import React from 'react';
import { UI_TEXT } from '../constants';
import { useLanguage } from './context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
        <div className="relative aspect-[4/5] md:col-span-2 max-w-sm mx-auto md:mx-0">
          <div className="absolute inset-0 border-2 border-black dark:border-white"></div>
          <img
            src="/profile.png"
            alt="Portrait"
            className="w-full h-full object-cover p-3 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="md:col-span-3 md:pr-10">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight mb-6">
            {UI_TEXT[language].about.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
            {UI_TEXT[language].about.p1}
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {UI_TEXT[language].about.p2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

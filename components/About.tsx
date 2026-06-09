import React from 'react';
import { CAPABILITIES, UI_TEXT } from '../constants';
import { useLanguage } from './context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-28">
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
          <div className="mt-10">
            <p className="text-xs uppercase text-neutral-500 dark:text-neutral-400 mb-4">
              {UI_TEXT[language].about.proofTitle}
            </p>
            <div className="grid sm:grid-cols-3 border-y border-neutral-300 dark:border-neutral-800">
              {CAPABILITIES[language].map((capability) => (
                <div key={capability.title} className="py-5 sm:px-4 sm:first:pl-0 sm:border-r sm:last:border-r-0 border-neutral-300 dark:border-neutral-800">
                  <h3 className="text-base font-semibold text-black dark:text-white break-keep">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 break-keep">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

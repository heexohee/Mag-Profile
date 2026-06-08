
import React from 'react';
import AnimatedText from './AnimatedText';
import { useLanguage } from './context/LanguageContext';
import { UI_TEXT } from '../constants';

const Hero: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-between -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-24 bg-white dark:bg-black transition-colors duration-500 pt-32 pb-16 md:pb-24">
      {/* Title Section - Centered vertically in the upper part */}
      <div className="flex-grow flex items-center justify-center w-full px-6">
        <div className="text-center">
          {/* Role - Above name */}
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-neutral-400 dark:text-neutral-500 mb-4">
            {UI_TEXT[language].hero.role}
          </p>

          {/* Name */}
          <h1 className="text-[12vw] sm:text-[11vw] font-medium tracking-tighter leading-none">
            <AnimatedText text={UI_TEXT[language].hero.title} />
          </h1>

          {/* Tags - Below name */}
          <div className="flex justify-center gap-3 mt-6">
            {UI_TEXT[language].hero.tags.map((tag: string, i: number) => (
              <span key={i} className="text-xs md:text-sm px-3 py-1 border border-neutral-300 dark:border-neutral-700 rounded-full text-neutral-500 dark:text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description Section - Fixed at the bottom */}
      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24">
        {/* Horizontal Line */}
        <div className="w-full h-[0.5px] bg-neutral-300 dark:bg-neutral-800 mb-8 md:mb-12"></div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start">
          <div className="md:col-span-5 text-lg md:text-xl lg:text-2xl font-normal leading-tight text-neutral-900 dark:text-neutral-100 pr-8 md:pr-16">
            {UI_TEXT[language].hero.subtitleLeft}
          </div>
          <div className="md:col-start-7 md:col-span-6 text-sm md:text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {UI_TEXT[language].hero.subtitleRight}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More discrete */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-30">
        <span className="text-[9px] tracking-[0.4em] text-neutral-400 dark:text-neutral-600 flex flex-col items-center gap-3">
          {UI_TEXT[language].hero.scroll}
          <div className="w-[0.5px] h-6 bg-neutral-400 dark:bg-neutral-600"></div>
        </span>
      </div>
    </section>
  );
};

export default Hero;

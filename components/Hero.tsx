
import React from 'react';
import AnimatedText from './AnimatedText';
import { useLanguage } from './context/LanguageContext';
import { UI_TEXT } from '../constants';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-24">
      <div className="absolute inset-0 bg-white/90 dark:bg-black/60 z-0 transition-colors duration-500"></div>
      <img
        src="https://picsum.photos/seed/hero-bg/1920/1080?grayscale&blur=2"
        alt="Abstract background"
        className="absolute inset-0 w-full h-full object-cover z-[-1] opacity-40"
      />

      <div className="relative z-10 w-full border-y border-neutral-300 dark:border-neutral-700 py-20 md:py-32 transition-colors duration-500">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-none tracking-tighter">
          <span className="inline-block overflow-hidden pb-2">
            <AnimatedText text={UI_TEXT[language].hero.title1} />
          </span>
          <br />
          <span className="inline-block overflow-hidden pb-2">
            <AnimatedText text={UI_TEXT[language].hero.title2} stagger={0.03} />
          </span>
        </h1>
        <p className="mt-6 text-sm md:text-base max-w-lg mx-auto text-neutral-600 dark:text-neutral-300 transition-colors duration-500">
          {UI_TEXT[language].hero.subtitle}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <span className="text-xs tracking-widest text-neutral-500 dark:text-neutral-400 animate-bounce flex items-center gap-2">
          {UI_TEXT[language].hero.scroll}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Hero;

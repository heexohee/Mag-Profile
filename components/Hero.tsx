
import React from 'react';
import AnimatedText from './AnimatedText';
import { useLanguage } from './context/LanguageContext';
import { HERO_METRICS, UI_TEXT } from '../constants';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const heroText = UI_TEXT[language].hero;

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 96;
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: targetTop, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-24 bg-white dark:bg-black transition-colors duration-500 pt-28 pb-14 md:pt-32 md:pb-20">
      <div className="flex-grow flex items-center justify-center w-full px-6">
        <div className="w-full max-w-7xl">
          <div className="text-center">
            <p className="text-xs md:text-sm uppercase text-neutral-500 dark:text-neutral-400 mb-4">
              {heroText.role}
            </p>

            <h1 className="text-[18vw] sm:text-[14vw] md:text-[11vw] font-medium leading-none">
              <AnimatedText text={heroText.title} />
            </h1>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
              {heroText.tags.map((tag: string, i: number) => (
                <span key={i} className="text-xs md:text-sm px-3 py-1 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection('work-experience')}
                className="min-h-11 px-5 py-3 bg-black text-white dark:bg-white dark:text-black text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                {heroText.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="min-h-11 px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              >
                {heroText.secondaryCta}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24">
        <div className="w-full h-[0.5px] bg-neutral-300 dark:bg-neutral-800 mb-8 md:mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          <div className="lg:col-span-4 text-lg md:text-xl lg:text-2xl font-normal leading-tight text-neutral-900 dark:text-neutral-100">
            {heroText.subtitleLeft}
          </div>
          <div className="lg:col-span-4 text-sm md:text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            {heroText.subtitleRight}
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 border-y border-neutral-200 dark:border-neutral-800">
            {HERO_METRICS[language].map((metric) => (
              <div key={metric.label} className="py-4 px-3 border-r last:border-r-0 border-neutral-200 dark:border-neutral-800">
                <p className="text-2xl md:text-3xl font-semibold tracking-tight text-black dark:text-white">{metric.value}</p>
                <p className="mt-2 text-[11px] md:text-xs leading-snug text-neutral-500 dark:text-neutral-400 break-keep">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-30 hidden md:block">
        <span className="text-[9px] tracking-[0.4em] text-neutral-400 dark:text-neutral-600 flex flex-col items-center gap-3">
          {heroText.scroll}
          <div className="w-[0.5px] h-6 bg-neutral-400 dark:bg-neutral-600"></div>
        </span>
      </div>
    </section>
  );
};

export default Hero;

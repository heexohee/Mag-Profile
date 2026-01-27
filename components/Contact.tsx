import React from 'react';
import { UI_TEXT, SOCIAL_LINKS } from '../constants';
import { useLanguage } from './context/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  return (
    <footer id="contact" className="py-20 md:py-32 text-neutral-600 dark:text-neutral-300 transition-colors duration-500">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-black dark:text-white mb-6">
            {UI_TEXT[language].contact.title} <br />
          </h2>
          <p className="mb-6 max-w-md text-lg">
            {UI_TEXT[language].contact.p1}
          </p>
          <a href="mailto:rsoy2918@gmail.com" className="text-xl md:text-2xl text-black dark:text-white transition-colors border-b border-neutral-400 hover:border-black dark:hover:border-white pb-1 inline-block">
            rsoy2918@gmail.com
          </a>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end">
          <div className="space-y-4">
            <h4 className="text-lg text-black dark:text-white font-semibold">Find me on</h4>
            <ul className="text-base space-y-2">
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Instagram</a></li>
              <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">Github</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-20 md:mt-32 border-t border-neutral-300 dark:border-neutral-800 pt-6 text-center text-sm text-neutral-500">
        <p className="tracking-widest uppercase">© 2026 SoHee Jeong. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;

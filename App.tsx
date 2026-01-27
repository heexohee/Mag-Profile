
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LineDivider from './components/LineDivider';
import Awards from './components/Awards';
import PersonalProjects from './components/PersonalProjects';
import Education from './components/Education';
import Certifications from './components/Certifications';

import { LanguageProvider } from './components/context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen antialiased overflow-x-hidden transition-colors duration-300">
        <Header />
        <main className="px-4 sm:px-8 md:px-12 lg:px-24">
          <Hero />
          <LineDivider />
          <About />
          <LineDivider />
          <Education />
          <LineDivider />

          <Projects />
          <LineDivider />
          <PersonalProjects />
          <LineDivider />
          <Skills />
          <LineDivider />
          <Certifications />
          <LineDivider />
          <Awards />
          <LineDivider />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;

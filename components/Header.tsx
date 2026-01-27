import React, { useState, useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import { UI_TEXT } from '../constants';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { href: '#about', label: UI_TEXT[language].nav.about, id: 'about' },
    { href: '#education', label: UI_TEXT[language].nav.education, id: 'education' },
    { href: '#work-experience', label: UI_TEXT[language].nav.workExperience, id: 'work-experience' },
    { href: '#personal-projects', label: UI_TEXT[language].nav.personalProjects, id: 'personal-projects' },
    { href: '#expertise', label: UI_TEXT[language].nav.expertise, id: 'expertise' },
    { href: '#certifications', label: UI_TEXT[language].nav.certifications, id: 'certifications' },
    { href: '#awards', label: UI_TEXT[language].nav.awards, id: 'awards' },
  ];

  // Initialize theme based on system preference or local storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedTheme = localStorage.getItem('theme');

      const shouldBeDark = storedTheme === 'dark' || (!storedTheme && isSystemDark);
      setIsDark(shouldBeDark);

      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Update theme when state changes
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY;
      const offset = 500; // trigger point offset from top

      let currentSectionId = '';

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition + offset) {
          currentSectionId = section.id;
        }
      }

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollPosition >= documentHeight - 50) {
        const lastNavItem = navItems[navItems.length - 1];
        if (lastNavItem) {
          currentSectionId = lastNavItem.id;
        }
      }

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [language]); // Re-run when language changes to update labels if needed? Actually labels are re-rendered naturally. 

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleGoTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 100; // Offset for the fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md p-6 transition-colors duration-300 border-b border-gray-200 dark:border-transparent">
        <div className="flex justify-between items-center text-black dark:text-white">
          <a href="#" onClick={handleGoTop} className="font-bold text-lg md:text-xl tracking-widest uppercase">
            SoHee Jeong
          </a>

          <div className="flex items-center gap-6 md:gap-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={handleNavClick} className="relative font-semibold hover:opacity-70 transition-opacity py-2 cursor-pointer">
                      {item.label}
                      {activeSection === item.id && (
                        <span className="absolute bottom-[-6px] left-0 w-full h-[3px] bg-black dark:bg-white"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-neutral-300 dark:bg-neutral-700 mx-2"></div>

            {/* Utility Buttons Group */}
            <div className="flex items-center gap-3">
              {/* Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="p-2 text-sm font-bold rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors w-10 h-10 flex items-center justify-center"
                aria-label="Toggle Language"
              >
                {language === 'en' ? 'KO' : 'EN'}
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                  </svg>
                )}
              </button>
            </div>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-[60]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-black z-[55] transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full text-black dark:text-white">
          <button
            className="absolute top-6 right-6 z-[60]"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col space-y-8 text-center">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className="transform transition-transform duration-300"
                  style={{
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <a href={item.href} onClick={handleNavClick} className="text-2xl font-semibold hover:opacity-70 transition-opacity py-2">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

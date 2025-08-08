import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getNavItemClass = (section: string) => {
    const baseClass = "transition-colors duration-300 relative";
    const activeClass = "text-blue-400";
    const inactiveClass = "text-gray-300 hover:text-blue-400";
    
    return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            VanAn
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={getNavItemClass('home')}
            >
              Home
              {activeSection === 'home' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={getNavItemClass('about')}
            >
              About
              {activeSection === 'about' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={getNavItemClass('skills')}
            >
              Skills
              {activeSection === 'skills' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={getNavItemClass('projects')}
            >
              Projects
              {activeSection === 'projects' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={getNavItemClass('contact')}
            >
              Contact
              {activeSection === 'contact' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"></div>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className={`${getNavItemClass('home')} py-2 text-left`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`${getNavItemClass('about')} py-2 text-left`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={`${getNavItemClass('skills')} py-2 text-left`}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`${getNavItemClass('projects')} py-2 text-left`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`${getNavItemClass('contact')} py-2 text-left`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="/Company Logo.jpg" 
              alt="RANBRIDGE Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'services', 'team', 'contact', 'courses'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize hover:text-blue-500 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="https://interns-ui-for-showing-cources.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 capitalize hover:text-blue-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Visit cources
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'services', 'team', 'contact', 'courses'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 capitalize w-full text-left"
              >
                {item}
              </button>
            ))}
            <a
              href="https://ranbridge-services-private-limited.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-500 capitalize w-full text-left"
            >
              Visit cources
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

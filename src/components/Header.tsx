import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on home page, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navigationItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Mission', id: 'mission' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <Shield className="w-8 h-8 text-blue-600 group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-pulse group-hover:animate-spin"></div>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-all duration-300 group-hover:scale-105 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Digitiq Technologies
              </h1>
              <p className={`text-xs transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-blue-200'
              }`}>
                (OPC)
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-all duration-300 hover:scale-105 group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-300'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </button>
            ))}
          </nav>

          <button
            className="md:hidden group"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={`w-6 h-6 group-hover:rotate-90 transition-transform duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 group-hover:scale-110 transition-transform duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 p-4 shadow-lg animate-fade-in-up">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 hover:font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
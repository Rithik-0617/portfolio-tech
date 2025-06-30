'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import React from 'react'; // <-- Add this import

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-[2vw] sm:px-[3vw] lg:px-[4vw] max-w-[95vw]">
        <div className="flex items-center justify-between py-[1.5vh] sm:py-[2vh]">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-[4vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.8vw] 2xl:text-[1.5vw] font-bold text-blue-700">
              Rithik VE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-[2vw] flex items-baseline space-x-[2vw] lg:space-x-[1.5vw] xl:space-x-[1.2vw]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-blue-700 hover:text-blue-900 px-[1.5vw] lg:px-[1.2vw] xl:px-[1vw] 2xl:px-[0.8vw] py-[1vh] lg:py-[0.8vh] xl:py-[0.6vh] rounded-md text-[2.2vw] sm:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw] 2xl:text-[1vw] font-medium transition-colors duration-200 hover:bg-blue-50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-700 hover:text-blue-900 p-[1vw] sm:p-[0.8vw]"
            >
              {isOpen ? (
                <X className="w-[6vw] h-[6vw] sm:w-[5vw] sm:h-[5vw]" />
              ) : (
                <Menu className="w-[6vw] h-[6vw] sm:w-[5vw] sm:h-[5vw]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <div className="px-[3vw] pt-[2vh] pb-[3vh] space-y-[1vh]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-blue-700 hover:text-blue-900 block px-[3vw] py-[2vh] rounded-md text-[4vw] sm:text-[3.5vw] font-medium transition-colors duration-200 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default React.memo(Navigation);
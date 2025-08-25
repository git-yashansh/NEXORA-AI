import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface PillNavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo: string;
  logoAlt: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt,
  items,
  activeHref = '#home',
  className = '',
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#000000'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeHref);
  const enquireNowUrl = "https://forms.google.com/your-form-id"; // Replace with actual Google Form URL

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => getHrefFromLabel(item.label));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.querySelector(sections[i]);
        if (element && element.getBoundingClientRect().top + window.scrollY <= scrollPosition) {
          setCurrentActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      setCurrentActive(href);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else {
      // Handle regular navigation
      window.location.href = href;
    }
  };

  const getHrefFromLabel = (label: string) => {
    const labelMap: { [key: string]: string } = {
      'Home': '#home',
      'About': '#about',
      'Services': '#services',
      'Process': '#process',
      'Technology Stack': '#technology',
      'Why Choose Us': '#why-choose',
      'CEO': '#ceo',
      'Contact': '#contact'
    };
    return labelMap[label] || `#${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-purple-500/20' : 'bg-transparent'
      } ${className}`}
      style={{ backgroundColor: scrolled ? baseColor + 'F2' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-600 bg-clip-text text-transparent">
              NexoraAI
            </h1>
          </div>

          {/* Desktop Navigation Pills */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-purple-400/20">
              {items.map((item) => {
                const href = getHrefFromLabel(item.label);
                const isActive = href === currentActive;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-black shadow-lg scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                    }`}
                    style={{
                      backgroundColor: isActive ? pillColor : 'transparent',
                      color: isActive ? pillTextColor : undefined
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Enquire Now Button - Desktop */}
          <div className="hidden md:block">
            <a
              href={enquireNowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {items.map((item) => {
              const href = getHrefFromLabel(item.label);
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(href)}
                  className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-300"
                >
                  {item.label}
                </button>
              );
            })}
            {/* Mobile Enquire Now Button */}
            <div className="pt-4">
              <a
                href={enquireNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg shadow-purple-500/25 block text-center mx-3"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default PillNav;
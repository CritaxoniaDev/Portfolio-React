import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import '../css/header.css'
import { FaHome, FaUser, FaGraduationCap, FaCogs, FaProjectDiagram, FaEnvelope, FaGoogle, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

function Header({ isDarkMode }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollProgress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrollProgress);

      const sections = ['home', 'aboutme', 'education', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 ${isMobile ? 'left-2 right-2' : isTablet ? 'left-10 right-10' : 'left-28 right-28'
        } ${isMobile ? 'px-4' : isTablet ? 'px-12' : 'px-20'
        } rounded-full z-50 ${isDarkMode
          ? 'bg-gray-900 bg-opacity-50 border border-gray-700'
          : 'bg-white bg-opacity-50 border border-purple-300'
        } text-white shadow-lg transition-all duration-300 ease-in-out ${scrollPosition > 0 ? 'mt-0' : 'mt-5'
        }`}
      style={{
        transform: `translateY(${scrollPosition > 0 ? '0' : '-5px'})`,
        opacity: scrollPosition > 0 ? 1 : 0.95,
        backdropFilter: 'blur(5px)',
      }}
    >
      <div className={`h-1 ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-300'} transition-all duration-300 ease-in-out`} style={{ width: `${scrollProgress}%` }}></div>
      <nav className={`container mx-auto ${isMobile ? 'px-4 py-3' : isTablet ? 'px-5 py-3.5' : 'px-6 py-4'}`}>
        <div className="flex justify-between items-center">
          <div className={`${isMobile ? 'text-xl' : isTablet ? 'text-xl' : 'text-2xl'} font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
            <span className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} animate-pulse`}>Gian </span>
            <span className={`bg-clip-text animate-pulse text-transparent ${isDarkMode ? 'bg-gradient-to-r from-red-400 to-orange-600' : 'bg-gradient-to-r from-red-600 to-orange-800'}`}>Alcantara</span>
          </div>
          <div className="hidden md:flex space-x-1">
            {[
              { name: 'Home', icon: FaHome },
              { name: 'About Me', icon: FaUser },
              { name: 'Education', icon: FaGraduationCap },
              { name: 'Skills', icon: FaCogs },
              { name: 'Projects', icon: FaProjectDiagram },
              { name: 'Contact', icon: FaEnvelope }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase().replace(' ', '')}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.name.toLowerCase().replace(' ', ''));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`group ${isTablet ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-md'} rounded-full font-medium capitalize transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex items-center ${activeSection === item.name.toLowerCase().replace(' ', '')
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-glow'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow'
                    : `${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-white hover:text-indigo-600'}`
                  }`}
              >
                <item.icon className="mr-2 group-hover:animate-bounce" />
                <span className="relative">
                  {item.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 ${isDarkMode ? 'bg-gray-400' : 'bg-indigo-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span>
                </span>
              </a>
            ))}
          </div>
          <div className="md:hidden relative">
            <button
              className={`${isDarkMode ? 'text-white' : 'text-black'} focus:outline-none hover:text-yellow-300 transition duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current mt-1.5 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>

            <div
              className={`
                absolute right-0 mt-2 py-2 w-48 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl
                transition-all duration-500 ease-in-out transform origin-top-right
                ${isMenuOpen
                  ? 'scale-100 opacity-100 translate-y-0 rotate-0'
                  : 'scale-95 opacity-0 -translate-y-4 rotate-3 pointer-events-none'
                }
              `}
            >
              {[
                { name: 'Home', icon: FaHome },
                { name: 'About Me', icon: FaUser },
                { name: 'Education', icon: FaGraduationCap },
                { name: 'Skills', icon: FaCogs },
                { name: 'Projects', icon: FaProjectDiagram },
                { name: 'Contact', icon: FaEnvelope }
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(' ', '')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.name.toLowerCase().replace(' ', ''));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`
                    block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-indigo-500'} hover:text-white
                    transition-all duration-300 ease-in-out transform
                    ${isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                    }
                  `}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <item.icon className="inline-block mr-2" />
                  {item.name}
                </a>
              ))}
              <div className="flex justify-center space-x-4 mt-4">
                {[
                  { icon: FaGoogle, color: '#4285F4', hoverColor: '#3367D6' },
                  { icon: FaGithub, color: isDarkMode ? '#E6EDF3' : '#333', hoverColor: isDarkMode ? '#FFFFFF' : '#2b3137' },
                  { icon: FaLinkedin, color: '#0077B5', hoverColor: '#0a66c2' },
                  { icon: FaFacebook, color: '#4267B2', hoverColor: '#385898' }
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`text-[${item.color}] hover:text-[${item.hoverColor}] transition-all duration-300 ease-in-out transform hover:scale-110`}
                    style={{
                      opacity: isMenuOpen ? 1 : 0,
                      transform: `translateY(${isMenuOpen ? '0' : '10px'})`,
                      transitionDelay: `${(index + 1) * 100}ms`
                    }}
                  >
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header
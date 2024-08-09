import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './css/education.css';
import { FaGraduationCap, FaUniversity, FaSchool, FaBook, FaLaptopCode, FaUserGraduate } from 'react-icons/fa';

const EducationCard = ({ school, degree, date, address, status, logo, image, icon: Icon, isMobile, isDarkMode }) => (
  <div className={`order-1 ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} rounded-xl shadow-xl ${isMobile ? 'w-full' : 'w-5/12'} ${isMobile ? 'px-6 py-6' : 'px-10 py-8'} transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden animate-on-scroll border-2 ${isDarkMode ? 'border-teal-700 hover:border-teal-500' : 'border-teal-100 hover:border-teal-300'}`}>
    <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-20 transition-opacity duration-300 filter blur-sm" style={{ backgroundImage: `url(${image})` }}></div>

    <div className={`absolute -bottom-10 -right-10 ${isMobile ? 'w-48 h-48' : 'w-64 h-64'} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={isDarkMode ? "#0D9488" : "#14B8A6"} d="M40,120 L60,120 L60,80 L40,80 L40,120 Z M70,120 L90,120 L90,80 L70,80 L70,120 Z M100,120 L140,120 L140,100 L120,100 L120,80 L100,80 L100,120 Z" transform="rotate(-30 100 100) scale(1.5)" />
      </svg>
    </div>

    <div className={`absolute top-4 right-4 ${isMobile ? 'w-12 h-12' : 'w-16 h-16'} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12`}>
      <img src={logo} alt={`${school} logo`} className="w-full h-full object-contain drop-shadow-lg" />
    </div>
    <h3 className={`mb-4 font-bold ${isDarkMode ? 'text-teal-400 group-hover:text-teal-300' : 'text-teal-700 group-hover:text-teal-600'} ${isMobile ? 'text-lg' : 'text-xl'} flex items-center transition-colors duration-300 pb-2 border-b-2 ${isDarkMode ? 'border-teal-700 group-hover:border-teal-500' : 'border-teal-200 group-hover:border-teal-300'}`}>
      {Icon ? <Icon className={`mr-3 ${isMobile ? 'text-xl' : 'text-2xl'}`} /> : <FaUniversity className={`mr-3 ${isMobile ? 'text-xl' : 'text-2xl'}`} />} {school}
    </h3>
    <div className={`space-y-2 ${isDarkMode ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-700 group-hover:text-gray-800'} transition-colors duration-300`}>
      <p className={`font-semibold ${isDarkMode ? 'text-teal-400 group-hover:text-teal-300' : 'text-teal-600 group-hover:text-teal-500'} ${isMobile ? 'text-base' : 'text-lg'}`}>{degree}</p>
      <p className={`italic ${isMobile ? 'text-sm' : 'text-base'}`}>{date}</p>
      <p className={`${isMobile ? 'text-xs' : 'text-sm'} ${isDarkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-500 group-hover:text-gray-600'} transition-colors duration-300`}>{address}</p>
    </div>
    <div className={`mt-6 flex justify-end pt-4 border-t-2 ${isDarkMode ? 'border-teal-700 group-hover:border-teal-500' : 'border-teal-100 group-hover:border-teal-200'}`}>
      <span className={`bg-${status.color}-100 ${isDarkMode ? 'text-gray-900' : `text-${status.color}-800`} ${isMobile ? 'text-xs' : 'text-sm'} font-medium px-3 py-1.5 rounded-full shadow-md transform group-hover:scale-110 transition-all duration-300 border ${isDarkMode ? `border-${status.color}-400` : `border-${status.color}-300`}`}>
        {status.text}
      </span>
    </div>
  </div>
);

const Education = ({ isDarkMode }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      const triggerBottom = window.innerHeight / 5 * 4;

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
          element.classList.add('show');
        } else {
          element.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  const educationData = [
    {
      school: "Lithan Educlaas",
      degree: "Applied Degree in Software Engineering",
      date: "2023 - Present",
      address: "Eunos Road 8 #07-02 Lifelong Learning Institute Singapore 408601",
      status: { color: "yellow", text: "In Progress" },
      logo: "images/lithan.png",
      image: "images/lithanimg.png"
    },
    {
      school: "First City Providential College",
      degree: "Bachelor of Science in Information Technology - Software Engineering",
      date: "2023 - Present",
      address: "Blk 7 Phase F Francisco Homes, Narra, San Jose del Monte City, 3023 Bulacan",
      status: { color: "yellow", text: "In Progress" },
      logo: "images/fcpc.png",
      image: "images/fcpcimg.png"
    },
    {
      school: "Sapang Palay National High School",
      degree: "Senior High School",
      date: "2021 - 2022",
      address: "152 Kapiwa St, San Jose del Monte City, Bulacan",
      status: { color: "yellow", text: "With Honors" },
      logo: "images/spnhs.png",
      image: "images/spnhsimg.png",
      icon: FaSchool  // Add this line
    }
  ];

  return (
    <section id="education" className={`min-h-screen py-14 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-blue-100'} overflow-hidden relative animate-fade-in`}>
      <div className="absolute inset-0 opacity-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className={`absolute bottom-20 right-20 w-32 h-32 ${isDarkMode ? 'bg-purple-700' : 'bg-purple-300'} rounded-full animate-pulse`}></div>
        <div className={`absolute top-20 left-20 w-24 h-24 ${isDarkMode ? 'bg-teal-700' : 'bg-teal-300'} rounded-full animate-bounce`}></div>
        <div className={`absolute top-3/4 left-1/4 w-40 h-40 ${isDarkMode ? 'bg-pink-700' : 'bg-pink-300'} rounded-full animate-ping`}></div>
      </div>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-10 animate-fade-in`} style={{ animationDelay: '0.4s' }}></div>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-dots-pattern-dark' : 'bg-dots-pattern'} opacity-10 animate-fade-in`} style={{ animationDelay: '0.6s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`animate-on-scroll ${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold pt-10 mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-green-400 to-teal-400' : 'from-green-600 to-teal-600'}`}>Educational Journey</h2>
        <div className="animate-on-scroll flex justify-center space-x-8 mb-8">
          <FaBook className={`${isMobile ? 'text-3xl' : 'text-4xl'} ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          <FaLaptopCode className={`${isMobile ? 'text-3xl' : 'text-4xl'} ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          <FaUserGraduate className={`${isMobile ? 'text-3xl' : 'text-4xl'} ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} />
        </div>
        <div className={`${isMobile ? 'max-w-full' : 'max-w-4xl'} mx-auto`}>
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className={`border-2-2 absolute border-opacity-20 ${isDarkMode ? 'border-teal-500' : 'border-teal-700'} h-full border`} style={{ left: '50%' }}></div>

            <div className="animate-on-scroll mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className={`z-20 flex items-center order-1 ${isDarkMode ? 'bg-teal-500' : 'bg-teal-600'} shadow-xl w-12 h-12 rounded-full`}>
                <h1 className="mx-auto font-semibold text-lg text-white">2023</h1>
              </div>
            </div>

            {educationData.map((edu, index) => (
              <div key={index} className={`animate-on-scroll mb-8 flex ${isMobile ? 'flex-col' : 'justify-between'} items-center w-full ${!isMobile && (index % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline')}`}>
                {!isMobile && <div className="order-1 w-5/12"></div>}
                <div className={`z-20 flex items-center order-1 ${isDarkMode ? 'bg-teal-500' : 'bg-teal-600'} shadow-xl w-12 h-12 rounded-full ${isMobile ? 'mb-4' : ''}`}>
                  {edu.icon ? <edu.icon className="mx-auto text-white text-2xl" /> : <FaGraduationCap className="mx-auto text-white text-2xl" />}
                </div>
                <EducationCard {...edu} isMobile={isMobile} isDarkMode={isDarkMode} />
              </div>
            ))}

            <div className="animate-on-scroll mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className={`z-20 flex items-center order-1 ${isDarkMode ? 'bg-teal-500' : 'bg-teal-600'} shadow-xl w-12 h-12 rounded-full`}>
                <h1 className="mx-auto font-semibold text-lg text-white">2021</h1>
              </div>
            </div>

            {/* Decorative elements */}
            <div className={`absolute top-0 left-0 w-16 h-16 ${isDarkMode ? 'bg-green-700' : 'bg-green-200'} rounded-full opacity-50 animate-pulse`}></div>
            <div className={`absolute bottom-0 right-0 w-20 h-20 ${isDarkMode ? 'bg-blue-700' : 'bg-blue-200'} rounded-full opacity-50 animate-bounce`}></div>
            <div className={`absolute top-1/2 left-1/4 w-12 h-12 ${isDarkMode ? 'bg-yellow-700' : 'bg-yellow-200'} rounded-full opacity-50 animate-ping`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-14 h-14 ${isDarkMode ? 'bg-red-700' : 'bg-red-200'} rounded-full opacity-50 animate-spin-slow`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
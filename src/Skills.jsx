import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaCode, FaUserFriends, FaVuejs, FaJava,  FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaComments, FaUsers, FaLightbulb, FaSyncAlt, FaClock, FaChessKing, FaBootstrap, FaJsSquare, FaWind, FaLeaf, FaLifeRing, FaPhp, FaLaravel, FaPencilRuler, FaFigma, FaServer, FaCat, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const Skills = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('technical');
  const [expandedSkill, setExpandedSkill] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  const technicalSkills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-red-500', category: 'frontend' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500', category: 'frontend' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500', category: 'frontend' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', category: 'frontend' },
    { name: 'jQuery', icon: FaJsSquare, color: 'text-blue-400', category: 'frontend' },
    { name: 'Tailwind', icon: FaWind, color: 'text-teal-500', category: 'frontend' },
    { name: 'React', icon: FaReact, color: 'text-blue-400', category: 'frontend' },
    { name: 'Java', icon: FaJava, color: 'text-red-500', category: 'backend' },
    { name: 'Spring Boot', icon: FaLeaf, color: 'text-green-500', category: 'backend' },
    { name: 'MySQL', icon: FaDatabase, color: 'text-blue-600', category: 'backend' },
    { name: 'Spring MVC', icon: FaLeaf, color: 'text-green-600', category: 'backend' },
    { name: 'Liferay', icon: FaLifeRing, color: 'text-blue-500', category: 'backend' },
    { name: 'PHP', icon: FaPhp, color: 'text-purple-600', category: 'backend' },
    { name: 'Laravel', icon: FaLaravel, color: 'text-red-600', category: 'backend' },
    { name: 'Axure RP', icon: FaPencilRuler, color: 'text-gray-600', category: 'uiux' },
    { name: 'Figma', icon: FaFigma, color: 'text-purple-500', category: 'uiux' },
    { name: 'Apache', icon: FaServer, color: 'text-red-500', category: 'backend' },
    { name: 'Tomcat', icon: FaCat, color: 'text-yellow-600', category: 'backend' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500', category: 'frontend' },
    { name: 'Vue', icon: FaVuejs, color: 'text-green-600', category: 'frontend' },
  ];

  const softSkills = [
    { name: 'Communication', icon: FaComments, color: 'text-green-500' },
    { name: 'Teamwork', icon: FaUsers, color: 'text-blue-500' },
    { name: 'Problem Solving', icon: FaLightbulb, color: 'text-yellow-500' },
    { name: 'Adaptability', icon: FaSyncAlt, color: 'text-purple-500' },
    { name: 'Time Management', icon: FaClock, color: 'text-red-500' },
    { name: 'Leadership', icon: FaChessKing, color: 'text-indigo-500' },
  ];

  const currentSkills = activeTab === 'technical' ? technicalSkills : softSkills;

  const getSkillInfo = (skillName) => {
    switch (skillName) {
      case 'HTML':
        return "Proficient in creating structured, semantic markup for web pages.";
      case 'CSS':
        return "Skilled in styling web pages, including responsive design and CSS animations.";
      case 'Bootstrap':
        return "Experienced in using Bootstrap for rapid, responsive web development.";
      case 'JavaScript':
        return "Proficient in both vanilla JS and modern ES6+ features, including async programming.";
      case 'jQuery':
        return "Skilled in using jQuery for DOM manipulation and AJAX requests.";
      case 'Tailwind':
        return "Experienced in using Tailwind CSS for utility-first styling approach.";
      case 'React':
        return "Proficient in building complex UIs with React, including state management and hooks.";
      case 'Java':
        return "Experienced in object-oriented programming and building robust backend systems.";
      case 'Spring Boot':
        return "Skilled in creating microservices and RESTful APIs using Spring Boot.";
      case 'MySQL':
        return "Proficient in database design, complex queries, and performance optimization.";
      case 'Spring MVC':
        return "Experienced in building web applications using the Spring MVC framework.";
      case 'Liferay':
        return "Skilled in developing and customizing Liferay portals and portlets.";
      case 'PHP':
        return "Proficient in server-side scripting and building dynamic web applications with PHP.";
      case 'Laravel':
        return "Experienced in rapid application development using the Laravel framework.";
      case 'Axure RP':
        return "Skilled in creating interactive wireframes and prototypes for user testing.";
      case 'Figma':
        return "Proficient in collaborative UI/UX design and prototyping using Figma.";
      case 'Apache':
        return "Experienced in configuring and managing Apache web servers.";
      case 'Tomcat':
        return "Skilled in deploying and managing Java web applications on Tomcat servers.";
      case 'TypeScript':
        return "Proficient in using TypeScript for static typing and enhanced JavaScript development.";
      case 'Vue':
        return "Experienced in building single-page applications (SPAs) with Vue.js.";
      case 'Communication':
        return "Excellent verbal and written communication skills, able to convey complex ideas clearly.";
      case 'Teamwork':
        return "Strong team player with experience in collaborative development environments.";
      case 'Problem Solving':
        return "Analytical thinker with a knack for finding innovative solutions to complex problems.";
      case 'Adaptability':
        return "Quick learner, able to adapt to new technologies and changing project requirements.";
      case 'Time Management':
        return "Efficient in prioritizing tasks and meeting deadlines in fast-paced environments.";
      case 'Leadership':
        return "Experienced in leading small teams and mentoring junior developers.";
      default:
        return "Skilled in utilizing this technology for efficient and effective development.";
    }
  };

  const SkillModal = ({ skill, onClose }) => {
    const animation = useSpring({
      from: { opacity: 0, transform: 'scale(0.9)' },
      to: { opacity: 1, transform: 'scale(1)' },
      config: { tension: 300, friction: 20 }
    });

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
        <animated.div style={animation} onClick={(e) => e.stopPropagation()} className="w-full max-w-md mx-4">
          <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} ${isMobile ? 'p-4' : isTablet ? 'p-6' : 'p-8'} rounded-lg`}>
            <h3 className={`${isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'} font-bold mb-4`}>{skill.name}</h3>
            <p className={`mb-4 ${isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'}`}>{getSkillInfo(skill.name)}</p>
            <div className="flex justify-end">
              <button
                className={`${isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'} text-white ${isMobile ? 'px-2 py-1 text-xs' : isTablet ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base'} rounded-full transition-colors duration-300`}
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </animated.div>
      </div>
    );
  };

  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDarkMode ? "#4B5563" : "#4F46E5"} stopOpacity="0.1" />
            <stop offset="100%" stopColor={isDarkMode ? "#1F2937" : "#60A5FA"} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad1)">
          <animate attributeName="opacity" values="0.3;0.1;0.3" dur="5s" repeatCount="indefinite" />
        </rect>
        <circle cx="10%" cy="10%" r="50" fill={isDarkMode ? "#4B5563" : "#4F46E5"} opacity="0.1">
          <animate attributeName="r" values="50;70;50" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="90%" cy="90%" r="70" fill={isDarkMode ? "#1F2937" : "#60A5FA"} opacity="0.1">
          <animate attributeName="r" values="70;50;70" dur="6s" repeatCount="indefinite" />
        </circle>
        <path d="M0,50 Q50,0 100,50 T200,50" stroke={isDarkMode ? "#4B5563" : "#4F46E5"} strokeWidth="2" fill="none" opacity="0.1">
          <animate attributeName="d" values="M0,50 Q50,0 100,50 T200,50;M0,50 Q50,100 100,50 T200,50;M0,50 Q50,0 100,50 T200,50" dur="10s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );

  return (
    <section id="skills" className={`min-h-screen py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-blue-100'} relative overflow-hidden`}>
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-blue-400' : 'from-indigo-600 to-blue-600'} animate-pulse`}>
          My Skills
        </h2>
        <div className="flex justify-center mb-8">
          <button
            className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-l-full ${activeTab === 'technical' ? (isDarkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white') : (isDarkMode ? 'bg-gray-800 text-indigo-400' : 'bg-white text-indigo-600')} ${isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'}`}
            onClick={() => handleTabChange('technical')}
          >
            <FaCode className="mr-2" /> Technical Skills
          </button>
          <button
            className={`flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-r-full ${activeTab === 'soft' ? (isDarkMode ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white') : (isDarkMode ? 'bg-gray-800 text-indigo-400' : 'bg-white text-indigo-600')} ${isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'}`}
            onClick={() => handleTabChange('soft')}
          >
            <FaUserFriends className="mr-2" /> Soft Skills
          </button>
        </div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          loopedSlides={currentSkills.length}
          cardsEffect={{
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            type: 'progressbar',
          }}
          modules={[EffectCards, Autoplay, Navigation, Pagination]}
          className={`skills-slider max-w-3xl mx-auto ${isDarkMode ? 'dark-mode-swiper' : ''}`}
        >
          {currentSkills.map((skill, index) => (
            <SwiperSlide key={index} className={`w-[280px] sm:w-[320px] md:w-[360px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
              <div className="p-6 flex flex-col items-center">
                <skill.icon className={`${isMobile ? 'text-4xl' : 'text-5xl'} ${skill.color} mb-4`} />
                <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${isMobile ? 'text-sm' : 'text-base'} text-center mb-4`}>{getSkillInfo(skill.name).slice(0, isMobile ? 80 : 100)}...</p>
                <button
                  className={`${isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'} text-white ${isMobile ? 'text-sm px-3 py-1.5' : 'px-4 py-2'} rounded-full transition-colors duration-300`}
                  onClick={() => setExpandedSkill(skill)}
                >
                  Learn More
                </button>
              </div>
            </SwiperSlide>
          ))}
          <div className={`swiper-pagination !bottom-0 ${isDarkMode ? '!bg-indigo-700' : '!bg-indigo-600'}`}></div>
        </Swiper>
    </div>
      {
    expandedSkill && (
      <SkillModal
        skill={expandedSkill}
        onClose={() => setExpandedSkill(null)}
      />
    )
  }
    </section >
  );
};

export default Skills;
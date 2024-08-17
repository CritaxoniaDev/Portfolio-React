import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectData = [
  {
    title: "North Sussex Judo",
    description: "A Java terminal console program to compute monthly training fees for athletes, simplifying fee calculations and managing financial commitments.",
    technologies: ["Java"],
    image: "../images/project-1.png",
    githubLink: "https://github.com/CritaxoniaDev/North-Sussex-Judo",
    objective: "Build a software program that calculates monthly expenses for judo athletes, including training plans, competition entries, and private coaching hours."
  },
  {
    title: "DoBu Martial Arts",
    description: "A website for a martial arts gym offering various classes, fitness training, and self-defense courses.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
    image: "../images/project-2.png",
    githubLink: "https://github.com/CritaxoniaDev/Dobu-Martial-Arts",
    objective: "Design and create an engaging website for DoBu Martial Arts, showcasing the gym's offerings and allowing users to manage their membership."
  },
  {
    title: "Boutiqa E-Commerce",
    description: "A prototype design for a Rich Internet Application (RIA) facilitating product promotion and purchases.",
    technologies: ["Axure RP 10"],
    image: "../images/project-3.png",
    githubLink: "https://github.com/yourusername/boutiqa-ecommerce",
    objective: "Develop a prototype application providing a customer-centric experience, focusing on enhancing user experience for both sellers and buyers."
  },
  {
    title: "Enomy Finances",
    description: "A computer system for personal finance services, serving both staff and clients.",
    technologies: ["JSP", "CSS", "JavaScript", "Bootstrap", "MySQL", "Java (Spring Framework)"],
    image: "../images/project-4.png",
    githubLink: "https://github.com/CritaxoniaDev/Enomy-Finances",
    objective: "Design and implement a new computer system for Enomy-Finances, including core system processes and software designs for client presentation."
  },
  {
    title: "ABC Cars Portal",
    description: "A Used Car Sales portal with functionalities for Users and Administrators.",
    technologies: ["JSP", "CSS", "Bootstrap", "JavaScript", "MySQL", "Java (Spring Framework)", "Spring Boot"],
    image: "../images/project-5.png",
    githubLink: "https://github.com/CritaxoniaDev/ABCCarsPortal",
    objective: "Create a comprehensive online platform facilitating the buying and selling of used cars, with distinct functionalities for users and administrators."
  },
  {
    title: "Meals on Wheels",
    description: "A software application for MerryMeal, a charitable organization delivering meals to qualified adults.",
    technologies: ["PHP", "Laravel", "Blade", "MySQL", "CSS", "JavaScript", "Tailwind", "Stripe API"],
    image: "../images/project-6.png",
    githubLink: "https://github.com/CritaxoniaDev/Mealsonwheels",
    objective: "Design and develop a comprehensive software application for MerryMeal to streamline various processes including registration, meal planning, and delivery management."
  },
  {
    title: "BINIWebsite",
    description: "A fan made website for the Bini Philipine-Pop Group.",
    technologies: ["React", "Typescript", "Tailwind", "CSS", "JavaScript"],
    image: "../images/project-7.png",
    githubLink: "https://biniwebsite.netlify.app/",
    objective: "Just to make a website for the BINI Philipine-Pop Group."
  },
  {
    title: "MUPlayer",
    description: "A website that is a music player that can search music and videos through a integration of Youtube API.",
    technologies: ["React", "Youtube API", "Tailwind", "CSS", "JavaScript"],
    image: "../images/project-8.png",
    githubLink: "https://github.com/yourusername/meals-on-wheels",
    objective: "Just to make a website for a Music Player."
  },
  {
    title: "Weather-App",
    description: "A website that can search for the weather of a specific location using the Open Weather API.",
    technologies: ["Vanilla", "Open Weather API", "Tailwind", "CSS", "JavaScript"],
    image: "../images/project-9.png",
    githubLink: "https://weather-finder-crit.netlify.app/",
    objective: "Just to make a website for a Weather Finder."
  }
];

const Projects = ({ isDarkMode }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <section id="projects" className={`min-h-screen py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-blue-100'}`}>
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-indigo-400 to-blue-400' : 'from-indigo-600 to-blue-600'} animate-pulse`}>
          Projects
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          loopedSlides={projectData.length}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
          className={`project-slider ${isDarkMode ? 'dark-mode-swiper' : ''}`}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className="w-[300px] sm:w-[350px] md:w-[400px] transition-all duration-300">
              {({ isActive }) => (
                <div className={`${isActive ? '' : 'blur-[2px]'} transition-all duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl overflow-hidden shadow-2xl ${isDarkMode ? 'hover:shadow-indigo-900' : 'hover:shadow-indigo-200'} hover:-translate-y-2 relative h-[500px] sm:h-[550px] md:h-[600px] border-4 ${isDarkMode ? 'border-indigo-700 hover:border-indigo-600' : 'border-indigo-200 hover:border-indigo-300'}`}>
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <h3 className="absolute bottom-4 left-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className={`p-4 sm:p-6 px-6 sm:px-8 overflow-y-auto h-[calc(100%-16rem)] sm:h-[calc(100%-18rem)] md:h-[calc(100%-20rem)] ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p className="mb-4 text-xs sm:text-sm md:text-base">{project.description}</p>
                    <div className="mb-4">
                      <h4 className={`${isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'} font-semibold mb-2 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}`}>
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`${isDarkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-100 text-indigo-800'} px-2 py-1 rounded-full ${isMobile ? 'text-[10px]' : isTablet ? 'text-xs' : 'text-sm'} font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm"><strong className={isDarkMode ? 'text-indigo-400' : 'text-indigo-700'}>Objective:</strong> {project.objective}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                    <div className="flex justify-center">
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={`flex items-center text-xs sm:text-sm ${isDarkMode ? 'bg-indigo-700 hover:bg-indigo-800' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full transition-colors duration-300`}>
                        <FaGithub className="mr-2 text-sm sm:text-base" /> View on GitHub or Website
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          <div className={`swiper-button-prev absolute left-0 top-1/2 z-10 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
            <FaChevronLeft size={24} />
          </div>
          <div className={`swiper-button-next absolute right-0 top-1/2 z-10 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
            <FaChevronRight size={24} />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Particles from './components/magicui/particles';
import './css/about.css'

const About = ({ isDarkMode }) => {
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

    return (
        <section id="aboutme" className={`min-h-screen py-20 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-blue-100'} overflow-hidden relative animate-fade-in`}>
            <Particles
                className="absolute inset-0"
                quantity={100}
                staticity={50}
                color={isDarkMode ? "#ffffff" : "#000000"}
                ease={50}
                refresh={false}
            />
            <div className="absolute inset-0 opacity-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className={`absolute bottom-20 right-20 w-32 h-32 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'} rounded-full animate-pulse`}></div>
                <div className={`absolute top-20 left-20 w-24 h-24 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-300'} rounded-full animate-bounce`}></div>
                <div className={`absolute top-3/4 left-1/4 w-40 h-40 ${isDarkMode ? 'bg-pink-600' : 'bg-pink-300'} rounded-full animate-ping`}></div>
            </div>
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-10 animate-fade-in`} style={{ animationDelay: '0.4s' }}></div>
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-dots-pattern-dark' : 'bg-dots-pattern'} opacity-10 animate-fade-in`} style={{ animationDelay: '0.6s' }}></div>

            <div className="container mx-auto px-4 relative z-10 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600'} animate-pulse animate-on-scroll`}>About Me</h2>
                <div className={`max-w-5xl mx-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'} bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg ${isDarkMode ? 'border-gray-700' : 'border-indigo-200'} animate-on-scroll`}>
                    <div className={`${isMobile ? 'flex-col' : 'md:flex'} items-stretch`}>
                        <div className={`${isMobile ? 'w-full' : 'md:w-2/5'} relative overflow-hidden`}>
                            <img className="h-full w-full object-cover" src="images/aboutme.jpg" alt="Gian Raphael D. Alcantara" />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                                <span className="font-bold text-2xl">Gian Raphael</span>
                                <p className="text-lg mt-2">Software Engineering Student</p>
                            </div>
                        </div>
                        <div className={`${isMobile ? 'w-full' : 'md:w-3/5'} p-10 relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white overflow-hidden`}>
                            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4">
                                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="mt-8 font-mono">
                                <p className={`${isMobile ? 'text-base' : 'text-lg'} text-green-400 mb-4 animate-on-scroll`}>// About Me</p>
                                <p className={`${isMobile ? 'text-sm text-justify' : 'text-lg'} leading-relaxed mb-6 animate-on-scroll`}>
                                    <span className={`${isDarkMode ? 'text-orange-300' : 'text-orange-400'}`}>My name is Gian Raphael Alcantara, a dedicated software engineering student at First City Providential College. My mission revolves around mastering programming languages, algorithms, and software development methodologies.</span>
                                </p>
                                <p className={`${isMobile ? 'text-sm text-justify' : 'text-lg'} mb-6 animate-on-scroll`}>
                                    <span className={`${isDarkMode ? 'text-orange-300' : 'text-orange-400'}`}>Fueled by a relentless passion for technology and innovation, I aspire to become a proficient software engineer capable of tackling complex problems and contributing to groundbreaking projects.</span>
                                </p>
                                <p className={`${isMobile ? 'text-sm text-justify' : 'text-lg'} animate-on-scroll`}>
                                    <span className={`${isDarkMode ? 'text-orange-300' : 'text-orange-400'}`}>My vision extends beyond mere academic excellence; I aim to leverage my skills to create impactful solutions that address real-world challenges, whether it's enhancing user experiences, optimizing system performance, or revolutionizing industries through cutting-edge software solutions.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 text-center animate-on-scroll">
                    <a href="#contact" className={`inline-block bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-blue-400' : 'from-indigo-600 to-blue-500'} text-white font-bold py-4 px-10 rounded-full hover:shadow-xl transform hover:-translate-y-2 transition duration-300 relative overflow-hidden group ${isMobile ? 'text-base' : 'text-lg'}`}>
                        <span className="relative z-10">Get in Touch</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
import React, { useState, useEffect, useRef } from 'react'
import SparklesText from "./components/magicui/sparkles-text";
import Particles from './components/magicui/particles';
import { useMediaQuery } from 'react-responsive';
import WordRotate from './components/magicui/word-rotate';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { TextPlugin } from 'gsap/TextPlugin';
import VideoIntroduction from './components/VideoIntroduction';
import ParticleBackground from './components/ParticleBackground';
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaFacebook } from 'react-icons/fa'
import './css/home.css'

function Home({ isDarkMode }) {
    const [isGlowing, setIsGlowing] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [showVideo, setShowVideo] = useState(false);
    gsap.registerPlugin(TextPlugin);

    const skillRef = useRef(null);

    const skills = ['Front-end Developer', 'Back-end Developer', 'UI/UX Designer'];

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        skills.forEach((skill, index) => {
            tl.to(skillRef.current, {
                duration: 1,
                text: skill,
                ease: "power2.inOut",
            }).to(skillRef.current, {
                duration: 1.5,
                delay: 1,
                text: "",
                ease: "power2.inOut",
            });
        });

        return () => tl.kill();
    }, [skills]);

    const letterRefs = useRef({});

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(letterRefs.current['H'], {
            rotation: 360,
            duration: 2,
            ease: "elastic.out(1, 0.3)",
            transformOrigin: "center center",
            repeat: -1,
            yoyo: true
        }, 0);

        tl.to(letterRefs.current['I'], {
            scale: 1.2,
            duration: 1,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        }, 0);

        // Update color separately
        gsap.to(letterRefs.current['I'], {
            color: isDarkMode ? "#818CF8" : "#4F46E5",
            duration: 0.5
        });

        return () => tl.kill();
    }, []);

    useEffect(() => {
        gsap.to(letterRefs.current['I'], {
            color: isDarkMode ? "#818CF8" : "#4F46E5",
            duration: 0.5
        });
    }, [isDarkMode]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            id="home"
            className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900 dark-mode-bg' : 'bg-gradient-to-br from-indigo-50 to-blue-100'} overflow-hidden relative`}
        >
            <Particles
                className="absolute inset-0"
                quantity={100}
                staticity={50}
                color={isDarkMode ? "#ffffff" : "#000000"}
                ease={50}
                refresh={false}
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0"
                style={{ animationDelay: '0.2s' }}
            >
                <div className={`absolute top-10 left-10 w-20 h-20 ${isDarkMode ? 'bg-yellow-500' : 'bg-yellow-300'} rounded-full animate-pulse`}></div>
                <div className={`absolute bottom-10 right-10 w-16 h-16 ${isDarkMode ? 'bg-green-500' : 'bg-green-300'} rounded-full animate-bounce`}></div>
                <div className={`absolute top-1/4 right-1/4 w-24 h-24 ${isDarkMode ? 'bg-red-500' : 'bg-red-300'} rounded-full animate-ping`}></div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'}`}
                style={{ animationDelay: '0.4s' }}
            ></motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`absolute inset-0 ${isDarkMode ? 'bg-dots-pattern-dark' : 'bg-dots-pattern'}`}
                style={{ animationDelay: '0.6s' }}
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className={`max-w-7xl mx-auto px-8 pt-20 sm:px-10 lg:px-12 flex ${isMobile ? 'flex-col' : 'flex-row'} items-center relative z-10`}
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className={`${isMobile ? 'hidden' : 'flex flex-col items-center mr-8'}`}
                >
                    <div className={`w-px h-32 mr-4 bg-gradient-to-b from-transparent ${isDarkMode ? 'via-gray-600 to-transparent' : 'via-gray-400 to-transparent'}`}></div>
                    <div className="flex flex-col space-y-6 my-6 mr-4">
                        <a href="#" className={`${isDarkMode ? 'text-[#5C9EFF] hover:text-[#7EADFF]' : 'text-[#4285F4] hover:text-[#3367D6]'} transition duration-300 transform hover:scale-110`}>
                            <FaGoogle size={28} />
                        </a>
                        <a href="https://github.com/CritaxoniaDev" className={`${isDarkMode ? 'text-[#E6EDF3] hover:text-white' : 'text-[#333] hover:text-[#2b3137]'} transition duration-300 transform hover:scale-110`}>
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/gian-alcantara-7293282a9/" className={`${isDarkMode ? 'text-[#0A66C2] hover:text-[#0077B5]' : 'text-[#0077B5] hover:text-[#0a66c2]'} transition duration-300 transform hover:scale-110`}>
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://www.facebook.com/giancritaxonia/" className={`${isDarkMode ? 'text-[#1877F2] hover:text-[#4267B2]' : 'text-[#4267B2] hover:text-[#385898]'} transition duration-300 transform hover:scale-110`}>
                            <FaFacebook size={28} />
                        </a>
                    </div>
                    <div className={`w-px h-32 mr-4 bg-gradient-to-b ${isDarkMode ? 'from-gray-600 via-gray-600 to-transparent' : 'from-gray-400 via-gray-400 to-transparent'}`}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className={`${isMobile ? 'w-full' : 'md:w-1/2'} flex flex-col items-start`}
                >
                    <h1 className={`font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-white to-blue-400' : 'from-black to-blue-500'} ${isMobile ? 'text-4xl' : 'text-5xl'}`}>
                        <span className={isMobile ? 'text-4xl' : 'text-5xl'}>
                            <span className={`inline-block ${isDarkMode ? 'text-white' : 'text-black'}`} ref={el => letterRefs.current['H'] = el}>H</span>
                            <span>i, </span>
                            <span className={`inline-block ${isDarkMode ? 'text-white' : 'text-black'}`} ref={el => letterRefs.current['I'] = el}>I</span>
                            <span>'m </span>
                        </span>
                        <SparklesText
                            text="Gian Raphael D. Alcantara"
                            className={`relative pt-3 ${isMobile ? 'text-4xl' : 'text-6xl'} inline-block color-cycle`}
                            colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                        />
                    </h1>
                    <p className={`text-xl mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
                        I'm a passionate
                        <svg className="ml-2 inline-block" width="20" height="20" viewBox="0 0 20 20">
                            <path d="M0,0 Q10,20 20,10" fill="none" stroke="currentColor" strokeWidth="2" />
                            <polygon points="20,10 15,5 15,15" fill="currentColor" />
                        </svg>
                    </p>
                    <WordRotate
                        words={skills}
                        className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'} ${isMobile ? 'h-8' : 'h-10'} mb-4`}
                    />
                    <p className={`text-md mb-4 mr-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                        A BSIT - Software Engineering Student at First City Providential College. and a aspiring Full-Stack Developer based in the Philippines.
                    </p>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} space-y-4 md:space-y-0 md:space-x-6 mb-8`}>
                        <button
                            className={`bg-gradient-to-r ${isDarkMode ? 'from-indigo-500 to-blue-400' : 'from-indigo-600 to-blue-500'} text-white py-3 px-8 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition duration-300`}
                            onClick={() => setShowVideo(true)}
                        >
                            Video Introduction
                        </button>
                        {showVideo && <VideoIntroduction isOpen={showVideo} onClose={() => setShowVideo(false)} />}
                        <a
                            href="../document/Gian Raphael D. Alcantara - RESUME LITHAN.docx"
                            download
                            className={`border-2 ${isDarkMode ? 'border-indigo-400 text-indigo-400 hover:bg-indigo-400' : 'border-indigo-600 text-indigo-600 hover:bg-indigo-600'} py-3 px-8 rounded-full hover:text-white transition duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                        >
                            Download CV
                        </a>
                    </div>
                    {showVideo && <VideoIntroduction onClose={() => setShowVideo(false)} />}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className={`${isMobile ? 'w-full mt-12' : 'md:w-1/2 mt-0'} relative`}
                >
                    <div className={`absolute top-0 left-0 w-72 h-72 ${isDarkMode ? 'bg-indigo-600' : 'bg-indigo-300'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob`}></div>
                    <div className={`absolute top-0 right-0 w-72 h-72 ${isDarkMode ? 'bg-blue-600' : 'bg-blue-300'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000`}></div>
                    <div className={`absolute -bottom-8 left-20 w-72 h-72 ${isDarkMode ? 'bg-pink-600' : 'bg-pink-300'} rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000`}></div>
                    <div className="relative">
                        <div className={`absolute inset-0 rounded-full ${isGlowing ? isDarkMode ? 'bg-yellow-500 opacity-50' : 'bg-yellow-100 opacity-50' : ''} transition-opacity duration-300`}></div>
                        <img
                            src="/images/pic.jpg"
                            alt="Your Name"
                            className={`relative rounded-full ${isMobile ? 'w-64 h-64' : 'w-80 h-80'} object-cover mx-auto shadow-2xl ${isDarkMode ? 'border-8 border-gray-700' : 'border-8 border-white'} animate-levitate`}
                        />
                        <button
                            onClick={() => setIsGlowing(!isGlowing)}
                            className={`absolute bottom-0 right-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-2 rounded-full shadow-md`}
                        >
                            {isGlowing ? '✨' : '🔅'}
                        </button>
                    </div>
                    <p className={`text-md mb-4 mt-6 ${isDarkMode ? 'text-gray-300 bg-gray-800' : 'text-gray-600 bg-gray-100'} leading-relaxed font-mono p-4 rounded-lg shadow-inner transition-all duration-300 ${isGlowing ? 'flicker-glow' : ''}`}>
                        <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} ${isGlowing ? 'glow-blue' : ''}`}>function</span> <span className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} ${isGlowing ? 'glow-green' : ''}`}>craftSolutions</span>() &#123;<br />
                        &nbsp;&nbsp;<span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} ${isGlowing ? 'glow-purple' : ''}`}>return</span> <span className={`${isDarkMode ? 'text-orange-400' : 'text-orange-600'} ${isGlowing ? 'glow-orange' : ''}`}>&quot;Elegant ideas brought to life through code&quot;</span>;<br />
                        &#125;
                    </p>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default Home
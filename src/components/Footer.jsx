import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
    return (
        <footer className={`${isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900' : 'bg-gradient-to-r from-purple-600 to-indigo-700'} text-white py-12 relative overflow-hidden`}>
            <div className="container mx-auto px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-bold mb-2 animate-pulse">Gian Raphael D. Alcantara</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-indigo-200'}`}>Software Engineering Student</p>
                        <div className="mt-4">
                            <a href="#" className={`inline-block ${isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-white text-indigo-700 hover:bg-indigo-100'} px-4 py-2 rounded-full font-semibold transition duration-300`}>Download CV</a>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-indigo-200'} transition duration-300 flex items-center justify-center md:justify-start`}>
                                        <span className="mr-2">→</span> {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold mb-4">Connect</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {[FaGithub, FaLinkedin, FaTwitter, FaEnvelope].map((Icon, index) => (
                                <a key={index} href="#" className={`text-white ${isDarkMode ? 'hover:text-gray-300' : 'hover:text-indigo-200'} transition-all duration-300 transform hover:scale-110`}>
                                    <Icon size={28} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`mt-12 text-center text-sm border-t ${isDarkMode ? 'border-gray-700' : 'border-indigo-400'} pt-8`}>
                    <p>&copy; {new Date().getFullYear()} Critaxonia Dev. All rights reserved.</p>
                </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute inset-0 bg-repeat bg-center" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
            </div>
        </footer>
    );
};

export default Footer;
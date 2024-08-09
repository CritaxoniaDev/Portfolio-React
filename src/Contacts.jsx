import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Label } from "/src/components/ui/label";
import { Input } from "/src/components/ui/input";
import { Textarea } from "/src/components/ui/textarea";
import { Button } from "/src/components/ui/button";
import Earth3D from '/src/components/Earth3D';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaComment } from 'react-icons/fa';

const Contacts = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Sending message...');

    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-indigo-50 to-blue-100'} overflow-hidden relative animate-fade-in`}>
      <div className="absolute inset-0 opacity-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className={`absolute bottom-20 right-20 w-32 h-32 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-300'} rounded-full animate-pulse`}></div>
        <div className={`absolute top-20 left-20 w-24 h-24 ${isDarkMode ? 'bg-teal-600' : 'bg-teal-300'} rounded-full animate-bounce`}></div>
        <div className={`absolute top-3/4 left-1/4 w-40 h-40 ${isDarkMode ? 'bg-pink-600' : 'bg-pink-300'} rounded-full animate-ping`}></div>
      </div>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern'} opacity-10 animate-fade-in`} style={{ animationDelay: '0.4s' }}></div>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-dots-pattern-dark' : 'bg-dots-pattern'} opacity-10 animate-fade-in`} style={{ animationDelay: '0.6s' }}></div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <h2 className={`${isMobile ? 'text-4xl' : 'text-5xl'} font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r ${isDarkMode ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600'} animate-pulse`}>
          Let's Connect
        </h2>

        <div className={`flex ${isMobile ? 'flex-col' : 'flex-wrap items-start'} -mx-4`}>
          <div className={`w-full ${isMobile ? 'mb-8' : 'md:w-1/2'} flex items-center justify-center`}>
            <div className="w-full max-w-md mb-8 flex justify-center">
              <div style={{ width: '1700px', height: '400px' }}>
                <Earth3D isDarkMode={isDarkMode} />
              </div>
            </div>
          </div>

          <div className={`w-full ${isMobile ? '' : 'md:w-1/2'} px-4 ${isMobile ? 'mt-8' : ''}`}>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-100'} backdrop-filter backdrop-blur-lg shadow-xl relative`}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>

              <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mb-8 text-center`}>Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
                <div className="space-y-2 relative">
                  <Label htmlFor="name" className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>Name</Label>
                  <FaUser className="absolute top-9 left-3 text-gray-400" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className={`pl-10 transition-all duration-300 ease-in-out border-2 focus:ring-2 focus:ring-opacity-50 ${isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500'
                      }`}
                  />
                </div>

                <div className="space-y-2 relative">
                  <Label htmlFor="email" className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>Email</Label>
                  <FaEnvelope className="absolute top-9 left-3 text-gray-400" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className={`pl-10 transition-all duration-300 ease-in-out border-2 focus:ring-2 focus:ring-opacity-50 ${isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500'
                      }`}
                  />
                </div>

                <div className="space-y-2 relative">
                  <Label htmlFor="message" className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>Message</Label>
                  <FaComment className="absolute top-9 left-3 text-gray-400" />
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    required
                    className={`pl-10 transition-all duration-300 ease-in-out border-2 focus:ring-2 focus:ring-opacity-50 ${isDarkMode
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-indigo-500 focus:ring-indigo-500'
                        : 'bg-white text-gray-900 border-gray-300 focus:border-purple-500 focus:ring-purple-500'
                      }`}
                  />
                </div>

                <Button
                  type="submit"
                  className={`w-full ${isDarkMode
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                    } text-white transition-all duration-300 ease-in-out transform hover:scale-105`}
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="ml-2 animate-pulse" />
                </Button>
              </form>

              {formStatus && (
                <div className={`mt-6 p-3 rounded-lg ${isDarkMode ? 'bg-green-800' : 'bg-green-100'} text-center font-semibold animate-slideUp`}>
                  {formStatus}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className={`${isMobile ? 'text-base' : 'text-lg'} ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Looking forward to hearing from you!
          </p>
          <div className="mt-8 animate-bounce">
            <FaComment className={`${isMobile ? 'text-3xl' : 'text-4xl'} mx-auto ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
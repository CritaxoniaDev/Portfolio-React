import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { useMediaQuery } from 'react-responsive';

function VideoIntroduction({ isOpen, onClose }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 300, friction: 20 },
    onRest: () => {
      if (!isOpen) {
        onClose();
      }
    },
  });

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <animated.div style={{...animation, zIndex: 2147483647}} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
      <div className={`bg-white p-6 rounded-xl shadow-2xl relative ${isMobile ? 'w-full mx-4' : 'max-w-4xl w-full mx-4'}`} style={{ zIndex: 2147483648 }}>
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold mb-4 text-gray-800`}>Video Introduction</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden relative">
          <video className="w-full h-full object-cover" disablePictureInPicture>
            <source src="../video/videointroduction.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <img src="../images/sorry.jpg" alt="Sorry" className="w-24 h-24 mb-4" />
            <p className="text-white text-lg font-semibold">Video playback is disabled</p>
          </div>
        </div>
      </div>
    </animated.div>,
    document.body
  );
}


export default VideoIntroduction;
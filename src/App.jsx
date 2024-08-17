import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaArrowUp, FaBackward, FaForward, FaList } from 'react-icons/fa';
import DarkModeToggle from "react-dark-mode-toggle";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About Me';
import Education from './Education';
import Skills from './Skills';
import Projects from './Project';
import Contacts from './Contacts';
import './css/App.css';
import { motion, AnimatePresence } from 'framer-motion';

const Playlist = ({ songs, currentIndex, onSelectSong, isMobile, isDarkMode }) => (
  <div className={`rounded-lg shadow-lg p-4 ${isMobile ? 'max-h-48' : 'max-h-60'} overflow-y-auto backdrop-filter backdrop-blur-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90' : 'bg-white bg-opacity-90'}`}>
    <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold mb-2 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Playlist</h3>
    <ul className="space-y-2">
      {songs.map((song, index) => (
        <li
          key={index}
          className={`cursor-pointer p-2 rounded-md transition-all duration-200 ${index === currentIndex
            ? isDarkMode
              ? 'bg-indigo-900 text-indigo-200 font-semibold transform scale-105'
              : 'bg-indigo-100 text-indigo-700 font-semibold transform scale-105'
            : isDarkMode
              ? 'hover:bg-gray-700'
              : 'hover:bg-gray-100'
            } ${isMobile ? 'text-sm' : 'text-base'}`}
          onClick={() => onSelectSong(index)}
        >
          {song.title} - {song.artist}
        </li>
      ))}
    </ul>
  </div>
);

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [playlistAnimation, setPlaylistAnimation] = useState('hidden');
  const [showPlaylist, setShowPlaylist] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState([
    { title: "Lagi", artist: "BINI", src: '../audio/Lagi - BINI (Lyrics) (64).mp3' },
    { title: "Sining", artist: "Dionela ft. Jay R", src: '../audio/Dionela - sining (Official Lyric Video) ft. Jay R.mp3' },
    { title: "Dilaw", artist: "Maki", src: '../audio/Maki - Dilaw (Lyrics).mp3' },
    { title: "Salamin Salamin", artist: "BINI", src: '../audio/BINI - Salamin, Salamin (64).mp3' },
    { title: "Na Na Na", artist: "BINI", src: '../audio/BINI - Na Na Na (Lyrics) (64).mp3' }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const fullText = "Loading portfolio...";
    let currentIndex = 0;

    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setLoadingText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 1000);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
      clearInterval(textInterval);
    };
  }, []);

  const toggleVolumeSlider = () => {
    setShowVolumeSlider(!showVolumeSlider);
  };

  const togglePlaylist = () => {
    if (showPlaylist) {
      setPlaylistAnimation('hiding');
      setTimeout(() => {
        setShowPlaylist(false);
        setPlaylistAnimation('hidden');
      }, 300);
    } else {
      setShowPlaylist(true);
      setPlaylistAnimation('showing');
    }
  };

  useEffect(() => {
    audioRef.current = new Audio(songInfo[currentSongIndex].src);
    audioRef.current.loop = false;
    audioRef.current.volume = volume;

    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay prevented. User interaction may be required to play audio.");
      }
    };

    playAudio();

    audioRef.current.addEventListener('ended', () => {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songInfo.length);
    });

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSongIndex, songInfo]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songInfo.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songInfo.length) % songInfo.length);
  };

  return (
    <div className={`w-full h-full m-0 p-0 overflow-x-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50"
          >
            <div className="w-64 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-2 bg-indigo-500 rounded-full"
              />
              <p className="mt-2 text-center text-white">{Math.round(progress)}%</p>
            </div>
            <div className="text-indigo-400 text-2xl font-mono">
              <span className="inline-block">{loadingText}</span>
              <span className="inline-block animate-pulse">|</span>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                &#60;/&#62;
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen w-full"
          >
            <Header isDarkMode={isDarkMode} />
            <main className="flex-grow">
              <Home isDarkMode={isDarkMode} />
              <About isDarkMode={isDarkMode} />
              <Education isDarkMode={isDarkMode} />
              <Skills isDarkMode={isDarkMode} />
              <Projects isDarkMode={isDarkMode} />
              <Contacts isDarkMode={isDarkMode} />
            </main>
            <Footer isDarkMode={isDarkMode} />
            <div className={`fixed ${isMobile ? 'bottom-2 left-2' : 'bottom-4 left-4'} z-50 flex space-x-2 items-center`}>
              <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={isMobile ? 55 : 60}
              />
              <button
                onClick={togglePlaylist}
                className={`${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-full ${isMobile ? 'p-2' : 'p-3'} shadow-lg transition duration-300`}
              >
                <FaList className={isMobile ? 'text-sm' : 'text-base'} />
              </button>
              <button
                onClick={prevSong}
                className={`${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-full ${isMobile ? 'p-2' : 'p-3'} shadow-lg transition duration-300 transform hover:scale-110`}
              >
                <FaBackward className={isMobile ? 'text-sm' : 'text-base'} />
              </button>
              <div className="relative group">
                <button
                  onClick={togglePlay}
                  className={`${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-full ${isMobile ? 'p-2' : 'p-3'} shadow-lg transition duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                >
                  {isPlaying ? <FaPause className={isMobile ? 'text-sm' : 'text-base'} /> : <FaPlay className={isMobile ? 'text-sm' : 'text-base'} />}
                </button>
                <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-800'} text-white ${isMobile ? 'text-xs' : 'text-sm'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
                  {songInfo[currentSongIndex].title} - {songInfo[currentSongIndex].artist}
                </div>
              </div>
              <button onClick={nextSong} className={`${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-full ${isMobile ? 'p-2' : 'p-3'} shadow-lg transition duration-300`}>
                <FaForward className={isMobile ? 'text-sm' : 'text-base'} />
              </button>
              <div className="relative group">
                <button
                  onClick={toggleMute}
                  className={`${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-full ${isMobile ? 'p-2' : 'p-3'} shadow-lg transition duration-300`}
                >
                  {isMuted ? <FaVolumeMute className={isMobile ? 'text-sm' : 'text-base'} /> : <FaVolumeUp className={isMobile ? 'text-sm' : 'text-base'} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 ${isMobile ? 'w-16' : 'w-24'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 appearance-none ${isDarkMode ? 'bg-indigo-300' : 'bg-indigo-200'} h-1 rounded-full outline-none`}
                  style={{
                    background: `linear-gradient(to right, ${isDarkMode ? '#818CF8' : '#4F46E5'} 0%, ${isDarkMode ? '#818CF8' : '#4F46E5'} ${volume * 100}%, ${isDarkMode ? '#4B5563' : '#E5E7EB'} ${volume * 100}%, ${isDarkMode ? '#4B5563' : '#E5E7EB'} 100%)`
                  }}
                />
              </div>
            </div>
            {showPlaylist && (
              <div
                className={`fixed ${isMobile ? 'bottom-16 left-2 right-2' : 'bottom-20 left-4'} z-50 transition-all duration-300 ease-in-out`}
                style={{
                  opacity: playlistAnimation === 'hidden' ? 0 : 1,
                  transform: `translateY(${playlistAnimation === 'showing' ? 0 : playlistAnimation === 'hiding' ? '10px' : '20px'})`,
                  pointerEvents: playlistAnimation === 'hidden' ? 'none' : 'auto'
                }}
              >
                <Playlist
                  songs={songInfo}
                  currentIndex={currentSongIndex}
                  onSelectSong={(index) => setCurrentSongIndex(index)}
                  isMobile={isMobile}
                  isDarkMode={isDarkMode}
                />
              </div>
            )}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className={`fixed bottom-4 right-4 z-50 ${isDarkMode ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-full p-3 shadow-lg transition-all duration-500 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                aria-label="Scroll to top"
              >
                <FaArrowUp className="w-6 h-6 animate-bounce" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
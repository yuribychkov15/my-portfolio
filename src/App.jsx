import { useState, useRef, useMemo } from 'react'
import './App.css'
import { useIsVisible } from '../hooks/isVisible';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ParticlesComponent from '../components/particles';

function App() {

  // Dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log('Button clicked');
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    console.log('Dark mode:', !isDarkMode);
  };

  // useIsVisible for scrolling
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1)

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2)

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3)

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4)

  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5)

  // particle component (two options)
  const heroParticlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { 
      color: { value: isDarkMode ? "#2d3748" : "#ffffff" },
    },
    particles: {
      color: { value: isDarkMode ? "#ffffff" : "#000000" },
      links: { 
        color: isDarkMode ? "#ffffff" : "#000000", 
        enable: true, 
        distance: 150, 
        opacity: 0.3 
      },
      move: { enable: true, speed: 1 },
      number: {value: 100 },
      opacity: { value: 1 },
      size: { value: { min: 1, max: 3 } }, 
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'repulse' },
      },
      modes: {
        grap: { distance: 150 },
        repulse: { distance: 200 },
      },
    },
    detectRetina: true,
  }), [isDarkMode]);

  const minimalParticlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { 
      color: { value: isDarkMode ? "#2d3748" : "#ffffff" }, 
    },
    particles: {
      color: { value: isDarkMode ? "#ffffff" : "#000000" },
      links: { enable: false },
      move: { enable: true, speed: 0.5 },
      number: { value: 40 },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  }), [isDarkMode]);


  return (
    <div>
      <div ref={ref1} className={`relative min-h-screen overflow-hidden transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <div
          className={`fixed top-0 left-0 w-full h-full z-0 transition-opacity duration-700 pointer-events-none ${
            isVisible2 ? 'opacity-0' : 'opacity-100'
          }`}
          >
          <ParticlesComponent id="particles-hero" options={heroParticlesOptions} />
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      <div ref={ref2} className={`relative min-h-screen overflow-hidden transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ParticlesComponent id="particles-about" options={minimalParticlesOptions} />
        </div>
        <div className="relative z-10">
          <About />
        </div>
      </div>

      <div ref={ref3} className={`relative min-h-screen overflow-hidden transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ParticlesComponent id="particles-projects" options={minimalParticlesOptions} />
        </div>
        <div className="relative z-10">
          <Projects />
        </div>
      </div>

      <div ref={ref4} className={`relative min-h-screen overflow-hidden transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <ParticlesComponent id="particles-contact" options={minimalParticlesOptions} />
        </div>
        <div className="relative z-10">
          <Contact />
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className='p-2 hover:bg-gray-400 border-2 md:border-solid rounded font-mono' onClick={toggleDarkMode}>
          Toggle Theme
        </button>
        <a
            href="/my-portfolio/YURI BYCHKOV - RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-400 border-2 md:border-solid rounded font-mono"
        >
            View Resume
        </a>
      </div>

    </div>
  )
}

export default App

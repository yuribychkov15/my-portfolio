import { useState, useRef } from 'react'
import './App.css'
import { useIsVisible } from '../hooks/isVisible';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

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

  return (
    <div>

      <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <Hero />
      </div>

      <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
        <About/>
      </div>

      <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
        <Projects />
      </div>

      <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
        <Contact />
      </div>

      <div className="flex justify-center space-x-4">
        <button className='p-2 hover:bg-gray-400 border-2 md:border-solid rounded font-mono' onClick={toggleDarkMode}>
          Toggle Theme
        </button>
        <a
            href="/YURI BYCHKOV - RESUME.pdf"
            target="_blank"
            className="p-2 hover:bg-gray-400 border-2 md:border-solid rounded font-mono"
        >
            View Resume
        </a>
      </div>

    </div>
  )
}

export default App

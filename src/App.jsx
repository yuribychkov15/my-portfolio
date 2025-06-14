import { useState } from 'react'
import './App.css'


function App() {

  // Dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log('Button clicked');
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    console.log('Dark mode:', !isDarkMode);
  };

  return (
    <div>
      <div className='h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-mono'>
          Hello, I'm Yuri.<br />
          I'm a full stack web developer.
        </h1>
      </div>
      <button className='p-2 hover:bg-gray-400 border-2 md:border-solid rounded font-mono' onClick={toggleDarkMode}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App

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
      <h1 className='text-2xl'>
        Welcome to my portfolio
      </h1>
      <button onClick={toggleDarkMode}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App

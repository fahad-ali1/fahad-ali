import React from 'react'
import './header.css'
import Socials from './socials.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode); 
  };

  return (
    <header>
      <div className="header">
        <h5 className='mainText'>Hello I am</h5>
        <h1>Fahad Ali</h1>
        <h5 className="accent">Fourth Year Computer Science Student</h5>
        <Socials/>

        <div className="buttons">
          <h4>Quick Links</h4>
          <Link to="/about" className="button">About</Link>
          <Link to="/experience" className="button">Experience</Link>
          <Link to="/portfolio" className="button">Projects</Link>
        </div>
        <label>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}/>Dark Mode</label>
      </div>

      <div className='featured'>
          <h1>Featured Projects</h1>
      </div>

    </header>
  )
}

export default Header
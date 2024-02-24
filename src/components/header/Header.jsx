import React from 'react'
import './header.css'
import Socials from './socials.jsx'
import FeaturedProjects from './featuredProjects.jsx';
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  // TODO: Darkmode
  // const [isDarkMode, setIsDarkMode] = useState(true);
  
  // const toggleDarkMode = () => {
  //   setIsDarkMode(prevMode => !prevMode); 
  // };

  return (
    <header>
      <div className='header'>
        {/* <button className="darkmodeButton" onClick={toggleDarkMode}>
          {isDarkMode ? '🌙' : '☀️'} Dark Mode
        </button> */}

        <h5 className='mainText'>Hello</h5>
        <h1>My name is Fahad Ali</h1>
        <h5 className="accent">Fourth Year Computer Science Student</h5>
        <Socials/>

        <div className="aboutme">
            <h4>🚀 Welcome to my website!</h4>
            <h4>💻 Coding Projects | 🏠 Home Servers | 🌐 Full-Stack Applications</h4>
            <h4>🚗 I also love working with vehicles</h4>
        </div>

        <div className="buttons">
          <h4>Quick Links</h4>
          <Link to="/experience" className="button">Experience</Link>
          <Link to="/portfolio" className="button">Projects</Link>
        </div>

      </div>

      <div className='featured'>
          <h1>Featured Projects</h1>
          <FeaturedProjects />
      </div>

    </header>
  )
}

export default Header;
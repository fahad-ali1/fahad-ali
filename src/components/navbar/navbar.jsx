import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {FaProjectDiagram} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}> Home <AiFillHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> About <SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> Experience <GiSkills/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> Projects <FaProjectDiagram/></a>
    </nav>
  )
}

export default Nav
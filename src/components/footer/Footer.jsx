import React from 'react'
import './footer.css'
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {FaProjectDiagram} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'
import{FaGithubSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href="#"><AiFillHome/> Home</a></li>
        <li><a href="#about"><SiAboutdotme/> About</a></li>
        <li><a href="#experience"><GiSkills/> Experence</a></li>
        <li><a href="#portfolio"><FaProjectDiagram/> Portfolio</a></li>
        <li><a href="#contact"><AiFillMail/> Contact</a></li>
      </ul>

      <ul className='permalinks'>
        <li><a href="https://www.linkedin.com/in/fahad-ali-421014219/" target="_blank" rel="noopener noreferrer"><SiLinkedin/> LinkedIn</a></li>
        <li><a href="https://github.com/fahad-ali1" target="_blank" rel="noopener noreferrer"><FaGithubSquare/> GitHub</a></li>
      </ul>
      
      <div className="footer__copyright">
        <small> &copy; Created by Fahad with help of <a href="https://www.patreon.com/egator" target="_blank" rel="noopener noreferrer">EGATOR</a></small>
      </div>
    </footer>
  )
}

export default Footer
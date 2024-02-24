import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import{FaGithubSquare} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/fahad-ali-421014219/" target="_blank" rel="noopener noreferrer"><SiLinkedin className="socialIcon" /></a>
        <a href="https://github.com/fahad-ali1" target="_blank" rel="noopener noreferrer"><FaGithubSquare className='socialIcon' /></a>
    </div>
  )
}

export default Socials
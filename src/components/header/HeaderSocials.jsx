import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import{FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/fahad-ali-421014219/" target="_blank" rel="noopener noreferrer"><SiLinkedin/></a>
        <a href="https://github.com/fahad-ali1" target="_blank" rel="noopener noreferrer"><FaGithubSquare/></a>
    </div>
  )
}

export default HeaderSocials
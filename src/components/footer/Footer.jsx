import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experence</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__copyright">
        <small> &copy; Created by Fahad with help of <a href="https://www.patreon.com/egator" target="_blank" rel="noopener noreferrer">EGATOR</a></small>
      </div>
    </footer>
  )
}

export default Footer
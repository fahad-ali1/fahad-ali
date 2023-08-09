import React from 'react'
import './header.css'
import CTA from './CTA'
import PROFILE from '../../assets/images/profile_icon.ico'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Fahad Ali</h1>
        <h5 className="accent-color">Fourth Year Computer Science Student</h5>
        <CTA/>
        <HeaderSocials/>

        <div className="profile">
          <img src={PROFILE} alt="profile" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
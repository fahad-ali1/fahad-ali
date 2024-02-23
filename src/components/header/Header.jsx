import React from 'react'
import './header.css'
// import PROFILE from '../../assets/images/profile_icon.ico'
import Socials from './socials.jsx'

const Header = () => {
  return (
    <header>
      <div className="header">
        <h5>Hello I am</h5>
        <h1>Fahad Ali</h1>
        <h5 className="accent">Fourth Year Computer Science Student</h5>
        <Socials/>
{/* 
        <div className="profile">
          <img src={PROFILE} alt="profile" />
        </div> */}
      </div>
    </header>
  )
}

export default Header
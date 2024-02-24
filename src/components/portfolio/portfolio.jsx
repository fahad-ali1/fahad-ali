import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/class-scheduler-demo.png';
import IMG2 from '../../assets/space-blaster-demo.png';
import IMG3 from '../../assets/personal-website-demo.png';
import IMG4 from '../../assets/property-assessment-app.png';
import IMG5 from '../../assets/class-scheduler-webapp.png';
import IMG6 from '../../assets/personal-website2-demo.png';


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>
      <h1 className='caption'>Click on each card to visit the GitHub repository!</h1>
      <div className="portfolioContainer">
        <a href="https://github.com/fahad-ali1/fahad-ali" className='portfolioItem' target="_blank" rel="noopener noreferrer">
            <article id='website2'>
            <div className="portfolioItem-image">
                <a className="livePageButton" href="https://course-register.onrender.com/" target="_blank" rel="noopener noreferrer"> 
                    🌟 Click Here to View Live Website
                </a>
                <img src={IMG5} alt="" />
            </div>
            <h1>Class Scheduler Web Application</h1>
            <h3>Full Stack Web Application</h3>
            <h4 className='skills'>Skills: ReactJS, Node.js, MongoDB, Git</h4>
            </article>
        </a>
        <a href="https://github.com/fahad-ali1/fahad-ali" className='portfolioItem' target="_blank" rel="noopener noreferrer">
            <article id='website2'>
            <div className="portfolioItem-image">
                <img src={IMG6} alt="" />
            </div>
            <h1>Personal Portfolio Website (V2)</h1>
            <h3>Updated personal website with more ReactJS experience.</h3>
            <h4 className='skills'>Skills: ReactJS, Git</h4>
            </article>
        </a>
        <a href="https://github.com/fahad-ali1/fahad-ali" className='portfolioItem' target="_blank" rel="noopener noreferrer">
            <article id='website1'>
                <div className="portfolioItem-image">
                <img src={IMG3} alt="" />
                </div>
                <h1>Personal Portfolio Website (V1)</h1>
                <h3>Created personal website (V1) to learn ReactJS</h3>
                <h4 className='skills'>Skills: ReactJS, Git</h4>
                <div className="portfolioItem-buttons">
                </div>
            </article>
        </a>
        <a href="https://github.com/fahad-ali1/PropertyAssessmentGUI" className='portfolioItem' target="_blank" rel="noopener noreferrer">
            <article id='propertyAssessments'>
            <div className="portfolioItem-image">
                <img src={IMG4} alt="" />
            </div>
            <h1>Property Assessments Application</h1>
            <h3>An app to create assessments of properties in Edmonton</h3>
            <h4 className='skills'>Skills: Java, SQL, Git</h4>
            </article>
        </a>
        <a href="https://github.com/fahad-ali1/CMPT-395-Class-Scheduler" className='portfolioItem' target="_blank" rel="noopener noreferrer">
            <article id='scheduler'>
            <div className="portfolioItem-image">
                <img src={IMG1} alt="" />
            </div>
            <h1>Class Scheduling App</h1>
            <h3>An app created using Python and PyQT 5</h3>
            <h4 className='skills'>Skills: Python, PyQt5, Git</h4>
            </article>
        </a>
        <a href="https://github.com/fahad-ali1/Space-Blaster"  className='portfolioItem' target="_blank" rel="noopener noreferrer">
            <article id='game'>
            <div className="portfolioItem-image">
                <img src={IMG2} alt="" />
            </div>
            <h1>2D Space Shooter Game</h1>
            <h3>Game made with Python</h3>
            <h4 className='skills'>Skills: Python, Python Arcade, Git</h4>
            </article>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
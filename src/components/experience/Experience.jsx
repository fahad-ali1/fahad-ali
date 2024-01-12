import React from 'react';
import './experience.css';
import { MdLanguage } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { BsArrowRightSquareFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills Do I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          
          {/* First Half */}
          <div className="experience__content">

            <h3>
              <MdLanguage /> Languages
            </h3>
            <h3>
              <FaTools /> Tools
            </h3>
            <article className="experience__details">
              <MdLanguage className='experience__details-icon'/> 
              <div>
                <h4>Python</h4>
                <small>Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaTools className='experience__details-icon'/> 
              <div>
                <h4>Git/GitHub</h4>
                <small>Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLanguage className='experience__details-icon'/> 
              <div>
                <h4>SQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaTools className='experience__details-icon'/> 
              <div>
                <h4>Visual Studio</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <MdLanguage className='experience__details-icon'/> 
              <div>
                <h4>Java</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaTools className='experience__details-icon'/> 
              <div>
                <h4>PyQt5</h4>
                <small>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        {/* Personal Projects */}
        <div className="portfolio">
          <h3>
            <PiProjectorScreenChartFill /> Click To See Each Project!
          </h3>

          <a href="#website" className='experience__details bordered-article'> 
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/> Personal Portfolio Website
            </div>
          </a>

          <a href="#propertyAssessments" className='experience__details bordered-article'>
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/> Property Assessments App
            </div>
          </a>

          <a href="#scheduler" className='experience__details bordered-article'> 
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/> Class Scheduling App
            </div>
          </a>

          <a href="#game" className='experience__details bordered-article'>
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/>  2D Space Shooter Game
            </div>
          </a>
          

        </div>
      </div>
    </section>
  );
};

export default Experience;

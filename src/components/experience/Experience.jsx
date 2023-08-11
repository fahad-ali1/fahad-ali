import React from 'react';
import './experience.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills Do I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Freelance Front End Development</h3>

          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineArrowRight className='experience__desc-icon'/> 
              <div>
                <h4>Developed front end application 
                for the MacEwan School of Continuing Education.</h4>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/> 
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/> 
              <div>
                <h4>GitHub</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <AiFillCheckCircle className='experience__details-icon'/> 
              <div>
                <h4>PyQT5</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="portfolio">
          <h3>Other personal projects below!</h3>

          <a href="#portfolio" className='experience__details bordered-article'> 
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/> Personal Portfolio Website
            </div>
          </a>

          <a href="#portfolio" className='experience__details bordered-article'>
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/>  2D Space Shooter Game
            </div>
          </a>

          <a href="#portfolio" className='experience__details bordered-article'> 
            <div>
              <BsArrowRightSquareFill className='experience__desc-icon'/> Class Scheduling App
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
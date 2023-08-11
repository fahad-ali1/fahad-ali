import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/projects/class-scheduler-demo.png';
import IMG2 from '../../assets/images/projects/space-blaster-demo.png';
import IMG3 from '../../assets/images/projects/personal-website-demo.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">

      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Personal Portfolio Website</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/Personal-Website-2" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Class Scheduling App</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/CMPT-395-Class-Scheduler" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>2D Space Shooter Game</h3>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/Space-Blaster" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>
        
      </div>

    </section>
  );
};

export default Portfolio;

import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/images/projects/class-scheduler-demo.png';
import IMG2 from '../../assets/images/projects/space-blaster-demo.png';
import IMG3 from '../../assets/images/projects/personal-website-demo.png';
import IMG4 from '../../assets/images/projects/property-assessment-app.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Personal Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">

      <article id='website' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Personal Portfolio Website</h3>
          <h5>Created personal website to learn ReactJS and to upload projects
            I have worked on.
          </h5>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/fahad-ali" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

        <article id='scheduler' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Property Assessments Application</h3>
          <h5>Created an app using Java, JavaFX, among other libraries to create assessments
            of properties in Edmonton. Implemented Edmonton API, CSV parsing, and map details.
          </h5>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/PropertyAssessmentGUI" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

        <article id='scheduler' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Class Scheduling App</h3>
          <h5>Created an app using Python, PyQT5, among other python libraries.
            Learned git and GitHub as well as how to work in a team.
          </h5>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/CMPT-395-Class-Scheduler" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>

        <article id='game' className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>2D Space Shooter Game</h3>
          <h5>Experimented with gaming physics using Python and Python Arcade Library.
          </h5>
          <div className="portfolio__item-buttons">
            <a href="https://github.com/fahad-ali1/Space-Blaster" className='btn btn-primary' target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </article>
        
      </div>

    </section>
  );
};

export default Portfolio;

import React from 'react';
import { Link } from 'react-router-dom';
import IMG1 from '../../assets/class-scheduler-webapp.png';
import IMG2 from '../../assets/personal-website-demo.png';
import IMG3 from '../../assets/property-assessment-app.png';

const FeaturedProjects = () => {
  return (
    <div className='featuredProjects'>
        <div className='project'>
          <Link to={{ pathname: '/fahad-ali/portfolio', hash: '#courseRegisterWebApp' }}>
            <img className='projectImage' src={IMG1} alt='Class Scheduler Web App' />
            <h3>Class Scheduler Web Application</h3>
          </Link>
        </div>
        <div className='project'>
          <Link to={{ pathname: '/fahad-ali/portfolio', hash: '#website1' }}>
            <img className='projectImage' src={IMG2} alt='Personal Website V1' />
            <h3>Personal Website V1</h3>
          </Link>
        </div>
        <div className='project'>
         <Link to={{ pathname: '/fahad-ali/portfolio', hash: '#propertyAssessments' }}>
            <img className='projectImage' src={IMG3} alt='Property Assessment Application' />
            <h3>Property Assessment Application</h3>
          </Link>
        </div>
    </div>
  );
};

export default FeaturedProjects;
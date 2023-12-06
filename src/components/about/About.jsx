import React from 'react'
import ExperienceBtn from './ExperienceBtn'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__content">
      <div className="about__me">
        <h4>
          🚀 Welcome to my website! I am a fourth-year Computer Science student at MacEwan University,
          where I learn more about my passion for technology.
        </h4>
        <h4>
          💻 Whether it's diving into the world of PC hardware and software or tinkering with Raspberry Pi's for random projects,
          I love to work on software while learning.
        </h4>
        <h4>
          🛠️ Beyond the screen, I love working on and around vehicles.
        </h4>
        <h4>
          🚗 Working on cars is not just a hobby but a parallel extension to my technology interest.
        </h4>
        <h4>
          🌐 In the future, I want to be able to use my technology skills and incorporate them into the future of vehicles. 
          Let's drive the future together!
        </h4>
      </div>
    </div>


      <ExperienceBtn/>

    </section>
  )
}

export default About
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
            I am a fourth year student at MacEwan University working 
            toward completing my Bachelors in Computer Science. I am 
            passionate about technology, both in computers as well as 
            in modern cars. I love tinkering with PC hardware and 
            software as well as working on cars. I am eager to learn and
            continue learning while maintaining efficient operations. 
            Recently I started tinkering with an arguino so that I can learn
            about embedded systems. I would love to one day integrate both 
            of my hobbies as a job.
          </h4>
        </div>
      </div>

      <ExperienceBtn/>

    </section>
  )
}

export default About
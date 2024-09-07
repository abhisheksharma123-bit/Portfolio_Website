import React from 'react'
import './Project.css'
import Banner from '../assets/project.jpg'

function Project() {
  return (
    <div>
      <section id='project'>
      
        <h2 className="projectTitle">My projects</h2>
        <span className='projectDesc'>here are my projects</span>

      <div className="project-item">
        <div className='item-details'>
          <p className='p1'>project-1</p>
          <p className='p2'>TechStack:- HTML and CSS</p>
        </div>
        <a href="#"><img src= {Banner} alt="project-1" className="projectImg" img/></a>
        </div>


    {/* <div className="project-item">
      <div className="item-details">
        <p className="p1">project-2</p>
        <p className="p2">TechStake:- HTML, CSS and Bootstrap</p>
      </div>
      <a href="#"><img src= {Banner} alt="project-2" className="projectImg" img/></a>
    </div> */}
    </section>
    </div>
  )
}

export default Project;
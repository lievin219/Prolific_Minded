import React from 'react'
import './css/About.css'
import picture from '../Components/Assets/Assets/victor.jpeg'
import Newsletter from './Newsletter.jsx'

const About = () => {
  return (
    <>
    <div className='about'>   
       <div className='about-Header'>
         <h1>Hi I'M Victor -Co Founder Of PMP</h1>
         <p className='text'>Hello, my name is Victor, I have a holistic background in massage therapy, a B.S. in ornamental horticulture and I’m a Marine combat veteran.</p>
        


         <p className='text'>Prolific Mind Power is a mindset philosophy its purpose is to empower you to produce a more coherent state of mind that is consistent to the reality you desire to experience. This is our natural state of being and the ultimate goal of this process is to assist you in achieving lasting change that hopefully will resonate far beyond 
          individual success.</p>

         <p className='text'>The ability to influence or change course or events through thought, feelings and higher intelligence that produces an abundance of desired results  
         “ProlificMindPower”</p>
       </div>
      <div className='about-image'>
        <img src={picture} alt="" />
      </div>

    </div>
    <div className='transformation'>
      <h1>    Are you ready to transfrom your Mental
      and phyisical Wellness Book a  session with us</h1>
      <button>Make an Appointment</button>

    </div>
    <Newsletter/>


    </>
  )
}

export default About

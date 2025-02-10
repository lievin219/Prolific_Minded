import React from 'react'
import './css/Home.css'
import logo from '../Components/Assets/logo.jpeg'




const Home = () => {
  return (
    <div className='transformation'>
      <div className='transfo-left'>
    <img src={logo} alt="" />
    </div>
    <div className='transfo-right'>
      <h1>We offer best services by horistics approaches</h1>
      <p className='texting'> Why a holistic approach? Because our health and wellbeing are our own personal responsibility and with the dysfunction found within the current medical and pharmaceutical system reflect these abnormalities
         within our own bodies and in many cases has failed and discarded so many of us. </p>
       <h5>Holistic Health and Fitness Coaching</h5>
       <h5>Biological Nutrition Coaching</h5>
       <h5>Virtual Coaching</h5>
       <button>Book now</button>
    </div>
    
  </div>
  )
}

export default Home

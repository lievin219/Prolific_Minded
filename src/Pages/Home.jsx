import React from 'react'
import './css/Home.css'
import logo from '../Components/Assets/logo.jpeg'




const Home = () => {
  return (
    <>
    <div className='transformatio'>
      <div className='transfo-left'>
    <img src={logo} alt="" />
    </div>
    <div className='transfo-right'>
      <h1 className='heading'>We offer best services by horistics approaches</h1>
      <p className='texting'> Why a holistic approach? Because our health and wellbeing are our own personal responsibility and with the dysfunction found within the current medical and pharmaceutical system reflect these abnormalities
         within our own bodies and in many cases has failed and discarded so many of us. </p>
       <h5>Holistic Health and Fitness Coaching</h5>
       <h5>Biological Nutrition Coaching</h5>
       <h5>Virtual Coaching</h5>

      
       <button>Book now</button>
    </div>
    
  </div>

   <div className='navigation'>
     <div>
 <h1> The Perfect Solution to your Health Issues</h1>
     </div>

     <div>
 <p className='aportion'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempu</p>
     </div>
     <div className='columning'>
       
      <div className='columning1'>
      
        <img src="" alt="" />
        <h1>Holistic Health and Fitness Coaching</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. </p>
        <button>Book Now</button>
      
      </div>
      <div className='columning2'>
      <img src="" alt="" />
        <h1>Holistic Health and Fitness Coaching</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. </p>
        <button>Book Now</button>

      </div>
      <div className='columning3'>
      <img src="" alt="" />
        <h1>Holistic Health and Fitness Coaching</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. </p>
        <button>Book Now</button>
      </div>
     </div>


   </div>
   </>
  )
}

export default Home

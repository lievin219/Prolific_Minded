import React from 'react'
import './css/service.css'
import picture from '../Components/Assets/Assets/victor.jpeg'
import logo from '../Components/Assets/logo.jpeg'
import Newsletter from './Newsletter'
import Customers from './Customers'
import { useNavigate } from 'react-router-dom'

const Service = () => {
   const navigate=useNavigate()
  return (
    <>
    <div className='about'>   
          <div className='about-Header'>
            <h1>We Provide Virtual Coaching services</h1>
           
            <p className='text'>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus ut
              </p>
   
            
          </div>
         <div className='about-image'>
           <img src={picture} alt="" />
         </div>
   
       </div>

       <div className='transformatio'>
             <div className='transfo-left'>
           <img src={logo} alt="" />
           </div>
           <div className='transfo-right'>
             <h1 className='heading'>We Provide Post & Pre Marital Coaching</h1>
             <p className='texting'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Nullam ornare blandit urna, eu pulvinar elit faucibus eget. Sed justo mauris, ultricies eu urna at, gravida commodo mauris. Quisque ac felis ac sapien dictum gravida aliquet ac purus. Donec sit amet ex vel ex sollicitudin posuere at et metus. Duis sodales ligula nisi, molestie lacinia ex rhoncus vel. In venenatis nisi orci, non accumsan nisl tempus u
             </p>
           </div>
           
         </div>

         <div className='centering'>
          <h1>        Are you ready to transfrom your Mental and 
          phyisical awareness Book a  session with us </h1>
          <button onClick={()=>navigate('/Payment')}>Book Now </button>

         </div>
        
         <Newsletter></Newsletter>
         </>
  )
}

export default Service

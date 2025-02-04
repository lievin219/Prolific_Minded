import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.jpeg'
// import footer_image from '../Assets/Assets/logo_big.png'
import instagram_icon from '../Assets/Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-logo'> 
     <img src={logo} alt="" />
     
      <p>Prolific_Minded_Power</p>  

    </div>
     <ul className='footer-links'>
        <li>Home</li>
        <li>Booking page</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Service</li>
     </ul>
      <div className='footer-social-icon'>
         
             <div className='footer-icons-container'>
               <img src={instagram_icon} alt="" />

              </div>
                 <div className='footer-icons-container'>
                    <img src={pintester_icon} alt="" />

                 </div>
                 <div className='footer-icons-container'>
              <img src={whatsapp_icon} alt="" />

          </div>   

      </div>
            <div className='footer-copyright'>
              <hr />
              <p>Gakiza_Lievin copyright @2024 - all rights reserved</p>
              


            </div>
  </div>
  )
}

export default Footer

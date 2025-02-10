import React from 'react'
import './css/Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Information On your Email</h1>
        <p>Subscribe To Our NewsLetter</p>
        <div>
            <input type="email" placeholder='Enter Email Id '/>
            <button>Subbscribe</button>
        </div>
      
    </div>
  )
}

export default Newsletter

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../Assets/logo.jpeg'
import './Navbar.css'

const Navbar = () => {

   const [menu,setMenu]=useState('Home')
  return (
    <div className='navbar'>
       <div className='nav-logo'>
        <img src={logo} alt="" /> 
        <p></p></div>
        <ul className="nav-menu">
        <li onClick={()=>{setMenu('Home')}}><Link to='/Home'>Home </Link> {menu==='Home'?<hr />:<></>}</li>
          <li onClick={()=>{setMenu('About')}}><Link to='/About'>About</Link> {menu==='About'?<hr />:<></>}</li>
          <li onClick={()=>{setMenu('Service')}}>Service {menu==='Service'?<hr />:<></>}</li>
          <li onClick={()=>{setMenu('Contact')}}>Contact_Us {menu==='Contact'?<hr />:<></>}</li>
          <li onClick={()=>{setMenu('Support')}}>Support {menu==='Support'?<hr />:<></>}</li>
          
        </ul>
        <div className='nav-login-book'>
          <button><Link to='/Book'>Book now</Link> </button>
          <button> <Link to='/Login'>Log In</Link></button>
        </div>
    </div>
  )
}

export default Navbar

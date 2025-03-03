import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const [menuVisible, setMenuVisible] = useState(false); // State to control the visibility of the menu

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <div className='nav-dropdown' onClick={toggleMenu}>
        <span className={menuVisible ? 'open' : ''}>&#9776;</span> {/* Hamburger icon */}
      </div>

      <ul className={`nav-menu ${menuVisible ? 'nav-menu-visible' : ''}`}>
        <li onClick={() => { setMenu('Home'); setMenuVisible(false); }}>
          <Link to='/Home'>Home</Link>
          {menu === 'Home' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('About'); setMenuVisible(false); }}>
          <Link to='/About'>About</Link>
          {menu === 'About' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('Service'); setMenuVisible(false); }}>
          <Link to='/Service'>Service</Link>
          {menu === 'Service' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('Contact'); setMenuVisible(false); }}>
          <Link to='/Contact'>Contact</Link>
          {menu === 'Contact' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('Support'); setMenuVisible(false); }}>
          <Link to='/Book'>SUPPORT</Link>
          {menu === 'Book' ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu('Payment'); setMenuVisible(false); }}>
          <Link to='/Payment'>Payment</Link>
          {menu === 'Payment' ? <hr /> : <></>}
        </li>
      </ul>

      <div className='nav-login-book'>
        <button className='blue-button'><Link to='/Book'>Booking</Link> </button>
        <button className='blue-buttone'> <Link to='/Login'>Log In</Link></button>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#142d4c', 
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'serif', 
  };

  const navbarNameStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'serif', 
    color: '#FFFFFF', 
    textDecoration: 'none',
  };

  const navItemStyle = {
    margin: '0 10px',
    fontFamily: 'serif', 
    listStyleType: 'none',
    display: 'flex',
  };

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontFamily: 'serif', 
  };

  const navLinkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav style={navbarStyle}>
      <div className='navbar-name'>
        <a href="#" style={navbarNameStyle}>Fit<span style={{ color: '#64b5f6' }}>Well</span></a>
      </div>
      <ul className='navbar-nav' style={{ display: 'flex', listStyleType: 'none', margin: 0 }}>
        <li className='nav-item' style={navItemStyle}><Link to="/" style={navLinkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Home</Link></li>
        <li className='nav-item' style={navItemStyle}><Link to="/WorkoutPlan" style={navLinkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>WorkoutPlan</Link></li>
        <li className='nav-item' style={navItemStyle}><Link to="/About" style={navLinkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>About</Link></li>
        <li className='nav-item' style={navItemStyle}><Link to="/ContactUs" style={navLinkStyle} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Contact Us</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;

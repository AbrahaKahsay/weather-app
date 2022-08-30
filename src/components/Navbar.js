import '../components/styles/Navbar.css'
import React from 'react'
import { NavLink } from 'react-router-dom';
import Back from '../images/back.png';
import Mic from '../images/mic.png';
import Settings from '../images/settings.png';

function Navbar() {
  return (
    <div>
       <nav className='nav-container'>
        <ul className='nav-list'>
            <li><NavLink to='/'><img className='icons' src={Back} alt="back" /></NavLink></li>
            <li><NavLink className='detail' to="/city">Details</NavLink></li>
        </ul>
        <div className='mic-set'>
            <img className='icons' src={Mic} alt="mic" />
            <img className='icons' src={Settings} alt="settings" />
        </div>
       </nav>
    </div>
  )
}

export default Navbar
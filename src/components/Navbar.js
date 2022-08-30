import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { IoMdMic } from 'react-icons/io';
import { IoIosSettings } from 'react-icons/io';

const Navbar = ()=> {
    <nav className="nav">
        <li><NavLink to="/">< IoIosArrowBack/></NavLink></li>
        <span>Select a City</span>
        <div className="set-div">
            <IoMdMic className="mic"/>
            <IoIosSettings/>
        </div>
    </nav>
}

export default Navbar;
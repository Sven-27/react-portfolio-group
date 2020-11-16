import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
            <h1>Portfolio</h1>
            </div>
            <div className="navbar__buttons">
                <ul>
                    <li><NavLink className="navbar__style" activeClassName="navbar__active" exact to='/'>Home</NavLink></li>
                    <li><NavLink className="navbar__style" activeClassName="navbar__active" exact to='/contact'>Contact</NavLink></li>
                    <li><NavLink className="navbar__style" activeClassName="navbar__active" exact to='/skills'>Skills</NavLink></li>
                    <li><NavLink className="navbar__style" activeClassName="navbar__active" exact to='/about'>About</NavLink></li>
                    <li><NavLink className="navbar__style" activeClassName="navbar__active" exact to='/blog'>Blog</NavLink></li>
                    <li><NavLink className="navbar__style" activeClassName="navbar__active" exact to='/projects'>Projects</NavLink></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar

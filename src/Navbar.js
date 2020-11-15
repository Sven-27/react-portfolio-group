import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__logo">
            <h1>Portfolio</h1>
            </div>
            <div className="navbar__buttons">
                <ul>
                    <li><Link className="navbar__style" to='/'>Home</Link></li>
                    <li><Link className="navbar__style" to='/contact'>Contact</Link></li>
                    <li><Link className="navbar__style" to='/skills'>Skills</Link></li>
                    <li><Link className="navbar__style" to='/about'>About</Link></li>
                    <li><Link className="navbar__style" to='/blog'>Blog</Link></li>
                    <li><Link className="navbar__style" to='/projects'>Projects</Link></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar

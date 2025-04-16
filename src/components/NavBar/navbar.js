import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll'
import contactImg from '../../assets/icon-whatsapp-btn.png';

const Navbar = () => {
    return (
        <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link className='desktopMenuLinstItem'>Home</Link>
            <Link className='desktopMenuLinstItem'>About</Link>
            <Link className='desktopMenuLinstItem'>Portfolio</Link>
            <Link className='desktopMenuLinstItem'>Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
    </nav>
    )
}

export default Navbar
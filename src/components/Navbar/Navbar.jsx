import React from 'react';
import './navbar.css';
import logo from '../../assets/LOGO.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt='logo' className='logo' />
            <div className="desktopMenu">
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Portfolio</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
            </div>
            <button className="desktopMenubtn">
                <img src={contactImg} alt="" className='desktopmenuImg' />contact Me
            </button>
        </nav>
    )
}

export default Navbar

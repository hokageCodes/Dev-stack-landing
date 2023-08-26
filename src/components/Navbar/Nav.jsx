import React, { useState } from 'react';
import Logo from '../../assets/svgs/logo.svg';
import './nav.css';

export default function Nav() {
    const [activeLink, setActiveLink] = useState('Home');
    const [navOpen, setNavOpen] = useState(false);

    const handleNavLinkClick = (link) => {
        setActiveLink(link);
        setNavOpen(false); // Close the nav menu after clicking a link
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className={`nav-container ${navOpen ? 'nav-open' : ''}`}>
            <div className="logo">
                <img src={Logo} alt='app logo' />
            </div>
            <div className="nav-toggle" onClick={toggleNav}>
                {navOpen ? (
                    <i className="fa fa-times"></i>
                ) : (
                    <i className="fa fa-bars"></i>
                )}
            </div>
            <ul className="nav-links">
                <li className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Home')}>Home</li>
                <li className={`nav-link ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handleNavLinkClick('About')}>About</li>
                <li className={`nav-link ${activeLink === 'Projects' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Projects')}>Projects</li>
                <li className={`nav-link ${activeLink === 'Designs' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Designs')}>Designs</li>
                <li className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handleNavLinkClick('Contact')}>Contact</li>
            </ul>
        </nav>
    );
}

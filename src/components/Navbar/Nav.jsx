import React from 'react'
import Logo from '../../assets/svgs/logo.svg'

export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt='app logo' />
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Designs</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

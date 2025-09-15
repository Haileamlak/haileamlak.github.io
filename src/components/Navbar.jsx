import '../styles/Navbar.css';
import React from 'react';

import avatar from '../assets/avatar-2.png'; // Adjust the path as necessary
import menuIcon from '../assets/menu-icon.png'; // Adjust the path as necessary
import closeIcon from '../assets/close-icon.png'; // Adjust the path as necessary

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleToggle = () => {

        setMenuOpen(prev => !prev);
    };

    const handleLinkClick = (event) => {
        // scroll a little bit to the top of the desired section
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // targetElement.scrollIntoView({ behavior: 'smooth' });
            // scroll a little bit to the top of the section
            // window.scrollBy(0, -150); // Adjust the value as needed to scroll a
        }

        setMenuOpen(false);
    };

    return (
        <header className={"navbar" + (menuOpen ? ' open' : '')}>
            <div className="nav-left">
                <a href="/" className="logo">
                    <img src={avatar} alt="Logo" />
                </a>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href='#about' onClick={handleLinkClick}>About</a>
                    <a href='#education' onClick={handleLinkClick}>Education</a>
                    <a href='#experience' onClick={handleLinkClick}>Experience</a>
                    <a href='#projects' onClick={handleLinkClick}>Projects</a>
                    <a href='#skills' onClick={handleLinkClick}>Skills</a>
                    <a href='#extra' onClick={handleLinkClick}>Extra </a>
                    <a href='#contact' onClick={handleLinkClick}>Contact</a>
                </nav>
            </div>
            <div className="nav-right">
                <div className="nav-toggle">
                    <img className="menu-icon" src={menuOpen ? closeIcon : menuIcon} alt="Menu Icon" onClick={handleToggle} style={{ width: menuOpen ? 25 : 40, marginRight: menuOpen ? 6 : 0 }} />
                </div>
            </div>

        </header>
    );
};

export default Navbar;

import '../styles/Navbar.css';
import React from 'react';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleToggle = () => {

        setMenuOpen(prev => !prev);
    };

    return (
        <header className={"navbar" + (menuOpen ? ' open' : '')}>
            <div className="nav-left">
                <a to="/" className="logo">
                    <img src="src/assets/avatar.png" alt="Logo" />
                </a>
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a to="#about" onClick={handleToggle}>About</a>
                    <a to="#education" onClick={handleToggle}>Education</a>
                    <a to="#experience" onClick={handleToggle}>Experience</a>
                    <a to="#projects" onClick={handleToggle}>Projects</a>
                    <a to="#skills" onClick={handleToggle}>Skills</a>
                    <a to="#extra" onClick={handleToggle}>Extra </a>
                    <a to="#contact" onClick={handleToggle}>Contact</a>
                </nav>
            </div>
            <div className="nav-right">
                <div className="nav-toggle">
                    <img className="menu-icon" src={`src/assets/${menuOpen ? 'close' : 'menu'}-icon.png`} alt="Menu Icon" onClick={handleToggle} style={{ width: menuOpen ? 25 : 40, marginRight: menuOpen ? 6 : 0 }} />
                </div>
            </div>

        </header>
    );
};

export default Navbar;

import React from "react";

import '../styles/Footer.css';

import LinkedInIcon from '../assets/linkedin.png'; // Adjust the path as necessary
import GitHubIcon from '../assets/github.png'; // Adjust the path as necessary  
import GitHubStarIcon from '../assets/github-star.png'; // Adjust the path as necessary
const Footer = () => {
    return (
        <footer id="footer" className="footer-section container">
            <div className="footer-content">
                <p>&copy; 2025 Haileamlak Belachew. All rights reserved.</p>

                <div className="social-links">
                    <a href="https://linkedin.com/in/haileamlak" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                    <a href="https://github.com/haileamlak" target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="GitHub" /></a>
                    <a href="https://github.com/haileamlak/haileamlak.github.io" target="_blank" rel="noopener noreferrer"><img src={GitHubStarIcon} alt="Github Star" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
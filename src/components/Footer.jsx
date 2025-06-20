import React from "react";

import '../styles/Footer.css';
const Footer = () => {
    return (
        <footer id="footer" className="footer-section container">
            <div className="footer-content">
                <p>&copy; 2025 Haileamlak Belachew. All rights reserved.</p>

                <div className="social-links">
                    <a href="https://linkedin.com/in/haileamlak" target="_blank" rel="noopener noreferrer"><img src="src/assets/linkedin.png" alt="LinkedIn" /></a>
                    <a href="https://github.com/haileamlak" target="_blank" rel="noopener noreferrer"><img src="src/assets/github.png" alt="GitHub" /></a>
                    <a href="https://github.com/haileamlak/haileamlak.github.io" target="_blank" rel="noopener noreferrer"><img src="src/assets/github-star.png" alt="Github Star" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
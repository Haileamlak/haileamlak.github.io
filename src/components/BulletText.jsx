import React from 'react';
import '../styles/BulletText.css'; 

import BulletIcon from '../assets/bullet-icon.png'; // Adjust the path as necessary

const BulletText = ({ text }) => {
    return (
        <div className="bullet-text">
            <div className="bullet-text-icon" >
                <img src={BulletIcon} alt="Bullet Icon" width={32}  />
            </div>
            <p className="bullet-text-description">{text}</p>
        </div>
    );
};

export default BulletText;

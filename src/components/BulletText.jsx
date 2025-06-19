import React from 'react';
import '../styles/BulletText.css'; 

const BulletText = ({ text }) => {
    return (
        <div className="bullet-text">
            <div className="bullet-text-icon" >
                <img src="src/assets/bullet-icon.png" alt="Bullet Icon" width={32}  />
            </div>
            <p className="bullet-text-description">{text}</p>
        </div>
    );
};

export default BulletText;

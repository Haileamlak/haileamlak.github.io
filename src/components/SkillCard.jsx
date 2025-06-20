import React from "react";

import "../styles/SkillCard.css"; 


const SkillCard= ({ imageUrl, text }) => {
    return (
        <span className="skill-card">
            <img src={imageUrl} />
            <h3>{text}</h3>
        </span>
    );
};

export default SkillCard;

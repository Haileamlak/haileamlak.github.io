import React from 'react';
import '../styles/ExtraCard.css';



const ExtraCard = ({ title, date, description, imageUrl }) => {
    // If no image URL is provided, use a default image or leave it empty
    if (!imageUrl) {
        imageUrl = "src/assets/default-avatar.png";
    }
    return (
        <div className="extra-card">
            <div className="extra-image">
                <img src={imageUrl} />
            </div>
            <div className="extra-content">
                <p className="extra-title">{title}</p>
                {date && <p className="extra-date">{date}</p>}
                <p className="extra-description" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
        </div>
    );
};

export default ExtraCard;

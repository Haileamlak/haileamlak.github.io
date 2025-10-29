import React from "react";
import '../styles/EducationCard.css';

const EducationCard = ({ education }) => {
    return (
        <div className="education-card">
            <div className="education-header">
                <div className="education-logo">
                    <img src={education.logo} alt={`${education.institution} logo`} />
                </div>
                <div className="education-details">
                    <h3 className="education-institution">{education.institution}</h3>
                    <h2 className="education-degree">{education.degree}</h2>
                    <p className="education-location">{education.location}</p>
                    <p className="education-duration">{education.duration}</p>
                </div>
            </div>
            <div className="education-description">
                {/* <ul> */}
                    {education.description.map((desc, index) => (
                        <span style={{marginLeft: 15}} key={index} className="education-description-item" dangerouslySetInnerHTML={{ __html: desc }} />
                    ))}
                {/* </ul> */}
            </div>
        </div>
    );
}

export default EducationCard;
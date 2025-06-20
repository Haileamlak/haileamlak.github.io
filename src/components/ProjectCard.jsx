// a project card with image, title, and description

import React from 'react';
import '../styles/ProjectCard.css'; 

const ProjectCard = ({ title, description, imageUrl, link }) => {
    return (
        <span className="project-card">
            <div className="project-card-image">
                <img src={imageUrl} alt={title} />
            </div>
            <h3 className="project-card-title">
                {title}
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-card-link"><img src="src/assets/link.png" alt="Link" /></a>
            </h3>
            {/* description contains html elements */}
            <div className="project-card-description-html" dangerouslySetInnerHTML={{ __html: description }} />
        </span>
    );
}


export default ProjectCard;

// a project card with image, title, and description

import React from "react";
import "../styles/ProjectCard.css";

import LinkIcon from "../assets/link.png"; // Adjust the path as necessary

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <span className="project-card">
      <div className="project-card-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="title-and-desc">
        <h3 className="project-card-title">
          {title}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <img src={LinkIcon} alt="Link" />
          </a>
        </h3>
        {/* description contains html elements */}
        <div
          className="project-card-description"
          // dangerouslySetInnerHTML={{ __html: description }}
        >
        {description}
    </div>
      </div>
    </span>
  );
};

export default ProjectCard;

import React from "react";
import EducationCard from "./EducationCard";
import '../styles/Education.css';

const Education = () => {

    return (
        <section id="education" className="education-section container">
            
            <h2 className="section-title">Education</h2>
            <div className="education-list">
                {[
                    {
                        logo: "src/assets/aau-logo.png",
                        institution: "Addis Ababa University",
                        degree: "Bachelor of Science in Computer Science",
                        location: "Addis Ababa, Ethiopia",
                        duration: "Jun. 2021 - Jul. 2024",
                        description: ["Graduated with great distinction, focusing on software engineering and AI.", "Participated in various projects and internships that enhanced my skills in software development and problem-solving."]
                    },
                    {
                        logo: 'src/assets/a2sv-logo.png',
                        institution: "A2SV (Africa to Silicon Valley)",
                        degree: "Advanced Software Engineering Training",
                        location: "Addis Ababa, Ethiopia",
                        duration: "Nov. 2023 - Dec. 2024",
                        description: ["Completed an intensive training program focused on advanced software engineering concepts, tools, and methodologies."]
                    }
                ].map((education, index) => (
                    <EducationCard key={index} education={education} />
                ))}
            </div>
        </section>
    );
};

export default Education;

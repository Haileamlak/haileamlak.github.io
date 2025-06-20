import React from "react";
import EducationCard from "./EducationCard";
import '../styles/Education.css';

import aauLogo from '../assets/aau-logo.png';
import a2svLogo from '../assets/a2sv-logo.png';

const Education = () => {

    return (
        <section id="education" className="education-section container">

            <h2 className="section-title">Education</h2>
            <div className="education-list">
                {[
                    {
                        logo: aauLogo,
                        institution: "Addis Ababa University",
                        degree: "Bachelor of Science in Computer Science",
                        location: "Addis Ababa, Ethiopia",
                        duration: "Jun. 2021 - Jul. 2024",
                        description: ["Graduated with great distinction from the top-ranked university in Ethiopia.", "Participated in various hackathons, projects, and internships that enhanced my skills in software development and problem-solving."]
                    },
                    {
                        logo: a2svLogo,
                        institution: "A2SV (Africa to Silicon Valley)",
                        degree: "Advanced Software Engineering Training",
                        location: "Addis Ababa, Ethiopia",
                        duration: "Nov. 2023 - Dec. 2024",
                        description: ["Joined a Google-backed tech academy that has upskilled 1000+ top African students, with 100+ securing software engineering roles at top-tier companies like Google and Bloomberg within 6 years",
                            "Completed 1000+ hours of intensive training in data structures & algorithms, solving 1000+ algorithmic problems on <a target='_blank' href='https://leetcode.com/u/Hayla_Beat' style='color: #5C9B80; font-weight: bold;'>LeetCode</a> and <a target='_blank' href='https://codeforces.com/profile/_foo_' style='color: #5C9B80; font-weight: bold;'>CodeForces</a> combined."]
                    }
                ].map((education, index) => (
                    <EducationCard key={index} education={education} />
                ))}
            </div>
        </section>
    );
};

export default Education;

import React from "react";
import "../styles/Experience.css";

import linkIcon from "../assets/link.png"; // Adjust the path as necessary

const Experience = () => {
    return (
        <section id="experience" className="experience-section container">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
                <div className="experience-item">
                    <div className="experience-dot"></div>

                    {/* <div className="experience-banner">
                        <img src="src/assets/a2sv-banner.png" alt="Tech Company Logo" />
                    </div> */}
                    <h3 className="experience-title">Software Engineer - Backend</h3>
                    <p className="experience-company">
                        EagleLion System Technology
                        <a href={"https://eaglelionsystems.com"} target="_blank" rel="noopener noreferrer" className="link-icon"><img src={linkIcon} alt="Link" /></a>

                    </p>
                    <p className="experience-location">Addis Ababa, Ethiopia</p>
                    <p className="experience-date">July 2025 - Present</p>
                    <ul className="experience-description">
                        <li>Contributed to the development of a super app for one of Ethiopia’s largest banks, designed to serve millions of users with
                            services such as payments, transfers, and marketplace integrations.
                        </li>
                        <li>Improved inter-microservice communication by migrating to gRPC, reducing latency and cutting payload size compared to
                            REST.</li>
                        <li>Set up service-level logging, improving system reliability and reducing error diagnosis time from several hours to few
                            minutes.</li>
                    </ul>

                </div>
                <div className="experience-item">
                    <div className="experience-dot"></div>

                    {/* <div className="experience-banner">
                        <img src="src/assets/a2sv-banner.png" alt="Tech Company Logo" />
                    </div> */}
                    <h3 className="experience-title">Head of Education</h3>
                    <p className="experience-company">
                        A2SV (Africa to Silicon Valley)
                        <a href={"https://a2sv.org"} target="_blank" rel="noopener noreferrer" className="link-icon"><img src={linkIcon} alt="Link" /></a>

                    </p>
                    <p className="experience-location">Addis Ababa, Ethiopia</p>
                    <p className="experience-date">January 2025 - June 2025</p>
                    <ul className="experience-description">
                        <li>Led structured practice sessions and delivered in-depth lectures on data structures and algorithms to 30+ students, covering
                            topics like dynamic programming.
                        </li>
                        <li>Mentored 12 students through biweekly 1:1 coaching, providing personalized support that accelerated their mastery of advanced
                            concepts and improved competitive programming performance.
                        </li>
                    </ul>
                </div>
                <div className="experience-item">
                    <div className="experience-dot"></div>
                    <h3 className="experience-title">Software Engineer</h3>
                    <p className="experience-company">
                        {/* <img src="src/assets/agents4hire-banner.png" alt="Startup Logo" style={{ width: "100px" }} /> */}
                        Stealth AI Startup
                        <a href={"https://agents4hire.ai"} target="_blank" rel="noopener noreferrer" className="link-icon"><img src={linkIcon} alt="Link" /></a>
                    </p>
                    <p className="experience-location">San Francisco, Bay Area (Remote)</p>
                    <p className="experience-date">September 2024 - October 2024</p>
                    {/* <p>Agents4Hire is an AI startup focused on innovative AI agents</p> */}
                    <ul className="experience-description">

                        <li>Built core backend features enabling users to create customized AI agents tailored to their own specific needs.
                        </li>
                        {/* <li>Reduced agent creation failure rate from 70% to 5% by addressing hallucination issues in generative AI API calls.
                        </li> */}
                        <li>Expanded agent functionality and automation capabilities by integrating diverse third-party APIs.</li>
                    </ul>
                </div>
                {/* <div className="experience-item">
                    <div className="experience-dot"></div>
                    <h3 className="experience-title">Back-end Developer Intern</h3>
                    <p className="experience-company">
                        A2SV (Africa to Silicon Valley)
                        <a href={"https://a2sv.org"} target="_blank" rel="noopener noreferrer" className="link-icon"><img src={linkIcon} alt="Link" /></a>
                    </p>
                    <p className="experience-location">Addis Ababa, Ethiopia</p>
                    <p className="experience-date">July 2024 - August 2024</p>
                    <ul className="experience-description">

                        <li>Developed scalable RESTful APIs using Clean Architecture and SOLID principles, ensuring long-term maintainability.
                        </li>
                        <li>Boosted API performance by implementing pagination and Redis caching to minimize database load.
                            </li>
                        <li>Increased code reliability by writing and executing thorough unit tests, proactively identifying and fixing bugs.
                        </li>
                        <li>Accelerated development workflows by setting up automated CI/CD pipelines with GitHub Actions.</li>
                    </ul>
                </div> */}
            </div>
        </section>
    );
};
export default Experience;
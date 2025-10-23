import React from "react";
import "../styles/Extra.css";
import ExtraCard from "./ExtraCard";

import mkIctLogo from "../assets/mk-ict.png";
import etcpcLogo from "../assets/etcpc.png";
import cs50AiLogo from "../assets/cs50-ai.png";
import dpsLogo from "../assets/dps.png";
import googleCybersecurityLogo from "../assets/google-cybersecurity.png";
import socialInclusionLogo from "../assets/social-inclusion.png";

const Extra = () => {
    return (
        <section id="extra" className="extra-section container">
            <h2 className="section-title">Extra-curricular Activities, Achievements & Certifications</h2>
            <div className="extra-cards">
                <ExtraCard
                    title="1st Place in Hackathon"
                    // date="June 2023"
                    description="Secured 1st place in a hackathon competing against 20+ students by developing a live and on-demand video streaming platform for a TV Channel." // <a target='_blank' href='https://www.youtube.com/@EOTCMK' style='color: green;display:inline-block;'>Mahibere Kidusan Tv</a>
                    imageUrl={mkIctLogo}
                />
                <ExtraCard
                    title="2nd Place in Programming Contest"
                    // date="January 2024"
                    description=" Secured 2nd place as part of a 3-member team out of 27 teams in a competitive programming contest organized by EtCPC."
                    imageUrl={etcpcLogo}
                />
                <ExtraCard
                    title="CS50’s Introduction to Artificial Intelligence with Python (via YouTube)"
                    description="Completed an in-depth course covering foundational AI concepts such as search, optimization, machine learning, and neural networks using Python."
                    imageUrl={cs50AiLogo}   
                />
                <ExtraCard
                    title="Digital Product Development Masterclass"
                    description="Completed a 3-month interdisciplinary training on human-centered digital product development, supported by the Bavarian State Government, gaining hands-on experience in Design Thinking, Agile methodologies, Lean Startup, and cross-functional collaboration."
                    imageUrl={dpsLogo}
                />
                <ExtraCard
                    title="Google Cybersecurity Certificate"
                    description="Completed a comprehensive program covering cybersecurity fundamentals, network security, risk management, and incident response, equipping me with essential skills to protect digital assets."
                    imageUrl={googleCybersecurityLogo}
                />
                <ExtraCard
                    title="Social Inclusion and Gender & Career Development Training"
                    description="Participated in a training program focused on social inclusion and gender equality in the workplace, enhancing my understanding of diversity and inclusion strategies."
                    imageUrl={socialInclusionLogo}
                />
            </div>
        </section>
    );
};

export default Extra;

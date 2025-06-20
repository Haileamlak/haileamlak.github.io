import React from 'react';
import '../styles/Projects.css'; 
import ProjectCard from './ProjectCard';

import brownaiImage from '../assets/brown-ai.png';
import aiAgentImage from '../assets/ai-agent.png';
import mkTubeImage from '../assets/mk_tube_poster.png'; // Uncomment if you have this image
import finoteImage from '../assets/finote.png'; // Uncomment if you have this image
import blogApiImage from '../assets/api.png'; // Uncomment if you have this image

const Projects = () => {
    return (
        <section id='projects' className='projects-section container'>
            <h2 className='section-title'>Featured Projects</h2>
            <div className='projects-cards'>
                <ProjectCard
                    title="Brown AI's Website"
                    description="A website showcasing Brown AI's services, including its latest AI solutions."
                    imageUrl={brownaiImage}
                    link="https://brownai3.web.app"
                />
                <ProjectCard 
                    title="Content Creator Assistant" 
                    description="AI assistant that automates content creation and social media management using generative AI." 
                    imageUrl={aiAgentImage} 
                    link="https://github.com/haileamlak/ai-content-creator-agent" 
                />
                <ProjectCard 
                    title="Blog API " 
                    description="RESTful API for blog management with user authentication, role-based access control, and content suggestion using AI." 
                    imageUrl={blogApiImage} 
                    link="https://github.com/haileamlak/blog-api" 
                />
                <ProjectCard 
                    title="MK Tube" 
                    description="a live and on-demand video streaming mobile application for <a target='_blank' href='https://youtube.com/@EOTCMK' style='color: green;'>Mahibere Kidusan Tv</a>." 
                    imageUrl={mkTubeImage} 
                    link="https://github.com/haileamlak/mk-tube-video-streaming" 
                />
                <ProjectCard
                    title="Finote"
                    description="A mobile app revolutionizing bus travel in Ethiopia by enabling easy ticket purchases, secure payments, and real-time schedule management for travelers and operators."
                    imageUrl={finoteImage}
                    link="https://github.com/haileamlak/finote"
                />
            </div>
        </section>
    );
}

export default Projects;

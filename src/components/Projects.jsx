import React from 'react';
import '../styles/Projects.css'; 
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id='projects' className='projects-section container'>
            <h2 className='section-title'>Featured Projects</h2>
            <div className='projects-cards'>
                <ProjectCard
                    title="Brown AI's Website"
                    description="A website showcasing Brown AI's services, including AI solutions, consulting, and training, with a focus on user experience and modern design."
                    imageUrl="src/assets/brown-ai.png"
                    link="https://www.brownai3.web.app"
                />
                <ProjectCard 
                    title="Content Creator Assistant" 
                    description="AI assistant that automates content creation and social media management using generative AI." 
                    imageUrl="src/assets/ai-agent.png" 
                    link="https://www.github.com/haileamlak/ai-content-creator-agent" 
                />
                <ProjectCard 
                    title="Blog API " 
                    description="RESTful API for blog management with user authentication, role-based access control, and content suggestion using AI." 
                    imageUrl="src/assets/api.png" 
                    link="https://github.com/haileamlak/blog-api" 
                />
                <ProjectCard 
                    title="MK Tube" 
                    description="a live and on-demand video streaming mobile application for <a target='_blank' href='https://www.youtube.com/@EOTCMK' style='color: green;'>Mahibere Kidusan Tv</a>." 
                    imageUrl="src/assets/mk_tube_poster.png" 
                    link="https://www.github.com/haileamlak/mk-tube-video-streaming" 
                />
                <ProjectCard
                    title="Finote"
                    description="A mobile app revolutionizing bus travel in Ethiopia by enabling easy ticket purchases, secure payments, and real-time schedule management for travelers and operators."
                    imageUrl="src/assets/finote.png"
                    link="https://www.github.com/haileamlak/finote"
                />
            </div>
        </section>
    );
}

export default Projects;

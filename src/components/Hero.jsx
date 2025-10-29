import React from 'react';
import '../styles/Hero.css';
import Button from './Button';
import OutlinedButton from './OutlinedButton';
import ContactModal from './ContactModal';

import resumeIcon from '../assets/resume-icon.png'; // Adjust the path as necessary

const Hero = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <section id="hero" className='container'>
            <div className="overlay"></div>
            <div className="hero-content">
                <h1 className='hero-title'><span style={{ color: '#5C9B80', fontWeight: 'bold' }}>Haileamlak Belachew</span></h1>
                <p className='hero-subtitle'>CS Grad & Software Engineer</p>
                {/* <p className='hero-description'>● Currently building <a href="https://brownai3.web.app" target="_blank" rel="noopener noreferrer" style={{ color: '#c07a35', fontWeight: 'bold', }}>Brown AI</a>, a company focused on AI solutions.</p> */}
                <div className='hero-buttons'>
                    <Button className="view-resume-button" text="View Resume" onClick={() => window.open('https://drive.google.com/file/d/1Cibn9LAeBq9kwJsgd1Bg7xFQvdqK9Suz/view?usp=sharing', '_blank')} imageSrc={resumeIcon} />
                    <OutlinedButton text="Send Message" onClick={toggleModal} />
                </div>
            </div>
            {modalOpen && (<ContactModal isOpen={modalOpen} onClose={toggleModal} />)}
        </section>
    );
};

export default Hero;

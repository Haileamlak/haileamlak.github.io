import React from 'react';
import '../styles/Hero.css';
import Button from './Button';
import OutlinedButton from './OutlinedButton';
import ContactModal from './ContactModal';


const Hero = () => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <section id="hero" className='container'>
            <div className="hero-content">
                <h1 className='hero-title'>I'm <span style={{ color: '#5C9B80' }}>Haileamlak Belachew</span></h1>
                <p className='hero-subtitle'>CS Grad & Software Engineer</p>
                <p className='hero-description'>● Currently building <a href="https://brownai3.web.app" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontWeight: 'bold', }}>Brown AI</a>, a company focused on AI solutions.</p>
                <div className='hero-buttons'>
                    <Button text="View Resume" onClick={() => window.open('https://drive.google.com/file/d/1rYu-mIcsTrAeCuH-xHPofrI1i1qNVzqO/view?pli=1', '_blank')} imageSrc="src/assets/resume-icon.png" />
                    <OutlinedButton text="Contact Me" onClick={toggleModal} />
                </div>
            </div>
            {modalOpen && (<ContactModal isOpen={modalOpen} onClose={toggleModal} />)}
        </section>
    );
};

export default Hero;

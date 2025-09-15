import '../styles/About.css';
import BulletText from './BulletText';
import Button from './Button'; 

import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import backIMage from '../assets/about-image-3.png';
    
const About = () => {
    return (
        <section id="about" className="about-section container">
            <h2 className='section-title'>About Me</h2>
            <div className="about-content">
                <div className="about-image-container">
                <img src={backIMage} alt="Haileamlak Belachew" className="about-image" />
                </div>
                <div className="about-details">
                    <div className="about-text">

                        <BulletText text="I’m a recent Computer Science graduate passionate about using technology to solve real-world problems." />

                        <BulletText text="I have experience in back-end development, with a focus on building scalable applications. I’m proficient in Golang and Python." />
                        <BulletText text="Outside of tech, I enjoy playing football and reading books. I believe in continuous learning and am always looking for ways to improve myself." />
                        <BulletText text="I’m open to opportunities that allow me create a positive impact to the world." />


                    </div>
                    {/* <div className="about-links">
                        <Button className="btn btn-primary" onClick={() => window.open("https://github.com/haileamlak", "_blank")}imageSrc={githubIcon} isIconAfter/>
                        <Button className="btn btn-primary" onClick={() => window.open("https://www.linkedin.com/in/haileamlak", "_blank")}  imageSrc={linkedinIcon} isIconAfter/>
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default About;

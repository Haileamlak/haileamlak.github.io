import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about-section container">
            <h2 className='section-title'>About Me</h2>
            <div className="about-content">
                {/* <div className="about-image-container"> */}
                    <img src="src/assets/about-image.jpg" alt="Haileamlak Belachew" className="about-image" />
                {/* </div> */}
                <div className="about-text">

                    <p>
                        I’m a recent Computer Science graduate passionate about using technology to solve real-world problems.
                    </p>
                    <p>
                        I have experience in full-stack development, with a focus on building scalable applications. I’m proficient in <span style={{ color: '#5C9B80', fontStyle: 'italic' }}>Python, Golang, Flutter, and React</span>.
                    </p>
                    <p>
                        Outside of tech, I enjoy playing football and reading.
                    </p>
                    <p>
                        I’m open to opportunities that create positive impact.
                    </p>


                </div>
            </div>
        </section>
    );
};

export default About;

import SkillCard from "./SkillCard";

import React from 'react';
import '../styles/Skills.css';

export const Skills = () => {
    return (
        <section id="skills" className='skills-section container'>
            <h2 className="section-title">Skills</h2>

            <h2 style={{ fontWeight: 400 }}><img src="src/assets/arrow-icon.png" width={24} /> Languages</h2>
            <div className='skills-cards'>
                <SkillCard imageUrl='src/assets/python.png' text='Python' />
                <SkillCard imageUrl='src/assets/go.png' text='Go' />
                <SkillCard imageUrl='src/assets/javascript.png' text='JavaScript' />
                <SkillCard imageUrl='src/assets/cpp.png' text='C++' />
                {/* <SkillCard imageUrl='src/assets/dart.png' text='Dart' /> */}
                <SkillCard imageUrl='src/assets/java.png' text='Java' />
                <SkillCard imageUrl='src/assets/typescript.png' text='TypeScript' />
                <SkillCard imageUrl='src/assets/html.png' text='HTML' />
                <SkillCard imageUrl='src/assets/css.png' text='CSS' />
            </div>
            <h2 style={{ fontWeight: 400 }}><img src="src/assets/arrow-icon.png" width={24} /> Frameworks & Libraries</h2>

            <div className='skills-cards'>

                <SkillCard imageUrl='src/assets/react.svg' text='React' />
                <SkillCard imageUrl='src/assets/flutter.png' text='Flutter' />
                <SkillCard imageUrl='src/assets/django.png' text='Django' />
                <SkillCard imageUrl='src/assets/gin-gonic.png' text='Gin' />
                <SkillCard imageUrl='src/assets/flask.png' text='Flask' />
                <SkillCard imageUrl='src/assets/bootstrap.png' text='Bootstrap' />

            </div>
            <h2 style={{ fontWeight: 400 }}><img src="src/assets/arrow-icon.png" width={24} /> Databases</h2>
            <div className='skills-cards'>
                <SkillCard imageUrl='src/assets/mongodb.png' text='MongoDB' />
                <SkillCard imageUrl='src/assets/mysql.png' text='MySQL' />
                <SkillCard imageUrl='src/assets/firestore.png' text='Firestore' />
                <SkillCard imageUrl='src/assets/redis.png' text='Redis' />
            </div>
            <h2 style={{ fontWeight: 400 }}><img src="src/assets/arrow-icon.png" width={24} /> Tools & Technologies</h2>
            <div className='skills-cards'>
                <SkillCard imageUrl='src/assets/docker.png' text='Docker' />
                <SkillCard imageUrl='src/assets/kubernetes.png' text='Kubernetes' />
                <SkillCard imageUrl='src/assets/gcp.png' text='GCP' />
                <SkillCard imageUrl='src/assets/figma.png' text='Figma' />
                <SkillCard imageUrl='src/assets/postman.png' text='Postman' />
                <SkillCard imageUrl='src/assets/git.png' text='Git' />
                <SkillCard imageUrl='src/assets/github.png' text='GitHub' />

            </div>
        </section>
    );
};

export default Skills;
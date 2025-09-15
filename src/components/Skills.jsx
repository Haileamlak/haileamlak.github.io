import SkillCard from "./SkillCard";

import React from 'react';
import '../styles/Skills.css';

import arrowIcon from '../assets/arrow-icon.png';

import pythonIcon from '../assets/python.png';
import goIcon from '../assets/go.png';
import javascriptIcon from '../assets/javascript.png';
import cppIcon from '../assets/cpp.png';
import javaIcon from '../assets/java.png';
import typescriptIcon from '../assets/typescript.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';

import reactIcon from '../assets/react.svg';
import flutterIcon from '../assets/flutter.png';
import djangoIcon from '../assets/django.png';
import ginGonicIcon from '../assets/gin-gonic.png';
import flaskIcon from '../assets/flask.png';
import bootstrapIcon from '../assets/bootstrap.png';

import mongodbIcon from '../assets/mongodb.png';
import mysqlIcon from '../assets/mysql.png';
import firestoreIcon from '../assets/firestore.png';
import redisIcon from '../assets/redis.png';

import dockerIcon from '../assets/docker.png';
import kubernetesIcon from '../assets/kubernetes.png';
import gcpIcon from '../assets/gcp.png';
import figmaIcon from '../assets/figma.png';
import postmanIcon from '../assets/postman.png';
import gitIcon from '../assets/git.png';
import githubIcon from '../assets/github.png';


export const Skills = () => {
    return (
        <section id="skills" className='skills-section container'>
            <h2 className="section-title">Skills</h2>

            <h2 style={{ fontWeight: 400 }}><img src={arrowIcon} width={24} /> Languages</h2>
            <div className='skills-cards'>
                <SkillCard imageUrl={pythonIcon} text='Python' />
                <SkillCard imageUrl={goIcon} text='Go' />
                <SkillCard imageUrl={javascriptIcon} text='JavaScript' />
                <SkillCard imageUrl={cppIcon} text='C++' />
                {/* <SkillCard imageUrl='src/assets/dart.png' text='Dart' /> */}
                <SkillCard imageUrl={javaIcon} text='Java' />
                {/* <SkillCard imageUrl={typescriptIcon} text='TypeScript' /> */}
                <SkillCard imageUrl={htmlIcon} text='HTML' />
                <SkillCard imageUrl={cssIcon} text='CSS' />
            </div>
            {/* <h2 style={{ fontWeight: 400 }}><img src={arrowIcon} width={24} /> Frameworks & Libraries</h2> */}

            {/* <div className='skills-cards'>

                <SkillCard imageUrl={reactIcon} text='React' />
                <SkillCard imageUrl={flutterIcon} text='Flutter' />
                <SkillCard imageUrl={djangoIcon} text='Django' />
                <SkillCard imageUrl={ginGonicIcon} text='Gin' />
                <SkillCard imageUrl={flaskIcon} text='Flask' />
                <SkillCard imageUrl={bootstrapIcon} text='Bootstrap' />

            </div> */}
            <h2 style={{ fontWeight: 400 }}><img src={arrowIcon} width={24} /> Databases</h2>
            <div className='skills-cards'>
                <SkillCard imageUrl={mongodbIcon} text='MongoDB' />
                <SkillCard imageUrl={mysqlIcon} text='MySQL' />
                <SkillCard imageUrl={firestoreIcon} text='Firestore' />
                <SkillCard imageUrl={redisIcon} text='Redis' />
            </div>
            <h2 style={{ fontWeight: 400 }}><img src={arrowIcon} width={24} /> Tools & Technologies</h2>
            <div className='skills-cards'>
                {/* <SkillCard imageUrl={dockerIcon} text='Docker' />
                <SkillCard imageUrl={kubernetesIcon} text='Kubernetes' /> */}
                <SkillCard imageUrl={gcpIcon} text='GCP' />
                <SkillCard imageUrl={figmaIcon} text='Figma' />
                <SkillCard imageUrl={postmanIcon} text='Postman' />
                <SkillCard imageUrl={gitIcon} text='Git' />
                <SkillCard imageUrl={githubIcon} text='GitHub' />

            </div>
        </section>
    );
};

export default Skills;
import React, { useState } from 'react';
import Project from '../project';
import mongoDBLogo from '../../assets/Mongo-DB.png';

export default function Portfolio() {
    const [projectUrls] = useState([
        {
            name: 'Thought Tracker',
            alt: 'mongo DB logo',
            img: mongoDBLogo,
            href: '',
            github: 'https://github.com/Nate-Kleinsorge/challenge_18',
            description: 'I used mongoDB and express to create an app to track and save thoughts (backend only)',
        },
        {
            name: '',
            alt: '',
            img: '',
            href: '',
            github: '',
            description: '',
        },
        {
            alt: '',
            img: '',
            href: '',
            github: '',
            description: '',
        },
        {
            alt: '',
            img: '',
            href: '',
            github: '',
            description: '',
        },
        {
            alt: '',
            img: '',
            href: '',
            github: '',
            description: '',
        },
        {
            alt: '',
            img: '',
            href: '',
            github: '',
            description: '',
        }
    ])

    return (
        <div>
            <h1 style={{ marginBottom: '10px' }}className="text-center border-bottom text-white header">Portfolio</h1>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex flex-md-row flex-wrap'>
                        {projectUrls.map((project, idx) => (
                            <Project
                                name={project.name}
                                img={project.img}
                                alt={project.alt}
                                link={project.href}
                                github={project.github}
                                description={project.description}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
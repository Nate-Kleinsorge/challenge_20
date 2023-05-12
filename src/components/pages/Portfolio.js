import React, { useState } from 'react';
import Project from '../project';
import mongoDBLogo from '../../assets/Mongo-DB.png';
import readMe from '../../assets/readme-picture.png';
import noteTaker from '../../assets/note-taker.png';
import certificate from '../../assets/certificate.png';
import { Helmet } from 'react-helmet';

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
            name: 'ReadME generator',
            alt: 'writing read me',
            img: readMe,
            href: '',
            github: 'https://github.com/Nate-Kleinsorge/ReadME-generator',
            description: 'Quickly answer some questions to generate a professional readMe file in minutes (backend only)',
        },
        {
            name: 'Note Taker',
            alt: 'note taker',
            img: noteTaker,
            href: 'https://fathomless-gorge-41682.herokuapp.com/',
            github: 'https://github.com/Nate-Kleinsorge/Note-Taker',
            description: 'Take notes to remember for later use. Implements a local api/database.',
        },
        // {
        //     alt: '',
        //     img: '',
        //     href: '',
        //     github: '',
        //     description: '',
        // },
        // {
        //     alt: '',
        //     img: '',
        //     href: '',
        //     github: '',
        //     description: '',
        // },
        // {
        //     alt: '',
        //     img: '',
        //     href: '',
        //     github: '',
        //     description: '',
        // }
    ])

    return (
        <>
        <Helmet>
            <title>Nate Kleinsorge | Portfolio</title>
        </Helmet>
        <div>
            <h1 className="text-center border-bottom text-white header">Portfolio</h1>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex flex-md-row flex-wrap justify-content-around'>
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
            <div className='container'>
                <div className='column'>
                    <div className='justify-content-center'>
                        <img src={certificate} className='img-fluid' alt="Nathaniel Kleinsorge's full stack web development bootcamp certification"></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
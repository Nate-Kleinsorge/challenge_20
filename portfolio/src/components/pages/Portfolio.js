import React, { useState } from 'react';
import Project from '../project';

const projectUrls = {
    project1: {
        href: '',
        github: '',
    },
    project2: {
        href: '',
        github: '',
    },
    project3: {
        href: '',
        github: '',
    },
    project4: {
        href: '',
        github: '',
    },
    project5: {
        href: '',
        github: '',
    },
    project6: {
        href: '',
        github: '',
    }
}

export default function Portfolio() {
    const [style, setStyle] = useState('hidden');
    const handleStyleShow = (e) => {
        e.preventDefault();
        const { target } = e;
        setStyle({ visibility: 'visible' });
        target.style = style;
    } 
    const handleStyleHide = (e) => {
        e.preventDefault();
        const { target } = e;
        setStyle({ visibility: 'hidden' });
        target.style = style
    }
    return (
        <div>
            <h1 className="text-center header">Portfolio</h1>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex flex-md-row flex-wrap'>
                        <Project href={projectUrls.project1.href} github={projectUrls.project1.github} handleStyleHide={handleStyleHide} handleStyleShow={handleStyleShow} />
                        <Project href={projectUrls.project2.href} github={projectUrls.project2.github} handleStyleHide={handleStyleHide} handleStyleShow={handleStyleShow} />
                        <Project href={projectUrls.project3.href} github={projectUrls.project3.github} handleStyleHide={handleStyleHide} handleStyleShow={handleStyleShow} />
                        <Project href={projectUrls.project4.href} github={projectUrls.project4.github} handleStyleHide={handleStyleHide} handleStyleShow={handleStyleShow} />
                        <Project href={projectUrls.project5.href} github={projectUrls.project5.github} handleStyleHide={handleStyleHide} handleStyleShow={handleStyleShow} />
                        <Project href={projectUrls.project6.href} github={projectUrls.project6.github} handleStyleHide={handleStyleHide} handleStyleShow={handleStyleShow} />
                    </div>
                </div>
            </div>
        </div>
    );
}
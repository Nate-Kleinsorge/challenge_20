import React from 'react';
import photo from '../../assets/nate-picture.JPG';
import photo2 from '../../assets/nate-picture-2.JPG';

const styles ={
    heading: {
        color: 'white'
    },
    content: {
        color: 'white',
        marginTop: '25px',
        marginLeft: '20%',
        marginRight: '20%',
        borderRadius: '25px',
        padding: '15px',
        border: 'solid white 5px'
    },
    image: {
        maxWidth: '250px',
        margin: '30px',
    }
}

export default function About() {
    return (
        <div className='text-center'>
            <h1 className="border-bottom" style={styles.heading}>About me</h1>
            <div className='d-flex justify-content-center'>
                <img style={styles.image} src={photo} className='img-fluid rounded d-block' alt='Nate Kleinsorge'></img>
                <img style={styles.image} src={photo2} className='img-fluid rounded d-block' alt='Nate Kleinsorge'></img>
            </div>
            <p className="text-center" style={styles.content}>I am an aspiring web developer that is cerftified in web development through Michigan State University. I am looking to further my skills at an entry level job. I have learned much through the work in the intensive bootcamp from skills in the field to skills in everyday life. For example, I have learned a few database applications, including mySQL, mongoDB, and graphql. I have also learned React, express, and much more. My favorite part about being a web developer is the creative process and how it allows me to do things my way. I can create anything the only limit is my imagination and resources. I have worked hard to get this far, and I'm ready for the next step.</p>
        </div>
    );
}
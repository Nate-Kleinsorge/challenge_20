import React from 'react';

const styles ={
    heading: {
        color: 'white'
    },
    content: {
        color: 'white',
        marginTop: '25px',
        marginLeft: '20%',
        marginRight: '20%',
        border: 'solid white 5px'
    },
}

export default function About() {
    return (
        <div>
            <h1 className="text-center border-bottom" style={styles.heading}>About me</h1>
            <p className="text-center" style={styles.content}>I am an aspiring web developer that is cerftified in web development through Michigan State University. I am looking to further my skills at an entry level job. I have learned much through the work in the intensive bootcamp from skills in the field to skills in everyday life. For example, I have learned a few database applications, including mySQL, mongoDB, and graphql. I have also learned React, express, and much more. I have got an understanding of webpack, how it works and what it offers. My favorite part about being a web developer is the creative process and how it allows me to do things my way. I can create anything the only limit is my imagination and resources. I have worked hard to get this far, and im ready for the next step.</p>
        </div>
    );
}
import React from 'react';

const styles ={
    heading: {
        color: 'white'
    },
    content: {
        color: 'white',
        margin: '40px',
        border: 'solid white 5px'
    },
}

export default function About() {
    return (
        <div>
            <h1 className="text-center border-bottom" style={styles.heading}>About me</h1>
            <p className="text-center" style={styles.content}>I am an aspiring web developer that is working on an intensive coding bootcamp through Michigan State University. I am looking to further my skills at an entry level job. I have learned much through the work in this bootcamp from skills in the field to skills in everyday life. for example, I have learned a few database applications, including mySQL, mongoDB, and graphql. I have also learned React, express, and much more. I have got an understanding of webpack and how it works and what it offers. lastly, It is very important to me to be the best me i can be and work hard to further myself and friends in the future.</p>
        </div>
    );
}
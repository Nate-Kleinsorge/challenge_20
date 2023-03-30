import React from 'react';

const styles = {
    cardMargin: {
        margin: '50px'
    },
    padding: {
        padding: '10px'
    },
    image: {
        border: '5px solid black',
        margin: '10px',
    }
}

export default function Project(props) {
    return (
        <div style={styles.cardMargin} className='card col-4'>
            <h3 className='card-header text-center'>{props.name}</h3>
            <img style={styles.image} src={props.img} alt={props.alt}></img>
            <div className='card-text'>
                <p style={styles.padding} className='fs-4'>{props.description}</p>
            </div>
            <div className='card-text text-center'>
                <a style={styles.link} href={props.link}>application</a><br></br>
                <a style={styles.link} href={props.github}>github repo</a>
            </div>
        </div>
    );
}
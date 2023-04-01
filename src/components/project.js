import React from 'react';

const styles = {
    cardMargin: {
        margin: '50px',
        padding: '10px'
    },
    padding: {
        padding: '8px'
    },
    image: {
        borderRadius: '66px',
        border: '5px solid black',
        margin: '10px',
    },
    link: {
        margin: '5px',
        width: '150px'
    }
}

export default function Project(props) {
    if (props.link !== '') {
        return (
            <div style={styles.cardMargin} className='card col-4'>
                <h3 className='card-header text-center'>{props.name}</h3>
                <img style={styles.image} src={props.img} alt={props.alt}></img>
                <div className='card-text'>
                    <p style={styles.padding} className='fs-4'>{props.description}</p>
                </div>
                <div className='card-text text-center'>
                    <a className="btn btn-dark" style={styles.link} href={props.link}>application</a><br></br>
                    <a className="btn btn-dark" style={styles.link} href={props.github}>github repo</a>
                </div>
            </div>
        );
    }
    return (
        <div style={styles.cardMargin} className='card col-4'>
            <h3 className='card-header text-center'>{props.name}</h3>
            <img style={styles.image} src={props.img} alt={props.alt}></img>
            <div className='card-text'>
                <p style={styles.padding} className='fs-4'>{props.description}</p>
            </div>
            <div className='card-text text-center'>
                <a className="btn btn-dark" style={styles.link} href={props.github}>github repo</a>
            </div>
        </div>
    );
}
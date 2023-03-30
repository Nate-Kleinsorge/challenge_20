import React from 'react';

const styles = {
    margin: {
        margin: '40px',
    },
    hidden: {
        visibility: 'hidden',
    },
    shown: {
        visibility: 'visible',
    }
}

export default function Project(props) {
    return (
        <div className='card col-4' style={styles.margin}>
            {/* <img src='../'></img> */}
            <div className='card-text'>
                <a onMouseEnter={props.handleStyleShow} onMouseLeave={props.handleStyleHide} style={{ visibility: 'hidden' }} href={props.href}>application</a><br></br>
                <a onMouseEnter={props.handleStyleShow} onMouseLeave={props.handleStyleHide} style={{ visibility: 'hidden' }} href={props.github}>github repo</a>
            </div>
        </div>
    );
}
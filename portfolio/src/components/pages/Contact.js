import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles ={
    heading: {
        color: 'white'
    },
    content: {
        color: 'white',
    },
    inputBox: {
        margin: '20px',
    }
}

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.type;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email) || !name || !message) {
            setErrorMessage('invalid Email, or not all fields completed.')
            return;
        }
        setName('');
        setEmail('');
        setMessage('')
    }
    return (
        <div className='col-10'>
            <h1 className="text-center header" style={styles.heading}>Contact</h1>
            <form>
                <div className="form-group">
                    <input value={name} onChange={handleInputChange} name="name" style={styles.inputBox} type="text" className="form-control" id="InputEmail1" placeholder="Enter Name"></input>
                </div>
                <div className="form-group">
                    <input value={email} onChange={handleInputChange} name="email" style={styles.inputBox} type="email" className="form-control" placeholder="Enter Email"></input>
                </div>
                <div className="form-group">
                    <textarea value={message} onChange={handleInputChange} style={styles.inputBox} className="form-control" rows="10" placeholder='message'></textarea>
                </div>
                <div style={styles.inputBox}>
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-primary">Submit</button>
                </div>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}
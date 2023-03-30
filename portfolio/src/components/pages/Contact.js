import React, { useState } from "react";

const styles ={
    inputBox: {
        margin: '20px',
    },
    submitButton: {
        marginLeft: '45%',
    },
}

const FORM_ENDPOINT = "https://public.herotofu.com/v1/90611a10-ccf5-11ed-bffe-d5e6f853e30c";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return(
            <>
                <h2>Thank You!</h2>
                <p>We'll be in touch soon.</p>
            </>
        );
    }

    return (
        <div>
            <h1 className="text-center border-bottom text-white header">Contact Me</h1>
            <p className="text-white text-center">
                Please Feel free to reach out about wanted websites, or job inquires. I will get back to you as soon as possible.
            </p>
        <div className="row">
            <div className="mx-auto col-10">
                <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
                    <div className="form-group">
                        <input style={styles.inputBox} type="text" className="form-control" placeholder="Enter Name" name="name" required />
                    </div>
                    <div className="form-group">
                        <input style={styles.inputBox} type="email" className="form-control" placeholder="Enter Email" name="email" required />
                    </div>
                    <div className="form-group">
                        <textarea style={styles.inputBox} className="form-control" id="exampleFormControlTextarea1" rows="8" name="message" required></textarea>
                    </div>
                    <button style={styles.submitButton} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default ContactForm;
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
        <div className="row">
            <div className="mx-auto col-10">
                <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank">
                    <div class="form-group">
                        <input style={styles.inputBox} type="text" class="form-control" placeholder="Enter Name" name="name" required />
                    </div>
                    <div class="form-group">
                        <input style={styles.inputBox} type="email" class="form-control" placeholder="Enter Email" name="email" required />
                    </div>
                    <div class="form-group">
                        <textarea style={styles.inputBox} class="form-control" id="exampleFormControlTextarea1" rows="8" name="message" required></textarea>
                    </div>
                    <button style={styles.submitButton} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
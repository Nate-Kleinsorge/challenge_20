import { Helmet } from "react-helmet";
import resume from '../../assets/resume-screenshot.png';

const styles = {
    image: {
        margin: '25px'
    }
}

export default function Resume() {
    return (
        <>
        <Helmet>
            <title>Nate Kleinsorge | Resume</title>
        </Helmet>
        <div>
            <h1 className="text-center text-white header border-bottom">Resume</h1>
            <div className="d-flex flex-column text-center">
                <div className="p-2">
                    <img style={styles.image} src={resume} alt="screenshot of nate kleinsorges resume"></img>
                </div>
            </div>
        </div>
        </>
    );
}
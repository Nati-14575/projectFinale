import React from 'react';
import './homePage.css';

export default function homePage() {
    return (
        <div>
            <div className="topContainer">
            </div>
            <div className="bottomContainer">
            </div>
            <div className="textContainer">
                <div className="text">
                    <label>Welcome to Ewket</label>
                    <p>We are proffesional community that provides a free courses with professional teachers that are volunteer to share there knowledge to students who has interest to learn and passionate for this...</p>
                    <a href="/signup">Sign up if you are interested</a>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="special">
                <div className="specialParagraph">
                    <label>Share your knowledge</label>
                    <p>Everyone has transferable commodity knowledge. Sharing your unique expertise and making introduction for someone creates a lasting</p>
                </div>
            </div>
        </div>
    )
}
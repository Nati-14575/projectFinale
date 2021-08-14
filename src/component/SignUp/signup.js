import React from 'react';
import './signup.css';

export default function signup() {
    return (
        <div className="container">
            <div className="signupContainer">
                <h3>Create Ewket account</h3>
                <form onSubmit="" className="signupForm">
                    <input type="text" placeholder="First name" className="input"/>
                    <input type="text" placeholder="Last name" className="input"/>
                    <input type="email" placeholder="Email" className="input"/>
                    <input type="password" placeholder="Password" className="input"/>
                    <input type="password" placeholder="Re-enter password" className="input"/>
                    <input type="submit" value="Create" className="submit"/>
                </form>
            </div>
        </div>
    )
}

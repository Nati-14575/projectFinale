import React from 'react'
import "./footer.css"
import Facebook from "../../assets/footer/facebook.png"
import Twitter from "../../assets/footer/twitter.png"
import Instagram from "../../assets/footer/instagram.png"
import Telegram from "../../assets/footer/telegram.png"

export default function footer() {
    return (
        <div className="footer">
            <div className="partOne">
                <label className="text">Ewket</label> 
            </div>
            <div className="partTwo">
                <a href="#">TERMS & CONDITION</a>
                <a href="#">PRIVACY & POLICY</a>
                <a href="#">COOKIES POLICY</a>
                <br></br>
                <a href="#">CONTACT US</a>

            </div>
            <div className="partThree">
                <h3>Follow us:</h3>
                <div className="iconContainer">
                    <img src={Facebook} className="icons" />
                    <img src={Twitter} className="icons"/>
                    <img src={Instagram} className="icons"/>
                    <img src={Telegram} className="icons"/>
                </div> 
            </div>
        </div>
    )
}

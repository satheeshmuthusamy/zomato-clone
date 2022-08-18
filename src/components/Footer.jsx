import React from 'react';
import './Footer.css';
const Footer =()=>{
    return(
        <>
                <div id="footer">
            <hr/>
            <p id="foottext">&copy;Zomato</p>
            <hr/>
            <div className="footDiv">
                <p>contact us</p>
                <p>About us</p>
            </div>
            <div className="footDiv">
                <p>contact us</p>
                <p>About us</p>
            </div>
            <div className="footDiv noborder">
                <p>contact us</p>
                <p>About us</p>
            </div>
        </div>
        </>
    )
}

export default Footer;
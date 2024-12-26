import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
    return (<footer className="footerblog"> 
            <p>
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <ul className="footer-ul">
                <li><a href="www.facebook.com">Facebook</a></li>
                <li><a href="www.twitter.com" >Twitter</a></li>
                <li><a href="www.instagram.com" >Instagram</a></li>
                <li><a href="www.linkedin.com" >LinkedIn</a></li>
            </ul>
    </footer>);
};

export default Footer;


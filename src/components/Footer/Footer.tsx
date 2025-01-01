import React from "react";
import './Footer.css';

const Footer: React.FC = () => {
    return (<footer className="footerblog"> 
            <p>
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
            <ul className="footer-ul">
                <li><a href="/">Facebook</a></li>
                <li><a href="/" >Twitter</a></li>
                <li><a href="/" >Instagram</a></li>
                <li><a href="/" >LinkedIn</a></li>
            </ul>
    </footer>);
};

export default Footer;


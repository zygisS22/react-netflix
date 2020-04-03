import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="footer">

            <div className="copyright">
                made by <span>zygisS22</span> using <span>React.js</span>
            </div>

            <div className="social-links">
                <a href={"https://github.com/zygisS22"}><FontAwesomeIcon icon={faGithub} /></a>
                <a href={"https://www.linkedin.com/in/zygimantas-sniurevicius"}><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </div>
    );
}

export default Footer;

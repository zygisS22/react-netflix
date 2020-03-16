import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <div className="footer">
            <div className="social-links">
                <a href={"https://github.com/zygisS22"}><FontAwesomeIcon icon={faGithub} /></a>
                <a href={"https://www.linkedin.com/in/zygimantas-sniurevicius"}><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>

            <ul className="footer-links">
                <li className="footer-link-wrapper"><a href={"/"}>Audio y Subtitulos</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Descripcion de audio</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Centro de ayuda</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Tarjeta regalo</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Zona de prensa</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Inversores</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Empleo</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Terminos de uso</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Privacidad</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Avisos legales</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Preferencias de cookies</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Informacion corporativa</a></li>
                <li className="footer-link-wrapper"><a href={"/"}>Contactanos</a></li>
            </ul>

            <div className="service-link">
                <button>Codigo de servicio</button>
            </div>

            <div className="copyright">
                © 1995-2020 Zygis, Inc
            </div>
        </div>
    );
}

export default Footer;

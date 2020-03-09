import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function HeroImage() {
    return (

        <div className="hero-billboard">
            <div className="hero-image-wrapper">
                <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbyMI1viIF260mlddPdiway0G3SmZ7Lu_th_Wn-N2Kp-mdCBWXUHwDVsE5C-1SCLULX1p_waKZyl_bz2YbolHnaUFnEM.jpg?r=185"} alt={"hero"} />

            </div>

            <div className="fill-container">
                <div className="billboard-information">
                    <div className="logo-and-text">

                        <div className="billboard-title">
                            <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABXP2zOcD52bnvBOLBUCnm202cwYUc4TTQUvl5BW4RP8O41Vro-1WHG2l8JigrvhlC-eN7p9ISqXYpvJglgagy_h18tz1oo_QaTMU.png?r=7e1"} alt="title" />
                        </div>

                        <div className="billboard-description">
                            <div className="suplemental">Ver temporada 2 ahora</div>
                            <div className="episode-title-container"></div>
                            <div className="synopsis">Una niña muy vivaz se une a un gremio de revoltosos brujos. Son raros, pero ¿dónde encontrarías un gato azul que habla?</div>
                        </div>

                        <div className="billboard-link">
                            <a className="play-link" href={"/"} >
                                <button className="hasLabel">
                                    <span className="play-icon"><FontAwesomeIcon icon={faPlay} /></span>
                                    <span>Reproducir</span>
                                </button>
                            </a>

                            <button className="hasLabel play-link-secondary">
                                <span className="play-icon"><FontAwesomeIcon icon={faQuestionCircle} /></span>
                                <span>Más informacion</span>
                            </button>

                        </div>
                    </div>

                </div>
            </div>

            <div className="billboard-vignette"></div>


        </div>
    );
}

export default HeroImage;

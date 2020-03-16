import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function MediumBillboard() {
    return (
        <div className="medium-billboard">
            <div className="medium-billboard-wrapper">
                <div>
                    <div className="medium-billboard-background-image"></div>

                    <div className="md-billboard-video">
                        <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSJEkLt3NYvgVYB0hp9WfRMvuHqGqrw2HZn9CDlxZP0CrdmluBhZP5eTcasvQP_WBdja1e_CPEvZhYQACyCAHbYXrAX4.jpg?r=36e"} alt={"test"} />

                        <div className="md-billboard-video-button">
                            <button> o</button>
                            <span className="md-billboard-maturity">
                                +13
                            </span>
                        </div>

                    </div>

                    <div className="md-billboard-info">
                        <div className="md-billboard-title">
                            <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABUPI5ty-CBWw5AdBNQbmXHhcmeohkP46DKXl-03PBpW08JuafqQZIQDV3npa-TEwx89mhO-eJ39LulelMAgfRuf7Mxgw7DrRl3U8NZXg_eOvq84p9Ajzhxal4x9oYgQ2TfXfkDrxtGT08Lg3Gn-9hqUFXKz0ZXTZa87ySoYn5agwRw.png?r=74b"} alt={"test"} />
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

                        <div className="billboard-additional-information">Ver temporada 1 ahora</div>

                        <div className="billboard-synopsis">Es un chico muy tranquilo. Pero un día sus instintos se apoderan de él. ¿Encaprichamiento o hambre depredadora?</div>

                    </div>


                </div>



            </div>
        </div>
    );
}

export default MediumBillboard;

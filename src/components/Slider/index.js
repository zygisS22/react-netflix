import React, { useState } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

function Slider() {

    const [content, setContent] = useState(
        [{ title: "test1" },
        { title: "test2" },
        { title: "test3" },
        { title: "test4" },
        { title: "test5" },
        { title: "test6" },
        { title: "test7" }]
    )

    return (
        <div className="sliderBox">
            <h2 className="slider-header">
                <a href={"/"}>
                    <div>Mi lista</div>
                    {/* <div>Explorar más</div> */}


                </a>
            </h2>

            {/* <div className="slider-container">
                <div className="slider">
                   
                    <div className="sliderMask showPeek">

                        <div className="slider-content">

                            {content.map(item => {
                                return <SliderItem />
                            })}

                        </div>

                    </div>

                    <span className="handle handleNext">
                        <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
                    </span>
                </div>
            </div> */}


            {/* <span className="jaw-bone-content">
                <span className="jaw-bone-open-container">
                    <div className="jaw-bone-container">
                        <div className="background">

                            <div className="jaw-bone-background">
                                <div className="image-rotator"></div>
                            </div>

                            <div className="vignette"></div>
                            <div className="nav-shadow"></div>
                        </div>
                        <div className="jaw-bone">
                            <h3>
                                <div>
                                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABWnNRebcIUa6-YC6iaxEOvMGv0JSO3ILfKOREmlmp0or8V914Ss9TJtgwGWJaOPTJMPKfaCNLbVOjdHKiMVZk8G5bbyBe88Bug.png?r=4c5"} alt={"test"} />

                                </div>
                            </h3>

                            <div className="jaw-bone-common">
                                <div className="metadata">
                                    <span className="score">98% de coincidencia</span>
                                    <span className="year">1997</span>
                                    <span className="maturity-rating">+13</span>
                                    <span className="duration">2h 14m</span>
                                </div>

                                <div className="synopsis">
                                    Un príncipe que sufre una maldición letal se propone buscar una cura, y queda atrapado en una batalla entre un pueblo minero y los animales del bosque.
                                </div>

                                <div className="actions">
                                    <a className="play-link" href={"/"} >
                                        <button className="hasLabel">
                                            <span className="play-icon"><FontAwesomeIcon icon={faPlay} /></span>
                                            <span>Reproducir</span>
                                        </button>
                                    </a>

                                    <button className="hasLabel play-link-secondary">
                                        <span className="play-icon"><FontAwesomeIcon icon={faPlus} /></span>
                                        <span>Mi lista</span>
                                    </button>
                                </div>

                                <div className="meta-lists">
                                    <p className="inline-list">
                                        <span>Protagonizada por:</span>
                                        Yoji Matsuda,Yuriko Ishida,Yuko Tanaka

                                    </p>
                                    <p className="inline-list">
                                        <span>Géneros:</span>
                                        Animes de acción,Animes de ciencia ficción y fantásticos,Largometrajes de anime
                                    </p>
                                </div>

                                <ul className="menu">
                                    <li className="current">
                                        <a href={"/"}>INFROMACION GENERAL</a>
                                        <span></span>
                                    </li>
                                    <li>
                                        <a href={"/"}>SIMILARES</a>
                                        <span></span>
                                    </li>
                                    <li>
                                        <a href={"/"}>DETALLES</a>
                                        <span></span>
                                    </li>
                                </ul>

                            </div>


                        </div>
                        <button className="close-button"><span>X</span></button>
                    </div>
                </span>
            </span> */}

        </div>
    );
}

export default Slider;

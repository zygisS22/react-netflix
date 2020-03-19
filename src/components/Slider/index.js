import React, { useRef, useEffect } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faTimes, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'

import SliderContext from "./context"
import useSlider from "../../hooks/useSlide"

import useWindowWidth from "../../hooks/useWindowWidth"


function Slider() {

    const pruebing = [{
        "id": "slide1",
        "title": "test1",
        "index": 0,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide2",
        "title": "test2",
        "index": 1,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide3",
        "title": "test3",
        "index": 2,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide4",
        "title": "test4",
        "index": 3,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide5",
        "title": "test5",
        "index": 4,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide6",
        "title": "test6",
        "index": 5,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide7",
        "title": "test7",
        "index": 6,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide8",
        "title": "test8",
        "index": 7,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide9",
        "title": "test9",
        "index": 8,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide10",
        "title": "test10",
        "index": 9,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide11",
        "title": "test11",
        "index": 10,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide12",
        "title": "test12",
        "index": 11,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide13",
        "title": "test13",
        "index": 12,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide14",
        "title": "test14",
        "index": 13,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide15",
        "title": "test15",
        "index": 14,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide16",
        "title": "test16",
        "index": 15,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide17",
        "title": "test17",
        "index": 16,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide18",
        "title": "test18",
        "index": 17,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide19",
        "title": "test19",
        "index": 18,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide20",
        "title": "test20",
        "index": 19,
        "transform": "0",
        "origin": "center",
    }

    ]


    const width = useWindowWidth()
    const ref = useRef(null)

    const {
        moveSection,
        selectSlide,
        closeInformationWindow,
        scaleTiles,
        resetSize,
        sliderIndex,
        sliderPages,
        slideProps,
        hasPrev,
        hasNext,
        content,
        currentSlide
    } = useSlider(width, ref, 20, pruebing);


    const contextValue = {
        currentSlide
    };


    useEffect(() => {


    }, [width])


    const paginationIndicator = (nPages) => {

        let paginationList = []

        for (let i = 0; i < nPages; i++) {

            if (sliderIndex == i) {
                paginationList.push(<li className="active" key={i}></li>)
            } else {
                paginationList.push(<li key={i}></li>)
            }


        }

        return paginationList

    }


    return (
        <SliderContext.Provider value={contextValue}>
            <div className="sliderBox">
                <h2 className="slider-header">
                    <a href={"/"}>
                        <div>Mi lista</div>
                        <div className="see-more">Explorar más</div>
                        <div className="see-more-chevron"><FontAwesomeIcon icon={faChevronRight} /></div>


                    </a>
                </h2>

                <div className="slider-container">
                    <div className="slider">

                        <ul className="pagination-indicator">


                            {sliderPages > 0 ? (paginationIndicator(sliderPages)) : ""}


                        </ul>

                        <div className="sliderMask showPeek">

                            <div className={`slider-content ${currentSlide && "open"}`} ref={ref} {...slideProps} >

                                {content.map(item => {
                                    return <SliderItem
                                        key={item.id}
                                        title={item.id}
                                        hover={scaleTiles}
                                        reset={resetSize}
                                        transform={item.transform}
                                        origin={item.origin}
                                        onSelectSlide={selectSlide}
                                    />
                                })}



                            </div>

                        </div>

                        {hasNext && (<span className="handle handleNext" onClick={() => moveSection("right")}>
                            <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
                        </span>)}


                        {hasPrev && (<span className="handle handlePrev" onClick={() => moveSection("left")}>
                            <strong><FontAwesomeIcon icon={faChevronLeft} /></strong>
                        </span>)}


                    </div>
                </div>

                {currentSlide && (<div className="additional-information">
                    <div className="ai-background">
                        <div className="ai-background-shadow" />
                        <div
                            className="ai-background-image"
                            style={{ 'backgroundImage': `url(https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbjjL2qGJzMOn4ll2z_7FUhCpubFddwRSN6LWNoJaRPmP0MQOWOkHy93CT7F8XRvWkBzU9LeQtDmholuBEABQTWJPc5k.jpg?r=1dc)` }}
                        />

                        <div className="ai-background-nav-shadow"></div>
                    </div>

                    <div className="ai-content-area">
                        <div className="ai-content-area-container">
                            <h3>
                                <div>
                                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABehBFm6NZXsNkUPYc66khsJG2gZkV6OmCqyRLiVtZfG2eQpR1fAxYIlb_DMOA_M0nhB07WKuNIU3wpJEXvjlwZBU7R_g5NXDO2jQ7QpvkHl_3wG_VKkFFTNFbyNPjrxr1krJEaaTWFs0qjTjE5IuxPP5Rc0oMKoVV-coAO-8bMM.png?r=c9b"} alt={"test"} />

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
                                    El plan de Belmont y Sypha para dejar Lindenfeld sufre un imprevisto. Isaac y el capitán reflexionan sobre los valores de la humanidad. Hector intenta entender a Lenore.
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

                        <button className="ai-close-button" onClick={() => closeInformationWindow()}><span><FontAwesomeIcon icon={faTimes} /></span></button>


                    </div>

                </div>)}



            </div>
        </SliderContext.Provider>
    );
}

export default Slider;

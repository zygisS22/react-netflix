import React, { useRef, useEffect, useState } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faTimes, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'

import SliderContext from "./context"
import useSlider from "../../hooks/useSlide"


import { IMAGE_BASE } from "../../api"

import useWindowWidth from "../../hooks/useWindowWidth"


function Slider({ mainTitle, data }) {

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
        currentSlide,
        additionalMovieInfo
    } = useSlider(width, ref, 20, data);


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
                        <div>{mainTitle}</div>
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
                                        data={item}
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
                            style={{ 'backgroundImage': `url(${IMAGE_BASE}original/${currentSlide.backdrop_path})` }}
                        />

                        <div className="ai-background-nav-shadow"></div>
                    </div>

                    {additionalMovieInfo ? (
                        <React.Fragment>
                            <div className="ai-content-area">
                                <div className="ai-content-area-container">
                                    <h3>
                                        <div>
                                            {currentSlide.title}

                                            {additionalMovieInfo && console.log(additionalMovieInfo)}
                                        </div>
                                    </h3>

                                    <div className="jaw-bone-common">
                                        <div className="metadata">
                                            <span className="imdb"><a href={"/"}><FontAwesomeIcon icon={faImdb} /></a></span>
                                            <span className="score">{additionalMovieInfo.vote_average}</span>
                                            <span className="year">{currentSlide.release_date}</span>
                                            {/* <span className="maturity-rating">+13</span> */}
                                            <span className="duration">{additionalMovieInfo.runtime}m</span>

                                        </div>

                                        <div className="synopsis">
                                            {currentSlide.overview}
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
                                                {additionalMovieInfo.credits.cast.map((person, index) => {
                                                    if (index < 6) return person.name + " "

                                                })}
                                            </p>
                                            <p className="inline-list">
                                                <span>Géneros:</span>
                                                {additionalMovieInfo.genres.map((genre, index) => {
                                                    if (index < 6) return genre.name + " "

                                                })}
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
                        </React.Fragment>
                    ) : (<div className="ai-content-area"><h2>Cargando...</h2></div>)}





                </div>)}



            </div>
        </SliderContext.Provider>
    );
}

export default Slider;

import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGE_BASE } from "../../api"
import { faTimes, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'


const SelectedItem = ({ currentSlide, additionalMovieInfo, closeInformationWindow }) => {

    const [menuOption, setMenuOption] = useState("general-info")

    useEffect(() => {


    }, [])

    return (
        <div className="additional-information">


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
                                    <li className={`${menuOption == "general-info" && "current"}`} onClick={() => setMenuOption("general-info")}>
                                        <a >INFROMACION GENERAL</a>
                                        <span></span>
                                    </li>
                                    <li className={`${menuOption == "similar" && "current"}`} onClick={() => setMenuOption("similar")}>
                                        <a >SIMILARES</a>
                                        <span></span>
                                    </li>
                                    <li className={`${menuOption == "details" && "current"}`} onClick={() => setMenuOption("details")}>
                                        <a >DETALLES</a>
                                        <span></span>
                                    </li>
                                </ul>

                            </div>


                        </div>

                        <button className="ai-close-button" onClick={() => closeInformationWindow()}><span><FontAwesomeIcon icon={faTimes} /></span></button>


                    </div>
                </React.Fragment>
            ) : (<div className="ai-content-area"><h2>Cargando...</h2></div>)}


        </div>)


}

export default SelectedItem
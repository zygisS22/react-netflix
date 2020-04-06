import React, { useState } from "react"

import Similar from "../Similar"
import Details from "../Details"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGE_BASE } from "../../api"
import { faTimes, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'


const SelectedItem = ({ currentSlide, additionalMovieInfo, closeInformationWindow }) => {

    const [menuOption, setMenuOption] = useState("general-info")

    return (
        <div className="additional-information">


            <div className={`ai-background ${menuOption != "general-info" ? "dim" : null}`}>
                <div className={`ai-background-shadow`} />
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
                                <div>{currentSlide.title}</div>
                            </h3>

                            {menuOption == "general-info" ? (
                                <div className="jaw-bone-common">
                                    <div className="metadata">
                                        <span className="imdb"><a href={`https://www.imdb.com/title/${additionalMovieInfo.imdb_id}`} target="_blank"><FontAwesomeIcon icon={faImdb} /></a></span>
                                        <span className="score">{additionalMovieInfo.vote_average}</span>
                                        <span className="year">{currentSlide.release_date}</span>
                                        <span className="duration">{additionalMovieInfo.runtime}m</span>

                                    </div>

                                    <div className="synopsis">
                                        {currentSlide.overview}
                                    </div>

                                    <div className="actions">
                                        <a className="play-link" href={"/"} >
                                            <button className="hasLabel">
                                                <span className="play-icon"><FontAwesomeIcon icon={faPlay} /></span>
                                                <span>Play</span>
                                            </button>
                                        </a>

                                        <button className="hasLabel play-link-secondary">
                                            <span className="play-icon"><FontAwesomeIcon icon={faPlus} /></span>
                                            <span>My list</span>
                                        </button>
                                    </div>

                                    <div className="meta-lists">
                                        <p className="inline-list">
                                            <span>Featuring:</span>
                                            {additionalMovieInfo.credits.cast.map((person, index) => {
                                                if (index < 6) return person.name + " "

                                            })}
                                        </p>
                                        <p className="inline-list">
                                            <span>Genres:</span>
                                            {additionalMovieInfo.genres.map((genre, index) => {
                                                if (index < 6) return genre.name + " "

                                            })}
                                        </p>
                                    </div>



                                </div>
                            ) : menuOption == "similar" ? (
                                <Similar additionalMovieInfo={additionalMovieInfo} />) : menuOption == "details" ? (
                                    <Details additionalMovieInfo={additionalMovieInfo} />
                                ) : null}

                            <ul className="menu">
                                <li className={`${menuOption == "general-info" && "current"}`} onClick={() => setMenuOption("general-info")}>
                                    <a >GENERAL INFORMATION</a><span></span>
                                </li>
                                <li className={`${menuOption == "similar" && "current"}`} onClick={() => setMenuOption("similar")}>
                                    <a >SIMILAR</a><span></span>
                                </li>
                                <li className={`${menuOption == "details" && "current"}`} onClick={() => setMenuOption("details")}>
                                    <a >DETAILS</a><span></span>
                                </li>
                            </ul>

                        </div>

                        <button className="ai-close-button" onClick={() => closeInformationWindow()}><span><FontAwesomeIcon icon={faTimes} /></span></button>

                    </div>
                </React.Fragment>
            ) : (<div className="ai-content-area"><h2>Loading...</h2></div>)}


        </div>)


}

export default SelectedItem
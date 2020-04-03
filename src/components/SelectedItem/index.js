import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IMAGE_BASE } from "../../api"
import { faTimes, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faImdb } from '@fortawesome/free-brands-svg-icons'


const SelectedItem = ({ currentSlide, additionalMovieInfo, closeInformationWindow }) => {

    const [menuOption, setMenuOption] = useState("general-info")

    useEffect(() => {



    }, [])





    const findOnebyType = (name, type, data) => {

        let first = data.find((item, index) => item.department == type)

        if (first) {
            return (
                <div className="menu-details-item">
                    <span className="details-item-title">{name}</span>
                    <span>{first.name}</span>
                </div>
            )
        }


    }

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
                                <div>
                                    {currentSlide.title}


                                </div>
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



                                </div>
                            ) : menuOption == "similar" ? (
                                <div className="menu-similar">
                                    <div className="menu-similar-content">


                                        {additionalMovieInfo.similar.results.map((similarMovie, index) => {

                                            if (index < 4) {
                                                return (
                                                    <div className="similar-item">
                                                        <div className="similar-item-image"><img src={`${IMAGE_BASE}original/${similarMovie.backdrop_path}`} alt={"item"} /></div>
                                                        <div className="similar-item-metada">
                                                            <span className="similar-item-title">{similarMovie.title}</span><br />
                                                            <span className="release-date">{similarMovie.release_date}</span>
                                                            {/* <span className="duration">{similarMovie.runtime}m</span> */}
                                                        </div>
                                                        <div className="similar-item-synopsis">{similarMovie.overview}</div>
                                                    </div>
                                                )
                                            }


                                        })}
                                    </div>
                                </div>
                            ) : menuOption == "details" ? (
                                <div className="menu-details">
                                    <div className="menu-details-content">
                                        <div className="menu-details-item">
                                            <span className="details-item-title">Reparto</span>
                                            {additionalMovieInfo.credits.cast.map((item, index) => {
                                                if (index < 10) {
                                                    return <span>{item.name}</span>
                                                }
                                            })}
                                        </div>

                                        {findOnebyType("Direccion", "Directing", additionalMovieInfo.credits.crew)}

                                        {findOnebyType("Edicion", "Editing", additionalMovieInfo.credits.crew)}

                                        {findOnebyType("Sonido", "Sound", additionalMovieInfo.credits.crew)}


                                        <div className="menu-details-item">
                                            <span className="details-item-title">Generos</span>
                                            {additionalMovieInfo.genres.map((item, index) => {
                                                return (
                                                    <span>{item.name}</span>
                                                )

                                            })}
                                        </div>

                                        {additionalMovieInfo.production_companies[0] && (
                                            <div className="menu-details-item">
                                                <span className="details-item-title">Produccion</span>
                                                <span>{additionalMovieInfo.production_companies[0].name}</span>

                                            </div>
                                        )}





                                    </div>
                                </div>
                            ) : null}



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

                        <button className="ai-close-button" onClick={() => closeInformationWindow()}><span><FontAwesomeIcon icon={faTimes} /></span></button>


                    </div>
                </React.Fragment>
            ) : (<div className="ai-content-area"><h2>Cargando...</h2></div>)}


        </div>)


}

export default SelectedItem
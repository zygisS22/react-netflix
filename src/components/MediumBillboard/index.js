import React, { useEffect, useState } from 'react';
import { getMovieInformation } from "../../api"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


function MediumBillboard() {


    const [poster, setPoster] = useState(null)
    const [background, setBackground] = useState(null)
    const [secondaryBackground, setSecondaryBackground] = useState(null)
    const [synopsis, setSynopsis] = useState(null)
    const [title, setTitle] = useState(null)



    useEffect(async () => {

        let movie = await getMovieInformation("530915")

        setPoster(movie.poster_path)
        setBackground(movie.backdrop_path)
        setSynopsis(movie.overview)
        setTitle(movie.original_title)
        setSecondaryBackground(movie.secondarybackdrop_path)



    }, [])

    return (
        <div className="medium-billboard">
            <div className="medium-billboard-wrapper">
                <div>
                    <div style={{ "background-image": `url(${background})` }} className="medium-billboard-background-image"></div>

                    <div className="md-billboard-video">

                        <img src={secondaryBackground ? secondaryBackground : background} alt={"background"} />



                        <div className="md-billboard-video-button">
                            {/* <button> o</button> */}
                            <span className="md-billboard-maturity">
                                +13
                            </span>
                        </div>

                    </div>

                    <div className="md-billboard-info">
                        <div className="md-billboard-title">
                            {title}
                            {/* <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABUPI5ty-CBWw5AdBNQbmXHhcmeohkP46DKXl-03PBpW08JuafqQZIQDV3npa-TEwx89mhO-eJ39LulelMAgfRuf7Mxgw7DrRl3U8NZXg_eOvq84p9Ajzhxal4x9oYgQ2TfXfkDrxtGT08Lg3Gn-9hqUFXKz0ZXTZa87ySoYn5agwRw.png?r=74b"} alt={"test"} /> */}
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

                        <div className="billboard-additional-information"></div>

                        <div className="billboard-synopsis">{synopsis}</div>

                    </div>


                </div>



            </div>
        </div>
    );
}

export default MediumBillboard;

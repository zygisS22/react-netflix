import React, { useRef, useState, useEffect, useContext } from 'react';
import useVisibility from "../../hooks/useVisibility"
import SliderContext from "../Slider/context"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faPlayCircle, faVolumeMute, faThumbsUp, faPlus } from '@fortawesome/free-solid-svg-icons'


function SliderItem(props) {


    const ref = useRef(null)
    const [inViewport, setInViewport] = useState(false)
    const [showOverlay, setShowOverlay] = useState(false)

    const sliderWrapper = useContext(SliderContext);

    const itemVisible = () => {
        setInViewport(true)
    }

    const itemNotVisible = () => {
        setInViewport(false)
    }

    const onHover = (e) => {

        if (!sliderWrapper.currentSlide) {
            props.hover(e)
            setShowOverlay(true)
        }

    }

    const onHoverLeave = (e) => {

        props.reset(e)

        setShowOverlay(false)
    }



    const isActive = sliderWrapper.currentSlide && sliderWrapper.currentSlide.id === props.title;


    useVisibility(ref, itemVisible, itemNotVisible);



    useEffect(() => {

    }, [inViewport, setInViewport])

    const translate = `translateX(${props.transform})`
    const styled = { transform: translate, "transformOrigin": props.origin, transition: "all 0.3s ease-in-out" }


    return (
        <div
            style={styled}
            data-id={props.title}
            className={`slider-item ${inViewport ? "onScreen" : ""}`}
            ref={ref}
            onMouseLeave={(e) => onHoverLeave(e)}
            onMouseEnter={(e) => onHover(e)}
        >
            <a>
                <div className="boxart">
                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbYGPa7zJQbEsyXeZPepSwRd3BNqrqyOS7VK_xXkAs5d31NIpoL3NQyFQeyIYjINIwtsw_Z6wjzhmZFXMnmiBWV8ecLIymc11ceqxH0m7fy1XTMjuTKkm2r7UJ37VA4V2yZmBNZupEhOM9ThxcHFkvi0osjHN2P95oNH74lTzULEqu9JNAuMb5qXIUVzQsZTCvj2lQd4reHhn_9irqyDzcNs.jpg?r=31b"} alt="boxart" />

                </div>
            </a>


            <button onClick={() => props.onSelectSlide(props.title)} className="show-details">
                <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>

            <div className={`item-overlay ${showOverlay ? "open" : ""}`}>
                <div className="item-wrapper">
                    <div className="item-overview">
                        <div className="item-overview-play">
                            <span><FontAwesomeIcon icon={faPlayCircle} /></span>
                        </div>
                        <div className="item-overview-title">The witcher</div>
                        <div className="item-overview-metadata">
                            <span className="metadata-rating">Novedad</span>
                            <span className="metadata-maturity">16+</span>
                            <span>1h 13m</span>
                        </div>
                        <div className="item-overview-synopsis">
                            Los demonios y sus malvados secuaces destruyen al antiguo mentor y a los aliados de este valiente mercenario.
                        </div>
                    </div>
                    <div className="item-actions">
                        <div className="item-action-buttons">
                            <div><span><FontAwesomeIcon icon={faVolumeMute} /></span></div>
                            <div><span><FontAwesomeIcon icon={faThumbsUp} /></span></div>
                            <div><span><FontAwesomeIcon icon={faPlus} /></span></div>
                        </div>
                    </div>
                    <div className="item-chevron"></div>
                </div>

            </div>

            {isActive && (<div className="mark" />)}

        </div>
    );
}

export default SliderItem;

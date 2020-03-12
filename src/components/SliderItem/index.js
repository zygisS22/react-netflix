import React, { useRef, useState, useEffect, useContext } from 'react';
import useVisibility from "../../hooks/useVisibility"
import SliderContext from "../Slider/context"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


function SliderItem(props) {


    const ref = useRef(null)
    const [inViewport, setInViewport] = useState(false)

    const itemVisible = () => {
        setInViewport(true)
    }

    const itemNotVisible = () => {
        setInViewport(false)
    }

    const test = useContext(SliderContext);

    const isActive = test.currentSlide && test.currentSlide.id === props.title;


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
            onMouseLeave={(e) => props.reset(e)}
            onMouseEnter={(e) => props.hover(e)}
        >
            <a>
                <div className="boxart">
                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbYGPa7zJQbEsyXeZPepSwRd3BNqrqyOS7VK_xXkAs5d31NIpoL3NQyFQeyIYjINIwtsw_Z6wjzhmZFXMnmiBWV8ecLIymc11ceqxH0m7fy1XTMjuTKkm2r7UJ37VA4V2yZmBNZupEhOM9ThxcHFkvi0osjHN2P95oNH74lTzULEqu9JNAuMb5qXIUVzQsZTCvj2lQd4reHhn_9irqyDzcNs.jpg?r=31b"} alt="boxart" />

                </div>
            </a>


            <button onClick={() => props.onSelectSlide(props.title)} className="show-details">
                <span><FontAwesomeIcon icon={faAngleDown} /></span>
            </button>

            {isActive && (<div className="mark" />)}

        </div>
    );
}

export default SliderItem;

import React, { useRef, useState, useEffect, useContext } from 'react';
import useVisibility from "../../hooks/useVisibility"
import SliderContext from "../Slider/context"


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
    const styled = { transform: translate, "transformOrigin": props.origin }


    return (
        <div
            style={styled}
            data-id={props.title}
            className={`slider-item ${inViewport ? "onScreen" : ""}`}
            ref={ref}
            onMouseOut={(e) => props.reset(e)}
            onMouseEnter={(e) => props.hover(e)}
            onClick={() => props.onSelectSlide(props.title)}
        >
            <a>
                <div className="boxart">
                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"} alt="boxart" />

                </div>
            </a>

            {isActive && (<div className="mark" />)}

        </div>
    );
}

export default SliderItem;

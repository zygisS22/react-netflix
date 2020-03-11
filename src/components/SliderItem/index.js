import React, { useRef, useState, useEffect } from 'react';
import useVisibility from "../../hooks/useVisibility"


function SliderItem(props) {


    const ref = useRef(null)
    const [inViewport, setInViewport] = useState(false)

    const itemVisible = () => {
        setInViewport(true)
    }

    const itemNotVisible = () => {
        setInViewport(false)
    }

    useVisibility(ref, itemVisible, itemNotVisible);

    useEffect(() => {

    }, [inViewport, setInViewport])




    const translate = `translateX(${props.transform})`

    let test = { transform: translate }


    return (
        <div style={test} data-id={props.title} className={`slider-item ${inViewport ? "onScreen" : ""}`} ref={ref} onMouseOut={(e) => props.reset(e)} onMouseEnter={(e) => props.hover(e)}>
            <a>
                <div className="boxart">
                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"} alt="boxart" />

                </div>
            </a>

        </div>
    );
}

export default SliderItem;

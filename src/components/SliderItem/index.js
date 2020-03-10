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

    useEffect(() => {



    }, [inViewport, setInViewport])

    useVisibility(ref, itemVisible, itemNotVisible);


    return (
        <div className={`slider-item`} ref={ref} data-inview={inViewport ? "TRUE" : "FALSE"}>
            <a href={"/"}>
                <div className="boxart">
                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"} alt="boxart" />

                </div>
            </a>

        </div>
    );
}

export default SliderItem;

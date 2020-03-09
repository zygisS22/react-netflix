import React, { useState } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Slider() {





    const [content, setContent] = useState(
        [{
            title: "test1",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },
        {
            title: "test2",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },
        {
            title: "test3",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },
        {
            title: "test4",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },
        {
            title: "test5",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },
        {
            title: "test6",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },
        {
            title: "test7",
            img: "https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTXnl2DtLEd4DBJ3JvTGk7QCJUuYESNwnnDHPx1RTM0eOn_xkcyVfp_jyrBc4_CRyNpAOPOYb7Xvjdv6kVL9s3nd5gU.jpg?r=31d"
        },

        ]
    )

    return (
        <div className="sliderBox">
            <h2 className="slider-header">
                <a href={"/"}>
                    <div>Mi lista</div>
                    {/* <div>Explorar más</div> */}


                </a>
            </h2>

            <div className="slider-container">
                <div className="slider">
                    {/* AQUI IRIA EL PAGINATION INDICATOR */}
                    <div className="sliderMask showPeek">

                        <div className="slider-content">

                            {content.map(item => {
                                return <SliderItem />
                            })}

                        </div>

                    </div>

                    <span className="handle handleNext">
                        <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
                    </span>
                </div>
            </div>


            <span className="jaw-bone-content">
                <span className="jaw-bone-open-container">
                    <div className="jaw-bone-container">
                        <div className="background">

                            <div className="jaw-bone-background">
                                <div className="image-rotator"></div>
                            </div>

                            <div className="vignette"></div>
                            <div className="nav-shadow"></div>
                        </div>
                        <div className="jaw-bone"></div>
                        <button>close</button>
                    </div>
                </span>
            </span>

        </div>
    );
}

export default Slider;

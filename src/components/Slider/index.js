import React from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Slider() {

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

                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />
                            <SliderItem />

                        </div>

                    </div>

                    <span className="handle handleNext">
                        <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Slider;

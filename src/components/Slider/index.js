import React from 'react';

import SliderItem from "../SliderItem"

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

                        </div>

                    </div>

                    {/* HANDLE PREVIOUS AND NEXT */}

                </div>
            </div>

        </div>
    );
}

export default Slider;

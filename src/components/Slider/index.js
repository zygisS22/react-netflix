import React, { useRef, useEffect, useState } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import SliderContext from "./context"
import useSlider from "../../hooks/useSlide"



import useWindowWidth from "../../hooks/useWindowWidth"

import SelectedItem from "../SelectedItem"


function Slider({ mainTitle, data }) {

    const width = useWindowWidth()
    const ref = useRef(null)

    const {
        moveSection,
        selectSlide,
        closeInformationWindow,
        scaleTiles,
        resetSize,
        sliderIndex,
        sliderPages,
        slideProps,
        hasPrev,
        hasNext,
        content,
        currentSlide,
        additionalMovieInfo
    } = useSlider(width, ref, 20, data);


    const contextValue = {
        currentSlide
    };


    useEffect(() => {


    }, [width])


    const paginationIndicator = (nPages) => {

        let paginationList = []

        for (let i = 0; i < nPages; i++) {

            if (sliderIndex == i) {
                paginationList.push(<li className="active" key={i}></li>)
            } else {
                paginationList.push(<li key={i}></li>)
            }


        }

        return paginationList

    }


    return (
        <SliderContext.Provider value={contextValue}>
            <div className="sliderBox">
                <h2 className="slider-header">
                    <a href={"/"}>
                        <div>{mainTitle}</div>
                        <div className="see-more">Explorar más</div>
                        <div className="see-more-chevron"><FontAwesomeIcon icon={faChevronRight} /></div>


                    </a>
                </h2>

                <div className="slider-container">
                    <div className="slider">

                        <ul className="pagination-indicator">


                            {sliderPages > 0 ? (paginationIndicator(sliderPages)) : ""}


                        </ul>

                        <div className="sliderMask showPeek">

                            <div className={`slider-content ${currentSlide && "open"}`} ref={ref} {...slideProps} >

                                {content.map(item => {
                                    return <SliderItem
                                        key={item.id}
                                        title={item.id}
                                        data={item}
                                        hover={scaleTiles}
                                        reset={resetSize}
                                        transform={item.transform}
                                        origin={item.origin}
                                        onSelectSlide={selectSlide}
                                    />
                                })}



                            </div>

                        </div>

                        {hasNext && (<span className="handle handleNext" onClick={() => moveSection("right")}>
                            <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
                        </span>)}


                        {hasPrev && (<span className="handle handlePrev" onClick={() => moveSection("left")}>
                            <strong><FontAwesomeIcon icon={faChevronLeft} /></strong>
                        </span>)}


                    </div>
                </div>


                {currentSlide && <SelectedItem currentSlide={currentSlide} additionalMovieInfo={additionalMovieInfo} closeInformationWindow={closeInformationWindow} />}





            </div>
        </SliderContext.Provider>
    );
}

export default Slider;

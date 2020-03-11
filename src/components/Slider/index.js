import React, { useState, useRef, useEffect, useContext } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faPlay, faPlus, faOtter } from '@fortawesome/free-solid-svg-icons'

import SliderContext from "./context"
import useSlide from "../../hooks/useSlide"
import useSizeElement from "../../hooks/useSizeElement"


function Slider() {

    const pruebing = [{
        "id": "slide1",
        "title": "test1",
        "index": 0,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide2",
        "title": "test2",
        "index": 1,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide3",
        "title": "test3",
        "index": 2,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide4",
        "title": "test4",
        "index": 3,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide5",
        "title": "test5",
        "index": 4,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide6",
        "title": "test6",
        "index": 5,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide7",
        "title": "test7",
        "index": 6,
        "transform": "0",
        "origin": "center",
    }]



    const [slider, setSlider] = useState(null)
    const ref = useRef(null)
    const [content, setContent] = useState(pruebing)





    //SLIDING TO NEXT SECTION



    // const reduxData = useContext(SliderContext);
    const [viewed, setViewed] = useState(0);
    const [distance, setDistance] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [totalInViewport, setTotalInViewport] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(null);


    // const { width, elementRef } = useSizeElement();
    const PADDINGS = 110;

    // const {
    //     handlePrev,
    //     handleNext,
    //     slideProps,
    //     containerRef,
    //     hasNext,
    //     hasPrev
    // } = useSlide(ref, 7);

    let slideProps = {
        style: { transform: `translate3d(${distance}px, 0, 0)` }
    };


    const contextValue = {
        // onSelectSlide: handleSelect,
        // onCloseSlide: handleClose,
        //elementRef,
        currentSlide,
    };




    const moveSection = (type) => {
        console.log("MOVER")

        if (type == "right") {
            setViewed(viewed + totalInViewport);
            setDistance(distance - containerWidth)
        } else if (type == "left") {
            setViewed(viewed - totalInViewport);
            setDistance(distance + containerWidth);
        }


    }


    useEffect(() => {



        if (ref.current) {


            const containerWidth = ref.current.clientWidth - PADDINGS;

            setSlider(ref.current.children)



            setContainerWidth(containerWidth);
            setTotalInViewport(Math.floor(containerWidth / 190));

        }

    }, [ref.current])




    const resetSize = (e) => {

        setContent(prevState => {

            let newState = prevState.map((item, index) => {

                item.transform = "0px"
                return item

            })

            return newState
        })
    }

    const scaleTitle = (e) => {

        e.preventDefault()

        const slideItemIndex = Object.entries(slider).findIndex(item => item[1] == e.currentTarget)
        const itemId = slider[slideItemIndex].dataset.id
        const hoveredSlide = content.filter(item => item.id === itemId)[0]


        let nextItem = isOnScreen(slider[slideItemIndex + 1])
        let prevItem = isOnScreen(slider[slideItemIndex - 1])

        console.log(nextItem)
        console.log(prevItem)

        //EDGE CASE : CHECK IF LEFT FIRST OR LAST RIGHT ELEMENT

        if (prevItem && nextItem) {

            setContent(prevState => {

                let newState = prevState.map((item, index) => {

                    item.origin = "center center"

                    if (hoveredSlide.id != item.id && index > hoveredSlide.index) {
                        item.transform = "25%"

                        return item
                    } else if (hoveredSlide.id != item.id && index < hoveredSlide.index) {
                        item.transform = "-25%"
                        return item
                    } else {
                        item.transform = "0px"
                        return item
                    }

                })

                return newState
            })


        } else if (!prevItem) {

            setContent(prevState => {

                let newState = prevState.map((item, index) => {
                    if (hoveredSlide.id != item.id && index > hoveredSlide.index) {
                        item.transform = "50%"
                        item.origin = "center center"
                        return item
                    } else {
                        item.transform = "0px"
                        item.origin = "left center"

                        return item
                    }
                })

                return newState
            })


        } else if (!nextItem) {

            setContent(prevState => {

                let newState = prevState.map((item, index) => {
                    if (hoveredSlide.id != item.id && index < hoveredSlide.index) {
                        item.transform = "-50%"
                        item.origin = "center center"
                        return item
                    } else {
                        item.transform = "0px"
                        item.origin = "center right "
                        return item
                    }
                })

                return newState
            })
        }


    }


    const isOnScreen = (slide) => {

        if (slide && slide.className.split(" ").includes("onScreen")) {
            return true
        }

        return false

    }




    return (
        <SliderContext.Provider value={contextValue}>
            <div className="sliderBox">
                <h2 className="slider-header">
                    <a href={"/"}>
                        <div>Mi lista</div>
                        {/* <div>Explorar más</div> */}


                    </a>
                </h2>

                <div className="slider-container">
                    <div className="slider">

                        <div className="sliderMask showPeek">

                            <div className="slider-content" ref={ref} {...slideProps} >

                                {content.map(item => {
                                    return <SliderItem key={item.id} title={item.id} hover={scaleTitle} reset={resetSize} transform={item.transform} origin={item.origin} />
                                })}



                            </div>

                        </div>

                        <span className="handle handleNext" onClick={() => moveSection("right")}>
                            <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
                        </span>

                        <span className="handle handlePrev" onClick={() => moveSection("left")}>
                            <strong><FontAwesomeIcon icon={faChevronLeft} /></strong>
                        </span>
                    </div>
                </div>


                {/* <span className="jaw-bone-content">
                <span className="jaw-bone-open-container">
                    <div className="jaw-bone-container">
                        <div className="background">

                            <div className="jaw-bone-background">
                                <div className="image-rotator"></div>
                            </div>

                            <div className="vignette"></div>
                            <div className="nav-shadow"></div>
                        </div>
                        <div className="jaw-bone">
                            <h3>
                                <div>
                                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABWnNRebcIUa6-YC6iaxEOvMGv0JSO3ILfKOREmlmp0or8V914Ss9TJtgwGWJaOPTJMPKfaCNLbVOjdHKiMVZk8G5bbyBe88Bug.png?r=4c5"} alt={"test"} />

                                </div>
                            </h3>

                            <div className="jaw-bone-common">
                                <div className="metadata">
                                    <span className="score">98% de coincidencia</span>
                                    <span className="year">1997</span>
                                    <span className="maturity-rating">+13</span>
                                    <span className="duration">2h 14m</span>
                                </div>

                                <div className="synopsis">
                                    Un príncipe que sufre una maldición letal se propone buscar una cura, y queda atrapado en una batalla entre un pueblo minero y los animales del bosque.
                                </div>

                                <div className="actions">
                                    <a className="play-link" href={"/"} >
                                        <button className="hasLabel">
                                            <span className="play-icon"><FontAwesomeIcon icon={faPlay} /></span>
                                            <span>Reproducir</span>
                                        </button>
                                    </a>

                                    <button className="hasLabel play-link-secondary">
                                        <span className="play-icon"><FontAwesomeIcon icon={faPlus} /></span>
                                        <span>Mi lista</span>
                                    </button>
                                </div>

                                <div className="meta-lists">
                                    <p className="inline-list">
                                        <span>Protagonizada por:</span>
                                        Yoji Matsuda,Yuriko Ishida,Yuko Tanaka

                                    </p>
                                    <p className="inline-list">
                                        <span>Géneros:</span>
                                        Animes de acción,Animes de ciencia ficción y fantásticos,Largometrajes de anime
                                    </p>
                                </div>

                                <ul className="menu">
                                    <li className="current">
                                        <a href={"/"}>INFROMACION GENERAL</a>
                                        <span></span>
                                    </li>
                                    <li>
                                        <a href={"/"}>SIMILARES</a>
                                        <span></span>
                                    </li>
                                    <li>
                                        <a href={"/"}>DETALLES</a>
                                        <span></span>
                                    </li>
                                </ul>

                            </div>


                        </div>
                        <button className="close-button"><span>X</span></button>
                    </div>
                </span>
            </span> */}

            </div>
        </SliderContext.Provider>
    );
}

export default Slider;

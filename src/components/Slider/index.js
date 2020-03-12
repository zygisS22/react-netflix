import React, { useState, useRef, useEffect, useContext } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faTimes, faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'

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
    },
    {
        "id": "slide8",
        "title": "test8",
        "index": 7,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide9",
        "title": "test9",
        "index": 8,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide10",
        "title": "test10",
        "index": 9,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide11",
        "title": "test11",
        "index": 10,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide12",
        "title": "test12",
        "index": 11,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide13",
        "title": "test13",
        "index": 12,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide14",
        "title": "test14",
        "index": 13,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide15",
        "title": "test15",
        "index": 14,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide16",
        "title": "test16",
        "index": 15,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide17",
        "title": "test17",
        "index": 16,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide18",
        "title": "test18",
        "index": 17,
        "transform": "0",
        "origin": "center",
    }, {
        "id": "slide19",
        "title": "test19",
        "index": 18,
        "transform": "0",
        "origin": "center",
    },
    {
        "id": "slide20",
        "title": "test20",
        "index": 19,
        "transform": "0",
        "origin": "center",
    }

    ]



    const [slider, setSlider] = useState(null)
    const ref = useRef(null)
    const [content, setContent] = useState(pruebing)





    const [viewed, setViewed] = useState(0);
    const [distance, setDistance] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [totalInViewport, setTotalInViewport] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(null);
    const [itemWidth, setItemWidth] = useState(0)


    const hasPrev = distance < 0;
    const hasNext = (viewed + totalInViewport) < 20; // nº elements


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


    const selectSlide = (id) => {

        const selected = content.filter(item => item.id === id)[0]

        setCurrentSlide(selected)
    }

    const closeInformationWindow = () => {
        setCurrentSlide(null)
    }

    const moveSection = (type) => {


        if (type == "right") {
            setViewed(viewed + totalInViewport);
            setDistance(distance - containerWidth)
        } else if (type == "left") {
            setViewed(viewed - totalInViewport);
            setDistance(distance + containerWidth);
        }

        if (currentSlide) {

            let elementsWithClass = Object.entries(slider).filter(item => {

                if (item[1].className.includes("onScreen")) return true
            })

            let selectedItem = null


            if (type == "right") {


                elementsWithClass = elementsWithClass.slice(-1)[0]
                elementsWithClass = elementsWithClass[1].dataset.id
                selectedItem = content.filter(item => item.id === elementsWithClass)[0]
                selectedItem = content[selectedItem.index + 1]

            } else if (type == "left") {

                elementsWithClass = elementsWithClass[0]
                elementsWithClass = elementsWithClass[1].dataset.id
                selectedItem = content.filter(item => item.id === elementsWithClass)[0]
                selectedItem = content[selectedItem.index - 1]

            }

            setCurrentSlide(selectedItem)

        }


    }


    useEffect(() => {



        if (ref.current) {


            const containerWidth = ref.current.clientWidth;
            const itemWidth = ref.current.firstChild.clientWidth
            setSlider(ref.current.children)
            setItemWidth(itemWidth)
            setContainerWidth(containerWidth);
            setTotalInViewport(Math.floor(containerWidth / itemWidth));

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

        if (currentSlide) return

        if (!slider) return

        const slideItemIndex = Object.entries(slider).findIndex(item => item[1] == e.currentTarget)
        const itemId = slider[slideItemIndex].dataset.id
        const hoveredSlide = content.filter(item => item.id === itemId)[0]


        let nextItem = isOnScreen(slider[slideItemIndex + 1])
        let prevItem = isOnScreen(slider[slideItemIndex - 1])

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

                            <div className={`slider-content ${currentSlide && "open"}`} ref={ref} {...slideProps} >

                                {content.map(item => {
                                    return <SliderItem
                                        key={item.id}
                                        title={item.id}
                                        hover={scaleTitle}
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

                {currentSlide && (<div className="additional-information">
                    <div className="ai-background">
                        <div className="ai-background-shadow" />
                        <div
                            className="ai-background-image"
                            style={{ 'backgroundImage': `url(https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbjjL2qGJzMOn4ll2z_7FUhCpubFddwRSN6LWNoJaRPmP0MQOWOkHy93CT7F8XRvWkBzU9LeQtDmholuBEABQTWJPc5k.jpg?r=1dc)` }}
                        />

                        <div className="ai-background-nav-shadow"></div>
                    </div>

                    <div className="ai-content-area">
                        <div className="ai-content-area-container">
                            <h3>
                                <div>
                                    <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/AwfSa8TtJlDHJjLcbE--NI7p5gU/AAAABehBFm6NZXsNkUPYc66khsJG2gZkV6OmCqyRLiVtZfG2eQpR1fAxYIlb_DMOA_M0nhB07WKuNIU3wpJEXvjlwZBU7R_g5NXDO2jQ7QpvkHl_3wG_VKkFFTNFbyNPjrxr1krJEaaTWFs0qjTjE5IuxPP5Rc0oMKoVV-coAO-8bMM.png?r=c9b"} alt={"test"} />

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
                                    El plan de Belmont y Sypha para dejar Lindenfeld sufre un imprevisto. Isaac y el capitán reflexionan sobre los valores de la humanidad. Hector intenta entender a Lenore.
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

                        <button className="ai-close-button" onClick={() => closeInformationWindow()}><span><FontAwesomeIcon icon={faTimes} /></span></button>


                    </div>

                </div>)}




                {/* <span className="jaw-bone-content open">
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

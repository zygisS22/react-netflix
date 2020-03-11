import React, { useState, useRef, useEffect, useContext } from 'react';
import SliderItem from "../SliderItem"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faPlay, faPlus, faOtter } from '@fortawesome/free-solid-svg-icons'

function Slider() {



    const pruebing = [{
        "id": "slide1",
        "title": "test1",
        "index": 0,
        "transform": "0"
    }, {
        "id": "slide2",
        "title": "test2",
        "index": 1,
        "transform": "0"
    }, {
        "id": "slide3",
        "title": "test3",
        "index": 2,
        "transform": "0"
    }, {
        "id": "slide4",
        "title": "test4",
        "index": 3,
        "transform": "0"
    }, {
        "id": "slide5",
        "title": "test5",
        "index": 4,
        "transform": "0"
    }, {
        "id": "slide6",
        "title": "test6",
        "index": 5,
        "transform": "0"
    }, {
        "id": "slide7",
        "title": "test7",
        "index": 6,
        "transform": "0"
    }]





    const [slider, setSlider] = useState(null)
    const ref = useRef(null)
    const [content, setContent] = useState(pruebing)


    useEffect(() => {


        if (ref.current) {
            setSlider(ref.current.children)
        }

    }, [])

    const resetSize = (e) => {

        console.log("RESETING")

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

        //EDGE CASE : CHECK IF LEFT FIRST OR LAST RIGHT ELEMENT

        if (prevItem && nextItem) {

            //TRANSFORM X LA MITAD A LEFT Y LA OTRA MITAD RIGHT
            console.log("AMBOS")

            setContent(prevState => {

                let newState = prevState.map((item, index) => {

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

            //TRANSFORM X TO RIGHT EL DOBLE
            console.log("DERECHA")

            setContent(prevState => {

                let newState = prevState.map((item, index) => {
                    if (hoveredSlide.id != item.id && index > hoveredSlide.index) {
                        item.transform = "25%"
                        return item
                    } else {
                        item.transform = "0px"
                        return item
                    }
                })

                return newState
            })


        } else if (!nextItem) {

            //TRANSFORM X TO LEFT EL DOBLE
            console.log("IZQUIERDA")

            setContent(prevState => {

                let newState = prevState.map((item, index) => {
                    if (hoveredSlide.id != item.id && index < hoveredSlide.index) {
                        item.transform = "-25%"
                        return item
                    } else {
                        item.transform = "0px"
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

    const transformSlide = (value, type) => {

        //types: left, right or both

        // console.log(value)
        // console.log(type)

        return "translateX(50%)"


    }


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

                    <div className="sliderMask showPeek">

                        <div className="slider-content" ref={ref} >

                            {content.map(item => {
                                return <SliderItem key={item.id} title={item.id} hover={scaleTitle} reset={resetSize} transform={item.transform} />
                            })}



                        </div>

                    </div>

                    <span className="handle handleNext">
                        <strong><FontAwesomeIcon icon={faChevronRight} /></strong>
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
    );
}

export default Slider;

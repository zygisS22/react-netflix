import React, { useEffect, useRef, useState } from 'react';

import logo from "../../assets/netflix-2.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faBell } from '@fortawesome/free-solid-svg-icons'


function Header() {

    const [pinHeader, setHeader] = useState(false)
    const ref = useRef(null)


    const handleScroll = () => {



        if (window.scrollY == 0) {
            setHeader(false);
        } else if (ref && ref.current && ref.current.getBoundingClientRect()) {
            setHeader(ref.current.getBoundingClientRect().top <= 0);
        }



    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
    }, []);


    return (
        <div className="header-height-pinned">


            <div className={`header ${pinHeader ? 'pin-header' : ''}`} ref={ref}>
                <div className="logo">
                    <img src={logo} alt={"logo"} />
                </div>

                <div className="header-menu">
                    <ul>
                        <li><a href={"/"} className="active">Inicio</a></li>
                        <li><a href={"/"}>Series TV</a></li>
                        <li><a href={"/"}>Peliculas</a></li>
                        <li><a href={"/"}>Mas recientes</a></li>
                        <li><a href={"/"}>Mi lista</a></li>
                    </ul>
                </div>


                <div className="header-options">
                    <div><span className="icon"><FontAwesomeIcon icon={faSearch} /></span></div>
                    <div><span className="icon"><FontAwesomeIcon icon={faGift} /></span></div>
                    <div><span className="icon"><FontAwesomeIcon icon={faBell} /></span></div>
                    <div className="account-menu">
                        <div className="account-dropdown-menu">
                            <span className="presentation">
                                <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWyw3UeUMaPP3aLxzskg3Bn5htGHqQymxiEGTbfM91FZ0zJAPoEfYQdvHW7FV06FcdXhPC_4F7zNR7TFKLLv6yo.png?r=88c"} />
                            </span>
                            <span className="caret"></span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;

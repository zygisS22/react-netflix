import React from 'react';

import logo from "../../assets/netflix-2.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faBell } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <header>
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
                <div><FontAwesomeIcon icon={faSearch} /></div>
                <div><FontAwesomeIcon icon={faGift} /></div>
                <div><FontAwesomeIcon icon={faBell} /></div>
                <div className="account-menu">
                    <div className="account-dropdown-menu">
                        <span className="presentation">
                            <img src={"https://occ-0-2692-360.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWyw3UeUMaPP3aLxzskg3Bn5htGHqQymxiEGTbfM91FZ0zJAPoEfYQdvHW7FV06FcdXhPC_4F7zNR7TFKLLv6yo.png?r=88c"} />
                        </span>
                        <span className="caret"></span>
                    </div>

                </div>
            </div>

        </header>
    );
}

export default Header;

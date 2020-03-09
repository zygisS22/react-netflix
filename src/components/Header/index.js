import React from 'react';

import logo from "../../assets/netflix-2.svg"

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt={"logo"} />
            </div>

            <div className="header-menu">
                <ul>
                    <li><a className="active">Inicio</a></li>
                    <li><a>Series TV</a></li>
                    <li><a>Peliculas</a></li>
                    <li><a>Mi lista</a></li>
                </ul>
            </div>


            <div className="header-options">
                <div>Search</div>
                <div>Ref</div>
                <div>Notf</div>
                <div>Profile</div>
            </div>

        </header>
    );
}

export default Header;

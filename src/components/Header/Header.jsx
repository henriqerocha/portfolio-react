import React from "react";
import './style.css';
import '../../global.css'
import { Link } from "react-router-dom";
import logo from "../../assets/logo-menor.svg";

function Header() {
    return (
        <div className="header">

            <div className="container">

                <div className="container-header">

                    <div className="logo">
                        <figure>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="50" height="50" viewBox="0 0 80.000000 100.000000"
                                preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                    fill="#fff" stroke="none">
                                    <path d="M247 862 c-64 -64 -117 -125 -117 -134 0 -15 194 -208 209 -208 4 0
                                    23 16 42 36 l34 35 -68 62 c-37 34 -67 69 -67 79 0 9 39 52 88 96 l87 81 -34
                                    35 c-19 20 -40 36 -46 36 -6 0 -63 -53 -128 -118z"/>
                                    <path d="M419 764 l-34 -35 68 -60 c37 -34 67 -69 67 -79 0 -10 -39 -55 -87
                                    -100 l-88 -82 39 -34 39 -34 116 112 c64 61 118 120 119 131 4 21 -49 80 -149
                                    167 l-56 49 -34 -35z"/>
                                    <path d="M120 161 c0 -125 1 -131 20 -131 20 0 20 5 18 127 -3 112 -5 128 -20
                                    131 -16 3 -18 -8 -18 -127z"/>
                                    <path d="M320 236 l0 -56 -55 0 c-48 0 -55 -3 -55 -19 0 -17 8 -20 53 -23 l52
                                    -3 3 -52 c3 -45 6 -53 23 -53 19 0 19 6 17 127 -3 112 -5 128 -20 131 -15 3
                                    -18 -5 -18 -52z"/>
                                    <path d="M436 275 c-9 -25 -7 -218 3 -234 5 -8 16 -11 25 -8 14 6 16 23 14
                                    129 -3 104 -5 123 -19 126 -9 2 -19 -4 -23 -13z"/>
                                    <path d="M530 270 c0 -14 7 -20 23 -20 24 0 57 -27 57 -47 0 -17 -35 -43 -58
                                    -43 -36 0 -26 -32 26 -83 70 -69 118 -60 51 9 l-31 32 26 25 c54 54 16 147
                                    -60 147 -27 0 -34 -4 -34 -20z"/>
                                </g>
                            </svg>
                        </figure>
                    </div>

                    <div className="menu">
                        <nav className="navbar">
                            <ul className="lista-menu">
                                <li className="nav-link"><Link to="/">Home</Link></li>
                                <li className="nav-link"><Link to="/habilidades">Habilidades</Link></li>
                                <li className="nav-link"><Link to="/projetos">Projetos</Link></li>
                                <li className="nav-link"><Link to="/contato">Contato</Link></li>
                            </ul>
                        </nav>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header;
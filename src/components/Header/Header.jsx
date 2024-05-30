import React from "react";
import './style.css';
import '../../global.css'
import { Link } from "react-router-dom";
import logo from "../../assets/logo-menor.png";

function Header() {
    return (
        <div className="header">

            <div className="container">

                <div className="container-header">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>

                    <div className="menu">
                        <nav className="navbar">
                            <ul className="lista-menu">
                                <li className="nav-link"><Link to="/">Home</Link></li>
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
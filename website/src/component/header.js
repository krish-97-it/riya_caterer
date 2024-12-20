import React from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/riya_caterer_logo.webp';


const navbar = () => {
    function closeOffCanvas() {
        if(window.outerWidth < 768){
            document.querySelector("button.navbar-toggler").click();
        }
    }
    return(
        <header>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark navbar-custom-style fixed-top">
                <div className="container-fluid">
                    <div className="brand-logo-section">
                        <img className="brand-logo-img" src={Logo} alt="logo"/>
                        <NavLink className="navbar-brand" to="/" onClick={closeOffCanvas}>Riya Caterer</NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item bottom-border">
                                <NavLink className="nav-link" aria-current="page" to="/" onClick={closeOffCanvas}>Home</NavLink>
                            </li>
                            <li className="nav-item bottom-border">
                                <NavLink className="nav-link" to="/our-service" onClick={closeOffCanvas}>Our Services</NavLink>
                            </li>
                            <li className="nav-item bottom-border">
                                <NavLink className="nav-link" to="/our-packages" onClick={closeOffCanvas}>Packeges</NavLink>
                            </li>
                            <li className="nav-item bottom-border">
                                <NavLink className="nav-link" to="/gallery" onClick={closeOffCanvas}>Gallery</NavLink>
                            </li>
                            <li className="nav-item bottom-border">
                                <NavLink className="nav-link" to="/reviews" onClick={closeOffCanvas}>Reviews</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact-us" onClick={closeOffCanvas}>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </header>
    )
}

export default navbar;
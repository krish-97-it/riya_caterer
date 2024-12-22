import React, {useState} from "react";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/riya_caterer_logo.webp';
import HamburgerIcon from "../assets/images/hamburger.svg";


const Navbar = () => {
    function closeOffCanvas() {
        if(window.outerWidth < 768){
            document.querySelector("button.navbar-toggler").click();
        }
    }

    const [isActive, setActive] = useState(null);
    function highlightActiveItem(e){
        let eleid       = e.target.id;
        if(eleid){
            setActive(eleid);
        }
        closeOffCanvas();
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
                        {/* <span className="navbar-toggler-icon"></span> */}
                        <img src={HamburgerIcon} alt="toggle" style={{width:"36px", paddingTop:"3px"}}/>
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
                            <li className="nav-item bottom-border">
                                <NavLink className="nav-link" to="/contact-us" onClick={closeOffCanvas}>Contact Us</NavLink>
                            </li>
                        </ul>
                        <div className="right-align-nav-elements">
                            <div className="dropdown" style={{textAlign:"left"}}>
                                <button className="btn btn-secondary dropdown-toggle profile-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft:"0px", paddingRight:"0px", display:"flex", alignItems:"center"}}>
                                    <i className="fa fa-user" style={{fontSize:"28px"}}></i>
                                    <span style={{paddingLeft:"10px"}}>Sign In</span>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-start custom-dropdown-menu-style">
                                    <div className="triangle-up"></div>
                                    <li><NavLink className="dropdown-item-custom-style" id="dropdown-one" to="/my-profile" onClick={(e)=>{highlightActiveItem(e)}} dropdown-item-active={(isActive === 'dropdown-one')?"true":"false"}>My Profile</NavLink></li>
                                    <li><NavLink className="dropdown-item-custom-style" id="dropdown-two" to="/my-profile/booking-history" onClick={(e)=>{highlightActiveItem(e)}} dropdown-item-active={(isActive === 'dropdown-two')?"true":"false"}>Booking History</NavLink></li>  
                                    <li><button className="dropdown-item dropdown-item-custom-style" type="button">Sign Out</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
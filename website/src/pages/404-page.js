import React from "react";
import sadSvg from '../assets/sad_face_logo.svg';
import { NavLink } from "react-router-dom";
import GoToTop from "../component/go-to-top";


function Errorpage() {
  return (
    <div className="app-body">
        <div className="main-content container">
            <div className="error-page-msg-section">
                <div className="sad-face-icon">
                    <img src={sadSvg} alt="error"/>
                </div>
                <h1>404 Error !!</h1>
                <h3>Page not found</h3>
                <div className="mt-2">
                    <NavLink to="/" type="button" className="btn btn-primary">Go Back</NavLink>
                </div>
            </div>
        </div>
        <GoToTop/>
    </div>
  );
}

export default Errorpage;

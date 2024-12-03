import React from "react";
import { NavLink } from "react-router-dom";
import {ReactTyped} from 'react-typed';
import GoogleReviews from "../component/google-review-widget";

export default function Homepage(){
    return(
        <div className="app-body">
            <div className="main-content homepage-body">
                <div className="introduction-banner">
                        <div className="dark-opacity">
                            <div className="intro-section">
                                <p className="intro-heading typewriter">
                                    <h2 className="type-txt">
                                        <ReactTyped
                                            strings={["Hello!!", "নমস্কার!!", "नमस्ते!!"]}
                                            typeSpeed={150}
                                            loop
                                            backSpeed={50}
                                            cursorChar="|"
                                            showCursor={true}
                                        />
                                    </h2>
                                </p>
                                <div className="container intro-txt">
                                    <p>Welcome to <b>RIYA CATERER.</b></p>
                                    <p className="intro-qote">&nbsp;Looking for a perfect food catering service with a affordable cost range?&nbsp;</p>
                                    <p className="intro-qote-two">Look no further! You are in correct place. Be it a large, mid or small sized event, Riya Caterer serves Good Food for different kind of occassions with both vegiterian and non-vegiterian options.</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="homepage-service-section">
                    <div className="container">
                        <h3>Spice Up Your Occassions</h3>
                        <div className="our-service-card">
                            <div className="card-group">
                                <div className="card">
                                    <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/wedding.webp" className="card-img-top" alt="Wedding"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Wedding Event</h5>
                                        <p className="card-text">Skilled Front-end Developer with more than 3 years of experience in designing, developing and maintaining responsive web applications.</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/corporate-party.webp" className="card-img-top" alt="Corporate"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Corporate Event</h5>
                                        <p className="card-text">Experinced in creating and managing web applications with WordPress CMS using PHP, MySQL, HTML, CSS, JS</p>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/family-functions.webp" className="card-img-top" alt="Family"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Family Functions</h5>
                                        <p className="card-text">Builts responsive, browser based, single page web applications using React Js, Node Js, Express Js and MongoDb.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="check-all-service-btn-section">
                                <NavLink to="/our-service">Check all services</NavLink> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-us-section">
                    <div className="container">
                        <h3>Why do you choose us?</h3>
                        <div className="row choose-us-txt-banner">
                            <div className="col-lg-6 why-txt-section">
                                <p><span className="badge">1</span><span className="txt">Good Quality Food</span></p>
                                <p><span className="badge">2</span><span className="txt">Proper Management</span></p>
                                <p><span className="badge">3</span><span className="txt">Affordable Cost</span></p>
                                <p><span className="badge">4</span><span className="txt">Professional chefs & Staffs</span></p>
                                <p><span className="badge">5</span><span className="txt">200+ Food Menu</span></p>
                                <p><span className="badge">6</span><span className="txt">Buffet Style Option</span></p>
                                <p><span className="badge">7</span><span className="txt">Live Counters & Stalls</span></p>
                                <p style={{marginBottom:"0px"}}><span className="badge">8</span><span className="txt">Veg / Non-veg Option</span></p>
                            </div>
                            <div className="col-lg-6 waiter-img-section">
                                <div>
                                    <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/caterer-waiter.webp" alt="caterer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-reviews-section">
                    <div className="container">
                        <h3>Customer Reviews</h3>
                        <GoogleReviews/>
                    </div>
                </div>
                <div className="work-gallery-section">
                    <div className="container gallery-txt-heading">
                        <h3>Glimpse from Services</h3>
                    </div>
                    <div className="container">
                        <div className="image-album-cover">
                            <picture>
                                <source media="(min-width:768px)" srcSet="https://img.perceptpixel.com/pykhlszs/desktop_image.webp"/>
                                <source media="(max-width:767.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/mobile_image.webp"/>
                                <img src="https://img.perceptpixel.com/pykhlszs/mobile_image.webp" className="banner-img" style={{width:"100%", height:"auto"}} alt="order history"/>
                            </picture>
                        </div>
                        <div className="go-to-gallery-btn-section">
                            <NavLink to="/gallery">Go to Gallery</NavLink> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import {ReactTyped} from 'react-typed';
import GoogleReviews from "../component/google-review-widget";
import GoToTop from "../component/go-to-top";
import RedUnderline from "../assets/images/RedUnderline.avif";
import GreenUnderline from "../assets/images/GreenUnderline.avif";
import PurpleUnderline from "../assets/images/PurpleUnderline.avif";

export default function Homepage({getReviewList}){
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
                                    <div className="enquiry-btn-section">
                                        <Link to="/contact-us" className="btn enquiry-btn neon-glow-button">
                                            Free Enquiry Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="homepage-service-section">
                    <div className="gradient-bg">
                        <div className="container">
                            <div className="img-underline-heading">
                                <h3>Spice up your Occassions</h3>
                                <img src={RedUnderline} alt="underline" className="img-underline"/>
                            </div>
                            <div className="our-service-card">
                                <div className="card-group">
                                    <div className="card first-card">
                                        <div className="card-img-body">
                                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/wedding.webp" className="card-img-top" alt="Wedding"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Wedding & Anniversary</h5>
                                            <p className="card-text">Rich the taste of food on your Wedding and Mairage Anniversary with us to make the day more special.</p>
                                        </div>
                                    </div>
                                    <div className="card second-card">
                                        <div className="card-img-body">
                                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/corporate-party.webp" className="card-img-top" alt="Corporate"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Corporate Event</h5>
                                            <p className="card-text">No more worries regarding food on important Meetings or seminar. We cook, deliver and serve on any kind of corporate event.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-img-body">
                                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/family-functions.webp" className="card-img-top" alt="Family"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Family Functions</h5>
                                            <p className="card-text">Make your family functions more special with your near and dear ones without any worries.</p>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-img-body">
                                            <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/get-together.webp" className="card-img-top" alt="Family"/>
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Festivals & Get Together</h5>
                                            <p className="card-text">Celebration will be more special, joyful and big when you feel thge taste of food with us on small, medium and big any kind of event.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="check-all-service-btn-section">
                                    <NavLink to="/our-service">Check all Services</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="why-choose-us-section">
                    <div className="container">
                        <div className="img-underline-heading">
                            <h3>Why do you choose us?</h3>
                            <img src={PurpleUnderline} alt="underline" className="img-underline"/>
                        </div>
                        <div className="card-group choose-us-txt-banner">
                            <div className="card why-choose-us-card">
                                <div className="card-body card-one-body">
                                    <div className="why-txt-section">
                                        <p><span className="badge">1</span><span className="txt">Good Quality Food</span></p>
                                        <p><span className="badge">2</span><span className="txt">Proper Management</span></p>
                                        <p><span className="badge">3</span><span className="txt">Affordable Cost</span></p>
                                        <p><span className="badge">4</span><span className="txt">Professional chefs & Staffs</span></p>
                                        <p><span className="badge">5</span><span className="txt">300+ Food Menu</span></p>
                                        <p><span className="badge">6</span><span className="txt">Live Counters & Stalls</span></p>
                                        <p><span className="badge">7</span><span className="txt">Buffet Style Option</span></p>
                                        <p><span className="badge">8</span><span className="txt">Post Covid Awarness</span></p>
                                        <p><span className="badge">9</span><span className="txt">100+ Successfull Events</span></p>
                                        <p style={{marginBottom:"0px"}}><span className="badge">10</span><span className="txt">4.8+ Ratings on Google</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="card why-choose-us-card">
                                <div className="card-body card-two-body">
                                    <div className="waiter-img-section">
                                        <div className="bg-img-section">
                                            <div className="card-group link-on-img">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <p className="card-text">Send us your Query & get back a call from us</p>
                                                        <Link to="#" className="btn custom-btn-style">Enquiry Now!!</Link>
                                                    </div>
                                                </div>
                                                <div className="card text-center">
                                                    <div className="card-body">
                                                        <p className="card-text">Be updated with quick chat support in Whatsapp</p>
                                                        <Link to="#" className="btn custom-btn-style">Chat with us</Link>
                                                    </div>
                                                </div>

                                                <div className="card text-right">
                                                    <div className="card-body">
                                                        <p className="card-text">Plan Your Menu and get a Cost Estimation.</p>
                                                        <Link to="#" className="btn custom-btn-style">Menu Planner</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-us-btn-section">
                            <NavLink to="/about-us">Know more About us</NavLink> 
                        </div>
                    </div>
                </div>
                <div className="homepage-reviews-section">
                    <div className="container">
                        <h3>Customer Reviews</h3>
                        <GoogleReviews getReviewList={getReviewList}/>
                        <div className="go-to-reviews-btn-section">
                            <NavLink to="/reviews">Check All Reviews</NavLink> 
                        </div>
                    </div>
                </div>
                <div className="work-gallery-section">
                    <div className="container">
                        <div className="img-underline-heading">
                            <h3>Glimpse Of Success</h3>
                            <img src={GreenUnderline} alt="underline" className="img-underline"/>
                        </div>
                        <div className="image-album-cover">
                            <img className="bg-img" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/gallery-bg-img-homepage.webp" alt="gallery-bg"/>
                        </div>
                        <div className="go-to-gallery-btn-section">
                            <NavLink to="/gallery">Go to Gallery</NavLink> 
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop/>
        </div>
    )
}
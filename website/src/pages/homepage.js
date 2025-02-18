import React from "react";
import { Link, NavLink } from "react-router-dom";
import {ReactTyped} from 'react-typed';
import GoogleReviews from "../component/google-review-widget";
import GoToTop from "../component/go-to-top";
// import RedUnderline from "../assets/images/RedUnderline.avif";
// import GreenUnderline from "../assets/images/GreenUnderline.avif";
// import PurpleUnderline from "../assets/images/PurpleUnderline.avif";
import GalleryCarousel from "../component/gallery-carousel";
// import YellowUnderline from "../assets/images/yellowUnderline.webp";
// import BlackUnderline from "../assets/images/greyUnderline.webp";
import Logo from '../assets/images/riya_caterer_logo.webp';
import AOS from 'aos';
// ..
AOS.init();

export default function Homepage({getReviewList, openBookingModal}){
    return(
        <div className="app-body">
            <div className="main-content homepage-body">
                <div className="introduction-banner">
                    <div className="dark-opacity">
                        <div className="intro-section">
                            <p className="intro-heading typewriter">
                                <span className="type-txt">
                                    <ReactTyped
                                        strings={["Hello!!", "নমস্কার!!", "नमस्ते!!"]}
                                        typeSpeed={150}
                                        loop
                                        backSpeed={50}
                                        cursorChar="|"
                                        showCursor={true}
                                    />
                                </span>
                            </p>
                            <div className="container intro-txt">
                                <p className="welcome-caterer">Welcome to <span className="caterer-name">RIYA CATERER</span></p>
                                <div className="intro-qote">
                                    <p className="first-p">Make your special Events</p>
                                    <p className="second-p">more special with Us</p>
                                </div>
                                <p className="intro-qote-two">Do a free Catering Consultation and Book us right now!!</p>
                                <div className="enquiry-btn-section">
                                    <Link to="https://wa.me/+919038335342?text=Hello%21%21" target="_blank" className="btn enquiry-btn-one neon-glow-button">
                                        <span>
                                            Free Consultation
                                        </span>
                                    </Link>
                                    <button className="btn enquiry-btn-two neon-glow-button" onClick={openBookingModal}>
                                        <span>
                                            Book For a Event
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us-section">
                    <div className="container">
                        <img className="homepage-brand-logo" src={Logo} alt="logo"/>
                        <h3>About Us</h3>
                        <p className="first-p mb-1" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="0" data-aos-duration="1000">One of the Fastest growing Caterer from Kolkata </p>
                        <p className="second-p" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-offset="0" data-aos-duration="1500">We offer premium catering services with affordable cost range across different kind of indoor and outdoor events. Experience the Culinary excellence like never before with us.</p>
                    </div>
                </div>
                <div className="our-service-section-wrap">
                    <div className="homepage-service-section">
                        <div className="gradient-bg">
                            <div className="container">
                                <div className="img-underline-heading">
                                    <h3>Spice up your Occassions</h3>
                                    {/* <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/img-underline.webp" alt="underline" className="img-underline"/> */}
                                </div>
                                <div className="our-service-card">
                                    <div className="card-group">
                                        <div className="card first-card" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1500">
                                            <div className="card-img-body">
                                                <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/wedding-event.webp" className="card-img-top" alt="Wedding"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{color:"#698b00"}}>Wedding Events</h5>
                                                <p className="card-text">Rich the taste of food on your Wedding and Mairage Anniversary with us to make the day more special.</p>
                                            </div>
                                        </div>
                                        <div className="card second-card" data-aos="zoom-in" data-aos-offset="25" data-aos-duration="1500">
                                            <div className="card-img-body">
                                                <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/corporate-img.webp" className="card-img-top" alt="Corporate"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{color:"#db2f70"}}>Corporate Event</h5>
                                                <p className="card-text">No more worries regarding food on important Meetings or seminar. We cook, deliver and serve on any kind of corporate event.</p>
                                            </div>
                                        </div>
                                        <div className="card" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1500">
                                            <div className="card-img-body">
                                                <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/serving.webp" className="card-img-top" alt="Family"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{color:"#c56e3e"}}>Family Functions</h5>
                                                <p className="card-text">Make your family functions more special with your near and dear ones without any worries regarding food.</p>
                                            </div>
                                        </div>
                                        <div className="card last-card" data-aos="zoom-in" data-aos-offset="50" data-aos-duration="1500">
                                            <div className="card-img-body">
                                                <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/get-together-img.webp" className="card-img-top" alt="Family"/>
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title" style={{color:"#8e48e7"}}>Festivals & Others</h5>
                                                <p className="card-text">Celebration will be more special, joyful and big when you feel the taste of food with us on small, medium and big any kind of event.</p>
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
                </div>
                <div className="why-choose-us-section">
                    <div className="img-underline-heading">
                        <h3>Why do you choose us?</h3>
                        {/* <img src={PurpleUnderline} alt="underline" className="img-underline"/> */}
                    </div>
                    <div className="section-wrap">
                        <div className="container">
                            <div className="choose-options">
                                <div className="ele ele-one">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="50" data-aos-duration="400" data-aos-delay="0" src="https://img.perceptpixel.com/pykhlszs/indian-cuisine.webp" alt="quality"/>
                                    <p className="mb-0 mt-3"><span className="txt">Good Quality Food</span></p>
                                </div>
                                <div className="ele ele-two">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="50" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/management.webp" alt="manegement"/>
                                    <p className="mb-0 mt-3"><span className="txt">Proper Management</span></p>
                                </div>
                                <div className="ele ele-three">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="100" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/cost-cut.webp" alt="cost"/>
                                    <p className="mb-0 mt-3"><span className="txt">Affordable Cost</span></p>
                                </div>
                                <div className="ele ele-four">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="150" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/caterer-waiter.webp" alt="staffs"/>
                                    <p className="mb-0 mt-3"><span className="txt">Professional chefs & Staffs</span></p>
                                </div>
                                <div className="ele ele-five">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="200" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/many-food.webp" alt="food"/>
                                    <p className="mb-0 mt-3"><span className="txt">300+ Food Menu</span></p>
                                </div>
                                <div className="ele ele-six">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="250" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/live-stalls.webp" alt="counters"/>
                                    <p className="mb-0 mt-3"><span className="txt">Live Counters & Stalls</span></p>
                                </div>
                                <div className="ele ele-seven">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="300" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/homepage-banner-images__1_.webp" alt="buffet"/>
                                    <p className="mb-0 mt-3"><span className="txt">Buffet Style Option</span></p>
                                </div>
                                <div className="ele ele-eight">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="350" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/clean.webp" alt="awarness"/>
                                    <p className="mb-0 mt-3"><span className="txt">Post Covid Awarness</span></p>
                                </div>
                                <div className="ele ele-nine">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-offset="0" data-aos-duration="400" data-aos-delay="400" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/success.webp" alt="success"/>
                                    <p className="mb-0 mt-3"><span className="txt">100+ Successfull Events</span></p>
                                </div>
                                <div className="ele ele-ten">
                                    <img className="rounded-circle ele-img" data-aos="fade-out" data-aos-duration="500" data-aos-delay="450" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/ratings.webp" alt="ratings"/>
                                    <p className="mt-3 mb-0"><span className="txt">4.8+ Ratings on Google</span></p>
                                </div>
                            </div>
                            {/* <div className="card-group choose-us-txt-banner">
                                <div className="card why-choose-us-card">
                                    <div className="card-body card-one-body">
                                        <div className="why-txt-section">
                                            <p className="mb-0 mt-2"><span className="badge">1</span><span className="txt">Good Quality Food</span></p>
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
                                <div className="card why-choose-us-card second-card">
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
                            </div> */}
                            {/* <div className="about-us-btn-section">
                                <NavLink to="/about-us">Know more About us</NavLink> 
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="our-packages-section">
                    <div className="img-underline-heading">
                        <h3>Menu & Packages</h3>
                    </div>
                    <div className="gradient-bg">
                        <div className="section-wrap">
                            <div className="container">
                                <div className="package-cards">
                                    <div className="card-group">
                                        <div className="card first-card" data-aos="rotate-left-custom" data-aos-easing="ease-out-cubic" data-aos-offset="50" data-aos-duration="1500">
                                            <div className="card-header-section">
                                                <p className="header-title"><i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>&nbsp;Silver</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text p-one"><i className="fa fa-star glow"></i>&nbsp;Starts From Rs 500 /- Pax</p>
                                                <p className="card-text p-two"><i className="fa fa-star glow"></i>&nbsp;Upto 20 Food Options</p>
                                                <p className="card-text p-three"><i className="fa fa-star glow"></i>&nbsp;Veg/Non-Veg Flexibility</p>
                                                <p className="card-text p-four"><i className="fa fa-star glow"></i>&nbsp;Minimum Pax required 20</p>
                                                <p className="card-text p-five"><i className="fa fa-star glow"></i>&nbsp;15% off on order 250 pax</p>
                                                <p className="card-text p-six"><i className="fa fa-star glow"></i>&nbsp;Free Delivery within 5km</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted" style={{fontSize:"12px"}}>Terms & Condition included*</small>
                                            </div>
                                        </div>
                                        <div className="card second-card" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-offset="50" data-aos-duration="1500">
                                            <div className="card-header-section">
                                                <p className="header-title"><i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>&nbsp;Economy</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text p-one"><i className="fa fa-star glow"></i>&nbsp;Starts From Rs 350 /- Pax</p>
                                                <p className="card-text p-two"><i className="fa fa-star glow"></i>&nbsp;upto 15 Food Options</p>
                                                <p className="card-text p-three"><i className="fa fa-star glow"></i>&nbsp;Veg/Non-Veg Flexibility</p>
                                                <p className="card-text p-four"><i className="fa fa-star glow"></i>&nbsp;Minimum Pax required 15</p>
                                                <p className="card-text p-five"><i className="fa fa-star glow"></i>&nbsp;5% off on order 100 pax</p>
                                                <p className="card-text p-six"><i className="fa fa-star glow"></i>&nbsp;Free Delivery within 3km</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted" style={{fontSize:"12px"}}>Terms & Condition included*</small>
                                            </div>
                                        </div>
                                        <div className="card third-card" data-aos="rotate-right-custom" data-aos-easing="ease-out-cubic" data-aos-offset="50" data-aos-duration="1500">
                                            <div className="card-header-section">
                                                <p className="header-title"><i className="fa fa-shopping-cart" style={{fontSize:"18px"}}></i>&nbsp;Gold</p>
                                            </div>
                                            <div className="card-body">
                                                <p className="card-text p-one"><i className="fa fa-star glow"></i>&nbsp;Starts From Rs 650 /- Pax</p>
                                                <p className="card-text p-two"><i className="fa fa-star glow"></i>&nbsp;upto 25 Food Options</p>
                                                <p className="card-text p-three"><i className="fa fa-star glow"></i>&nbsp;Veg/Non-Veg Flexibility</p>
                                                <p className="card-text p-four"><i className="fa fa-star glow"></i>&nbsp;Minimum Pax required 30</p>
                                                <p className="card-text p-five"><i className="fa fa-star glow"></i>&nbsp;10% off on order 200 pax</p>
                                                <p className="card-text p-six"><i className="fa fa-star glow"></i>&nbsp;Free Delivery within 7km</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted" style={{fontSize:"12px"}}>Terms & Condition included*</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="go-to-reviews-btn-section">
                                    <NavLink to="/menu-packages">Check All Packages</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="homepage-customer-review">
                    <div className="container">
                        <div className="img-underline-heading">
                            <h3>Customer Reviews</h3>
                            {/* <img src={YellowUnderline} alt="underline" className="img-underline"/> */}
                        </div>
                    </div>
                    <div className="homepage-reviews-section">
                        <div className="opacity-black">
                            <div className="container">
                                <GoogleReviews getReviewList={getReviewList}/>
                                <div className="go-to-reviews-btn-section">
                                    <NavLink to="/reviews">Check All Reviews</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="homepage-gallery-slide-show">
                    <div className="container">
                        <div className="img-underline-heading">
                            <h3>Glimpse Of Success</h3>
                            {/* <img src={GreenUnderline} alt="underline" className="img-underline"/> */}
                        </div>
                    </div>
                    <div className="work-gallery-section">
                        <div className="container">
                            <GalleryCarousel/>
                            <div className="go-to-gallery-btn-section">
                                <NavLink to="/gallery">Go to Gallery</NavLink> 
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <GoToTop/>
        </div>
    )
}
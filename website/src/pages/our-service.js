import React,{useState, useEffect} from "react";
import GoToTop from "../component/go-to-top";
import Loading from "../component/page-loading";
import PlusSymbol from "../assets/images/plus.svg";
// import GreyLine from "../assets/images/GreyLine4.avif";
// import BlackUnderline from "../assets/images/greyUnderline.webp";
import CustomMasonary from "../component/custom-masonary";
// import ForkKnife from "../assets/images/cutlinary-icon.svg";
import FaqSection from "../component/faq-accordion";
import { Link } from "react-router-dom";
import AOS from 'aos';

export default function Service({openBookingModal, openGuidelines}){
    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
        // Simulate loading for 2 seconds
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return(
        <div className="app-body">
            <div className="main-content">
                {
                    isLoading ? (
                        <Loading />
                    ) : (
                        <div className="service-page-body">
                            <div className="service-banner-section">
                                <div className="container">
                                    <div className="row">
                                        <Link type="button" onClick={openBookingModal}>
                                            <picture>
                                                <source media="(min-width:650px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/service-page-banner.webp"/>
                                                <source media="(max-width:649.98px)" srcSet="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-service-page-banner.webp"/>
                                                <img src="https://img.perceptpixel.com/pykhlszs/riya_caterer/mob-service-page-banner.webp" className="banner-img" style={{width:"100%", height:"auto"}} alt="order history"/>
                                            </picture>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="service-type-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="img-underline-heading">
                                            <h3>Type Of Services</h3>
                                        </div>
                                        <p className="service-intro mb-0" data-aos="fade-in" data-aos-offset="50" data-aos-duration="1000">
                                            We are flexible to serve Food for any kind of indoor and outdoor event as per your Requirements. We provide two types of Services - one is Cooking & Serving on site at your event's location and another one is Cooking at our Kitchen and Delivery at your event location.
                                        </p>
                                        <div className="card-group service-type-card-group" style={{flexDirection:"column", display:"flex"}}>
                                            <div className="card service-type-card card-one" data-aos="zoom-in-left" data-aos-offset="50" data-aos-duration="1500">
                                                <div className="card-body service-type-card-body">
                                                    <h5 className="card-title">Cooking & Serving</h5>
                                                    <div className="card-group">
                                                        <div className="card">
                                                            <div className="card-img-section">
                                                                <img className="card-img-top service-type-img" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/cooking-img.webp" alt="cook"/>
                                                            </div>
                                                            <div className="card-body">
                                                                <p className="card-text service-type-p">Cooking by Professional Chefs on spot at your event's Location.</p>
                                                            </div>
                                                        </div> 
                                                        <div className="straight-line"></div>
                                                        <div className="plus-symbol"><img src={PlusSymbol} className="" alt="plus"/></div>
                                                        <div className="card">
                                                            <img className="card-img-top service-type-img" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/serving.webp" alt="serv"/>
                                                            <div className="card-body">
                                                                <p className="card-text service-type-p">Serving Food by experienced Staffs with proper management.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <button to="/contact-us" className="btn service-book-btn">
                                                        Menu Planner
                                                    </button> */}
                                                </div>
                                            </div>
                                            <div className="card service-type-card card-two" data-aos="zoom-in-right" data-aos-offset="50" data-aos-duration="1500">
                                                <div className="card-body service-type-card-body">
                                                    <h5 className="card-title">Cooking & Delivery</h5>
                                                    <div className="card-group">
                                                        <div className="card">
                                                            <img className="card-img-top service-type-img" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/cooking-img-two.webp" alt="cook"/>
                                                            <div className="card-body">
                                                                <p className="card-text service-type-p">Cooking by Professional Chefs as per requirement for the event.</p>
                                                            </div>
                                                        </div>
                                                        <div className="straight-line"></div>
                                                        <div className="plus-symbol"><img src={PlusSymbol} className="" alt="plus"/></div>
                                                        <div className="card">
                                                            <img className="card-img-top service-type-img" src="https://img.perceptpixel.com/pykhlszs/riya_caterer/untitled-design-675a181a01631.webp" alt="delivery"/>
                                                            <div className="card-body">
                                                                <p className="card-text service-type-p">Cooked Food will be delivered on the event at the correct time.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <button to="/contact-us" className="btn service-book-btn">
                                                        Menu Planner
                                                    </button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="service-event-section">
                                <div className="bg-opacity">
                                    <div className="container">
                                            <div className="img-underline-heading">
                                                <h3>Services On Events</h3>
                                                {/* <img src={BlackUnderline} alt="underline" className="img-underline"/> */}
                                            </div>
                                            <p className="service-intro mb-0" data-aos="fade-in" data-aos-offset="50" data-aos-duration="1000">
                                                We serve Food on any kind of indoor and outdoor events as per your requirement and need. We are comfortable and flexible to serve food across any range of event such as small, mideum, large from 10 to 1000+ numbers of guest.
                                            </p>
                                            <CustomMasonary/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <FaqSection openGuidelines={openGuidelines} openBookingModal={openBookingModal} showAllItem='false'/>
                            </div>
                        </div>
                    )
                }
            </div>
            <GoToTop/>
        </div>
    )
}
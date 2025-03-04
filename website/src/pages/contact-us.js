import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Loading from "../component/page-loading";
import GoToTop from "../component/go-to-top";
import FbIcon from "../assets/images/social-media-icons/facebookIcon.svg";
import WpIcon from "../assets/images/social-media-icons/whatsappIcon.svg";
import GmailIcon from "../assets/images/social-media-icons/gmailIcon.svg";
import phoneIcon from "../assets/images/social-media-icons/phoneIcon.svg";
// import TouchIcon from "../assets/images/touch-icon.webp";
import { ContactForm } from "../component/contact-form";
import BlackUnderline from "../assets/images/greyUnderline.webp";
import AOS from 'aos';
// ..
AOS.init();
 
export default function Contact({packageDetails, openGuidelines, openBookingModal}){
    // Set loading state to true initially
    const [isLoading, setLoading] = useState(true);

    // Page will load after 2 seconds
    useEffect(() => {
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
                        <div className="contact-us-page-body">
                            <div className="contact-us-banner">
                                <div className="container">
                                    <div className="transparent-bg">
                                        <p>
                                            Let's Celebrate and make your event more special together.
                                        </p>
                                        <h1>Riya Caterer</h1>
                                        <p>
                                            Contact with Us Now!
                                        </p>
                                        <div className="enquiry-btn-section">
                                            <Link to="https://wa.me/+919038335342?text=Hello%21%21" target="_blank" className="btn enquiry-btn-two neon-glow-button">
                                                <span>
                                                    Quick Chat With Us
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="way-of-connect-section">
                                <div className="img-underline-heading">
                                    <h3>Get in Touch</h3>
                                    <img src={BlackUnderline} alt="underline" className="img-underline"/>
                                </div>
                                <div className="way-of-connect">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-3 col-sm-6 contact-card-section">
                                                <div data-aos="flip-right-fixed" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-quad" data-aos-mirror="false"  data-aos-once="true" className="card h-100 card-one">
                                                    <div className="card-img-section">
                                                        <img src={phoneIcon} className="card-img-top contact-icon-img" alt="..."/>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Talk To Us</h5>
                                                        <div className="card-description">
                                                            <p className="card-text">Discuss your requirement over phone call</p>
                                                            <small className="text-muted">
                                                                <span>7 days a week</span>
                                                                <span>( 9am-10pm )</span>
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link className="btn call-us-btn" to="tel:+919038335342">Call Us!</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 contact-card-section">
                                                <div data-aos="flip-right-fixed" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-quad" data-aos-mirror="false"  data-aos-once="true" className="card h-100 card-two">
                                                    <div className="card-img-section">
                                                        <img src={WpIcon} className="card-img-top contact-icon-img" alt="..."/>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Chat On Whatsapp</h5>
                                                        <div className="card-description">
                                                            <p className="card-text">Let's have a quick Chat on Whatsapp</p>
                                                            <small className="text-muted">
                                                                <span>7 days a week </span>
                                                                <span>( 8am-11pm )</span>
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link className="btn whatsapp-chat-btn" to="https://wa.me/+919038335342?text=Hello%21%21" target="_blank">Chat with us</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 contact-card-section">
                                                    <div data-aos="flip-right-fixed" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-quad" data-aos-mirror="false"  data-aos-once="true" className="card h-100 card-three">
                                                        <div className="card-img-section">
                                                            <img src={FbIcon} className="card-img-top contact-icon-img" alt="..."/>
                                                        </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Connect On Facebook</h5>
                                                        <div className="card-description">
                                                            <p className="card-text">We have our page on Facebook, text us there.</p>
                                                            <small className="text-muted">
                                                                <span>7 days a week </span>
                                                                <span>( 9am-10pm )</span>
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        {/* <button className="btn fb-connect-btn">
                                                            <span>Text Us </span>
                                                            <img src={TouchIcon} alt="click" style={{width:"24px", height:"24px"}}/>
                                                        </button> */}
                                                        <Link className="btn fb-connect-btn" to="https://www.facebook.com/share/1GLSHRAiud/">Text Us</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-sm-6 contact-card-section">
                                                    <div data-aos="flip-right-fixed" data-aos-duration="1500" data-aos-offset="100" data-aos-easing="ease-in-quad" data-aos-mirror="false"  data-aos-once="true" className="card h-100 card-four">
                                                        <div className="card-img-section">
                                                            <img src={GmailIcon} className="card-img-top contact-icon-img" alt="..."/>
                                                        </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Email Us</h5>
                                                        <div className="card-description">
                                                            <p className="card-text">You can send us mail on - riyacaterer19@gmail.com</p>
                                                            <small className="text-muted">
                                                                <span>7 days a week </span>
                                                                <span>( Any time )</span>
                                                            </small>
                                                        </div>
                                                    </div>
                                                    <div className="card-footer">
                                                        <Link className="btn btn-primary send-email-btn" to="mailto:riyacaterer19@gmail.com">Drop Mail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="send-us-your-query-form">
                                <div className="img-underline-heading">
                                    <h3>Send Us Your Query</h3>
                                    <img src={BlackUnderline} alt="underline" className="img-underline"/>
                                </div>
                                <div className="contact-form-wrap" data-aos="zoom-in" data-aos-duration="1500">
                                    <div className="container">
                                        <div className="form-description">
                                            <p className="mb-0">Send us your message or query with your requirement and get a response back soon!</p>
                                        </div>
                                        <div className="contact-us-form-section">
                                            <ContactForm/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="our-address-section">
                                <div className="img-underline-heading">
                                    <h3>Our Address</h3>
                                    <img src={BlackUnderline} alt="underline" className="img-underline"/>
                                </div>
                                <div className="container">
                                    <div className="contact-us-map-section" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
                                        <iframe title="address-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0965179342793!2d88.38465977627244!3d22.61287067946289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d82587de72f%3A0xe0805472c836baff!2sRiya%20Caterers!5e0!3m2!1sen!2sin!4v1735387584841!5m2!1sen!2sin" width="600" height="450" style={{border:"0", borderRadius:"12px", width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <GoToTop/>
        </div>
    )
}
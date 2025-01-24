import React from "react";
import { Link } from "react-router-dom";
import CustomChatBot from "./chat-bot";
import ProcessGuidlines from "./process-guidlines";
import chatIcon from "../assets/images/chat_icon_three.png";
import { HashLink } from 'react-router-hash-link';

export default function Footer({openBookingModal, showGuidelinesPopup, openGuidelines, closeGuidelines, showChatBox, openChatBox, closeChatBox, msgInputChange, sendUserMsgInput, msgInput, chat, doTask, lastMsg}){
    return(
        <footer className="text-center text-lg-start bg-body-tertiary text-muted footer-custom-style">
            <section className="border-bottom pt-2 pb-1">
                <div className="container text-center text-md-start">
                    <div className="row pt-3">
                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Riya Caterer
                            </h6>
                            <p>
                                We offer premium catering services with affordable cost range for any kind of indoor and outdoor events.
                            </p>
                            <div className="mt-2">
                                <div className="fw-bold mb-2">
                                    <span>Follow Us On:</span>
                                </div>
                                <div className="follow-us-links">
                                    <Link to="https://www.facebook.com/people/Riya-caterers/100091846194256/?mibextid=ZbWKwL" target="_blank" className="me-4">
                                        <i className="fab fa-facebook-f" style={{fontSize:"15px"}}></i>
                                    </Link>
                                    <Link to="https://www.instagram.com/riya.caterer/profilecard/?igsh=MTJndTRlYnBwcDZuNw%3D%3D" target="_blank" className="me-4">
                                        <i className="fab fa-instagram" style={{fontSize:"18px", paddingTop:"3px"}}></i>
                                    </Link>
                                    <Link to="https://wa.me/+919038335342" className="me-4">
                                        <i class="fa-brands fa-youtube" style={{fontSize:"18px", paddingTop:"3px"}}></i>
                                    </Link>
                                    <Link to="https://maps.app.goo.gl/DN9Dzxy5EJeiSF4k9" target="_blank" className="">
                                        <i className="fab fa-google" style={{fontSize:"15PX", paddingTop:"3px"}}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Servives
                            </h6>
                            <p>
                                <HashLink to="/menu-packages#exploremenu" className="text-reset">Explore Menu</HashLink>
                            </p>
                            <p>
                                <Link href="#!" className="text-reset">Cost Estimator</Link>
                            </p>
                            <p>
                                <Link onClick={openBookingModal} className="text-reset">Booking Form</Link>
                            </p>
                            <p>
                                <Link to="https://maps.app.goo.gl/XiLAWsCwCtBJbtsr5" className="text-reset" target="_blank">Find Us</Link>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Useful links
                            </h6>
                            <p>
                                <Link to="/track-booking" className="text-reset">Track Booking</Link>
                            </p>
                            <p>
                                <Link type="btn" className="text-reset" onClick={openGuidelines}>Work Flow</Link>
                            </p>
                            <p>
                                <Link to="/faq" className="text-reset">FAQs</Link>
                            </p>
                            <p>
                                <Link onClick={openChatBox} className="text-reset">Help</Link>
                            </p>
                        </div>
                       
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                            <p><i className="fa fa-home me-3"></i>Paikpara, Kolkata</p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                riyacaterer19@gmail.com
                            </p>
                            <p><i className="fa fa-phone me-3"></i>+919038335342</p>
                            <p><i className="fab fa-whatsapp-square me-3" style={{fontSize:"19px"}}></i>+919038335342</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center footer-copyright-section p-2" style={{backgroundColor: "rgb(0 0 0)"}}>
                © 2021 Copyright: 
                <Link className="text-reset fw-bold" href="https://https://riya-caterer.onrender.com/"> Riya Caterer</Link>
            </div>
            <div className="chat-bot-icon-section">
                {
                    (showChatBox === 'show')?
                        <button onClick={closeChatBox} className="close-btn">
                            <span>
                                <i className="fa fa-close" style={{fontSize:"36px", color:"white"}}></i>
                            </span>
                        </button>
                    :
                    <button onClick={openChatBox}>
                        <span>
                            <img src={chatIcon} alt="chat bot"></img>
                        </span>
                    </button>
                }
            </div>

            <ProcessGuidlines showGuidelinesPopup={showGuidelinesPopup} showChatBox={showChatBox} closeGuidelines={closeGuidelines}/>
            <CustomChatBot showChatBox={showChatBox} closeChatBox={closeChatBox} openBookingModal={openBookingModal} msgInputChange={msgInputChange} sendUserMsgInput={sendUserMsgInput} msgInput={msgInput} chat={chat} doTask={doTask} lastMsg={lastMsg}/>
        </footer>
    )
}
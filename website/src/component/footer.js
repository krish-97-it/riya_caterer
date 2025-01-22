import React from "react";
import CustomChatBot from "./chat-bot";
import ProcessGuidlines from "./process-guidlines";
import chatIcon from "../assets/images/chat_icon_three.png";

export default function Footer({openBookingModal, showGuidelinesPopup, openGuidelines, closeGuidelines, showChatBox, openChatBox, closeChatBox, msgInputChange, sendUserMsgInput, msgInput, chat, doTask, lastMsg}){
    return(
        <footer className="text-center text-lg-start bg-body-tertiary text-muted footer-custom-style">
            <section className="border-bottom">
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
                                <div>
                                    <a href="https://www.facebook.com/people/Riya-caterers/100091846194256/?mibextid=ZbWKwL" target="_blank" className="me-4">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://maps.app.goo.gl/DN9Dzxy5EJeiSF4k9" target="_blank" className="me-4">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="https://www.instagram.com/riya.caterer/profilecard/?igsh=MTJndTRlYnBwcDZuNw%3D%3D" target="_blank" className="me-4">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="" className="">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Servives
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Explore Menu</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Cost Estimator</a>
                            </p>
                            <p>
                                <a onClick={openBookingModal} className="text-reset">Booking Form</a>
                            </p>
                            <p>
                                <a href="https://maps.app.goo.gl/XiLAWsCwCtBJbtsr5" className="text-reset">Find Us</a>
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Useful links
                            </h6>
                            <p>
                                <a href="/track-booking" className="text-reset">Track Booking</a>
                            </p>
                            <p>
                                <a type="btn" className="text-reset" onClick={openGuidelines}>Work Flow</a>
                            </p>
                            <p>
                                <a href="/faq" className="text-reset">FAQs</a>
                            </p>
                            <p>
                                <a onClick={openChatBox} className="text-reset">Help</a>
                            </p>
                        </div>
                       
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
                            <p><i className="fa fa-home me-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fa fa-envelope me-3"></i>
                                info@example.com
                            </p>
                            <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center footer-copyright-section p-2" style={{backgroundColor: "rgb(0 0 0)"}}>
                © 2021 Copyright: 
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> riya-caterer.com</a>
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
import React from "react";
import { Link } from "react-router-dom";

const FaqSection = ({openGuidelines,openBookingModal,showAllItem}) => {
    return(
        <div className="container mt-4 mb-5">
            <div className="img-underline-heading">
                <h3 className="faq-section-heading" style={{color:"black"}}>Frequently Ask Questions</h3>
            </div>
            <div className="accordion accordion-flush faq-accordion" id="FaqAccordionExample">
                <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            How to book us?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" >
                        <div className="accordion-body">
                            <p><u>Booking us for your event is so easy. There are two ways you can go - </u></p>
                            <p>1. Filling your Basic Required Details & Requirements  by own</p>
                            <p>2. Sharing your Basic Required Details & Requirements  by calling to us</p>
                            <br></br>
                            <p><u>For Filling Booking Form by own, follow the below steps:</u></p>
                            <ul>
                                <li>Read Process & Guidelines or you can skip this section</li>
                                <li>Fill your basic details like name, email, mobile no, address. Then click on next button</li>
                                <li>Fill Required details regarding your bookings like - event name, service type, menu, event location etc.Then click on submit and confirm booking</li>
                                <li>After successfull booking, a booking id will be share with you in your screen. Copy it or take a screenshot</li>
                                <li>In sometimes within few hours you will get a call from us</li>
                            </ul>
                            <button className="btn btn-primary" onClick={openBookingModal}>Booking Form</button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How to track your Booking?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" >
                        <div className="accordion-body">
                            <p>You can track your existing booking with with the booking Id. Hence you can track booking history by searching with mobile number & name also</p>
                            <Link className="btn btn-primary" to="/track-booking">Track Booking</Link>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How do we work?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" >
                        <div className="accordion-body">
                            <p>We work with a smooth process from the very begining and help our customer to have the best experience in taste. You can check how we work usally from begining to the end of a succesfull event</p>
                            <button className="btn btn-primary" onClick={openGuidelines}>View Guidlines</button>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How to cancel booking?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" >
                        <div className="accordion-body">
                            <p><u>To Cancel Booking. There are two ways you can go - </u></p>
                            <p>1. Cancel your booking by calling us</p>
                            <p>2. By filling up form in contact us page</p>
                            <br></br>
                            <p><u>To cancel your booking by filling up form, follow the below steps-</u></p>
                            <ul>
                                <li>Go to contact us page&nbsp;
                                    <Link className="btn btn-primary" to="/contact-us">Click here</Link>
                                </li>
                                <li>Scroll down to Send Query form section</li>
                                <li>Fill the required details</li>
                                <li>Choose "Query about existing booking" in query type</li>
                                <li>choose time slot to get a call back</li>
                                <li>Submit form</li>
                                <li>You will get a call with in 24 hours, where you can request to cancel your booking</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Is there minimum limit of Plate Count?
                    </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" >
                        <div className="accordion-body">
                            <p>Minimum Booking or Order Plate Count is 15 and there is no limit in maximum booking or order plate count.</p>
                        </div>
                    </div>
                </div>
                {
                    (showAllItem === 'true')?
                    <>
                         <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                What is the Advanced amount for booking?
                            </button>
                            </h2>
                            <div id="collapseSix" className="accordion-collapse collapse" >
                                <div className="accordion-body">
                                    <p>Token money for booking is Rs. 5000 for the total booking amount which is more than more than 20000 and Rs. 3000 where total booking amount is less than 20000</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                What is the Last date to change or update menu of my booking?
                            </button>
                            </h2>
                            <div id="collapseSeven" className="accordion-collapse collapse" >
                                <div className="accordion-body">
                                    <p>You can change menu of your event maximum 3days prior of your event date.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                Is advanced amount is refundable?
                            </button>
                            </h2>
                            <div id="collapseEight" className="accordion-collapse collapse" >
                                <div className="accordion-body">
                                    <p>No token money is not refundable</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                What is the last date of cancelation?
                            </button>
                            </h2>
                            <div id="collapseNine" className="accordion-collapse collapse" >
                                <div className="accordion-body">
                                    <p>All though you can cancel it before paying token money, cancelation period should be closed before 10 days of the main event</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item mb-2" data-aos="fade-up" data-aos-offset="50" data-aos-duration="500">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                How to Change or update my booking?
                            </button>
                            </h2>
                            <div id="collapseTen" className="accordion-collapse collapse" >
                                <div className="accordion-body">
                                    <p><u>To Change or Update Booking. There are two ways you can go - </u></p>
                                    <p>1. you have to call us to change / update menu</p>
                                    <p>2. By filling up form in contact us page</p>
                                    <br></br>
                                    <p><u>To change / update your booking by filling up form, follow the below steps-</u></p>
                                    <ul>
                                        <li>Go to contact us page&nbsp;
                                            <Link className="btn btn-primary" to="/contact-us">Click here</Link>
                                        </li>
                                        <li>Scroll down to Send Query form section</li>
                                        <li>Fill the required details</li>
                                        <li>Choose "Query about existing booking" in query type</li>
                                        <li>choose time slot to get a call back</li>
                                        <li>Submit form</li>
                                        <li>You will get a call with in 24 hours, where you can request to change/update your booking</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <Link to="/faq" className="btn btn-linght" style={{border:"2px solid grey", width:"120px", marginTop:"15px"}}>View All</Link>
                }
            </div>
        </div>
    )
}
export default FaqSection
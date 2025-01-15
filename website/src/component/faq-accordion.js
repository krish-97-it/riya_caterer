import React from "react";

const FaqSection = ({openGuidelines,openBookingModal}) => {
    return(
        <div className="container mt-4 mb-5">
            <div className="img-underline-heading">
                <h3 className="faq-section-heading" style={{color:"black"}}>Frequently Ask Question</h3>
            </div>
            <div className="accordion accordion-flush faq-accordion" id="FaqAccordionExample">
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="" aria-controls="collapseOne">
                            How to book us?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#FaqAccordionExample">
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
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How to track your Booking?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#FaqAccordionExample">
                        <div className="accordion-body">
                            <p>You can track your existing booking with with the booking Id. Hence you can track booking history by searching with mobile number & name also</p>
                            <p>Search a booking</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How do we work?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#FaqAccordionExample">
                        <div className="accordion-body">
                            <p>We work with a smooth process from the very begining and help our customer to have the best experience in taste. You can check how we work usally from begining to the end of a succesfull event</p>
                            <button className="btn btn-primary" onClick={openGuidelines}>View Guidlines</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FaqSection
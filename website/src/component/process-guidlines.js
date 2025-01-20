import React from "react";

export default function ProcessGuidlines({showGuidelinesPopup, closeGuidelines}){
    return(

        <div className="guidelines-modal" id="guidelinesModal" show-modal={showGuidelinesPopup}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={{justifyContent:"right"}}>
                        <button type="button" className="close" onClick={closeGuidelines}>X</button>
                    </div>
                    <div className="modal-body" style={{display:"flex", justifyContent:"center", padding:"15px 14px"}}>
                        <div className="steps-info-heading">
                            <h3>
                                <span className="booking-heading">
                                    <span>Booking</span>
                                    <i className="fas fa-arrows-alt-h" style={{color:"balck"}}></i>
                                    <span>Serving</span>
                                </span>
                                <span className="mini-heading">Guidlines & Process</span>
                            </h3>
                            <div className="card-group">
                                <div className="steps-points card mt-5">
                                    <div className="step-icon-wrap">
                                        <i className="fab fa-wpforms step-icon"></i>
                                    </div>
                                    <div className="step-description card-body" id="0" >
                                        <h5 className="card-title">Filling & Submit Form</h5>
                                        <p className="mb-0 card-text">Fill your basic information and requirement details like menu, event location etc.</p>
                                    </div>
                                    <i className="fas fas fa-share move-next-icon"></i>
                                </div>
                            
                                <div className="steps-points card mt-5">
                                    <div className="step-icon-wrap">
                                        <i className="fa fa-phone step-icon"></i>
                                    </div>
                                    <div className="step-description card-body" id="1">
                                        <h5 className="card-title">Discuss & Finalise Requirement</h5>
                                        <p className="mb-0 card-text">One to One discussion and finalization your requirement and estimated cost</p>
                                    </div>
                                    <i className="fas fas fa-share move-next-icon"></i>
                                </div>
                            
                                
                                <div className="steps-points card mt-5">
                                    <div className="step-icon-wrap">
                                        <i className="fa fa-credit-card step-icon"></i>
                                    </div>
                                    <div className="step-description card-body" id="2">
                                        <h5 className="card-title">Advanded Payment</h5>
                                        <p className="card-text mb-0">Pay the minimal Token Amount as booking advance to secure your booking more.</p>
                                    </div>
                                    <i className="fas fas fa-share move-next-icon"></i>
                                </div>
                                
                                <div className="steps-points card mt-5">
                                    <div className="step-icon-wrap">
                                        <i className="fa fa-check step-icon"></i>
                                    </div>
                                    <div className="step-description card-body" id="3">
                                        <h5 className="card-title">Final Callback</h5>
                                        <p className="mb-0 card-text">Last updation & changes to your menu two days before main event with 50% payment of estimated cost.</p>
                                    </div>
                                    <i className="fas fas fa-share move-next-icon"></i>
                                </div>
                                <div className="steps-points card mt-5">
                                    <div className="step-icon-wrap">
                                        <i className="fas fa-calendar-alt step-icon"></i>
                                    </div>
                                    <div className="step-description card-body" id="4">
                                        <h5 className="card-title">Event Day</h5>
                                        <p className="card-text mb-0">No more worries!! we will be there at your event at correct time</p>
                                    </div>
                                    <i className="fas fas fa-share move-next-icon"></i>
                                </div>
                                <div className="steps-points card mt-5 mb-0">
                                    <div className="step-icon-wrap">
                                        <i className="fas fa-smile step-icon"></i>
                                    </div>
                                    <div className="step-description card-body" id="5">
                                        <h5 className="card-title">Remaining Payment & Feed back</h5>
                                        <p className="card-text mb-0">Share your feedback & Clear remaining dues</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    )
}